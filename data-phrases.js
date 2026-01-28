// ============================================
// COMPREHENSIVE PHRASES DATABASE
// ============================================

const PHRASES = {

greetings: {
  title: "Greetings & Introductions",
  basic_greetings: {
    "Hello / Good morning":"Bonjour",
    "Good afternoon":"Bon après-midi",
    "Good evening":"Bonsoir",
    "Good night":"Bonne nuit",
    "Hi (informal)":"Salut",
    "Hey (very informal)":"Coucou",
    "Goodbye":"Au revoir",
    "Bye (informal)":"Salut / Ciao",
    "See you later":"À plus tard / À tout à l'heure",
    "See you soon":"À bientôt",
    "See you tomorrow":"À demain",
    "See you next week":"À la semaine prochaine",
    "Have a nice day":"Bonne journée",
    "Have a nice evening":"Bonne soirée",
    "Have a nice weekend":"Bon week-end"
  },
  introductions: {
    "What's your name?":"Comment vous appelez-vous ? / Comment tu t'appelles ?",
    "My name is...":"Je m'appelle... / Mon nom est...",
    "Nice to meet you":"Enchanté(e) / Ravi(e) de vous rencontrer",
    "Pleased to meet you":"Ravi(e) de faire votre connaissance",
    "This is my friend":"Je vous présente mon ami(e) / Voici mon ami(e)",
    "Let me introduce myself":"Permettez-moi de me présenter"
  },
  how_are_you: {
    "How are you? (formal)":"Comment allez-vous ?",
    "How are you? (informal)":"Comment vas-tu ? / Ça va ?",
    "How's it going?":"Comment ça va ?",
    "I'm fine, thank you":"Je vais bien, merci",
    "Very well, thanks":"Très bien, merci",
    "Not bad":"Pas mal",
    "So-so":"Comme ci, comme ça / Couci-couça",
    "I'm doing great":"Je vais très bien",
    "Could be better":"Ça pourrait aller mieux",
    "And you?":"Et vous ? / Et toi ?"
  },
  polite_expressions: {
    "Please":"S'il vous plaît / S'il te plaît",
    "Thank you":"Merci",
    "Thank you very much":"Merci beaucoup",
    "Thanks a lot":"Merci bien",
    "You're welcome":"De rien / Je vous en prie",
    "Don't mention it":"Il n'y a pas de quoi",
    "Excuse me":"Excusez-moi / Pardon",
    "I'm sorry":"Je suis désolé(e)",
    "Sorry (casual)":"Pardon / Désolé(e)",
    "No problem":"Pas de problème",
    "Of course":"Bien sûr",
    "With pleasure":"Avec plaisir",
    "You're too kind":"Vous êtes trop aimable"
  },
  personal_info: {
    "Where are you from?":"D'où venez-vous ? / Tu viens d'où ?",
    "I'm from...":"Je viens de... / Je suis de...",
    "I'm English":"Je suis anglais(e)",
    "I live in...":"J'habite à...",
    "How old are you?":"Quel âge avez-vous ? / Tu as quel âge ?",
    "I am ... years old":"J'ai ... ans",
    "What do you do?":"Que faites-vous dans la vie ? / Qu'est-ce que tu fais ?",
    "I work as...":"Je travaille comme... / Je suis...",
    "I'm a student":"Je suis étudiant(e)",
    "Are you married?":"Êtes-vous marié(e) ?",
    "Do you have children?":"Avez-vous des enfants ?"
  }
},

restaurant: {
  title: "At the Restaurant",
  arriving: {
    "A table for two, please":"Une table pour deux, s'il vous plaît",
    "Do you have a reservation?":"Avez-vous une réservation ?",
    "I have a reservation under...":"J'ai une réservation au nom de...",
    "I'd like to make a reservation":"Je voudrais réserver une table",
    "Is this table free?":"Cette table est-elle libre ?",
    "Can we sit outside?":"Peut-on s'asseoir dehors / en terrasse ?",
    "Can we sit by the window?":"Peut-on s'asseoir près de la fenêtre ?",
    "Do you have a table for four?":"Avez-vous une table pour quatre ?",
    "How long is the wait?":"Combien de temps faut-il attendre ?"
  },
  ordering: {
    "The menu, please":"La carte, s'il vous plaît",
    "What do you recommend?":"Qu'est-ce que vous recommandez ?",
    "What's the special of the day?":"Quel est le plat du jour ?",
    "What are the ingredients?":"Quels sont les ingrédients ?",
    "I would like...":"Je voudrais... / J'aimerais...",
    "I'll have...":"Je vais prendre...",
    "For me...":"Pour moi...",
    "As a starter":"En entrée",
    "As a main course":"En plat principal",
    "For dessert":"En dessert",
    "I'm ready to order":"Je suis prêt(e) à commander",
    "We need a few more minutes":"Nous avons besoin de quelques minutes"
  },
  dietary: {
    "I'm vegetarian":"Je suis végétarien(ne)",
    "I'm vegan":"Je suis végétalien(ne) / végan(e)",
    "I'm allergic to...":"Je suis allergique à...",
    "Does this contain...?":"Est-ce que ça contient... ?",
    "Without..., please":"Sans..., s'il vous plaît",
    "I don't eat meat":"Je ne mange pas de viande",
    "I don't eat pork":"Je ne mange pas de porc",
    "Is this gluten-free?":"C'est sans gluten ?",
    "I have a nut allergy":"J'ai une allergie aux noix"
  },
  drinks: {
    "What would you like to drink?":"Qu'est-ce que vous voulez boire ?",
    "A glass of water, please":"Un verre d'eau, s'il vous plaît",
    "Sparkling or still?":"Gazeuse ou plate ?",
    "A bottle of wine":"Une bouteille de vin",
    "The wine list, please":"La carte des vins, s'il vous plaît",
    "A coffee, please":"Un café, s'il vous plaît",
    "With milk":"Avec du lait",
    "Without sugar":"Sans sucre",
    "Another round":"La même chose"
  },
  during_meal: {
    "This is delicious":"C'est délicieux",
    "It's very good":"C'est très bon",
    "Enjoy your meal":"Bon appétit",
    "Cheers!":"Santé ! / À votre santé !",
    "Could I have some more bread?":"Pourrais-je avoir encore du pain ?",
    "Could I have some more water?":"Pourrais-je avoir encore de l'eau ?",
    "This isn't what I ordered":"Ce n'est pas ce que j'ai commandé",
    "This is cold":"C'est froid",
    "This is too salty":"C'est trop salé"
  },
  paying: {
    "The bill, please":"L'addition, s'il vous plaît",
    "Can we pay?":"On peut payer ?",
    "Can we pay separately?":"Peut-on payer séparément ?",
    "We're paying together":"On paie ensemble",
    "Is service included?":"Le service est-il compris ?",
    "Do you accept credit cards?":"Acceptez-vous les cartes de crédit ?",
    "Can I pay by card?":"Je peux payer par carte ?",
    "Keep the change":"Gardez la monnaie",
    "Can I have a receipt?":"Puis-je avoir un reçu ?",
    "There's a mistake on the bill":"Il y a une erreur sur l'addition"
  }
},

shopping: {
  title: "Shopping",
  general: {
    "I'm just looking":"Je regarde seulement",
    "Can you help me?":"Pouvez-vous m'aider ?",
    "I'm looking for...":"Je cherche...",
    "Do you have...?":"Avez-vous... ?",
    "How much does this cost?":"Combien ça coûte ? / C'est combien ?",
    "That's too expensive":"C'est trop cher",
    "Do you have something cheaper?":"Avez-vous quelque chose de moins cher ?",
    "I'll take it":"Je le/la prends",
    "I'll think about it":"Je vais réfléchir",
    "Can I pay by card?":"Puis-je payer par carte ?",
    "Cash or card?":"Espèces ou carte ?",
    "Where is the cashier?":"Où est la caisse ?",
    "Do you have a bag?":"Avez-vous un sac ?",
    "Can I have a receipt?":"Puis-je avoir un reçu ?"
  },
  clothing: {
    "What size do you wear?":"Quelle taille faites-vous ?",
    "I wear size...":"Je fais du...",
    "Do you have this in a different size?":"Avez-vous ceci dans une autre taille ?",
    "Do you have this in a different color?":"Avez-vous ceci dans une autre couleur ?",
    "Where are the fitting rooms?":"Où sont les cabines d'essayage ?",
    "Can I try this on?":"Puis-je essayer ceci ?",
    "It's too big":"C'est trop grand",
    "It's too small":"C'est trop petit",
    "It fits perfectly":"Ça me va parfaitement",
    "It doesn't fit":"Ça ne me va pas",
    "Do you have this in medium?":"Vous l'avez en taille M ?",
    "I need a smaller/larger size":"J'ai besoin d'une taille plus petite/grande"
  },
  returns: {
    "I'd like to return this":"Je voudrais retourner ceci",
    "I'd like to exchange this":"Je voudrais échanger ceci",
    "Do you have the receipt?":"Avez-vous le reçu ?",
    "It doesn't work":"Ça ne marche pas",
    "It's damaged":"C'est abîmé",
    "Can I get a refund?":"Puis-je être remboursé(e) ?"
  },
  groceries: {
    "A kilo of...":"Un kilo de...",
    "Half a kilo of...":"Un demi-kilo de...",
    "100 grams of...":"Cent grammes de...",
    "A slice of...":"Une tranche de...",
    "A piece of...":"Un morceau de...",
    "A bottle of...":"Une bouteille de...",
    "A dozen eggs":"Une douzaine d'œufs",
    "Is this fresh?":"C'est frais ?",
    "When does this expire?":"Quelle est la date de péremption ?",
    "Anything else?":"Et avec ceci ? / Ce sera tout ?"
  }
},

directions: {
  title: "Directions & Getting Around",
  asking: {
    "Excuse me, where is...?":"Excusez-moi, où est... ?",
    "How do I get to...?":"Comment puis-je aller à... ?",
    "Can you tell me the way to...?":"Pouvez-vous m'indiquer le chemin pour... ?",
    "Is it far from here?":"C'est loin d'ici ?",
    "How far is it?":"C'est à quelle distance ?",
    "How long does it take to get there?":"Combien de temps faut-il pour y aller ?",
    "Can you show me on the map?":"Pouvez-vous me montrer sur la carte ?",
    "I'm lost":"Je suis perdu(e)",
    "Is there a... nearby?":"Y a-t-il un(e)... près d'ici ?"
  },
  giving_directions: {
    "Go straight":"Allez tout droit",
    "Turn left":"Tournez à gauche",
    "Turn right":"Tournez à droite",
    "Take the first street on the left":"Prenez la première rue à gauche",
    "Take the second street on the right":"Prenez la deuxième rue à droite",
    "At the corner":"Au coin",
    "At the traffic light":"Au feu",
    "At the roundabout":"Au rond-point",
    "At the intersection":"Au carrefour",
    "Cross the street":"Traversez la rue",
    "Cross the bridge":"Traversez le pont",
    "Go past the church":"Passez devant l'église",
    "It's on the left":"C'est à gauche",
    "It's on the right":"C'est à droite",
    "It's straight ahead":"C'est tout droit",
    "It's at the end of the street":"C'est au bout de la rue"
  },
  location: {
    "It's next to...":"C'est à côté de...",
    "It's across from...":"C'est en face de...",
    "It's behind...":"C'est derrière...",
    "It's in front of...":"C'est devant...",
    "It's near...":"C'est près de...",
    "It's between... and...":"C'est entre... et...",
    "About 5 minutes away":"À environ cinq minutes",
    "About 100 meters":"À environ cent mètres"
  },
  transport: {
    "Where is the train station?":"Où est la gare ?",
    "Where is the bus stop?":"Où est l'arrêt de bus ?",
    "Where is the metro station?":"Où est la station de métro ?",
    "Which line do I take?":"Quelle ligne dois-je prendre ?",
    "Where do I change?":"Où dois-je changer ?",
    "A ticket to..., please":"Un billet pour..., s'il vous plaît",
    "A return ticket":"Un aller-retour",
    "A single ticket":"Un aller simple",
    "What time is the next train?":"À quelle heure est le prochain train ?",
    "Which platform?":"Quel quai ?"
  }
},

hotel: {
  title: "At the Hotel",
  booking: {
    "I have a reservation":"J'ai une réservation",
    "I'd like to book a room":"Je voudrais réserver une chambre",
    "For how many nights?":"Pour combien de nuits ?",
    "From... to...":"Du... au...",
    "A single room":"Une chambre simple",
    "A double room":"Une chambre double",
    "A twin room":"Une chambre à deux lits",
    "With a bath":"Avec baignoire",
    "With a shower":"Avec douche",
    "With breakfast":"Avec petit déjeuner",
    "Half board":"En demi-pension",
    "Full board":"En pension complète",
    "How much per night?":"C'est combien la nuit ?",
    "Is breakfast included?":"Le petit déjeuner est-il inclus ?"
  },
  check_in: {
    "I'm checking in":"Je viens m'enregistrer",
    "Here's my passport":"Voici mon passeport",
    "What time is check-in?":"À quelle heure est l'enregistrement ?",
    "What time is check-out?":"À quelle heure est le départ ?",
    "Can I see the room?":"Puis-je voir la chambre ?",
    "My room number is...":"Mon numéro de chambre est...",
    "Where is the elevator?":"Où est l'ascenseur ?",
    "What floor?":"À quel étage ?",
    "Can I have a wake-up call?":"Puis-je avoir un réveil téléphonique ?",
    "At what time?":"À quelle heure ?"
  },
  services: {
    "Is there WiFi?":"Y a-t-il le WiFi ?",
    "What's the WiFi password?":"Quel est le mot de passe WiFi ?",
    "Can I have an extra pillow?":"Puis-je avoir un oreiller supplémentaire ?",
    "Can I have extra towels?":"Puis-je avoir des serviettes supplémentaires ?",
    "Room service, please":"Le service en chambre, s'il vous plaît",
    "Please clean my room":"Veuillez nettoyer ma chambre",
    "Do not disturb":"Ne pas déranger",
    "Where is the restaurant?":"Où est le restaurant ?",
    "Where is the pool?":"Où est la piscine ?",
    "Where is the gym?":"Où est la salle de sport ?"
  },
  problems: {
    "There's a problem with...":"Il y a un problème avec...",
    "The key doesn't work":"La clé ne fonctionne pas",
    "I locked myself out":"Je me suis enfermé(e) dehors",
    "The room is too noisy":"La chambre est trop bruyante",
    "The air conditioning doesn't work":"La climatisation ne fonctionne pas",
    "The heating doesn't work":"Le chauffage ne fonctionne pas",
    "There's no hot water":"Il n'y a pas d'eau chaude",
    "Can I change rooms?":"Puis-je changer de chambre ?",
    "I'd like to extend my stay":"Je voudrais prolonger mon séjour"
  }
},

emergency: {
  title: "Emergencies & Health",
  urgent: {
    "Help!":"Au secours ! / À l'aide !",
    "Call the police!":"Appelez la police !",
    "Call an ambulance!":"Appelez une ambulance !",
    "Call the fire department!":"Appelez les pompiers !",
    "There's been an accident":"Il y a eu un accident",
    "I need a doctor":"J'ai besoin d'un médecin",
    "It's an emergency":"C'est une urgence",
    "Fire!":"Au feu !",
    "Thief!":"Au voleur !",
    "Stop!":"Arrêtez !"
  },
  police: {
    "I want to report a theft":"Je veux signaler un vol",
    "I've been robbed":"J'ai été volé(e)",
    "My wallet was stolen":"On m'a volé mon portefeuille",
    "My passport was stolen":"On m'a volé mon passeport",
    "My bag was stolen":"On m'a volé mon sac",
    "I need to file a report":"Je dois faire une déclaration",
    "I've lost my...":"J'ai perdu mon/ma...",
    "Where is the police station?":"Où est le commissariat ?"
  },
  medical: {
    "I'm sick":"Je suis malade",
    "I don't feel well":"Je ne me sens pas bien",
    "I need medication":"J'ai besoin de médicaments",
    "I'm allergic to...":"Je suis allergique à...",
    "I have a headache":"J'ai mal à la tête",
    "I have a stomach ache":"J'ai mal au ventre",
    "I have a fever":"J'ai de la fièvre",
    "I have a cold":"J'ai un rhume",
    "I feel dizzy":"J'ai des vertiges",
    "I feel nauseous":"J'ai la nausée",
    "It hurts here":"J'ai mal ici",
    "I'm diabetic":"Je suis diabétique",
    "I'm pregnant":"Je suis enceinte",
    "I take this medication":"Je prends ce médicament",
    "Where is the hospital?":"Où est l'hôpital ?",
    "Where is the pharmacy?":"Où est la pharmacie ?",
    "I need a prescription":"J'ai besoin d'une ordonnance"
  }
},

conversation: {
  title: "Small Talk & Conversation",
  weather: {
    "What's the weather like?":"Quel temps fait-il ?",
    "It's nice weather":"Il fait beau",
    "It's bad weather":"Il fait mauvais",
    "It's hot":"Il fait chaud",
    "It's cold":"Il fait froid",
    "It's warm":"Il fait bon",
    "It's cool":"Il fait frais",
    "It's sunny":"Il fait soleil / Il y a du soleil",
    "It's raining":"Il pleut",
    "It's snowing":"Il neige",
    "It's windy":"Il y a du vent",
    "It's cloudy":"Il y a des nuages / C'est nuageux",
    "It's foggy":"Il y a du brouillard",
    "What's the forecast?":"Quelles sont les prévisions météo ?"
  },
  opinions: {
    "I think that...":"Je pense que... / Je crois que...",
    "In my opinion...":"À mon avis...",
    "I agree":"Je suis d'accord",
    "I disagree":"Je ne suis pas d'accord",
    "You're right":"Vous avez raison / Tu as raison",
    "I'm not sure":"Je ne suis pas sûr(e)",
    "I don't know":"Je ne sais pas",
    "Maybe":"Peut-être",
    "Definitely":"Certainement / Absolument",
    "I hope so":"J'espère que oui",
    "I don't think so":"Je ne crois pas"
  },
  reactions: {
    "Really?":"Vraiment ? / C'est vrai ?",
    "That's great!":"C'est super ! / C'est génial !",
    "That's too bad":"C'est dommage",
    "That's interesting":"C'est intéressant",
    "That's amazing!":"C'est incroyable !",
    "That's terrible":"C'est terrible",
    "How nice!":"Comme c'est gentil !",
    "How strange!":"Comme c'est bizarre !",
    "What a surprise!":"Quelle surprise !",
    "No way!":"Pas possible ! / Sans blague !"
  },
  celebrations: {
    "Congratulations!":"Félicitations !",
    "Good luck!":"Bonne chance !",
    "Happy birthday!":"Bon anniversaire ! / Joyeux anniversaire !",
    "Merry Christmas!":"Joyeux Noël !",
    "Happy New Year!":"Bonne année !",
    "Happy holidays!":"Bonnes fêtes !",
    "Happy Easter!":"Joyeuses Pâques !",
    "Best wishes!":"Meilleurs vœux !",
    "Get well soon!":"Bon rétablissement !",
    "Have a nice trip!":"Bon voyage !"
  },
  clarification: {
    "I don't understand":"Je ne comprends pas",
    "Can you repeat that?":"Pouvez-vous répéter ?",
    "Can you speak more slowly?":"Pouvez-vous parler plus lentement ?",
    "How do you say...?":"Comment dit-on... ?",
    "What does ... mean?":"Que veut dire ... ?",
    "Can you write it down?":"Pouvez-vous l'écrire ?",
    "Do you speak English?":"Parlez-vous anglais ?",
    "I speak a little French":"Je parle un peu français",
    "I'm learning French":"J'apprends le français",
    "How do you spell that?":"Comment ça s'écrit ?",
    "Could you explain?":"Pourriez-vous expliquer ?"
  },
  filler_words: {
    "Well...":"Eh bien... / Ben...",
    "So...":"Alors... / Donc...",
    "You know...":"Tu sais... / Vous savez...",
    "Actually...":"En fait...",
    "By the way...":"Au fait...",
    "Let me see...":"Voyons voir...",
    "Wait a moment":"Attendez un moment",
    "Let me think":"Laissez-moi réfléchir",
    "How can I put it...":"Comment dire...",
    "In other words...":"Autrement dit..."
  }
},

phone_email: {
  title: "Phone & Email",
  phone: {
    "Hello? (answering)":"Allô ?",
    "Who's speaking?":"Qui est à l'appareil ?",
    "This is...":"C'est... / ...à l'appareil",
    "Can I speak to...?":"Puis-je parler à... ?",
    "One moment, please":"Un instant, s'il vous plaît",
    "Please hold":"Ne quittez pas",
    "He/She is not available":"Il/Elle n'est pas disponible",
    "Can I leave a message?":"Puis-je laisser un message ?",
    "Can you call back later?":"Pouvez-vous rappeler plus tard ?",
    "I'll call back":"Je rappellerai",
    "You have the wrong number":"Vous avez fait un faux numéro",
    "The line is busy":"La ligne est occupée",
    "I can't hear you":"Je ne vous entends pas",
    "Can you speak up?":"Pouvez-vous parler plus fort ?"
  },
  email: {
    "Dear Sir/Madam":"Madame, Monsieur",
    "Dear Mr./Mrs....":"Cher Monsieur / Chère Madame",
    "I am writing to...":"Je vous écris pour...",
    "Further to our conversation":"Suite à notre conversation",
    "Please find attached":"Veuillez trouver ci-joint",
    "Thank you for your email":"Merci pour votre email",
    "I look forward to hearing from you":"Dans l'attente de votre réponse",
    "Best regards":"Cordialement",
    "Sincerely":"Sincèrement / Bien à vous",
    "Kind regards":"Bien cordialement"
  }
},

work: {
  title: "Work & Business",
  meetings: {
    "Let's schedule a meeting":"Organisons une réunion",
    "Are you available on...?":"Êtes-vous disponible le... ?",
    "The meeting is at...":"La réunion est à...",
    "Can we postpone the meeting?":"Pouvons-nous reporter la réunion ?",
    "I'll send you the agenda":"Je vous enverrai l'ordre du jour",
    "Let's get started":"Commençons",
    "Any questions?":"Des questions ?",
    "To summarize...":"Pour résumer...",
    "Let's take a break":"Faisons une pause",
    "Meeting adjourned":"La réunion est levée"
  },
  office: {
    "I have a deadline":"J'ai une date limite / une échéance",
    "I need this by...":"J'ai besoin de ceci pour...",
    "Can you send me the file?":"Pouvez-vous m'envoyer le fichier ?",
    "I'll finish it today":"Je le finirai aujourd'hui",
    "I'm working on it":"J'y travaille",
    "Let me check":"Laissez-moi vérifier",
    "I'll get back to you":"Je vous recontacterai",
    "Sorry for the delay":"Désolé(e) pour le retard"
  }
}

};
