// ============================================
// COMPREHENSIVE VOCABULARY DATABASE
// ============================================

const VOCAB = {

// ============================================
// NUMBERS - Complete system
// ============================================
numbers: {
  "0-20": {
    "0":"zéro","1":"un","2":"deux","3":"trois","4":"quatre","5":"cinq","6":"six","7":"sept","8":"huit","9":"neuf","10":"dix",
    "11":"onze","12":"douze","13":"treize","14":"quatorze","15":"quinze","16":"seize","17":"dix-sept","18":"dix-huit","19":"dix-neuf","20":"vingt"
  },
  "21-60": {
    "21":"vingt et un","22":"vingt-deux","23":"vingt-trois","24":"vingt-quatre","25":"vingt-cinq","26":"vingt-six","27":"vingt-sept","28":"vingt-huit","29":"vingt-neuf",
    "30":"trente","31":"trente et un","32":"trente-deux","33":"trente-trois","34":"trente-quatre","35":"trente-cinq",
    "40":"quarante","41":"quarante et un","42":"quarante-deux","45":"quarante-cinq",
    "50":"cinquante","51":"cinquante et un","55":"cinquante-cinq",
    "60":"soixante"
  },
  "61-100": {
    "61":"soixante et un","65":"soixante-cinq","69":"soixante-neuf",
    "70":"soixante-dix","71":"soixante et onze","72":"soixante-douze","73":"soixante-treize","74":"soixante-quatorze","75":"soixante-quinze","76":"soixante-seize","77":"soixante-dix-sept","78":"soixante-dix-huit","79":"soixante-dix-neuf",
    "80":"quatre-vingts","81":"quatre-vingt-un","82":"quatre-vingt-deux","85":"quatre-vingt-cinq","89":"quatre-vingt-neuf",
    "90":"quatre-vingt-dix","91":"quatre-vingt-onze","92":"quatre-vingt-douze","95":"quatre-vingt-quinze","99":"quatre-vingt-dix-neuf","100":"cent"
  },
  "large_numbers": {
    "100":"cent","101":"cent un","150":"cent cinquante","200":"deux cents","201":"deux cent un","300":"trois cents","500":"cinq cents",
    "1000":"mille","1001":"mille un","1500":"mille cinq cents","2000":"deux mille","10000":"dix mille","100000":"cent mille",
    "1000000":"un million","2000000":"deux millions","1000000000":"un milliard"
  },
  "ordinals": {
    "1st":"premier / première","2nd":"deuxième","3rd":"troisième","4th":"quatrième","5th":"cinquième",
    "6th":"sixième","7th":"septième","8th":"huitième","9th":"neuvième","10th":"dixième",
    "11th":"onzième","12th":"douzième","20th":"vingtième","21st":"vingt et unième","100th":"centième","last":"dernier / dernière"
  },
  "fractions": {
    "half":"la moitié / demi(e)","third":"le tiers","quarter":"le quart","two thirds":"les deux tiers","three quarters":"les trois quarts",
    "tenth":"le dixième","percent":"pour cent","double":"le double","triple":"le triple"
  }
},

// ============================================
// TIME & DATES - Complete
// ============================================
time: {
  "days": {
    "Monday":"lundi","Tuesday":"mardi","Wednesday":"mercredi","Thursday":"jeudi","Friday":"vendredi","Saturday":"samedi","Sunday":"dimanche",
    "day":"le jour","week":"la semaine","weekend":"le week-end","weekday":"le jour de semaine"
  },
  "months": {
    "January":"janvier","February":"février","March":"mars","April":"avril","May":"mai","June":"juin",
    "July":"juillet","August":"août","September":"septembre","October":"octobre","November":"novembre","December":"décembre",
    "month":"le mois","year":"l'année (f) / l'an (m)"
  },
  "seasons": {
    "spring":"le printemps","summer":"l'été (m)","autumn/fall":"l'automne (m)","winter":"l'hiver (m)",
    "in spring":"au printemps","in summer":"en été","in autumn":"en automne","in winter":"en hiver"
  },
  "time_of_day": {
    "morning":"le matin","afternoon":"l'après-midi (m)","evening":"le soir","night":"la nuit",
    "noon":"midi","midnight":"minuit","dawn":"l'aube (f)","dusk":"le crépuscule",
    "sunrise":"le lever du soleil","sunset":"le coucher du soleil"
  },
  "time_expressions": {
    "today":"aujourd'hui","yesterday":"hier","tomorrow":"demain","the day before yesterday":"avant-hier","the day after tomorrow":"après-demain",
    "this morning":"ce matin","this afternoon":"cet après-midi","this evening":"ce soir","tonight":"cette nuit",
    "last night":"hier soir","last week":"la semaine dernière","next week":"la semaine prochaine",
    "last month":"le mois dernier","next month":"le mois prochain","last year":"l'année dernière","next year":"l'année prochaine",
    "now":"maintenant","right now":"tout de suite","soon":"bientôt","later":"plus tard","already":"déjà","still":"encore","not yet":"pas encore",
    "always":"toujours","often":"souvent","sometimes":"parfois / quelquefois","rarely":"rarement","never":"jamais",
    "early":"tôt","late":"tard","on time":"à l'heure","in advance":"en avance","delayed":"en retard"
  },
  "clock_time": {
    "What time is it?":"Quelle heure est-il ?","It's one o'clock":"Il est une heure","It's two o'clock":"Il est deux heures",
    "It's noon":"Il est midi","It's midnight":"Il est minuit","half past":"et demie","quarter past":"et quart","quarter to":"moins le quart",
    "hour":"l'heure (f)","minute":"la minute","second":"la seconde","a.m.":"du matin","p.m.":"de l'après-midi / du soir"
  },
  "duration": {
    "for (duration)":"pendant","since":"depuis","ago":"il y a","in (future)":"dans","during":"pendant / durant",
    "all day":"toute la journée","all night":"toute la nuit","all week":"toute la semaine"
  }
},

// ============================================
// COMMON ADJECTIVES - 150+ with agreements
// ============================================
adjectives: {
  "appearance": {
    "big/tall":"grand(e)","small/short":"petit(e)","fat":"gros(se)","thin":"mince","long":"long(ue)","short":"court(e)",
    "wide":"large","narrow":"étroit(e)","thick":"épais(se)","deep":"profond(e)","shallow":"peu profond(e)",
    "beautiful":"beau/belle","pretty":"joli(e)","ugly":"laid(e)","handsome":"beau","cute":"mignon(ne)",
    "young":"jeune","old":"vieux/vieille","new":"nouveau/nouvelle","ancient":"ancien(ne)"
  },
  "colors": {
    "red":"rouge","blue":"bleu(e)","green":"vert(e)","yellow":"jaune","orange":"orange","purple":"violet(te)",
    "pink":"rose","brown":"marron / brun(e)","black":"noir(e)","white":"blanc(he)","gray":"gris(e)",
    "light blue":"bleu clair","dark blue":"bleu foncé","navy":"bleu marine","gold":"doré(e)","silver":"argenté(e)",
    "beige":"beige","turquoise":"turquoise","burgundy":"bordeaux"
  },
  "personality": {
    "nice/kind":"gentil(le)","mean":"méchant(e)","friendly":"amical(e)","shy":"timide","outgoing":"extraverti(e)",
    "funny":"drôle / amusant(e)","serious":"sérieux/sérieuse","calm":"calme","nervous":"nerveux/nerveuse",
    "patient":"patient(e)","impatient":"impatient(e)","generous":"généreux/généreuse","selfish":"égoïste",
    "honest":"honnête","dishonest":"malhonnête","brave":"courageux/courageuse","cowardly":"lâche",
    "smart/intelligent":"intelligent(e)","stupid":"stupide / bête","wise":"sage","curious":"curieux/curieuse",
    "lazy":"paresseux/paresseuse","hardworking":"travailleur/travailleuse","ambitious":"ambitieux/ambitieuse",
    "proud":"fier/fière","humble":"humble / modeste","stubborn":"têtu(e)","flexible":"flexible"
  },
  "emotions": {
    "happy":"heureux/heureuse / content(e)","sad":"triste","angry":"fâché(e) / en colère","scared":"effrayé(e) / avoir peur",
    "surprised":"surpris(e)","excited":"excité(e) / enthousiaste","bored":"ennuyé(e)","tired":"fatigué(e)",
    "worried":"inquiet/inquiète","relieved":"soulagé(e)","disappointed":"déçu(e)","proud":"fier/fière",
    "jealous":"jaloux/jalouse","embarrassed":"gêné(e)","confused":"confus(e)","frustrated":"frustré(e)"
  },
  "quality": {
    "good":"bon(ne)","bad":"mauvais(e)","better":"meilleur(e)","worse":"pire","best":"le/la meilleur(e)","worst":"le/la pire",
    "excellent":"excellent(e)","perfect":"parfait(e)","terrible":"terrible","awful":"affreux/affreuse",
    "important":"important(e)","necessary":"nécessaire","useful":"utile","useless":"inutile",
    "easy":"facile","difficult/hard":"difficile","simple":"simple","complicated":"compliqué(e)",
    "possible":"possible","impossible":"impossible","certain":"certain(e)","uncertain":"incertain(e)",
    "true":"vrai(e)","false":"faux/fausse","correct":"correct(e)","wrong":"faux/fausse / incorrect(e)"
  },
  "physical_state": {
    "hot":"chaud(e)","cold":"froid(e)","warm":"tiède","cool":"frais/fraîche",
    "wet":"mouillé(e)","dry":"sec/sèche","clean":"propre","dirty":"sale",
    "full":"plein(e)","empty":"vide","heavy":"lourd(e)","light":"léger/légère",
    "hard":"dur(e)","soft":"mou/molle / doux/douce","smooth":"lisse","rough":"rugueux/rugueuse",
    "sharp":"tranchant(e) / pointu(e)","dull":"émoussé(e)","tight":"serré(e)","loose":"lâche / ample"
  },
  "other_common": {
    "same":"même","different":"différent(e)","similar":"similaire","other":"autre",
    "first":"premier/première","last":"dernier/dernière","next":"prochain(e)","previous":"précédent(e)",
    "only":"seul(e)","main":"principal(e)","real":"vrai(e) / réel(le)","fake":"faux/fausse",
    "free (no cost)":"gratuit(e)","free (available)":"libre","busy":"occupé(e)","available":"disponible",
    "open":"ouvert(e)","closed":"fermé(e)","public":"public/publique","private":"privé(e)",
    "safe":"sûr(e) / en sécurité","dangerous":"dangereux/dangereuse","healthy":"sain(e)","sick":"malade",
    "rich":"riche","poor":"pauvre","expensive":"cher/chère","cheap":"bon marché / pas cher",
    "fast/quick":"rapide / vite","slow":"lent(e)","loud":"bruyant(e) / fort(e)","quiet":"silencieux/silencieuse / calme",
    "strong":"fort(e)","weak":"faible","famous":"célèbre / connu(e)","unknown":"inconnu(e)"
  }
},

// ============================================
// ADVERBS - 80+
// ============================================
adverbs: {
  "frequency": {
    "always":"toujours","often":"souvent","usually":"d'habitude / généralement","sometimes":"parfois / quelquefois",
    "occasionally":"de temps en temps","rarely":"rarement","seldom":"peu souvent","never":"jamais",
    "ever":"jamais (in questions)","still":"encore / toujours","already":"déjà","not yet":"pas encore"
  },
  "manner": {
    "well":"bien","badly":"mal","quickly":"vite / rapidement","slowly":"lentement",
    "carefully":"soigneusement","carelessly":"négligemment","easily":"facilement","hardly":"à peine",
    "loudly":"fort","quietly":"doucement / silencieusement","clearly":"clairement","together":"ensemble",
    "alone":"seul(e)","directly":"directement","suddenly":"soudain / tout à coup","gradually":"progressivement"
  },
  "place": {
    "here":"ici","there":"là / là-bas","everywhere":"partout","nowhere":"nulle part","somewhere":"quelque part",
    "inside":"à l'intérieur / dedans","outside":"à l'extérieur / dehors","upstairs":"en haut","downstairs":"en bas",
    "nearby":"près d'ici / à proximité","far away":"loin","ahead":"devant","behind":"derrière",
    "above":"au-dessus","below":"en dessous","around":"autour","away":"loin"
  },
  "time": {
    "now":"maintenant","then":"alors / ensuite","soon":"bientôt","later":"plus tard","immediately":"immédiatement / tout de suite",
    "recently":"récemment","lately":"dernièrement","formerly":"autrefois","finally":"enfin / finalement",
    "first":"d'abord","next":"ensuite","afterwards":"après / ensuite","meanwhile":"pendant ce temps"
  },
  "degree": {
    "very":"très","really":"vraiment","quite":"assez / plutôt","rather":"plutôt","fairly":"assez",
    "too (excessive)":"trop","enough":"assez","almost":"presque","completely":"complètement",
    "totally":"totalement","absolutely":"absolument","extremely":"extrêmement","particularly":"particulièrement",
    "especially":"surtout / spécialement","only":"seulement","just":"juste","even":"même","also":"aussi"
  },
  "opinion": {
    "maybe/perhaps":"peut-être","probably":"probablement","certainly":"certainement","surely":"sûrement",
    "obviously":"évidemment","apparently":"apparemment","fortunately":"heureusement","unfortunately":"malheureusement",
    "hopefully":"avec un peu de chance","honestly":"honnêtement","frankly":"franchement","personally":"personnellement"
  }
},

// ============================================
// FAMILY - Complete
// ============================================
family: {
  "immediate": {
    "mother":"la mère","father":"le père","parents":"les parents (m)","son":"le fils","daughter":"la fille",
    "children":"les enfants (m)","child":"l'enfant (m/f)","brother":"le frère","sister":"la sœur",
    "siblings":"les frères et sœurs","husband":"le mari","wife":"la femme / l'épouse","spouse":"le/la conjoint(e)"
  },
  "extended": {
    "grandmother":"la grand-mère","grandfather":"le grand-père","grandparents":"les grands-parents",
    "grandson":"le petit-fils","granddaughter":"la petite-fille","grandchildren":"les petits-enfants",
    "great-grandmother":"l'arrière-grand-mère","great-grandfather":"l'arrière-grand-père",
    "aunt":"la tante","uncle":"l'oncle","cousin (m)":"le cousin","cousin (f)":"la cousine",
    "nephew":"le neveu","niece":"la nièce","godmother":"la marraine","godfather":"le parrain"
  },
  "in_laws": {
    "mother-in-law":"la belle-mère","father-in-law":"le beau-père","parents-in-law":"les beaux-parents",
    "brother-in-law":"le beau-frère","sister-in-law":"la belle-sœur",
    "son-in-law":"le gendre / le beau-fils","daughter-in-law":"la belle-fille"
  },
  "blended": {
    "stepmother":"la belle-mère","stepfather":"le beau-père","stepson":"le beau-fils","stepdaughter":"la belle-fille",
    "stepbrother":"le demi-frère","stepsister":"la demi-sœur","half-brother":"le demi-frère","half-sister":"la demi-sœur",
    "adopted child":"l'enfant adopté(e)","foster child":"l'enfant placé(e)"
  },
  "relationships": {
    "boyfriend":"le petit ami / le copain","girlfriend":"la petite amie / la copine","partner":"le/la partenaire",
    "fiancé":"le fiancé","fiancée":"la fiancée","ex-husband":"l'ex-mari","ex-wife":"l'ex-femme",
    "widow":"la veuve","widower":"le veuf","single":"célibataire","married":"marié(e)","divorced":"divorcé(e)"
  }
},

// ============================================
// BODY - Complete
// ============================================
body: {
  "head": {
    "head":"la tête","face":"le visage / la figure","hair":"les cheveux (m)","forehead":"le front",
    "eye":"l'œil (m)","eyes":"les yeux (m)","eyebrow":"le sourcil","eyelash":"le cil","eyelid":"la paupière",
    "ear":"l'oreille (f)","nose":"le nez","nostril":"la narine","cheek":"la joue","chin":"le menton",
    "mouth":"la bouche","lip":"la lèvre","tongue":"la langue","tooth":"la dent","teeth":"les dents",
    "jaw":"la mâchoire","neck":"le cou","throat":"la gorge"
  },
  "upper_body": {
    "shoulder":"l'épaule (f)","arm":"le bras","elbow":"le coude","forearm":"l'avant-bras (m)",
    "wrist":"le poignet","hand":"la main","palm":"la paume","finger":"le doigt","thumb":"le pouce",
    "nail":"l'ongle (m)","fist":"le poing","chest":"la poitrine","breast":"le sein","back":"le dos",
    "spine":"la colonne vertébrale","rib":"la côte","waist":"la taille","stomach/belly":"le ventre"
  },
  "lower_body": {
    "hip":"la hanche","buttocks":"les fesses (f)","leg":"la jambe","thigh":"la cuisse","knee":"le genou",
    "calf":"le mollet","shin":"le tibia","ankle":"la cheville","foot":"le pied","feet":"les pieds",
    "toe":"l'orteil (m)","heel":"le talon","sole":"la plante du pied"
  },
  "internal": {
    "brain":"le cerveau","heart":"le cœur","lung":"le poumon","liver":"le foie","kidney":"le rein",
    "stomach (organ)":"l'estomac (m)","intestine":"l'intestin (m)","blood":"le sang","bone":"l'os (m)",
    "muscle":"le muscle","skin":"la peau","vein":"la veine","artery":"l'artère (f)","nerve":"le nerf"
  },
  "descriptions": {
    "tall":"grand(e)","short":"petit(e)","fat/overweight":"gros(se)","thin/slim":"mince","muscular":"musclé(e)",
    "blonde hair":"les cheveux blonds","brown hair":"les cheveux bruns","black hair":"les cheveux noirs","red hair":"les cheveux roux",
    "curly hair":"les cheveux bouclés","straight hair":"les cheveux raides","bald":"chauve",
    "blue eyes":"les yeux bleus","green eyes":"les yeux verts","brown eyes":"les yeux marron",
    "beard":"la barbe","mustache":"la moustache","freckles":"les taches de rousseur"
  }
},

// ============================================
// FOOD & DRINK - Comprehensive
// ============================================
food: {
  "fruits": {
    "apple":"la pomme","banana":"la banane","orange":"l'orange (f)","lemon":"le citron","lime":"le citron vert",
    "grape":"le raisin","strawberry":"la fraise","raspberry":"la framboise","blueberry":"la myrtille","blackberry":"la mûre",
    "cherry":"la cerise","peach":"la pêche","pear":"la poire","plum":"la prune","apricot":"l'abricot (m)",
    "watermelon":"la pastèque","melon":"le melon","pineapple":"l'ananas (m)","mango":"la mangue","kiwi":"le kiwi",
    "coconut":"la noix de coco","fig":"la figue","grapefruit":"le pamplemousse","pomegranate":"la grenade"
  },
  "vegetables": {
    "vegetable":"le légume","carrot":"la carotte","potato":"la pomme de terre","tomato":"la tomate",
    "onion":"l'oignon (m)","garlic":"l'ail (m)","lettuce":"la laitue","salad":"la salade","cabbage":"le chou",
    "spinach":"les épinards (m)","cucumber":"le concombre","pepper (bell)":"le poivron","zucchini":"la courgette",
    "eggplant":"l'aubergine (f)","broccoli":"le brocoli","cauliflower":"le chou-fleur","celery":"le céleri",
    "mushroom":"le champignon","corn":"le maïs","peas":"les petits pois","green beans":"les haricots verts",
    "asparagus":"l'asperge (f)","artichoke":"l'artichaut (m)","leek":"le poireau","beet":"la betterave",
    "radish":"le radis","turnip":"le navet","pumpkin":"la citrouille","squash":"la courge"
  },
  "meat_protein": {
    "meat":"la viande","beef":"le bœuf","pork":"le porc","lamb":"l'agneau (m)","veal":"le veau",
    "chicken":"le poulet","turkey":"la dinde","duck":"le canard","rabbit":"le lapin",
    "ham":"le jambon","bacon":"le bacon / le lard","sausage":"la saucisse","steak":"le steak / le bifteck",
    "ground beef":"la viande hachée","roast":"le rôti","chop":"la côtelette","liver":"le foie"
  },
  "seafood": {
    "fish":"le poisson","salmon":"le saumon","tuna":"le thon","cod":"la morue / le cabillaud","trout":"la truite",
    "sardine":"la sardine","sole":"la sole","sea bass":"le bar / le loup","mackerel":"le maquereau",
    "shrimp/prawn":"la crevette","lobster":"le homard","crab":"le crabe","mussel":"la moule",
    "oyster":"l'huître (f)","scallop":"la coquille Saint-Jacques","squid":"le calamar","octopus":"le poulpe"
  },
  "dairy_eggs": {
    "milk":"le lait","cheese":"le fromage","butter":"le beurre","cream":"la crème","yogurt":"le yaourt",
    "egg":"l'œuf (m)","eggs":"les œufs","ice cream":"la glace","whipped cream":"la crème chantilly",
    "sour cream":"la crème fraîche"
  },
  "bread_bakery": {
    "bread":"le pain","baguette":"la baguette","croissant":"le croissant","roll":"le petit pain",
    "toast":"le pain grillé / le toast","slice":"la tranche","crumb":"la miette","crust":"la croûte",
    "cake":"le gâteau","pie":"la tarte","cookie":"le biscuit","pastry":"la pâtisserie / la viennoiserie",
    "muffin":"le muffin","donut":"le beignet","pancake":"la crêpe","waffle":"la gaufre"
  },
  "grains_pasta": {
    "rice":"le riz","pasta":"les pâtes (f)","noodles":"les nouilles (f)","spaghetti":"les spaghettis (m)",
    "flour":"la farine","wheat":"le blé","oats":"l'avoine (f)","cereal":"les céréales (f)",
    "couscous":"le couscous","quinoa":"le quinoa"
  },
  "condiments": {
    "salt":"le sel","pepper":"le poivre","sugar":"le sucre","oil":"l'huile (f)","olive oil":"l'huile d'olive",
    "vinegar":"le vinaigre","mustard":"la moutarde","ketchup":"le ketchup","mayonnaise":"la mayonnaise",
    "sauce":"la sauce","honey":"le miel","jam":"la confiture","syrup":"le sirop"
  },
  "herbs_spices": {
    "parsley":"le persil","basil":"le basilic","thyme":"le thym","rosemary":"le romarin","oregano":"l'origan (m)",
    "mint":"la menthe","cilantro":"la coriandre","dill":"l'aneth (m)","bay leaf":"la feuille de laurier",
    "cinnamon":"la cannelle","ginger":"le gingembre","vanilla":"la vanille","nutmeg":"la muscade","cumin":"le cumin"
  },
  "drinks": {
    "water":"l'eau (f)","sparkling water":"l'eau gazeuse","still water":"l'eau plate","mineral water":"l'eau minérale",
    "juice":"le jus","orange juice":"le jus d'orange","apple juice":"le jus de pomme",
    "coffee":"le café","espresso":"l'expresso (m)","tea":"le thé","hot chocolate":"le chocolat chaud",
    "milk":"le lait","soda":"le soda","lemonade":"la limonade / le citron pressé",
    "wine":"le vin","red wine":"le vin rouge","white wine":"le vin blanc","rosé wine":"le vin rosé",
    "beer":"la bière","champagne":"le champagne","cocktail":"le cocktail","whiskey":"le whisky","vodka":"la vodka"
  },
  "meals": {
    "meal":"le repas","breakfast":"le petit déjeuner","lunch":"le déjeuner","dinner":"le dîner","snack":"le goûter / le snack",
    "appetizer":"l'entrée (f) / l'apéritif (m)","main course":"le plat principal","side dish":"l'accompagnement (m)",
    "dessert":"le dessert","course":"le plat","menu":"le menu / la carte","recipe":"la recette"
  },
  "cooking": {
    "to cook":"cuisiner / faire la cuisine","to bake":"cuire au four","to fry":"frire","to boil":"bouillir",
    "to grill":"griller","to roast":"rôtir","to steam":"cuire à la vapeur","to mix":"mélanger",
    "to chop":"couper","to slice":"trancher","to peel":"éplucher / peler","to stir":"remuer",
    "raw":"cru(e)","cooked":"cuit(e)","fried":"frit(e)","grilled":"grillé(e)","baked":"cuit au four",
    "boiled":"bouilli(e)","steamed":"cuit à la vapeur","fresh":"frais/fraîche","frozen":"surgelé(e)"
  }
},

// ============================================
// CLOTHING - Complete
// ============================================
clothing: {
  "tops": {
    "shirt":"la chemise","t-shirt":"le t-shirt / le tee-shirt","blouse":"le chemisier","sweater":"le pull",
    "sweatshirt":"le sweat","hoodie":"le sweat à capuche","cardigan":"le cardigan","vest":"le gilet",
    "jacket":"la veste","coat":"le manteau","raincoat":"l'imperméable (m)","winter coat":"le manteau d'hiver",
    "leather jacket":"la veste en cuir","blazer":"le blazer","suit jacket":"la veste de costume"
  },
  "bottoms": {
    "pants/trousers":"le pantalon","jeans":"le jean","shorts":"le short","skirt":"la jupe","dress":"la robe",
    "suit":"le costume (m) / le tailleur (f)","tracksuit":"le survêtement","leggings":"le legging",
    "sweatpants":"le pantalon de jogging"
  },
  "underwear_sleepwear": {
    "underwear":"les sous-vêtements (m)","underpants":"le slip / le caleçon","bra":"le soutien-gorge",
    "socks":"les chaussettes (f)","tights":"les collants (m)","stockings":"les bas (m)",
    "pajamas":"le pyjama","nightgown":"la chemise de nuit","bathrobe":"le peignoir"
  },
  "footwear": {
    "shoes":"les chaussures (f)","boots":"les bottes (f)","ankle boots":"les bottines (f)",
    "sneakers":"les baskets (f) / les tennis (f)","sandals":"les sandales (f)","flip-flops":"les tongs (f)",
    "heels":"les talons (m)","flats":"les ballerines (f)","slippers":"les pantoufles (f) / les chaussons (m)",
    "hiking boots":"les chaussures de randonnée"
  },
  "accessories": {
    "hat":"le chapeau","cap":"la casquette","beanie":"le bonnet","scarf":"l'écharpe (f)","gloves":"les gants (m)",
    "mittens":"les moufles (f)","belt":"la ceinture","tie":"la cravate","bow tie":"le nœud papillon",
    "watch":"la montre","bracelet":"le bracelet","necklace":"le collier","ring":"la bague","earrings":"les boucles d'oreilles (f)",
    "glasses":"les lunettes (f)","sunglasses":"les lunettes de soleil","bag":"le sac","purse/handbag":"le sac à main",
    "backpack":"le sac à dos","wallet":"le portefeuille","umbrella":"le parapluie","handkerchief":"le mouchoir"
  },
  "materials": {
    "cotton":"le coton","wool":"la laine","silk":"la soie","leather":"le cuir","linen":"le lin",
    "denim":"le jean / le denim","polyester":"le polyester","velvet":"le velours","cashmere":"le cachemire"
  },
  "shopping": {
    "size":"la taille","small":"petit (S)","medium":"moyen (M)","large":"grand (L)","extra large":"très grand (XL)",
    "fitting room":"la cabine d'essayage","to try on":"essayer","it fits":"ça me va","too tight":"trop serré(e)",
    "too loose":"trop large","on sale":"en solde","discount":"la réduction"
  }
},

// ============================================
// HOUSE & HOME - Complete
// ============================================
house: {
  "types": {
    "house":"la maison","apartment":"l'appartement (m)","flat":"l'appartement (m)","studio":"le studio",
    "villa":"la villa","cottage":"le cottage","mansion":"le manoir","building":"l'immeuble (m) / le bâtiment",
    "floor/story":"l'étage (m)","ground floor":"le rez-de-chaussée","first floor":"le premier étage"
  },
  "rooms": {
    "room":"la pièce / la chambre","living room":"le salon / la salle de séjour","dining room":"la salle à manger",
    "kitchen":"la cuisine","bedroom":"la chambre","bathroom":"la salle de bains","toilet":"les toilettes (f) / les WC",
    "hallway":"le couloir","entrance":"l'entrée (f)","office/study":"le bureau",
    "basement":"le sous-sol","attic":"le grenier","cellar":"la cave","laundry room":"la buanderie",
    "garage":"le garage","storage room":"le débarras"
  },
  "outdoor": {
    "garden":"le jardin","yard":"la cour","lawn":"la pelouse","terrace":"la terrasse","balcony":"le balcon",
    "patio":"le patio","pool":"la piscine","driveway":"l'allée (f)","fence":"la clôture","gate":"le portail"
  },
  "structure": {
    "wall":"le mur","ceiling":"le plafond","floor":"le sol / le plancher","roof":"le toit","door":"la porte",
    "window":"la fenêtre","stairs":"l'escalier (m)","elevator":"l'ascenseur (m)","chimney":"la cheminée",
    "fireplace":"la cheminée","column":"la colonne"
  },
  "furniture": {
    "furniture":"les meubles (m)","table":"la table","chair":"la chaise","armchair":"le fauteuil",
    "sofa/couch":"le canapé","bed":"le lit","mattress":"le matelas","pillow":"l'oreiller (m)","blanket":"la couverture",
    "sheet":"le drap","desk":"le bureau","wardrobe/closet":"l'armoire (f)","dresser":"la commode",
    "shelf":"l'étagère (f)","bookcase":"la bibliothèque","nightstand":"la table de nuit / la table de chevet",
    "cabinet":"le placard","drawer":"le tiroir","carpet/rug":"le tapis","curtains":"les rideaux (m)",
    "lamp":"la lampe","mirror":"le miroir","clock":"l'horloge (f) / la pendule"
  },
  "kitchen_items": {
    "refrigerator":"le réfrigérateur / le frigo","freezer":"le congélateur","oven":"le four","stove":"la cuisinière",
    "microwave":"le micro-ondes","dishwasher":"le lave-vaisselle","sink":"l'évier (m)","faucet":"le robinet",
    "counter":"le comptoir / le plan de travail","cabinet":"le placard",
    "pot":"la casserole","pan":"la poêle","lid":"le couvercle","cutting board":"la planche à découper",
    "knife":"le couteau","fork":"la fourchette","spoon":"la cuillère","plate":"l'assiette (f)","bowl":"le bol",
    "glass":"le verre","cup":"la tasse","mug":"le mug","bottle":"la bouteille","pitcher":"la carafe"
  },
  "bathroom_items": {
    "bathtub":"la baignoire","shower":"la douche","sink":"le lavabo","toilet":"les toilettes / les WC",
    "mirror":"le miroir","towel":"la serviette","soap":"le savon","shampoo":"le shampooing",
    "conditioner":"l'après-shampooing (m)","toothbrush":"la brosse à dents","toothpaste":"le dentifrice",
    "razor":"le rasoir","hairdryer":"le sèche-cheveux"
  },
  "appliances": {
    "television/TV":"la télévision / la télé","remote control":"la télécommande","computer":"l'ordinateur (m)",
    "laptop":"l'ordinateur portable","washing machine":"la machine à laver / le lave-linge",
    "dryer":"le sèche-linge","iron":"le fer à repasser","vacuum cleaner":"l'aspirateur (m)",
    "air conditioning":"la climatisation","heater":"le chauffage / le radiateur","fan":"le ventilateur"
  },
  "actions": {
    "to live":"habiter / vivre","to rent":"louer","to buy":"acheter","to sell":"vendre","to move":"déménager",
    "to clean":"nettoyer","to vacuum":"passer l'aspirateur","to wash dishes":"faire la vaisselle",
    "to do laundry":"faire la lessive","to cook":"cuisiner / faire la cuisine","to tidy up":"ranger"
  }
},

// ============================================
// ANIMALS - Complete
// ============================================
animals: {
  "pets": {
    "pet":"l'animal de compagnie (m)","dog":"le chien","puppy":"le chiot","cat":"le chat","kitten":"le chaton",
    "fish":"le poisson","goldfish":"le poisson rouge","bird":"l'oiseau (m)","parrot":"le perroquet",
    "rabbit":"le lapin","hamster":"le hamster","guinea pig":"le cochon d'Inde","mouse":"la souris",
    "turtle":"la tortue","snake":"le serpent","lizard":"le lézard"
  },
  "farm": {
    "farm animal":"l'animal de ferme","cow":"la vache","bull":"le taureau","calf":"le veau","pig":"le cochon",
    "horse":"le cheval","pony":"le poney","donkey":"l'âne (m)","sheep":"le mouton","lamb":"l'agneau (m)",
    "goat":"la chèvre","chicken":"la poule","rooster":"le coq","chick":"le poussin","duck":"le canard",
    "goose":"l'oie (f)","turkey":"la dinde"
  },
  "wild_mammals": {
    "wild animal":"l'animal sauvage","lion":"le lion","tiger":"le tigre","elephant":"l'éléphant (m)","giraffe":"la girafe",
    "zebra":"le zèbre","monkey":"le singe","gorilla":"le gorille","bear":"l'ours (m)","polar bear":"l'ours polaire",
    "wolf":"le loup","fox":"le renard","deer":"le cerf","moose":"l'élan (m)","hippopotamus":"l'hippopotame (m)",
    "rhinoceros":"le rhinocéros","kangaroo":"le kangourou","koala":"le koala","panda":"le panda"
  },
  "birds": {
    "eagle":"l'aigle (m)","hawk":"le faucon","owl":"le hibou / la chouette","crow":"le corbeau",
    "pigeon":"le pigeon","sparrow":"le moineau","swan":"le cygne","duck":"le canard","goose":"l'oie (f)",
    "penguin":"le pingouin / le manchot","flamingo":"le flamant rose","peacock":"le paon","seagull":"la mouette"
  },
  "sea_animals": {
    "whale":"la baleine","dolphin":"le dauphin","shark":"le requin","seal":"le phoque","walrus":"le morse",
    "octopus":"la pieuvre / le poulpe","jellyfish":"la méduse","starfish":"l'étoile de mer (f)",
    "crab":"le crabe","lobster":"le homard","shrimp":"la crevette","seahorse":"l'hippocampe (m)"
  },
  "insects": {
    "insect":"l'insecte (m)","bee":"l'abeille (f)","wasp":"la guêpe","butterfly":"le papillon","moth":"le papillon de nuit",
    "fly":"la mouche","mosquito":"le moustique","ant":"la fourmi","spider":"l'araignée (f)",
    "beetle":"le scarabée","ladybug":"la coccinelle","grasshopper":"la sauterelle","dragonfly":"la libellule","snail":"l'escargot (m)"
  },
  "reptiles_amphibians": {
    "snake":"le serpent","lizard":"le lézard","crocodile":"le crocodile","alligator":"l'alligator (m)",
    "turtle":"la tortue","frog":"la grenouille","toad":"le crapaud","salamander":"la salamandre"
  }
},

// ============================================
// PROFESSIONS - Complete
// ============================================
professions: {
  "medical": {
    "doctor":"le médecin / le docteur","nurse":"l'infirmier / l'infirmière","surgeon":"le chirurgien / la chirurgienne",
    "dentist":"le/la dentiste","pharmacist":"le pharmacien / la pharmacienne","veterinarian":"le/la vétérinaire",
    "psychologist":"le/la psychologue","psychiatrist":"le/la psychiatre","therapist":"le/la thérapeute",
    "paramedic":"l'ambulancier / l'ambulancière","midwife":"la sage-femme"
  },
  "education": {
    "teacher":"le professeur / l'enseignant(e)","professor":"le professeur","student":"l'étudiant(e)","pupil":"l'élève (m/f)",
    "principal":"le directeur / la directrice","researcher":"le chercheur / la chercheuse",
    "librarian":"le/la bibliothécaire","tutor":"le tuteur / la tutrice"
  },
  "business": {
    "businessman/woman":"l'homme / la femme d'affaires","manager":"le directeur / la directrice / le manager",
    "executive":"le cadre","CEO":"le PDG (président-directeur général)","entrepreneur":"l'entrepreneur / l'entrepreneuse",
    "accountant":"le/la comptable","banker":"le banquier / la banquière","economist":"l'économiste (m/f)",
    "consultant":"le/la consultant(e)","secretary":"le/la secrétaire","receptionist":"le/la réceptionniste",
    "salesperson":"le vendeur / la vendeuse","real estate agent":"l'agent immobilier"
  },
  "law_government": {
    "lawyer":"l'avocat(e)","judge":"le/la juge","politician":"le politicien / la politicienne",
    "mayor":"le maire / la mairesse","president":"le président / la présidente","minister":"le/la ministre",
    "diplomat":"le/la diplomate","civil servant":"le/la fonctionnaire"
  },
  "trades": {
    "mechanic":"le mécanicien / la mécanicienne","electrician":"l'électricien(ne)","plumber":"le plombier",
    "carpenter":"le menuisier / le charpentier","painter":"le peintre","roofer":"le couvreur",
    "locksmith":"le serrurier","welder":"le soudeur"
  },
  "food_service": {
    "chef":"le chef (cuisinier)","cook":"le cuisinier / la cuisinière","baker":"le boulanger / la boulangère",
    "pastry chef":"le pâtissier / la pâtissière","butcher":"le boucher / la bouchère",
    "waiter":"le serveur","waitress":"la serveuse","bartender":"le barman / la barmaid"
  },
  "arts_entertainment": {
    "artist":"l'artiste (m/f)","painter":"le peintre","sculptor":"le sculpteur / la sculptrice",
    "musician":"le musicien / la musicienne","singer":"le chanteur / la chanteuse","actor":"l'acteur / l'actrice",
    "director":"le réalisateur / la réalisatrice","writer":"l'écrivain(e)","author":"l'auteur(e)",
    "journalist":"le/la journaliste","photographer":"le/la photographe","designer":"le/la designer"
  },
  "technology": {
    "engineer":"l'ingénieur(e)","programmer":"le programmeur / la programmeuse","developer":"le développeur / la développeuse",
    "IT specialist":"l'informaticien(ne)","data scientist":"le/la data scientist","web designer":"le/la webdesigner",
    "technician":"le technicien / la technicienne"
  },
  "services": {
    "police officer":"le policier / la policière","firefighter":"le pompier / la pompière",
    "soldier":"le soldat / la soldate","pilot":"le/la pilote","flight attendant":"l'hôtesse de l'air / le steward",
    "driver":"le chauffeur / le conducteur","taxi driver":"le chauffeur de taxi",
    "hairdresser":"le coiffeur / la coiffeuse","cleaner":"l'agent d'entretien / la femme de ménage",
    "gardener":"le jardinier / la jardinière","farmer":"l'agriculteur / l'agricultrice / le fermier"
  },
  "science": {
    "scientist":"le/la scientifique","biologist":"le/la biologiste","chemist":"le/la chimiste",
    "physicist":"le physicien / la physicienne","mathematician":"le mathématicien / la mathématicienne",
    "astronaut":"l'astronaute (m/f)","archaeologist":"l'archéologue (m/f)"
  }
},

// ============================================
// COUNTRIES & NATIONALITIES - Complete
// ============================================
countries: {
  "europe_west": {
    "France":"la France / français(e)","England":"l'Angleterre / anglais(e)","United Kingdom":"le Royaume-Uni / britannique",
    "Germany":"l'Allemagne / allemand(e)","Spain":"l'Espagne / espagnol(e)","Italy":"l'Italie / italien(ne)",
    "Portugal":"le Portugal / portugais(e)","Belgium":"la Belgique / belge","Netherlands":"les Pays-Bas / néerlandais(e)",
    "Switzerland":"la Suisse / suisse","Austria":"l'Autriche / autrichien(ne)","Ireland":"l'Irlande / irlandais(e)",
    "Scotland":"l'Écosse / écossais(e)","Wales":"le Pays de Galles / gallois(e)","Luxembourg":"le Luxembourg / luxembourgeois(e)"
  },
  "europe_north": {
    "Sweden":"la Suède / suédois(e)","Norway":"la Norvège / norvégien(ne)","Denmark":"le Danemark / danois(e)",
    "Finland":"la Finlande / finlandais(e)","Iceland":"l'Islande / islandais(e)"
  },
  "europe_east": {
    "Poland":"la Pologne / polonais(e)","Russia":"la Russie / russe","Ukraine":"l'Ukraine / ukrainien(ne)",
    "Czech Republic":"la République tchèque / tchèque","Hungary":"la Hongrie / hongrois(e)",
    "Romania":"la Roumanie / roumain(e)","Greece":"la Grèce / grec(que)","Turkey":"la Turquie / turc(que)"
  },
  "americas": {
    "United States":"les États-Unis / américain(e)","Canada":"le Canada / canadien(ne)","Mexico":"le Mexique / mexicain(e)",
    "Brazil":"le Brésil / brésilien(ne)","Argentina":"l'Argentine / argentin(e)","Colombia":"la Colombie / colombien(ne)",
    "Chile":"le Chili / chilien(ne)","Peru":"le Pérou / péruvien(ne)","Venezuela":"le Venezuela / vénézuélien(ne)",
    "Cuba":"Cuba / cubain(e)","Jamaica":"la Jamaïque / jamaïcain(e)"
  },
  "asia": {
    "China":"la Chine / chinois(e)","Japan":"le Japon / japonais(e)","South Korea":"la Corée du Sud / coréen(ne)",
    "India":"l'Inde / indien(ne)","Vietnam":"le Vietnam / vietnamien(ne)","Thailand":"la Thaïlande / thaïlandais(e)",
    "Indonesia":"l'Indonésie / indonésien(ne)","Philippines":"les Philippines / philippin(e)",
    "Pakistan":"le Pakistan / pakistanais(e)","Bangladesh":"le Bangladesh / bangladais(e)"
  },
  "middle_east": {
    "Israel":"Israël / israélien(ne)","Lebanon":"le Liban / libanais(e)","Saudi Arabia":"l'Arabie saoudite / saoudien(ne)",
    "Iran":"l'Iran / iranien(ne)","Iraq":"l'Irak / irakien(ne)","Egypt":"l'Égypte / égyptien(ne)"
  },
  "africa": {
    "Morocco":"le Maroc / marocain(e)","Algeria":"l'Algérie / algérien(ne)","Tunisia":"la Tunisie / tunisien(ne)",
    "Senegal":"le Sénégal / sénégalais(e)","Ivory Coast":"la Côte d'Ivoire / ivoirien(ne)",
    "South Africa":"l'Afrique du Sud / sud-africain(e)","Nigeria":"le Nigeria / nigérian(e)","Kenya":"le Kenya / kényan(e)"
  },
  "oceania": {
    "Australia":"l'Australie / australien(ne)","New Zealand":"la Nouvelle-Zélande / néo-zélandais(e)"
  }
},

// ============================================
// TRAVEL & TRANSPORT
// ============================================
travel: {
  "transport_modes": {
    "car":"la voiture","bus":"le bus / l'autobus","train":"le train","plane":"l'avion (m)","boat":"le bateau",
    "ship":"le navire","ferry":"le ferry","subway/metro":"le métro","tram":"le tramway","taxi":"le taxi",
    "bicycle":"le vélo / la bicyclette","motorcycle":"la moto","scooter":"le scooter","helicopter":"l'hélicoptère (m)"
  },
  "transport_places": {
    "airport":"l'aéroport (m)","train station":"la gare","bus station":"la gare routière","bus stop":"l'arrêt de bus (m)",
    "metro station":"la station de métro","port":"le port","parking lot":"le parking","gas station":"la station-service",
    "highway":"l'autoroute (f)","road":"la route","street":"la rue","bridge":"le pont","tunnel":"le tunnel"
  },
  "at_airport": {
    "flight":"le vol","departure":"le départ","arrival":"l'arrivée (f)","gate":"la porte (d'embarquement)",
    "boarding pass":"la carte d'embarquement","passport":"le passeport","visa":"le visa","customs":"la douane",
    "luggage/baggage":"les bagages (m)","suitcase":"la valise","carry-on":"le bagage à main",
    "check-in":"l'enregistrement (m)","security":"la sécurité","delay":"le retard","cancelled":"annulé(e)"
  },
  "accommodation": {
    "hotel":"l'hôtel (m)","hostel":"l'auberge de jeunesse (f)","bed and breakfast":"la chambre d'hôtes",
    "room":"la chambre","single room":"la chambre simple","double room":"la chambre double",
    "reservation":"la réservation","reception":"la réception","key":"la clé","floor":"l'étage (m)",
    "check-in":"l'arrivée / l'enregistrement","check-out":"le départ"
  },
  "tourism": {
    "tourist":"le/la touriste","tourism":"le tourisme","trip":"le voyage","vacation":"les vacances (f)",
    "tour":"la visite / le tour","guide":"le guide","map":"la carte / le plan","brochure":"la brochure",
    "monument":"le monument","museum":"le musée","castle":"le château","church":"l'église (f)","cathedral":"la cathédrale",
    "beach":"la plage","mountain":"la montagne","lake":"le lac","river":"le fleuve / la rivière","forest":"la forêt"
  },
  "directions": {
    "left":"gauche","right":"droite","straight":"tout droit","north":"le nord","south":"le sud",
    "east":"l'est (m)","west":"l'ouest (m)","corner":"le coin","intersection":"le carrefour",
    "traffic light":"le feu (de signalisation)","roundabout":"le rond-point","crosswalk":"le passage piéton"
  }
},

// ============================================
// WORK & OFFICE
// ============================================
work: {
  "general": {
    "work":"le travail","job":"l'emploi (m) / le travail","career":"la carrière","profession":"la profession",
    "occupation":"le métier","company":"l'entreprise (f) / la société","business":"les affaires (f)",
    "office":"le bureau","factory":"l'usine (f)","employee":"l'employé(e)","employer":"l'employeur",
    "boss":"le patron / la patronne / le chef","colleague":"le/la collègue","team":"l'équipe (f)"
  },
  "employment": {
    "to work":"travailler","to hire":"embaucher","to fire":"licencier / renvoyer","to quit":"démissionner",
    "to retire":"prendre sa retraite","interview":"l'entretien (m)","CV/resume":"le CV",
    "contract":"le contrat","salary":"le salaire","wages":"le salaire","raise":"l'augmentation (f)",
    "promotion":"la promotion","bonus":"la prime","full-time":"à temps plein","part-time":"à temps partiel",
    "unemployed":"au chômage","unemployment":"le chômage","retirement":"la retraite"
  },
  "office_items": {
    "desk":"le bureau","computer":"l'ordinateur (m)","laptop":"l'ordinateur portable","printer":"l'imprimante (f)",
    "phone":"le téléphone","email":"l'email (m) / le courriel","file":"le dossier / le fichier",
    "document":"le document","report":"le rapport","meeting":"la réunion","presentation":"la présentation",
    "pen":"le stylo","pencil":"le crayon","paper":"le papier","folder":"le dossier","stapler":"l'agrafeuse (f)"
  },
  "schedule": {
    "schedule":"l'emploi du temps (m) / l'horaire (m)","working hours":"les heures de travail",
    "shift":"le poste / l'équipe","day shift":"l'équipe de jour","night shift":"l'équipe de nuit",
    "overtime":"les heures supplémentaires","break":"la pause","lunch break":"la pause déjeuner",
    "vacation/holiday":"les vacances (f)","sick leave":"le congé maladie","maternity leave":"le congé maternité"
  }
},

// ============================================
// EDUCATION & SCHOOL
// ============================================
education: {
  "levels": {
    "school":"l'école (f)","preschool":"l'école maternelle","elementary school":"l'école primaire",
    "middle school":"le collège","high school":"le lycée","university":"l'université (f)",
    "college":"la faculté / l'école supérieure","graduate school":"les études supérieures"
  },
  "people": {
    "student":"l'étudiant(e) / l'élève","teacher":"le professeur / l'enseignant(e)","professor":"le professeur",
    "principal":"le directeur / la directrice","dean":"le doyen / la doyenne","classmate":"le/la camarade de classe"
  },
  "subjects": {
    "subject":"la matière","mathematics/math":"les mathématiques / les maths","science":"les sciences",
    "physics":"la physique","chemistry":"la chimie","biology":"la biologie","history":"l'histoire (f)",
    "geography":"la géographie","literature":"la littérature","philosophy":"la philosophie",
    "languages":"les langues","French":"le français","English":"l'anglais","Spanish":"l'espagnol",
    "art":"l'art / les arts plastiques","music":"la musique","physical education":"l'éducation physique / le sport",
    "computer science":"l'informatique (f)","economics":"l'économie (f)"
  },
  "school_items": {
    "classroom":"la salle de classe","blackboard":"le tableau","chalk":"la craie","desk":"le bureau / le pupitre",
    "book":"le livre","textbook":"le manuel","notebook":"le cahier","pen":"le stylo","pencil":"le crayon",
    "eraser":"la gomme","ruler":"la règle","scissors":"les ciseaux (m)","glue":"la colle",
    "backpack":"le sac à dos","calculator":"la calculatrice","dictionary":"le dictionnaire"
  },
  "academic": {
    "class":"le cours / la classe","lesson":"la leçon","lecture":"le cours magistral","homework":"les devoirs (m)",
    "assignment":"le devoir / l'exercice","exam/test":"l'examen (m) / le contrôle","quiz":"l'interrogation (f)",
    "grade":"la note","to pass":"réussir","to fail":"échouer / rater","diploma":"le diplôme",
    "degree":"le diplôme","bachelor's":"la licence","master's":"le master","PhD":"le doctorat",
    "scholarship":"la bourse","semester":"le semestre","term":"le trimestre"
  }
},

// ============================================
// HEALTH & MEDICINE
// ============================================
health: {
  "general": {
    "health":"la santé","healthy":"en bonne santé","sick/ill":"malade","disease":"la maladie",
    "symptom":"le symptôme","pain":"la douleur","to hurt":"avoir mal / faire mal"
  },
  "common_ailments": {
    "headache":"le mal de tête","stomachache":"le mal de ventre / le mal d'estomac","backache":"le mal de dos",
    "toothache":"le mal de dents","sore throat":"le mal de gorge","earache":"le mal d'oreille",
    "cold":"le rhume","flu":"la grippe","fever":"la fièvre","cough":"la toux","sneeze":"l'éternuement (m)",
    "allergy":"l'allergie (f)","infection":"l'infection (f)","inflammation":"l'inflammation (f)"
  },
  "medical_care": {
    "doctor":"le médecin","hospital":"l'hôpital (m)","clinic":"la clinique","emergency room":"les urgences (f)",
    "appointment":"le rendez-vous","examination":"l'examen (m)","diagnosis":"le diagnostic",
    "treatment":"le traitement","surgery":"la chirurgie / l'opération (f)","recovery":"la guérison"
  },
  "medicine": {
    "medicine/medication":"le médicament","pill":"le comprimé / la pilule","tablet":"le cachet",
    "syrup":"le sirop","injection":"la piqûre / l'injection (f)","vaccine":"le vaccin",
    "prescription":"l'ordonnance (f)","pharmacy":"la pharmacie","antibiotic":"l'antibiotique (m)",
    "painkiller":"l'antidouleur (m) / l'analgésique (m)","bandage":"le pansement / le bandage"
  },
  "body_conditions": {
    "tired":"fatigué(e)","exhausted":"épuisé(e)","dizzy":"avoir le vertige","nauseous":"avoir la nausée",
    "pregnant":"enceinte","allergic":"allergique","diabetic":"diabétique","injured":"blessé(e)"
  }
},

// ============================================
// TECHNOLOGY & COMMUNICATION
// ============================================
technology: {
  "devices": {
    "computer":"l'ordinateur (m)","laptop":"l'ordinateur portable","tablet":"la tablette","smartphone":"le smartphone",
    "phone":"le téléphone","cell phone":"le téléphone portable / le mobile","television":"la télévision",
    "camera":"l'appareil photo (m)","video camera":"la caméra","headphones":"les écouteurs (m) / le casque",
    "speaker":"l'enceinte (f) / le haut-parleur","charger":"le chargeur","battery":"la batterie / la pile"
  },
  "internet": {
    "internet":"l'internet (m)","website":"le site web","webpage":"la page web","link":"le lien",
    "to click":"cliquer","to download":"télécharger","to upload":"mettre en ligne / téléverser",
    "email":"l'email (m) / le courriel","password":"le mot de passe","username":"le nom d'utilisateur",
    "account":"le compte","wifi":"le wifi","connection":"la connexion","online":"en ligne","offline":"hors ligne"
  },
  "social_media": {
    "social media":"les réseaux sociaux","to post":"publier / poster","to share":"partager","to like":"aimer",
    "to follow":"suivre","follower":"l'abonné(e)","profile":"le profil","message":"le message",
    "comment":"le commentaire","notification":"la notification","hashtag":"le hashtag"
  },
  "communication": {
    "to call":"appeler","to text":"envoyer un texto/SMS","to email":"envoyer un email",
    "phone call":"l'appel (m)","text message":"le texto / le SMS","voicemail":"la messagerie vocale",
    "video call":"l'appel vidéo","to answer":"répondre","to hang up":"raccrocher"
  }
},

// ============================================
// SPORTS & HOBBIES
// ============================================
sports: {
  "sports": {
    "sport":"le sport","to play":"jouer","to practice":"pratiquer","game":"le match / le jeu",
    "team":"l'équipe (f)","player":"le joueur / la joueuse","coach":"l'entraîneur / l'entraîneuse",
    "referee":"l'arbitre (m/f)","champion":"le champion / la championne","to win":"gagner","to lose":"perdre",
    "score":"le score","goal":"le but","point":"le point","stadium":"le stade","gym":"la salle de sport"
  },
  "ball_sports": {
    "football/soccer":"le football / le foot","basketball":"le basket(-ball)","tennis":"le tennis",
    "volleyball":"le volley(-ball)","rugby":"le rugby","baseball":"le baseball","golf":"le golf",
    "hockey":"le hockey","cricket":"le cricket","badminton":"le badminton","table tennis":"le ping-pong"
  },
  "individual_sports": {
    "swimming":"la natation","running":"la course à pied","cycling":"le cyclisme","skiing":"le ski",
    "snowboarding":"le snowboard","skating":"le patinage","surfing":"le surf","boxing":"la boxe",
    "martial arts":"les arts martiaux","gymnastics":"la gymnastique","athletics":"l'athlétisme (m)",
    "yoga":"le yoga","climbing":"l'escalade (f)","hiking":"la randonnée"
  },
  "hobbies": {
    "hobby":"le passe-temps / le hobby","reading":"la lecture","writing":"l'écriture (f)","drawing":"le dessin",
    "painting":"la peinture","photography":"la photographie","music":"la musique","singing":"le chant",
    "dancing":"la danse","cooking":"la cuisine","gardening":"le jardinage","fishing":"la pêche",
    "traveling":"les voyages (m)","gaming":"les jeux vidéo","chess":"les échecs (m)","cards":"les cartes (f)"
  }
},

// ============================================
// NATURE & ENVIRONMENT
// ============================================
nature: {
  "landscape": {
    "nature":"la nature","landscape":"le paysage","mountain":"la montagne","hill":"la colline","valley":"la vallée",
    "plain":"la plaine","desert":"le désert","forest":"la forêt","jungle":"la jungle","island":"l'île (f)",
    "coast":"la côte","beach":"la plage","cliff":"la falaise","cave":"la grotte"
  },
  "water": {
    "water":"l'eau (f)","sea":"la mer","ocean":"l'océan (m)","lake":"le lac","river":"le fleuve / la rivière",
    "stream":"le ruisseau","waterfall":"la cascade / la chute d'eau","pond":"l'étang (m)","wave":"la vague",
    "tide":"la marée","current":"le courant"
  },
  "weather": {
    "weather":"le temps / la météo","climate":"le climat","temperature":"la température",
    "sun":"le soleil","sunny":"ensoleillé(e)","cloud":"le nuage","cloudy":"nuageux / couvert",
    "rain":"la pluie","rainy":"pluvieux","to rain":"pleuvoir","snow":"la neige","to snow":"neiger",
    "wind":"le vent","windy":"venteux","storm":"la tempête / l'orage (m)","thunder":"le tonnerre",
    "lightning":"l'éclair (m)","fog":"le brouillard","foggy":"brumeux","ice":"la glace","frost":"le gel",
    "hot":"chaud","cold":"froid","warm":"tiède / doux","cool":"frais","humid":"humide","dry":"sec"
  },
  "plants": {
    "plant":"la plante","tree":"l'arbre (m)","flower":"la fleur","grass":"l'herbe (f)","leaf":"la feuille",
    "branch":"la branche","root":"la racine","seed":"la graine","bush":"le buisson","rose":"la rose",
    "tulip":"la tulipe","sunflower":"le tournesol","oak":"le chêne","pine":"le pin"
  },
  "environment": {
    "environment":"l'environnement (m)","pollution":"la pollution","climate change":"le changement climatique",
    "global warming":"le réchauffement climatique","recycling":"le recyclage","to recycle":"recycler",
    "renewable energy":"l'énergie renouvelable","sustainable":"durable","endangered":"en voie de disparition"
  }
},

// ============================================
// SHOPPING & MONEY
// ============================================
shopping: {
  "places": {
    "shop/store":"le magasin","supermarket":"le supermarché","mall":"le centre commercial",
    "market":"le marché","bakery":"la boulangerie","butcher":"la boucherie","pharmacy":"la pharmacie",
    "bookstore":"la librairie","clothing store":"le magasin de vêtements","department store":"le grand magasin"
  },
  "actions": {
    "to buy":"acheter","to sell":"vendre","to pay":"payer","to cost":"coûter","to spend":"dépenser",
    "to shop":"faire les courses / faire du shopping","to try on":"essayer","to return":"retourner / rendre",
    "to exchange":"échanger","to order":"commander"
  },
  "money": {
    "money":"l'argent (m)","cash":"l'argent liquide / les espèces","coin":"la pièce","bill/note":"le billet",
    "credit card":"la carte de crédit","debit card":"la carte de débit","wallet":"le portefeuille",
    "bank":"la banque","ATM":"le distributeur (automatique)","account":"le compte","to withdraw":"retirer",
    "to deposit":"déposer","loan":"le prêt","debt":"la dette"
  },
  "prices": {
    "price":"le prix","expensive":"cher/chère","cheap":"bon marché / pas cher","free":"gratuit(e)",
    "discount":"la réduction / la remise","sale":"les soldes (f)","receipt":"le reçu / le ticket",
    "change":"la monnaie","tip":"le pourboire","tax":"la taxe"
  }
},

// ============================================
// EXPRESSIONS & IDIOMS
// ============================================
expressions: {
  "common_expressions": {
    "of course":"bien sûr","maybe/perhaps":"peut-être","it depends":"ça dépend","no problem":"pas de problème",
    "it doesn't matter":"ce n'est pas grave / ça ne fait rien","I don't mind":"ça m'est égal",
    "I don't care":"je m'en fiche","in my opinion":"à mon avis","by the way":"au fait",
    "actually":"en fait","anyway":"de toute façon","on the other hand":"par contre / en revanche",
    "for example":"par exemple","in general":"en général","at least":"au moins","at most":"au maximum"
  },
  "agreement_disagreement": {
    "I agree":"je suis d'accord","I disagree":"je ne suis pas d'accord","you're right":"tu as raison / vous avez raison",
    "you're wrong":"tu as tort / vous avez tort","exactly":"exactement","absolutely":"absolument",
    "not at all":"pas du tout","I think so":"je pense que oui","I don't think so":"je ne pense pas"
  },
  "feelings_reactions": {
    "I'm happy":"je suis content(e) / heureux(euse)","I'm sad":"je suis triste","I'm tired":"je suis fatigué(e)",
    "I'm bored":"je m'ennuie","I'm excited":"je suis excité(e)","I'm worried":"je suis inquiet/inquiète",
    "what a pity":"quel dommage","that's great":"c'est super / c'est génial","that's terrible":"c'est terrible",
    "how nice":"comme c'est gentil","how strange":"comme c'est bizarre"
  },
  "useful_idioms": {
    "to cost an arm and a leg":"coûter les yeux de la tête","to be in a good mood":"être de bonne humeur",
    "to be in a bad mood":"être de mauvaise humeur","to feel under the weather":"ne pas être dans son assiette",
    "to have a lot on one's plate":"avoir du pain sur la planche","once in a blue moon":"tous les 36 du mois",
    "to kill two birds with one stone":"faire d'une pierre deux coups","better late than never":"mieux vaut tard que jamais",
    "to rain cats and dogs":"pleuvoir des cordes","to break the ice":"briser la glace"
  }
},

// ============================================
// FALSE FRIENDS (English-French)
// ============================================
false_friends: {
  "common_mistakes": {
    "actually (en fait, NOT actuellement)":"actuellement = currently","attend (assister à, NOT attendre)":"attendre = to wait",
    "library (bibliothèque, NOT librairie)":"librairie = bookstore","coin (pièce, NOT coin)":"coin = corner",
    "lecture (conférence, NOT lecture)":"lecture = reading","preservative (conservateur, NOT préservatif)":"préservatif = condom",
    "sensible (raisonnable, NOT sensible)":"sensible = sensitive","sympathetic (compatissant, NOT sympathique)":"sympathique = nice/friendly",
    "eventually (finalement, NOT éventuellement)":"éventuellement = possibly","résumé (CV, NOT résumé)":"résumé = summary",
    "introduce (présenter, NOT introduire)":"introduire = to insert","demand (exiger, NOT demander)":"demander = to ask"
  }
}

};
