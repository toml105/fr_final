// ============================================
// GRAMMAR DATABASE  
// ============================================
const GRAMMAR = {

articles: {
  title: "French Articles",
  definite: {
    title: "Definite Articles (the)",
    forms: {masculine: "le", feminine: "la", before_vowel: "l'", plural: "les"},
    examples: ["le livre (the book)", "la table (the table)", "l'eau (the water)", "les enfants (the children)"],
    contractions: {"à + le": "au", "à + les": "aux", "de + le": "du", "de + les": "des"}
  },
  indefinite: {
    title: "Indefinite Articles (a/an/some)",
    forms: {masculine: "un", feminine: "une", plural: "des"},
    examples: ["un homme (a man)", "une femme (a woman)", "des livres (some books)"]
  },
  partitive: {
    title: "Partitive Articles (some/any)",
    forms: {masculine: "du", feminine: "de la", before_vowel: "de l'", plural: "des"},
    examples: ["du pain (some bread)", "de la confiture (some jam)", "de l'eau (some water)"]
  }
},

adjectives: {
  title: "Adjective Agreement & Placement",
  agreement: {
    rules: ["Adjectives agree in gender and number with the noun", "Masculine → Feminine: usually add -e", "Singular → Plural: usually add -s"],
    patterns: [
      {pattern: "Regular: add -e for feminine", examples: ["petit → petite", "grand → grande"]},
      {pattern: "-eux → -euse", examples: ["heureux → heureuse"]},
      {pattern: "-if → -ive", examples: ["actif → active"]},
      {pattern: "-er → -ère", examples: ["premier → première"]},
      {pattern: "Irregular: beau/belle, nouveau/nouvelle, vieux/vieille", examples: ["un beau garçon", "une belle fille"]}
    ]
  },
  placement: {
    rule: "Most adjectives come AFTER the noun",
    exceptions: "BANGS adjectives come BEFORE: Beauty, Age, Number, Goodness, Size",
    bangs: ["beau", "joli", "nouveau", "vieux", "jeune", "bon", "mauvais", "grand", "petit", "gros"]
  }
},

possessives: {
  title: "Possessive Adjectives",
  forms: {
    "my": {masculine: "mon", feminine: "ma", plural: "mes"},
    "your (tu)": {masculine: "ton", feminine: "ta", plural: "tes"},
    "his/her/its": {masculine: "son", feminine: "sa", plural: "ses"},
    "our": {masculine: "notre", feminine: "notre", plural: "nos"},
    "your (vous)": {masculine: "votre", feminine: "votre", plural: "vos"},
    "their": {masculine: "leur", feminine: "leur", plural: "leurs"}
  },
  note: "Use mon/ton/son before feminine nouns starting with vowel: mon amie"
},

pronouns: {
  title: "French Pronouns",
  subject: ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"],
  direct_object: {forms: ["me", "te", "le/la", "nous", "vous", "les"], position: "Before the verb", examples: ["Je le vois.", "Elle les aime."]},
  indirect_object: {forms: ["me", "te", "lui", "nous", "vous", "leur"], position: "Before the verb", examples: ["Je lui parle.", "Elle leur donne."]},
  y: {replaces: "à + place/thing", examples: ["J'y vais.", "J'y pense."]},
  en: {replaces: "de + noun, quantities", examples: ["J'en veux.", "J'en ai trois."]}
},

negation: {
  title: "Negation",
  basic: {pattern: "ne ... pas", rule: "Place ne before verb, pas after", examples: ["Je ne parle pas.", "Nous n'avons pas faim."]},
  other_patterns: [
    {pattern: "ne ... plus", meaning: "no longer", example: "Je ne fume plus."},
    {pattern: "ne ... jamais", meaning: "never", example: "Elle ne ment jamais."},
    {pattern: "ne ... rien", meaning: "nothing", example: "Je ne vois rien."},
    {pattern: "ne ... personne", meaning: "nobody", example: "Je ne connais personne."},
    {pattern: "ne ... que", meaning: "only", example: "Je n'ai que 5 euros."}
  ]
},

questions: {
  title: "Question Formation",
  methods: [
    {method: "Intonation (informal)", example: "Tu viens?"},
    {method: "Est-ce que", example: "Est-ce que tu viens?"},
    {method: "Inversion (formal)", example: "Viens-tu?"}
  ],
  question_words: [
    {word: "qui", meaning: "who"},
    {word: "que/qu'", meaning: "what"},
    {word: "où", meaning: "where"},
    {word: "quand", meaning: "when"},
    {word: "comment", meaning: "how"},
    {word: "pourquoi", meaning: "why"},
    {word: "combien", meaning: "how much/many"},
    {word: "quel/quelle", meaning: "which/what"}
  ]
},

tenses: {
  title: "French Verb Tenses",
  present: {
    title: "Present Tense",
    uses: ["Current actions", "Habitual actions", "General truths"],
    regular_er: {endings: ["-e", "-es", "-e", "-ons", "-ez", "-ent"]},
    regular_ir: {endings: ["-is", "-is", "-it", "-issons", "-issez", "-issent"]},
    regular_re: {endings: ["-s", "-s", "-", "-ons", "-ez", "-ent"]}
  },
  passe_compose: {
    title: "Passé Composé",
    formation: "avoir/être + past participle",
    with_avoir: "Most verbs",
    with_etre: "DR MRS VANDERTRAMP verbs + reflexives",
    agreement: "With être, participle agrees with subject"
  },
  imparfait: {
    title: "Imparfait",
    formation: "nous stem + -ais, -ais, -ait, -ions, -iez, -aient",
    uses: ["Descriptions in past", "Habitual past actions", "Ongoing actions"]
  },
  futur_simple: {
    title: "Future Simple",
    formation: "infinitive + -ai, -as, -a, -ons, -ez, -ont",
    irregular_stems: ["être → ser-", "avoir → aur-", "faire → fer-", "aller → ir-"]
  },
  conditionnel: {
    title: "Conditional",
    formation: "future stem + imperfect endings",
    uses: ["Polite requests", "Hypothetical situations"]
  }
},

si_clauses: {
  title: "Si Clauses (If/Then)",
  types: [
    {type: "Real/Likely", si: "présent", result: "présent/futur", example: "Si tu viens, je serai content."},
    {type: "Hypothetical", si: "imparfait", result: "conditionnel", example: "Si j'avais de l'argent, j'achèterais une voiture."}
  ],
  warning: "Never use futur or conditionnel after si!"
},

comparatives: {
  title: "Comparatives & Superlatives",
  comparative: [
    {type: "more...than", pattern: "plus + adj + que"},
    {type: "less...than", pattern: "moins + adj + que"},
    {type: "as...as", pattern: "aussi + adj + que"}
  ],
  superlative: [
    {type: "the most", pattern: "le/la/les plus + adj"},
    {type: "the least", pattern: "le/la/les moins + adj"}
  ],
  irregular: [
    {adj: "bon", comparative: "meilleur", superlative: "le meilleur"},
    {adj: "bien", comparative: "mieux", superlative: "le mieux"}
  ]
},

prepositions: {
  title: "Prepositions",
  location: [
    {prep: "à", uses: "at, to, in (cities)"},
    {prep: "en", uses: "in (feminine countries)"},
    {prep: "au/aux", uses: "in (masculine/plural countries)"},
    {prep: "dans", uses: "in, inside"},
    {prep: "sur", uses: "on"},
    {prep: "sous", uses: "under"},
    {prep: "chez", uses: "at someone's place"}
  ]
},

relative_pronouns: {
  title: "Relative Pronouns",
  pronouns: [
    {pronoun: "qui", function: "subject", example: "L'homme qui parle..."},
    {pronoun: "que", function: "direct object", example: "Le livre que je lis..."},
    {pronoun: "dont", function: "of which/whose", example: "Le livre dont je parle..."},
    {pronoun: "où", function: "where/when", example: "La ville où je suis né..."}
  ]
}

};
