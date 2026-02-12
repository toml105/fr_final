const VOCAB = {
  categories: [
    // ============================
    // 1. NUMBERS
    // ============================
    {
      id: 'numbers',
      name: 'Numbers',
      icon: '🔢',
      color: '#6366f1',
      subcategories: [
        {
          name: '0–20',
          words: [
            { fr: 'zéro', en: 'zero' , p: 1 },
            { fr: 'un', en: 'one' , p: 1 },
            { fr: 'deux', en: 'two' , p: 1 },
            { fr: 'trois', en: 'three' , p: 1 },
            { fr: 'quatre', en: 'four' , p: 1 },
            { fr: 'cinq', en: 'five' , p: 1 },
            { fr: 'six', en: 'six' , p: 1 },
            { fr: 'sept', en: 'seven' , p: 1 },
            { fr: 'huit', en: 'eight' , p: 1 },
            { fr: 'neuf', en: 'nine' , p: 1 },
            { fr: 'dix', en: 'ten' , p: 1 },
            { fr: 'onze', en: 'eleven' , p: 1 },
            { fr: 'douze', en: 'twelve' , p: 1 },
            { fr: 'treize', en: 'thirteen' , p: 1 },
            { fr: 'quatorze', en: 'fourteen' , p: 1 },
            { fr: 'quinze', en: 'fifteen' , p: 1 },
            { fr: 'seize', en: 'sixteen' , p: 1 },
            { fr: 'dix-sept', en: 'seventeen' , p: 1 },
            { fr: 'dix-huit', en: 'eighteen' , p: 1 },
            { fr: 'dix-neuf', en: 'nineteen' , p: 1 },
            { fr: 'vingt', en: 'twenty' , p: 1 }
          ]
        },
        {
          name: '21–100',
          words: [
            { fr: 'vingt et un', en: 'twenty-one' , p: 1 },
            { fr: 'vingt-deux', en: 'twenty-two' , p: 1 },
            { fr: 'vingt-trois', en: 'twenty-three' , p: 1 },
            { fr: 'vingt-cinq', en: 'twenty-five' , p: 1 },
            { fr: 'trente', en: 'thirty' , p: 1 },
            { fr: 'trente et un', en: 'thirty-one' , p: 1 },
            { fr: 'trente-cinq', en: 'thirty-five' , p: 1 },
            { fr: 'quarante', en: 'forty' , p: 1 },
            { fr: 'quarante-cinq', en: 'forty-five' , p: 1 },
            { fr: 'cinquante', en: 'fifty' , p: 1 },
            { fr: 'cinquante-cinq', en: 'fifty-five' , p: 1 },
            { fr: 'soixante', en: 'sixty' , p: 1 },
            { fr: 'soixante-cinq', en: 'sixty-five' , p: 1 },
            { fr: 'soixante-dix', en: 'seventy' , p: 1 },
            { fr: 'soixante et onze', en: 'seventy-one' , p: 1 },
            { fr: 'soixante-quinze', en: 'seventy-five' , p: 1 },
            { fr: 'quatre-vingts', en: 'eighty' , p: 1 },
            { fr: 'quatre-vingt-un', en: 'eighty-one' , p: 1 },
            { fr: 'quatre-vingt-cinq', en: 'eighty-five' , p: 1 },
            { fr: 'quatre-vingt-dix', en: 'ninety' , p: 1 },
            { fr: 'quatre-vingt-onze', en: 'ninety-one' , p: 1 },
            { fr: 'quatre-vingt-quinze', en: 'ninety-five' , p: 1 },
            { fr: 'cent', en: 'one hundred' , p: 1 }
          ]
        },
        {
          name: 'Large Numbers',
          words: [
            { fr: 'deux cents', en: 'two hundred' , p: 1 },
            { fr: 'trois cents', en: 'three hundred' , p: 1 },
            { fr: 'cinq cents', en: 'five hundred' , p: 1 },
            { fr: 'mille', en: 'one thousand' , p: 1 },
            { fr: 'deux mille', en: 'two thousand' , p: 1 },
            { fr: 'dix mille', en: 'ten thousand' , p: 1 },
            { fr: 'cent mille', en: 'one hundred thousand' , p: 1 },
            { fr: 'un million', en: 'one million' , p: 1 },
            { fr: 'un milliard', en: 'one billion' , p: 1 }
          ]
        },
        {
          name: 'Ordinals & Fractions',
          words: [
            { fr: 'premier / première', en: 'first' , p: 1 },
            { fr: 'deuxième', en: 'second' , p: 1 },
            { fr: 'troisième', en: 'third' , p: 1 },
            { fr: 'quatrième', en: 'fourth' , p: 1 },
            { fr: 'cinquième', en: 'fifth' , p: 1 },
            { fr: 'sixième', en: 'sixth' , p: 1 },
            { fr: 'septième', en: 'seventh' , p: 1 },
            { fr: 'huitième', en: 'eighth' , p: 1 },
            { fr: 'neuvième', en: 'ninth' , p: 1 },
            { fr: 'dixième', en: 'tenth' , p: 1 },
            { fr: 'dernier / dernière', en: 'last' , p: 1 },
            { fr: 'un demi', en: 'a half' , p: 1 },
            { fr: 'un tiers', en: 'a third' , p: 1 },
            { fr: 'un quart', en: 'a quarter' , p: 1 },
            { fr: 'trois quarts', en: 'three quarters' , p: 1 }
          ]
        }
      ,
        {
          name: 'Quantities & Math',
          words: [
            { fr: 'une dizaine', en: 'about ten', p: 2 },
            { fr: 'une douzaine', en: 'a dozen', p: 1 },
            { fr: 'une centaine', en: 'about a hundred', p: 2 },
            { fr: 'un millier', en: 'about a thousand', p: 3 },
            { fr: 'la moitié', en: 'half', p: 1 },
            { fr: 'le double', en: 'double', p: 2 },
            { fr: 'le triple', en: 'triple', p: 3 },
            { fr: 'environ', en: 'approximately', p: 1 },
            { fr: 'à peu près', en: 'roughly / about', p: 2 },
            { fr: 'une paire', en: 'a pair', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 2. TIME & DATES
    // ============================
    {
      id: 'time-dates',
      name: 'Time & Dates',
      icon: '📅',
      color: '#0ea5e9',
      subcategories: [
        {
          name: 'Days of the Week',
          words: [
            { fr: 'lundi', en: 'Monday', gender: 'm' , p: 1 },
            { fr: 'mardi', en: 'Tuesday', gender: 'm' , p: 1 },
            { fr: 'mercredi', en: 'Wednesday', gender: 'm' , p: 1 },
            { fr: 'jeudi', en: 'Thursday', gender: 'm' , p: 1 },
            { fr: 'vendredi', en: 'Friday', gender: 'm' , p: 1 },
            { fr: 'samedi', en: 'Saturday', gender: 'm' , p: 1 },
            { fr: 'dimanche', en: 'Sunday', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Months',
          words: [
            { fr: 'janvier', en: 'January', gender: 'm' , p: 1 },
            { fr: 'février', en: 'February', gender: 'm' , p: 1 },
            { fr: 'mars', en: 'March', gender: 'm' , p: 1 },
            { fr: 'avril', en: 'April', gender: 'm' , p: 1 },
            { fr: 'mai', en: 'May', gender: 'm' , p: 1 },
            { fr: 'juin', en: 'June', gender: 'm' , p: 1 },
            { fr: 'juillet', en: 'July', gender: 'm' , p: 1 },
            { fr: 'août', en: 'August', gender: 'm' , p: 1 },
            { fr: 'septembre', en: 'September', gender: 'm' , p: 1 },
            { fr: 'octobre', en: 'October', gender: 'm' , p: 1 },
            { fr: 'novembre', en: 'November', gender: 'm' , p: 1 },
            { fr: 'décembre', en: 'December', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Seasons',
          words: [
            { fr: 'le printemps', en: 'spring', gender: 'm' , p: 1 },
            { fr: "l'été", en: 'summer', gender: 'm' , p: 1 },
            { fr: "l'automne", en: 'autumn / fall', gender: 'm' , p: 1 },
            { fr: "l'hiver", en: 'winter', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Time Expressions',
          words: [
            { fr: 'maintenant', en: 'now' , p: 1 },
            { fr: "aujourd'hui", en: 'today' , p: 1 },
            { fr: 'hier', en: 'yesterday' , p: 1 },
            { fr: 'demain', en: 'tomorrow' , p: 1 },
            { fr: 'avant-hier', en: 'the day before yesterday' , p: 1 },
            { fr: 'après-demain', en: 'the day after tomorrow' , p: 1 },
            { fr: 'ce matin', en: 'this morning' , p: 1 },
            { fr: 'cet après-midi', en: 'this afternoon' , p: 1 },
            { fr: 'ce soir', en: 'this evening / tonight' , p: 1 },
            { fr: 'cette nuit', en: 'tonight / last night' , p: 1 },
            { fr: 'la semaine prochaine', en: 'next week' , p: 1 },
            { fr: 'la semaine dernière', en: 'last week' , p: 1 },
            { fr: 'le mois prochain', en: 'next month' , p: 1 },
            { fr: 'le mois dernier', en: 'last month' , p: 1 },
            { fr: "l'année prochaine", en: 'next year' , p: 1 },
            { fr: "l'année dernière", en: 'last year' , p: 1 },
            { fr: 'tôt', en: 'early' , p: 1 },
            { fr: 'tard', en: 'late' , p: 1 },
            { fr: 'bientôt', en: 'soon' , p: 1 },
            { fr: 'tout de suite', en: 'right away' , p: 1 },
            { fr: 'parfois', en: 'sometimes' , p: 1 },
            { fr: 'toujours', en: 'always' , p: 1 },
            { fr: 'jamais', en: 'never' , p: 1 },
            { fr: 'déjà', en: 'already' , p: 1 },
            { fr: 'encore', en: 'still / again' , p: 1 },
            { fr: 'pendant', en: 'during / for' , p: 1 },
            { fr: 'depuis', en: 'since / for' , p: 1 },
            { fr: 'il y a', en: 'ago' , p: 1 }
          ]
        }
      ,
        {
          name: 'Time Expressions',
          words: [
            { fr: 'avant-hier', en: 'the day before yesterday', p: 2 },
            { fr: 'après-demain', en: 'the day after tomorrow', p: 2 },
            { fr: 'le matin', en: 'the morning', p: 1 },
            { fr: 'l\'après-midi', en: 'the afternoon', p: 1 },
            { fr: 'le soir', en: 'the evening', p: 1 },
            { fr: 'la nuit', en: 'the night', p: 1 },
            { fr: 'tôt', en: 'early', p: 1 },
            { fr: 'tard', en: 'late', p: 1 },
            { fr: 'en retard', en: 'late (behind schedule)', p: 1 },
            { fr: 'en avance', en: 'early (ahead of schedule)', p: 1 },
            { fr: 'à l\'heure', en: 'on time', p: 1 },
            { fr: 'un siècle', en: 'a century', p: 2 },
            { fr: 'une décennie', en: 'a decade', p: 3 },
            { fr: 'une époque', en: 'an era', p: 3 },
            { fr: 'il y a', en: 'ago', p: 1 },
            { fr: 'dans (+ time)', en: 'in (future time)', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 3. COLORS
    // ============================
    {
      id: 'colors',
      name: 'Colors',
      icon: '🎨',
      color: '#f43f5e',
      subcategories: [
        {
          name: 'Basic Colors',
          words: [
            { fr: 'rouge', en: 'red' , p: 1 },
            { fr: 'bleu / bleue', en: 'blue' , p: 1 },
            { fr: 'vert / verte', en: 'green' , p: 1 },
            { fr: 'jaune', en: 'yellow' , p: 1 },
            { fr: 'orange', en: 'orange' , p: 1 },
            { fr: 'violet / violette', en: 'purple / violet' , p: 1 },
            { fr: 'rose', en: 'pink' , p: 1 },
            { fr: 'noir / noire', en: 'black' , p: 1 },
            { fr: 'blanc / blanche', en: 'white' , p: 1 },
            { fr: 'gris / grise', en: 'grey' , p: 1 },
            { fr: 'marron', en: 'brown' , p: 1 },
            { fr: 'brun / brune', en: 'brown (hair/skin)' , p: 1 },
            { fr: 'beige', en: 'beige' , p: 1 },
            { fr: 'doré / dorée', en: 'golden' , p: 1 },
            { fr: 'argenté / argentée', en: 'silver' , p: 1 },
            { fr: 'turquoise', en: 'turquoise' , p: 1 },
            { fr: 'bordeaux', en: 'burgundy' , p: 1 },
            { fr: 'clair', en: 'light (color)' , p: 1 },
            { fr: 'foncé', en: 'dark (color)' , p: 1 }
          ]
        }
      ,
        {
          name: 'Shades & Modifiers',
          words: [
            { fr: 'clair', en: 'light (shade)', p: 1 },
            { fr: 'foncé', en: 'dark (shade)', p: 1 },
            { fr: 'vif', en: 'bright / vivid', p: 2 },
            { fr: 'pâle', en: 'pale', p: 2 },
            { fr: 'doré', en: 'golden', p: 2 },
            { fr: 'argenté', en: 'silver', p: 2 },
            { fr: 'bordeaux', en: 'burgundy', p: 3 },
            { fr: 'turquoise', en: 'turquoise', p: 3 },
            { fr: 'beige', en: 'beige', p: 2 },
            { fr: 'crème', en: 'cream', p: 3 },
            { fr: 'violet', en: 'purple', p: 1 },
            { fr: 'marron', en: 'brown', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 4. FAMILY
    // ============================
    {
      id: 'family',
      name: 'Family',
      icon: '👨‍👩‍👧‍👦',
      color: '#ec4899',
      subcategories: [
        {
          name: 'Immediate Family',
          words: [
            { fr: 'la famille', en: 'family', gender: 'f' , p: 1 },
            { fr: 'le père', en: 'father', gender: 'm' , p: 1 },
            { fr: 'la mère', en: 'mother', gender: 'f' , p: 1 },
            { fr: 'le fils', en: 'son', gender: 'm' , p: 1 },
            { fr: 'la fille', en: 'daughter', gender: 'f' , p: 1 },
            { fr: 'le frère', en: 'brother', gender: 'm' , p: 1 },
            { fr: 'la sœur', en: 'sister', gender: 'f' , p: 1 },
            { fr: 'le mari', en: 'husband', gender: 'm' , p: 1 },
            { fr: 'la femme', en: 'wife / woman', gender: 'f' , p: 1 },
            { fr: "l'enfant", en: 'child', gender: 'm' , p: 1 },
            { fr: 'le bébé', en: 'baby', gender: 'm' , p: 1 },
            { fr: 'les parents', en: 'parents' , p: 1 }
          ]
        },
        {
          name: 'Extended Family',
          words: [
            { fr: 'le grand-père', en: 'grandfather', gender: 'm' , p: 1 },
            { fr: 'la grand-mère', en: 'grandmother', gender: 'f' , p: 1 },
            { fr: 'les grands-parents', en: 'grandparents' , p: 1 },
            { fr: 'le petit-fils', en: 'grandson', gender: 'm' , p: 1 },
            { fr: 'la petite-fille', en: 'granddaughter', gender: 'f' , p: 1 },
            { fr: "l'oncle", en: 'uncle', gender: 'm' , p: 1 },
            { fr: 'la tante', en: 'aunt', gender: 'f' , p: 1 },
            { fr: 'le cousin', en: 'cousin (male)', gender: 'm' , p: 1 },
            { fr: 'la cousine', en: 'cousin (female)', gender: 'f' , p: 1 },
            { fr: 'le neveu', en: 'nephew', gender: 'm' , p: 1 },
            { fr: 'la nièce', en: 'niece', gender: 'f' , p: 1 },
            { fr: 'le beau-père', en: 'father-in-law / stepfather', gender: 'm' , p: 1 },
            { fr: 'la belle-mère', en: 'mother-in-law / stepmother', gender: 'f' , p: 1 },
            { fr: 'le beau-frère', en: 'brother-in-law', gender: 'm' , p: 1 },
            { fr: 'la belle-sœur', en: 'sister-in-law', gender: 'f' , p: 1 },
            { fr: 'le gendre', en: 'son-in-law', gender: 'm' , p: 1 },
            { fr: 'la belle-fille', en: 'daughter-in-law', gender: 'f' , p: 1 },
            { fr: 'le demi-frère', en: 'half-brother / stepbrother', gender: 'm' , p: 1 },
            { fr: 'la demi-sœur', en: 'half-sister / stepsister', gender: 'f' , p: 1 },
            { fr: 'le parrain', en: 'godfather', gender: 'm' , p: 1 },
            { fr: 'la marraine', en: 'godmother', gender: 'f' , p: 1 }
          ]
        }
      ,
        {
          name: 'Extended Family',
          words: [
            { fr: 'un cousin / une cousine', en: 'a cousin', p: 1 },
            { fr: 'un beau-père', en: 'a father-in-law / stepfather', p: 2 },
            { fr: 'une belle-mère', en: 'a mother-in-law / stepmother', p: 2 },
            { fr: 'un beau-frère', en: 'a brother-in-law', p: 2 },
            { fr: 'une belle-sœur', en: 'a sister-in-law', p: 2 },
            { fr: 'un fiancé / une fiancée', en: 'a fiancé(e)', p: 2 },
            { fr: 'un voisin / une voisine', en: 'a neighbour', p: 1 },
            { fr: 'un jumeau / une jumelle', en: 'a twin', p: 2 },
            { fr: 'l\'aîné / l\'aînée', en: 'the eldest', p: 2 },
            { fr: 'le cadet / la cadette', en: 'the youngest', p: 2 },
            { fr: 'un neveu', en: 'a nephew', p: 2 },
            { fr: 'une nièce', en: 'a niece', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 5. BODY PARTS
    // ============================
    {
      id: 'body',
      name: 'Body Parts',
      icon: '🦴',
      color: '#f97316',
      subcategories: [
        {
          name: 'Head & Face',
          words: [
            { fr: 'la tête', en: 'head', gender: 'f' , p: 1 },
            { fr: 'le visage', en: 'face', gender: 'm' , p: 1 },
            { fr: "l'œil (les yeux)", en: 'eye (eyes)', gender: 'm' , p: 1 },
            { fr: 'le nez', en: 'nose', gender: 'm' , p: 1 },
            { fr: 'la bouche', en: 'mouth', gender: 'f' , p: 1 },
            { fr: "l'oreille", en: 'ear', gender: 'f' , p: 1 },
            { fr: 'les cheveux', en: 'hair' , p: 1 },
            { fr: 'le front', en: 'forehead', gender: 'm' , p: 1 },
            { fr: 'la joue', en: 'cheek', gender: 'f' , p: 1 },
            { fr: 'le menton', en: 'chin', gender: 'm' , p: 1 },
            { fr: 'la lèvre', en: 'lip', gender: 'f' , p: 1 },
            { fr: 'la dent', en: 'tooth', gender: 'f' , p: 1 },
            { fr: 'la langue', en: 'tongue', gender: 'f' , p: 1 },
            { fr: 'le sourcil', en: 'eyebrow', gender: 'm' , p: 1 },
            { fr: 'le cou', en: 'neck', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Body',
          words: [
            { fr: 'le corps', en: 'body', gender: 'm' , p: 1 },
            { fr: 'le bras', en: 'arm', gender: 'm' , p: 1 },
            { fr: 'la main', en: 'hand', gender: 'f' , p: 1 },
            { fr: 'le doigt', en: 'finger', gender: 'm' , p: 1 },
            { fr: 'la jambe', en: 'leg', gender: 'f' , p: 1 },
            { fr: 'le pied', en: 'foot', gender: 'm' , p: 1 },
            { fr: "l'orteil", en: 'toe', gender: 'm' , p: 1 },
            { fr: 'le genou', en: 'knee', gender: 'm' , p: 1 },
            { fr: "l'épaule", en: 'shoulder', gender: 'f' , p: 1 },
            { fr: 'le dos', en: 'back', gender: 'm' , p: 1 },
            { fr: 'le ventre', en: 'stomach / belly', gender: 'm' , p: 1 },
            { fr: 'la poitrine', en: 'chest', gender: 'f' , p: 1 },
            { fr: 'le cœur', en: 'heart', gender: 'm' , p: 1 },
            { fr: 'le coude', en: 'elbow', gender: 'm' , p: 1 },
            { fr: 'le poignet', en: 'wrist', gender: 'm' , p: 1 },
            { fr: 'la cheville', en: 'ankle', gender: 'f' , p: 1 },
            { fr: 'la peau', en: 'skin', gender: 'f' , p: 1 },
            { fr: "l'os", en: 'bone', gender: 'm' , p: 1 },
            { fr: 'le sang', en: 'blood', gender: 'm' , p: 1 },
            { fr: 'le muscle', en: 'muscle', gender: 'm' , p: 1 }
          ]
        }
      ,
        {
          name: 'Internal Organs & More',
          words: [
            { fr: 'le cerveau', en: 'the brain', p: 2 },
            { fr: 'le cœur', en: 'the heart', p: 1 },
            { fr: 'les poumons', en: 'the lungs', p: 2 },
            { fr: 'le foie', en: 'the liver', p: 3 },
            { fr: 'l\'estomac', en: 'the stomach', p: 1 },
            { fr: 'la peau', en: 'the skin', p: 1 },
            { fr: 'les os', en: 'the bones', p: 2 },
            { fr: 'le sang', en: 'the blood', p: 1 },
            { fr: 'un muscle', en: 'a muscle', p: 2 },
            { fr: 'le poignet', en: 'the wrist', p: 2 },
            { fr: 'la cheville', en: 'the ankle', p: 2 },
            { fr: 'le front', en: 'the forehead', p: 2 },
            { fr: 'la joue', en: 'the cheek', p: 2 },
            { fr: 'le menton', en: 'the chin', p: 2 },
            { fr: 'la nuque', en: 'the nape/back of neck', p: 3 },
            { fr: 'l\'épaule', en: 'the shoulder', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 6. FOOD & DRINK
    // ============================
    {
      id: 'food-drink',
      name: 'Food & Drink',
      icon: '🍽️',
      color: '#ef4444',
      subcategories: [
        {
          name: 'Fruits',
          words: [
            { fr: 'la pomme', en: 'apple', gender: 'f' , p: 1 },
            { fr: 'la banane', en: 'banana', gender: 'f' , p: 1 },
            { fr: "l'orange", en: 'orange', gender: 'f' , p: 1 },
            { fr: 'la fraise', en: 'strawberry', gender: 'f' , p: 1 },
            { fr: 'le raisin', en: 'grape', gender: 'm' , p: 1 },
            { fr: 'la cerise', en: 'cherry', gender: 'f' , p: 1 },
            { fr: 'la pêche', en: 'peach', gender: 'f' , p: 1 },
            { fr: 'la poire', en: 'pear', gender: 'f' , p: 1 },
            { fr: "l'ananas", en: 'pineapple', gender: 'm' , p: 1 },
            { fr: 'le citron', en: 'lemon', gender: 'm' , p: 1 },
            { fr: 'la pastèque', en: 'watermelon', gender: 'f' , p: 1 },
            { fr: 'le melon', en: 'melon', gender: 'm' , p: 1 },
            { fr: 'la framboise', en: 'raspberry', gender: 'f' , p: 1 },
            { fr: 'la mangue', en: 'mango', gender: 'f' , p: 1 },
            { fr: 'le pamplemousse', en: 'grapefruit', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Vegetables',
          words: [
            { fr: 'la carotte', en: 'carrot', gender: 'f' , p: 1 },
            { fr: 'la tomate', en: 'tomato', gender: 'f' , p: 1 },
            { fr: 'la pomme de terre', en: 'potato', gender: 'f' , p: 1 },
            { fr: "l'oignon", en: 'onion', gender: 'm' , p: 1 },
            { fr: "l'ail", en: 'garlic', gender: 'm' , p: 1 },
            { fr: 'la salade / la laitue', en: 'lettuce / salad', gender: 'f' , p: 1 },
            { fr: 'le haricot', en: 'bean', gender: 'm' , p: 1 },
            { fr: 'le petit pois', en: 'pea', gender: 'm' , p: 1 },
            { fr: 'le champignon', en: 'mushroom', gender: 'm' , p: 1 },
            { fr: 'le chou', en: 'cabbage', gender: 'm' , p: 1 },
            { fr: 'le poivron', en: 'bell pepper', gender: 'm' , p: 1 },
            { fr: 'le concombre', en: 'cucumber', gender: 'm' , p: 1 },
            { fr: "l'épinard", en: 'spinach', gender: 'm' , p: 1 },
            { fr: 'le brocoli', en: 'broccoli', gender: 'm' , p: 1 },
            { fr: "l'aubergine", en: 'eggplant / aubergine', gender: 'f' , p: 1 },
            { fr: 'la courgette', en: 'zucchini / courgette', gender: 'f' , p: 1 }
          ]
        },
        {
          name: 'Meat, Fish & Protein',
          words: [
            { fr: 'la viande', en: 'meat', gender: 'f' , p: 1 },
            { fr: 'le poulet', en: 'chicken', gender: 'm' , p: 1 },
            { fr: 'le bœuf', en: 'beef', gender: 'm' , p: 1 },
            { fr: 'le porc', en: 'pork', gender: 'm' , p: 1 },
            { fr: "l'agneau", en: 'lamb', gender: 'm' , p: 1 },
            { fr: 'le poisson', en: 'fish', gender: 'm' , p: 1 },
            { fr: 'le saumon', en: 'salmon', gender: 'm' , p: 1 },
            { fr: 'le thon', en: 'tuna', gender: 'm' , p: 1 },
            { fr: 'la crevette', en: 'shrimp / prawn', gender: 'f' , p: 1 },
            { fr: 'le jambon', en: 'ham', gender: 'm' , p: 1 },
            { fr: 'la saucisse', en: 'sausage', gender: 'f' , p: 1 },
            { fr: "l'œuf", en: 'egg', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Dairy & Bakery',
          words: [
            { fr: 'le lait', en: 'milk', gender: 'm' , p: 1 },
            { fr: 'le fromage', en: 'cheese', gender: 'm' , p: 1 },
            { fr: 'le beurre', en: 'butter', gender: 'm' , p: 1 },
            { fr: 'le yaourt', en: 'yogurt', gender: 'm' , p: 1 },
            { fr: 'la crème', en: 'cream', gender: 'f' , p: 1 },
            { fr: 'le pain', en: 'bread', gender: 'm' , p: 1 },
            { fr: 'la baguette', en: 'baguette', gender: 'f' , p: 1 },
            { fr: 'le croissant', en: 'croissant', gender: 'm' , p: 1 },
            { fr: 'le gâteau', en: 'cake', gender: 'm' , p: 1 },
            { fr: 'la tarte', en: 'pie / tart', gender: 'f' , p: 1 },
            { fr: 'le biscuit', en: 'biscuit / cookie', gender: 'm' , p: 1 },
            { fr: 'la glace', en: 'ice cream', gender: 'f' , p: 1 },
            { fr: 'la confiture', en: 'jam', gender: 'f' , p: 1 },
            { fr: 'le miel', en: 'honey', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Drinks',
          words: [
            { fr: "l'eau", en: 'water', gender: 'f' , p: 1 },
            { fr: 'le café', en: 'coffee', gender: 'm' , p: 1 },
            { fr: 'le thé', en: 'tea', gender: 'm' , p: 1 },
            { fr: 'le jus', en: 'juice', gender: 'm' , p: 1 },
            { fr: "le jus d'orange", en: 'orange juice', gender: 'm' , p: 1 },
            { fr: 'le vin', en: 'wine', gender: 'm' , p: 1 },
            { fr: 'la bière', en: 'beer', gender: 'f' , p: 1 },
            { fr: 'le lait', en: 'milk', gender: 'm' , p: 1 },
            { fr: 'le chocolat chaud', en: 'hot chocolate', gender: 'm' , p: 1 },
            { fr: 'la limonade', en: 'lemonade', gender: 'f' , p: 1 },
            { fr: "l'eau gazeuse", en: 'sparkling water', gender: 'f' , p: 1 },
            { fr: 'le soda', en: 'soda', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Meals & Cooking',
          words: [
            { fr: 'le petit déjeuner', en: 'breakfast', gender: 'm' , p: 1 },
            { fr: 'le déjeuner', en: 'lunch', gender: 'm' , p: 1 },
            { fr: 'le dîner', en: 'dinner', gender: 'm' , p: 1 },
            { fr: 'le goûter', en: 'snack (afternoon)', gender: 'm' , p: 1 },
            { fr: 'le repas', en: 'meal', gender: 'm' , p: 1 },
            { fr: 'la recette', en: 'recipe', gender: 'f' , p: 1 },
            { fr: 'la cuisine', en: 'kitchen / cooking', gender: 'f' , p: 1 },
            { fr: 'cuire', en: 'to cook (bake)' , p: 1 },
            { fr: 'cuisiner', en: 'to cook' , p: 1 },
            { fr: 'couper', en: 'to cut' , p: 1 },
            { fr: 'mélanger', en: 'to mix' , p: 1 },
            { fr: 'bouillir', en: 'to boil' , p: 1 },
            { fr: 'frire', en: 'to fry' , p: 1 },
            { fr: 'rôtir', en: 'to roast' , p: 1 },
            { fr: 'le sel', en: 'salt', gender: 'm' , p: 1 },
            { fr: 'le poivre', en: 'pepper', gender: 'm' , p: 1 },
            { fr: 'le sucre', en: 'sugar', gender: 'm' , p: 1 },
            { fr: "l'huile", en: 'oil', gender: 'f' , p: 1 },
            { fr: 'le vinaigre', en: 'vinegar', gender: 'm' , p: 1 },
            { fr: 'la farine', en: 'flour', gender: 'f' , p: 1 },
            { fr: 'le riz', en: 'rice', gender: 'm' , p: 1 },
            { fr: 'les pâtes', en: 'pasta', gender: 'f' , p: 1 }
          ]
        }
      ,
        {
          name: 'Meats & Seafood',
          words: [
            { fr: 'l\'agneau', en: 'lamb', p: 2 },
            { fr: 'le canard', en: 'duck', p: 2 },
            { fr: 'les crevettes', en: 'shrimp/prawns', p: 2 },
            { fr: 'les moules', en: 'mussels', p: 2 },
            { fr: 'le saumon', en: 'salmon', p: 1 },
            { fr: 'la truite', en: 'trout', p: 3 },
            { fr: 'le thon', en: 'tuna', p: 2 }
          ]
        }
      ,
        {
          name: 'More Vegetables & Fruits',
          words: [
            { fr: 'l\'aubergine', en: 'eggplant/aubergine', p: 2 },
            { fr: 'le poivron', en: 'bell pepper', p: 2 },
            { fr: 'la courgette', en: 'zucchini/courgette', p: 2 },
            { fr: 'les épinards', en: 'spinach', p: 2 },
            { fr: 'la framboise', en: 'raspberry', p: 2 },
            { fr: 'la mûre', en: 'blackberry', p: 3 },
            { fr: 'le pamplemousse', en: 'grapefruit', p: 2 },
            { fr: 'l\'ananas', en: 'pineapple', p: 2 },
            { fr: 'la pastèque', en: 'watermelon', p: 2 }
          ]
        }
      ,
        {
          name: 'Condiments & Drinks',
          words: [
            { fr: 'le miel', en: 'honey', p: 1 },
            { fr: 'la moutarde', en: 'mustard', p: 2 },
            { fr: 'le vinaigre', en: 'vinegar', p: 2 },
            { fr: 'l\'huile d\'olive', en: 'olive oil', p: 1 },
            { fr: 'la crème fraîche', en: 'sour cream', p: 2 },
            { fr: 'un yaourt', en: 'a yogurt', p: 1 },
            { fr: 'le thé', en: 'tea', p: 1 },
            { fr: 'le jus d\'orange', en: 'orange juice', p: 1 },
            { fr: 'une bière', en: 'a beer', p: 1 },
            { fr: 'du champagne', en: 'champagne', p: 2 },
            { fr: 'l\'eau gazeuse', en: 'sparkling water', p: 1 },
            { fr: 'l\'eau plate', en: 'still water', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 7. CLOTHES
    // ============================
    {
      id: 'clothes',
      name: 'Clothes',
      icon: '👔',
      color: '#8b5cf6',
      subcategories: [
        {
          name: 'Clothing Items',
          words: [
            { fr: 'le pantalon', en: 'trousers / pants', gender: 'm' , p: 1 },
            { fr: 'le jean', en: 'jeans', gender: 'm' , p: 1 },
            { fr: 'la chemise', en: 'shirt (formal)', gender: 'f' , p: 1 },
            { fr: 'le tee-shirt', en: 'T-shirt', gender: 'm' , p: 1 },
            { fr: 'le pull', en: 'sweater / jumper', gender: 'm' , p: 1 },
            { fr: 'la veste', en: 'jacket', gender: 'f' , p: 1 },
            { fr: 'le manteau', en: 'coat', gender: 'm' , p: 1 },
            { fr: 'la robe', en: 'dress', gender: 'f' , p: 1 },
            { fr: 'la jupe', en: 'skirt', gender: 'f' , p: 1 },
            { fr: 'le short', en: 'shorts', gender: 'm' , p: 1 },
            { fr: 'le costume', en: 'suit', gender: 'm' , p: 1 },
            { fr: 'le pyjama', en: 'pyjamas', gender: 'm' , p: 1 },
            { fr: 'le maillot de bain', en: 'swimsuit', gender: 'm' , p: 1 },
            { fr: 'le sous-vêtement', en: 'underwear', gender: 'm' , p: 1 },
            { fr: 'la chaussette', en: 'sock', gender: 'f' , p: 1 },
            { fr: 'la chaussure', en: 'shoe', gender: 'f' , p: 1 },
            { fr: 'la botte', en: 'boot', gender: 'f' , p: 1 },
            { fr: 'la sandale', en: 'sandal', gender: 'f' , p: 1 },
            { fr: 'le chapeau', en: 'hat', gender: 'm' , p: 1 },
            { fr: 'la casquette', en: 'cap', gender: 'f' , p: 1 },
            { fr: "l'écharpe", en: 'scarf', gender: 'f' , p: 1 },
            { fr: 'les gants', en: 'gloves', gender: 'm' , p: 1 },
            { fr: 'la ceinture', en: 'belt', gender: 'f' , p: 1 },
            { fr: 'la cravate', en: 'tie', gender: 'f' , p: 1 },
            { fr: 'le sac à main', en: 'handbag', gender: 'm' , p: 1 },
            { fr: 'les lunettes', en: 'glasses', gender: 'f' , p: 1 },
            { fr: 'les lunettes de soleil', en: 'sunglasses', gender: 'f' , p: 1 },
            { fr: 'le parapluie', en: 'umbrella', gender: 'm' , p: 1 }
          ]
        }
      ,
        {
          name: 'More Clothing',
          words: [
            { fr: 'des sous-vêtements', en: 'underwear', p: 2 },
            { fr: 'un maillot de bain', en: 'a swimsuit', p: 1 },
            { fr: 'une veste', en: 'a jacket', p: 1 },
            { fr: 'un imperméable', en: 'a raincoat', p: 2 },
            { fr: 'des gants', en: 'gloves', p: 1 },
            { fr: 'un bonnet', en: 'a beanie/hat', p: 2 },
            { fr: 'des lunettes de soleil', en: 'sunglasses', p: 1 },
            { fr: 'un costume', en: 'a suit', p: 1 },
            { fr: 'un pyjama', en: 'pyjamas', p: 2 },
            { fr: 'des pantoufles', en: 'slippers', p: 2 },
            { fr: 'une cravate', en: 'a tie', p: 2 },
            { fr: 'une ceinture', en: 'a belt', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 8. HOUSE & HOME
    // ============================
    {
      id: 'house-home',
      name: 'House & Home',
      icon: '🏠',
      color: '#a855f7',
      subcategories: [
        {
          name: 'Rooms',
          words: [
            { fr: 'la maison', en: 'house', gender: 'f' , p: 1 },
            { fr: "l'appartement", en: 'apartment / flat', gender: 'm' , p: 1 },
            { fr: 'la chambre', en: 'bedroom', gender: 'f' , p: 1 },
            { fr: 'la cuisine', en: 'kitchen', gender: 'f' , p: 1 },
            { fr: 'le salon', en: 'living room', gender: 'm' , p: 1 },
            { fr: 'la salle de bains', en: 'bathroom', gender: 'f' , p: 1 },
            { fr: 'les toilettes', en: 'toilet / restroom', gender: 'f' , p: 1 },
            { fr: 'la salle à manger', en: 'dining room', gender: 'f' , p: 1 },
            { fr: 'le bureau', en: 'office / study', gender: 'm' , p: 1 },
            { fr: "l'entrée", en: 'entrance / hallway', gender: 'f' , p: 1 },
            { fr: 'le couloir', en: 'corridor / hallway', gender: 'm' , p: 1 },
            { fr: 'le garage', en: 'garage', gender: 'm' , p: 1 },
            { fr: 'le jardin', en: 'garden', gender: 'm' , p: 1 },
            { fr: 'le balcon', en: 'balcony', gender: 'm' , p: 1 },
            { fr: 'la cave', en: 'cellar / basement', gender: 'f' , p: 1 },
            { fr: 'le grenier', en: 'attic', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Furniture & Items',
          words: [
            { fr: 'le lit', en: 'bed', gender: 'm' , p: 1 },
            { fr: 'la table', en: 'table', gender: 'f' , p: 1 },
            { fr: 'la chaise', en: 'chair', gender: 'f' , p: 1 },
            { fr: 'le fauteuil', en: 'armchair', gender: 'm' , p: 1 },
            { fr: 'le canapé', en: 'sofa / couch', gender: 'm' , p: 1 },
            { fr: "l'armoire", en: 'wardrobe / closet', gender: 'f' , p: 1 },
            { fr: "l'étagère", en: 'shelf / bookcase', gender: 'f' , p: 1 },
            { fr: 'le bureau', en: 'desk', gender: 'm' , p: 1 },
            { fr: 'le miroir', en: 'mirror', gender: 'm' , p: 1 },
            { fr: 'la lampe', en: 'lamp', gender: 'f' , p: 1 },
            { fr: 'le tapis', en: 'rug / carpet', gender: 'm' , p: 1 },
            { fr: 'le rideau', en: 'curtain', gender: 'm' , p: 1 },
            { fr: 'la fenêtre', en: 'window', gender: 'f' , p: 1 },
            { fr: 'la porte', en: 'door', gender: 'f' , p: 1 },
            { fr: "l'escalier", en: 'stairs', gender: 'm' , p: 1 },
            { fr: 'le mur', en: 'wall', gender: 'm' , p: 1 },
            { fr: 'le plafond', en: 'ceiling', gender: 'm' , p: 1 },
            { fr: 'le sol', en: 'floor / ground', gender: 'm' , p: 1 },
            { fr: 'le réfrigérateur', en: 'refrigerator', gender: 'm' , p: 1 },
            { fr: 'le four', en: 'oven', gender: 'm' , p: 1 },
            { fr: 'le lave-linge', en: 'washing machine', gender: 'm' , p: 1 },
            { fr: 'le lave-vaisselle', en: 'dishwasher', gender: 'm' , p: 1 },
            { fr: "l'aspirateur", en: 'vacuum cleaner', gender: 'm' , p: 1 },
            { fr: 'la télévision', en: 'television', gender: 'f' , p: 1 },
            { fr: 'la clé', en: 'key', gender: 'f' , p: 1 },
            { fr: 'la serviette', en: 'towel', gender: 'f' , p: 1 },
            { fr: "l'oreiller", en: 'pillow', gender: 'm' , p: 1 },
            { fr: 'la couverture', en: 'blanket', gender: 'f' , p: 1 },
            { fr: 'le drap', en: 'sheet', gender: 'm' , p: 1 }
          ]
        }
      ,
        {
          name: 'More Rooms & Features',
          words: [
            { fr: 'le plafond', en: 'the ceiling', p: 2 },
            { fr: 'le plancher', en: 'the floor', p: 2 },
            { fr: 'les escaliers', en: 'the stairs', p: 1 },
            { fr: 'la cave', en: 'the basement/cellar', p: 2 },
            { fr: 'le grenier', en: 'the attic', p: 2 },
            { fr: 'le couloir', en: 'the corridor/hallway', p: 1 },
            { fr: 'la terrasse', en: 'the terrace', p: 2 },
            { fr: 'le balcon', en: 'the balcony', p: 2 },
            { fr: 'la cheminée', en: 'the fireplace/chimney', p: 2 },
            { fr: 'les volets', en: 'the shutters', p: 3 },
            { fr: 'la sonnette', en: 'the doorbell', p: 2 },
            { fr: 'le robinet', en: 'the tap/faucet', p: 2 },
            { fr: 'la poubelle', en: 'the bin/trash can', p: 1 },
            { fr: 'l\'aspirateur', en: 'the vacuum cleaner', p: 2 },
            { fr: 'le lave-linge', en: 'the washing machine', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 9. SCHOOL & EDUCATION
    // ============================
    {
      id: 'school',
      name: 'School & Education',
      icon: '📚',
      color: '#14b8a6',
      subcategories: [
        {
          name: 'Subjects',
          words: [
            { fr: 'les mathématiques / les maths', en: 'mathematics / maths', gender: 'f' , p: 1 },
            { fr: 'le français', en: 'French', gender: 'm' , p: 1 },
            { fr: "l'anglais", en: 'English', gender: 'm' , p: 1 },
            { fr: "l'histoire", en: 'history', gender: 'f' , p: 1 },
            { fr: 'la géographie', en: 'geography', gender: 'f' , p: 1 },
            { fr: 'les sciences', en: 'science', gender: 'f' , p: 1 },
            { fr: 'la physique', en: 'physics', gender: 'f' , p: 1 },
            { fr: 'la chimie', en: 'chemistry', gender: 'f' , p: 1 },
            { fr: 'la biologie', en: 'biology', gender: 'f' , p: 1 },
            { fr: "l'informatique", en: 'computer science', gender: 'f' , p: 1 },
            { fr: "l'éducation physique", en: 'physical education', gender: 'f' , p: 1 },
            { fr: 'la musique', en: 'music', gender: 'f' , p: 1 },
            { fr: 'le dessin', en: 'art / drawing', gender: 'm' , p: 1 },
            { fr: 'la philosophie', en: 'philosophy', gender: 'f' , p: 1 }
          ]
        },
        {
          name: 'School Items & Vocabulary',
          words: [
            { fr: "l'école", en: 'school', gender: 'f' , p: 1 },
            { fr: 'le collège', en: 'middle school', gender: 'm' , p: 1 },
            { fr: 'le lycée', en: 'high school', gender: 'm' , p: 1 },
            { fr: "l'université", en: 'university', gender: 'f' , p: 1 },
            { fr: 'la classe', en: 'class / classroom', gender: 'f' , p: 1 },
            { fr: 'le cours', en: 'lesson / class', gender: 'm' , p: 1 },
            { fr: "l'élève", en: 'student (school)' , p: 1 },
            { fr: "l'étudiant / l'étudiante", en: 'student (university)' , p: 1 },
            { fr: 'le professeur', en: 'teacher / professor', gender: 'm' , p: 1 },
            { fr: 'le livre', en: 'book', gender: 'm' , p: 1 },
            { fr: 'le cahier', en: 'notebook', gender: 'm' , p: 1 },
            { fr: 'le stylo', en: 'pen', gender: 'm' , p: 1 },
            { fr: 'le crayon', en: 'pencil', gender: 'm' , p: 1 },
            { fr: 'la gomme', en: 'eraser', gender: 'f' , p: 1 },
            { fr: 'la règle', en: 'ruler', gender: 'f' , p: 1 },
            { fr: 'le sac à dos', en: 'backpack', gender: 'm' , p: 1 },
            { fr: 'le tableau', en: 'board / blackboard', gender: 'm' , p: 1 },
            { fr: "l'examen", en: 'exam', gender: 'm' , p: 1 },
            { fr: 'le devoir', en: 'homework / assignment', gender: 'm' , p: 1 },
            { fr: 'la note', en: 'grade / mark', gender: 'f' , p: 1 },
            { fr: 'le diplôme', en: 'diploma / degree', gender: 'm' , p: 1 },
            { fr: 'la bibliothèque', en: 'library', gender: 'f' , p: 1 },
            { fr: 'la cantine', en: 'cafeteria', gender: 'f' , p: 1 },
            { fr: 'la récréation', en: 'break / recess', gender: 'f' , p: 1 },
            { fr: 'apprendre', en: 'to learn' , p: 1 },
            { fr: 'étudier', en: 'to study' , p: 1 },
            { fr: 'enseigner', en: 'to teach' , p: 1 },
            { fr: 'lire', en: 'to read' , p: 1 },
            { fr: 'écrire', en: 'to write' , p: 1 }
          ]
        }
      ,
        {
          name: 'Academic Life',
          words: [
            { fr: 'un examen', en: 'an exam', p: 1 },
            { fr: 'un devoir', en: 'homework/assignment', p: 1 },
            { fr: 'une note', en: 'a grade/mark', p: 1 },
            { fr: 'un diplôme', en: 'a diploma/degree', p: 1 },
            { fr: 'une bourse', en: 'a scholarship', p: 2 },
            { fr: 'un exposé', en: 'a presentation', p: 2 },
            { fr: 'la récréation', en: 'break time/recess', p: 1 },
            { fr: 'la rentrée', en: 'back to school', p: 1 },
            { fr: 'un trimestre', en: 'a term/quarter', p: 2 },
            { fr: 'un bulletin', en: 'a report card', p: 2 },
            { fr: 'un stage', en: 'an internship', p: 1 },
            { fr: 'la bibliothèque', en: 'the library', p: 1 },
            { fr: 'la cantine', en: 'the canteen', p: 1 },
            { fr: 'un emploi du temps', en: 'a timetable', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 10. WORK & PROFESSIONS
    // ============================
    {
      id: 'work',
      name: 'Work & Professions',
      icon: '💼',
      color: '#64748b',
      subcategories: [
        {
          name: 'Professions',
          words: [
            { fr: 'le médecin', en: 'doctor', gender: 'm' , p: 1 },
            { fr: "l'infirmier / l'infirmière", en: 'nurse' , p: 1 },
            { fr: "l'avocat / l'avocate", en: 'lawyer' , p: 1 },
            { fr: "l'ingénieur / l'ingénieure", en: 'engineer' , p: 1 },
            { fr: "l'architecte", en: 'architect' , p: 1 },
            { fr: 'le/la dentiste', en: 'dentist' , p: 1 },
            { fr: 'le pharmacien / la pharmacienne', en: 'pharmacist' , p: 1 },
            { fr: 'le professeur', en: 'teacher / professor', gender: 'm' , p: 1 },
            { fr: 'le/la journaliste', en: 'journalist' , p: 1 },
            { fr: 'le policier / la policière', en: 'police officer' , p: 1 },
            { fr: 'le pompier', en: 'firefighter', gender: 'm' , p: 1 },
            { fr: 'le cuisinier / la cuisinière', en: 'cook / chef' , p: 1 },
            { fr: 'le boulanger / la boulangère', en: 'baker' , p: 1 },
            { fr: 'le boucher / la bouchère', en: 'butcher' , p: 1 },
            { fr: 'le serveur / la serveuse', en: 'waiter / waitress' , p: 1 },
            { fr: 'le vendeur / la vendeuse', en: 'salesperson' , p: 1 },
            { fr: 'le/la comptable', en: 'accountant' , p: 1 },
            { fr: "l'agriculteur / l'agricultrice", en: 'farmer' , p: 1 },
            { fr: "le mécanicien / la mécanicienne", en: 'mechanic' , p: 1 },
            { fr: 'le plombier', en: 'plumber', gender: 'm' , p: 1 },
            { fr: "l'électricien / l'électricienne", en: 'electrician' , p: 1 },
            { fr: 'le chauffeur', en: 'driver', gender: 'm' , p: 1 },
            { fr: 'le/la pilote', en: 'pilot' , p: 1 },
            { fr: "le musicien / la musicienne", en: 'musician' , p: 1 },
            { fr: "l'acteur / l'actrice", en: 'actor / actress' , p: 1 },
            { fr: "l'écrivain / l'écrivaine", en: 'writer' , p: 1 },
            { fr: 'le/la scientifique', en: 'scientist' , p: 1 },
            { fr: 'le programmeur / la programmeuse', en: 'programmer' , p: 1 }
          ]
        },
        {
          name: 'Workplace Vocabulary',
          words: [
            { fr: 'le travail', en: 'work / job', gender: 'm' , p: 1 },
            { fr: 'le bureau', en: 'office', gender: 'm' , p: 1 },
            { fr: "l'entreprise", en: 'company / business', gender: 'f' , p: 1 },
            { fr: 'le patron / la patronne', en: 'boss' , p: 1 },
            { fr: 'le/la collègue', en: 'colleague' , p: 1 },
            { fr: "l'employé / l'employée", en: 'employee' , p: 1 },
            { fr: 'le salaire', en: 'salary', gender: 'm' , p: 1 },
            { fr: 'la réunion', en: 'meeting', gender: 'f' , p: 1 },
            { fr: "l'entretien", en: 'interview', gender: 'm' , p: 1 },
            { fr: 'le CV', en: 'résumé / CV', gender: 'm' , p: 1 },
            { fr: 'la carrière', en: 'career', gender: 'f' , p: 1 },
            { fr: 'le chômage', en: 'unemployment', gender: 'm' , p: 1 },
            { fr: 'la retraite', en: 'retirement', gender: 'f' , p: 1 },
            { fr: 'les vacances', en: 'holidays / vacation', gender: 'f' , p: 1 },
            { fr: 'travailler', en: 'to work' , p: 1 },
            { fr: 'gagner', en: 'to earn / to win' , p: 1 }
          ]
        }
      ,
        {
          name: 'Work Life',
          words: [
            { fr: 'un salaire', en: 'a salary', p: 1 },
            { fr: 'une réunion', en: 'a meeting', p: 1 },
            { fr: 'un entretien', en: 'an interview', p: 1 },
            { fr: 'un CV', en: 'a CV/resume', p: 1 },
            { fr: 'une candidature', en: 'an application', p: 2 },
            { fr: 'un collègue', en: 'a colleague', p: 1 },
            { fr: 'une entreprise', en: 'a company', p: 1 },
            { fr: 'un congé', en: 'time off/leave', p: 1 },
            { fr: 'la retraite', en: 'retirement', p: 2 },
            { fr: 'une promotion', en: 'a promotion', p: 2 },
            { fr: 'démissionner', en: 'to resign', p: 2 },
            { fr: 'licencier', en: 'to fire/lay off', p: 2 },
            { fr: 'un contrat', en: 'a contract', p: 1 },
            { fr: 'le chômage', en: 'unemployment', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 11. TRANSPORT
    // ============================
    {
      id: 'transport',
      name: 'Transport',
      icon: '🚗',
      color: '#3b82f6',
      subcategories: [
        {
          name: 'Vehicles',
          words: [
            { fr: 'la voiture', en: 'car', gender: 'f' , p: 1 },
            { fr: 'le bus / l\'autobus', en: 'bus', gender: 'm' , p: 1 },
            { fr: 'le train', en: 'train', gender: 'm' , p: 1 },
            { fr: 'le métro', en: 'metro / subway', gender: 'm' , p: 1 },
            { fr: 'le tramway', en: 'tram', gender: 'm' , p: 1 },
            { fr: "l'avion", en: 'airplane', gender: 'm' , p: 1 },
            { fr: 'le bateau', en: 'boat / ship', gender: 'm' , p: 1 },
            { fr: 'le vélo', en: 'bicycle', gender: 'm' , p: 1 },
            { fr: 'la moto', en: 'motorcycle', gender: 'f' , p: 1 },
            { fr: 'le taxi', en: 'taxi', gender: 'm' , p: 1 },
            { fr: 'le camion', en: 'truck', gender: 'm' , p: 1 },
            { fr: "l'hélicoptère", en: 'helicopter', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Travel Vocabulary',
          words: [
            { fr: 'la gare', en: 'train station', gender: 'f' , p: 1 },
            { fr: "l'aéroport", en: 'airport', gender: 'm' , p: 1 },
            { fr: "l'arrêt de bus", en: 'bus stop', gender: 'm' , p: 1 },
            { fr: 'la station de métro', en: 'metro station', gender: 'f' , p: 1 },
            { fr: 'le billet', en: 'ticket', gender: 'm' , p: 1 },
            { fr: "l'aller simple", en: 'one-way ticket', gender: 'm' , p: 1 },
            { fr: "l'aller-retour", en: 'round trip ticket', gender: 'm' , p: 1 },
            { fr: 'le quai', en: 'platform', gender: 'm' , p: 1 },
            { fr: 'le passeport', en: 'passport', gender: 'm' , p: 1 },
            { fr: 'la valise', en: 'suitcase', gender: 'f' , p: 1 },
            { fr: 'le bagage', en: 'luggage', gender: 'm' , p: 1 },
            { fr: 'le voyage', en: 'trip / journey', gender: 'm' , p: 1 },
            { fr: 'le permis de conduire', en: 'driving license', gender: 'm' , p: 1 },
            { fr: 'la route', en: 'road', gender: 'f' , p: 1 },
            { fr: "l'autoroute", en: 'highway / motorway', gender: 'f' , p: 1 },
            { fr: 'le parking', en: 'parking lot', gender: 'm' , p: 1 },
            { fr: 'conduire', en: 'to drive' , p: 1 },
            { fr: 'voyager', en: 'to travel' , p: 1 },
            { fr: 'décoller', en: 'to take off (plane)' , p: 1 },
            { fr: 'atterrir', en: 'to land (plane)' , p: 1 }
          ]
        }
      ,
        {
          name: 'Road & Travel',
          words: [
            { fr: 'un embouteillage', en: 'a traffic jam', p: 1 },
            { fr: 'un péage', en: 'a toll', p: 2 },
            { fr: 'une autoroute', en: 'a motorway/highway', p: 1 },
            { fr: 'un carrefour', en: 'a crossroads', p: 2 },
            { fr: 'un rond-point', en: 'a roundabout', p: 2 },
            { fr: 'un feu rouge', en: 'a traffic light', p: 1 },
            { fr: 'un piéton', en: 'a pedestrian', p: 1 },
            { fr: 'une piste cyclable', en: 'a bike lane', p: 2 },
            { fr: 'le permis de conduire', en: 'driving licence', p: 1 },
            { fr: 'une amende', en: 'a fine', p: 2 },
            { fr: 'un aller-retour', en: 'a return ticket', p: 1 },
            { fr: 'un aller simple', en: 'a one-way ticket', p: 1 },
            { fr: 'une correspondance', en: 'a connection (transport)', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 12. WEATHER
    // ============================
    {
      id: 'weather',
      name: 'Weather',
      icon: '🌤️',
      color: '#06b6d4',
      subcategories: [
        {
          name: 'Weather Expressions',
          words: [
            { fr: 'le temps', en: 'weather', gender: 'm' , p: 1 },
            { fr: 'Il fait beau', en: 'The weather is nice' , p: 1 },
            { fr: 'Il fait mauvais', en: 'The weather is bad' , p: 1 },
            { fr: 'Il fait chaud', en: 'It is hot' , p: 1 },
            { fr: 'Il fait froid', en: 'It is cold' , p: 1 },
            { fr: 'Il fait frais', en: 'It is cool' , p: 1 },
            { fr: 'Il fait doux', en: 'It is mild' , p: 1 },
            { fr: 'Il pleut', en: 'It is raining' , p: 1 },
            { fr: 'Il neige', en: 'It is snowing' , p: 1 },
            { fr: 'Il y a du vent', en: 'It is windy' , p: 1 },
            { fr: 'Il y a du soleil', en: 'It is sunny' , p: 1 },
            { fr: 'Il y a des nuages', en: 'It is cloudy' , p: 1 },
            { fr: 'Il y a du brouillard', en: 'It is foggy' , p: 1 },
            { fr: "Il y a de l'orage", en: 'There is a storm' , p: 1 },
            { fr: 'le soleil', en: 'sun', gender: 'm' , p: 1 },
            { fr: 'la pluie', en: 'rain', gender: 'f' , p: 1 },
            { fr: 'la neige', en: 'snow', gender: 'f' , p: 1 },
            { fr: 'le vent', en: 'wind', gender: 'm' , p: 1 },
            { fr: 'le nuage', en: 'cloud', gender: 'm' , p: 1 },
            { fr: "l'orage", en: 'storm / thunderstorm', gender: 'm' , p: 1 },
            { fr: 'le brouillard', en: 'fog', gender: 'm' , p: 1 },
            { fr: "l'arc-en-ciel", en: 'rainbow', gender: 'm' , p: 1 },
            { fr: 'la tempête', en: 'storm', gender: 'f' , p: 1 },
            { fr: 'la température', en: 'temperature', gender: 'f' , p: 1 },
            { fr: 'le degré', en: 'degree', gender: 'm' , p: 1 },
            { fr: 'le ciel', en: 'sky', gender: 'm' , p: 1 },
            { fr: 'la glace', en: 'ice', gender: 'f' , p: 1 },
            { fr: 'le tonnerre', en: 'thunder', gender: 'm' , p: 1 },
            { fr: "l'éclair", en: 'lightning', gender: 'm' , p: 1 },
            { fr: 'la grêle', en: 'hail', gender: 'f' , p: 1 }
          ]
        }
      ,
        {
          name: 'More Weather',
          words: [
            { fr: 'une averse', en: 'a rain shower', p: 2 },
            { fr: 'un orage', en: 'a thunderstorm', p: 1 },
            { fr: 'la grêle', en: 'hail', p: 2 },
            { fr: 'le verglas', en: 'black ice', p: 3 },
            { fr: 'la canicule', en: 'heatwave', p: 2 },
            { fr: 'une vague de froid', en: 'a cold snap', p: 3 },
            { fr: 'le givre', en: 'frost', p: 2 },
            { fr: 'une éclaircie', en: 'a sunny spell', p: 3 },
            { fr: 'un arc-en-ciel', en: 'a rainbow', p: 1 },
            { fr: 'la brise', en: 'the breeze', p: 2 },
            { fr: 'la tempête', en: 'the storm', p: 1 },
            { fr: 'la brume', en: 'the mist', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 13. ANIMALS
    // ============================
    {
      id: 'animals',
      name: 'Animals',
      icon: '🐾',
      color: '#84cc16',
      subcategories: [
        {
          name: 'Pets',
          words: [
            { fr: 'le chien', en: 'dog', gender: 'm' , p: 1 },
            { fr: 'le chat', en: 'cat', gender: 'm' , p: 1 },
            { fr: 'le poisson', en: 'fish', gender: 'm' , p: 1 },
            { fr: "l'oiseau", en: 'bird', gender: 'm' , p: 1 },
            { fr: 'le hamster', en: 'hamster', gender: 'm' , p: 1 },
            { fr: 'le lapin', en: 'rabbit', gender: 'm' , p: 1 },
            { fr: 'la tortue', en: 'turtle / tortoise', gender: 'f' , p: 1 },
            { fr: 'le perroquet', en: 'parrot', gender: 'm' , p: 1 },
            { fr: 'le cochon d\'Inde', en: 'guinea pig', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Farm Animals',
          words: [
            { fr: 'la vache', en: 'cow', gender: 'f' , p: 1 },
            { fr: 'le cheval', en: 'horse', gender: 'm' , p: 1 },
            { fr: 'le cochon', en: 'pig', gender: 'm' , p: 1 },
            { fr: 'le mouton', en: 'sheep', gender: 'm' , p: 1 },
            { fr: 'la chèvre', en: 'goat', gender: 'f' , p: 1 },
            { fr: 'la poule', en: 'hen / chicken', gender: 'f' , p: 1 },
            { fr: 'le coq', en: 'rooster', gender: 'm' , p: 1 },
            { fr: 'le canard', en: 'duck', gender: 'm' , p: 1 },
            { fr: "l'âne", en: 'donkey', gender: 'm' , p: 1 },
            { fr: 'le taureau', en: 'bull', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Wild Animals',
          words: [
            { fr: 'le lion', en: 'lion', gender: 'm' , p: 1 },
            { fr: 'le tigre', en: 'tiger', gender: 'm' , p: 1 },
            { fr: "l'éléphant", en: 'elephant', gender: 'm' , p: 1 },
            { fr: 'le singe', en: 'monkey', gender: 'm' , p: 1 },
            { fr: "l'ours", en: 'bear', gender: 'm' , p: 1 },
            { fr: 'le loup', en: 'wolf', gender: 'm' , p: 1 },
            { fr: 'le renard', en: 'fox', gender: 'm' , p: 1 },
            { fr: 'le cerf', en: 'deer', gender: 'm' , p: 1 },
            { fr: 'le serpent', en: 'snake', gender: 'm' , p: 1 },
            { fr: 'le crocodile', en: 'crocodile', gender: 'm' , p: 1 },
            { fr: 'la girafe', en: 'giraffe', gender: 'f' , p: 1 },
            { fr: 'le zèbre', en: 'zebra', gender: 'm' , p: 1 },
            { fr: "l'hippopotame", en: 'hippopotamus', gender: 'm' , p: 1 },
            { fr: 'le requin', en: 'shark', gender: 'm' , p: 1 },
            { fr: 'la baleine', en: 'whale', gender: 'f' , p: 1 },
            { fr: 'le dauphin', en: 'dolphin', gender: 'm' , p: 1 },
            { fr: 'le papillon', en: 'butterfly', gender: 'm' , p: 1 },
            { fr: "l'abeille", en: 'bee', gender: 'f' , p: 1 },
            { fr: 'la fourmi', en: 'ant', gender: 'f' , p: 1 },
            { fr: "l'araignée", en: 'spider', gender: 'f' , p: 1 },
            { fr: 'la grenouille', en: 'frog', gender: 'f' , p: 1 },
            { fr: "l'aigle", en: 'eagle', gender: 'm' , p: 1 }
          ]
        }
      ,
        {
          name: 'Wild & More Animals',
          words: [
            { fr: 'un renard', en: 'a fox', p: 2 },
            { fr: 'un loup', en: 'a wolf', p: 2 },
            { fr: 'un cerf', en: 'a deer', p: 3 },
            { fr: 'un sanglier', en: 'a wild boar', p: 3 },
            { fr: 'un hérisson', en: 'a hedgehog', p: 2 },
            { fr: 'un écureuil', en: 'a squirrel', p: 2 },
            { fr: 'une grenouille', en: 'a frog', p: 1 },
            { fr: 'un serpent', en: 'a snake', p: 1 },
            { fr: 'une tortue', en: 'a turtle/tortoise', p: 1 },
            { fr: 'un dauphin', en: 'a dolphin', p: 1 },
            { fr: 'une baleine', en: 'a whale', p: 2 },
            { fr: 'un requin', en: 'a shark', p: 2 },
            { fr: 'un papillon', en: 'a butterfly', p: 1 },
            { fr: 'une abeille', en: 'a bee', p: 1 },
            { fr: 'une fourmi', en: 'an ant', p: 2 },
            { fr: 'une araignée', en: 'a spider', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 14. NATURE & ENVIRONMENT
    // ============================
    {
      id: 'nature',
      name: 'Nature & Environment',
      icon: '🌿',
      color: '#22c55e',
      subcategories: [
        {
          name: 'Landscapes',
          words: [
            { fr: 'la montagne', en: 'mountain', gender: 'f' , p: 1 },
            { fr: 'la mer', en: 'sea', gender: 'f' , p: 1 },
            { fr: "l'océan", en: 'ocean', gender: 'm' , p: 1 },
            { fr: 'la rivière', en: 'river', gender: 'f' , p: 1 },
            { fr: 'le fleuve', en: 'large river', gender: 'm' , p: 1 },
            { fr: 'le lac', en: 'lake', gender: 'm' , p: 1 },
            { fr: 'la forêt', en: 'forest', gender: 'f' , p: 1 },
            { fr: 'le désert', en: 'desert', gender: 'm' , p: 1 },
            { fr: 'la plage', en: 'beach', gender: 'f' , p: 1 },
            { fr: "l'île", en: 'island', gender: 'f' , p: 1 },
            { fr: 'la colline', en: 'hill', gender: 'f' , p: 1 },
            { fr: 'la vallée', en: 'valley', gender: 'f' , p: 1 },
            { fr: 'le champ', en: 'field', gender: 'm' , p: 1 },
            { fr: 'la campagne', en: 'countryside', gender: 'f' , p: 1 },
            { fr: 'la cascade', en: 'waterfall', gender: 'f' , p: 1 },
            { fr: 'la falaise', en: 'cliff', gender: 'f' , p: 1 },
            { fr: 'le volcan', en: 'volcano', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Plants & Nature',
          words: [
            { fr: "l'arbre", en: 'tree', gender: 'm' , p: 1 },
            { fr: 'la fleur', en: 'flower', gender: 'f' , p: 1 },
            { fr: 'la rose', en: 'rose', gender: 'f' , p: 1 },
            { fr: "l'herbe", en: 'grass', gender: 'f' , p: 1 },
            { fr: 'la feuille', en: 'leaf', gender: 'f' , p: 1 },
            { fr: 'la branche', en: 'branch', gender: 'f' , p: 1 },
            { fr: 'la racine', en: 'root', gender: 'f' , p: 1 },
            { fr: 'la graine', en: 'seed', gender: 'f' , p: 1 },
            { fr: 'le buisson', en: 'bush', gender: 'm' , p: 1 },
            { fr: 'la terre', en: 'earth / soil', gender: 'f' , p: 1 },
            { fr: 'la pierre', en: 'stone / rock', gender: 'f' , p: 1 },
            { fr: 'le sable', en: 'sand', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Environment',
          words: [
            { fr: "l'environnement", en: 'environment', gender: 'm' , p: 1 },
            { fr: 'la pollution', en: 'pollution', gender: 'f' , p: 1 },
            { fr: 'le réchauffement climatique', en: 'global warming', gender: 'm' , p: 1 },
            { fr: 'le recyclage', en: 'recycling', gender: 'm' , p: 1 },
            { fr: "l'énergie", en: 'energy', gender: 'f' , p: 1 },
            { fr: "l'énergie solaire", en: 'solar energy', gender: 'f' , p: 1 },
            { fr: 'la nature', en: 'nature', gender: 'f' , p: 1 },
            { fr: 'protéger', en: 'to protect' , p: 1 },
            { fr: 'recycler', en: 'to recycle' , p: 1 },
            { fr: 'polluer', en: 'to pollute' , p: 1 },
            { fr: 'les déchets', en: 'waste / rubbish', gender: 'm' , p: 1 }
          ]
        }
      ,
        {
          name: 'Landscapes & Plants',
          words: [
            { fr: 'un volcan', en: 'a volcano', p: 2 },
            { fr: 'une falaise', en: 'a cliff', p: 2 },
            { fr: 'un marais', en: 'a marsh/swamp', p: 3 },
            { fr: 'une grotte', en: 'a cave', p: 2 },
            { fr: 'un glacier', en: 'a glacier', p: 3 },
            { fr: 'une cascade', en: 'a waterfall', p: 2 },
            { fr: 'un ruisseau', en: 'a stream', p: 2 },
            { fr: 'un chêne', en: 'an oak tree', p: 2 },
            { fr: 'un sapin', en: 'a fir tree', p: 2 },
            { fr: 'le crépuscule', en: 'twilight/dusk', p: 3 },
            { fr: 'l\'aube', en: 'dawn', p: 2 },
            { fr: 'une étoile filante', en: 'a shooting star', p: 3 },
            { fr: 'un coucher de soleil', en: 'a sunset', p: 1 },
            { fr: 'un lever de soleil', en: 'a sunrise', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 15. HEALTH & MEDICINE
    // ============================
    {
      id: 'health',
      name: 'Health & Medicine',
      icon: '🏥',
      color: '#ef4444',
      subcategories: [
        {
          name: 'Health & Illness',
          words: [
            { fr: 'la santé', en: 'health', gender: 'f' , p: 1 },
            { fr: 'la maladie', en: 'illness / disease', gender: 'f' , p: 1 },
            { fr: 'la douleur', en: 'pain', gender: 'f' , p: 1 },
            { fr: 'la fièvre', en: 'fever', gender: 'f' , p: 1 },
            { fr: 'le rhume', en: 'cold (illness)', gender: 'm' , p: 1 },
            { fr: 'la grippe', en: 'flu', gender: 'f' , p: 1 },
            { fr: 'la toux', en: 'cough', gender: 'f' , p: 1 },
            { fr: 'le mal de tête', en: 'headache', gender: 'm' , p: 1 },
            { fr: 'le mal de ventre', en: 'stomachache', gender: 'm' , p: 1 },
            { fr: 'le mal de gorge', en: 'sore throat', gender: 'm' , p: 1 },
            { fr: 'le mal de dos', en: 'backache', gender: 'm' , p: 1 },
            { fr: "J'ai mal à la tête", en: 'I have a headache' , p: 1 },
            { fr: "J'ai mal au ventre", en: 'I have a stomachache' , p: 1 },
            { fr: 'être malade', en: 'to be sick' , p: 1 },
            { fr: 'tousser', en: 'to cough' , p: 1 },
            { fr: 'éternuer', en: 'to sneeze' , p: 1 },
            { fr: 'vomir', en: 'to vomit' , p: 1 },
            { fr: 'se blesser', en: 'to injure oneself' , p: 1 },
            { fr: 'guérir', en: 'to heal / to recover' , p: 1 },
            { fr: 'la blessure', en: 'injury / wound', gender: 'f' , p: 1 },
            { fr: "l'allergie", en: 'allergy', gender: 'f' , p: 1 },
            { fr: "l'infection", en: 'infection', gender: 'f' , p: 1 }
          ]
        },
        {
          name: 'Medical Vocabulary',
          words: [
            { fr: "l'hôpital", en: 'hospital', gender: 'm' , p: 1 },
            { fr: 'le médecin', en: 'doctor', gender: 'm' , p: 1 },
            { fr: "l'infirmier / l'infirmière", en: 'nurse' , p: 1 },
            { fr: 'le/la pharmacien(ne)', en: 'pharmacist' , p: 1 },
            { fr: 'la pharmacie', en: 'pharmacy', gender: 'f' , p: 1 },
            { fr: 'le médicament', en: 'medicine / medication', gender: 'm' , p: 1 },
            { fr: "l'ordonnance", en: 'prescription', gender: 'f' , p: 1 },
            { fr: 'le comprimé', en: 'tablet / pill', gender: 'm' , p: 1 },
            { fr: 'le sirop', en: 'syrup', gender: 'm' , p: 1 },
            { fr: 'le pansement', en: 'bandage / plaster', gender: 'm' , p: 1 },
            { fr: 'la piqûre', en: 'injection / sting', gender: 'f' , p: 1 },
            { fr: 'le vaccin', en: 'vaccine', gender: 'm' , p: 1 },
            { fr: "l'ambulance", en: 'ambulance', gender: 'f' , p: 1 },
            { fr: 'les urgences', en: 'emergency room', gender: 'f' , p: 1 },
            { fr: "l'opération", en: 'operation / surgery', gender: 'f' , p: 1 },
            { fr: 'le rendez-vous', en: 'appointment', gender: 'm' , p: 1 },
            { fr: 'le régime', en: 'diet', gender: 'm' , p: 1 },
            { fr: 'la consultation', en: 'consultation', gender: 'f' , p: 1 }
          ]
        }
      ,
        {
          name: 'Medical Care',
          words: [
            { fr: 'une ordonnance', en: 'a prescription', p: 1 },
            { fr: 'un médicament', en: 'a medicine/medication', p: 1 },
            { fr: 'un comprimé', en: 'a tablet/pill', p: 2 },
            { fr: 'un sirop', en: 'a syrup', p: 2 },
            { fr: 'une piqûre', en: 'an injection/sting', p: 2 },
            { fr: 'une allergie', en: 'an allergy', p: 1 },
            { fr: 'un rhume', en: 'a cold', p: 1 },
            { fr: 'la grippe', en: 'the flu', p: 1 },
            { fr: 'la toux', en: 'a cough', p: 1 },
            { fr: 'la fièvre', en: 'a fever', p: 1 },
            { fr: 'un pansement', en: 'a bandage/plaster', p: 2 },
            { fr: 'un plâtre', en: 'a cast (medical)', p: 3 },
            { fr: 'une cicatrice', en: 'a scar', p: 3 },
            { fr: 'un régime', en: 'a diet', p: 2 },
            { fr: 'l\'assurance maladie', en: 'health insurance', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 16. SHOPPING & MONEY
    // ============================
    {
      id: 'shopping',
      name: 'Shopping & Money',
      icon: '🛒',
      color: '#f59e0b',
      subcategories: [
        {
          name: 'Shops',
          words: [
            { fr: 'le magasin', en: 'shop / store', gender: 'm' , p: 1 },
            { fr: 'le supermarché', en: 'supermarket', gender: 'm' , p: 1 },
            { fr: 'le marché', en: 'market', gender: 'm' , p: 1 },
            { fr: 'le centre commercial', en: 'shopping center / mall', gender: 'm' , p: 1 },
            { fr: 'la boulangerie', en: 'bakery', gender: 'f' , p: 1 },
            { fr: 'la pâtisserie', en: 'pastry shop', gender: 'f' , p: 1 },
            { fr: 'la boucherie', en: 'butcher shop', gender: 'f' , p: 1 },
            { fr: 'la poissonnerie', en: 'fish shop', gender: 'f' , p: 1 },
            { fr: 'la pharmacie', en: 'pharmacy', gender: 'f' , p: 1 },
            { fr: 'la librairie', en: 'bookshop', gender: 'f' , p: 1 },
            { fr: 'la boutique', en: 'boutique / shop', gender: 'f' , p: 1 },
            { fr: "l'épicerie", en: 'grocery store', gender: 'f' , p: 1 },
            { fr: 'le tabac', en: 'tobacco shop / newsstand', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Money & Buying',
          words: [
            { fr: "l'argent", en: 'money', gender: 'm' , p: 1 },
            { fr: "l'euro", en: 'euro', gender: 'm' , p: 1 },
            { fr: 'le prix', en: 'price', gender: 'm' , p: 1 },
            { fr: 'le billet', en: 'banknote', gender: 'm' , p: 1 },
            { fr: 'la pièce', en: 'coin', gender: 'f' , p: 1 },
            { fr: 'la monnaie', en: 'change / currency', gender: 'f' , p: 1 },
            { fr: 'la carte bancaire', en: 'bank card / debit card', gender: 'f' , p: 1 },
            { fr: 'la carte de crédit', en: 'credit card', gender: 'f' , p: 1 },
            { fr: 'le reçu', en: 'receipt', gender: 'm' , p: 1 },
            { fr: 'la caisse', en: 'checkout / cash register', gender: 'f' , p: 1 },
            { fr: 'la réduction', en: 'discount / reduction', gender: 'f' , p: 1 },
            { fr: 'les soldes', en: 'sales', gender: 'm' , p: 1 },
            { fr: 'cher / chère', en: 'expensive' , p: 1 },
            { fr: 'bon marché', en: 'cheap / inexpensive' , p: 1 },
            { fr: 'gratuit / gratuite', en: 'free (no cost)' , p: 1 },
            { fr: 'acheter', en: 'to buy' , p: 1 },
            { fr: 'vendre', en: 'to sell' , p: 1 },
            { fr: 'payer', en: 'to pay' , p: 1 },
            { fr: 'dépenser', en: 'to spend (money)' , p: 1 },
            { fr: 'coûter', en: 'to cost' , p: 1 },
            { fr: 'Combien ça coûte ?', en: 'How much does it cost?' , p: 1 }
          ]
        }
      ,
        {
          name: 'Shopping Terms',
          words: [
            { fr: 'un reçu', en: 'a receipt', p: 1 },
            { fr: 'une facture', en: 'a bill/invoice', p: 1 },
            { fr: 'un remboursement', en: 'a refund', p: 2 },
            { fr: 'une réduction', en: 'a discount', p: 1 },
            { fr: 'les soldes', en: 'the sales', p: 1 },
            { fr: 'un panier', en: 'a basket', p: 1 },
            { fr: 'un chariot', en: 'a shopping trolley', p: 2 },
            { fr: 'la vitrine', en: 'the shop window', p: 2 },
            { fr: 'une taille', en: 'a size (clothes)', p: 1 },
            { fr: 'une pointure', en: 'a shoe size', p: 2 },
            { fr: 'le rayon', en: 'the aisle/department', p: 2 },
            { fr: 'une file d\'attente', en: 'a queue/line', p: 1 },
            { fr: 'un distributeur automatique', en: 'a vending/cash machine', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 17. TECHNOLOGY
    // ============================
    {
      id: 'technology',
      name: 'Technology',
      icon: '💻',
      color: '#6366f1',
      subcategories: [
        {
          name: 'Devices & Internet',
          words: [
            { fr: "l'ordinateur", en: 'computer', gender: 'm' , p: 1 },
            { fr: "l'ordinateur portable", en: 'laptop', gender: 'm' , p: 1 },
            { fr: 'la tablette', en: 'tablet', gender: 'f' , p: 1 },
            { fr: 'le téléphone', en: 'telephone', gender: 'm' , p: 1 },
            { fr: 'le téléphone portable', en: 'mobile phone / cell phone', gender: 'm' , p: 1 },
            { fr: 'le smartphone', en: 'smartphone', gender: 'm' , p: 1 },
            { fr: "l'écran", en: 'screen', gender: 'm' , p: 1 },
            { fr: 'le clavier', en: 'keyboard', gender: 'm' , p: 1 },
            { fr: 'la souris', en: 'mouse (computer)', gender: 'f' , p: 1 },
            { fr: "l'imprimante", en: 'printer', gender: 'f' , p: 1 },
            { fr: 'les écouteurs', en: 'headphones / earbuds', gender: 'm' , p: 1 },
            { fr: "l'appareil photo", en: 'camera', gender: 'm' , p: 1 },
            { fr: 'Internet', en: 'Internet', gender: 'm' , p: 1 },
            { fr: 'le site web', en: 'website', gender: 'm' , p: 1 },
            { fr: 'le Wi-Fi', en: 'Wi-Fi', gender: 'm' , p: 1 },
            { fr: 'le mot de passe', en: 'password', gender: 'm' , p: 1 },
            { fr: 'le réseau social', en: 'social network', gender: 'm' , p: 1 },
            { fr: "l'application", en: 'app / application', gender: 'f' , p: 1 },
            { fr: 'le courriel / le mail', en: 'email', gender: 'm' , p: 1 },
            { fr: 'le message', en: 'message', gender: 'm' , p: 1 },
            { fr: 'le fichier', en: 'file', gender: 'm' , p: 1 },
            { fr: 'le logiciel', en: 'software', gender: 'm' , p: 1 },
            { fr: 'télécharger', en: 'to download' , p: 1 },
            { fr: 'cliquer', en: 'to click' , p: 1 },
            { fr: 'envoyer', en: 'to send' , p: 1 },
            { fr: 'recevoir', en: 'to receive' , p: 1 },
            { fr: 'sauvegarder', en: 'to save' , p: 1 },
            { fr: 'supprimer', en: 'to delete' , p: 1 },
            { fr: 'partager', en: 'to share' , p: 1 },
            { fr: 'chercher', en: 'to search' , p: 1 }
          ]
        }
      ,
        {
          name: 'Digital Life',
          words: [
            { fr: 'un mot de passe', en: 'a password', p: 1 },
            { fr: 'un compte', en: 'an account', p: 1 },
            { fr: 'une application', en: 'an app', p: 1 },
            { fr: 'un réseau social', en: 'a social network', p: 1 },
            { fr: 'le wifi', en: 'wifi', p: 1 },
            { fr: 'un bug', en: 'a bug', p: 2 },
            { fr: 'une mise à jour', en: 'an update', p: 1 },
            { fr: 'un téléchargement', en: 'a download', p: 2 },
            { fr: 'une sauvegarde', en: 'a backup', p: 2 },
            { fr: 'le cloud', en: 'the cloud', p: 2 },
            { fr: 'un virus', en: 'a virus', p: 2 },
            { fr: 'l\'intelligence artificielle', en: 'artificial intelligence', p: 2 },
            { fr: 'un algorithme', en: 'an algorithm', p: 3 },
            { fr: 'une base de données', en: 'a database', p: 3 }
          ]
        }
      ]
    },

    // ============================
    // 18. SPORTS & HOBBIES
    // ============================
    {
      id: 'sports-hobbies',
      name: 'Sports & Hobbies',
      icon: '⚽',
      color: '#10b981',
      subcategories: [
        {
          name: 'Sports',
          words: [
            { fr: 'le football', en: 'soccer / football', gender: 'm' , p: 1 },
            { fr: 'le basket-ball', en: 'basketball', gender: 'm' , p: 1 },
            { fr: 'le tennis', en: 'tennis', gender: 'm' , p: 1 },
            { fr: 'le rugby', en: 'rugby', gender: 'm' , p: 1 },
            { fr: 'le volley-ball', en: 'volleyball', gender: 'm' , p: 1 },
            { fr: 'la natation', en: 'swimming', gender: 'f' , p: 1 },
            { fr: "l'athlétisme", en: 'athletics / track and field', gender: 'm' , p: 1 },
            { fr: 'le cyclisme', en: 'cycling', gender: 'm' , p: 1 },
            { fr: 'le ski', en: 'skiing', gender: 'm' , p: 1 },
            { fr: 'la gymnastique', en: 'gymnastics', gender: 'f' , p: 1 },
            { fr: 'la boxe', en: 'boxing', gender: 'f' , p: 1 },
            { fr: 'le judo', en: 'judo', gender: 'm' , p: 1 },
            { fr: "l'escalade", en: 'climbing', gender: 'f' , p: 1 },
            { fr: "l'équitation", en: 'horse riding', gender: 'f' , p: 1 },
            { fr: 'la course', en: 'running / race', gender: 'f' , p: 1 },
            { fr: 'le match', en: 'match / game', gender: 'm' , p: 1 },
            { fr: "l'équipe", en: 'team', gender: 'f' , p: 1 },
            { fr: 'le joueur / la joueuse', en: 'player' , p: 1 },
            { fr: 'gagner', en: 'to win' , p: 1 },
            { fr: 'perdre', en: 'to lose' , p: 1 },
            { fr: "s'entraîner", en: 'to train' , p: 1 },
            { fr: 'le score', en: 'score', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Hobbies & Leisure',
          words: [
            { fr: 'la lecture', en: 'reading', gender: 'f' , p: 1 },
            { fr: 'la musique', en: 'music', gender: 'f' , p: 1 },
            { fr: 'le cinéma', en: 'cinema / movies', gender: 'm' , p: 1 },
            { fr: 'la photographie', en: 'photography', gender: 'f' , p: 1 },
            { fr: 'le dessin', en: 'drawing', gender: 'm' , p: 1 },
            { fr: 'la peinture', en: 'painting', gender: 'f' , p: 1 },
            { fr: 'la danse', en: 'dance / dancing', gender: 'f' , p: 1 },
            { fr: 'la cuisine', en: 'cooking', gender: 'f' , p: 1 },
            { fr: 'le jardinage', en: 'gardening', gender: 'm' , p: 1 },
            { fr: 'le voyage', en: 'travelling', gender: 'm' , p: 1 },
            { fr: 'le jeu vidéo', en: 'video game', gender: 'm' , p: 1 },
            { fr: 'le jeu de société', en: 'board game', gender: 'm' , p: 1 },
            { fr: 'la randonnée', en: 'hiking', gender: 'f' , p: 1 },
            { fr: 'la pêche', en: 'fishing', gender: 'f' , p: 1 },
            { fr: 'le bricolage', en: 'DIY / crafts', gender: 'm' , p: 1 },
            { fr: 'jouer', en: 'to play' , p: 1 },
            { fr: 'chanter', en: 'to sing' , p: 1 },
            { fr: 'danser', en: 'to dance' , p: 1 },
            { fr: 'dessiner', en: 'to draw' , p: 1 },
            { fr: 'peindre', en: 'to paint' , p: 1 },
            { fr: 'collectionner', en: 'to collect' , p: 1 }
          ]
        }
      ,
        {
          name: 'More Sports & Activities',
          words: [
            { fr: 'l\'escalade', en: 'rock climbing', p: 2 },
            { fr: 'la randonnée', en: 'hiking', p: 1 },
            { fr: 'le surf', en: 'surfing', p: 2 },
            { fr: 'la voile', en: 'sailing', p: 2 },
            { fr: 'l\'équitation', en: 'horse riding', p: 2 },
            { fr: 'le patinage', en: 'skating', p: 2 },
            { fr: 'la pétanque', en: 'pétanque/boules', p: 2 },
            { fr: 'un tournoi', en: 'a tournament', p: 2 },
            { fr: 'un arbitre', en: 'a referee', p: 2 },
            { fr: 'un entraîneur', en: 'a coach/trainer', p: 2 },
            { fr: 'une défaite', en: 'a defeat', p: 2 },
            { fr: 'une victoire', en: 'a victory', p: 1 },
            { fr: 'la lecture', en: 'reading (hobby)', p: 1 },
            { fr: 'le jardinage', en: 'gardening', p: 2 },
            { fr: 'le bricolage', en: 'DIY/crafts', p: 2 },
            { fr: 'la couture', en: 'sewing', p: 3 }
          ]
        }
      ]
    },

    // ============================
    // 19. EMOTIONS & PERSONALITY
    // ============================
    {
      id: 'emotions',
      name: 'Emotions & Personality',
      icon: '😊',
      color: '#f472b6',
      subcategories: [
        {
          name: 'Emotions & Feelings',
          words: [
            { fr: 'heureux / heureuse', en: 'happy' , p: 1 },
            { fr: 'triste', en: 'sad' , p: 1 },
            { fr: 'en colère', en: 'angry' , p: 1 },
            { fr: 'content / contente', en: 'pleased / glad' , p: 1 },
            { fr: 'fatigué / fatiguée', en: 'tired' , p: 1 },
            { fr: 'surpris / surprise', en: 'surprised' , p: 1 },
            { fr: 'inquiet / inquiète', en: 'worried' , p: 1 },
            { fr: 'nerveux / nerveuse', en: 'nervous' , p: 1 },
            { fr: 'jaloux / jalouse', en: 'jealous' , p: 1 },
            { fr: 'fier / fière', en: 'proud' , p: 1 },
            { fr: 'déçu / déçue', en: 'disappointed' , p: 1 },
            { fr: 'stressé / stressée', en: 'stressed' , p: 1 },
            { fr: 'ennuyé / ennuyée', en: 'bored / annoyed' , p: 1 },
            { fr: 'amoureux / amoureuse', en: 'in love' , p: 1 },
            { fr: 'effrayé / effrayée', en: 'frightened / scared' , p: 1 },
            { fr: 'confus / confuse', en: 'confused' , p: 1 },
            { fr: "l'amour", en: 'love', gender: 'm' , p: 1 },
            { fr: 'la joie', en: 'joy', gender: 'f' , p: 1 },
            { fr: 'la peur', en: 'fear', gender: 'f' , p: 1 },
            { fr: 'la colère', en: 'anger', gender: 'f' , p: 1 },
            { fr: 'la tristesse', en: 'sadness', gender: 'f' , p: 1 },
            { fr: 'le bonheur', en: 'happiness', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Personality Traits',
          words: [
            { fr: 'gentil / gentille', en: 'kind / nice' , p: 1 },
            { fr: 'méchant / méchante', en: 'mean / nasty' , p: 1 },
            { fr: 'intelligent / intelligente', en: 'intelligent' , p: 1 },
            { fr: 'drôle', en: 'funny' , p: 1 },
            { fr: 'sérieux / sérieuse', en: 'serious' , p: 1 },
            { fr: 'timide', en: 'shy' , p: 1 },
            { fr: 'bavard / bavarde', en: 'talkative' , p: 1 },
            { fr: 'courageux / courageuse', en: 'brave / courageous' , p: 1 },
            { fr: 'paresseux / paresseuse', en: 'lazy' , p: 1 },
            { fr: 'travailleur / travailleuse', en: 'hardworking' , p: 1 },
            { fr: 'généreux / généreuse', en: 'generous' , p: 1 },
            { fr: 'égoïste', en: 'selfish' , p: 1 },
            { fr: 'patient / patiente', en: 'patient' , p: 1 },
            { fr: 'impatient / impatiente', en: 'impatient' , p: 1 },
            { fr: 'curieux / curieuse', en: 'curious' , p: 1 },
            { fr: 'honnête', en: 'honest' , p: 1 },
            { fr: 'poli / polie', en: 'polite' , p: 1 },
            { fr: 'impoli / impolie', en: 'rude / impolite' , p: 1 },
            { fr: 'sympathique / sympa', en: 'likable / nice' , p: 1 },
            { fr: 'créatif / créative', en: 'creative' , p: 1 },
            { fr: 'calme', en: 'calm' , p: 1 },
            { fr: 'optimiste', en: 'optimistic' , p: 1 },
            { fr: 'pessimiste', en: 'pessimistic' , p: 1 }
          ]
        }
      ,
        {
          name: 'Complex Emotions',
          words: [
            { fr: 'l\'angoisse', en: 'anguish/anxiety', p: 2 },
            { fr: 'le soulagement', en: 'relief', p: 2 },
            { fr: 'la nostalgie', en: 'nostalgia', p: 2 },
            { fr: 'la fierté', en: 'pride', p: 1 },
            { fr: 'la honte', en: 'shame', p: 1 },
            { fr: 'la jalousie', en: 'jealousy', p: 2 },
            { fr: 'la gratitude', en: 'gratitude', p: 2 },
            { fr: 'l\'enthousiasme', en: 'enthusiasm', p: 2 },
            { fr: 'l\'indifférence', en: 'indifference', p: 3 },
            { fr: 'le mépris', en: 'contempt', p: 3 },
            { fr: 'la tendresse', en: 'tenderness', p: 2 },
            { fr: 'la méfiance', en: 'distrust', p: 3 },
            { fr: 'la bienveillance', en: 'kindness/goodwill', p: 2 },
            { fr: 'l\'émerveillement', en: 'wonder/amazement', p: 3 }
          ]
        }
      ]
    },

    // ============================
    // 20. CITY & DIRECTIONS
    // ============================
    {
      id: 'city-directions',
      name: 'City & Directions',
      icon: '🏙️',
      color: '#78716c',
      subcategories: [
        {
          name: 'Places in Town',
          words: [
            { fr: 'la ville', en: 'city / town', gender: 'f' , p: 1 },
            { fr: 'le village', en: 'village', gender: 'm' , p: 1 },
            { fr: 'la rue', en: 'street', gender: 'f' , p: 1 },
            { fr: "l'avenue", en: 'avenue', gender: 'f' , p: 1 },
            { fr: 'le boulevard', en: 'boulevard', gender: 'm' , p: 1 },
            { fr: 'la place', en: 'square / plaza', gender: 'f' , p: 1 },
            { fr: 'le pont', en: 'bridge', gender: 'm' , p: 1 },
            { fr: 'le parc', en: 'park', gender: 'm' , p: 1 },
            { fr: "l'église", en: 'church', gender: 'f' , p: 1 },
            { fr: 'la cathédrale', en: 'cathedral', gender: 'f' , p: 1 },
            { fr: 'le musée', en: 'museum', gender: 'm' , p: 1 },
            { fr: 'le théâtre', en: 'theater', gender: 'm' , p: 1 },
            { fr: 'le cinéma', en: 'cinema', gender: 'm' , p: 1 },
            { fr: 'le restaurant', en: 'restaurant', gender: 'm' , p: 1 },
            { fr: 'le café', en: 'café', gender: 'm' , p: 1 },
            { fr: "l'hôtel", en: 'hotel', gender: 'm' , p: 1 },
            { fr: "l'hôpital", en: 'hospital', gender: 'm' , p: 1 },
            { fr: 'la banque', en: 'bank', gender: 'f' , p: 1 },
            { fr: 'la poste', en: 'post office', gender: 'f' , p: 1 },
            { fr: 'la mairie', en: 'town hall / city hall', gender: 'f' , p: 1 },
            { fr: 'la gare', en: 'train station', gender: 'f' , p: 1 },
            { fr: 'le commissariat', en: 'police station', gender: 'm' , p: 1 },
            { fr: 'la bibliothèque', en: 'library', gender: 'f' , p: 1 },
            { fr: 'le stade', en: 'stadium', gender: 'm' , p: 1 },
            { fr: 'la piscine', en: 'swimming pool', gender: 'f' , p: 1 },
            { fr: 'le quartier', en: 'neighborhood / district', gender: 'm' , p: 1 },
            { fr: 'le trottoir', en: 'sidewalk / pavement', gender: 'm' , p: 1 },
            { fr: 'le carrefour', en: 'crossroads / intersection', gender: 'm' , p: 1 },
            { fr: 'le feu (rouge)', en: 'traffic light', gender: 'm' , p: 1 }
          ]
        },
        {
          name: 'Directions',
          words: [
            { fr: 'à gauche', en: 'to the left' , p: 1 },
            { fr: 'à droite', en: 'to the right' , p: 1 },
            { fr: 'tout droit', en: 'straight ahead' , p: 1 },
            { fr: 'en face de', en: 'opposite / facing' , p: 1 },
            { fr: 'à côté de', en: 'next to / beside' , p: 1 },
            { fr: 'près de', en: 'near / close to' , p: 1 },
            { fr: 'loin de', en: 'far from' , p: 1 },
            { fr: 'entre', en: 'between' , p: 1 },
            { fr: 'devant', en: 'in front of' , p: 1 },
            { fr: 'derrière', en: 'behind' , p: 1 },
            { fr: 'au-dessus de', en: 'above' , p: 1 },
            { fr: 'au-dessous de', en: 'below / under' , p: 1 },
            { fr: 'dans', en: 'in / inside' , p: 1 },
            { fr: 'dehors', en: 'outside' , p: 1 },
            { fr: 'le nord', en: 'north', gender: 'm' , p: 1 },
            { fr: 'le sud', en: 'south', gender: 'm' , p: 1 },
            { fr: "l'est", en: 'east', gender: 'm' , p: 1 },
            { fr: "l'ouest", en: 'west', gender: 'm' , p: 1 },
            { fr: 'ici', en: 'here' , p: 1 },
            { fr: 'là / là-bas', en: 'there / over there' , p: 1 },
            { fr: 'partout', en: 'everywhere' , p: 1 },
            { fr: 'nulle part', en: 'nowhere' , p: 1 },
            { fr: 'tourner', en: 'to turn' , p: 1 },
            { fr: 'continuer', en: 'to continue' , p: 1 },
            { fr: 'traverser', en: 'to cross' , p: 1 }
          ]
        }
      ,
        {
          name: 'City Life',
          words: [
            { fr: 'un quartier', en: 'a neighbourhood', p: 1 },
            { fr: 'une banlieue', en: 'a suburb', p: 1 },
            { fr: 'un arrondissement', en: 'a district (Paris)', p: 2 },
            { fr: 'une impasse', en: 'a dead end', p: 2 },
            { fr: 'un trottoir', en: 'a pavement/sidewalk', p: 1 },
            { fr: 'un passage piéton', en: 'a pedestrian crossing', p: 1 },
            { fr: 'une fontaine', en: 'a fountain', p: 2 },
            { fr: 'un banc', en: 'a bench', p: 2 },
            { fr: 'un panneau', en: 'a sign', p: 1 },
            { fr: 'la mairie', en: 'the town hall', p: 1 },
            { fr: 'un commissariat', en: 'a police station', p: 2 },
            { fr: 'les transports en commun', en: 'public transport', p: 1 },
            { fr: 'un parking', en: 'a car park', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 21. COUNTRIES & NATIONALITIES
    // ============================
    {
      id: 'countries',
      name: 'Countries & Nationalities',
      icon: '🌍',
      color: '#0d9488',
      subcategories: [
        {
          name: 'European Countries',
          words: [
            { fr: 'la France — français(e)', en: 'France — French' , p: 1 },
            { fr: "l'Angleterre — anglais(e)", en: 'England — English' , p: 1 },
            { fr: "l'Allemagne — allemand(e)", en: 'Germany — German' , p: 1 },
            { fr: "l'Espagne — espagnol(e)", en: 'Spain — Spanish' , p: 1 },
            { fr: "l'Italie — italien(ne)", en: 'Italy — Italian' , p: 1 },
            { fr: 'le Portugal — portugais(e)', en: 'Portugal — Portuguese' , p: 1 },
            { fr: 'la Belgique — belge', en: 'Belgium — Belgian' , p: 1 },
            { fr: 'la Suisse — suisse', en: 'Switzerland — Swiss' , p: 1 },
            { fr: 'les Pays-Bas — néerlandais(e)', en: 'Netherlands — Dutch' , p: 1 },
            { fr: 'la Russie — russe', en: 'Russia — Russian' , p: 1 },
            { fr: 'la Grèce — grec / grecque', en: 'Greece — Greek' , p: 1 },
            { fr: 'la Pologne — polonais(e)', en: 'Poland — Polish' , p: 1 },
            { fr: 'la Suède — suédois(e)', en: 'Sweden — Swedish' , p: 1 },
            { fr: "l'Irlande — irlandais(e)", en: 'Ireland — Irish' , p: 1 }
          ]
        },
        {
          name: 'World Countries',
          words: [
            { fr: 'les États-Unis — américain(e)', en: 'United States — American' , p: 1 },
            { fr: 'le Canada — canadien(ne)', en: 'Canada — Canadian' , p: 1 },
            { fr: 'le Mexique — mexicain(e)', en: 'Mexico — Mexican' , p: 1 },
            { fr: 'le Brésil — brésilien(ne)', en: 'Brazil — Brazilian' , p: 1 },
            { fr: "l'Argentine — argentin(e)", en: 'Argentina — Argentinian' , p: 1 },
            { fr: 'la Chine — chinois(e)', en: 'China — Chinese' , p: 1 },
            { fr: 'le Japon — japonais(e)', en: 'Japan — Japanese' , p: 1 },
            { fr: "l'Inde — indien(ne)", en: 'India — Indian' , p: 1 },
            { fr: "l'Australie — australien(ne)", en: 'Australia — Australian' , p: 1 },
            { fr: "l'Égypte — égyptien(ne)", en: 'Egypt — Egyptian' , p: 1 },
            { fr: 'le Maroc — marocain(e)', en: 'Morocco — Moroccan' , p: 1 },
            { fr: 'le Sénégal — sénégalais(e)', en: 'Senegal — Senegalese' , p: 1 },
            { fr: "l'Algérie — algérien(ne)", en: 'Algeria — Algerian' , p: 1 },
            { fr: 'la Tunisie — tunisien(ne)', en: 'Tunisia — Tunisian' , p: 1 },
            { fr: 'la Corée — coréen(ne)', en: 'Korea — Korean' , p: 1 },
            { fr: 'la Turquie — turc / turque', en: 'Turkey — Turkish' , p: 1 }
          ]
        }
      ,
        {
          name: 'Travel & Borders',
          words: [
            { fr: 'un visa', en: 'a visa', p: 2 },
            { fr: 'un passeport', en: 'a passport', p: 1 },
            { fr: 'une frontière', en: 'a border', p: 1 },
            { fr: 'un douanier', en: 'a customs officer', p: 3 },
            { fr: 'l\'immigration', en: 'immigration', p: 2 },
            { fr: 'un expatrié', en: 'an expat', p: 3 },
            { fr: 'la Suisse', en: 'Switzerland', p: 1 },
            { fr: 'la Belgique', en: 'Belgium', p: 1 },
            { fr: 'le Portugal', en: 'Portugal', p: 2 },
            { fr: 'la Grèce', en: 'Greece', p: 2 },
            { fr: 'le Japon', en: 'Japan', p: 2 },
            { fr: 'la Chine', en: 'China', p: 2 },
            { fr: 'le Brésil', en: 'Brazil', p: 2 },
            { fr: 'le Maroc', en: 'Morocco', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 22. QUESTION WORDS
    // ============================
    {
      id: 'question-words',
      name: 'Question Words',
      icon: '❓',
      color: '#f97316',
      subcategories: [
        {
          name: 'Interrogative Words',
          words: [
            { fr: 'qui', en: 'who' , p: 1 },
            { fr: 'que / quoi', en: 'what' , p: 1 },
            { fr: "qu'est-ce que", en: 'what (+ clause)' , p: 1 },
            { fr: 'où', en: 'where' , p: 1 },
            { fr: 'quand', en: 'when' , p: 1 },
            { fr: 'comment', en: 'how' , p: 1 },
            { fr: 'pourquoi', en: 'why' , p: 1 },
            { fr: 'combien', en: 'how much / how many' , p: 1 },
            { fr: 'quel / quelle', en: 'which / what' , p: 1 },
            { fr: 'quels / quelles', en: 'which / what (plural)' , p: 1 },
            { fr: 'lequel / laquelle', en: 'which one' , p: 1 },
            { fr: 'est-ce que', en: '(question marker — turns statement into question)' , p: 1 },
            { fr: "n'est-ce pas", en: "isn't it / right?" , p: 1 },
            { fr: 'Combien ça coûte ?', en: 'How much does it cost?' , p: 1 },
            { fr: "Qu'est-ce que c'est ?", en: 'What is it?' , p: 1 },
            { fr: 'Comment ça va ?', en: 'How are you?' , p: 1 },
            { fr: 'Où est... ?', en: 'Where is...?' , p: 1 },
            { fr: "Quelle heure est-il ?", en: 'What time is it?' , p: 1 }
          ]
        }
      ,
        {
          name: 'Advanced Questions',
          words: [
            { fr: 'lequel / laquelle', en: 'which one', p: 1 },
            { fr: 'auquel / à laquelle', en: 'to which one', p: 2 },
            { fr: 'duquel / de laquelle', en: 'of which one', p: 3 },
            { fr: 'n\'est-ce pas', en: 'isn\'t it / right?', p: 1 },
            { fr: 'comment ça se fait', en: 'how come', p: 2 },
            { fr: 'à quoi bon', en: 'what\'s the point', p: 3 }
          ]
        }
      ]
    },

    // ============================
    // 23. COMMON ADJECTIVES
    // ============================
    {
      id: 'adjectives',
      name: 'Common Adjectives',
      icon: '📝',
      color: '#8b5cf6',
      subcategories: [
        {
          name: 'Size & Quantity',
          words: [
            { fr: 'grand / grande', en: 'big / tall' , p: 1 },
            { fr: 'petit / petite', en: 'small / short' , p: 1 },
            { fr: 'gros / grosse', en: 'fat / big' , p: 1 },
            { fr: 'mince', en: 'thin / slim' , p: 1 },
            { fr: 'long / longue', en: 'long' , p: 1 },
            { fr: 'court / courte', en: 'short (length)' , p: 1 },
            { fr: 'large', en: 'wide / broad' , p: 1 },
            { fr: 'étroit / étroite', en: 'narrow' , p: 1 },
            { fr: 'énorme', en: 'huge / enormous' , p: 1 },
            { fr: 'minuscule', en: 'tiny' , p: 1 },
            { fr: 'plein / pleine', en: 'full' , p: 1 },
            { fr: 'vide', en: 'empty' , p: 1 },
            { fr: 'lourd / lourde', en: 'heavy' , p: 1 },
            { fr: 'léger / légère', en: 'light (weight)' , p: 1 }
          ]
        },
        {
          name: 'Quality & Appearance',
          words: [
            { fr: 'bon / bonne', en: 'good' , p: 1 },
            { fr: 'mauvais / mauvaise', en: 'bad' , p: 1 },
            { fr: 'beau / belle', en: 'beautiful / handsome' , p: 1 },
            { fr: 'laid / laide', en: 'ugly' , p: 1 },
            { fr: 'joli / jolie', en: 'pretty' , p: 1 },
            { fr: 'nouveau / nouvelle', en: 'new' , p: 1 },
            { fr: 'vieux / vieille', en: 'old' , p: 1 },
            { fr: 'jeune', en: 'young' , p: 1 },
            { fr: 'propre', en: 'clean / own' , p: 1 },
            { fr: 'sale', en: 'dirty' , p: 1 },
            { fr: 'chaud / chaude', en: 'hot / warm' , p: 1 },
            { fr: 'froid / froide', en: 'cold' , p: 1 },
            { fr: 'sec / sèche', en: 'dry' , p: 1 },
            { fr: 'mouillé / mouillée', en: 'wet' , p: 1 },
            { fr: 'dur / dure', en: 'hard' , p: 1 },
            { fr: 'mou / molle', en: 'soft' , p: 1 },
            { fr: 'rapide', en: 'fast' , p: 1 },
            { fr: 'lent / lente', en: 'slow' , p: 1 },
            { fr: 'fort / forte', en: 'strong' , p: 1 },
            { fr: 'faible', en: 'weak' , p: 1 }
          ]
        },
        {
          name: 'Other Common Adjectives',
          words: [
            { fr: 'facile', en: 'easy' , p: 1 },
            { fr: 'difficile', en: 'difficult' , p: 1 },
            { fr: 'possible', en: 'possible' , p: 1 },
            { fr: 'impossible', en: 'impossible' , p: 1 },
            { fr: 'important / importante', en: 'important' , p: 1 },
            { fr: 'intéressant / intéressante', en: 'interesting' , p: 1 },
            { fr: 'ennuyeux / ennuyeuse', en: 'boring' , p: 1 },
            { fr: 'dangereux / dangereuse', en: 'dangerous' , p: 1 },
            { fr: 'sûr / sûre', en: 'safe / sure' , p: 1 },
            { fr: 'seul / seule', en: 'alone / only' , p: 1 },
            { fr: 'même', en: 'same / even' , p: 1 },
            { fr: 'autre', en: 'other' , p: 1 },
            { fr: 'chaque', en: 'each / every' , p: 1 },
            { fr: 'tout / toute', en: 'all / every' , p: 1 },
            { fr: 'premier / première', en: 'first' , p: 1 },
            { fr: 'dernier / dernière', en: 'last' , p: 1 },
            { fr: 'prochain / prochaine', en: 'next' , p: 1 },
            { fr: 'ouvert / ouverte', en: 'open' , p: 1 },
            { fr: 'fermé / fermée', en: 'closed' , p: 1 },
            { fr: 'vrai / vraie', en: 'true / real' , p: 1 },
            { fr: 'faux / fausse', en: 'false / wrong' , p: 1 },
            { fr: 'libre', en: 'free (available)' , p: 1 },
            { fr: 'occupé / occupée', en: 'busy / occupied' , p: 1 },
            { fr: 'prêt / prête', en: 'ready' , p: 1 }
          ]
        }
      ,
        {
          name: 'More Common Adjectives',
          words: [
            { fr: 'ancien / ancienne', en: 'old / former', p: 1 },
            { fr: 'actuel / actuelle', en: 'current', p: 1 },
            { fr: 'propre', en: 'own / clean', p: 1 },
            { fr: 'seul / seule', en: 'alone / only', p: 1 },
            { fr: 'même', en: 'same / self', p: 1 },
            { fr: 'chaque', en: 'each', p: 1 },
            { fr: 'plusieurs', en: 'several', p: 1 },
            { fr: 'quelques', en: 'a few / some', p: 1 },
            { fr: 'aucun / aucune', en: 'none / no', p: 1 },
            { fr: 'certain / certaine', en: 'certain / some', p: 2 },
            { fr: 'doux / douce', en: 'soft / gentle / sweet', p: 1 },
            { fr: 'léger / légère', en: 'light (weight)', p: 2 },
            { fr: 'lourd / lourde', en: 'heavy', p: 1 },
            { fr: 'épais / épaisse', en: 'thick', p: 2 },
            { fr: 'mince', en: 'thin / slim', p: 1 },
            { fr: 'étroit / étroite', en: 'narrow', p: 2 },
            { fr: 'large', en: 'wide', p: 2 }
          ]
        }
      ]
    },

    // ============================
    // 24. COMMON ADVERBS
    // ============================
    {
      id: 'adverbs',
      name: 'Common Adverbs',
      icon: '🔤',
      color: '#059669',
      subcategories: [
        {
          name: 'Frequency',
          words: [
            { fr: 'toujours', en: 'always' , p: 1 },
            { fr: 'souvent', en: 'often' , p: 1 },
            { fr: 'quelquefois / parfois', en: 'sometimes' , p: 1 },
            { fr: 'rarement', en: 'rarely' , p: 1 },
            { fr: 'jamais', en: 'never' , p: 1 },
            { fr: 'généralement', en: 'generally' , p: 1 },
            { fr: 'habituellement', en: 'usually' , p: 1 },
            { fr: 'de temps en temps', en: 'from time to time' , p: 1 },
            { fr: 'tous les jours', en: 'every day' , p: 1 },
            { fr: 'une fois', en: 'once' , p: 1 },
            { fr: 'deux fois', en: 'twice' , p: 1 }
          ]
        },
        {
          name: 'Manner',
          words: [
            { fr: 'bien', en: 'well' , p: 1 },
            { fr: 'mal', en: 'badly' , p: 1 },
            { fr: 'vite', en: 'quickly / fast' , p: 1 },
            { fr: 'lentement', en: 'slowly' , p: 1 },
            { fr: 'doucement', en: 'softly / gently' , p: 1 },
            { fr: 'facilement', en: 'easily' , p: 1 },
            { fr: 'difficilement', en: 'with difficulty' , p: 1 },
            { fr: 'ensemble', en: 'together' , p: 1 },
            { fr: 'surtout', en: 'especially / above all' , p: 1 },
            { fr: 'seulement', en: 'only' , p: 1 },
            { fr: 'exactement', en: 'exactly' , p: 1 },
            { fr: 'vraiment', en: 'really / truly' , p: 1 },
            { fr: 'absolument', en: 'absolutely' , p: 1 },
            { fr: 'complètement', en: 'completely' , p: 1 },
            { fr: 'environ', en: 'approximately / about' , p: 1 },
            { fr: 'presque', en: 'almost' , p: 1 }
          ]
        },
        {
          name: 'Time & Place',
          words: [
            { fr: 'maintenant', en: 'now' , p: 1 },
            { fr: "aujourd'hui", en: 'today' , p: 1 },
            { fr: 'hier', en: 'yesterday' , p: 1 },
            { fr: 'demain', en: 'tomorrow' , p: 1 },
            { fr: 'tôt', en: 'early' , p: 1 },
            { fr: 'tard', en: 'late' , p: 1 },
            { fr: 'bientôt', en: 'soon' , p: 1 },
            { fr: 'déjà', en: 'already' , p: 1 },
            { fr: 'encore', en: 'still / again' , p: 1 },
            { fr: "d'abord", en: 'first / at first' , p: 1 },
            { fr: 'ensuite / puis', en: 'then / next' , p: 1 },
            { fr: 'enfin / finalement', en: 'finally' , p: 1 },
            { fr: 'ici', en: 'here' , p: 1 },
            { fr: 'là', en: 'there' , p: 1 },
            { fr: 'là-bas', en: 'over there' , p: 1 },
            { fr: 'partout', en: 'everywhere' , p: 1 },
            { fr: 'nulle part', en: 'nowhere' , p: 1 },
            { fr: 'quelque part', en: 'somewhere' , p: 1 },
            { fr: 'ailleurs', en: 'elsewhere' , p: 1 },
            { fr: 'dedans', en: 'inside' , p: 1 },
            { fr: 'dehors', en: 'outside' , p: 1 }
          ]
        },
        {
          name: 'Quantity & Degree',
          words: [
            { fr: 'très', en: 'very' , p: 1 },
            { fr: 'trop', en: 'too / too much' , p: 1 },
            { fr: 'assez', en: 'enough / quite' , p: 1 },
            { fr: 'beaucoup', en: 'a lot / much' , p: 1 },
            { fr: 'un peu', en: 'a little' , p: 1 },
            { fr: 'peu', en: 'few / little' , p: 1 },
            { fr: 'plus', en: 'more' , p: 1 },
            { fr: 'moins', en: 'less' , p: 1 },
            { fr: 'aussi', en: 'also / as' , p: 1 },
            { fr: 'autant', en: 'as much / as many' , p: 1 },
            { fr: 'si / tellement', en: 'so (much)' , p: 1 },
            { fr: 'combien', en: 'how much / how many' , p: 1 }
          ]
        }
      ,
        {
          name: 'Advanced Adverbs',
          words: [
            { fr: 'désormais', en: 'from now on', p: 2 },
            { fr: 'néanmoins', en: 'nevertheless', p: 2 },
            { fr: 'cependant', en: 'however', p: 1 },
            { fr: 'pourtant', en: 'yet / however', p: 1 },
            { fr: 'davantage', en: 'more / further', p: 2 },
            { fr: 'plutôt', en: 'rather', p: 1 },
            { fr: 'surtout', en: 'especially / above all', p: 1 },
            { fr: 'notamment', en: 'notably / in particular', p: 2 },
            { fr: 'éventuellement', en: 'possibly', p: 2 },
            { fr: 'volontiers', en: 'gladly / willingly', p: 2 },
            { fr: 'à peine', en: 'barely / hardly', p: 2 },
            { fr: 'environ', en: 'approximately', p: 1 },
            { fr: 'quasiment', en: 'almost / virtually', p: 2 }
          ]
        }
      ]
    }
  ,
    // ============================
    // 25. COMMON VERBS (as Vocab)
    // ============================
    {
      id: 'common-verbs',
      name: 'Essential Verbs',
      icon: '🔄',
      color: '#f59e0b',
      subcategories: [
        {
          name: 'Top 25 Must-Know',
          words: [
            { fr: 'avoir', en: 'to have', p: 1 },
            { fr: 'être', en: 'to be', p: 1 },
            { fr: 'faire', en: 'to do / to make', p: 1 },
            { fr: 'aller', en: 'to go', p: 1 },
            { fr: 'venir', en: 'to come', p: 1 },
            { fr: 'pouvoir', en: 'can / to be able to', p: 1 },
            { fr: 'vouloir', en: 'to want', p: 1 },
            { fr: 'devoir', en: 'to must / to have to', p: 1 },
            { fr: 'savoir', en: 'to know (a fact)', p: 1 },
            { fr: 'connaître', en: 'to know (person/place)', p: 1 },
            { fr: 'prendre', en: 'to take', p: 1 },
            { fr: 'mettre', en: 'to put / to put on', p: 1 },
            { fr: 'dire', en: 'to say / to tell', p: 1 },
            { fr: 'voir', en: 'to see', p: 1 },
            { fr: 'donner', en: 'to give', p: 1 },
            { fr: 'penser', en: 'to think', p: 1 },
            { fr: 'croire', en: 'to believe', p: 1 },
            { fr: 'comprendre', en: 'to understand', p: 1 },
            { fr: 'attendre', en: 'to wait (for)', p: 1 },
            { fr: 'chercher', en: 'to look for', p: 1 },
            { fr: 'trouver', en: 'to find', p: 1 },
            { fr: 'parler', en: 'to speak / to talk', p: 1 },
            { fr: 'manger', en: 'to eat', p: 1 },
            { fr: 'boire', en: 'to drink', p: 1 },
            { fr: 'dormir', en: 'to sleep', p: 1 }
          ]
        },
        {
          name: 'Next 25 Essential',
          words: [
            { fr: 'partir', en: 'to leave / to depart', p: 1 },
            { fr: 'sortir', en: 'to go out', p: 1 },
            { fr: 'entrer', en: 'to enter', p: 1 },
            { fr: 'rester', en: 'to stay / to remain', p: 1 },
            { fr: 'tomber', en: 'to fall', p: 1 },
            { fr: 'devenir', en: 'to become', p: 1 },
            { fr: 'sembler', en: 'to seem', p: 2 },
            { fr: 'suivre', en: 'to follow', p: 2 },
            { fr: 'vivre', en: 'to live', p: 1 },
            { fr: 'mourir', en: 'to die', p: 2 },
            { fr: 'naître', en: 'to be born', p: 2 },
            { fr: 'ouvrir', en: 'to open', p: 1 },
            { fr: 'fermer', en: 'to close', p: 1 },
            { fr: 'perdre', en: 'to lose', p: 1 },
            { fr: 'gagner', en: 'to win / to earn', p: 1 },
            { fr: 'apprendre', en: 'to learn', p: 1 },
            { fr: 'enseigner', en: 'to teach', p: 2 },
            { fr: 'essayer', en: 'to try', p: 1 },
            { fr: 'réussir', en: 'to succeed', p: 1 },
            { fr: 'échouer', en: 'to fail', p: 2 },
            { fr: 'oublier', en: 'to forget', p: 1 },
            { fr: 'se souvenir', en: 'to remember', p: 1 },
            { fr: 'choisir', en: 'to choose', p: 1 },
            { fr: 'décider', en: 'to decide', p: 1 },
            { fr: 'commencer', en: 'to begin / to start', p: 1 }
          ]
        }
      ]
    },

    // ============================
    // 26. EVERYDAY EXPRESSIONS
    // ============================
    {
      id: 'expressions',
      name: 'Everyday Expressions',
      icon: '💬',
      color: '#ec4899',
      subcategories: [
        {
          name: 'Essential Expressions',
          words: [
            { fr: 'ça marche', en: "that works / OK / let's do it", p: 1 },
            { fr: "n'importe quoi", en: 'anything / nonsense', p: 1 },
            { fr: 'quand même', en: 'still / anyway / all the same', p: 1 },
            { fr: 'du coup', en: 'so / therefore / as a result', p: 1 },
            { fr: 'en fait', en: 'actually / in fact', p: 1 },
            { fr: 'tout à fait', en: 'absolutely / exactly', p: 1 },
            { fr: 'pas du tout', en: 'not at all', p: 1 },
            { fr: 'bien sûr', en: 'of course', p: 1 },
            { fr: 'tant pis', en: 'too bad / never mind', p: 1 },
            { fr: 'tant mieux', en: 'so much the better / great', p: 1 },
            { fr: 'à bientôt', en: 'see you soon', p: 1 },
            { fr: 'bon courage', en: 'good luck / hang in there', p: 1 },
            { fr: "ça vaut le coup", en: "it's worth it", p: 1 },
            { fr: "j'en ai marre", en: "I'm fed up", p: 1 },
            { fr: "ça m'est égal", en: "I don't mind / I don't care", p: 1 },
            { fr: "c'est pas grave", en: "it doesn't matter / no worries", p: 1 },
            { fr: 'à mon avis', en: 'in my opinion', p: 1 }
          ]
        },
        {
          name: 'Conversational Filler',
          words: [
            { fr: 'en tout cas', en: 'in any case / anyway', p: 1 },
            { fr: 'de toute façon', en: 'anyway / in any case', p: 1 },
            { fr: 'au fait', en: 'by the way', p: 1 },
            { fr: 'par contre', en: 'on the other hand / however', p: 1 },
            { fr: "c'est-à-dire", en: 'that is to say / i.e.', p: 1 },
            { fr: 'il paraît que', en: 'apparently / it seems that', p: 2 },
            { fr: 'ça dépend', en: 'it depends', p: 1 },
            { fr: 'je m\'en fiche', en: "I don't care", p: 2 },
            { fr: 'laisse tomber', en: 'forget it / drop it', p: 1 },
            { fr: 'ça me dit', en: 'I fancy that / sounds good', p: 2 },
            { fr: 'ça ne me dit rien', en: "doesn't ring a bell / not interested", p: 2 },
            { fr: 'avoir hâte', en: 'to look forward to', p: 1 },
            { fr: 'être en train de', en: 'to be in the process of', p: 1 },
            { fr: "avoir l'habitude", en: 'to be used to', p: 1 },
            { fr: 'faire exprès', en: 'to do on purpose', p: 2 },
            { fr: 'se débrouiller', en: 'to manage / to get by', p: 1 },
            { fr: 'ça ne fait rien', en: "it doesn't matter", p: 2 },
            { fr: 'à tout à l\'heure', en: 'see you later (same day)', p: 1 }
          ]
        }
      ]
    }
  ]
};
