// ============================================================
// French Verb Database with Conjugation Engine
// 150+ verbs, 12 tenses, full irregular support
// ============================================================

const VERB_DATA = (() => {
  "use strict";

  // ──────────────────────────────────────────────
  // PERSON LABELS
  // ──────────────────────────────────────────────
  const PERSONS = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

  // ──────────────────────────────────────────────
  // TENSE METADATA
  // ──────────────────────────────────────────────
  const tenseInfo = {
    présent: {
      name: "Présent",
      englishName: "Present",
      description: "Actions happening now or habitually",
      compound: false,
      mood: "indicatif"
    },
    passéComposé: {
      name: "Passé composé",
      englishName: "Present perfect / Simple past",
      description: "Completed past actions",
      compound: true,
      auxiliary: true,
      mood: "indicatif"
    },
    imparfait: {
      name: "Imparfait",
      englishName: "Imperfect",
      description: "Ongoing or habitual past actions, descriptions",
      compound: false,
      mood: "indicatif"
    },
    plusQueParfait: {
      name: "Plus-que-parfait",
      englishName: "Pluperfect",
      description: "Actions completed before another past action",
      compound: true,
      auxiliary: true,
      mood: "indicatif"
    },
    futurSimple: {
      name: "Futur simple",
      englishName: "Simple future",
      description: "Actions that will happen",
      compound: false,
      mood: "indicatif"
    },
    futurAntérieur: {
      name: "Futur antérieur",
      englishName: "Future perfect",
      description: "Actions that will have been completed",
      compound: true,
      auxiliary: true,
      mood: "indicatif"
    },
    conditionnelPrésent: {
      name: "Conditionnel présent",
      englishName: "Present conditional",
      description: "Hypothetical actions, polite requests",
      compound: false,
      mood: "conditionnel"
    },
    conditionnelPassé: {
      name: "Conditionnel passé",
      englishName: "Past conditional",
      description: "Actions that would have happened",
      compound: true,
      auxiliary: true,
      mood: "conditionnel"
    },
    subjonctifPrésent: {
      name: "Subjonctif présent",
      englishName: "Present subjunctive",
      description: "Doubt, emotion, necessity, desire",
      compound: false,
      mood: "subjonctif"
    },
    subjonctifPassé: {
      name: "Subjonctif passé",
      englishName: "Past subjunctive",
      description: "Past actions with doubt, emotion, necessity",
      compound: true,
      auxiliary: true,
      mood: "subjonctif"
    },
    passéSimple: {
      name: "Passé simple",
      englishName: "Simple past (literary)",
      description: "Completed past actions in literary/formal writing",
      compound: false,
      mood: "indicatif"
    },
    impératif: {
      name: "Impératif",
      englishName: "Imperative",
      description: "Commands and requests (tu, nous, vous only)",
      compound: false,
      mood: "impératif",
      persons: ["tu", "nous", "vous"]
    }
  };

  // ──────────────────────────────────────────────
  // CONJUGATION ENGINE
  // ──────────────────────────────────────────────
  const engine = {
    // Regular -ER endings
    er: {
      présent:              ["e", "es", "e", "ons", "ez", "ent"],
      imparfait:            ["ais", "ais", "ait", "ions", "iez", "aient"],
      futurSimple:          ["erai", "eras", "era", "erons", "erez", "eront"],
      conditionnelPrésent:  ["erais", "erais", "erait", "erions", "eriez", "eraient"],
      subjonctifPrésent:    ["e", "es", "e", "ions", "iez", "ent"],
      passéSimple:          ["ai", "as", "a", "âmes", "âtes", "èrent"],
      impératif:            ["e", "ons", "ez"]
    },
    // Regular -IR (2nd group, -issant) endings
    ir: {
      présent:              ["is", "is", "it", "issons", "issez", "issent"],
      imparfait:            ["issais", "issais", "issait", "issions", "issiez", "issaient"],
      futurSimple:          ["irai", "iras", "ira", "irons", "irez", "iront"],
      conditionnelPrésent:  ["irais", "irais", "irait", "irions", "iriez", "iraient"],
      subjonctifPrésent:    ["isse", "isses", "isse", "issions", "issiez", "issent"],
      passéSimple:          ["is", "is", "it", "îmes", "îtes", "irent"],
      impératif:            ["is", "issons", "issez"]
    },
    // Regular -RE endings
    re: {
      présent:              ["s", "s", "", "ons", "ez", "ent"],
      imparfait:            ["ais", "ais", "ait", "ions", "iez", "aient"],
      futurSimple:          ["rai", "ras", "ra", "rons", "rez", "ront"],
      conditionnelPrésent:  ["rais", "rais", "rait", "rions", "riez", "raient"],
      subjonctifPrésent:    ["e", "es", "e", "ions", "iez", "ent"],
      passéSimple:          ["is", "is", "it", "îmes", "îtes", "irent"],
      impératif:            ["s", "ons", "ez"]
    },

    // Avoir conjugations (for compound tenses)
    avoirPrésent:             ["ai", "as", "a", "avons", "avez", "ont"],
    avoirImparfait:           ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    avoirFuturSimple:         ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
    avoirConditionnelPrésent: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
    avoirSubjonctifPrésent:   ["aie", "aies", "ait", "ayons", "ayez", "aient"],

    // Être conjugations (for compound tenses)
    êtrePrésent:              ["suis", "es", "est", "sommes", "êtes", "sont"],
    êtreImparfait:            ["étais", "étais", "était", "étions", "étiez", "étaient"],
    êtreFuturSimple:          ["serai", "seras", "sera", "serons", "serez", "seront"],
    êtreConditionnelPrésent:  ["serais", "serais", "serait", "serions", "seriez", "seraient"],
    êtreSubjonctifPrésent:    ["sois", "sois", "soit", "soyons", "soyez", "soient"],

    /**
     * Get the stem of a regular verb by removing the infinitive ending.
     */
    getStem(infinitive, group) {
      if (group === "er") return infinitive.slice(0, -2);
      if (group === "ir") return infinitive.slice(0, -2);
      if (group === "re") return infinitive.slice(0, -2);
      return infinitive;
    },

    /**
     * Apply stem changes for stem-changing verbs.
     * stemChanges is an object like:
     *   { present: { je: "stem", tu: "stem", ... }, futur: "stem", ... }
     * or with pattern shortcuts:
     *   { present1236: "stem" }  (persons 1,2,3,6 = je,tu,il,ils)
     */
    applyStemChange(baseStem, stemChanges, tense, personIndex) {
      if (!stemChanges) return baseStem;
      const tenseMap = {
        présent: "present",
        imparfait: "imparfait",
        futurSimple: "futur",
        conditionnelPrésent: "conditionnel",
        subjonctifPrésent: "subjonctif",
        passéSimple: "passéSimple"
      };
      const key = tenseMap[tense];
      if (!key) return baseStem;

      // Check for boot pattern shortcut (persons 0,1,2,5 = je,tu,il/elle,ils/elles)
      const bootKey = key + "Boot";
      if (stemChanges[bootKey] && [0, 1, 2, 5].includes(personIndex)) {
        return stemChanges[bootKey];
      }

      // Check for full tense override
      if (typeof stemChanges[key] === "string") {
        return stemChanges[key];
      }

      // Check for per-person stems
      if (stemChanges[key] && typeof stemChanges[key] === "object") {
        const personKeys = ["je", "tu", "il", "nous", "vous", "ils"];
        return stemChanges[key][personKeys[personIndex]] || baseStem;
      }

      return baseStem;
    },

    /**
     * Conjugate a simple (non-compound) tense for a regular verb.
     * Returns an array of 6 forms (or 3 for impératif).
     */
    conjugateSimple(verb, tense) {
      // If verb has explicit irregular forms for this tense, use them
      if (verb.irregular && verb.irregular[tense]) {
        return verb.irregular[tense];
      }

      const group = verb.group;
      if (group === "irregular") {
        // Irregular verbs MUST have their forms spelled out
        return null;
      }

      const endings = this[group][tense];
      if (!endings) return null;

      const baseStem = this.getStem(verb.infinitive, group);
      const isImperatif = tense === "impératif";
      const count = isImperatif ? 3 : 6;
      const personIndices = isImperatif ? [1, 3, 4] : [0, 1, 2, 3, 4, 5];

      const forms = [];
      for (let i = 0; i < count; i++) {
        const pi = personIndices[i];
        let stem = this.applyStemChange(baseStem, verb.stemChanges, tense, pi);

        // Handle -ger verbs: add 'e' before 'a' or 'o' endings
        if (verb.infinitive.endsWith("ger")) {
          const ending = endings[i];
          if (ending.startsWith("a") || ending.startsWith("o") || ending.startsWith("â")) {
            stem = stem + "e";
          }
        }

        // Handle -cer verbs: change 'c' to 'ç' before 'a' or 'o' endings
        if (verb.infinitive.endsWith("cer") && stem.endsWith("c")) {
          const ending = endings[i];
          if (ending.startsWith("a") || ending.startsWith("o") || ending.startsWith("â")) {
            stem = stem.slice(0, -1) + "ç";
          }
        }

        // For futur/conditionnel of -er verbs, the ending includes the full suffix
        // (stem + ending), but we already have the right stem
        if ((tense === "futurSimple" || tense === "conditionnelPrésent") && group === "er") {
          // For -er verbs, futur/conditionnel stem = infinitive (not the stem)
          let futurStem = verb.infinitive;
          if (verb.stemChanges && verb.stemChanges.futur) {
            futurStem = verb.stemChanges.futur;
          }
          // The endings already include the full future suffix
          // e.g., "erai" for -er; but we stored them as full endings from stem
          // Actually for -er, futur = infinitive_without_e + ai etc
          // parler -> parlerai; so stem "parl" + "erai"
          // That is already handled: stem="parl", ending="erai" -> "parlerai"
          forms.push(stem + endings[i]);
        } else if ((tense === "futurSimple" || tense === "conditionnelPrésent") && group === "ir") {
          let futurStem = verb.infinitive;
          if (verb.stemChanges && verb.stemChanges.futur) {
            futurStem = verb.stemChanges.futur;
          } else {
            futurStem = verb.infinitive;
          }
          // finir -> finirai: stem="fin" + "irai"
          forms.push(stem + endings[i]);
        } else if ((tense === "futurSimple" || tense === "conditionnelPrésent") && group === "re") {
          // vendre -> vendrai: stem="vend" + "rai"
          forms.push(stem + endings[i]);
        } else {
          forms.push(stem + endings[i]);
        }
      }
      return forms;
    },

    /**
     * Get auxiliary conjugation for a compound tense.
     */
    getAuxiliary(aux, compoundTense) {
      const auxTenseMap = {
        passéComposé: "Présent",
        plusQueParfait: "Imparfait",
        futurAntérieur: "FuturSimple",
        conditionnelPassé: "ConditionnelPrésent",
        subjonctifPassé: "SubjonctifPrésent"
      };
      const suffix = auxTenseMap[compoundTense];
      if (!suffix) return null;
      const key = aux + suffix;
      return this[key] || null;
    },

    /**
     * Conjugate a compound tense. Returns array of 6 strings.
     */
    conjugateCompound(verb, tense) {
      const aux = verb.auxiliary || "avoir";
      const auxForms = this.getAuxiliary(aux, tense);
      if (!auxForms) return null;
      const pp = verb.pastParticiple;
      const usesEtre = aux === "être";

      return auxForms.map((auxForm, i) => {
        let participle = pp;
        if (usesEtre) {
          // Agreement: feminine and plural forms
          // For basic display, show masculine forms with (e)(s) hint
          // persons: je, tu, il/elle, nous, vous, ils/elles
          if (i === 5) {
            // ils/elles -> add s (or es if already has e)
            participle = pp.endsWith("e") ? pp + "s" : pp + "s";
          }
          // We show base form; apps can handle agreement
        }
        // Add elision for je + vowel-starting auxiliary
        let person = PERSONS[i];
        if (i === 0 && /^[aeéèêiîoôuûhh]/.test(auxForm)) {
          person = "j'";
        }
        return auxForm + " " + participle;
      });
    },

    /**
     * Main entry: conjugate a verb in any tense.
     * Returns { forms: [...], persons: [...] }
     */
    conjugate(verb, tense) {
      const info = tenseInfo[tense];
      if (!info) return null;

      if (info.compound) {
        const forms = this.conjugateCompound(verb, tense);
        return forms ? { forms, persons: PERSONS } : null;
      }

      if (tense === "impératif") {
        const forms = this.conjugateSimple(verb, tense);
        return forms ? { forms, persons: ["tu", "nous", "vous"] } : null;
      }

      const forms = this.conjugateSimple(verb, tense);
      return forms ? { forms, persons: PERSONS } : null;
    },

    /**
     * Get a display-ready conjugation table for a verb and tense.
     */
    getConjugationTable(verb, tense) {
      const result = this.conjugate(verb, tense);
      if (!result) return null;
      const info = tenseInfo[tense];
      return {
        tense: info.name,
        tenseKey: tense,
        englishName: info.englishName,
        compound: info.compound,
        rows: result.persons.map((p, i) => {
          const form = result.forms[i];
          // Handle elision
          let display;
          if (info.compound) {
            let pronoun = p;
            if (p === "je" && /^[aeéèêiîoôuûh]/.test(form)) {
              pronoun = "j'";
            }
            display = pronoun + (pronoun.endsWith("'") ? "" : " ") + form;
          } else {
            let pronoun = p;
            if (p === "je" && /^[aeéèêiîoôuûh]/.test(form)) {
              pronoun = "j'";
            }
            display = pronoun + (pronoun.endsWith("'") ? "" : " ") + form;
          }
          return { person: p, form, display };
        })
      };
    }
  };

  // ──────────────────────────────────────────────
  // CATEGORIES
  // ──────────────────────────────────────────────
  const categories = {
    essential:       { name: "Essential", description: "Most common and fundamental verbs", icon: "⭐" },
    modal:           { name: "Modal", description: "Verbs expressing ability, obligation, desire", icon: "🔑" },
    movement:        { name: "Movement (Dr Mrs Vandertramp)", description: "Verbs of motion conjugated with être", icon: "🚶" },
    reflexive:       { name: "Reflexive", description: "Pronominal/reflexive verbs (se + verb)", icon: "🪞" },
    communication:   { name: "Communication", description: "Speaking, writing, expressing", icon: "💬" },
    thinking:        { name: "Thinking / Cognition", description: "Mental processes, knowledge, belief", icon: "🧠" },
    dailyLife:       { name: "Daily Life", description: "Everyday activities and routines", icon: "🏠" },
    emotions:        { name: "Emotions", description: "Feelings and emotional states", icon: "❤️" },
    perception:      { name: "Perception", description: "Senses and observation", icon: "👁️" },
    actions:         { name: "Actions / Physical", description: "Physical actions and activities", icon: "💪" },
    social:          { name: "Social", description: "Interpersonal and social interactions", icon: "🤝" },
    work:            { name: "Work / Professional", description: "Professional and work-related verbs", icon: "💼" },
    state:           { name: "State / Existence", description: "Being, existing, seeming", icon: "🌀" }
  };

  // ──────────────────────────────────────────────
  // VERB DEFINITIONS
  // ──────────────────────────────────────────────
  // Helper: shorthand for regular verb definition
  function reg(infinitive, english, group, category, opts) {
    const base = {
      infinitive,
      english,
      group,
      category: Array.isArray(category) ? category : [category],
      auxiliary: "avoir",
      pastParticiple: null,       // computed below
      presentParticiple: null,    // computed below
    };
    if (group === "er") {
      const stem = infinitive.slice(0, -2);
      base.pastParticiple = stem + "é";
      base.presentParticiple = stem + "ant";
    } else if (group === "ir") {
      const stem = infinitive.slice(0, -2);
      base.pastParticiple = stem + "i";
      base.presentParticiple = stem + "issant";
    } else if (group === "re") {
      const stem = infinitive.slice(0, -2);
      base.pastParticiple = stem + "u";
      base.presentParticiple = stem + "ant";
    }
    return Object.assign(base, opts || {});
  }

  // Helper: irregular verb definition
  function irreg(infinitive, english, category, aux, pp, prp, irregular, opts) {
    const base = {
      infinitive,
      english,
      group: "irregular",
      category: Array.isArray(category) ? category : [category],
      auxiliary: aux,
      pastParticiple: pp,
      presentParticiple: prp,
      irregular
    };
    return Object.assign(base, opts || {});
  }

  // ──────────────────────────────────────────────
  // IRREGULAR VERBS
  // ──────────────────────────────────────────────

  const irregularVerbs = [
    // ── ÊTRE ──
    irreg("être", "to be", ["essential", "state"], "avoir", "été", "étant", {
      présent: ["suis", "es", "est", "sommes", "êtes", "sont"],
      imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
      futurSimple: ["serai", "seras", "sera", "serons", "serez", "seront"],
      conditionnelPrésent: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
      subjonctifPrésent: ["sois", "sois", "soit", "soyons", "soyez", "soient"],
      passéSimple: ["fus", "fus", "fut", "fûmes", "fûtes", "furent"],
      impératif: ["sois", "soyons", "soyez"]
    }),

    // ── AVOIR ──
    irreg("avoir", "to have", ["essential", "state"], "avoir", "eu", "ayant", {
      présent: ["ai", "as", "a", "avons", "avez", "ont"],
      imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
      futurSimple: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
      conditionnelPrésent: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
      subjonctifPrésent: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
      passéSimple: ["eus", "eus", "eut", "eûmes", "eûtes", "eurent"],
      impératif: ["aie", "ayons", "ayez"]
    }),

    // ── FAIRE ──
    irreg("faire", "to do, to make", ["essential", "actions"], "avoir", "fait", "faisant", {
      présent: ["fais", "fais", "fait", "faisons", "faites", "font"],
      imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
      futurSimple: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
      conditionnelPrésent: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"],
      subjonctifPrésent: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"],
      passéSimple: ["fis", "fis", "fit", "fîmes", "fîtes", "firent"],
      impératif: ["fais", "faisons", "faites"]
    }),

    // ── ALLER ──
    irreg("aller", "to go", ["essential", "movement"], "être", "allé", "allant", {
      présent: ["vais", "vas", "va", "allons", "allez", "vont"],
      imparfait: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
      futurSimple: ["irai", "iras", "ira", "irons", "irez", "iront"],
      conditionnelPrésent: ["irais", "irais", "irait", "irions", "iriez", "iraient"],
      subjonctifPrésent: ["aille", "ailles", "aille", "allions", "alliez", "aillent"],
      passéSimple: ["allai", "allas", "alla", "allâmes", "allâtes", "allèrent"],
      impératif: ["va", "allons", "allez"]
    }),

    // ── DIRE ──
    irreg("dire", "to say, to tell", ["essential", "communication"], "avoir", "dit", "disant", {
      présent: ["dis", "dis", "dit", "disons", "dites", "disent"],
      imparfait: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
      futurSimple: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
      conditionnelPrésent: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"],
      subjonctifPrésent: ["dise", "dises", "dise", "disions", "disiez", "disent"],
      passéSimple: ["dis", "dis", "dit", "dîmes", "dîtes", "dirent"],
      impératif: ["dis", "disons", "dites"]
    }),

    // ── POUVOIR ──
    irreg("pouvoir", "to be able to, can", ["essential", "modal"], "avoir", "pu", "pouvant", {
      présent: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
      imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
      futurSimple: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
      conditionnelPrésent: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"],
      subjonctifPrésent: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"],
      passéSimple: ["pus", "pus", "put", "pûmes", "pûtes", "purent"],
      impératif: null
    }),

    // ── VOULOIR ──
    irreg("vouloir", "to want", ["essential", "modal"], "avoir", "voulu", "voulant", {
      présent: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
      imparfait: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
      futurSimple: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
      conditionnelPrésent: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"],
      subjonctifPrésent: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"],
      passéSimple: ["voulus", "voulus", "voulut", "voulûmes", "voulûtes", "voulurent"],
      impératif: ["veuille", "voulons", "veuillez"]
    }),

    // ── DEVOIR ──
    irreg("devoir", "to have to, must, to owe", ["essential", "modal"], "avoir", "dû", "devant", {
      présent: ["dois", "dois", "doit", "devons", "devez", "doivent"],
      imparfait: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
      futurSimple: ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
      conditionnelPrésent: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"],
      subjonctifPrésent: ["doive", "doives", "doive", "devions", "deviez", "doivent"],
      passéSimple: ["dus", "dus", "dut", "dûmes", "dûtes", "durent"],
      impératif: ["dois", "devons", "devez"]
    }),

    // ── SAVOIR ──
    irreg("savoir", "to know (facts)", ["essential", "thinking"], "avoir", "su", "sachant", {
      présent: ["sais", "sais", "sait", "savons", "savez", "savent"],
      imparfait: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
      futurSimple: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
      conditionnelPrésent: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"],
      subjonctifPrésent: ["sache", "saches", "sache", "sachions", "sachiez", "sachent"],
      passéSimple: ["sus", "sus", "sut", "sûmes", "sûtes", "surent"],
      impératif: ["sache", "sachons", "sachez"]
    }),

    // ── FALLOIR (impersonal) ──
    irreg("falloir", "to be necessary (il faut)", ["essential", "modal"], "avoir", "fallu", null, {
      présent: [null, null, "faut", null, null, null],
      imparfait: [null, null, "fallait", null, null, null],
      futurSimple: [null, null, "faudra", null, null, null],
      conditionnelPrésent: [null, null, "faudrait", null, null, null],
      subjonctifPrésent: [null, null, "faille", null, null, null],
      passéSimple: [null, null, "fallut", null, null, null],
      impératif: null
    }, { impersonal: true }),

    // ── VENIR ──
    irreg("venir", "to come", ["essential", "movement"], "être", "venu", "venant", {
      présent: ["viens", "viens", "vient", "venons", "venez", "viennent"],
      imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
      futurSimple: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
      conditionnelPrésent: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"],
      subjonctifPrésent: ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"],
      passéSimple: ["vins", "vins", "vint", "vînmes", "vîntes", "vinrent"],
      impératif: ["viens", "venons", "venez"]
    }),

    // ── PARTIR ──
    irreg("partir", "to leave, to depart", ["essential", "movement"], "être", "parti", "partant", {
      présent: ["pars", "pars", "part", "partons", "partez", "partent"],
      imparfait: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
      futurSimple: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
      conditionnelPrésent: ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"],
      subjonctifPrésent: ["parte", "partes", "parte", "partions", "partiez", "partent"],
      passéSimple: ["partis", "partis", "partit", "partîmes", "partîtes", "partirent"],
      impératif: ["pars", "partons", "partez"]
    }),

    // ── SORTIR ──
    irreg("sortir", "to go out, to exit", ["essential", "movement"], "être", "sorti", "sortant", {
      présent: ["sors", "sors", "sort", "sortons", "sortez", "sortent"],
      imparfait: ["sortais", "sortais", "sortait", "sortions", "sortiez", "sortaient"],
      futurSimple: ["sortirai", "sortiras", "sortira", "sortirons", "sortirez", "sortiront"],
      conditionnelPrésent: ["sortirais", "sortirais", "sortirait", "sortirions", "sortiriez", "sortiraient"],
      subjonctifPrésent: ["sorte", "sortes", "sorte", "sortions", "sortiez", "sortent"],
      passéSimple: ["sortis", "sortis", "sortit", "sortîmes", "sortîtes", "sortirent"],
      impératif: ["sors", "sortons", "sortez"]
    }),

    // ── NAÎTRE ──
    irreg("naître", "to be born", ["state", "movement"], "être", "né", "naissant", {
      présent: ["nais", "nais", "naît", "naissons", "naissez", "naissent"],
      imparfait: ["naissais", "naissais", "naissait", "naissions", "naissiez", "naissaient"],
      futurSimple: ["naîtrai", "naîtras", "naîtra", "naîtrons", "naîtrez", "naîtront"],
      conditionnelPrésent: ["naîtrais", "naîtrais", "naîtrait", "naîtrions", "naîtriez", "naîtraient"],
      subjonctifPrésent: ["naisse", "naisses", "naisse", "naissions", "naissiez", "naissent"],
      passéSimple: ["naquis", "naquis", "naquit", "naquîmes", "naquîtes", "naquirent"],
      impératif: ["nais", "naissons", "naissez"]
    }),

    // ── MOURIR ──
    irreg("mourir", "to die", ["state", "movement"], "être", "mort", "mourant", {
      présent: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
      imparfait: ["mourais", "mourais", "mourait", "mourions", "mouriez", "mouraient"],
      futurSimple: ["mourrai", "mourras", "mourra", "mourrons", "mourrez", "mourront"],
      conditionnelPrésent: ["mourrais", "mourrais", "mourrait", "mourrions", "mourriez", "mourraient"],
      subjonctifPrésent: ["meure", "meures", "meure", "mourions", "mouriez", "meurent"],
      passéSimple: ["mourus", "mourus", "mourut", "mourûmes", "mourûtes", "moururent"],
      impératif: ["meurs", "mourons", "mourez"]
    }),

    // ── DEVENIR ──
    irreg("devenir", "to become", ["state", "movement"], "être", "devenu", "devenant", {
      présent: ["deviens", "deviens", "devient", "devenons", "devenez", "deviennent"],
      imparfait: ["devenais", "devenais", "devenait", "devenions", "deveniez", "devenaient"],
      futurSimple: ["deviendrai", "deviendras", "deviendra", "deviendrons", "deviendrez", "deviendront"],
      conditionnelPrésent: ["deviendrais", "deviendrais", "deviendrait", "deviendrions", "deviendriez", "deviendraient"],
      subjonctifPrésent: ["devienne", "deviennes", "devienne", "devenions", "deveniez", "deviennent"],
      passéSimple: ["devins", "devins", "devint", "devînmes", "devîntes", "devinrent"],
      impératif: ["deviens", "devenons", "devenez"]
    }),

    // ── REVENIR ──
    irreg("revenir", "to come back", ["movement"], "être", "revenu", "revenant", {
      présent: ["reviens", "reviens", "revient", "revenons", "revenez", "reviennent"],
      imparfait: ["revenais", "revenais", "revenait", "revenions", "reveniez", "revenaient"],
      futurSimple: ["reviendrai", "reviendras", "reviendra", "reviendrons", "reviendrez", "reviendront"],
      conditionnelPrésent: ["reviendrais", "reviendrais", "reviendrait", "reviendrions", "reviendriez", "reviendraient"],
      subjonctifPrésent: ["revienne", "reviennes", "revienne", "revenions", "reveniez", "reviennent"],
      passéSimple: ["revins", "revins", "revint", "revînmes", "revîntes", "revinrent"],
      impératif: ["reviens", "revenons", "revenez"]
    }),

    // ── PRENDRE ──
    irreg("prendre", "to take", ["essential", "actions"], "avoir", "pris", "prenant", {
      présent: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
      imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
      futurSimple: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
      conditionnelPrésent: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"],
      subjonctifPrésent: ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"],
      passéSimple: ["pris", "pris", "prit", "prîmes", "prîtes", "prirent"],
      impératif: ["prends", "prenons", "prenez"]
    }),

    // ── COMPRENDRE ──
    irreg("comprendre", "to understand", ["essential", "thinking"], "avoir", "compris", "comprenant", {
      présent: ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
      imparfait: ["comprenais", "comprenais", "comprenait", "comprenions", "compreniez", "comprenaient"],
      futurSimple: ["comprendrai", "comprendras", "comprendra", "comprendrons", "comprendrez", "comprendront"],
      conditionnelPrésent: ["comprendrais", "comprendrais", "comprendrait", "comprendrions", "comprendriez", "comprendraient"],
      subjonctifPrésent: ["comprenne", "comprennes", "comprenne", "comprenions", "compreniez", "comprennent"],
      passéSimple: ["compris", "compris", "comprit", "comprîmes", "comprîtes", "comprirent"],
      impératif: ["comprends", "comprenons", "comprenez"]
    }),

    // ── APPRENDRE ──
    irreg("apprendre", "to learn", ["essential", "thinking"], "avoir", "appris", "apprenant", {
      présent: ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
      imparfait: ["apprenais", "apprenais", "apprenait", "apprenions", "appreniez", "apprenaient"],
      futurSimple: ["apprendrai", "apprendras", "apprendra", "apprendrons", "apprendrez", "apprendront"],
      conditionnelPrésent: ["apprendrais", "apprendrais", "apprendrait", "apprendrions", "apprendriez", "apprendraient"],
      subjonctifPrésent: ["apprenne", "apprennes", "apprenne", "apprenions", "appreniez", "apprennent"],
      passéSimple: ["appris", "appris", "apprit", "apprîmes", "apprîtes", "apprirent"],
      impératif: ["apprends", "apprenons", "apprenez"]
    }),

    // ── METTRE ──
    irreg("mettre", "to put, to place", ["essential", "actions"], "avoir", "mis", "mettant", {
      présent: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
      imparfait: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
      futurSimple: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
      conditionnelPrésent: ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"],
      subjonctifPrésent: ["mette", "mettes", "mette", "mettions", "mettiez", "mettent"],
      passéSimple: ["mis", "mis", "mit", "mîmes", "mîtes", "mirent"],
      impératif: ["mets", "mettons", "mettez"]
    }),

    // ── PERMETTRE ──
    irreg("permettre", "to allow, to permit", ["social", "actions"], "avoir", "permis", "permettant", {
      présent: ["permets", "permets", "permet", "permettons", "permettez", "permettent"],
      imparfait: ["permettais", "permettais", "permettait", "permettions", "permettiez", "permettaient"],
      futurSimple: ["permettrai", "permettras", "permettra", "permettrons", "permettrez", "permettront"],
      conditionnelPrésent: ["permettrais", "permettrais", "permettrait", "permettrions", "permettriez", "permettraient"],
      subjonctifPrésent: ["permette", "permettes", "permette", "permettions", "permettiez", "permettent"],
      passéSimple: ["permis", "permis", "permit", "permîmes", "permîtes", "permirent"],
      impératif: ["permets", "permettons", "permettez"]
    }),

    // ── PROMETTRE ──
    irreg("promettre", "to promise", ["communication", "social"], "avoir", "promis", "promettant", {
      présent: ["promets", "promets", "promet", "promettons", "promettez", "promettent"],
      imparfait: ["promettais", "promettais", "promettait", "promettions", "promettiez", "promettaient"],
      futurSimple: ["promettrai", "promettras", "promettra", "promettrons", "promettrez", "promettront"],
      conditionnelPrésent: ["promettrais", "promettrais", "promettrait", "promettrions", "promettriez", "promettraient"],
      subjonctifPrésent: ["promette", "promettes", "promette", "promettions", "promettiez", "promettent"],
      passéSimple: ["promis", "promis", "promit", "promîmes", "promîtes", "promirent"],
      impératif: ["promets", "promettons", "promettez"]
    }),

    // ── BOIRE ──
    irreg("boire", "to drink", ["dailyLife", "actions"], "avoir", "bu", "buvant", {
      présent: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
      imparfait: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
      futurSimple: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
      conditionnelPrésent: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"],
      subjonctifPrésent: ["boive", "boives", "boive", "buvions", "buviez", "boivent"],
      passéSimple: ["bus", "bus", "but", "bûmes", "bûtes", "burent"],
      impératif: ["bois", "buvons", "buvez"]
    }),

    // ── CONDUIRE ──
    irreg("conduire", "to drive, to lead", ["actions", "dailyLife"], "avoir", "conduit", "conduisant", {
      présent: ["conduis", "conduis", "conduit", "conduisons", "conduisez", "conduisent"],
      imparfait: ["conduisais", "conduisais", "conduisait", "conduisions", "conduisiez", "conduisaient"],
      futurSimple: ["conduirai", "conduiras", "conduira", "conduirons", "conduirez", "conduiront"],
      conditionnelPrésent: ["conduirais", "conduirais", "conduirait", "conduirions", "conduiriez", "conduiraient"],
      subjonctifPrésent: ["conduise", "conduises", "conduise", "conduisions", "conduisiez", "conduisent"],
      passéSimple: ["conduisis", "conduisis", "conduisit", "conduisîmes", "conduisîtes", "conduisirent"],
      impératif: ["conduis", "conduisons", "conduisez"]
    }),

    // ── CONSTRUIRE ──
    irreg("construire", "to build, to construct", ["actions", "work"], "avoir", "construit", "construisant", {
      présent: ["construis", "construis", "construit", "construisons", "construisez", "construisent"],
      imparfait: ["construisais", "construisais", "construisait", "construisions", "construisiez", "construisaient"],
      futurSimple: ["construirai", "construiras", "construira", "construirons", "construirez", "construiront"],
      conditionnelPrésent: ["construirais", "construirais", "construirait", "construirions", "construiriez", "construiraient"],
      subjonctifPrésent: ["construise", "construises", "construise", "construisions", "construisiez", "construisent"],
      passéSimple: ["construisis", "construisis", "construisit", "construisîmes", "construisîtes", "construisirent"],
      impératif: ["construis", "construisons", "construisez"]
    }),

    // ── DÉTRUIRE ──
    irreg("détruire", "to destroy", ["actions"], "avoir", "détruit", "détruisant", {
      présent: ["détruis", "détruis", "détruit", "détruisons", "détruisez", "détruisent"],
      imparfait: ["détruisais", "détruisais", "détruisait", "détruisions", "détruisiez", "détruisaient"],
      futurSimple: ["détruirai", "détruiras", "détruira", "détruirons", "détruirez", "détruiront"],
      conditionnelPrésent: ["détruirais", "détruirais", "détruirait", "détruirions", "détruiriez", "détruiraient"],
      subjonctifPrésent: ["détruise", "détruises", "détruise", "détruisions", "détruisiez", "détruisent"],
      passéSimple: ["détruisis", "détruisis", "détruisit", "détruisîmes", "détruisîtes", "détruisirent"],
      impératif: ["détruis", "détruisons", "détruisez"]
    }),

    // ── PRODUIRE ──
    irreg("produire", "to produce", ["work", "actions"], "avoir", "produit", "produisant", {
      présent: ["produis", "produis", "produit", "produisons", "produisez", "produisent"],
      imparfait: ["produisais", "produisais", "produisait", "produisions", "produisiez", "produisaient"],
      futurSimple: ["produirai", "produiras", "produira", "produirons", "produirez", "produiront"],
      conditionnelPrésent: ["produirais", "produirais", "produirait", "produirions", "produiriez", "produiraient"],
      subjonctifPrésent: ["produise", "produises", "produise", "produisions", "produisiez", "produisent"],
      passéSimple: ["produisis", "produisis", "produisit", "produisîmes", "produisîtes", "produisirent"],
      impératif: ["produis", "produisons", "produisez"]
    }),

    // ── TRADUIRE ──
    irreg("traduire", "to translate", ["communication", "work"], "avoir", "traduit", "traduisant", {
      présent: ["traduis", "traduis", "traduit", "traduisons", "traduisez", "traduisent"],
      imparfait: ["traduisais", "traduisais", "traduisait", "traduisions", "traduisiez", "traduisaient"],
      futurSimple: ["traduirai", "traduiras", "traduira", "traduirons", "traduirez", "traduiront"],
      conditionnelPrésent: ["traduirais", "traduirais", "traduirait", "traduirions", "traduiriez", "traduiraient"],
      subjonctifPrésent: ["traduise", "traduises", "traduise", "traduisions", "traduisiez", "traduisent"],
      passéSimple: ["traduisis", "traduisis", "traduisit", "traduisîmes", "traduisîtes", "traduisirent"],
      impératif: ["traduis", "traduisons", "traduisez"]
    }),

    // ── ÉCRIRE ──
    irreg("écrire", "to write", ["essential", "communication"], "avoir", "écrit", "écrivant", {
      présent: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
      imparfait: ["écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
      futurSimple: ["écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
      conditionnelPrésent: ["écrirais", "écrirais", "écrirait", "écririons", "écririez", "écriraient"],
      subjonctifPrésent: ["écrive", "écrives", "écrive", "écrivions", "écriviez", "écrivent"],
      passéSimple: ["écrivis", "écrivis", "écrivit", "écrivîmes", "écrivîtes", "écrivirent"],
      impératif: ["écris", "écrivons", "écrivez"]
    }),

    // ── LIRE ──
    irreg("lire", "to read", ["essential", "communication"], "avoir", "lu", "lisant", {
      présent: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
      imparfait: ["lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
      futurSimple: ["lirai", "liras", "lira", "lirons", "lirez", "liront"],
      conditionnelPrésent: ["lirais", "lirais", "lirait", "lirions", "liriez", "liraient"],
      subjonctifPrésent: ["lise", "lises", "lise", "lisions", "lisiez", "lisent"],
      passéSimple: ["lus", "lus", "lut", "lûmes", "lûtes", "lurent"],
      impératif: ["lis", "lisons", "lisez"]
    }),

    // ── CROIRE ──
    irreg("croire", "to believe", ["thinking"], "avoir", "cru", "croyant", {
      présent: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
      imparfait: ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
      futurSimple: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
      conditionnelPrésent: ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"],
      subjonctifPrésent: ["croie", "croies", "croie", "croyions", "croyiez", "croient"],
      passéSimple: ["crus", "crus", "crut", "crûmes", "crûtes", "crurent"],
      impératif: ["crois", "croyons", "croyez"]
    }),

    // ── VOIR ──
    irreg("voir", "to see", ["essential", "perception"], "avoir", "vu", "voyant", {
      présent: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
      imparfait: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
      futurSimple: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
      conditionnelPrésent: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"],
      subjonctifPrésent: ["voie", "voies", "voie", "voyions", "voyiez", "voient"],
      passéSimple: ["vis", "vis", "vit", "vîmes", "vîtes", "virent"],
      impératif: ["vois", "voyons", "voyez"]
    }),

    // ── RECEVOIR ──
    irreg("recevoir", "to receive", ["actions", "social"], "avoir", "reçu", "recevant", {
      présent: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
      imparfait: ["recevais", "recevais", "recevait", "recevions", "receviez", "recevaient"],
      futurSimple: ["recevrai", "recevras", "recevra", "recevrons", "recevrez", "recevront"],
      conditionnelPrésent: ["recevrais", "recevrais", "recevrait", "recevrions", "recevriez", "recevraient"],
      subjonctifPrésent: ["reçoive", "reçoives", "reçoive", "recevions", "receviez", "reçoivent"],
      passéSimple: ["reçus", "reçus", "reçut", "reçûmes", "reçûtes", "reçurent"],
      impératif: ["reçois", "recevons", "recevez"]
    }),

    // ── TENIR ──
    irreg("tenir", "to hold, to keep", ["actions"], "avoir", "tenu", "tenant", {
      présent: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
      imparfait: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
      futurSimple: ["tiendrai", "tiendras", "tiendra", "tiendrons", "tiendrez", "tiendront"],
      conditionnelPrésent: ["tiendrais", "tiendrais", "tiendrait", "tiendrions", "tiendriez", "tiendraient"],
      subjonctifPrésent: ["tienne", "tiennes", "tienne", "tenions", "teniez", "tiennent"],
      passéSimple: ["tins", "tins", "tint", "tînmes", "tîntes", "tinrent"],
      impératif: ["tiens", "tenons", "tenez"]
    }),

    // ── OBTENIR ──
    irreg("obtenir", "to obtain, to get", ["actions", "work"], "avoir", "obtenu", "obtenant", {
      présent: ["obtiens", "obtiens", "obtient", "obtenons", "obtenez", "obtiennent"],
      imparfait: ["obtenais", "obtenais", "obtenait", "obtenions", "obteniez", "obtenaient"],
      futurSimple: ["obtiendrai", "obtiendras", "obtiendra", "obtiendrons", "obtiendrez", "obtiendront"],
      conditionnelPrésent: ["obtiendrais", "obtiendrais", "obtiendrait", "obtiendrions", "obtiendriez", "obtiendraient"],
      subjonctifPrésent: ["obtienne", "obtiennes", "obtienne", "obtenions", "obteniez", "obtiennent"],
      passéSimple: ["obtins", "obtins", "obtint", "obtînmes", "obtîntes", "obtinrent"],
      impératif: ["obtiens", "obtenons", "obtenez"]
    }),

    // ── SOUTENIR ──
    irreg("soutenir", "to support, to sustain", ["social", "actions"], "avoir", "soutenu", "soutenant", {
      présent: ["soutiens", "soutiens", "soutient", "soutenons", "soutenez", "soutiennent"],
      imparfait: ["soutenais", "soutenais", "soutenait", "soutenions", "souteniez", "soutenaient"],
      futurSimple: ["soutiendrai", "soutiendras", "soutiendra", "soutiendrons", "soutiendrez", "soutiendront"],
      conditionnelPrésent: ["soutiendrais", "soutiendrais", "soutiendrait", "soutiendrions", "soutiendriez", "soutiendraient"],
      subjonctifPrésent: ["soutienne", "soutiennes", "soutienne", "soutenions", "souteniez", "soutiennent"],
      passéSimple: ["soutins", "soutins", "soutint", "soutînmes", "soutîntes", "soutinrent"],
      impératif: ["soutiens", "soutenons", "soutenez"]
    }),

    // ── COURIR ──
    irreg("courir", "to run", ["actions", "movement"], "avoir", "couru", "courant", {
      présent: ["cours", "cours", "court", "courons", "courez", "courent"],
      imparfait: ["courais", "courais", "courait", "courions", "couriez", "couraient"],
      futurSimple: ["courrai", "courras", "courra", "courrons", "courrez", "courront"],
      conditionnelPrésent: ["courrais", "courrais", "courrait", "courrions", "courriez", "courraient"],
      subjonctifPrésent: ["coure", "coures", "coure", "courions", "couriez", "courent"],
      passéSimple: ["courus", "courus", "courut", "courûmes", "courûtes", "coururent"],
      impératif: ["cours", "courons", "courez"]
    }),

    // ── OUVRIR ──
    irreg("ouvrir", "to open", ["actions", "dailyLife"], "avoir", "ouvert", "ouvrant", {
      présent: ["ouvre", "ouvres", "ouvre", "ouvrons", "ouvrez", "ouvrent"],
      imparfait: ["ouvrais", "ouvrais", "ouvrait", "ouvrions", "ouvriez", "ouvraient"],
      futurSimple: ["ouvrirai", "ouvriras", "ouvrira", "ouvrirons", "ouvrirez", "ouvriront"],
      conditionnelPrésent: ["ouvrirais", "ouvrirais", "ouvrirait", "ouvririons", "ouvririez", "ouvriraient"],
      subjonctifPrésent: ["ouvre", "ouvres", "ouvre", "ouvrions", "ouvriez", "ouvrent"],
      passéSimple: ["ouvris", "ouvris", "ouvrit", "ouvrîmes", "ouvrîtes", "ouvrirent"],
      impératif: ["ouvre", "ouvrons", "ouvrez"]
    }),

    // ── OFFRIR ──
    irreg("offrir", "to offer, to give (gift)", ["social", "actions"], "avoir", "offert", "offrant", {
      présent: ["offre", "offres", "offre", "offrons", "offrez", "offrent"],
      imparfait: ["offrais", "offrais", "offrait", "offrions", "offriez", "offraient"],
      futurSimple: ["offrirai", "offriras", "offrira", "offrirons", "offrirez", "offriront"],
      conditionnelPrésent: ["offrirais", "offrirais", "offrirait", "offririons", "offririez", "offriraient"],
      subjonctifPrésent: ["offre", "offres", "offre", "offrions", "offriez", "offrent"],
      passéSimple: ["offris", "offris", "offrit", "offrîmes", "offrîtes", "offrirent"],
      impératif: ["offre", "offrons", "offrez"]
    }),

    // ── COUVRIR ──
    irreg("couvrir", "to cover", ["actions"], "avoir", "couvert", "couvrant", {
      présent: ["couvre", "couvres", "couvre", "couvrons", "couvrez", "couvrent"],
      imparfait: ["couvrais", "couvrais", "couvrait", "couvrions", "couvriez", "couvraient"],
      futurSimple: ["couvrirai", "couvriras", "couvrira", "couvrirons", "couvrirez", "couvriront"],
      conditionnelPrésent: ["couvrirais", "couvrirais", "couvrirait", "couvririons", "couvririez", "couvriraient"],
      subjonctifPrésent: ["couvre", "couvres", "couvre", "couvrions", "couvriez", "couvrent"],
      passéSimple: ["couvris", "couvris", "couvrit", "couvrîmes", "couvrîtes", "couvrirent"],
      impératif: ["couvre", "couvrons", "couvrez"]
    }),

    // ── DÉCOUVRIR ──
    irreg("découvrir", "to discover", ["thinking", "actions"], "avoir", "découvert", "découvrant", {
      présent: ["découvre", "découvres", "découvre", "découvrons", "découvrez", "découvrent"],
      imparfait: ["découvrais", "découvrais", "découvrait", "découvrions", "découvriez", "découvraient"],
      futurSimple: ["découvrirai", "découvriras", "découvrira", "découvrirons", "découvrirez", "découvriront"],
      conditionnelPrésent: ["découvrirais", "découvrirais", "découvrirait", "découvririons", "découvririez", "découvriraient"],
      subjonctifPrésent: ["découvre", "découvres", "découvre", "découvrions", "découvriez", "découvrent"],
      passéSimple: ["découvris", "découvris", "découvrit", "découvrîmes", "découvrîtes", "découvrirent"],
      impératif: ["découvre", "découvrons", "découvrez"]
    }),

    // ── CRAINDRE ──
    irreg("craindre", "to fear", ["emotions"], "avoir", "craint", "craignant", {
      présent: ["crains", "crains", "craint", "craignons", "craignez", "craignent"],
      imparfait: ["craignais", "craignais", "craignait", "craignions", "craigniez", "craignaient"],
      futurSimple: ["craindrai", "craindras", "craindra", "craindrons", "craindrez", "craindront"],
      conditionnelPrésent: ["craindrais", "craindrais", "craindrait", "craindrions", "craindriez", "craindraient"],
      subjonctifPrésent: ["craigne", "craignes", "craigne", "craignions", "craigniez", "craignent"],
      passéSimple: ["craignis", "craignis", "craignit", "craignîmes", "craignîtes", "craignirent"],
      impératif: ["crains", "craignons", "craignez"]
    }),

    // ── PEINDRE ──
    irreg("peindre", "to paint", ["actions"], "avoir", "peint", "peignant", {
      présent: ["peins", "peins", "peint", "peignons", "peignez", "peignent"],
      imparfait: ["peignais", "peignais", "peignait", "peignions", "peigniez", "peignaient"],
      futurSimple: ["peindrai", "peindras", "peindra", "peindrons", "peindrez", "peindront"],
      conditionnelPrésent: ["peindrais", "peindrais", "peindrait", "peindrions", "peindriez", "peindraient"],
      subjonctifPrésent: ["peigne", "peignes", "peigne", "peignions", "peigniez", "peignent"],
      passéSimple: ["peignis", "peignis", "peignit", "peignîmes", "peignîtes", "peignirent"],
      impératif: ["peins", "peignons", "peignez"]
    }),

    // ── ATTEINDRE ──
    irreg("atteindre", "to reach, to attain", ["actions"], "avoir", "atteint", "atteignant", {
      présent: ["atteins", "atteins", "atteint", "atteignons", "atteignez", "atteignent"],
      imparfait: ["atteignais", "atteignais", "atteignait", "atteignions", "atteigniez", "atteignaient"],
      futurSimple: ["atteindrai", "atteindras", "atteindra", "atteindrons", "atteindrez", "atteindront"],
      conditionnelPrésent: ["atteindrais", "atteindrais", "atteindrait", "atteindrions", "atteindriez", "atteindraient"],
      subjonctifPrésent: ["atteigne", "atteignes", "atteigne", "atteignions", "atteigniez", "atteignent"],
      passéSimple: ["atteignis", "atteignis", "atteignit", "atteignîmes", "atteignîtes", "atteignirent"],
      impératif: ["atteins", "atteignons", "atteignez"]
    }),

    // ── REJOINDRE ──
    irreg("rejoindre", "to join, to meet up with", ["social", "movement"], "avoir", "rejoint", "rejoignant", {
      présent: ["rejoins", "rejoins", "rejoint", "rejoignons", "rejoignez", "rejoignent"],
      imparfait: ["rejoignais", "rejoignais", "rejoignait", "rejoignions", "rejoigniez", "rejoignaient"],
      futurSimple: ["rejoindrai", "rejoindras", "rejoindra", "rejoindrons", "rejoindrez", "rejoindront"],
      conditionnelPrésent: ["rejoindrais", "rejoindrais", "rejoindrait", "rejoindrions", "rejoindriez", "rejoindraient"],
      subjonctifPrésent: ["rejoigne", "rejoignes", "rejoigne", "rejoignions", "rejoigniez", "rejoignent"],
      passéSimple: ["rejoignis", "rejoignis", "rejoignit", "rejoignîmes", "rejoignîtes", "rejoignirent"],
      impératif: ["rejoins", "rejoignons", "rejoignez"]
    }),

    // ── RÉSOUDRE ──
    irreg("résoudre", "to resolve, to solve", ["thinking", "work"], "avoir", "résolu", "résolvant", {
      présent: ["résous", "résous", "résout", "résolvons", "résolvez", "résolvent"],
      imparfait: ["résolvais", "résolvais", "résolvait", "résolvions", "résolviez", "résolvaient"],
      futurSimple: ["résoudrai", "résoudras", "résoudra", "résoudrons", "résoudrez", "résoudront"],
      conditionnelPrésent: ["résoudrais", "résoudrais", "résoudrait", "résoudrions", "résoudriez", "résoudraient"],
      subjonctifPrésent: ["résolve", "résolves", "résolve", "résolvions", "résolviez", "résolvent"],
      passéSimple: ["résolus", "résolus", "résolut", "résolûmes", "résolûtes", "résolurent"],
      impératif: ["résous", "résolvons", "résolvez"]
    }),

    // ── CONCLURE ──
    irreg("conclure", "to conclude", ["thinking", "communication"], "avoir", "conclu", "concluant", {
      présent: ["conclus", "conclus", "conclut", "concluons", "concluez", "concluent"],
      imparfait: ["concluais", "concluais", "concluait", "concluions", "concluiez", "concluaient"],
      futurSimple: ["conclurai", "concluras", "conclura", "conclurons", "conclurez", "concluront"],
      conditionnelPrésent: ["conclurais", "conclurais", "conclurait", "conclurions", "concluriez", "concluraient"],
      subjonctifPrésent: ["conclue", "conclues", "conclue", "concluions", "concluiez", "concluent"],
      passéSimple: ["conclus", "conclus", "conclut", "conclûmes", "conclûtes", "conclurent"],
      impératif: ["conclus", "concluons", "concluez"]
    }),

    // ── SUIVRE ──
    irreg("suivre", "to follow", ["actions", "movement"], "avoir", "suivi", "suivant", {
      présent: ["suis", "suis", "suit", "suivons", "suivez", "suivent"],
      imparfait: ["suivais", "suivais", "suivait", "suivions", "suiviez", "suivaient"],
      futurSimple: ["suivrai", "suivras", "suivra", "suivrons", "suivrez", "suivront"],
      conditionnelPrésent: ["suivrais", "suivrais", "suivrait", "suivrions", "suivriez", "suivraient"],
      subjonctifPrésent: ["suive", "suives", "suive", "suivions", "suiviez", "suivent"],
      passéSimple: ["suivis", "suivis", "suivit", "suivîmes", "suivîtes", "suivirent"],
      impératif: ["suis", "suivons", "suivez"]
    }),

    // ── VIVRE ──
    irreg("vivre", "to live", ["state", "essential"], "avoir", "vécu", "vivant", {
      présent: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
      imparfait: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
      futurSimple: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
      conditionnelPrésent: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"],
      subjonctifPrésent: ["vive", "vives", "vive", "vivions", "viviez", "vivent"],
      passéSimple: ["vécus", "vécus", "vécut", "vécûmes", "vécûtes", "vécurent"],
      impératif: ["vis", "vivons", "vivez"]
    }),

    // ── PARAÎTRE ──
    irreg("paraître", "to seem, to appear", ["state", "perception"], "avoir", "paru", "paraissant", {
      présent: ["parais", "parais", "paraît", "paraissons", "paraissez", "paraissent"],
      imparfait: ["paraissais", "paraissais", "paraissait", "paraissions", "paraissiez", "paraissaient"],
      futurSimple: ["paraîtrai", "paraîtras", "paraîtra", "paraîtrons", "paraîtrez", "paraîtront"],
      conditionnelPrésent: ["paraîtrais", "paraîtrais", "paraîtrait", "paraîtrions", "paraîtriez", "paraîtraient"],
      subjonctifPrésent: ["paraisse", "paraisses", "paraisse", "paraissions", "paraissiez", "paraissent"],
      passéSimple: ["parus", "parus", "parut", "parûmes", "parûtes", "parurent"],
      impératif: ["parais", "paraissons", "paraissez"]
    }),

    // ── CONNAÎTRE ──
    irreg("connaître", "to know (person/place)", ["essential", "thinking"], "avoir", "connu", "connaissant", {
      présent: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
      imparfait: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
      futurSimple: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
      conditionnelPrésent: ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"],
      subjonctifPrésent: ["connaisse", "connaisses", "connaisse", "connaissions", "connaissiez", "connaissent"],
      passéSimple: ["connus", "connus", "connut", "connûmes", "connûtes", "connurent"],
      impératif: ["connais", "connaissons", "connaissez"]
    }),

    // ── RECONNAÎTRE ──
    irreg("reconnaître", "to recognize", ["thinking", "perception"], "avoir", "reconnu", "reconnaissant", {
      présent: ["reconnais", "reconnais", "reconnaît", "reconnaissons", "reconnaissez", "reconnaissent"],
      imparfait: ["reconnaissais", "reconnaissais", "reconnaissait", "reconnaissions", "reconnaissiez", "reconnaissaient"],
      futurSimple: ["reconnaîtrai", "reconnaîtras", "reconnaîtra", "reconnaîtrons", "reconnaîtrez", "reconnaîtront"],
      conditionnelPrésent: ["reconnaîtrais", "reconnaîtrais", "reconnaîtrait", "reconnaîtrions", "reconnaîtriez", "reconnaîtraient"],
      subjonctifPrésent: ["reconnaisse", "reconnaisses", "reconnaisse", "reconnaissions", "reconnaissiez", "reconnaissent"],
      passéSimple: ["reconnus", "reconnus", "reconnut", "reconnûmes", "reconnûtes", "reconnurent"],
      impératif: ["reconnais", "reconnaissons", "reconnaissez"]
    }),

    // ── PLAIRE ──
    irreg("plaire", "to please", ["emotions", "social"], "avoir", "plu", "plaisant", {
      présent: ["plais", "plais", "plaît", "plaisons", "plaisez", "plaisent"],
      imparfait: ["plaisais", "plaisais", "plaisait", "plaisions", "plaisiez", "plaisaient"],
      futurSimple: ["plairai", "plairas", "plaira", "plairons", "plairez", "plairont"],
      conditionnelPrésent: ["plairais", "plairais", "plairait", "plairions", "plairiez", "plairaient"],
      subjonctifPrésent: ["plaise", "plaises", "plaise", "plaisions", "plaisiez", "plaisent"],
      passéSimple: ["plus", "plus", "plut", "plûmes", "plûtes", "plurent"],
      impératif: ["plais", "plaisons", "plaisez"]
    }),

    // ── RIRE ──
    irreg("rire", "to laugh", ["emotions", "social"], "avoir", "ri", "riant", {
      présent: ["ris", "ris", "rit", "rions", "riez", "rient"],
      imparfait: ["riais", "riais", "riait", "riions", "riiez", "riaient"],
      futurSimple: ["rirai", "riras", "rira", "rirons", "rirez", "riront"],
      conditionnelPrésent: ["rirais", "rirais", "rirait", "ririons", "ririez", "riraient"],
      subjonctifPrésent: ["rie", "ries", "rie", "riions", "riiez", "rient"],
      passéSimple: ["ris", "ris", "rit", "rîmes", "rîtes", "rirent"],
      impératif: ["ris", "rions", "riez"]
    }),

    // ── SOURIRE ──
    irreg("sourire", "to smile", ["emotions", "social"], "avoir", "souri", "souriant", {
      présent: ["souris", "souris", "sourit", "sourions", "souriez", "sourient"],
      imparfait: ["souriais", "souriais", "souriait", "souriions", "souriiez", "souriaient"],
      futurSimple: ["sourirai", "souriras", "sourira", "sourirons", "sourirez", "souriront"],
      conditionnelPrésent: ["sourirais", "sourirais", "sourirait", "souririons", "souririez", "souriraient"],
      subjonctifPrésent: ["sourie", "souries", "sourie", "souriions", "souriiez", "sourient"],
      passéSimple: ["souris", "souris", "sourit", "sourîmes", "sourîtes", "sourirent"],
      impératif: ["souris", "sourions", "souriez"]
    }),

    // ── BATTRE ──
    irreg("battre", "to beat, to hit", ["actions"], "avoir", "battu", "battant", {
      présent: ["bats", "bats", "bat", "battons", "battez", "battent"],
      imparfait: ["battais", "battais", "battait", "battions", "battiez", "battaient"],
      futurSimple: ["battrai", "battras", "battra", "battrons", "battrez", "battront"],
      conditionnelPrésent: ["battrais", "battrais", "battrait", "battrions", "battriez", "battraient"],
      subjonctifPrésent: ["batte", "battes", "batte", "battions", "battiez", "battent"],
      passéSimple: ["battis", "battis", "battit", "battîmes", "battîtes", "battirent"],
      impératif: ["bats", "battons", "battez"]
    }),

    // ── INTERROMPRE ──
    irreg("interrompre", "to interrupt", ["communication", "social"], "avoir", "interrompu", "interrompant", {
      présent: ["interromps", "interromps", "interrompt", "interrompons", "interrompez", "interrompent"],
      imparfait: ["interrompais", "interrompais", "interrompait", "interrompions", "interrompiez", "interrompaient"],
      futurSimple: ["interromprai", "interrompras", "interrompra", "interromprons", "interromprez", "interrompront"],
      conditionnelPrésent: ["interromprais", "interromprais", "interromprait", "interromprions", "interrompriez", "interrompraient"],
      subjonctifPrésent: ["interrompe", "interrompes", "interrompe", "interrompions", "interrompiez", "interrompent"],
      passéSimple: ["interrompis", "interrompis", "interrompit", "interrompîmes", "interrompîtes", "interrompirent"],
      impératif: ["interromps", "interrompons", "interrompez"]
    }),

    // ── VALOIR ──
    irreg("valoir", "to be worth", ["state"], "avoir", "valu", "valant", {
      présent: ["vaux", "vaux", "vaut", "valons", "valez", "valent"],
      imparfait: ["valais", "valais", "valait", "valions", "valiez", "valaient"],
      futurSimple: ["vaudrai", "vaudras", "vaudra", "vaudrons", "vaudrez", "vaudront"],
      conditionnelPrésent: ["vaudrais", "vaudrais", "vaudrait", "vaudrions", "vaudriez", "vaudraient"],
      subjonctifPrésent: ["vaille", "vailles", "vaille", "valions", "valiez", "vaillent"],
      passéSimple: ["valus", "valus", "valut", "valûmes", "valûtes", "valurent"],
      impératif: ["vaux", "valons", "valez"]
    }),

    // ── SUFFIRE ──
    irreg("suffire", "to suffice, to be enough", ["state"], "avoir", "suffi", "suffisant", {
      présent: ["suffis", "suffis", "suffit", "suffisons", "suffisez", "suffisent"],
      imparfait: ["suffisais", "suffisais", "suffisait", "suffisions", "suffisiez", "suffisaient"],
      futurSimple: ["suffirai", "suffiras", "suffira", "suffirons", "suffirez", "suffiront"],
      conditionnelPrésent: ["suffirais", "suffirais", "suffirait", "suffirions", "suffiriez", "suffiraient"],
      subjonctifPrésent: ["suffise", "suffises", "suffise", "suffisions", "suffisiez", "suffisent"],
      passéSimple: ["suffis", "suffis", "suffit", "suffîmes", "suffîtes", "suffirent"],
      impératif: ["suffis", "suffisons", "suffisez"]
    }),

    // ── PLEUVOIR (impersonal) ──
    irreg("pleuvoir", "to rain (il pleut)", ["state"], "avoir", "plu", null, {
      présent: [null, null, "pleut", null, null, null],
      imparfait: [null, null, "pleuvait", null, null, null],
      futurSimple: [null, null, "pleuvra", null, null, null],
      conditionnelPrésent: [null, null, "pleuvrait", null, null, null],
      subjonctifPrésent: [null, null, "pleuve", null, null, null],
      passéSimple: [null, null, "plut", null, null, null],
      impératif: null
    }, { impersonal: true }),
  ];

  // ──────────────────────────────────────────────
  // REFLEXIVE VERBS
  // ──────────────────────────────────────────────

  const reflexiveVerbs = [
    Object.assign(reg("lever", "to get up", "er", ["reflexive", "dailyLife"]), {
      reflexive: true,
      reflexiveInfinitive: "se lever",
      english: "to get up",
      auxiliary: "être",
      stemChanges: { presentBoot: "lèv", subjonctifBoot: "lèv", futur: "lèver", conditionnel: "lèver" }
    }),
    Object.assign(reg("coucher", "to go to bed", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se coucher", auxiliary: "être"
    }),
    Object.assign(reg("réveiller", "to wake up", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se réveiller", auxiliary: "être"
    }),
    Object.assign(reg("habiller", "to get dressed", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "s'habiller", auxiliary: "être"
    }),
    Object.assign(reg("appeler", "to be called", "er", ["reflexive", "essential"]), {
      reflexive: true, reflexiveInfinitive: "s'appeler", auxiliary: "être",
      stemChanges: { presentBoot: "appell", subjonctifBoot: "appell", futur: "appeller", conditionnel: "appeller" }
    }),
    Object.assign(reg("promener", "to take a walk", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se promener", auxiliary: "être",
      stemChanges: { presentBoot: "promèn", subjonctifBoot: "promèn", futur: "promèner", conditionnel: "promèner" }
    }),
    Object.assign({
      infinitive: "sentir",
      english: "to feel",
      group: "irregular",
      category: ["reflexive", "perception", "emotions"],
      auxiliary: "être",
      pastParticiple: "senti",
      presentParticiple: "sentant",
      reflexive: true,
      reflexiveInfinitive: "se sentir",
      irregular: {
        présent: ["sens", "sens", "sent", "sentons", "sentez", "sentent"],
        imparfait: ["sentais", "sentais", "sentait", "sentions", "sentiez", "sentaient"],
        futurSimple: ["sentirai", "sentiras", "sentira", "sentirons", "sentirez", "sentiront"],
        conditionnelPrésent: ["sentirais", "sentirais", "sentirait", "sentirions", "sentiriez", "sentiraient"],
        subjonctifPrésent: ["sente", "sentes", "sente", "sentions", "sentiez", "sentent"],
        passéSimple: ["sentis", "sentis", "sentit", "sentîmes", "sentîtes", "sentirent"],
        impératif: ["sens", "sentons", "sentez"]
      }
    }),
    Object.assign(reg("dépêcher", "to hurry", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se dépêcher", auxiliary: "être"
    }),
    Object.assign(reg("reposer", "to rest", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se reposer", auxiliary: "être"
    }),
    Object.assign({
      infinitive: "souvenir",
      english: "to remember",
      group: "irregular",
      category: ["reflexive", "thinking"],
      auxiliary: "être",
      pastParticiple: "souvenu",
      presentParticiple: "souvenant",
      reflexive: true,
      reflexiveInfinitive: "se souvenir",
      irregular: {
        présent: ["souviens", "souviens", "souvient", "souvenons", "souvenez", "souviennent"],
        imparfait: ["souvenais", "souvenais", "souvenait", "souvenions", "souveniez", "souvenaient"],
        futurSimple: ["souviendrai", "souviendras", "souviendra", "souviendrons", "souviendrez", "souviendront"],
        conditionnelPrésent: ["souviendrais", "souviendrais", "souviendrait", "souviendrions", "souviendriez", "souviendraient"],
        subjonctifPrésent: ["souvienne", "souviennes", "souvienne", "souvenions", "souveniez", "souviennent"],
        passéSimple: ["souvins", "souvins", "souvint", "souvînmes", "souvîntes", "souvinrent"],
        impératif: ["souviens", "souvenons", "souvenez"]
      }
    }),
    Object.assign(reg("tromper", "to make a mistake", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se tromper", auxiliary: "être"
    }),
    Object.assign(reg("arrêter", "to stop (oneself)", "er", ["reflexive", "actions"]), {
      reflexive: true, reflexiveInfinitive: "s'arrêter", auxiliary: "être"
    }),
    Object.assign({
      infinitive: "asseoir",
      english: "to sit down",
      group: "irregular",
      category: ["reflexive", "dailyLife"],
      auxiliary: "être",
      pastParticiple: "assis",
      presentParticiple: "asseyant",
      reflexive: true,
      reflexiveInfinitive: "s'asseoir",
      irregular: {
        présent: ["assieds", "assieds", "assied", "asseyons", "asseyez", "asseyent"],
        imparfait: ["asseyais", "asseyais", "asseyait", "asseyions", "asseyiez", "asseyaient"],
        futurSimple: ["assiérai", "assiéras", "assiéra", "assiérons", "assiérez", "assiéront"],
        conditionnelPrésent: ["assiérais", "assiérais", "assiérait", "assiérions", "assiériez", "assiéraient"],
        subjonctifPrésent: ["asseye", "asseyes", "asseye", "asseyions", "asseyiez", "asseyent"],
        passéSimple: ["assis", "assis", "assit", "assîmes", "assîtes", "assirent"],
        impératif: ["assieds", "asseyons", "asseyez"]
      }
    }),
    Object.assign(reg("marier", "to get married", "er", ["reflexive", "social"]), {
      reflexive: true, reflexiveInfinitive: "se marier", auxiliary: "être"
    }),
    Object.assign(reg("laver", "to wash oneself", "er", ["reflexive", "dailyLife"]), {
      reflexive: true, reflexiveInfinitive: "se laver", auxiliary: "être"
    }),
    Object.assign({
      infinitive: "endormir",
      english: "to fall asleep",
      group: "irregular",
      category: ["reflexive", "dailyLife"],
      auxiliary: "être",
      pastParticiple: "endormi",
      presentParticiple: "endormant",
      reflexive: true,
      reflexiveInfinitive: "s'endormir",
      irregular: {
        présent: ["endors", "endors", "endort", "endormons", "endormez", "endorment"],
        imparfait: ["endormais", "endormais", "endormait", "endormions", "endormiez", "endormaient"],
        futurSimple: ["endormirai", "endormiras", "endormira", "endormirons", "endormirez", "endormiront"],
        conditionnelPrésent: ["endormirais", "endormirais", "endormirait", "endormirions", "endormiriez", "endormiraient"],
        subjonctifPrésent: ["endorme", "endormes", "endorme", "endormions", "endormiez", "endorment"],
        passéSimple: ["endormis", "endormis", "endormit", "endormîmes", "endormîtes", "endormirent"],
        impératif: ["endors", "endormons", "endormez"]
      }
    }),
  ];

  // ──────────────────────────────────────────────
  // REGULAR -ER VERBS
  // ──────────────────────────────────────────────

  const regularErVerbs = [
    reg("parler", "to speak", "er", ["essential", "communication"]),
    reg("écouter", "to listen", "er", ["essential", "perception"]),
    reg("demander", "to ask", "er", ["essential", "communication"]),
    reg("expliquer", "to explain", "er", ["communication", "work"]),
    reg("raconter", "to tell (a story)", "er", ["communication"]),
    reg("crier", "to shout, to cry out", "er", ["communication", "emotions"]),
    reg("chanter", "to sing", "er", ["actions", "dailyLife"]),
    reg("montrer", "to show", "er", ["communication", "actions"]),
    reg("proposer", "to propose, to suggest", "er", ["communication", "social"]),
    reg("exprimer", "to express", "er", ["communication", "emotions"]),
    reg("répéter", "to repeat", "er", ["communication"], {
      stemChanges: { presentBoot: "répèt", subjonctifBoot: "répèt" }
    }),
    reg("manger", "to eat", "er", ["essential", "dailyLife"]),
    reg("cuisiner", "to cook", "er", ["dailyLife"]),
    reg("acheter", "to buy", "er", ["dailyLife", "actions"], {
      stemChanges: { presentBoot: "achèt", subjonctifBoot: "achèt", futur: "achèter", conditionnel: "achèter" }
    }),
    reg("travailler", "to work", "er", ["essential", "work"]),
    reg("jouer", "to play", "er", ["dailyLife", "actions"]),
    reg("habiter", "to live (reside)", "er", ["essential", "dailyLife"]),
    reg("porter", "to carry, to wear", "er", ["actions", "dailyLife"]),
    reg("donner", "to give", "er", ["essential", "social"]),
    reg("fermer", "to close", "er", ["actions", "dailyLife"]),
    reg("chercher", "to look for, to search", "er", ["actions", "thinking"]),
    reg("trouver", "to find", "er", ["essential", "actions"]),
    reg("marcher", "to walk", "er", ["movement", "actions"]),
    reg("nager", "to swim", "er", ["actions"]),
    reg("aimer", "to love, to like", "er", ["essential", "emotions"]),
    reg("détester", "to hate", "er", ["emotions"]),
    reg("adorer", "to adore, to love", "er", ["emotions"]),
    reg("regretter", "to regret", "er", ["emotions"]),
    reg("pleurer", "to cry", "er", ["emotions"]),
    reg("regarder", "to watch, to look at", "er", ["essential", "perception"]),
    reg("toucher", "to touch", "er", ["perception", "actions"]),
    reg("goûter", "to taste", "er", ["perception", "dailyLife"]),
    reg("observer", "to observe", "er", ["perception", "thinking"]),
    reg("remarquer", "to notice", "er", ["perception", "thinking"]),
    reg("commencer", "to begin, to start", "er", ["essential", "actions"]),
    reg("continuer", "to continue", "er", ["actions"]),
    reg("arrêter", "to stop", "er", ["actions"]),
    reg("essayer", "to try", "er", ["essential", "actions"], {
      stemChanges: { presentBoot: "essai", subjonctifBoot: "essai" }
    }),
    reg("changer", "to change", "er", ["actions"]),
    reg("aider", "to help", "er", ["social", "actions"]),
    reg("créer", "to create", "er", ["actions", "work"]),
    reg("casser", "to break", "er", ["actions"]),
    reg("couper", "to cut", "er", ["actions", "dailyLife"]),
    reg("lancer", "to throw, to launch", "er", ["actions"]),
    reg("pousser", "to push", "er", ["actions"]),
    reg("tirer", "to pull, to shoot", "er", ["actions"]),
    reg("accepter", "to accept", "er", ["social", "thinking"]),
    reg("refuser", "to refuse", "er", ["social", "communication"]),
    reg("imaginer", "to imagine", "er", ["thinking"]),
    reg("préparer", "to prepare", "er", ["dailyLife", "actions"]),
    reg("utiliser", "to use", "er", ["actions", "work"]),
    reg("laisser", "to leave (behind), to let", "er", ["actions"]),
    reg("garder", "to keep, to guard", "er", ["actions"]),
    reg("quitter", "to leave (a place/person)", "er", ["actions", "movement"]),
    reg("emporter", "to take away, to carry off", "er", ["actions"]),
    reg("apporter", "to bring", "er", ["actions"]),
    reg("ajouter", "to add", "er", ["actions"]),
    reg("retirer", "to remove, to withdraw", "er", ["actions"]),
    reg("améliorer", "to improve", "er", ["actions", "work"]),
    reg("traverser", "to cross", "er", ["movement", "actions"]),
    reg("voyager", "to travel", "er", ["movement", "dailyLife"]),
    reg("visiter", "to visit (a place)", "er", ["movement", "social"]),
    reg("rencontrer", "to meet, to encounter", "er", ["social"]),
    reg("inviter", "to invite", "er", ["social"]),
    reg("présenter", "to present, to introduce", "er", ["social", "communication"]),
    reg("partager", "to share", "er", ["social"]),
    reg("accompagner", "to accompany", "er", ["social", "movement"]),
    reg("remercier", "to thank", "er", ["social", "communication"]),
    reg("excuser", "to excuse", "er", ["social", "communication"]),
    reg("étudier", "to study", "er", ["work", "thinking"]),
    reg("enseigner", "to teach", "er", ["work", "communication"]),
    reg("gagner", "to win, to earn", "er", ["work", "actions"]),
    reg("payer", "to pay", "er", ["dailyLife", "work"], {
      stemChanges: { presentBoot: "pai", subjonctifBoot: "pai" }
    }),
    reg("compter", "to count", "er", ["thinking", "work"]),
    reg("organiser", "to organize", "er", ["work"]),
    reg("développer", "to develop", "er", ["work"]),
    reg("diriger", "to direct, to manage", "er", ["work"]),
    reg("exister", "to exist", "er", ["state"]),
    reg("sembler", "to seem", "er", ["state", "perception"]),
    reg("arriver", "to arrive", "er", ["essential", "movement"], { auxiliary: "être" }),
    reg("entrer", "to enter", "er", ["movement"], { auxiliary: "être" }),
    reg("rester", "to stay, to remain", "er", ["essential", "movement"], { auxiliary: "être" }),
    reg("tomber", "to fall", "er", ["movement"], { auxiliary: "être" }),
    reg("monter", "to go up, to climb", "er", ["movement"], { auxiliary: "être" }),
    reg("rentrer", "to return home", "er", ["movement"], { auxiliary: "être" }),
    reg("retourner", "to return, to go back", "er", ["movement"], { auxiliary: "être" }),
    reg("passer", "to pass, to spend (time)", "er", ["essential", "actions"], { auxiliary: "être" }),
    reg("lever", "to raise, to lift", "er", ["actions"], {
      stemChanges: { presentBoot: "lèv", subjonctifBoot: "lèv", futur: "lèver", conditionnel: "lèver" }
    }),
    reg("jeter", "to throw", "er", ["actions"], {
      stemChanges: { presentBoot: "jett", subjonctifBoot: "jett", futur: "jetter", conditionnel: "jetter" }
    }),
    reg("appuyer", "to press, to lean", "er", ["actions"], {
      stemChanges: { presentBoot: "appui", subjonctifBoot: "appui" }
    }),
    reg("nettoyer", "to clean", "er", ["dailyLife", "actions"], {
      stemChanges: { presentBoot: "nettoi", subjonctifBoot: "nettoi" }
    }),
    reg("employer", "to employ, to use", "er", ["work", "actions"], {
      stemChanges: { presentBoot: "emploi", subjonctifBoot: "emploi" }
    }),
    reg("rappeler", "to call back, to remind", "er", ["communication"], {
      stemChanges: { presentBoot: "rappell", subjonctifBoot: "rappell", futur: "rappeller", conditionnel: "rappeller" }
    }),
    reg("manquer", "to miss, to lack", "er", ["emotions", "state"]),
  ];

  // ──────────────────────────────────────────────
  // REGULAR -IR VERBS (2nd group, -issant)
  // ──────────────────────────────────────────────

  const regularIrVerbs = [
    reg("finir", "to finish", "ir", ["essential", "actions"]),
    reg("réussir", "to succeed", "ir", ["work", "actions"]),
    reg("choisir", "to choose", "ir", ["essential", "thinking"]),
    reg("grandir", "to grow (up)", "ir", ["state"]),
    reg("remplir", "to fill", "ir", ["actions"]),
    reg("réfléchir", "to think, to reflect", "ir", ["thinking"]),
    reg("obéir", "to obey", "ir", ["social"]),
    reg("punir", "to punish", "ir", ["social"]),
    reg("guérir", "to heal, to cure", "ir", ["state", "dailyLife"]),
    reg("nourrir", "to feed, to nourish", "ir", ["dailyLife", "actions"]),
    reg("agir", "to act", "ir", ["actions"]),
    reg("définir", "to define", "ir", ["thinking", "communication"]),
    reg("établir", "to establish", "ir", ["work", "actions"]),
    reg("réagir", "to react", "ir", ["actions", "emotions"]),
    reg("applaudir", "to applaud", "ir", ["social", "actions"]),
    reg("avertir", "to warn", "ir", ["communication"]),
    reg("bâtir", "to build", "ir", ["actions", "work"]),
    reg("ralentir", "to slow down", "ir", ["actions", "movement"]),
    reg("atterrir", "to land", "ir", ["movement"]),
    reg("saisir", "to seize, to grasp", "ir", ["actions", "thinking"]),
    reg("rougir", "to blush", "ir", ["emotions"]),
    reg("maigrir", "to lose weight", "ir", ["state"]),
    reg("grossir", "to gain weight", "ir", ["state"]),
    reg("vieillir", "to age, to grow old", "ir", ["state"]),
    reg("rajeunir", "to rejuvenate", "ir", ["state"]),
    reg("enrichir", "to enrich", "ir", ["state", "work"]),
    reg("approfondir", "to deepen", "ir", ["thinking"]),
    reg("accomplir", "to accomplish", "ir", ["work", "actions"]),
  ];

  // ──────────────────────────────────────────────
  // REGULAR -RE VERBS
  // ──────────────────────────────────────────────

  const regularReVerbs = [
    reg("vendre", "to sell", "re", ["essential", "work"]),
    reg("entendre", "to hear", "re", ["essential", "perception"]),
    reg("répondre", "to answer", "re", ["essential", "communication"]),
    reg("attendre", "to wait (for)", "re", ["essential", "actions"]),
    reg("perdre", "to lose", "re", ["actions"]),
    reg("descendre", "to go down, to descend", "re", ["movement"], { auxiliary: "être" }),
  ];

  // ──────────────────────────────────────────────
  // COMBINE ALL VERBS
  // ──────────────────────────────────────────────

  const verbs = [
    ...irregularVerbs,
    ...reflexiveVerbs,
    ...regularErVerbs,
    ...regularIrVerbs,
    ...regularReVerbs
  ];

  // ──────────────────────────────────────────────
  // PUBLIC API
  // ──────────────────────────────────────────────

  return Object.freeze({
    engine,
    tenseInfo,
    persons: PERSONS,
    verbs,
    categories,

    /** Find a verb by infinitive. */
    findVerb(infinitive) {
      const lower = infinitive.toLowerCase();
      return verbs.find(v =>
        v.infinitive === lower ||
        (v.reflexiveInfinitive && v.reflexiveInfinitive === lower)
      ) || null;
    },

    /** Get all verbs in a given category. */
    getByCategory(cat) {
      return verbs.filter(v => v.category.includes(cat));
    },

    /** Get all verbs that use être as auxiliary. */
    getEtreVerbs() {
      return verbs.filter(v => v.auxiliary === "être");
    },

    /** Get all reflexive verbs. */
    getReflexiveVerbs() {
      return verbs.filter(v => v.reflexive);
    },

    /** Conjugate a verb (by object or infinitive string) in a given tense. */
    conjugate(verbOrInfinitive, tense) {
      const verb = typeof verbOrInfinitive === "string"
        ? this.findVerb(verbOrInfinitive)
        : verbOrInfinitive;
      if (!verb) return null;
      return engine.conjugate(verb, tense);
    },

    /** Get a display-ready conjugation table. */
    getConjugationTable(verbOrInfinitive, tense) {
      const verb = typeof verbOrInfinitive === "string"
        ? this.findVerb(verbOrInfinitive)
        : verbOrInfinitive;
      if (!verb) return null;
      return engine.getConjugationTable(verb, tense);
    },

    /** Get all available tense keys. */
    getTenseKeys() {
      return Object.keys(tenseInfo);
    },

    /** Get all simple (non-compound) tense keys. */
    getSimpleTenseKeys() {
      return Object.keys(tenseInfo).filter(k => !tenseInfo[k].compound);
    },

    /** Get all compound tense keys. */
    getCompoundTenseKeys() {
      return Object.keys(tenseInfo).filter(k => tenseInfo[k].compound);
    },

    /** Get verb count. */
    get count() {
      return verbs.length;
    }
  });
})();
