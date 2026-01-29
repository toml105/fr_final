// =============================================================================
// French Grammar Lessons — Comprehensive Reference
// =============================================================================

const GRAMMAR = {
  topics: [

    // =========================================================================
    // 1. ARTICLES
    // =========================================================================
    {
      id: 'articles',
      name: 'Articles',
      icon: '📝',
      color: '#6366f1',
      level: 'beginner',
      sections: [
        {
          title: 'Definite Articles (The)',
          content: 'In French, every noun has a gender (masculine or feminine) and the definite article must agree with the noun in gender and number. Definite articles are used more frequently in French than "the" is in English — they appear with general concepts, languages, and abstract ideas.',
          examples: [
            { fr: 'le livre', en: 'the book', note: 'masculine singular' },
            { fr: 'la maison', en: 'the house', note: 'feminine singular' },
            { fr: 'les enfants', en: 'the children', note: 'plural (any gender)' },
            { fr: "l'école", en: 'the school', note: 'before a vowel sound' },
            { fr: "l'homme", en: 'the man', note: 'before silent h' },
            { fr: "J'aime le chocolat.", en: 'I like chocolate.', note: 'general concept — article required in French' },
            { fr: 'Le français est beau.', en: 'French is beautiful.', note: 'language — article required' },
            { fr: 'La liberté est importante.', en: 'Freedom is important.', note: 'abstract idea' }
          ],
          rules: [
            'le → masculine singular (le garçon)',
            'la → feminine singular (la fille)',
            'les → all plurals regardless of gender (les garçons, les filles)',
            "l' → before any singular noun starting with a vowel or silent h (l'ami, l'heure)"
          ],
          tip: "Unlike English, French uses definite articles with general statements. \"I like music\" becomes \"J'aime la musique.\" If you would say \"in general\" in English, you need \"le/la/les\" in French."
        },
        {
          title: 'Indefinite Articles (A, An, Some)',
          content: 'Indefinite articles are used when referring to non-specific items, just as "a" or "an" in English. The plural form "des" means "some" and has no direct English equivalent — English often drops it entirely.',
          examples: [
            { fr: 'un chat', en: 'a cat', note: 'masculine singular' },
            { fr: 'une pomme', en: 'an apple', note: 'feminine singular' },
            { fr: 'des livres', en: 'some books / books', note: 'plural' },
            { fr: "J'ai un frère.", en: 'I have a brother.', note: '' },
            { fr: 'Elle veut une glace.', en: 'She wants an ice cream.', note: '' },
            { fr: 'Il y a des problèmes.', en: 'There are (some) problems.', note: 'des is required in French' }
          ],
          rules: [
            'un → masculine singular',
            'une → feminine singular',
            'des → all plurals (some / any)',
            'After a negation, un/une/des become de/d\': "Je n\'ai pas de chat."'
          ],
          tip: "After negative sentences, \"un/une/des\" all become \"de\" (or \"d'\" before a vowel). \"J'ai des amis\" → \"Je n'ai pas d'amis.\""
        },
        {
          title: 'Partitive Articles (Some / Any — Uncountable)',
          content: 'Partitive articles express an unspecified quantity of something, especially with food, drink, and abstract nouns. They translate loosely to "some" or "any" in English. Think of them as meaning "some portion of."',
          examples: [
            { fr: 'du pain', en: 'some bread', note: 'masculine (de + le = du)' },
            { fr: 'de la confiture', en: 'some jam', note: 'feminine' },
            { fr: "de l'eau", en: 'some water', note: 'before a vowel' },
            { fr: 'des épinards', en: 'some spinach', note: 'plural' },
            { fr: 'Je bois du café.', en: 'I drink (some) coffee.', note: '' },
            { fr: 'Elle mange de la salade.', en: 'She eats (some) salad.', note: '' },
            { fr: 'Il a de la patience.', en: 'He has (some) patience.', note: 'abstract noun' },
            { fr: 'Je ne bois pas de café.', en: "I don't drink coffee.", note: 'negative → de' }
          ],
          rules: [
            'du → masculine singular (contraction of de + le)',
            'de la → feminine singular',
            "de l' → before vowel or silent h",
            'des → plural',
            'All partitive articles become "de" or "d\'" after a negation',
            'After expressions of quantity (beaucoup, peu, assez, trop), use "de" alone: "beaucoup de pain"'
          ],
          tip: 'If you can insert "some" or "a portion of" before the noun in English, use the partitive in French. "I want bread" → "Je veux du pain" (I want some bread).'
        }
      ]
    },

    // =========================================================================
    // 2. NOUNS
    // =========================================================================
    {
      id: 'nouns',
      name: 'Nouns & Gender',
      icon: '🔤',
      color: '#8b5cf6',
      level: 'beginner',
      sections: [
        {
          title: 'Grammatical Gender',
          content: 'Every French noun is either masculine (masculin) or feminine (féminin). There is no neutral gender. While the gender of many nouns must simply be memorized, there are helpful patterns based on word endings that can guide you.',
          examples: [
            { fr: 'le soleil', en: 'the sun', note: 'masculine' },
            { fr: 'la lune', en: 'the moon', note: 'feminine' },
            { fr: 'le problème', en: 'the problem', note: 'masculine — -ème ending' },
            { fr: 'la nation', en: 'the nation', note: 'feminine — -tion ending' },
            { fr: 'le courage', en: 'courage', note: 'masculine — -age ending' },
            { fr: 'la liberté', en: 'freedom', note: 'feminine — -té ending' }
          ],
          rules: [
            'Usually masculine endings: -age, -ment, -isme, -eau, -ème, -ège, -ard, -oir',
            'Usually feminine endings: -tion, -sion, -ure, -ence, -ance, -esse, -ette, -ie, -té, -ée',
            'Words ending in -e are NOT automatically feminine (le musée, le lycée, le problème)',
            'Days of the week, months, seasons, languages, trees, and metals are usually masculine',
            'Sciences, academic subjects, and most countries ending in -e are usually feminine'
          ],
          tip: 'Always learn a noun together with its article. Don\'t memorize "maison" — memorize "la maison." This trains your brain to recall the gender naturally.'
        },
        {
          title: 'Forming Plurals',
          content: 'Most French nouns form their plural by adding -s to the singular form, just like English. However, several groups follow special rules, and some nouns are irregular.',
          examples: [
            { fr: 'le chat → les chats', en: 'the cat → the cats', note: 'regular: add -s' },
            { fr: 'le bateau → les bateaux', en: 'the boat → the boats', note: '-eau → -eaux' },
            { fr: 'le journal → les journaux', en: 'the newspaper → the newspapers', note: '-al → -aux' },
            { fr: 'le nez → les nez', en: 'the nose → the noses', note: '-z stays -z' },
            { fr: "l'œil → les yeux", en: 'the eye → the eyes', note: 'irregular' },
            { fr: 'monsieur → messieurs', en: 'sir → sirs', note: 'irregular' },
            { fr: 'madame → mesdames', en: 'madam → madams', note: 'irregular' }
          ],
          rules: [
            'Most nouns: add -s (livre → livres)',
            'Nouns ending in -eau, -au, -eu: add -x (château → châteaux, jeu → jeux)',
            'Nouns ending in -al: change to -aux (animal → animaux, journal → journaux)',
            'Nouns ending in -s, -x, -z: no change (le bras → les bras, la voix → les voix)',
            'Some -ail nouns: change to -aux (travail → travaux)',
            'Some nouns are always plural: les vacances, les gens'
          ],
          tip: 'The final -s in French plurals is silent! "Les chats" is pronounced the same as "le chat" — only the article changes in speech.'
        },
        {
          title: 'Masculine and Feminine Forms of Nouns',
          content: 'Many nouns referring to people have both a masculine and a feminine form. The feminine is often formed by adding -e or by changing the ending.',
          examples: [
            { fr: 'un ami → une amie', en: 'a friend (m) → a friend (f)', note: 'add -e' },
            { fr: 'un acteur → une actrice', en: 'an actor → an actress', note: '-eur → -rice' },
            { fr: 'un boulanger → une boulangère', en: 'a baker (m/f)', note: '-er → -ère' },
            { fr: 'un musicien → une musicienne', en: 'a musician (m/f)', note: '-ien → -ienne' },
            { fr: 'un homme → une femme', en: 'a man → a woman', note: 'completely different' },
            { fr: 'un élève → une élève', en: 'a student (m/f)', note: 'same form, article changes' }
          ],
          rules: [
            'Add -e: ami → amie, étudiant → étudiante',
            '-er → -ère: boulanger → boulangère',
            '-eur → -euse: chanteur → chanteuse, danseur → danseuse',
            '-eur → -rice: acteur → actrice, directeur → directrice',
            '-ien → -ienne: musicien → musicienne',
            '-on → -onne: patron → patronne',
            'Some nouns use the same form: un/une artiste, un/une élève, un/une touriste'
          ],
          tip: 'When the masculine form already ends in -e, the feminine is often identical — only the article changes: un artiste / une artiste.'
        }
      ]
    },

    // =========================================================================
    // 3. ADJECTIVES
    // =========================================================================
    {
      id: 'adjectives',
      name: 'Adjectives',
      icon: '🎨',
      color: '#ec4899',
      level: 'beginner',
      sections: [
        {
          title: 'Agreement in Gender and Number',
          content: 'French adjectives must agree with the noun they describe in both gender (masculine/feminine) and number (singular/plural). The base form listed in dictionaries is masculine singular.',
          examples: [
            { fr: 'un petit garçon', en: 'a small boy', note: 'masculine singular' },
            { fr: 'une petite fille', en: 'a small girl', note: 'feminine singular: add -e' },
            { fr: 'des petits garçons', en: 'small boys', note: 'masculine plural: add -s' },
            { fr: 'des petites filles', en: 'small girls', note: 'feminine plural: add -es' },
            { fr: 'un homme heureux', en: 'a happy man', note: 'masculine' },
            { fr: 'une femme heureuse', en: 'a happy woman', note: '-eux → -euse' }
          ],
          rules: [
            'Feminine: usually add -e to masculine (grand → grande)',
            'If masculine already ends in -e, no change (rouge → rouge)',
            'Masculine plural: add -s (grands)',
            'Feminine plural: add -es (grandes)',
            '-eux → -euse (heureux → heureuse)',
            '-if → -ive (actif → active, sportif → sportive)',
            '-el → -elle (naturel → naturelle)',
            '-on → -onne (bon → bonne, mignon → mignonne)',
            '-er → -ère (premier → première, cher → chère)'
          ],
          tip: 'Adjectives that already end in -e in the masculine (like "rouge," "jeune," "triste") do NOT add another -e for the feminine.'
        },
        {
          title: 'Adjective Placement & the BANGS Rule',
          content: 'Most French adjectives come AFTER the noun, which is the opposite of English. However, a group of common short adjectives come BEFORE the noun. The acronym BANGS helps you remember them: Beauty, Age, Number, Goodness, Size.',
          examples: [
            { fr: 'une voiture rouge', en: 'a red car', note: 'color → after noun' },
            { fr: 'un film intéressant', en: 'an interesting film', note: 'most adjectives → after noun' },
            { fr: 'une belle maison', en: 'a beautiful house', note: 'Beauty → before noun' },
            { fr: 'un vieux livre', en: 'an old book', note: 'Age → before noun' },
            { fr: 'la première fois', en: 'the first time', note: 'Number → before noun' },
            { fr: 'un bon repas', en: 'a good meal', note: 'Goodness → before noun' },
            { fr: 'une grande ville', en: 'a big city', note: 'Size → before noun' },
            { fr: 'un petit chat noir', en: 'a small black cat', note: 'petit before, noir after' }
          ],
          rules: [
            'B (Beauty): beau, joli',
            'A (Age): jeune, vieux, nouveau, ancien',
            'N (Number): premier, deuxième, dernier, prochain',
            'G (Goodness): bon, mauvais, gentil, méchant',
            'S (Size): grand, petit, gros, long, court, haut',
            'Other (also before): autre, même, tel',
            'All other adjectives go AFTER the noun by default'
          ],
          tip: 'Some adjectives change meaning based on their position! "un ancien élève" = a former student; "un bâtiment ancien" = an old/ancient building. "un grand homme" = a great man; "un homme grand" = a tall man.'
        },
        {
          title: 'Irregular Adjectives',
          content: 'Several very common French adjectives have irregular feminine and/or plural forms. Three adjectives — beau, nouveau, vieux — also have a special masculine form used before vowels and silent h.',
          examples: [
            { fr: 'beau → belle / bel', en: 'beautiful / handsome', note: 'bel before vowel: un bel homme' },
            { fr: 'nouveau → nouvelle / nouvel', en: 'new', note: 'nouvel before vowel: un nouvel ami' },
            { fr: 'vieux → vieille / vieil', en: 'old', note: 'vieil before vowel: un vieil arbre' },
            { fr: 'blanc → blanche', en: 'white', note: '-anc → -anche' },
            { fr: 'fou → folle', en: 'crazy', note: 'fol before vowel: un fol espoir' },
            { fr: 'long → longue', en: 'long', note: '-ong → -ongue' },
            { fr: 'sec → sèche', en: 'dry', note: 'irregular feminine' },
            { fr: 'doux → douce', en: 'sweet / soft', note: '-oux → -ouce' },
            { fr: 'faux → fausse', en: 'false', note: '-aux → -ausse' }
          ],
          rules: [
            'beau / bel / belle / beaux / belles',
            'nouveau / nouvel / nouvelle / nouveaux / nouvelles',
            'vieux / vieil / vieille / vieux / vieilles',
            'blanc / blanche / blancs / blanches',
            'tout / toute / tous / toutes (all)',
            'The special forms bel, nouvel, vieil are ONLY used before a masculine singular noun that starts with a vowel or silent h'
          ],
          tip: 'Think of "bel, nouvel, vieil" as existing purely for pronunciation ease. French avoids two vowel sounds colliding, so it uses these smoother forms.'
        }
      ]
    },

    // =========================================================================
    // 4. POSSESSIVE ADJECTIVES
    // =========================================================================
    {
      id: 'possessive-adjectives',
      name: 'Possessive Adjectives',
      icon: '👤',
      color: '#f59e0b',
      level: 'beginner',
      sections: [
        {
          title: 'My, Your, His/Her/Its, Our, Their',
          content: 'Possessive adjectives in French agree with the noun they modify (the thing possessed), NOT with the possessor. This is different from English, where "his/her" tells you the gender of the owner.',
          examples: [
            { fr: 'mon livre', en: 'my book', note: 'masculine singular' },
            { fr: 'ma maison', en: 'my house', note: 'feminine singular' },
            { fr: 'mes amis', en: 'my friends', note: 'plural' },
            { fr: 'mon amie', en: 'my friend (f)', note: 'feminine BUT starts with vowel → mon' },
            { fr: 'son père', en: 'his/her father', note: '"son" because père is masculine' },
            { fr: 'sa mère', en: 'his/her mother', note: '"sa" because mère is feminine' },
            { fr: 'ses parents', en: 'his/her parents', note: '"ses" because parents is plural' },
            { fr: 'notre maison', en: 'our house', note: 'notre for m/f singular' },
            { fr: 'leur voiture', en: 'their car', note: 'leur for m/f singular' },
            { fr: 'leurs enfants', en: 'their children', note: 'leurs for plural' }
          ],
          rules: [
            'je → mon (m), ma (f), mes (pl) — my',
            'tu → ton (m), ta (f), tes (pl) — your (informal)',
            'il/elle/on → son (m), sa (f), ses (pl) — his/her/its',
            'nous → notre (m/f), nos (pl) — our',
            'vous → votre (m/f), vos (pl) — your (formal/plural)',
            'ils/elles → leur (m/f), leurs (pl) — their',
            'Before feminine singular nouns starting with a vowel or silent h: use mon/ton/son instead of ma/ta/sa'
          ],
          tip: '"Son livre" can mean "his book" OR "her book." Context tells you which. The adjective matches "livre" (masculine), not the owner. This is the #1 source of confusion for English speakers.'
        },
        {
          title: 'Common Mistakes with Possessives',
          content: 'Because French possessive adjectives agree with the object possessed rather than the possessor, learners often make errors. Here are the most common pitfalls and how to avoid them.',
          examples: [
            { fr: 'Elle aime son chien.', en: 'She loves her dog.', note: 'son because chien is masculine' },
            { fr: 'Il adore sa voiture.', en: 'He loves his car.', note: 'sa because voiture is feminine' },
            { fr: 'mon amie (not ma amie)', en: 'my friend (f)', note: 'use mon before feminine vowel' },
            { fr: 'C\'est leur maison.', en: 'It\'s their house.', note: 'leur — no -s for singular noun' },
            { fr: 'Ce sont leurs enfants.', en: 'Those are their children.', note: 'leurs — add -s for plural noun' }
          ],
          rules: [
            'WRONG: "Elle aime sa chien" — CORRECT: "Elle aime son chien" (match the noun, not the person)',
            'WRONG: "ma amie" — CORRECT: "mon amie" (use mon/ton/son before feminine nouns starting with a vowel)',
            'WRONG: "leurs maison" — CORRECT: "leur maison" (singular noun = no -s on leur)',
            '"Son/sa/ses" is ambiguous — add "à lui" or "à elle" for clarity: "son livre à elle" = her book'
          ],
          tip: 'To decide between mon/ma/mes (or ton/ta/tes, son/sa/ses), look at the NOUN that follows, not the person who owns it. Ask: "Is the noun masculine, feminine, or plural?"'
        }
      ]
    },

    // =========================================================================
    // 5. DEMONSTRATIVE ADJECTIVES
    // =========================================================================
    {
      id: 'demonstrative-adjectives',
      name: 'Demonstrative Adjectives',
      icon: '👉',
      color: '#14b8a6',
      level: 'beginner',
      sections: [
        {
          title: 'This, That, These, Those',
          content: 'Demonstrative adjectives point out specific nouns ("this book," "that car"). French uses ce/cet/cette/ces and does not normally distinguish between "this" and "that." To make the distinction explicit, add "-ci" (this/here) or "-là" (that/there) after the noun.',
          examples: [
            { fr: 'ce livre', en: 'this/that book', note: 'masculine singular (consonant)' },
            { fr: 'cet homme', en: 'this/that man', note: 'masculine singular (vowel/silent h)' },
            { fr: 'cet arbre', en: 'this/that tree', note: 'masculine singular (vowel)' },
            { fr: 'cette femme', en: 'this/that woman', note: 'feminine singular' },
            { fr: 'cette idée', en: 'this/that idea', note: 'feminine singular' },
            { fr: 'ces enfants', en: 'these/those children', note: 'plural (any gender)' },
            { fr: 'ce livre-ci', en: 'this book (here)', note: 'add -ci for "this"' },
            { fr: 'ce livre-là', en: 'that book (there)', note: 'add -là for "that"' },
            { fr: 'ces jours-ci', en: 'these days', note: '-ci for proximity' }
          ],
          rules: [
            'ce → masculine singular before a consonant (ce garçon)',
            'cet → masculine singular before a vowel or silent h (cet ami, cet hôtel)',
            'cette → all feminine singular (cette fille, cette amie)',
            'ces → all plurals (ces garçons, ces filles)',
            'Add -ci to the noun for "this/these" (proximity)',
            'Add -là to the noun for "that/those" (distance)',
            'Without -ci/-là, the demonstrative is neutral and can mean either'
          ],
          tip: '"Cet" exists for the same reason as "bel/nouvel/vieil" — French avoids awkward vowel collisions. You would never say "ce ami" because it sounds choppy; "cet ami" flows better.'
        }
      ]
    },

    // =========================================================================
    // 6. SUBJECT PRONOUNS
    // =========================================================================
    {
      id: 'subject-pronouns',
      name: 'Subject Pronouns',
      icon: '🙋',
      color: '#3b82f6',
      level: 'beginner',
      sections: [
        {
          title: 'The French Subject Pronouns',
          content: 'French has nine subject pronouns. Unlike English, French distinguishes between informal "you" (tu) and formal/plural "you" (vous). The pronoun "on" is extremely versatile and is used constantly in everyday speech.',
          examples: [
            { fr: 'Je parle français.', en: 'I speak French.', note: '1st person singular' },
            { fr: 'Tu es mon ami.', en: 'You are my friend.', note: '2nd person singular (informal)' },
            { fr: 'Il est grand.', en: 'He is tall.', note: '3rd person masculine' },
            { fr: 'Elle est intelligente.', en: 'She is intelligent.', note: '3rd person feminine' },
            { fr: 'On va au cinéma.', en: 'We\'re going to the movies.', note: '"on" = informal "we"' },
            { fr: 'Nous sommes contents.', en: 'We are happy.', note: '1st person plural (formal)' },
            { fr: 'Vous êtes professeur ?', en: 'Are you a teacher?', note: 'formal "you" or plural' },
            { fr: 'Ils sont français.', en: 'They are French.', note: '3rd person masculine/mixed plural' },
            { fr: 'Elles sont françaises.', en: 'They are French.', note: '3rd person feminine plural' }
          ],
          rules: [
            'je (j\') → I (j\' before a vowel: j\'aime)',
            'tu → you (one person, informal — friends, family, children, peers)',
            'il → he / it (masculine)',
            'elle → she / it (feminine)',
            'on → we (informal), one, people in general',
            'nous → we (formal/written)',
            'vous → you (formal singular, OR any plural "you")',
            'ils → they (all masculine, or mixed group)',
            'elles → they (all feminine group only)'
          ],
          tip: 'In everyday spoken French, "on" has largely replaced "nous" for "we." "On y va !" (Let\'s go!) is far more common than "Nous y allons." Use "nous" in formal writing and "on" in conversation.'
        },
        {
          title: 'Tu vs. Vous',
          content: 'Choosing between "tu" and "vous" is an important social skill in French. Using the wrong one can seem either rude or overly stiff. When in doubt, start with "vous" and wait for the other person to suggest switching.',
          examples: [
            { fr: 'Tu viens ce soir ?', en: 'Are you coming tonight?', note: 'to a friend' },
            { fr: 'Vous venez ce soir ?', en: 'Are you coming tonight?', note: 'to a boss or stranger' },
            { fr: 'Comment tu t\'appelles ?', en: 'What\'s your name?', note: 'informal' },
            { fr: 'Comment vous appelez-vous ?', en: 'What is your name?', note: 'formal' },
            { fr: 'On se tutoie ?', en: 'Shall we use tu?', note: 'suggesting informality' }
          ],
          rules: [
            'Use TU with: friends, family, children, classmates, peers, animals, God (in prayer)',
            'Use VOUS with: strangers, elders, bosses, officials, teachers (unless they say otherwise), customers',
            'VOUS is always used for addressing more than one person, even friends',
            'In professional settings, wait for the senior person to suggest "tu"',
            '"Tutoyer" = to use tu; "vouvoyer" = to use vous'
          ],
          tip: 'A helpful rule of thumb: if you would address someone by their first name in a professional English context, "tu" is probably okay. If you would use "Mr./Ms. + last name," use "vous."'
        }
      ]
    },

    // =========================================================================
    // 7. PRESENT TENSE
    // =========================================================================
    {
      id: 'present-tense',
      name: 'Present Tense',
      icon: '⏰',
      color: '#10b981',
      level: 'beginner',
      sections: [
        {
          title: 'Regular -ER Verbs',
          content: 'About 80% of French verbs are -ER verbs, making this the most important conjugation pattern. Remove "-er" from the infinitive to find the stem, then add the present tense endings. Note that je, tu, il/elle, and ils/elles forms all sound the same in speech!',
          examples: [
            { fr: 'je parle', en: 'I speak / I am speaking', note: 'stem + e' },
            { fr: 'tu parles', en: 'you speak', note: 'stem + es' },
            { fr: 'il/elle/on parle', en: 'he/she/one speaks', note: 'stem + e' },
            { fr: 'nous parlons', en: 'we speak', note: 'stem + ons' },
            { fr: 'vous parlez', en: 'you speak', note: 'stem + ez' },
            { fr: 'ils/elles parlent', en: 'they speak', note: 'stem + ent' },
            { fr: 'Je mange une pomme.', en: 'I eat / I am eating an apple.', note: '' },
            { fr: 'Nous travaillons ensemble.', en: 'We work together.', note: '' }
          ],
          rules: [
            'Remove -er from infinitive to get stem: parler → parl-',
            'je → -e (parle)',
            'tu → -es (parles)',
            'il/elle/on → -e (parle)',
            'nous → -ons (parlons)',
            'vous → -ez (parlez)',
            'ils/elles → -ent (parlent)',
            'The -ent ending is SILENT — "ils parlent" sounds like "il parle"',
            'Common -ER verbs: aimer, manger, habiter, travailler, jouer, regarder, écouter, chercher, donner, trouver'
          ],
          tip: 'French present tense covers both "I speak" and "I am speaking." There is no separate progressive form. "Je mange" = "I eat" AND "I am eating."'
        },
        {
          title: 'Regular -IR Verbs',
          content: 'The second group of regular verbs ends in -IR. These verbs insert "-iss-" in the plural forms (nous, vous, ils/elles), which is their distinguishing feature.',
          examples: [
            { fr: 'je finis', en: 'I finish', note: 'stem + is' },
            { fr: 'tu finis', en: 'you finish', note: 'stem + is' },
            { fr: 'il/elle/on finit', en: 'he/she finishes', note: 'stem + it' },
            { fr: 'nous finissons', en: 'we finish', note: 'stem + iss + ons' },
            { fr: 'vous finissez', en: 'you finish', note: 'stem + iss + ez' },
            { fr: 'ils/elles finissent', en: 'they finish', note: 'stem + iss + ent' },
            { fr: 'Je choisis le rouge.', en: 'I choose the red one.', note: '' },
            { fr: 'Nous réussissons toujours.', en: 'We always succeed.', note: '' }
          ],
          rules: [
            'Remove -ir to get stem: finir → fin-',
            'je → -is, tu → -is, il/elle/on → -it',
            'nous → -issons, vous → -issez, ils/elles → -issent',
            'Common regular -IR verbs: finir, choisir, réussir, remplir, réfléchir, grandir, obéir, ralentir, grossir, maigrir',
            'WARNING: Not all -ir verbs follow this pattern. Verbs like partir, dormir, sortir are irregular.'
          ],
          tip: 'If you see "-issons" in the nous form, the verb is a regular -IR verb. If it lacks "-iss-", it is irregular (like "nous partons" from partir).'
        },
        {
          title: 'Regular -RE Verbs',
          content: 'The third regular conjugation group ends in -RE. These verbs are less common than -ER or -IR verbs but still important to master.',
          examples: [
            { fr: 'je vends', en: 'I sell', note: 'stem + s' },
            { fr: 'tu vends', en: 'you sell', note: 'stem + s' },
            { fr: 'il/elle/on vend', en: 'he/she sells', note: 'stem only (no ending)' },
            { fr: 'nous vendons', en: 'we sell', note: 'stem + ons' },
            { fr: 'vous vendez', en: 'you sell', note: 'stem + ez' },
            { fr: 'ils/elles vendent', en: 'they sell', note: 'stem + ent' },
            { fr: "J'attends le bus.", en: 'I am waiting for the bus.', note: '' },
            { fr: 'Il répond à la question.', en: 'He answers the question.', note: '' }
          ],
          rules: [
            'Remove -re to get stem: vendre → vend-',
            'je → -s, tu → -s, il/elle/on → nothing (just the stem)',
            'nous → -ons, vous → -ez, ils/elles → -ent',
            'The il/elle/on form has NO ending — just the bare stem',
            'Common -RE verbs: vendre, attendre, entendre, répondre, perdre, rendre, descendre, défendre'
          ],
          tip: 'The key to -RE verbs: the il/elle form drops the ending entirely. "Il vend" (he sells) — no -t, no -d added, just the stem "vend."'
        },
        {
          title: 'Essential Irregular Verbs',
          content: 'The most frequently used French verbs are irregular. You must memorize these individually, as they do not follow standard patterns. Here are the most critical ones.',
          examples: [
            { fr: 'je suis, tu es, il est, nous sommes, vous êtes, ils sont', en: 'être (to be)', note: 'most used verb' },
            { fr: "j'ai, tu as, il a, nous avons, vous avez, ils ont", en: 'avoir (to have)', note: '2nd most used' },
            { fr: 'je vais, tu vas, il va, nous allons, vous allez, ils vont', en: 'aller (to go)', note: '' },
            { fr: 'je fais, tu fais, il fait, nous faisons, vous faites, ils font', en: 'faire (to do/make)', note: '' },
            { fr: 'je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent', en: 'pouvoir (can/to be able)', note: '' },
            { fr: 'je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent', en: 'vouloir (to want)', note: '' },
            { fr: 'je dois, tu dois, il doit, nous devons, vous devez, ils doivent', en: 'devoir (must/to have to)', note: '' },
            { fr: 'je sais, tu sais, il sait, nous savons, vous savez, ils savent', en: 'savoir (to know facts)', note: '' },
            { fr: 'je viens, tu viens, il vient, nous venons, vous venez, ils viennent', en: 'venir (to come)', note: '' },
            { fr: 'je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent', en: 'prendre (to take)', note: '' }
          ],
          rules: [
            'être and avoir must be memorized first — they are also used as helping verbs',
            'aller is the only -er verb that is irregular',
            'faire: note "vous faites" (not "faisez") and "ils font"',
            'pouvoir/vouloir: stem changes in singular (peu-/veu-) vs plural (pouv-/voul-)',
            'prendre: "ils prennent" (double n) — same pattern for comprendre, apprendre, surprendre',
            'venir: "ils viennent" (double n) — same pattern for devenir, revenir, tenir'
          ],
          tip: 'Focus on être, avoir, aller, and faire first — they account for a huge portion of everyday French. You will use them hundreds of times before you need rarer irregulars.'
        }
      ]
    },

    // =========================================================================
    // 8. NEGATION
    // =========================================================================
    {
      id: 'negation',
      name: 'Negation',
      icon: '🚫',
      color: '#ef4444',
      level: 'beginner',
      sections: [
        {
          title: 'Basic Negation: ne...pas',
          content: 'French negation wraps around the conjugated verb like a sandwich: "ne" goes before the verb, and "pas" (or another negative word) goes after it. In spoken French, "ne" is frequently dropped, but it should be used in writing.',
          examples: [
            { fr: 'Je ne parle pas anglais.', en: 'I do not speak English.', note: 'ne...pas around verb' },
            { fr: 'Elle ne mange pas de viande.', en: 'She does not eat meat.', note: 'de replaces article after negation' },
            { fr: "Il n'aime pas le café.", en: "He doesn't like coffee.", note: "n' before vowel" },
            { fr: 'Je ne suis pas fatigué.', en: 'I am not tired.', note: '' },
            { fr: "Nous n'avons pas d'enfants.", en: "We don't have children.", note: "de + vowel = d'" },
            { fr: 'Je parle pas anglais.', en: "(I don't speak English.)", note: 'spoken French: ne dropped' }
          ],
          rules: [
            'Place "ne" before the conjugated verb and "pas" after it',
            '"ne" becomes "n\'" before a vowel or silent h',
            'With compound tenses, ne...pas wraps the auxiliary: "Je n\'ai pas mangé"',
            'Indefinite and partitive articles (un, une, des, du, de la) become "de/d\'" after negation',
            'Definite articles (le, la, les) do NOT change after negation: "Je n\'aime pas le café"',
            'In spoken French, "ne" is frequently dropped: "Je sais pas" instead of "Je ne sais pas"'
          ],
          tip: 'The article change rule is crucial: after negation, "un/une/des/du/de la" all become "de." But "le/la/les" stay the same because they refer to specific things. "Je n\'ai pas de voiture" (I don\'t have a car) vs. "Je n\'aime pas la voiture" (I don\'t like the car).'
        },
        {
          title: 'Other Negative Expressions',
          content: 'French has many negative expressions beyond "ne...pas." Each replaces "pas" with a different word to express a different meaning. These follow the same sandwich structure.',
          examples: [
            { fr: 'Je ne mange jamais de viande.', en: 'I never eat meat.', note: 'ne...jamais (never)' },
            { fr: 'Il ne dit rien.', en: 'He says nothing.', note: 'ne...rien (nothing)' },
            { fr: 'Je ne vois personne.', en: 'I see nobody.', note: 'ne...personne (nobody)' },
            { fr: 'Elle ne pleure plus.', en: 'She no longer cries.', note: 'ne...plus (no longer)' },
            { fr: "Il n'a que deux euros.", en: 'He has only two euros.', note: 'ne...que (only)' },
            { fr: "Je n'ai ni chat ni chien.", en: 'I have neither cat nor dog.', note: 'ne...ni...ni (neither...nor)' },
            { fr: 'Je ne vois rien.', en: 'I see nothing.', note: '' },
            { fr: 'Personne ne parle.', en: 'Nobody speaks.', note: 'personne as subject comes BEFORE ne' },
            { fr: 'Rien ne marche.', en: 'Nothing works.', note: 'rien as subject comes BEFORE ne' }
          ],
          rules: [
            'ne...jamais → never',
            'ne...rien → nothing',
            'ne...personne → nobody/no one',
            'ne...plus → no longer / no more',
            'ne...que → only (not truly negative)',
            'ne...ni...ni → neither...nor',
            'ne...aucun(e) → not any / no (+ noun)',
            'ne...nulle part → nowhere',
            'When rien/personne is the SUBJECT, it comes before "ne": "Rien ne va." (Nothing works.)',
            'You can combine negatives: "Je ne vois plus jamais personne." (I never see anyone anymore.)'
          ],
          tip: 'Remember that "ne...que" is not a true negation — it means "only." "Je n\'ai que cinq euros" = "I only have five euros." You can combine it with other negatives: "Je n\'ai plus que cinq euros" = "I only have five euros left."'
        }
      ]
    },

    // =========================================================================
    // 9. PASSÉ COMPOSÉ
    // =========================================================================
    {
      id: 'passe-compose',
      name: 'Passé Composé',
      icon: '⏮️',
      color: '#8b5cf6',
      level: 'intermediate',
      sections: [
        {
          title: 'Formation with Avoir',
          content: 'The passé composé is the most common French past tense for completed actions. It is formed with a present-tense auxiliary verb (avoir or être) + the past participle. The vast majority of verbs use "avoir."',
          examples: [
            { fr: "J'ai mangé.", en: 'I ate / I have eaten.', note: 'avoir + past participle' },
            { fr: 'Tu as fini.', en: 'You finished.', note: '' },
            { fr: 'Elle a vendu sa voiture.', en: 'She sold her car.', note: '' },
            { fr: 'Nous avons vu le film.', en: 'We saw the film.', note: 'vu = past participle of voir' },
            { fr: 'Ils ont pris le train.', en: 'They took the train.', note: 'pris = irregular pp' },
            { fr: "J'ai eu peur.", en: 'I was scared.', note: 'eu = past participle of avoir' },
            { fr: 'Il a été malade.', en: 'He was sick.', note: 'été = past participle of être' }
          ],
          rules: [
            'Formula: subject + avoir (conjugated) + past participle',
            '-ER verbs: remove -er, add -é (manger → mangé, parler → parlé)',
            '-IR verbs: remove -ir, add -i (finir → fini, choisir → choisi)',
            '-RE verbs: remove -re, add -u (vendre → vendu, attendre → attendu)',
            'Common irregular past participles: eu (avoir), été (être), fait (faire), vu (voir), pris (prendre), dit (dire), mis (mettre), lu (lire), écrit (écrire), bu (boire), su (savoir), pu (pouvoir), voulu (vouloir), dû (devoir)',
            'With avoir, the past participle does NOT agree with the subject (usually)'
          ],
          tip: 'The past participle with "avoir" normally does not change. However, it DOES agree with a preceding direct object: "Les fleurs que j\'ai achetées" (the flowers that I bought) — "achetées" agrees with "les fleurs."'
        },
        {
          title: 'Formation with Être — DR MRS VANDERTRAMP',
          content: 'About 17 verbs use "être" as their auxiliary instead of "avoir." These are mostly verbs of motion or state change. The famous mnemonic DR MRS VANDERTRAMP (or the "House of Être") helps you remember them. With être, the past participle agrees with the subject.',
          examples: [
            { fr: 'Je suis allé(e).', en: 'I went.', note: 'add -e if subject is feminine' },
            { fr: 'Elle est partie.', en: 'She left.', note: 'feminine agreement: -e' },
            { fr: 'Ils sont venus.', en: 'They came.', note: 'masculine plural: -s' },
            { fr: 'Elles sont mortes.', en: 'They died.', note: 'feminine plural: -es' },
            { fr: 'Nous sommes arrivés.', en: 'We arrived.', note: 'nous (masc) = -s' },
            { fr: 'Il est né en 1990.', en: 'He was born in 1990.', note: '' },
            { fr: 'Elle est tombée.', en: 'She fell.', note: '' }
          ],
          rules: [
            'D - Devenir (became), R - Revenir (came back)',
            'M - Monter (went up), R - Rester (stayed), S - Sortir (went out)',
            'V - Venir (came), A - Aller (went), N - Naître (was born)',
            'D - Descendre (went down), E - Entrer (entered), R - Rentrer (came home)',
            'T - Tomber (fell), R - Retourner (returned)',
            'A - Arriver (arrived), M - Mourir (died), P - Partir (left), P - Passer (passed by)',
            'All reflexive verbs also use être: "Elle s\'est levée"',
            'Past participle agrees with subject: masc sing (no change), fem sing (+e), masc plural (+s), fem plural (+es)'
          ],
          tip: 'Think of a house: you are BORN (naître), you COME (venir) and ARRIVE (arriver), you ENTER (entrer), you GO UP (monter), you STAY (rester), you GO DOWN (descendre), you FALL (tomber), you GO OUT (sortir), you LEAVE (partir), you GO (aller), you RETURN (retourner/rentrer/revenir), and eventually you DIE (mourir). All these "life journey" verbs use être.'
        },
        {
          title: 'Avoir vs. Être — Quick Decision Guide',
          content: 'Knowing when to use avoir vs. être is one of the biggest challenges of the passé composé. Here is a reliable decision process.',
          examples: [
            { fr: "J'ai monté les valises.", en: 'I carried the suitcases up.', note: 'monter + direct object → avoir' },
            { fr: 'Je suis monté(e).', en: 'I went up.', note: 'monter without object → être' },
            { fr: "J'ai sorti le chien.", en: 'I took the dog out.', note: 'sortir + direct object → avoir' },
            { fr: 'Je suis sorti(e).', en: 'I went out.', note: 'sortir without object → être' },
            { fr: 'Elle s\'est lavée.', en: 'She washed herself.', note: 'reflexive → always être' },
            { fr: "J'ai marché.", en: 'I walked.', note: 'not a DR MRS VANDERTRAMP verb → avoir' }
          ],
          rules: [
            'Step 1: Is it reflexive? → Use ÊTRE',
            'Step 2: Is it a DR MRS VANDERTRAMP verb? → Usually ÊTRE',
            'Step 3: Does a DR MRS VANDERTRAMP verb have a direct object? → Use AVOIR',
            'Step 4: Everything else → Use AVOIR',
            'Monter, descendre, sortir, rentrer, retourner, and passer can use EITHER auxiliary depending on meaning'
          ],
          tip: 'When DR MRS VANDERTRAMP verbs take a direct object, they switch to "avoir" and their meaning often shifts. "Je suis sorti" = I went out. "J\'ai sorti les poubelles" = I took out the trash. The direct object changes both the auxiliary and the meaning.'
        }
      ]
    },

    // =========================================================================
    // 10. IMPARFAIT
    // =========================================================================
    {
      id: 'imparfait',
      name: 'Imparfait (Imperfect)',
      icon: '🔄',
      color: '#0891b2',
      level: 'intermediate',
      sections: [
        {
          title: 'Formation',
          content: 'The imparfait is formed from the "nous" form of the present tense. Drop the "-ons" ending to get the imperfect stem, then add the imparfait endings. The only exception is être.',
          examples: [
            { fr: 'je parlais', en: 'I was speaking / I used to speak', note: 'nous parlons → parl-' },
            { fr: 'tu finissais', en: 'you were finishing', note: 'nous finissons → finiss-' },
            { fr: 'il faisait beau.', en: 'The weather was nice.', note: 'nous faisons → fais-' },
            { fr: 'nous avions faim.', en: 'We were hungry.', note: 'nous avons → av-' },
            { fr: 'vous alliez souvent à Paris.', en: 'You used to go to Paris often.', note: 'nous allons → all-' },
            { fr: 'ils prenaient le bus.', en: 'They used to take the bus.', note: 'nous prenons → pren-' },
            { fr: "j'étais jeune.", en: 'I was young.', note: 'être is the only irregular stem: ét-' }
          ],
          rules: [
            'Take the nous form of present tense, drop -ons → imperfect stem',
            'je → -ais, tu → -ais, il/elle/on → -ait',
            'nous → -ions, vous → -iez, ils/elles → -aient',
            'ONLY être has an irregular stem: ét- (j\'étais, tu étais, etc.)',
            'The endings -ais, -ais, -ait, -aient all sound the same: [ɛ]',
            'Verbs ending in -cer: c → ç before a (je mangeais, je lançais — to keep pronunciation)',
            'Verbs ending in -ger: add e before a (je mangeais, nous mangions)'
          ],
          tip: 'The imparfait is incredibly regular. Once you know the nous form of any verb, you can form the imparfait. Even highly irregular verbs like avoir (avions → av-), faire (faisions → fais-), and prendre (prenions → pren-) follow the rule. Only être breaks it.'
        },
        {
          title: 'Usage: Imparfait vs. Passé Composé',
          content: 'This is one of the most important distinctions in French. The passé composé describes completed, specific actions. The imparfait describes ongoing states, habits, descriptions, and background conditions. Think of a movie: the imparfait is the scenery, and the passé composé is the action.',
          examples: [
            { fr: 'Il pleuvait quand je suis sorti.', en: 'It was raining when I went out.', note: 'background (imp) + action (PC)' },
            { fr: 'Quand j\'étais jeune, je jouais au foot.', en: 'When I was young, I used to play soccer.', note: 'habitual past' },
            { fr: 'Elle regardait la télé quand le téléphone a sonné.', en: 'She was watching TV when the phone rang.', note: 'ongoing + interruption' },
            { fr: 'Il faisait froid et il neigeait.', en: 'It was cold and it was snowing.', note: 'description/weather' },
            { fr: 'Hier, j\'ai mangé une pizza.', en: 'Yesterday, I ate a pizza.', note: 'completed action → PC' },
            { fr: 'Avant, je mangeais souvent des pizzas.', en: 'Before, I often ate pizzas.', note: 'habit → imparfait' }
          ],
          rules: [
            'IMPARFAIT for: descriptions, weather, emotions, ongoing states, habitual/repeated actions, age, time, background context',
            'PASSÉ COMPOSÉ for: completed actions, specific events, things that happened once (or a counted number of times), actions that advanced the story',
            'Key imparfait indicators: toujours, souvent, d\'habitude, chaque jour, tous les jours, autrefois, quand j\'étais jeune',
            'Key PC indicators: hier, soudain, tout à coup, une fois, ce jour-là, finalement',
            'When both appear together: imparfait = background/what was happening; PC = the event that occurred'
          ],
          tip: 'Ask yourself: "Did this happen at a specific moment and end?" → passé composé. "Was this an ongoing state, a description, or a habit?" → imparfait. "It was raining" (imparfait) "when I arrived" (passé composé).'
        }
      ]
    },

    // =========================================================================
    // 11. FUTURE TENSE
    // =========================================================================
    {
      id: 'future-tense',
      name: 'Future Tense',
      icon: '🔮',
      color: '#7c3aed',
      level: 'intermediate',
      sections: [
        {
          title: 'Futur Proche (Near Future)',
          content: 'The easiest way to express the future in French is the futur proche, formed with the present tense of "aller" + infinitive. It is equivalent to "going to" in English and is extremely common in spoken French.',
          examples: [
            { fr: 'Je vais manger.', en: 'I am going to eat.', note: '' },
            { fr: 'Tu vas partir.', en: 'You are going to leave.', note: '' },
            { fr: 'Elle va arriver demain.', en: 'She is going to arrive tomorrow.', note: '' },
            { fr: 'Nous allons voyager.', en: 'We are going to travel.', note: '' },
            { fr: 'Vous allez comprendre.', en: 'You are going to understand.', note: '' },
            { fr: 'Ils vont être contents.', en: 'They are going to be happy.', note: '' },
            { fr: 'Il va pleuvoir.', en: "It's going to rain.", note: '' },
            { fr: 'Je ne vais pas travailler demain.', en: "I'm not going to work tomorrow.", note: 'negation wraps aller' }
          ],
          rules: [
            'Formula: aller (conjugated) + infinitive',
            'je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont + INFINITIVE',
            'Negation wraps around aller: "Je ne vais pas manger"',
            'Pronouns go before the infinitive: "Je vais le faire" (I\'m going to do it)',
            'Very common in spoken French for near or planned future events'
          ],
          tip: 'In everyday conversation, French speakers use futur proche much more than futur simple. "Je vais partir" is heard far more often than "Je partirai." Use futur proche as your default and you will sound natural.'
        },
        {
          title: 'Futur Simple (Simple Future)',
          content: 'The futur simple is formed by adding endings to the infinitive (or an irregular stem). It is used for more distant future events, predictions, formal promises, and after certain conjunctions. The endings are the same for all verbs.',
          examples: [
            { fr: 'je parlerai', en: 'I will speak', note: 'infinitive + ai' },
            { fr: 'tu finiras', en: 'you will finish', note: 'infinitive + as' },
            { fr: 'il vendra', en: 'he will sell', note: '-re verbs: drop final -e' },
            { fr: 'nous mangerons', en: 'we will eat', note: 'infinitive + ons' },
            { fr: 'vous partirez', en: 'you will leave', note: 'infinitive + ez' },
            { fr: 'elles danseront', en: 'they will dance', note: 'infinitive + ont' },
            { fr: 'Demain, il fera beau.', en: 'Tomorrow, the weather will be nice.', note: 'faire → fer- (irregular)' },
            { fr: 'Quand tu arriveras, appelle-moi.', en: 'When you arrive, call me.', note: 'future after "quand"' }
          ],
          rules: [
            'Regular formation: infinitive + -ai, -as, -a, -ons, -ez, -ont',
            'For -RE verbs: drop the final -e before adding endings (vendre → vendr-)',
            'The endings look like the present tense of avoir (ai, as, a, ons, ez, ont)',
            'Common irregular stems: être → ser-, avoir → aur-, faire → fer-, aller → ir-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, savoir → saur-, voir → verr-, envoyer → enverr-, courir → courr-, mourir → mourr-',
            'After quand, lorsque, dès que, aussitôt que: use FUTURE (not present like in English)'
          ],
          tip: 'In English we say "When you arrive, call me" (present tense after "when"). In French, you MUST use the future: "Quand tu arriveras, appelle-moi." This is a very common mistake for English speakers.'
        }
      ]
    },

    // =========================================================================
    // 12. CONDITIONAL
    // =========================================================================
    {
      id: 'conditional',
      name: 'Conditional Mood',
      icon: '🤔',
      color: '#d946ef',
      level: 'intermediate',
      sections: [
        {
          title: 'Formation',
          content: 'The conditional is formed using the same stem as the futur simple (infinitive or irregular stem) plus the imparfait endings. It expresses what "would" happen.',
          examples: [
            { fr: 'je parlerais', en: 'I would speak', note: 'future stem + imparfait ending' },
            { fr: 'tu finirais', en: 'you would finish', note: '' },
            { fr: 'il serait content.', en: 'He would be happy.', note: 'être → ser- (same as future)' },
            { fr: 'nous aurions le temps.', en: 'We would have time.', note: 'avoir → aur-' },
            { fr: 'vous feriez quoi ?', en: 'What would you do?', note: 'faire → fer-' },
            { fr: 'elles iraient en France.', en: 'They would go to France.', note: 'aller → ir-' }
          ],
          rules: [
            'Formula: future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient)',
            'Uses the SAME irregular stems as the futur simple',
            'être → ser- + ais = serais; avoir → aur- + ais = aurais',
            'faire → fer-; aller → ir-; pouvoir → pourr-; vouloir → voudr-; devoir → devr-; voir → verr-',
            'The endings are identical to the imparfait: -ais, -ais, -ait, -ions, -iez, -aient'
          ],
          tip: 'Think of the conditional as "the future in the past" or "future + imparfait." It combines the future stem with imparfait endings. If you know both tenses, the conditional is practically free!'
        },
        {
          title: 'Usage',
          content: 'The conditional is used for polite requests, hypothetical situations, wishes, suggestions, and after "si" (if) clauses in the imparfait. It is also used in reported speech to express what someone "would" do.',
          examples: [
            { fr: 'Je voudrais un café, s\'il vous plaît.', en: 'I would like a coffee, please.', note: 'polite request' },
            { fr: 'Pourriez-vous m\'aider ?', en: 'Could you help me?', note: 'polite question' },
            { fr: 'Si j\'avais de l\'argent, je voyagerais.', en: 'If I had money, I would travel.', note: 'si + imparfait → conditional' },
            { fr: 'À ta place, je partirais.', en: 'In your place, I would leave.', note: 'advice' },
            { fr: 'On pourrait aller au cinéma.', en: 'We could go to the movies.', note: 'suggestion' },
            { fr: 'Il a dit qu\'il viendrait.', en: 'He said he would come.', note: 'reported speech' },
            { fr: 'J\'aimerais vivre à Paris.', en: 'I would like to live in Paris.', note: 'wish' }
          ],
          rules: [
            'Polite requests: voudrais, pourrais, aimerais are extremely common',
            'Si + imparfait → conditional: "Si j\'étais riche, j\'achèterais une maison"',
            'NEVER put the conditional after "si" — WRONG: "Si je serais riche"',
            'Reported speech (future → conditional): "Il viendra" → "Il a dit qu\'il viendrait"',
            'Advice: "À ta place, je ferais..." / "Tu devrais..."',
            'Unconfirmed information (journalism): "Le président serait malade." (The president is reportedly sick.)'
          ],
          tip: 'The #1 rule: NEVER use the conditional right after "si" (if). It is always "Si + imparfait, conditionnel" — never "Si + conditionnel." "Si j\'avais..." (correct) vs. "Si j\'aurais..." (WRONG). This is a common mistake even native speakers sometimes make in casual speech.'
        }
      ]
    },

    // =========================================================================
    // 13. OBJECT PRONOUNS
    // =========================================================================
    {
      id: 'object-pronouns',
      name: 'Object Pronouns',
      icon: '🔀',
      color: '#0d9488',
      level: 'intermediate',
      sections: [
        {
          title: 'Direct Object Pronouns',
          content: 'Direct object pronouns replace nouns that receive the action directly (without a preposition). In French, they go BEFORE the conjugated verb, unlike in English where they follow.',
          examples: [
            { fr: 'Je le vois.', en: 'I see him/it.', note: 'le = him or it (masc)' },
            { fr: 'Je la connais.', en: 'I know her/it.', note: 'la = her or it (fem)' },
            { fr: 'Je les aime.', en: 'I love them.', note: 'les = them' },
            { fr: 'Tu me comprends.', en: 'You understand me.', note: 'me = me' },
            { fr: 'Il nous invite.', en: 'He is inviting us.', note: 'nous = us' },
            { fr: 'Je ne le vois pas.', en: "I don't see him.", note: 'pronoun stays before verb' },
            { fr: "Je l'ai vu hier.", en: 'I saw him/her yesterday.', note: 'before auxiliary in PC' },
            { fr: 'Je vais le faire.', en: "I'm going to do it.", note: 'before infinitive' }
          ],
          rules: [
            'me (m\') → me, te (t\') → you, le (l\') → him/it (m), la (l\') → her/it (f)',
            'nous → us, vous → you, les → them',
            'Placement: BEFORE the conjugated verb',
            'With infinitive: before the infinitive ("Je veux le voir")',
            'With passé composé: before the auxiliary ("Je l\'ai vu")',
            'With passé composé + avoir: past participle agrees with preceding direct object ("Je les ai vues" — if "les" = feminine)',
            'Negation: ne + pronoun + verb + pas ("Je ne le vois pas")'
          ],
          tip: 'In passé composé with avoir, the past participle must agree with a preceding direct object pronoun. "La lettre ? Je l\'ai écrite." (écrite agrees with "la lettre," which is feminine). This rule does NOT apply with être verbs or indirect objects.'
        },
        {
          title: 'Indirect Object Pronouns',
          content: 'Indirect object pronouns replace nouns preceded by "à" (to/for someone). They answer the question "to whom?" In French, many verbs take indirect objects where English uses direct ones.',
          examples: [
            { fr: 'Je lui parle.', en: 'I speak to him/her.', note: 'lui = to him/to her' },
            { fr: 'Je leur téléphone.', en: 'I call them.', note: 'leur = to them' },
            { fr: 'Elle me donne un cadeau.', en: 'She gives me a gift.', note: 'me = to me' },
            { fr: 'Il te dit la vérité.', en: 'He tells you the truth.', note: 'te = to you' },
            { fr: 'Je lui ai parlé.', en: 'I spoke to him/her.', note: 'before auxiliary' },
            { fr: 'Nous leur envoyons une lettre.', en: 'We send them a letter.', note: '' }
          ],
          rules: [
            'me → to me, te → to you, lui → to him/to her',
            'nous → to us, vous → to you, leur → to them',
            'Same placement as direct object pronouns: before conjugated verb',
            'Key verbs that take indirect objects: parler à, téléphoner à, dire à, donner à, envoyer à, écrire à, demander à, répondre à, montrer à, offrir à',
            '"lui" means both "to him" AND "to her" — context clarifies',
            'No past participle agreement with indirect objects: "Je leur ai parlé" (not parlés)'
          ],
          tip: 'The crucial difference: me, te, nous, vous are the SAME for direct and indirect. Only the 3rd person differs: le/la/les (direct) vs. lui/leur (indirect). Ask: "Verb + WHAT?" = direct. "Verb + TO WHOM?" = indirect.'
        },
        {
          title: 'Y and En',
          content: 'The pronouns "y" and "en" replace prepositional phrases. "Y" replaces "à + thing/place" and "en" replaces "de + thing" or quantities. They are extremely common in French.',
          examples: [
            { fr: "J'y vais.", en: "I'm going there.", note: 'y = to/at that place' },
            { fr: "J'y pense.", en: "I'm thinking about it.", note: 'y = à + thing (penser à)' },
            { fr: "J'en veux.", en: 'I want some.', note: 'en = some of it/them' },
            { fr: "J'en ai trois.", en: 'I have three (of them).', note: 'en replaces quantity' },
            { fr: "J'en viens.", en: "I'm coming from there.", note: 'en = from that place' },
            { fr: "J'en ai besoin.", en: 'I need it/some.', note: 'en = de + thing (avoir besoin de)' },
            { fr: 'Il y en a beaucoup.', en: 'There are a lot (of them).', note: 'y + en together' },
            { fr: "Tu veux du café ? — Oui, j'en veux.", en: 'Do you want coffee? — Yes, I want some.', note: 'en replaces partitive' }
          ],
          rules: [
            'Y replaces: à + a place ("Je vais à Paris" → "J\'y vais")',
            'Y replaces: à + a thing ("Je pense à mon examen" → "J\'y pense")',
            'Y does NOT replace à + a person — use indirect pronouns instead',
            'EN replaces: de + a thing ("J\'ai besoin de repos" → "J\'en ai besoin")',
            'EN replaces: partitive articles ("Je bois du café" → "J\'en bois")',
            'EN replaces: quantities ("J\'ai trois chats" → "J\'en ai trois")',
            'Order when combined: y comes before en ("Il y en a")',
            'Placement: same as other pronouns — before conjugated verb'
          ],
          tip: '"Il y a" (there is/there are) actually contains the pronoun "y"! When you want to say "there are some," you get "il y en a." These little pronouns are everywhere in French — train your ear to hear them.'
        },
        {
          title: 'Pronoun Order (Multiple Pronouns)',
          content: 'When a sentence has two object pronouns, they follow a specific order before the verb. This order must be memorized.',
          examples: [
            { fr: 'Il me le donne.', en: 'He gives it to me.', note: 'me before le' },
            { fr: 'Je te la montre.', en: "I'm showing it (f) to you.", note: 'te before la' },
            { fr: 'Il le lui donne.', en: 'He gives it to him/her.', note: 'le before lui' },
            { fr: 'Je les leur envoie.', en: "I'm sending them to them.", note: 'les before leur' },
            { fr: 'Il m\'en donne.', en: 'He gives me some.', note: 'me before en' },
            { fr: 'Je l\'y ai mis.', en: 'I put it there.', note: 'le before y' },
            { fr: 'Il nous les a montrés.', en: 'He showed them to us.', note: 'nous before les' }
          ],
          rules: [
            'Order: me/te/se/nous/vous → le/la/les → lui/leur → y → en → VERB',
            'Column 1 (me, te, se, nous, vous) always comes first',
            'Column 2 (le, la, les) comes next',
            'Column 3 (lui, leur) comes after le/la/les',
            'Y and en always come last (y before en)',
            'You will rarely see more than two pronouns together',
            'In affirmative commands, order changes: VERB + le/la/les + moi/toi/lui/nous/vous/leur ("Donne-le-moi")'
          ],
          tip: 'A helpful mnemonic for the order: think of it as concentric circles from the speaker outward. First come the pronouns closest to the speaker (me, te, nous, vous), then the specific ones (le, la, les), then the ones going "to" someone (lui, leur), then location (y) and quantity (en).'
        }
      ]
    },

    // =========================================================================
    // 14. RELATIVE PRONOUNS
    // =========================================================================
    {
      id: 'relative-pronouns',
      name: 'Relative Pronouns',
      icon: '🔗',
      color: '#2563eb',
      level: 'intermediate',
      sections: [
        {
          title: 'Qui, Que, Dont, Où',
          content: 'Relative pronouns connect two clauses by referring back to a noun (the antecedent). French has four common relative pronouns, each with a specific grammatical function.',
          examples: [
            { fr: "L'homme qui parle est mon père.", en: 'The man who is speaking is my father.', note: 'qui = subject' },
            { fr: 'Le livre que je lis est bon.', en: 'The book (that) I am reading is good.', note: 'que = direct object' },
            { fr: 'La fille dont je parle est là.', en: 'The girl I am talking about is there.', note: 'dont = "de" relationship' },
            { fr: 'La ville où je suis né.', en: 'The city where I was born.', note: 'où = place' },
            { fr: 'Le jour où je suis arrivé.', en: 'The day (when) I arrived.', note: 'où = time' },
            { fr: "C'est ce qui est important.", en: 'That is what is important.', note: 'ce qui = what (subject)' },
            { fr: "C'est ce que je veux.", en: "That's what I want.", note: 'ce que = what (object)' },
            { fr: "C'est ce dont j'ai besoin.", en: "That's what I need.", note: 'ce dont = what (de relationship)' }
          ],
          rules: [
            'QUI = subject of the relative clause (who, which, that) — followed by a VERB',
            'QUE (QU\') = direct object of the relative clause (whom, which, that) — followed by a SUBJECT',
            'DONT = replaces "de + noun" (whose, of which, about which)',
            'OÙ = place or time (where, when)',
            'QUI never elides: "la femme qui est..." (not "qu\'est")',
            'QUE elides before a vowel: "le livre qu\'elle lit"',
            'ce qui / ce que / ce dont = "what" (with no specific antecedent)'
          ],
          tip: 'The key test: look at what comes AFTER the relative pronoun. If a VERB follows → use "qui" (it is the subject). If a SUBJECT + VERB follows → use "que" (it is the object). "L\'homme qui parle" (verb follows). "L\'homme que je vois" (subject + verb follows).'
        },
        {
          title: 'Using Dont',
          content: '"Dont" is one of the trickiest relative pronouns for English speakers because it covers several English translations: whose, of which, about which, from which. It replaces any "de + noun" construction.',
          examples: [
            { fr: "C'est le film dont je parle.", en: "That's the film I'm talking about.", note: 'parler DE quelque chose' },
            { fr: 'La fille dont le père est médecin.', en: 'The girl whose father is a doctor.', note: 'dont = whose' },
            { fr: "Le livre dont j'ai besoin.", en: 'The book I need.', note: 'avoir besoin DE' },
            { fr: "L'homme dont elle est amoureuse.", en: "The man she's in love with.", note: 'être amoureux DE' },
            { fr: "C'est ce dont j'ai peur.", en: "That's what I'm afraid of.", note: 'avoir peur DE' },
            { fr: 'La façon dont il parle.', en: 'The way (in which) he speaks.', note: '' }
          ],
          rules: [
            'Use DONT when the verb or expression takes "de": parler de, avoir besoin de, avoir peur de, être content de, etc.',
            'DONT replaces "whose": "l\'homme dont la femme..." = the man whose wife...',
            'Word order after dont is always: dont + subject + verb (NOT dont + verb)',
            'DONT and OÙ cannot be combined — choose one',
            'Common expressions with "de" that trigger dont: se souvenir de, s\'occuper de, avoir envie de, être sûr de, profiter de, rêver de'
          ],
          tip: 'If you can rephrase the sentence using "de" or "about/of" in the underlying structure, use "dont." "The book I need" → "I need [de] the book" → "Le livre dont j\'ai besoin."'
        }
      ]
    },

    // =========================================================================
    // 15. COMPARATIVES & SUPERLATIVES
    // =========================================================================
    {
      id: 'comparatives-superlatives',
      name: 'Comparatives & Superlatives',
      icon: '📊',
      color: '#ea580c',
      level: 'intermediate',
      sections: [
        {
          title: 'Comparatives',
          content: 'French uses "plus...que" (more...than), "moins...que" (less...than), and "aussi...que" (as...as) for comparisons. Unlike English, French does not have a "-er" ending for adjectives.',
          examples: [
            { fr: 'Il est plus grand que moi.', en: 'He is taller than me.', note: 'plus + adj + que' },
            { fr: 'Elle est moins grande que lui.', en: 'She is less tall than him.', note: 'moins + adj + que' },
            { fr: 'Tu es aussi intelligent que moi.', en: 'You are as smart as me.', note: 'aussi + adj + que' },
            { fr: 'Il court plus vite que toi.', en: 'He runs faster than you.', note: 'plus + adverb + que' },
            { fr: 'Elle travaille plus que moi.', en: 'She works more than me.', note: 'verb + plus que' },
            { fr: 'Il a plus de livres que moi.', en: 'He has more books than me.', note: 'plus de + noun + que' },
            { fr: 'Ce film est meilleur que l\'autre.', en: 'This film is better than the other.', note: 'meilleur (not "plus bon")' },
            { fr: 'Elle chante mieux que lui.', en: 'She sings better than him.', note: 'mieux (not "plus bien")' }
          ],
          rules: [
            'plus + adjective/adverb + que = more...than / -er...than',
            'moins + adjective/adverb + que = less...than',
            'aussi + adjective/adverb + que = as...as',
            'plus de / moins de / autant de + NOUN + que = more/less/as much + noun + as',
            'IRREGULAR: bon → meilleur (better), NOT "plus bon"',
            'IRREGULAR: bien → mieux (better), NOT "plus bien"',
            'IRREGULAR: mauvais → pire OR plus mauvais (worse)',
            'After que, use stress pronouns: moi, toi, lui, elle, nous, vous, eux, elles'
          ],
          tip: 'Never say "plus bon" — always say "meilleur." And never say "plus bien" — always say "mieux." These are the two most important irregular comparatives and they are used constantly.'
        },
        {
          title: 'Superlatives',
          content: 'The superlative expresses "the most," "the least," "the best," or "the worst." In French, it is formed with the definite article + plus/moins + adjective.',
          examples: [
            { fr: 'C\'est le plus grand bâtiment.', en: 'It is the tallest building.', note: 'le plus + adj' },
            { fr: 'C\'est la plus belle ville.', en: 'It is the most beautiful city.', note: 'la plus + adj' },
            { fr: 'Ce sont les moins chers.', en: 'These are the least expensive.', note: 'les moins + adj' },
            { fr: 'C\'est le meilleur restaurant.', en: 'It is the best restaurant.', note: 'irregular: le meilleur' },
            { fr: 'C\'est la pire chose.', en: 'It is the worst thing.', note: 'irregular: le/la pire' },
            { fr: 'C\'est le film le plus intéressant de l\'année.', en: 'It is the most interesting film of the year.', note: '"de" not "dans"' },
            { fr: 'C\'est lui qui court le plus vite.', en: 'He is the one who runs the fastest.', note: 'superlative adverb' }
          ],
          rules: [
            'le/la/les + plus + adjective = the most / the ___-est',
            'le/la/les + moins + adjective = the least',
            'If adjective goes BEFORE noun: le plus grand bâtiment',
            'If adjective goes AFTER noun: le bâtiment le plus moderne (article appears twice)',
            'IRREGULAR: le meilleur / la meilleure (the best)',
            'IRREGULAR: le pire / la pire (the worst)',
            '"De" follows superlatives (not "dans"): "le plus grand du monde" (the biggest in the world)',
            'Adverb superlatives use "le" (invariable): "Elle court le plus vite"'
          ],
          tip: 'Watch the placement! If the adjective normally goes BEFORE the noun (BANGS adjectives), the superlative also goes before: "la plus belle ville." If it normally goes AFTER, the superlative goes after with a repeated article: "la ville la plus moderne."'
        }
      ]
    },

    // =========================================================================
    // 16. REFLEXIVE VERBS
    // =========================================================================
    {
      id: 'reflexive-verbs',
      name: 'Reflexive Verbs',
      icon: '🪞',
      color: '#059669',
      level: 'intermediate',
      sections: [
        {
          title: 'Formation and Common Reflexive Verbs',
          content: 'Reflexive verbs indicate that the subject performs the action on itself. They are identified by the pronoun "se" before the infinitive (se laver = to wash oneself). French uses reflexive verbs much more frequently than English.',
          examples: [
            { fr: 'Je me lève à 7h.', en: 'I get up at 7.', note: 'se lever' },
            { fr: 'Tu te douches le matin.', en: 'You shower in the morning.', note: 'se doucher' },
            { fr: 'Elle se maquille.', en: 'She puts on makeup.', note: 'se maquiller' },
            { fr: 'Nous nous habillons.', en: 'We get dressed.', note: 'se habiller' },
            { fr: 'Vous vous couchez tard.', en: 'You go to bed late.', note: 'se coucher' },
            { fr: 'Ils se parlent.', en: 'They talk to each other.', note: 'reciprocal' },
            { fr: 'Je ne me souviens pas.', en: "I don't remember.", note: 'se souvenir' },
            { fr: 'Comment tu t\'appelles ?', en: "What's your name?", note: "s'appeler" }
          ],
          rules: [
            'Reflexive pronouns: me (m\'), te (t\'), se (s\'), nous, vous, se (s\')',
            'The pronoun matches the subject: je → me, tu → te, il/elle/on → se, etc.',
            'Pronoun goes BEFORE the verb: "Je me lave"',
            'Negation: ne + pronoun + verb + pas: "Je ne me lève pas"',
            'Common daily routine verbs: se réveiller, se lever, se laver, se doucher, se brosser (les dents), se peigner, se maquiller, s\'habiller, se coucher, s\'endormir',
            'Some verbs are ONLY reflexive: se souvenir (remember), se méfier (distrust), s\'enfuir (flee)',
            'Reciprocal meaning: "Ils se regardent" = They look at each other'
          ],
          tip: 'Many French reflexive verbs are not reflexive in English. "Se souvenir" (to remember), "se tromper" (to be wrong), "s\'ennuyer" (to be bored), "s\'amuser" (to have fun), "se dépêcher" (to hurry). Just learn them as vocabulary.'
        },
        {
          title: 'Reflexive Verbs in Passé Composé',
          content: 'All reflexive verbs use "être" as their auxiliary in the passé composé. The reflexive pronoun comes before "être." Agreement of the past participle follows special rules.',
          examples: [
            { fr: 'Je me suis levé(e).', en: 'I got up.', note: 'être auxiliary; agree with subject' },
            { fr: 'Elle s\'est lavée.', en: 'She washed (herself).', note: 'fem agreement: -e' },
            { fr: 'Ils se sont parlé.', en: 'They spoke to each other.', note: 'NO agreement — parler à (indirect)' },
            { fr: 'Elles se sont vues.', en: 'They saw each other.', note: 'agreement — voir (direct)' },
            { fr: 'Elle s\'est lavé les mains.', en: 'She washed her hands.', note: 'NO agreement — "les mains" is the direct object' },
            { fr: 'Nous nous sommes amusés.', en: 'We had fun.', note: 'agreement with subject' }
          ],
          rules: [
            'Formula: subject + reflexive pronoun + être (conjugated) + past participle',
            'Past participle agrees with the DIRECT OBJECT (which is often the subject)',
            'If the reflexive pronoun is a DIRECT object → agreement: "Elle s\'est lavée"',
            'If the reflexive pronoun is an INDIRECT object → NO agreement: "Ils se sont parlé" (parler à)',
            'If there is another direct object → NO agreement with subject: "Elle s\'est lavé les mains"',
            'Verbs that are always reflexive (se souvenir, etc.) → always agree with subject'
          ],
          tip: 'The agreement rule simplified: the participle agrees with whatever comes BEFORE the verb. In "Elle s\'est lavée," "se" (= elle, direct object) comes before → agreement. In "Elle s\'est lavé les mains," "les mains" (direct object) comes AFTER → no agreement.'
        }
      ]
    },

    // =========================================================================
    // 17. SUBJUNCTIVE
    // =========================================================================
    {
      id: 'subjunctive',
      name: 'Subjunctive Mood',
      icon: '💭',
      color: '#7c3aed',
      level: 'advanced',
      sections: [
        {
          title: 'Formation of the Present Subjunctive',
          content: 'The subjunctive is a mood (not a tense) used to express doubt, desire, necessity, emotion, and subjectivity. It is formed from the ils/elles stem of the present tense plus special endings.',
          examples: [
            { fr: 'que je parle', en: 'that I speak', note: 'ils parlent → parl-' },
            { fr: 'que tu finisses', en: 'that you finish', note: 'ils finissent → finiss-' },
            { fr: 'qu\'il vende', en: 'that he sell', note: 'ils vendent → vend-' },
            { fr: 'que nous parlions', en: 'that we speak', note: 'nous/vous use imparfait stem' },
            { fr: 'que vous finissiez', en: 'that you finish', note: '' },
            { fr: 'qu\'ils vendent', en: 'that they sell', note: '' },
            { fr: 'que je sois', en: 'that I be', note: 'être is irregular' },
            { fr: 'qu\'il ait', en: 'that he have', note: 'avoir is irregular' },
            { fr: 'que je fasse', en: 'that I do', note: 'faire is irregular' },
            { fr: 'que je puisse', en: 'that I can', note: 'pouvoir is irregular' }
          ],
          rules: [
            'Take the ils/elles form of the present, drop -ent → subjunctive stem',
            'je → -e, tu → -es, il/elle/on → -e, ils/elles → -ent',
            'nous → -ions, vous → -iez (these often look like the imparfait)',
            'Irregular subjunctive verbs: être (sois, sois, soit, soyons, soyez, soient), avoir (aie, aies, ait, ayons, ayez, aient), aller (aille, ailles, aille, allions, alliez, aillent), faire (fasse...), pouvoir (puisse...), savoir (sache...), vouloir (veuille...)',
            'Some verbs have two stems: one for je/tu/il/ils (from ils present) and one for nous/vous (from nous present)'
          ],
          tip: 'The subjunctive is almost always preceded by "que." When you see "que" + a different subject, start thinking subjunctive. But not all "que" clauses require it — only those expressing subjectivity, desire, doubt, or emotion.'
        },
        {
          title: 'When to Use the Subjunctive',
          content: 'The subjunctive is triggered by specific expressions and constructions in the main clause. It generally appears after verbs and expressions of desire, emotion, doubt, necessity, and judgment — anything expressing a subjective view rather than a fact.',
          examples: [
            { fr: 'Je veux que tu viennes.', en: 'I want you to come.', note: 'desire' },
            { fr: 'Il faut que nous partions.', en: 'We must leave.', note: 'necessity' },
            { fr: 'Je suis content qu\'elle soit là.', en: "I'm happy she's here.", note: 'emotion' },
            { fr: 'Je ne pense pas qu\'il ait raison.', en: "I don't think he's right.", note: 'doubt (negative opinion)' },
            { fr: 'Bien qu\'il pleuve, je sors.', en: 'Although it is raining, I go out.', note: 'concession' },
            { fr: 'Avant qu\'elle parte...', en: 'Before she leaves...', note: 'before' },
            { fr: 'Pour que tu comprennes.', en: 'So that you understand.', note: 'purpose' },
            { fr: 'C\'est le plus beau film que j\'aie vu.', en: "It's the most beautiful film I have seen.", note: 'after superlative' }
          ],
          rules: [
            'DESIRE/WISH: vouloir que, souhaiter que, désirer que, aimer que, préférer que',
            'NECESSITY: il faut que, il est nécessaire que, il est important que',
            'EMOTION: être content/triste/surpris/furieux que, avoir peur que, regretter que',
            'DOUBT: douter que, ne pas penser que, ne pas croire que, il est possible que',
            'JUDGMENT: il est bon/mauvais/normal/rare que, c\'est dommage que',
            'CONJUNCTIONS: bien que, quoique, pour que, afin que, avant que, sans que, à moins que, jusqu\'à ce que',
            'After superlatives: "le meilleur que je connaisse"',
            'NOT subjunctive: après que, parce que, pendant que, espérer que (indicative)'
          ],
          tip: 'If both subjects are the SAME person, use the infinitive instead: "Je veux partir" (I want to leave), NOT "Je veux que je parte." The subjunctive requires TWO DIFFERENT subjects: "Je veux que TU partes."'
        }
      ]
    },

    // =========================================================================
    // 18. PLUS-QUE-PARFAIT
    // =========================================================================
    {
      id: 'plus-que-parfait',
      name: 'Plus-que-parfait',
      icon: '⏪',
      color: '#4338ca',
      level: 'advanced',
      sections: [
        {
          title: 'Formation and Usage',
          content: 'The plus-que-parfait (pluperfect) expresses an action that occurred BEFORE another past action. It is the "past of the past." It is formed with the imparfait of avoir or être + past participle.',
          examples: [
            { fr: "J'avais mangé avant de partir.", en: 'I had eaten before leaving.', note: 'imparfait of avoir + pp' },
            { fr: 'Elle était déjà partie quand je suis arrivé.', en: 'She had already left when I arrived.', note: 'imparfait of être + pp' },
            { fr: 'Nous avions fini le travail.', en: 'We had finished the work.', note: '' },
            { fr: 'Il m\'a dit qu\'il avait vu le film.', en: 'He told me he had seen the film.', note: 'reported speech' },
            { fr: 'Ils s\'étaient rencontrés à Paris.', en: 'They had met in Paris.', note: 'reflexive: être' },
            { fr: 'Si j\'avais su, je serais venu.', en: 'If I had known, I would have come.', note: 'si + PQP = conditional past' },
            { fr: 'Je ne l\'avais jamais vu.', en: 'I had never seen it.', note: '' }
          ],
          rules: [
            'Formula: imparfait of avoir/être + past participle',
            'Same verbs use être as in the passé composé (DR MRS VANDERTRAMP + reflexives)',
            'Same agreement rules as passé composé',
            'avoir: j\'avais, tu avais, il avait, nous avions, vous aviez, ils avaient + pp',
            'être: j\'étais, tu étais, il était, nous étions, vous étiez, ils étaient + pp',
            'Used for: action BEFORE another past action, reported speech (past of past), si clauses (3rd type), regrets'
          ],
          tip: 'Think of the plus-que-parfait as "one step further back in time." If the passé composé is the past, the plus-que-parfait is the past-of-the-past. "J\'ai mangé" = I ate. "J\'avais mangé" = I had (already) eaten.'
        }
      ]
    },

    // =========================================================================
    // 19. PASSIVE VOICE
    // =========================================================================
    {
      id: 'passive-voice',
      name: 'Passive Voice',
      icon: '🔄',
      color: '#0369a1',
      level: 'advanced',
      sections: [
        {
          title: 'Formation with Être',
          content: 'The passive voice is formed with être (in the appropriate tense) + past participle. The past participle agrees with the subject. The agent (doer) is introduced by "par" (by).',
          examples: [
            { fr: 'Le gâteau est mangé par les enfants.', en: 'The cake is eaten by the children.', note: 'present passive' },
            { fr: 'La maison a été construite en 1900.', en: 'The house was built in 1900.', note: 'passé composé passive' },
            { fr: 'Les lettres seront envoyées demain.', en: 'The letters will be sent tomorrow.', note: 'future passive' },
            { fr: 'Le voleur a été arrêté par la police.', en: 'The thief was arrested by the police.', note: '' },
            { fr: 'Cette chanson est connue de tout le monde.', en: 'This song is known by everyone.', note: '"de" for feelings/knowledge' },
            { fr: 'Le français est parlé dans 29 pays.', en: 'French is spoken in 29 countries.', note: 'no agent needed' }
          ],
          rules: [
            'Formula: subject + être (conjugated in any tense) + past participle (agrees with subject) + par + agent',
            'Present passive: est/sont + pp (Le livre est lu)',
            'Past passive: a été / ont été + pp (Le livre a été lu)',
            'Future passive: sera/seront + pp (Le livre sera lu)',
            'Imperfect passive: était/étaient + pp (Le livre était lu)',
            'The agent is introduced by "par" (most verbs) or "de" (verbs of emotion/state: aimé de, connu de, respecté de)',
            'Past participle ALWAYS agrees with the subject in passive voice'
          ],
          tip: 'French often avoids the passive voice by using "on": instead of "French is spoken here" (Le français est parlé ici), French speakers prefer "On parle français ici." This is more natural in spoken French.'
        },
        {
          title: 'Alternatives to the Passive',
          content: 'French uses the passive voice less frequently than English. There are several common alternatives that sound more natural.',
          examples: [
            { fr: 'On parle français ici.', en: 'French is spoken here.', note: 'on + active verb' },
            { fr: 'Ce livre se lit facilement.', en: 'This book is easily read.', note: 'pronominal/reflexive' },
            { fr: 'Ça ne se fait pas.', en: "That isn't done.", note: 'reflexive for general truth' },
            { fr: 'Il s\'est fait voler son portefeuille.', en: 'He had his wallet stolen.', note: 'se faire + infinitive' },
            { fr: 'Elle s\'est fait licencier.', en: 'She got fired.', note: 'se faire + infinitive' },
            { fr: 'Je me suis fait couper les cheveux.', en: 'I got my hair cut.', note: 'se faire + infinitive' }
          ],
          rules: [
            '"On" + active verb: the most common alternative ("On m\'a dit que..." = I was told that...)',
            'Pronominal/reflexive form: "Ça se vend bien" (That sells well / is sold well)',
            '"Se faire" + infinitive: used when something happens to someone ("Elle s\'est fait arrêter")',
            '"Se laisser" + infinitive: to let something happen ("Il s\'est laissé convaincre" = He let himself be convinced)',
            'Use the passive mainly in formal or written French, news, and scientific writing'
          ],
          tip: '"On" is the secret weapon for avoiding passives. "On m\'a dit" (I was told), "On m\'a volé mon sac" (My bag was stolen), "On parle anglais ici" (English is spoken here). It sounds much more natural than the passive in everyday French.'
        }
      ]
    },

    // =========================================================================
    // 20. SI CLAUSES (CONDITIONAL SENTENCES)
    // =========================================================================
    {
      id: 'si-clauses',
      name: 'Si Clauses (If Clauses)',
      icon: '🔀',
      color: '#b45309',
      level: 'advanced',
      sections: [
        {
          title: 'The Three Types of Si Clauses',
          content: 'French has three main patterns for "if" sentences, each expressing a different degree of reality or possibility. The tense in the "si" clause determines what goes in the result clause.',
          examples: [
            { fr: 'Si tu viens, je serai content.', en: 'If you come, I will be happy.', note: 'Type 1: real possibility' },
            { fr: "S'il pleut, nous restons à la maison.", en: 'If it rains, we stay home.', note: 'Type 1 variant: present + present' },
            { fr: 'Si j\'avais de l\'argent, je voyagerais.', en: 'If I had money, I would travel.', note: 'Type 2: hypothetical' },
            { fr: 'Si j\'étais toi, je partirais.', en: 'If I were you, I would leave.', note: 'Type 2: advice' },
            { fr: 'Si j\'avais su, j\'aurais agi différemment.', en: 'If I had known, I would have acted differently.', note: 'Type 3: impossible (past)' },
            { fr: 'Si elle était venue, elle aurait aimé.', en: 'If she had come, she would have enjoyed it.', note: 'Type 3' }
          ],
          rules: [
            'TYPE 1 (Real/Likely): Si + présent → futur simple (or présent or impératif)',
            '  "Si tu étudies, tu réussiras." — If you study, you will succeed.',
            'TYPE 2 (Hypothetical/Unlikely): Si + imparfait → conditionnel présent',
            '  "Si j\'étais riche, j\'achèterais un château." — If I were rich, I would buy a castle.',
            'TYPE 3 (Impossible/Past): Si + plus-que-parfait → conditionnel passé',
            '  "Si j\'avais étudié, j\'aurais réussi." — If I had studied, I would have succeeded.',
            'NEVER put futur or conditionnel after "si" (when it means "if")',
            'The si clause can come first or second: "Je partirais si j\'avais le temps"'
          ],
          tip: 'The golden rule: SI + PRESENT / SI + IMPARFAIT / SI + PLUS-QUE-PARFAIT. Never future or conditional after si. A memory trick: "SI does not like FU or CO" (si never takes futur or conditionnel).'
        },
        {
          title: 'Mixed and Special Si Constructions',
          content: 'Sometimes the si clause and result clause can mix types, and there are some special constructions with "si" that are useful to know.',
          examples: [
            { fr: 'Si j\'avais étudié, je saurais la réponse.', en: 'If I had studied, I would know the answer.', note: 'mixed: PQP + conditional present' },
            { fr: "Et si on allait au cinéma ?", en: 'What if we went to the movies?', note: 'suggestion: et si + imparfait' },
            { fr: "Si seulement j'avais plus de temps !", en: 'If only I had more time!', note: 'wish: si seulement + imparfait' },
            { fr: 'Comme si de rien n\'était.', en: 'As if nothing had happened.', note: 'comme si + imparfait/PQP' },
            { fr: 'Je me demande si elle viendra.', en: 'I wonder if she will come.', note: 'si = "whether" — future OK' },
            { fr: 'Si j\'avais su !', en: 'If only I had known!', note: 'standalone regret' }
          ],
          rules: [
            'Mixed type: Si + PQP → conditionnel PRÉSENT (when the result is about NOW)',
            '"Et si + imparfait ?" = a suggestion ("Et si on dînait dehors ?")',
            '"Si seulement + imparfait/PQP" = a wish or regret',
            '"Comme si + imparfait/PQP" = as if',
            'When "si" means "whether" (not "if"), future/conditional CAN follow: "Je ne sais pas si elle viendra"',
            '"Si" can express a standalone wish/regret: "Si seulement j\'avais écouté !"',
            'Même si (even if) follows the same tense rules as si'
          ],
          tip: '"Et si on..." + imparfait is a wonderfully casual way to make suggestions in French. "Et si on prenait un café ?" (What if we grabbed a coffee?) — it sounds natural and friendly.'
        }
      ]
    },

    // =========================================================================
    // 21. REPORTED SPEECH
    // =========================================================================
    {
      id: 'reported-speech',
      name: 'Reported Speech',
      icon: '💬',
      color: '#6d28d9',
      level: 'advanced',
      sections: [
        {
          title: 'Direct to Indirect Speech',
          content: 'Reported (indirect) speech conveys what someone said without quoting them directly. When the reporting verb is in the past tense, the tenses in the reported clause shift back (just as in English: "He said he WAS tired").',
          examples: [
            { fr: 'Il dit : « Je suis fatigué. »', en: 'He says: "I am tired."', note: 'direct speech' },
            { fr: 'Il dit qu\'il est fatigué.', en: 'He says (that) he is tired.', note: 'present → no change' },
            { fr: 'Il a dit qu\'il était fatigué.', en: 'He said (that) he was tired.', note: 'present → imparfait' },
            { fr: 'Elle a dit : « J\'ai fini. »', en: 'She said: "I have finished."', note: 'direct' },
            { fr: 'Elle a dit qu\'elle avait fini.', en: 'She said she had finished.', note: 'PC → PQP' },
            { fr: 'Il a dit : « Je viendrai. »', en: 'He said: "I will come."', note: 'direct' },
            { fr: 'Il a dit qu\'il viendrait.', en: 'He said he would come.', note: 'futur → conditionnel' },
            { fr: 'Elle m\'a demandé si j\'avais faim.', en: 'She asked me if I was hungry.', note: 'question → si' }
          ],
          rules: [
            'When the reporting verb is in the PRESENT: no tense change needed',
            'When the reporting verb is in the PAST, tenses shift back:',
            '  présent → imparfait',
            '  passé composé → plus-que-parfait',
            '  futur → conditionnel',
            '  futur antérieur → conditionnel passé',
            '  imparfait → imparfait (no change)',
            'Statements: dire que... ("Il a dit que...")',
            'Yes/no questions: demander si... ("Elle a demandé si...")',
            'Information questions: demander + question word ("Il a demandé où j\'habitais")'
          ],
          tip: 'The tense shifts are logical: each tense moves one step into the past. Present becomes imparfait, passé composé becomes plus-que-parfait, and future becomes conditional. The imparfait stays the same because it is already in the past.'
        },
        {
          title: 'Pronoun and Time Changes',
          content: 'When converting direct speech to indirect speech, pronouns, possessive adjectives, and time expressions must also change to reflect the new perspective.',
          examples: [
            { fr: 'Il a dit : « Je pars demain. »', en: 'He said: "I\'m leaving tomorrow."', note: 'direct' },
            { fr: 'Il a dit qu\'il partait le lendemain.', en: 'He said he was leaving the next day.', note: 'je→il, demain→le lendemain' },
            { fr: 'Elle a dit : « Mon frère est ici. »', en: 'She said: "My brother is here."', note: 'direct' },
            { fr: 'Elle a dit que son frère était là.', en: 'She said her brother was there.', note: 'mon→son, ici→là' },
            { fr: 'Il m\'a dit : « Viens ! »', en: 'He told me: "Come!"', note: 'direct imperative' },
            { fr: 'Il m\'a dit de venir.', en: 'He told me to come.', note: 'imperative → de + infinitive' }
          ],
          rules: [
            'je → il/elle; tu → je (or the person addressed); nous → ils/elles',
            'mon/ma/mes → son/sa/ses; ton/ta/tes → mon/ma/mes (or appropriate)',
            'Time changes: aujourd\'hui → ce jour-là; demain → le lendemain; hier → la veille',
            'maintenant → à ce moment-là; ici → là; ce soir → ce soir-là',
            'la semaine prochaine → la semaine suivante; la semaine dernière → la semaine précédente',
            'Imperative → de + infinitive: "Pars !" → "Il m\'a dit de partir"',
            'Negative imperative: "Ne pars pas !" → "Il m\'a dit de ne pas partir"'
          ],
          tip: 'Commands in reported speech become "dire de + infinitive." "Mange !" (Eat!) → "Il m\'a dit de manger" (He told me to eat). For negative commands: "Ne mange pas !" → "Il m\'a dit de ne pas manger."'
        }
      ]
    },

    // =========================================================================
    // 22. ADVANCED RELATIVE PRONOUNS
    // =========================================================================
    {
      id: 'advanced-relative-pronouns',
      name: 'Advanced Relative Pronouns',
      icon: '🔗',
      color: '#374151',
      level: 'advanced',
      sections: [
        {
          title: 'Lequel, Laquelle, Lesquels, Lesquelles',
          content: 'When a relative pronoun is the object of a preposition (other than "de"), French uses forms of "lequel" that agree in gender and number with the antecedent. These are used for things and sometimes for people (though "qui" is preferred for people after prepositions).',
          examples: [
            { fr: 'Le stylo avec lequel j\'écris.', en: 'The pen with which I write.', note: 'avec + lequel (masc sing)' },
            { fr: 'La raison pour laquelle il est parti.', en: 'The reason for which he left.', note: 'pour + laquelle (fem sing)' },
            { fr: 'Les amis avec lesquels je voyage.', en: 'The friends with whom I travel.', note: 'avec + lesquels (masc pl)' },
            { fr: 'Les règles auxquelles je pense.', en: 'The rules I am thinking about.', note: 'à + lesquelles = auxquelles' },
            { fr: 'Le projet auquel il participe.', en: 'The project in which he participates.', note: 'à + lequel = auquel' },
            { fr: 'La table sur laquelle le livre est posé.', en: 'The table on which the book is placed.', note: '' }
          ],
          rules: [
            'lequel (masculine singular), laquelle (feminine singular)',
            'lesquels (masculine plural), lesquelles (feminine plural)',
            'Contractions with "à": à + lequel = auquel, à + lesquels = auxquels, à + lesquelles = auxquelles (but: à laquelle — no contraction)',
            'Contractions with "de": de + lequel = duquel, de + lesquels = desquels, de + lesquelles = desquelles (but: de laquelle — no contraction)',
            'Used after prepositions: avec, pour, sans, dans, sur, sous, par, etc.',
            'For people, "qui" is preferred after prepositions: "L\'ami avec qui je travaille" (more natural than "avec lequel")'
          ],
          tip: 'In everyday speech, "lequel" forms are somewhat formal. Many French speakers restructure sentences to avoid them. However, they are essential for formal writing and for the expression "pour laquelle/auquel" etc.'
        },
        {
          title: 'Duquel, Auquel, and Compound Forms',
          content: 'When "de" or "à" combines with lequel, contractions occur (except with "laquelle" for "à"). These compound forms are used with expressions that require "de" or "à" + a noun referring to a thing.',
          examples: [
            { fr: 'Le film auquel je pense.', en: 'The film I am thinking about.', note: 'penser à → auquel' },
            { fr: 'Le sujet duquel nous discutons.', en: 'The subject we are discussing.', note: 'discuter de → duquel (but "dont" is preferred)' },
            { fr: 'La conférence à laquelle j\'assiste.', en: 'The conference I am attending.', note: 'assister à → à laquelle' },
            { fr: 'Les problèmes auxquels nous faisons face.', en: 'The problems we are facing.', note: 'faire face à → auxquels' },
            { fr: 'Le bâtiment près duquel j\'habite.', en: 'The building near which I live.', note: 'près de → près duquel' },
            { fr: 'La raison en raison de laquelle...', en: 'The reason because of which...', note: 'compound preposition + de' }
          ],
          rules: [
            'auquel = à + lequel; auxquels = à + lesquels; auxquelles = à + lesquelles',
            'à laquelle stays as-is (no contraction)',
            'duquel = de + lequel; desquels = de + lesquels; desquelles = de + lesquelles',
            'de laquelle stays as-is (no contraction)',
            'When "de" is involved and the antecedent is clear, "dont" is usually preferred over "duquel"',
            'BUT: "duquel" is required after compound prepositions: "à côté duquel, près duquel, au sujet duquel, en face duquel"',
            '"Dont" CANNOT replace compound prepositions with "de": use duquel/de laquelle instead'
          ],
          tip: 'Use "dont" whenever possible — it is simpler. But for compound prepositions ending in "de" (à côté de, près de, au sujet de, loin de, à cause de), you MUST use "duquel/de laquelle": "La maison à côté de laquelle il y a un parc."'
        }
      ]
    }
  ]
};
