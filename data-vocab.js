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
            { fr: 'zéro', en: 'zero' },
            { fr: 'un', en: 'one' },
            { fr: 'deux', en: 'two' },
            { fr: 'trois', en: 'three' },
            { fr: 'quatre', en: 'four' },
            { fr: 'cinq', en: 'five' },
            { fr: 'six', en: 'six' },
            { fr: 'sept', en: 'seven' },
            { fr: 'huit', en: 'eight' },
            { fr: 'neuf', en: 'nine' },
            { fr: 'dix', en: 'ten' },
            { fr: 'onze', en: 'eleven' },
            { fr: 'douze', en: 'twelve' },
            { fr: 'treize', en: 'thirteen' },
            { fr: 'quatorze', en: 'fourteen' },
            { fr: 'quinze', en: 'fifteen' },
            { fr: 'seize', en: 'sixteen' },
            { fr: 'dix-sept', en: 'seventeen' },
            { fr: 'dix-huit', en: 'eighteen' },
            { fr: 'dix-neuf', en: 'nineteen' },
            { fr: 'vingt', en: 'twenty' }
          ]
        },
        {
          name: '21–100',
          words: [
            { fr: 'vingt et un', en: 'twenty-one' },
            { fr: 'vingt-deux', en: 'twenty-two' },
            { fr: 'vingt-trois', en: 'twenty-three' },
            { fr: 'vingt-cinq', en: 'twenty-five' },
            { fr: 'trente', en: 'thirty' },
            { fr: 'trente et un', en: 'thirty-one' },
            { fr: 'trente-cinq', en: 'thirty-five' },
            { fr: 'quarante', en: 'forty' },
            { fr: 'quarante-cinq', en: 'forty-five' },
            { fr: 'cinquante', en: 'fifty' },
            { fr: 'cinquante-cinq', en: 'fifty-five' },
            { fr: 'soixante', en: 'sixty' },
            { fr: 'soixante-cinq', en: 'sixty-five' },
            { fr: 'soixante-dix', en: 'seventy' },
            { fr: 'soixante et onze', en: 'seventy-one' },
            { fr: 'soixante-quinze', en: 'seventy-five' },
            { fr: 'quatre-vingts', en: 'eighty' },
            { fr: 'quatre-vingt-un', en: 'eighty-one' },
            { fr: 'quatre-vingt-cinq', en: 'eighty-five' },
            { fr: 'quatre-vingt-dix', en: 'ninety' },
            { fr: 'quatre-vingt-onze', en: 'ninety-one' },
            { fr: 'quatre-vingt-quinze', en: 'ninety-five' },
            { fr: 'cent', en: 'one hundred' }
          ]
        },
        {
          name: 'Large Numbers',
          words: [
            { fr: 'deux cents', en: 'two hundred' },
            { fr: 'trois cents', en: 'three hundred' },
            { fr: 'cinq cents', en: 'five hundred' },
            { fr: 'mille', en: 'one thousand' },
            { fr: 'deux mille', en: 'two thousand' },
            { fr: 'dix mille', en: 'ten thousand' },
            { fr: 'cent mille', en: 'one hundred thousand' },
            { fr: 'un million', en: 'one million' },
            { fr: 'un milliard', en: 'one billion' }
          ]
        },
        {
          name: 'Ordinals & Fractions',
          words: [
            { fr: 'premier / première', en: 'first' },
            { fr: 'deuxième', en: 'second' },
            { fr: 'troisième', en: 'third' },
            { fr: 'quatrième', en: 'fourth' },
            { fr: 'cinquième', en: 'fifth' },
            { fr: 'sixième', en: 'sixth' },
            { fr: 'septième', en: 'seventh' },
            { fr: 'huitième', en: 'eighth' },
            { fr: 'neuvième', en: 'ninth' },
            { fr: 'dixième', en: 'tenth' },
            { fr: 'dernier / dernière', en: 'last' },
            { fr: 'un demi', en: 'a half' },
            { fr: 'un tiers', en: 'a third' },
            { fr: 'un quart', en: 'a quarter' },
            { fr: 'trois quarts', en: 'three quarters' }
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
            { fr: 'lundi', en: 'Monday', gender: 'm' },
            { fr: 'mardi', en: 'Tuesday', gender: 'm' },
            { fr: 'mercredi', en: 'Wednesday', gender: 'm' },
            { fr: 'jeudi', en: 'Thursday', gender: 'm' },
            { fr: 'vendredi', en: 'Friday', gender: 'm' },
            { fr: 'samedi', en: 'Saturday', gender: 'm' },
            { fr: 'dimanche', en: 'Sunday', gender: 'm' }
          ]
        },
        {
          name: 'Months',
          words: [
            { fr: 'janvier', en: 'January', gender: 'm' },
            { fr: 'février', en: 'February', gender: 'm' },
            { fr: 'mars', en: 'March', gender: 'm' },
            { fr: 'avril', en: 'April', gender: 'm' },
            { fr: 'mai', en: 'May', gender: 'm' },
            { fr: 'juin', en: 'June', gender: 'm' },
            { fr: 'juillet', en: 'July', gender: 'm' },
            { fr: 'août', en: 'August', gender: 'm' },
            { fr: 'septembre', en: 'September', gender: 'm' },
            { fr: 'octobre', en: 'October', gender: 'm' },
            { fr: 'novembre', en: 'November', gender: 'm' },
            { fr: 'décembre', en: 'December', gender: 'm' }
          ]
        },
        {
          name: 'Seasons',
          words: [
            { fr: 'le printemps', en: 'spring', gender: 'm' },
            { fr: "l'été", en: 'summer', gender: 'm' },
            { fr: "l'automne", en: 'autumn / fall', gender: 'm' },
            { fr: "l'hiver", en: 'winter', gender: 'm' }
          ]
        },
        {
          name: 'Time Expressions',
          words: [
            { fr: 'maintenant', en: 'now' },
            { fr: "aujourd'hui", en: 'today' },
            { fr: 'hier', en: 'yesterday' },
            { fr: 'demain', en: 'tomorrow' },
            { fr: 'avant-hier', en: 'the day before yesterday' },
            { fr: 'après-demain', en: 'the day after tomorrow' },
            { fr: 'ce matin', en: 'this morning' },
            { fr: 'cet après-midi', en: 'this afternoon' },
            { fr: 'ce soir', en: 'this evening / tonight' },
            { fr: 'cette nuit', en: 'tonight / last night' },
            { fr: 'la semaine prochaine', en: 'next week' },
            { fr: 'la semaine dernière', en: 'last week' },
            { fr: 'le mois prochain', en: 'next month' },
            { fr: 'le mois dernier', en: 'last month' },
            { fr: "l'année prochaine", en: 'next year' },
            { fr: "l'année dernière", en: 'last year' },
            { fr: 'tôt', en: 'early' },
            { fr: 'tard', en: 'late' },
            { fr: 'bientôt', en: 'soon' },
            { fr: 'tout de suite', en: 'right away' },
            { fr: 'parfois', en: 'sometimes' },
            { fr: 'toujours', en: 'always' },
            { fr: 'jamais', en: 'never' },
            { fr: 'déjà', en: 'already' },
            { fr: 'encore', en: 'still / again' },
            { fr: 'pendant', en: 'during / for' },
            { fr: 'depuis', en: 'since / for' },
            { fr: 'il y a', en: 'ago' }
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
            { fr: 'rouge', en: 'red' },
            { fr: 'bleu / bleue', en: 'blue' },
            { fr: 'vert / verte', en: 'green' },
            { fr: 'jaune', en: 'yellow' },
            { fr: 'orange', en: 'orange' },
            { fr: 'violet / violette', en: 'purple / violet' },
            { fr: 'rose', en: 'pink' },
            { fr: 'noir / noire', en: 'black' },
            { fr: 'blanc / blanche', en: 'white' },
            { fr: 'gris / grise', en: 'grey' },
            { fr: 'marron', en: 'brown' },
            { fr: 'brun / brune', en: 'brown (hair/skin)' },
            { fr: 'beige', en: 'beige' },
            { fr: 'doré / dorée', en: 'golden' },
            { fr: 'argenté / argentée', en: 'silver' },
            { fr: 'turquoise', en: 'turquoise' },
            { fr: 'bordeaux', en: 'burgundy' },
            { fr: 'clair', en: 'light (color)' },
            { fr: 'foncé', en: 'dark (color)' }
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
            { fr: 'la famille', en: 'family', gender: 'f' },
            { fr: 'le père', en: 'father', gender: 'm' },
            { fr: 'la mère', en: 'mother', gender: 'f' },
            { fr: 'le fils', en: 'son', gender: 'm' },
            { fr: 'la fille', en: 'daughter', gender: 'f' },
            { fr: 'le frère', en: 'brother', gender: 'm' },
            { fr: 'la sœur', en: 'sister', gender: 'f' },
            { fr: 'le mari', en: 'husband', gender: 'm' },
            { fr: 'la femme', en: 'wife / woman', gender: 'f' },
            { fr: "l'enfant", en: 'child', gender: 'm' },
            { fr: 'le bébé', en: 'baby', gender: 'm' },
            { fr: 'les parents', en: 'parents' }
          ]
        },
        {
          name: 'Extended Family',
          words: [
            { fr: 'le grand-père', en: 'grandfather', gender: 'm' },
            { fr: 'la grand-mère', en: 'grandmother', gender: 'f' },
            { fr: 'les grands-parents', en: 'grandparents' },
            { fr: 'le petit-fils', en: 'grandson', gender: 'm' },
            { fr: 'la petite-fille', en: 'granddaughter', gender: 'f' },
            { fr: "l'oncle", en: 'uncle', gender: 'm' },
            { fr: 'la tante', en: 'aunt', gender: 'f' },
            { fr: 'le cousin', en: 'cousin (male)', gender: 'm' },
            { fr: 'la cousine', en: 'cousin (female)', gender: 'f' },
            { fr: 'le neveu', en: 'nephew', gender: 'm' },
            { fr: 'la nièce', en: 'niece', gender: 'f' },
            { fr: 'le beau-père', en: 'father-in-law / stepfather', gender: 'm' },
            { fr: 'la belle-mère', en: 'mother-in-law / stepmother', gender: 'f' },
            { fr: 'le beau-frère', en: 'brother-in-law', gender: 'm' },
            { fr: 'la belle-sœur', en: 'sister-in-law', gender: 'f' },
            { fr: 'le gendre', en: 'son-in-law', gender: 'm' },
            { fr: 'la belle-fille', en: 'daughter-in-law', gender: 'f' },
            { fr: 'le demi-frère', en: 'half-brother / stepbrother', gender: 'm' },
            { fr: 'la demi-sœur', en: 'half-sister / stepsister', gender: 'f' },
            { fr: 'le parrain', en: 'godfather', gender: 'm' },
            { fr: 'la marraine', en: 'godmother', gender: 'f' }
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
            { fr: 'la tête', en: 'head', gender: 'f' },
            { fr: 'le visage', en: 'face', gender: 'm' },
            { fr: "l'œil (les yeux)", en: 'eye (eyes)', gender: 'm' },
            { fr: 'le nez', en: 'nose', gender: 'm' },
            { fr: 'la bouche', en: 'mouth', gender: 'f' },
            { fr: "l'oreille", en: 'ear', gender: 'f' },
            { fr: 'les cheveux', en: 'hair' },
            { fr: 'le front', en: 'forehead', gender: 'm' },
            { fr: 'la joue', en: 'cheek', gender: 'f' },
            { fr: 'le menton', en: 'chin', gender: 'm' },
            { fr: 'la lèvre', en: 'lip', gender: 'f' },
            { fr: 'la dent', en: 'tooth', gender: 'f' },
            { fr: 'la langue', en: 'tongue', gender: 'f' },
            { fr: 'le sourcil', en: 'eyebrow', gender: 'm' },
            { fr: 'le cou', en: 'neck', gender: 'm' }
          ]
        },
        {
          name: 'Body',
          words: [
            { fr: 'le corps', en: 'body', gender: 'm' },
            { fr: 'le bras', en: 'arm', gender: 'm' },
            { fr: 'la main', en: 'hand', gender: 'f' },
            { fr: 'le doigt', en: 'finger', gender: 'm' },
            { fr: 'la jambe', en: 'leg', gender: 'f' },
            { fr: 'le pied', en: 'foot', gender: 'm' },
            { fr: "l'orteil", en: 'toe', gender: 'm' },
            { fr: 'le genou', en: 'knee', gender: 'm' },
            { fr: "l'épaule", en: 'shoulder', gender: 'f' },
            { fr: 'le dos', en: 'back', gender: 'm' },
            { fr: 'le ventre', en: 'stomach / belly', gender: 'm' },
            { fr: 'la poitrine', en: 'chest', gender: 'f' },
            { fr: 'le cœur', en: 'heart', gender: 'm' },
            { fr: 'le coude', en: 'elbow', gender: 'm' },
            { fr: 'le poignet', en: 'wrist', gender: 'm' },
            { fr: 'la cheville', en: 'ankle', gender: 'f' },
            { fr: 'la peau', en: 'skin', gender: 'f' },
            { fr: "l'os", en: 'bone', gender: 'm' },
            { fr: 'le sang', en: 'blood', gender: 'm' },
            { fr: 'le muscle', en: 'muscle', gender: 'm' }
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
            { fr: 'la pomme', en: 'apple', gender: 'f' },
            { fr: 'la banane', en: 'banana', gender: 'f' },
            { fr: "l'orange", en: 'orange', gender: 'f' },
            { fr: 'la fraise', en: 'strawberry', gender: 'f' },
            { fr: 'le raisin', en: 'grape', gender: 'm' },
            { fr: 'la cerise', en: 'cherry', gender: 'f' },
            { fr: 'la pêche', en: 'peach', gender: 'f' },
            { fr: 'la poire', en: 'pear', gender: 'f' },
            { fr: "l'ananas", en: 'pineapple', gender: 'm' },
            { fr: 'le citron', en: 'lemon', gender: 'm' },
            { fr: 'la pastèque', en: 'watermelon', gender: 'f' },
            { fr: 'le melon', en: 'melon', gender: 'm' },
            { fr: 'la framboise', en: 'raspberry', gender: 'f' },
            { fr: 'la mangue', en: 'mango', gender: 'f' },
            { fr: 'le pamplemousse', en: 'grapefruit', gender: 'm' }
          ]
        },
        {
          name: 'Vegetables',
          words: [
            { fr: 'la carotte', en: 'carrot', gender: 'f' },
            { fr: 'la tomate', en: 'tomato', gender: 'f' },
            { fr: 'la pomme de terre', en: 'potato', gender: 'f' },
            { fr: "l'oignon", en: 'onion', gender: 'm' },
            { fr: "l'ail", en: 'garlic', gender: 'm' },
            { fr: 'la salade / la laitue', en: 'lettuce / salad', gender: 'f' },
            { fr: 'le haricot', en: 'bean', gender: 'm' },
            { fr: 'le petit pois', en: 'pea', gender: 'm' },
            { fr: 'le champignon', en: 'mushroom', gender: 'm' },
            { fr: 'le chou', en: 'cabbage', gender: 'm' },
            { fr: 'le poivron', en: 'bell pepper', gender: 'm' },
            { fr: 'le concombre', en: 'cucumber', gender: 'm' },
            { fr: "l'épinard", en: 'spinach', gender: 'm' },
            { fr: 'le brocoli', en: 'broccoli', gender: 'm' },
            { fr: "l'aubergine", en: 'eggplant / aubergine', gender: 'f' },
            { fr: 'la courgette', en: 'zucchini / courgette', gender: 'f' }
          ]
        },
        {
          name: 'Meat, Fish & Protein',
          words: [
            { fr: 'la viande', en: 'meat', gender: 'f' },
            { fr: 'le poulet', en: 'chicken', gender: 'm' },
            { fr: 'le bœuf', en: 'beef', gender: 'm' },
            { fr: 'le porc', en: 'pork', gender: 'm' },
            { fr: "l'agneau", en: 'lamb', gender: 'm' },
            { fr: 'le poisson', en: 'fish', gender: 'm' },
            { fr: 'le saumon', en: 'salmon', gender: 'm' },
            { fr: 'le thon', en: 'tuna', gender: 'm' },
            { fr: 'la crevette', en: 'shrimp / prawn', gender: 'f' },
            { fr: 'le jambon', en: 'ham', gender: 'm' },
            { fr: 'la saucisse', en: 'sausage', gender: 'f' },
            { fr: "l'œuf", en: 'egg', gender: 'm' }
          ]
        },
        {
          name: 'Dairy & Bakery',
          words: [
            { fr: 'le lait', en: 'milk', gender: 'm' },
            { fr: 'le fromage', en: 'cheese', gender: 'm' },
            { fr: 'le beurre', en: 'butter', gender: 'm' },
            { fr: 'le yaourt', en: 'yogurt', gender: 'm' },
            { fr: 'la crème', en: 'cream', gender: 'f' },
            { fr: 'le pain', en: 'bread', gender: 'm' },
            { fr: 'la baguette', en: 'baguette', gender: 'f' },
            { fr: 'le croissant', en: 'croissant', gender: 'm' },
            { fr: 'le gâteau', en: 'cake', gender: 'm' },
            { fr: 'la tarte', en: 'pie / tart', gender: 'f' },
            { fr: 'le biscuit', en: 'biscuit / cookie', gender: 'm' },
            { fr: 'la glace', en: 'ice cream', gender: 'f' },
            { fr: 'la confiture', en: 'jam', gender: 'f' },
            { fr: 'le miel', en: 'honey', gender: 'm' }
          ]
        },
        {
          name: 'Drinks',
          words: [
            { fr: "l'eau", en: 'water', gender: 'f' },
            { fr: 'le café', en: 'coffee', gender: 'm' },
            { fr: 'le thé', en: 'tea', gender: 'm' },
            { fr: 'le jus', en: 'juice', gender: 'm' },
            { fr: "le jus d'orange", en: 'orange juice', gender: 'm' },
            { fr: 'le vin', en: 'wine', gender: 'm' },
            { fr: 'la bière', en: 'beer', gender: 'f' },
            { fr: 'le lait', en: 'milk', gender: 'm' },
            { fr: 'le chocolat chaud', en: 'hot chocolate', gender: 'm' },
            { fr: 'la limonade', en: 'lemonade', gender: 'f' },
            { fr: "l'eau gazeuse", en: 'sparkling water', gender: 'f' },
            { fr: 'le soda', en: 'soda', gender: 'm' }
          ]
        },
        {
          name: 'Meals & Cooking',
          words: [
            { fr: 'le petit déjeuner', en: 'breakfast', gender: 'm' },
            { fr: 'le déjeuner', en: 'lunch', gender: 'm' },
            { fr: 'le dîner', en: 'dinner', gender: 'm' },
            { fr: 'le goûter', en: 'snack (afternoon)', gender: 'm' },
            { fr: 'le repas', en: 'meal', gender: 'm' },
            { fr: 'la recette', en: 'recipe', gender: 'f' },
            { fr: 'la cuisine', en: 'kitchen / cooking', gender: 'f' },
            { fr: 'cuire', en: 'to cook (bake)' },
            { fr: 'cuisiner', en: 'to cook' },
            { fr: 'couper', en: 'to cut' },
            { fr: 'mélanger', en: 'to mix' },
            { fr: 'bouillir', en: 'to boil' },
            { fr: 'frire', en: 'to fry' },
            { fr: 'rôtir', en: 'to roast' },
            { fr: 'le sel', en: 'salt', gender: 'm' },
            { fr: 'le poivre', en: 'pepper', gender: 'm' },
            { fr: 'le sucre', en: 'sugar', gender: 'm' },
            { fr: "l'huile", en: 'oil', gender: 'f' },
            { fr: 'le vinaigre', en: 'vinegar', gender: 'm' },
            { fr: 'la farine', en: 'flour', gender: 'f' },
            { fr: 'le riz', en: 'rice', gender: 'm' },
            { fr: 'les pâtes', en: 'pasta', gender: 'f' }
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
            { fr: 'le pantalon', en: 'trousers / pants', gender: 'm' },
            { fr: 'le jean', en: 'jeans', gender: 'm' },
            { fr: 'la chemise', en: 'shirt (formal)', gender: 'f' },
            { fr: 'le tee-shirt', en: 'T-shirt', gender: 'm' },
            { fr: 'le pull', en: 'sweater / jumper', gender: 'm' },
            { fr: 'la veste', en: 'jacket', gender: 'f' },
            { fr: 'le manteau', en: 'coat', gender: 'm' },
            { fr: 'la robe', en: 'dress', gender: 'f' },
            { fr: 'la jupe', en: 'skirt', gender: 'f' },
            { fr: 'le short', en: 'shorts', gender: 'm' },
            { fr: 'le costume', en: 'suit', gender: 'm' },
            { fr: 'le pyjama', en: 'pyjamas', gender: 'm' },
            { fr: 'le maillot de bain', en: 'swimsuit', gender: 'm' },
            { fr: 'le sous-vêtement', en: 'underwear', gender: 'm' },
            { fr: 'la chaussette', en: 'sock', gender: 'f' },
            { fr: 'la chaussure', en: 'shoe', gender: 'f' },
            { fr: 'la botte', en: 'boot', gender: 'f' },
            { fr: 'la sandale', en: 'sandal', gender: 'f' },
            { fr: 'le chapeau', en: 'hat', gender: 'm' },
            { fr: 'la casquette', en: 'cap', gender: 'f' },
            { fr: "l'écharpe", en: 'scarf', gender: 'f' },
            { fr: 'les gants', en: 'gloves', gender: 'm' },
            { fr: 'la ceinture', en: 'belt', gender: 'f' },
            { fr: 'la cravate', en: 'tie', gender: 'f' },
            { fr: 'le sac à main', en: 'handbag', gender: 'm' },
            { fr: 'les lunettes', en: 'glasses', gender: 'f' },
            { fr: 'les lunettes de soleil', en: 'sunglasses', gender: 'f' },
            { fr: 'le parapluie', en: 'umbrella', gender: 'm' }
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
            { fr: 'la maison', en: 'house', gender: 'f' },
            { fr: "l'appartement", en: 'apartment / flat', gender: 'm' },
            { fr: 'la chambre', en: 'bedroom', gender: 'f' },
            { fr: 'la cuisine', en: 'kitchen', gender: 'f' },
            { fr: 'le salon', en: 'living room', gender: 'm' },
            { fr: 'la salle de bains', en: 'bathroom', gender: 'f' },
            { fr: 'les toilettes', en: 'toilet / restroom', gender: 'f' },
            { fr: 'la salle à manger', en: 'dining room', gender: 'f' },
            { fr: 'le bureau', en: 'office / study', gender: 'm' },
            { fr: "l'entrée", en: 'entrance / hallway', gender: 'f' },
            { fr: 'le couloir', en: 'corridor / hallway', gender: 'm' },
            { fr: 'le garage', en: 'garage', gender: 'm' },
            { fr: 'le jardin', en: 'garden', gender: 'm' },
            { fr: 'le balcon', en: 'balcony', gender: 'm' },
            { fr: 'la cave', en: 'cellar / basement', gender: 'f' },
            { fr: 'le grenier', en: 'attic', gender: 'm' }
          ]
        },
        {
          name: 'Furniture & Items',
          words: [
            { fr: 'le lit', en: 'bed', gender: 'm' },
            { fr: 'la table', en: 'table', gender: 'f' },
            { fr: 'la chaise', en: 'chair', gender: 'f' },
            { fr: 'le fauteuil', en: 'armchair', gender: 'm' },
            { fr: 'le canapé', en: 'sofa / couch', gender: 'm' },
            { fr: "l'armoire", en: 'wardrobe / closet', gender: 'f' },
            { fr: "l'étagère", en: 'shelf / bookcase', gender: 'f' },
            { fr: 'le bureau', en: 'desk', gender: 'm' },
            { fr: 'le miroir', en: 'mirror', gender: 'm' },
            { fr: 'la lampe', en: 'lamp', gender: 'f' },
            { fr: 'le tapis', en: 'rug / carpet', gender: 'm' },
            { fr: 'le rideau', en: 'curtain', gender: 'm' },
            { fr: 'la fenêtre', en: 'window', gender: 'f' },
            { fr: 'la porte', en: 'door', gender: 'f' },
            { fr: "l'escalier", en: 'stairs', gender: 'm' },
            { fr: 'le mur', en: 'wall', gender: 'm' },
            { fr: 'le plafond', en: 'ceiling', gender: 'm' },
            { fr: 'le sol', en: 'floor / ground', gender: 'm' },
            { fr: 'le réfrigérateur', en: 'refrigerator', gender: 'm' },
            { fr: 'le four', en: 'oven', gender: 'm' },
            { fr: 'le lave-linge', en: 'washing machine', gender: 'm' },
            { fr: 'le lave-vaisselle', en: 'dishwasher', gender: 'm' },
            { fr: "l'aspirateur", en: 'vacuum cleaner', gender: 'm' },
            { fr: 'la télévision', en: 'television', gender: 'f' },
            { fr: 'la clé', en: 'key', gender: 'f' },
            { fr: 'la serviette', en: 'towel', gender: 'f' },
            { fr: "l'oreiller", en: 'pillow', gender: 'm' },
            { fr: 'la couverture', en: 'blanket', gender: 'f' },
            { fr: 'le drap', en: 'sheet', gender: 'm' }
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
            { fr: 'les mathématiques / les maths', en: 'mathematics / maths', gender: 'f' },
            { fr: 'le français', en: 'French', gender: 'm' },
            { fr: "l'anglais", en: 'English', gender: 'm' },
            { fr: "l'histoire", en: 'history', gender: 'f' },
            { fr: 'la géographie', en: 'geography', gender: 'f' },
            { fr: 'les sciences', en: 'science', gender: 'f' },
            { fr: 'la physique', en: 'physics', gender: 'f' },
            { fr: 'la chimie', en: 'chemistry', gender: 'f' },
            { fr: 'la biologie', en: 'biology', gender: 'f' },
            { fr: "l'informatique", en: 'computer science', gender: 'f' },
            { fr: "l'éducation physique", en: 'physical education', gender: 'f' },
            { fr: 'la musique', en: 'music', gender: 'f' },
            { fr: 'le dessin', en: 'art / drawing', gender: 'm' },
            { fr: 'la philosophie', en: 'philosophy', gender: 'f' }
          ]
        },
        {
          name: 'School Items & Vocabulary',
          words: [
            { fr: "l'école", en: 'school', gender: 'f' },
            { fr: 'le collège', en: 'middle school', gender: 'm' },
            { fr: 'le lycée', en: 'high school', gender: 'm' },
            { fr: "l'université", en: 'university', gender: 'f' },
            { fr: 'la classe', en: 'class / classroom', gender: 'f' },
            { fr: 'le cours', en: 'lesson / class', gender: 'm' },
            { fr: "l'élève", en: 'student (school)' },
            { fr: "l'étudiant / l'étudiante", en: 'student (university)' },
            { fr: 'le professeur', en: 'teacher / professor', gender: 'm' },
            { fr: 'le livre', en: 'book', gender: 'm' },
            { fr: 'le cahier', en: 'notebook', gender: 'm' },
            { fr: 'le stylo', en: 'pen', gender: 'm' },
            { fr: 'le crayon', en: 'pencil', gender: 'm' },
            { fr: 'la gomme', en: 'eraser', gender: 'f' },
            { fr: 'la règle', en: 'ruler', gender: 'f' },
            { fr: 'le sac à dos', en: 'backpack', gender: 'm' },
            { fr: 'le tableau', en: 'board / blackboard', gender: 'm' },
            { fr: "l'examen", en: 'exam', gender: 'm' },
            { fr: 'le devoir', en: 'homework / assignment', gender: 'm' },
            { fr: 'la note', en: 'grade / mark', gender: 'f' },
            { fr: 'le diplôme', en: 'diploma / degree', gender: 'm' },
            { fr: 'la bibliothèque', en: 'library', gender: 'f' },
            { fr: 'la cantine', en: 'cafeteria', gender: 'f' },
            { fr: 'la récréation', en: 'break / recess', gender: 'f' },
            { fr: 'apprendre', en: 'to learn' },
            { fr: 'étudier', en: 'to study' },
            { fr: 'enseigner', en: 'to teach' },
            { fr: 'lire', en: 'to read' },
            { fr: 'écrire', en: 'to write' }
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
            { fr: 'le médecin', en: 'doctor', gender: 'm' },
            { fr: "l'infirmier / l'infirmière", en: 'nurse' },
            { fr: "l'avocat / l'avocate", en: 'lawyer' },
            { fr: "l'ingénieur / l'ingénieure", en: 'engineer' },
            { fr: "l'architecte", en: 'architect' },
            { fr: 'le/la dentiste', en: 'dentist' },
            { fr: 'le pharmacien / la pharmacienne', en: 'pharmacist' },
            { fr: 'le professeur', en: 'teacher / professor', gender: 'm' },
            { fr: 'le/la journaliste', en: 'journalist' },
            { fr: 'le policier / la policière', en: 'police officer' },
            { fr: 'le pompier', en: 'firefighter', gender: 'm' },
            { fr: 'le cuisinier / la cuisinière', en: 'cook / chef' },
            { fr: 'le boulanger / la boulangère', en: 'baker' },
            { fr: 'le boucher / la bouchère', en: 'butcher' },
            { fr: 'le serveur / la serveuse', en: 'waiter / waitress' },
            { fr: 'le vendeur / la vendeuse', en: 'salesperson' },
            { fr: 'le/la comptable', en: 'accountant' },
            { fr: "l'agriculteur / l'agricultrice", en: 'farmer' },
            { fr: "le mécanicien / la mécanicienne", en: 'mechanic' },
            { fr: 'le plombier', en: 'plumber', gender: 'm' },
            { fr: "l'électricien / l'électricienne", en: 'electrician' },
            { fr: 'le chauffeur', en: 'driver', gender: 'm' },
            { fr: 'le/la pilote', en: 'pilot' },
            { fr: "le musicien / la musicienne", en: 'musician' },
            { fr: "l'acteur / l'actrice", en: 'actor / actress' },
            { fr: "l'écrivain / l'écrivaine", en: 'writer' },
            { fr: 'le/la scientifique', en: 'scientist' },
            { fr: 'le programmeur / la programmeuse', en: 'programmer' }
          ]
        },
        {
          name: 'Workplace Vocabulary',
          words: [
            { fr: 'le travail', en: 'work / job', gender: 'm' },
            { fr: 'le bureau', en: 'office', gender: 'm' },
            { fr: "l'entreprise", en: 'company / business', gender: 'f' },
            { fr: 'le patron / la patronne', en: 'boss' },
            { fr: 'le/la collègue', en: 'colleague' },
            { fr: "l'employé / l'employée", en: 'employee' },
            { fr: 'le salaire', en: 'salary', gender: 'm' },
            { fr: 'la réunion', en: 'meeting', gender: 'f' },
            { fr: "l'entretien", en: 'interview', gender: 'm' },
            { fr: 'le CV', en: 'résumé / CV', gender: 'm' },
            { fr: 'la carrière', en: 'career', gender: 'f' },
            { fr: 'le chômage', en: 'unemployment', gender: 'm' },
            { fr: 'la retraite', en: 'retirement', gender: 'f' },
            { fr: 'les vacances', en: 'holidays / vacation', gender: 'f' },
            { fr: 'travailler', en: 'to work' },
            { fr: 'gagner', en: 'to earn / to win' }
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
            { fr: 'la voiture', en: 'car', gender: 'f' },
            { fr: 'le bus / l\'autobus', en: 'bus', gender: 'm' },
            { fr: 'le train', en: 'train', gender: 'm' },
            { fr: 'le métro', en: 'metro / subway', gender: 'm' },
            { fr: 'le tramway', en: 'tram', gender: 'm' },
            { fr: "l'avion", en: 'airplane', gender: 'm' },
            { fr: 'le bateau', en: 'boat / ship', gender: 'm' },
            { fr: 'le vélo', en: 'bicycle', gender: 'm' },
            { fr: 'la moto', en: 'motorcycle', gender: 'f' },
            { fr: 'le taxi', en: 'taxi', gender: 'm' },
            { fr: 'le camion', en: 'truck', gender: 'm' },
            { fr: "l'hélicoptère", en: 'helicopter', gender: 'm' }
          ]
        },
        {
          name: 'Travel Vocabulary',
          words: [
            { fr: 'la gare', en: 'train station', gender: 'f' },
            { fr: "l'aéroport", en: 'airport', gender: 'm' },
            { fr: "l'arrêt de bus", en: 'bus stop', gender: 'm' },
            { fr: 'la station de métro', en: 'metro station', gender: 'f' },
            { fr: 'le billet', en: 'ticket', gender: 'm' },
            { fr: "l'aller simple", en: 'one-way ticket', gender: 'm' },
            { fr: "l'aller-retour", en: 'round trip ticket', gender: 'm' },
            { fr: 'le quai', en: 'platform', gender: 'm' },
            { fr: 'le passeport', en: 'passport', gender: 'm' },
            { fr: 'la valise', en: 'suitcase', gender: 'f' },
            { fr: 'le bagage', en: 'luggage', gender: 'm' },
            { fr: 'le voyage', en: 'trip / journey', gender: 'm' },
            { fr: 'le permis de conduire', en: 'driving license', gender: 'm' },
            { fr: 'la route', en: 'road', gender: 'f' },
            { fr: "l'autoroute", en: 'highway / motorway', gender: 'f' },
            { fr: 'le parking', en: 'parking lot', gender: 'm' },
            { fr: 'conduire', en: 'to drive' },
            { fr: 'voyager', en: 'to travel' },
            { fr: 'décoller', en: 'to take off (plane)' },
            { fr: 'atterrir', en: 'to land (plane)' }
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
            { fr: 'le temps', en: 'weather', gender: 'm' },
            { fr: 'Il fait beau', en: 'The weather is nice' },
            { fr: 'Il fait mauvais', en: 'The weather is bad' },
            { fr: 'Il fait chaud', en: 'It is hot' },
            { fr: 'Il fait froid', en: 'It is cold' },
            { fr: 'Il fait frais', en: 'It is cool' },
            { fr: 'Il fait doux', en: 'It is mild' },
            { fr: 'Il pleut', en: 'It is raining' },
            { fr: 'Il neige', en: 'It is snowing' },
            { fr: 'Il y a du vent', en: 'It is windy' },
            { fr: 'Il y a du soleil', en: 'It is sunny' },
            { fr: 'Il y a des nuages', en: 'It is cloudy' },
            { fr: 'Il y a du brouillard', en: 'It is foggy' },
            { fr: "Il y a de l'orage", en: 'There is a storm' },
            { fr: 'le soleil', en: 'sun', gender: 'm' },
            { fr: 'la pluie', en: 'rain', gender: 'f' },
            { fr: 'la neige', en: 'snow', gender: 'f' },
            { fr: 'le vent', en: 'wind', gender: 'm' },
            { fr: 'le nuage', en: 'cloud', gender: 'm' },
            { fr: "l'orage", en: 'storm / thunderstorm', gender: 'm' },
            { fr: 'le brouillard', en: 'fog', gender: 'm' },
            { fr: "l'arc-en-ciel", en: 'rainbow', gender: 'm' },
            { fr: 'la tempête', en: 'storm', gender: 'f' },
            { fr: 'la température', en: 'temperature', gender: 'f' },
            { fr: 'le degré', en: 'degree', gender: 'm' },
            { fr: 'le ciel', en: 'sky', gender: 'm' },
            { fr: 'la glace', en: 'ice', gender: 'f' },
            { fr: 'le tonnerre', en: 'thunder', gender: 'm' },
            { fr: "l'éclair", en: 'lightning', gender: 'm' },
            { fr: 'la grêle', en: 'hail', gender: 'f' }
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
            { fr: 'le chien', en: 'dog', gender: 'm' },
            { fr: 'le chat', en: 'cat', gender: 'm' },
            { fr: 'le poisson', en: 'fish', gender: 'm' },
            { fr: "l'oiseau", en: 'bird', gender: 'm' },
            { fr: 'le hamster', en: 'hamster', gender: 'm' },
            { fr: 'le lapin', en: 'rabbit', gender: 'm' },
            { fr: 'la tortue', en: 'turtle / tortoise', gender: 'f' },
            { fr: 'le perroquet', en: 'parrot', gender: 'm' },
            { fr: 'le cochon d\'Inde', en: 'guinea pig', gender: 'm' }
          ]
        },
        {
          name: 'Farm Animals',
          words: [
            { fr: 'la vache', en: 'cow', gender: 'f' },
            { fr: 'le cheval', en: 'horse', gender: 'm' },
            { fr: 'le cochon', en: 'pig', gender: 'm' },
            { fr: 'le mouton', en: 'sheep', gender: 'm' },
            { fr: 'la chèvre', en: 'goat', gender: 'f' },
            { fr: 'la poule', en: 'hen / chicken', gender: 'f' },
            { fr: 'le coq', en: 'rooster', gender: 'm' },
            { fr: 'le canard', en: 'duck', gender: 'm' },
            { fr: "l'âne", en: 'donkey', gender: 'm' },
            { fr: 'le taureau', en: 'bull', gender: 'm' }
          ]
        },
        {
          name: 'Wild Animals',
          words: [
            { fr: 'le lion', en: 'lion', gender: 'm' },
            { fr: 'le tigre', en: 'tiger', gender: 'm' },
            { fr: "l'éléphant", en: 'elephant', gender: 'm' },
            { fr: 'le singe', en: 'monkey', gender: 'm' },
            { fr: "l'ours", en: 'bear', gender: 'm' },
            { fr: 'le loup', en: 'wolf', gender: 'm' },
            { fr: 'le renard', en: 'fox', gender: 'm' },
            { fr: 'le cerf', en: 'deer', gender: 'm' },
            { fr: 'le serpent', en: 'snake', gender: 'm' },
            { fr: 'le crocodile', en: 'crocodile', gender: 'm' },
            { fr: 'la girafe', en: 'giraffe', gender: 'f' },
            { fr: 'le zèbre', en: 'zebra', gender: 'm' },
            { fr: "l'hippopotame", en: 'hippopotamus', gender: 'm' },
            { fr: 'le requin', en: 'shark', gender: 'm' },
            { fr: 'la baleine', en: 'whale', gender: 'f' },
            { fr: 'le dauphin', en: 'dolphin', gender: 'm' },
            { fr: 'le papillon', en: 'butterfly', gender: 'm' },
            { fr: "l'abeille", en: 'bee', gender: 'f' },
            { fr: 'la fourmi', en: 'ant', gender: 'f' },
            { fr: "l'araignée", en: 'spider', gender: 'f' },
            { fr: 'la grenouille', en: 'frog', gender: 'f' },
            { fr: "l'aigle", en: 'eagle', gender: 'm' }
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
            { fr: 'la montagne', en: 'mountain', gender: 'f' },
            { fr: 'la mer', en: 'sea', gender: 'f' },
            { fr: "l'océan", en: 'ocean', gender: 'm' },
            { fr: 'la rivière', en: 'river', gender: 'f' },
            { fr: 'le fleuve', en: 'large river', gender: 'm' },
            { fr: 'le lac', en: 'lake', gender: 'm' },
            { fr: 'la forêt', en: 'forest', gender: 'f' },
            { fr: 'le désert', en: 'desert', gender: 'm' },
            { fr: 'la plage', en: 'beach', gender: 'f' },
            { fr: "l'île", en: 'island', gender: 'f' },
            { fr: 'la colline', en: 'hill', gender: 'f' },
            { fr: 'la vallée', en: 'valley', gender: 'f' },
            { fr: 'le champ', en: 'field', gender: 'm' },
            { fr: 'la campagne', en: 'countryside', gender: 'f' },
            { fr: 'la cascade', en: 'waterfall', gender: 'f' },
            { fr: 'la falaise', en: 'cliff', gender: 'f' },
            { fr: 'le volcan', en: 'volcano', gender: 'm' }
          ]
        },
        {
          name: 'Plants & Nature',
          words: [
            { fr: "l'arbre", en: 'tree', gender: 'm' },
            { fr: 'la fleur', en: 'flower', gender: 'f' },
            { fr: 'la rose', en: 'rose', gender: 'f' },
            { fr: "l'herbe", en: 'grass', gender: 'f' },
            { fr: 'la feuille', en: 'leaf', gender: 'f' },
            { fr: 'la branche', en: 'branch', gender: 'f' },
            { fr: 'la racine', en: 'root', gender: 'f' },
            { fr: 'la graine', en: 'seed', gender: 'f' },
            { fr: 'le buisson', en: 'bush', gender: 'm' },
            { fr: 'la terre', en: 'earth / soil', gender: 'f' },
            { fr: 'la pierre', en: 'stone / rock', gender: 'f' },
            { fr: 'le sable', en: 'sand', gender: 'm' }
          ]
        },
        {
          name: 'Environment',
          words: [
            { fr: "l'environnement", en: 'environment', gender: 'm' },
            { fr: 'la pollution', en: 'pollution', gender: 'f' },
            { fr: 'le réchauffement climatique', en: 'global warming', gender: 'm' },
            { fr: 'le recyclage', en: 'recycling', gender: 'm' },
            { fr: "l'énergie", en: 'energy', gender: 'f' },
            { fr: "l'énergie solaire", en: 'solar energy', gender: 'f' },
            { fr: 'la nature', en: 'nature', gender: 'f' },
            { fr: 'protéger', en: 'to protect' },
            { fr: 'recycler', en: 'to recycle' },
            { fr: 'polluer', en: 'to pollute' },
            { fr: 'les déchets', en: 'waste / rubbish', gender: 'm' }
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
            { fr: 'la santé', en: 'health', gender: 'f' },
            { fr: 'la maladie', en: 'illness / disease', gender: 'f' },
            { fr: 'la douleur', en: 'pain', gender: 'f' },
            { fr: 'la fièvre', en: 'fever', gender: 'f' },
            { fr: 'le rhume', en: 'cold (illness)', gender: 'm' },
            { fr: 'la grippe', en: 'flu', gender: 'f' },
            { fr: 'la toux', en: 'cough', gender: 'f' },
            { fr: 'le mal de tête', en: 'headache', gender: 'm' },
            { fr: 'le mal de ventre', en: 'stomachache', gender: 'm' },
            { fr: 'le mal de gorge', en: 'sore throat', gender: 'm' },
            { fr: 'le mal de dos', en: 'backache', gender: 'm' },
            { fr: "J'ai mal à la tête", en: 'I have a headache' },
            { fr: "J'ai mal au ventre", en: 'I have a stomachache' },
            { fr: 'être malade', en: 'to be sick' },
            { fr: 'tousser', en: 'to cough' },
            { fr: 'éternuer', en: 'to sneeze' },
            { fr: 'vomir', en: 'to vomit' },
            { fr: 'se blesser', en: 'to injure oneself' },
            { fr: 'guérir', en: 'to heal / to recover' },
            { fr: 'la blessure', en: 'injury / wound', gender: 'f' },
            { fr: "l'allergie", en: 'allergy', gender: 'f' },
            { fr: "l'infection", en: 'infection', gender: 'f' }
          ]
        },
        {
          name: 'Medical Vocabulary',
          words: [
            { fr: "l'hôpital", en: 'hospital', gender: 'm' },
            { fr: 'le médecin', en: 'doctor', gender: 'm' },
            { fr: "l'infirmier / l'infirmière", en: 'nurse' },
            { fr: 'le/la pharmacien(ne)', en: 'pharmacist' },
            { fr: 'la pharmacie', en: 'pharmacy', gender: 'f' },
            { fr: 'le médicament', en: 'medicine / medication', gender: 'm' },
            { fr: "l'ordonnance", en: 'prescription', gender: 'f' },
            { fr: 'le comprimé', en: 'tablet / pill', gender: 'm' },
            { fr: 'le sirop', en: 'syrup', gender: 'm' },
            { fr: 'le pansement', en: 'bandage / plaster', gender: 'm' },
            { fr: 'la piqûre', en: 'injection / sting', gender: 'f' },
            { fr: 'le vaccin', en: 'vaccine', gender: 'm' },
            { fr: "l'ambulance", en: 'ambulance', gender: 'f' },
            { fr: 'les urgences', en: 'emergency room', gender: 'f' },
            { fr: "l'opération", en: 'operation / surgery', gender: 'f' },
            { fr: 'le rendez-vous', en: 'appointment', gender: 'm' },
            { fr: 'le régime', en: 'diet', gender: 'm' },
            { fr: 'la consultation', en: 'consultation', gender: 'f' }
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
            { fr: 'le magasin', en: 'shop / store', gender: 'm' },
            { fr: 'le supermarché', en: 'supermarket', gender: 'm' },
            { fr: 'le marché', en: 'market', gender: 'm' },
            { fr: 'le centre commercial', en: 'shopping center / mall', gender: 'm' },
            { fr: 'la boulangerie', en: 'bakery', gender: 'f' },
            { fr: 'la pâtisserie', en: 'pastry shop', gender: 'f' },
            { fr: 'la boucherie', en: 'butcher shop', gender: 'f' },
            { fr: 'la poissonnerie', en: 'fish shop', gender: 'f' },
            { fr: 'la pharmacie', en: 'pharmacy', gender: 'f' },
            { fr: 'la librairie', en: 'bookshop', gender: 'f' },
            { fr: 'la boutique', en: 'boutique / shop', gender: 'f' },
            { fr: "l'épicerie", en: 'grocery store', gender: 'f' },
            { fr: 'le tabac', en: 'tobacco shop / newsstand', gender: 'm' }
          ]
        },
        {
          name: 'Money & Buying',
          words: [
            { fr: "l'argent", en: 'money', gender: 'm' },
            { fr: "l'euro", en: 'euro', gender: 'm' },
            { fr: 'le prix', en: 'price', gender: 'm' },
            { fr: 'le billet', en: 'banknote', gender: 'm' },
            { fr: 'la pièce', en: 'coin', gender: 'f' },
            { fr: 'la monnaie', en: 'change / currency', gender: 'f' },
            { fr: 'la carte bancaire', en: 'bank card / debit card', gender: 'f' },
            { fr: 'la carte de crédit', en: 'credit card', gender: 'f' },
            { fr: 'le reçu', en: 'receipt', gender: 'm' },
            { fr: 'la caisse', en: 'checkout / cash register', gender: 'f' },
            { fr: 'la réduction', en: 'discount / reduction', gender: 'f' },
            { fr: 'les soldes', en: 'sales', gender: 'm' },
            { fr: 'cher / chère', en: 'expensive' },
            { fr: 'bon marché', en: 'cheap / inexpensive' },
            { fr: 'gratuit / gratuite', en: 'free (no cost)' },
            { fr: 'acheter', en: 'to buy' },
            { fr: 'vendre', en: 'to sell' },
            { fr: 'payer', en: 'to pay' },
            { fr: 'dépenser', en: 'to spend (money)' },
            { fr: 'coûter', en: 'to cost' },
            { fr: 'Combien ça coûte ?', en: 'How much does it cost?' }
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
            { fr: "l'ordinateur", en: 'computer', gender: 'm' },
            { fr: "l'ordinateur portable", en: 'laptop', gender: 'm' },
            { fr: 'la tablette', en: 'tablet', gender: 'f' },
            { fr: 'le téléphone', en: 'telephone', gender: 'm' },
            { fr: 'le téléphone portable', en: 'mobile phone / cell phone', gender: 'm' },
            { fr: 'le smartphone', en: 'smartphone', gender: 'm' },
            { fr: "l'écran", en: 'screen', gender: 'm' },
            { fr: 'le clavier', en: 'keyboard', gender: 'm' },
            { fr: 'la souris', en: 'mouse (computer)', gender: 'f' },
            { fr: "l'imprimante", en: 'printer', gender: 'f' },
            { fr: 'les écouteurs', en: 'headphones / earbuds', gender: 'm' },
            { fr: "l'appareil photo", en: 'camera', gender: 'm' },
            { fr: 'Internet', en: 'Internet', gender: 'm' },
            { fr: 'le site web', en: 'website', gender: 'm' },
            { fr: 'le Wi-Fi', en: 'Wi-Fi', gender: 'm' },
            { fr: 'le mot de passe', en: 'password', gender: 'm' },
            { fr: 'le réseau social', en: 'social network', gender: 'm' },
            { fr: "l'application", en: 'app / application', gender: 'f' },
            { fr: 'le courriel / le mail', en: 'email', gender: 'm' },
            { fr: 'le message', en: 'message', gender: 'm' },
            { fr: 'le fichier', en: 'file', gender: 'm' },
            { fr: 'le logiciel', en: 'software', gender: 'm' },
            { fr: 'télécharger', en: 'to download' },
            { fr: 'cliquer', en: 'to click' },
            { fr: 'envoyer', en: 'to send' },
            { fr: 'recevoir', en: 'to receive' },
            { fr: 'sauvegarder', en: 'to save' },
            { fr: 'supprimer', en: 'to delete' },
            { fr: 'partager', en: 'to share' },
            { fr: 'chercher', en: 'to search' }
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
            { fr: 'le football', en: 'soccer / football', gender: 'm' },
            { fr: 'le basket-ball', en: 'basketball', gender: 'm' },
            { fr: 'le tennis', en: 'tennis', gender: 'm' },
            { fr: 'le rugby', en: 'rugby', gender: 'm' },
            { fr: 'le volley-ball', en: 'volleyball', gender: 'm' },
            { fr: 'la natation', en: 'swimming', gender: 'f' },
            { fr: "l'athlétisme", en: 'athletics / track and field', gender: 'm' },
            { fr: 'le cyclisme', en: 'cycling', gender: 'm' },
            { fr: 'le ski', en: 'skiing', gender: 'm' },
            { fr: 'la gymnastique', en: 'gymnastics', gender: 'f' },
            { fr: 'la boxe', en: 'boxing', gender: 'f' },
            { fr: 'le judo', en: 'judo', gender: 'm' },
            { fr: "l'escalade", en: 'climbing', gender: 'f' },
            { fr: "l'équitation", en: 'horse riding', gender: 'f' },
            { fr: 'la course', en: 'running / race', gender: 'f' },
            { fr: 'le match', en: 'match / game', gender: 'm' },
            { fr: "l'équipe", en: 'team', gender: 'f' },
            { fr: 'le joueur / la joueuse', en: 'player' },
            { fr: 'gagner', en: 'to win' },
            { fr: 'perdre', en: 'to lose' },
            { fr: "s'entraîner", en: 'to train' },
            { fr: 'le score', en: 'score', gender: 'm' }
          ]
        },
        {
          name: 'Hobbies & Leisure',
          words: [
            { fr: 'la lecture', en: 'reading', gender: 'f' },
            { fr: 'la musique', en: 'music', gender: 'f' },
            { fr: 'le cinéma', en: 'cinema / movies', gender: 'm' },
            { fr: 'la photographie', en: 'photography', gender: 'f' },
            { fr: 'le dessin', en: 'drawing', gender: 'm' },
            { fr: 'la peinture', en: 'painting', gender: 'f' },
            { fr: 'la danse', en: 'dance / dancing', gender: 'f' },
            { fr: 'la cuisine', en: 'cooking', gender: 'f' },
            { fr: 'le jardinage', en: 'gardening', gender: 'm' },
            { fr: 'le voyage', en: 'travelling', gender: 'm' },
            { fr: 'le jeu vidéo', en: 'video game', gender: 'm' },
            { fr: 'le jeu de société', en: 'board game', gender: 'm' },
            { fr: 'la randonnée', en: 'hiking', gender: 'f' },
            { fr: 'la pêche', en: 'fishing', gender: 'f' },
            { fr: 'le bricolage', en: 'DIY / crafts', gender: 'm' },
            { fr: 'jouer', en: 'to play' },
            { fr: 'chanter', en: 'to sing' },
            { fr: 'danser', en: 'to dance' },
            { fr: 'dessiner', en: 'to draw' },
            { fr: 'peindre', en: 'to paint' },
            { fr: 'collectionner', en: 'to collect' }
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
            { fr: 'heureux / heureuse', en: 'happy' },
            { fr: 'triste', en: 'sad' },
            { fr: 'en colère', en: 'angry' },
            { fr: 'content / contente', en: 'pleased / glad' },
            { fr: 'fatigué / fatiguée', en: 'tired' },
            { fr: 'surpris / surprise', en: 'surprised' },
            { fr: 'inquiet / inquiète', en: 'worried' },
            { fr: 'nerveux / nerveuse', en: 'nervous' },
            { fr: 'jaloux / jalouse', en: 'jealous' },
            { fr: 'fier / fière', en: 'proud' },
            { fr: 'déçu / déçue', en: 'disappointed' },
            { fr: 'stressé / stressée', en: 'stressed' },
            { fr: 'ennuyé / ennuyée', en: 'bored / annoyed' },
            { fr: 'amoureux / amoureuse', en: 'in love' },
            { fr: 'effrayé / effrayée', en: 'frightened / scared' },
            { fr: 'confus / confuse', en: 'confused' },
            { fr: "l'amour", en: 'love', gender: 'm' },
            { fr: 'la joie', en: 'joy', gender: 'f' },
            { fr: 'la peur', en: 'fear', gender: 'f' },
            { fr: 'la colère', en: 'anger', gender: 'f' },
            { fr: 'la tristesse', en: 'sadness', gender: 'f' },
            { fr: 'le bonheur', en: 'happiness', gender: 'm' }
          ]
        },
        {
          name: 'Personality Traits',
          words: [
            { fr: 'gentil / gentille', en: 'kind / nice' },
            { fr: 'méchant / méchante', en: 'mean / nasty' },
            { fr: 'intelligent / intelligente', en: 'intelligent' },
            { fr: 'drôle', en: 'funny' },
            { fr: 'sérieux / sérieuse', en: 'serious' },
            { fr: 'timide', en: 'shy' },
            { fr: 'bavard / bavarde', en: 'talkative' },
            { fr: 'courageux / courageuse', en: 'brave / courageous' },
            { fr: 'paresseux / paresseuse', en: 'lazy' },
            { fr: 'travailleur / travailleuse', en: 'hardworking' },
            { fr: 'généreux / généreuse', en: 'generous' },
            { fr: 'égoïste', en: 'selfish' },
            { fr: 'patient / patiente', en: 'patient' },
            { fr: 'impatient / impatiente', en: 'impatient' },
            { fr: 'curieux / curieuse', en: 'curious' },
            { fr: 'honnête', en: 'honest' },
            { fr: 'poli / polie', en: 'polite' },
            { fr: 'impoli / impolie', en: 'rude / impolite' },
            { fr: 'sympathique / sympa', en: 'likable / nice' },
            { fr: 'créatif / créative', en: 'creative' },
            { fr: 'calme', en: 'calm' },
            { fr: 'optimiste', en: 'optimistic' },
            { fr: 'pessimiste', en: 'pessimistic' }
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
            { fr: 'la ville', en: 'city / town', gender: 'f' },
            { fr: 'le village', en: 'village', gender: 'm' },
            { fr: 'la rue', en: 'street', gender: 'f' },
            { fr: "l'avenue", en: 'avenue', gender: 'f' },
            { fr: 'le boulevard', en: 'boulevard', gender: 'm' },
            { fr: 'la place', en: 'square / plaza', gender: 'f' },
            { fr: 'le pont', en: 'bridge', gender: 'm' },
            { fr: 'le parc', en: 'park', gender: 'm' },
            { fr: "l'église", en: 'church', gender: 'f' },
            { fr: 'la cathédrale', en: 'cathedral', gender: 'f' },
            { fr: 'le musée', en: 'museum', gender: 'm' },
            { fr: 'le théâtre', en: 'theater', gender: 'm' },
            { fr: 'le cinéma', en: 'cinema', gender: 'm' },
            { fr: 'le restaurant', en: 'restaurant', gender: 'm' },
            { fr: 'le café', en: 'café', gender: 'm' },
            { fr: "l'hôtel", en: 'hotel', gender: 'm' },
            { fr: "l'hôpital", en: 'hospital', gender: 'm' },
            { fr: 'la banque', en: 'bank', gender: 'f' },
            { fr: 'la poste', en: 'post office', gender: 'f' },
            { fr: 'la mairie', en: 'town hall / city hall', gender: 'f' },
            { fr: 'la gare', en: 'train station', gender: 'f' },
            { fr: 'le commissariat', en: 'police station', gender: 'm' },
            { fr: 'la bibliothèque', en: 'library', gender: 'f' },
            { fr: 'le stade', en: 'stadium', gender: 'm' },
            { fr: 'la piscine', en: 'swimming pool', gender: 'f' },
            { fr: 'le quartier', en: 'neighborhood / district', gender: 'm' },
            { fr: 'le trottoir', en: 'sidewalk / pavement', gender: 'm' },
            { fr: 'le carrefour', en: 'crossroads / intersection', gender: 'm' },
            { fr: 'le feu (rouge)', en: 'traffic light', gender: 'm' }
          ]
        },
        {
          name: 'Directions',
          words: [
            { fr: 'à gauche', en: 'to the left' },
            { fr: 'à droite', en: 'to the right' },
            { fr: 'tout droit', en: 'straight ahead' },
            { fr: 'en face de', en: 'opposite / facing' },
            { fr: 'à côté de', en: 'next to / beside' },
            { fr: 'près de', en: 'near / close to' },
            { fr: 'loin de', en: 'far from' },
            { fr: 'entre', en: 'between' },
            { fr: 'devant', en: 'in front of' },
            { fr: 'derrière', en: 'behind' },
            { fr: 'au-dessus de', en: 'above' },
            { fr: 'au-dessous de', en: 'below / under' },
            { fr: 'dans', en: 'in / inside' },
            { fr: 'dehors', en: 'outside' },
            { fr: 'le nord', en: 'north', gender: 'm' },
            { fr: 'le sud', en: 'south', gender: 'm' },
            { fr: "l'est", en: 'east', gender: 'm' },
            { fr: "l'ouest", en: 'west', gender: 'm' },
            { fr: 'ici', en: 'here' },
            { fr: 'là / là-bas', en: 'there / over there' },
            { fr: 'partout', en: 'everywhere' },
            { fr: 'nulle part', en: 'nowhere' },
            { fr: 'tourner', en: 'to turn' },
            { fr: 'continuer', en: 'to continue' },
            { fr: 'traverser', en: 'to cross' }
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
            { fr: 'la France — français(e)', en: 'France — French' },
            { fr: "l'Angleterre — anglais(e)", en: 'England — English' },
            { fr: "l'Allemagne — allemand(e)", en: 'Germany — German' },
            { fr: "l'Espagne — espagnol(e)", en: 'Spain — Spanish' },
            { fr: "l'Italie — italien(ne)", en: 'Italy — Italian' },
            { fr: 'le Portugal — portugais(e)', en: 'Portugal — Portuguese' },
            { fr: 'la Belgique — belge', en: 'Belgium — Belgian' },
            { fr: 'la Suisse — suisse', en: 'Switzerland — Swiss' },
            { fr: 'les Pays-Bas — néerlandais(e)', en: 'Netherlands — Dutch' },
            { fr: 'la Russie — russe', en: 'Russia — Russian' },
            { fr: 'la Grèce — grec / grecque', en: 'Greece — Greek' },
            { fr: 'la Pologne — polonais(e)', en: 'Poland — Polish' },
            { fr: 'la Suède — suédois(e)', en: 'Sweden — Swedish' },
            { fr: "l'Irlande — irlandais(e)", en: 'Ireland — Irish' }
          ]
        },
        {
          name: 'World Countries',
          words: [
            { fr: 'les États-Unis — américain(e)', en: 'United States — American' },
            { fr: 'le Canada — canadien(ne)', en: 'Canada — Canadian' },
            { fr: 'le Mexique — mexicain(e)', en: 'Mexico — Mexican' },
            { fr: 'le Brésil — brésilien(ne)', en: 'Brazil — Brazilian' },
            { fr: "l'Argentine — argentin(e)", en: 'Argentina — Argentinian' },
            { fr: 'la Chine — chinois(e)', en: 'China — Chinese' },
            { fr: 'le Japon — japonais(e)', en: 'Japan — Japanese' },
            { fr: "l'Inde — indien(ne)", en: 'India — Indian' },
            { fr: "l'Australie — australien(ne)", en: 'Australia — Australian' },
            { fr: "l'Égypte — égyptien(ne)", en: 'Egypt — Egyptian' },
            { fr: 'le Maroc — marocain(e)', en: 'Morocco — Moroccan' },
            { fr: 'le Sénégal — sénégalais(e)', en: 'Senegal — Senegalese' },
            { fr: "l'Algérie — algérien(ne)", en: 'Algeria — Algerian' },
            { fr: 'la Tunisie — tunisien(ne)', en: 'Tunisia — Tunisian' },
            { fr: 'la Corée — coréen(ne)', en: 'Korea — Korean' },
            { fr: 'la Turquie — turc / turque', en: 'Turkey — Turkish' }
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
            { fr: 'qui', en: 'who' },
            { fr: 'que / quoi', en: 'what' },
            { fr: "qu'est-ce que", en: 'what (+ clause)' },
            { fr: 'où', en: 'where' },
            { fr: 'quand', en: 'when' },
            { fr: 'comment', en: 'how' },
            { fr: 'pourquoi', en: 'why' },
            { fr: 'combien', en: 'how much / how many' },
            { fr: 'quel / quelle', en: 'which / what' },
            { fr: 'quels / quelles', en: 'which / what (plural)' },
            { fr: 'lequel / laquelle', en: 'which one' },
            { fr: 'est-ce que', en: '(question marker — turns statement into question)' },
            { fr: "n'est-ce pas", en: "isn't it / right?" },
            { fr: 'Combien ça coûte ?', en: 'How much does it cost?' },
            { fr: "Qu'est-ce que c'est ?", en: 'What is it?' },
            { fr: 'Comment ça va ?', en: 'How are you?' },
            { fr: 'Où est... ?', en: 'Where is...?' },
            { fr: "Quelle heure est-il ?", en: 'What time is it?' }
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
            { fr: 'grand / grande', en: 'big / tall' },
            { fr: 'petit / petite', en: 'small / short' },
            { fr: 'gros / grosse', en: 'fat / big' },
            { fr: 'mince', en: 'thin / slim' },
            { fr: 'long / longue', en: 'long' },
            { fr: 'court / courte', en: 'short (length)' },
            { fr: 'large', en: 'wide / broad' },
            { fr: 'étroit / étroite', en: 'narrow' },
            { fr: 'énorme', en: 'huge / enormous' },
            { fr: 'minuscule', en: 'tiny' },
            { fr: 'plein / pleine', en: 'full' },
            { fr: 'vide', en: 'empty' },
            { fr: 'lourd / lourde', en: 'heavy' },
            { fr: 'léger / légère', en: 'light (weight)' }
          ]
        },
        {
          name: 'Quality & Appearance',
          words: [
            { fr: 'bon / bonne', en: 'good' },
            { fr: 'mauvais / mauvaise', en: 'bad' },
            { fr: 'beau / belle', en: 'beautiful / handsome' },
            { fr: 'laid / laide', en: 'ugly' },
            { fr: 'joli / jolie', en: 'pretty' },
            { fr: 'nouveau / nouvelle', en: 'new' },
            { fr: 'vieux / vieille', en: 'old' },
            { fr: 'jeune', en: 'young' },
            { fr: 'propre', en: 'clean / own' },
            { fr: 'sale', en: 'dirty' },
            { fr: 'chaud / chaude', en: 'hot / warm' },
            { fr: 'froid / froide', en: 'cold' },
            { fr: 'sec / sèche', en: 'dry' },
            { fr: 'mouillé / mouillée', en: 'wet' },
            { fr: 'dur / dure', en: 'hard' },
            { fr: 'mou / molle', en: 'soft' },
            { fr: 'rapide', en: 'fast' },
            { fr: 'lent / lente', en: 'slow' },
            { fr: 'fort / forte', en: 'strong' },
            { fr: 'faible', en: 'weak' }
          ]
        },
        {
          name: 'Other Common Adjectives',
          words: [
            { fr: 'facile', en: 'easy' },
            { fr: 'difficile', en: 'difficult' },
            { fr: 'possible', en: 'possible' },
            { fr: 'impossible', en: 'impossible' },
            { fr: 'important / importante', en: 'important' },
            { fr: 'intéressant / intéressante', en: 'interesting' },
            { fr: 'ennuyeux / ennuyeuse', en: 'boring' },
            { fr: 'dangereux / dangereuse', en: 'dangerous' },
            { fr: 'sûr / sûre', en: 'safe / sure' },
            { fr: 'seul / seule', en: 'alone / only' },
            { fr: 'même', en: 'same / even' },
            { fr: 'autre', en: 'other' },
            { fr: 'chaque', en: 'each / every' },
            { fr: 'tout / toute', en: 'all / every' },
            { fr: 'premier / première', en: 'first' },
            { fr: 'dernier / dernière', en: 'last' },
            { fr: 'prochain / prochaine', en: 'next' },
            { fr: 'ouvert / ouverte', en: 'open' },
            { fr: 'fermé / fermée', en: 'closed' },
            { fr: 'vrai / vraie', en: 'true / real' },
            { fr: 'faux / fausse', en: 'false / wrong' },
            { fr: 'libre', en: 'free (available)' },
            { fr: 'occupé / occupée', en: 'busy / occupied' },
            { fr: 'prêt / prête', en: 'ready' }
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
            { fr: 'toujours', en: 'always' },
            { fr: 'souvent', en: 'often' },
            { fr: 'quelquefois / parfois', en: 'sometimes' },
            { fr: 'rarement', en: 'rarely' },
            { fr: 'jamais', en: 'never' },
            { fr: 'généralement', en: 'generally' },
            { fr: 'habituellement', en: 'usually' },
            { fr: 'de temps en temps', en: 'from time to time' },
            { fr: 'tous les jours', en: 'every day' },
            { fr: 'une fois', en: 'once' },
            { fr: 'deux fois', en: 'twice' }
          ]
        },
        {
          name: 'Manner',
          words: [
            { fr: 'bien', en: 'well' },
            { fr: 'mal', en: 'badly' },
            { fr: 'vite', en: 'quickly / fast' },
            { fr: 'lentement', en: 'slowly' },
            { fr: 'doucement', en: 'softly / gently' },
            { fr: 'facilement', en: 'easily' },
            { fr: 'difficilement', en: 'with difficulty' },
            { fr: 'ensemble', en: 'together' },
            { fr: 'surtout', en: 'especially / above all' },
            { fr: 'seulement', en: 'only' },
            { fr: 'exactement', en: 'exactly' },
            { fr: 'vraiment', en: 'really / truly' },
            { fr: 'absolument', en: 'absolutely' },
            { fr: 'complètement', en: 'completely' },
            { fr: 'environ', en: 'approximately / about' },
            { fr: 'presque', en: 'almost' }
          ]
        },
        {
          name: 'Time & Place',
          words: [
            { fr: 'maintenant', en: 'now' },
            { fr: "aujourd'hui", en: 'today' },
            { fr: 'hier', en: 'yesterday' },
            { fr: 'demain', en: 'tomorrow' },
            { fr: 'tôt', en: 'early' },
            { fr: 'tard', en: 'late' },
            { fr: 'bientôt', en: 'soon' },
            { fr: 'déjà', en: 'already' },
            { fr: 'encore', en: 'still / again' },
            { fr: "d'abord", en: 'first / at first' },
            { fr: 'ensuite / puis', en: 'then / next' },
            { fr: 'enfin / finalement', en: 'finally' },
            { fr: 'ici', en: 'here' },
            { fr: 'là', en: 'there' },
            { fr: 'là-bas', en: 'over there' },
            { fr: 'partout', en: 'everywhere' },
            { fr: 'nulle part', en: 'nowhere' },
            { fr: 'quelque part', en: 'somewhere' },
            { fr: 'ailleurs', en: 'elsewhere' },
            { fr: 'dedans', en: 'inside' },
            { fr: 'dehors', en: 'outside' }
          ]
        },
        {
          name: 'Quantity & Degree',
          words: [
            { fr: 'très', en: 'very' },
            { fr: 'trop', en: 'too / too much' },
            { fr: 'assez', en: 'enough / quite' },
            { fr: 'beaucoup', en: 'a lot / much' },
            { fr: 'un peu', en: 'a little' },
            { fr: 'peu', en: 'few / little' },
            { fr: 'plus', en: 'more' },
            { fr: 'moins', en: 'less' },
            { fr: 'aussi', en: 'also / as' },
            { fr: 'autant', en: 'as much / as many' },
            { fr: 'si / tellement', en: 'so (much)' },
            { fr: 'combien', en: 'how much / how many' }
          ]
        }
      ]
    }
  ]
};
