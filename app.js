/**
 * Document Comparison Tool - Main Application
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const docLeft = document.getElementById('doc-left');
    const docRight = document.getElementById('doc-right');
    const compareBtn = document.getElementById('compare-btn');
    const clearBtn = document.getElementById('clear-btn');
    const swapBtn = document.getElementById('swap-btn');
    const comparisonMode = document.getElementById('comparison-mode');
    const ignoreWhitespace = document.getElementById('ignore-whitespace');
    const ignoreCase = document.getElementById('ignore-case');
    const resultsSection = document.getElementById('results-section');
    const diffLeft = document.getElementById('diff-left');
    const diffRight = document.getElementById('diff-right');
    const unifiedDiff = document.getElementById('unified-diff');
    const summary = document.getElementById('summary');
    const copyDiffBtn = document.getElementById('copy-diff-btn');
    const statsLeft = document.getElementById('stats-left');
    const statsRight = document.getElementById('stats-right');
    const fileLeft = document.getElementById('file-left');
    const fileRight = document.getElementById('file-right');

    // Update stats for a textarea
    function updateStats(textarea, statsElement) {
        const text = textarea.value;
        const lines = text ? text.split('\n').length : 0;
        const words = text ? text.trim().split(/\s+/).filter(w => w).length : 0;
        const chars = text.length;
        statsElement.textContent = `Lines: ${lines} | Words: ${words} | Characters: ${chars}`;
    }

    // Attach input listeners for stats
    docLeft.addEventListener('input', () => updateStats(docLeft, statsLeft));
    docRight.addEventListener('input', () => updateStats(docRight, statsRight));

    // File loading
    fileLeft.addEventListener('change', (e) => loadFile(e, docLeft, statsLeft));
    fileRight.addEventListener('change', (e) => loadFile(e, docRight, statsRight));

    function loadFile(event, textarea, statsElement) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                textarea.value = e.target.result;
                updateStats(textarea, statsElement);
            };
            reader.readAsText(file);
        }
    }

    // Clear all
    clearBtn.addEventListener('click', () => {
        docLeft.value = '';
        docRight.value = '';
        resultsSection.style.display = 'none';
        updateStats(docLeft, statsLeft);
        updateStats(docRight, statsRight);
    });

    // Swap documents
    swapBtn.addEventListener('click', () => {
        const temp = docLeft.value;
        docLeft.value = docRight.value;
        docRight.value = temp;
        updateStats(docLeft, statsLeft);
        updateStats(docRight, statsRight);
    });

    // Copy unified diff
    copyDiffBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(unifiedDiff.textContent).then(() => {
            const originalText = copyDiffBtn.textContent;
            copyDiffBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyDiffBtn.textContent = originalText;
            }, 2000);
        });
    });

    // Main comparison function
    compareBtn.addEventListener('click', () => {
        const textA = docLeft.value;
        const textB = docRight.value;

        if (!textA && !textB) {
            alert('Please enter text in at least one document.');
            return;
        }

        const options = {
            ignoreWhitespace: ignoreWhitespace.checked,
            ignoreCase: ignoreCase.checked
        };

        const mode = comparisonMode.value;
        let result;

        switch (mode) {
            case 'word':
                result = Diff.diffWords(textA, textB, options);
                renderWordDiff(result);
                break;
            case 'char':
                result = Diff.diffChars(textA, textB, options);
                renderCharDiff(result);
                break;
            default:
                result = Diff.diffLines(textA, textB, options);
                renderLineDiff(result);
        }

        // Generate unified diff
        const unified = Diff.createUnifiedDiff(textA, textB, options);
        unifiedDiff.textContent = unified || 'No differences found.';

        // Show results
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Render line-by-line diff
    function renderLineDiff(result) {
        const { diff, stats } = result;

        diffLeft.innerHTML = '';
        diffRight.innerHTML = '';

        let leftLineNum = 1;
        let rightLineNum = 1;

        for (const item of diff) {
            if (item.type === 'unchanged') {
                diffLeft.appendChild(createDiffLine(leftLineNum++, item.originalValue, 'unchanged'));
                diffRight.appendChild(createDiffLine(rightLineNum++, item.originalValue, 'unchanged'));
            } else if (item.type === 'removed') {
                diffLeft.appendChild(createDiffLine(leftLineNum++, item.originalValue, 'removed'));
                diffRight.appendChild(createDiffLine('', '', 'empty'));
            } else if (item.type === 'added') {
                diffLeft.appendChild(createDiffLine('', '', 'empty'));
                diffRight.appendChild(createDiffLine(rightLineNum++, item.originalValue, 'added'));
            }
        }

        updateSummary(stats, 'lines');
    }

    // Render word-by-word diff
    function renderWordDiff(result) {
        const { diff, stats } = result;

        let leftHtml = '';
        let rightHtml = '';

        for (const item of diff) {
            const escaped = escapeHtml(item.originalValue);
            if (item.type === 'unchanged') {
                leftHtml += escaped;
                rightHtml += escaped;
            } else if (item.type === 'removed') {
                leftHtml += `<span class="diff-removed">${escaped}</span>`;
            } else if (item.type === 'added') {
                rightHtml += `<span class="diff-added">${escaped}</span>`;
            }
        }

        diffLeft.innerHTML = `<div class="word-diff">${leftHtml || '<em>Empty</em>'}</div>`;
        diffRight.innerHTML = `<div class="word-diff">${rightHtml || '<em>Empty</em>'}</div>`;

        updateSummary(stats, 'words');
    }

    // Render character-by-character diff
    function renderCharDiff(result) {
        const { diff, stats } = result;

        let leftHtml = '';
        let rightHtml = '';

        for (const item of diff) {
            const escaped = escapeHtml(item.originalValue);
            if (item.type === 'unchanged') {
                leftHtml += escaped;
                rightHtml += escaped;
            } else if (item.type === 'removed') {
                leftHtml += `<span class="diff-removed">${escaped}</span>`;
            } else if (item.type === 'added') {
                rightHtml += `<span class="diff-added">${escaped}</span>`;
            }
        }

        diffLeft.innerHTML = `<div class="char-diff">${leftHtml || '<em>Empty</em>'}</div>`;
        diffRight.innerHTML = `<div class="char-diff">${rightHtml || '<em>Empty</em>'}</div>`;

        updateSummary(stats, 'characters');
    }

    // Create a diff line element
    function createDiffLine(lineNum, content, type) {
        const line = document.createElement('div');
        line.className = `diff-line ${type}`;

        const numSpan = document.createElement('span');
        numSpan.className = 'line-number';
        numSpan.textContent = lineNum;

        const contentSpan = document.createElement('span');
        contentSpan.className = 'line-content';
        contentSpan.textContent = content;

        line.appendChild(numSpan);
        line.appendChild(contentSpan);

        return line;
    }

    // Update summary
    function updateSummary(stats, unit) {
        const total = stats.added + stats.removed + stats.unchanged;
        const changePercent = total > 0 ? Math.round(((stats.added + stats.removed) / total) * 100) : 0;

        summary.innerHTML = `
            <span class="stat added">+${stats.added} ${unit} added</span>
            <span class="stat removed">-${stats.removed} ${unit} removed</span>
            <span class="stat unchanged">${stats.unchanged} ${unit} unchanged</span>
            <span class="stat change-percent">${changePercent}% changed</span>
        `;
    }

    // Escape HTML entities
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
