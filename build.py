#!/usr/bin/env python3
# Build script to assemble the complete index.html

import os

# We'll write the entire file at once
html = []

# Read the existing start that was already written
with open('/home/user/fr_final/index.html', 'r') as f:
    existing = f.read()

# We already have up through the opening <script> tag.
# Now we need to write the complete JS and close the file.
# Let's just rewrite the whole file from scratch for safety.

html.append(existing)

# Now append all the JavaScript
js = r"""
  // ===== RENDER HOME =====
  renderHome() {
    const s = this.data.stats;
    const learned = this.getLearnedCount();
    const acc = this.getAccuracy();
    const due = this.getDueItems();
    const goalPct = Math.min(100, Math.round((s.dailyProgress / Math.max(1, s.dailyGoal)) * 100));
    const accColor = acc >= 80 ? 'var(--success)' : acc >= 60 ? 'var(--warning)' : 'var(--danger)';

    let activitiesHtml = '';
    const recent = this.data.activities.slice(0, 5);
    if (recent.length) {
      activitiesHtml = recent.map(a => {
        const ago = this.timeAgo(a.timestamp);
        const dotColor = a.type === 'quiz' ? 'var(--primary)' : a.type === 'flashcard' ? 'var(--warning)' : 'var(--success)';
        return `<div class="activity-item"><div class="activity-dot" style="background:${dotColor}"></div><div class="activity-text">${this.escHtml(a.description)}${a.score !== null ? ` <span class="text-muted">(${a.score})</span>` : ''}</div><div class="activity-time">${ago}</div></div>`;
      }).join('');
    } else {
      activitiesHtml = '<div class="empty-state text-sm">No activity yet. Start learning!</div>';
    }

    let dueHtml = '';
    if (due.length > 0) {
      dueHtml = `<div class="section-title" style="margin-top:16px">Due for Review (${due.length})</div><div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px">`;
      due.slice(0, 8).forEach(d => {
        const label = d.id.replace(/_/g, ' ').substring(0, 25);
        dueHtml += `<div style="flex-shrink:0;padding:10px 14px;background:var(--card2);border:1px solid var(--border);border-radius:12px;font-size:12px;min-width:100px"><div style="color:var(--text2)">${this.escHtml(label)}</div><div style="color:var(--warning);font-size:10px;margin-top:4px">Strength: ${d.strength}/5</div></div>`;
      });
      dueHtml += '</div>';
    }

    document.getElementById('home-content').innerHTML = `
      <div style="margin-bottom:20px">
        <h1>Bonjour! <span class="streak-flame">${s.streak > 0 ? '\u{1F525}' : ''}</span></h1>
        <p class="text-muted text-sm">${s.streak > 0 ? s.streak + ' day streak - keep it up!' : 'Start your learning streak today!'}</p>
      </div>
      <div class="grid2" style="margin-bottom:16px">
        <div class="card card-glow text-center"><div class="stat-val">${learned}</div><div class="stat-label">Words Learned</div></div>
        <div class="card text-center"><div class="stat-val" style="background:linear-gradient(135deg,#f59e0b,#ef4444);-webkit-background-clip:text;background-clip:text">${s.streak}</div><div class="stat-label">Day Streak</div></div>
        <div class="card text-center"><div class="stat-val" style="-webkit-text-fill-color:${accColor};color:${accColor}">${acc}%</div><div class="stat-label">Accuracy</div></div>
        <div class="card text-center"><div class="stat-val" style="font-size:22px">${this.formatTime(s.totalStudyTime)}</div><div class="stat-label">Time Studied</div></div>
      </div>
      <div class="card" style="margin-bottom:16px">
        <div class="flex justify-between items-center mb-8"><span class="text-sm fw-600">Daily Goal</span><span class="text-xs text-muted">${s.dailyProgress}/${s.dailyGoal} items</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width:${goalPct}%;background:${goalPct >= 100 ? 'var(--success)' : 'var(--primary-g)'}"></div></div>
      </div>
      ${dueHtml}
      <div class="section-title" style="margin-top:16px">Quick Actions</div>
      <div class="grid3" style="margin-bottom:16px">
        <button class="btn btn-primary btn-sm" onclick="App.startQuickQuiz()" style="font-size:12px">Quick Quiz</button>
        <button class="btn btn-outline btn-sm" onclick="App.startFlashcards('all')" style="font-size:12px">Flashcards</button>
        <button class="btn btn-outline btn-sm" onclick="App.showRandomVerb()" style="font-size:12px">Random Verb</button>
      </div>
      <div class="section-title">Recent Activity</div>
      <div class="card">${activitiesHtml}</div>
    `;
  },

  timeAgo(ts) {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + 'm ago';
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return hrs + 'h ago';
    return Math.floor(hrs / 24) + 'd ago';
  },

  showRandomVerb() {
    const verbs = Object.keys(DB);
    this.showVerbDetail(verbs[Math.floor(Math.random() * verbs.length)]);
  },

  // ===== LEARN =====
  learnTab: 'vocabulary',

  renderLearn() {
    const tabsHtml = ['vocabulary','phrases','connectives'].map(t =>
      `<button class="pill ${this.learnTab===t?'active':''}" onclick="App.learnTab='${t}';App.renderLearn()">${t[0].toUpperCase()+t.slice(1)}</button>`
    ).join('');
    const contentHtml = this.learnTab==='vocabulary' ? this.renderVocabCats() : this.learnTab==='phrases' ? this.renderPhraseCats() : this.renderConnCats();
    document.getElementById('learn-content').innerHTML = `
      <h1>Learn</h1>
      <div class="search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" class="search-box" placeholder="Search..." oninput="App.filterLearn(this.value)"></div>
      <div class="pills mb-12">${tabsHtml}</div>
      <div id="learn-list">${contentHtml}</div>`;
  },

  renderVocabCats() {
    if (typeof VOCAB==='undefined') return '<div class="empty-state">No vocabulary data.</div>';
    let h='<div class="grid2">';
    for (const cat in VOCAB) {
      let count=0;
      for (const sub in VOCAB[cat]) { const s=VOCAB[cat][sub]; if(typeof s==='object') count+=Object.keys(s).length; }
      h+=`<div class="cat-card" onclick="App.showVocabCat('${cat}')"><div class="cat-card-title">${cat.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</div><div class="cat-card-count">${count} items</div></div>`;
    }
    return h+'</div>';
  },

  showVocabCat(cat) {
    const cd=VOCAB[cat];
    let h=`<button class="back-btn" onclick="App.renderLearn()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><h2>${cat.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</h2>`;
    for (const sub in cd) {
      if(typeof cd[sub]==='string'||sub==='title') continue;
      h+=`<h3 class="mt-16 mb-8">${sub.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</h3>`;
      for (const en in cd[sub]) {
        const fr=cd[sub][en], id='v_'+cat+'_'+en.substring(0,20).replace(/\W/g,'_');
        h+=`<div class="word-row"><div class="word-fr">${this.escHtml(fr)}</div><div class="word-en">${this.escHtml(en)}</div>${this.audioBtn(fr)}<button class="check-btn ${this.isLearned(id)?'checked':''}" onclick="App.toggleLearned(this,'${id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button></div>`;
      }
    }
    document.getElementById('learn-content').innerHTML=h;
  },

  renderPhraseCats() {
    if (typeof PHRASES==='undefined') return '<div class="empty-state">No phrases data.</div>';
    let h='<div class="grid2">';
    for (const cat in PHRASES) {
      const cd=PHRASES[cat]; let count=0;
      const title=cd.title||cat.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
      for (const sub in cd) { if(sub==='title') continue; if(typeof cd[sub]==='object') count+=Object.keys(cd[sub]).length; }
      h+=`<div class="cat-card" onclick="App.showPhraseCat('${cat}')"><div class="cat-card-title">${title}</div><div class="cat-card-count">${count} phrases</div></div>`;
    }
    return h+'</div>';
  },

  showPhraseCat(cat) {
    const cd=PHRASES[cat];
    const title=cd.title||cat.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
    let h=`<button class="back-btn" onclick="App.renderLearn()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><h2>${title}</h2>`;
    for (const sub in cd) {
      if(sub==='title') continue;
      if(typeof cd[sub]!=='object') continue;
      h+=`<h3 class="mt-16 mb-8">${sub.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</h3>`;
      for (const en in cd[sub]) {
        const fr=cd[sub][en], id='p_'+cat+'_'+en.substring(0,20).replace(/\W/g,'_');
        h+=`<div class="word-row"><div class="word-fr" style="font-size:14px">${this.escHtml(fr)}</div><div class="word-en" style="font-size:12px">${this.escHtml(en)}</div>${this.audioBtn(fr.split('/')[0].trim())}<button class="check-btn ${this.isLearned(id)?'checked':''}" onclick="App.toggleLearned(this,'${id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button></div>`;
      }
    }
    document.getElementById('learn-content').innerHTML=h;
  },

  renderConnCats() {
    if (typeof CONNECTIVES==='undefined') return '<div class="empty-state">No connectives data.</div>';
    let h='<div class="grid2">';
    for (const cat in CONNECTIVES) {
      const c=CONNECTIVES[cat]; const count=c.items?Object.keys(c.items).length:0;
      h+=`<div class="cat-card" onclick="App.showConnCat('${cat}')"><div class="cat-card-title">${c.title}</div><div class="cat-card-count">${count} items</div></div>`;
    }
    return h+'</div>';
  },

  showConnCat(cat) {
    const c=CONNECTIVES[cat];
    let h=`<button class="back-btn" onclick="App.renderLearn()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><h2>${c.title}</h2>`;
    for (const fr in c.items) {
      const en=c.items[fr], id='c_'+fr.substring(0,20).replace(/\W/g,'_');
      h+=`<div class="word-row"><div class="word-fr">${this.escHtml(fr)}</div><div class="word-en">${this.escHtml(en)}</div>${this.audioBtn(fr)}<button class="check-btn ${this.isLearned(id)?'checked':''}" onclick="App.toggleLearned(this,'${id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button></div>`;
    }
    document.getElementById('learn-content').innerHTML=h;
  },

  toggleLearned(btn,id) {
    const item=this.getItem(id);
    if(item.strength>=1){item.strength=0;btn.classList.remove('checked');}
    else{item.strength=1;item.lastReview=Date.now();item.nextReview=Date.now()+86400000;btn.classList.add('checked');}
    this.saveData();
  },

  filterLearn(query) {
    if(!query.trim()){
      document.getElementById('learn-list').innerHTML=this.learnTab==='vocabulary'?this.renderVocabCats():this.learnTab==='phrases'?this.renderPhraseCats():this.renderConnCats();
      return;
    }
    const q=query.toLowerCase();
    let results=[];
    if(this.learnTab==='vocabulary') results=this.getAllVocabItems().filter(i=>i.en.toLowerCase().includes(q)||i.fr.toLowerCase().includes(q));
    else if(this.learnTab==='phrases') results=this.getAllPhraseItems().filter(i=>i.en.toLowerCase().includes(q)||i.fr.toLowerCase().includes(q));
    else results=this.getAllConnectiveItems().filter(i=>i.en.toLowerCase().includes(q)||i.fr.toLowerCase().includes(q));
    let h=results.length===0?'<div class="empty-state text-sm">No results found.</div>':'';
    results.slice(0,50).forEach(r=>{
      h+=`<div class="word-row"><div class="word-fr">${this.escHtml(r.fr)}</div><div class="word-en">${this.escHtml(r.en)}</div>${this.audioBtn((r.fr||'').split('/')[0].trim())}<button class="check-btn ${this.isLearned(r.id)?'checked':''}" onclick="App.toggleLearned(this,'${r.id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button></div>`;
    });
    document.getElementById('learn-list').innerHTML=h;
  },
"""

html.append(js)
with open('/home/user/fr_final/index.html', 'w') as f:
    f.write(''.join(html))
print(f"Written {len(''.join(html))} chars so far")
