// ============================================================
// data-phrases.js — French Phrases Database
// ============================================================

const PHRASES = {
  categories: [
    // --------------------------------------------------------
    // 1. Greetings & Introductions
    // --------------------------------------------------------
    {
      id: 'greetings',
      name: 'Greetings & Introductions',
      icon: '👋',
      color: '#6366f1',
      phrases: [
        { fr: 'Bonjour', en: 'Hello / Good morning', context: 'Formal greeting used until evening.' },
        { fr: 'Bonsoir', en: 'Good evening', context: 'Used from late afternoon onward.' },
        { fr: 'Salut', en: 'Hi / Hey', context: 'Informal greeting among friends.' },
        { fr: 'Comment allez-vous ?', en: 'How are you?', context: 'Formal. Use "vous" with strangers or elders.' },
        { fr: 'Comment ça va ?', en: 'How are you? / How is it going?', context: 'Informal. Very common in everyday speech.' },
        { fr: 'Ça va bien, merci.', en: "I'm fine, thank you.", context: 'Standard reply to "ça va?"' },
        { fr: 'Je m\'appelle...', en: 'My name is...', context: 'The standard way to introduce yourself.' },
        { fr: 'Comment vous appelez-vous ?', en: 'What is your name?', context: 'Formal version.' },
        { fr: 'Tu t\'appelles comment ?', en: 'What is your name?', context: 'Informal version.' },
        { fr: 'Enchanté(e)', en: 'Nice to meet you', context: 'Used when meeting someone for the first time.' },
        { fr: 'Ravi(e) de vous rencontrer', en: 'Delighted to meet you', context: 'More formal than "enchanté."' },
        { fr: 'Je suis de...', en: 'I am from...', context: 'Used to say where you come from.' },
        { fr: 'J\'habite à...', en: 'I live in...', context: 'Used to state where you currently live.' },
        { fr: 'Au revoir', en: 'Goodbye', context: 'Standard farewell. Appropriate in all situations.' },
        { fr: 'À bientôt', en: 'See you soon', context: 'Friendly farewell implying you will meet again.' },
        { fr: 'À demain', en: 'See you tomorrow', context: 'Used when you know you will see the person the next day.' },
        { fr: 'Bonne journée', en: 'Have a good day', context: 'Polite way to end a daytime interaction.' },
        { fr: 'Bonne soirée', en: 'Have a good evening', context: 'Said when parting in the evening.' },
        { fr: 'Bonne nuit', en: 'Good night', context: 'Said before going to sleep.' },
        { fr: 'Salut, à plus !', en: 'Bye, see you later!', context: 'Very informal farewell among friends.' }
      ]
    },

    // --------------------------------------------------------
    // 2. Polite Expressions & Manners
    // --------------------------------------------------------
    {
      id: 'polite',
      name: 'Polite Expressions & Manners',
      icon: '🤝',
      color: '#a855f7',
      phrases: [
        { fr: 'S\'il vous plaît', en: 'Please (formal)', context: 'Use "vous" form with strangers, elders, professionals.' },
        { fr: 'S\'il te plaît', en: 'Please (informal)', context: 'Use "tu" form with friends and family.' },
        { fr: 'Merci', en: 'Thank you', context: 'Universal. Add "beaucoup" for emphasis.' },
        { fr: 'Merci beaucoup', en: 'Thank you very much', context: 'Shows extra gratitude.' },
        { fr: 'De rien', en: 'You\'re welcome', context: 'The most common response to "merci."' },
        { fr: 'Je vous en prie', en: 'You\'re welcome (formal)', context: 'Very polite. Used in formal situations.' },
        { fr: 'Il n\'y a pas de quoi', en: 'Don\'t mention it', context: 'A polite way to downplay your help.' },
        { fr: 'Excusez-moi', en: 'Excuse me (formal)', context: 'Used to get attention or apologize politely.' },
        { fr: 'Excuse-moi', en: 'Excuse me (informal)', context: 'Informal version for friends.' },
        { fr: 'Pardon', en: 'Sorry / Excuse me', context: 'Used when bumping into someone or to get attention.' },
        { fr: 'Je suis désolé(e)', en: 'I am sorry', context: 'A genuine apology for something you did.' },
        { fr: 'Ce n\'est pas grave', en: 'It\'s not a big deal', context: 'Used to reassure someone who is apologizing.' },
        { fr: 'Pas de problème', en: 'No problem', context: 'Casual way to accept an apology or grant a favor.' },
        { fr: 'Avec plaisir', en: 'With pleasure', context: 'Polite way to agree to do something.' },
        { fr: 'Je vous remercie', en: 'I thank you (formal)', context: 'Very formal expression of gratitude.' },
        { fr: 'Bienvenue', en: 'Welcome', context: 'Used to welcome someone.' },
        { fr: 'Bon appétit', en: 'Enjoy your meal', context: 'Said before eating. Common in France.' },
        { fr: 'Santé !', en: 'Cheers!', context: 'Said when raising glasses for a toast.' },
        { fr: 'Félicitations !', en: 'Congratulations!', context: 'Used for achievements, weddings, births, etc.' },
        { fr: 'Bonne chance', en: 'Good luck', context: 'Wishing someone luck before an event.' }
      ]
    },

    // --------------------------------------------------------
    // 3. Asking for Information
    // --------------------------------------------------------
    {
      id: 'information',
      name: 'Asking for Information',
      icon: '❓',
      color: '#0ea5e9',
      phrases: [
        { fr: 'Où est... ?', en: 'Where is...?', context: 'The basic way to ask for a location.' },
        { fr: 'Où se trouve... ?', en: 'Where is... located?', context: 'Slightly more formal version.' },
        { fr: 'Qu\'est-ce que c\'est ?', en: 'What is this?', context: 'Asking to identify something.' },
        { fr: 'Qu\'est-ce que ça veut dire ?', en: 'What does that mean?', context: 'Useful for language learners.' },
        { fr: 'Comment dit-on... en français ?', en: 'How do you say... in French?', context: 'Essential for language practice.' },
        { fr: 'Pouvez-vous répéter, s\'il vous plaît ?', en: 'Can you repeat, please?', context: 'Formal. Essential when you did not hear clearly.' },
        { fr: 'Pouvez-vous parler plus lentement ?', en: 'Can you speak more slowly?', context: 'Formal. Very useful for learners.' },
        { fr: 'Je ne comprends pas', en: 'I don\'t understand', context: 'Direct way to signal confusion.' },
        { fr: 'Est-ce que vous parlez anglais ?', en: 'Do you speak English?', context: 'Useful fallback question for travelers.' },
        { fr: 'Quelle heure est-il ?', en: 'What time is it?', context: 'The standard way to ask the time.' },
        { fr: 'C\'est combien ?', en: 'How much is it?', context: 'Asking the price of something.' },
        { fr: 'Quel est le prix ?', en: 'What is the price?', context: 'More formal way to ask the price.' },
        { fr: 'Il y a... ?', en: 'Is there...? / Are there...?', context: 'Asking about the existence of something nearby.' },
        { fr: 'Est-ce qu\'il y a un(e)... près d\'ici ?', en: 'Is there a... near here?', context: 'Asking for nearby locations or services.' },
        { fr: 'Pourquoi ?', en: 'Why?', context: 'Asking for a reason.' },
        { fr: 'Comment ?', en: 'How? / What? (asking to repeat)', context: 'Can mean "how" or be a polite "what did you say?"' },
        { fr: 'Quand est-ce que... ?', en: 'When does...?', context: 'Asking about timing.' },
        { fr: 'Qui est-ce ?', en: 'Who is it?', context: 'Asking about a person\'s identity.' },
        { fr: 'Vous pouvez m\'aider ?', en: 'Can you help me?', context: 'Polite request for assistance.' },
        { fr: 'Je cherche...', en: 'I am looking for...', context: 'Useful when searching for a place or item.' }
      ]
    },

    // --------------------------------------------------------
    // 4. At a Restaurant
    // --------------------------------------------------------
    {
      id: 'restaurant',
      name: 'At a Restaurant',
      icon: '🍽️',
      color: '#ef4444',
      phrases: [
        { fr: 'Une table pour deux, s\'il vous plaît', en: 'A table for two, please', context: 'Requesting a table upon arrival.' },
        { fr: 'Je voudrais réserver une table', en: 'I would like to reserve a table', context: 'Making a reservation.' },
        { fr: 'La carte, s\'il vous plaît', en: 'The menu, please', context: 'Asking for the menu.' },
        { fr: 'Qu\'est-ce que vous recommandez ?', en: 'What do you recommend?', context: 'Asking the waiter for a suggestion.' },
        { fr: 'Quel est le plat du jour ?', en: 'What is the dish of the day?', context: 'Asking about the daily special.' },
        { fr: 'Je voudrais...', en: 'I would like...', context: 'The polite way to order food or drinks.' },
        { fr: 'Je vais prendre...', en: 'I will have...', context: 'Common ordering phrase in restaurants.' },
        { fr: 'Pour moi, ce sera...', en: 'For me, it will be...', context: 'Another natural way to order.' },
        { fr: 'Comme entrée / plat / dessert', en: 'As a starter / main / dessert', context: 'Specifying the course when ordering.' },
        { fr: 'C\'est quoi exactement ?', en: 'What exactly is that?', context: 'Asking about an unfamiliar dish.' },
        { fr: 'Je suis allergique à...', en: 'I am allergic to...', context: 'Important for food safety.' },
        { fr: 'Sans gluten, s\'il vous plaît', en: 'Gluten-free, please', context: 'Requesting dietary accommodation.' },
        { fr: 'Je suis végétarien(ne)', en: 'I am vegetarian', context: 'Informing staff of dietary preference.' },
        { fr: 'L\'addition, s\'il vous plaît', en: 'The check, please', context: 'Asking for the bill at the end of the meal.' },
        { fr: 'Est-ce que le service est compris ?', en: 'Is the service charge included?', context: 'In France, it usually is.' },
        { fr: 'C\'était délicieux', en: 'It was delicious', context: 'Complimenting the meal.' },
        { fr: 'Un verre de vin rouge / blanc', en: 'A glass of red / white wine', context: 'Ordering wine.' },
        { fr: 'Une carafe d\'eau, s\'il vous plaît', en: 'A jug of water, please', context: 'Requesting free tap water in France.' },
        { fr: 'Encore un peu de pain, s\'il vous plaît', en: 'A little more bread, please', context: 'Bread is often free and refillable in France.' },
        { fr: 'Un café, s\'il vous plaît', en: 'A coffee, please', context: 'Ordering coffee, typically an espresso in France.' }
      ]
    },

    // --------------------------------------------------------
    // 5. Shopping
    // --------------------------------------------------------
    {
      id: 'shopping',
      name: 'Shopping',
      icon: '🛍️',
      color: '#f59e0b',
      phrases: [
        { fr: 'Je regarde, merci', en: 'I\'m just looking, thanks', context: 'When a shop assistant offers help but you are browsing.' },
        { fr: 'Est-ce que vous avez... ?', en: 'Do you have...?', context: 'Asking about product availability.' },
        { fr: 'Je cherche...', en: 'I\'m looking for...', context: 'Telling the assistant what you need.' },
        { fr: 'Quelle taille ?', en: 'What size?', context: 'Asking or being asked about clothing size.' },
        { fr: 'Est-ce que je peux essayer ?', en: 'Can I try this on?', context: 'Asking to use the fitting room.' },
        { fr: 'Où est la cabine d\'essayage ?', en: 'Where is the fitting room?', context: 'Locating the fitting room.' },
        { fr: 'C\'est trop grand / petit', en: 'It\'s too big / small', context: 'Describing fit issues.' },
        { fr: 'Vous l\'avez en d\'autres couleurs ?', en: 'Do you have it in other colors?', context: 'Asking about color options.' },
        { fr: 'Ça coûte combien ?', en: 'How much does it cost?', context: 'Informal way to ask the price.' },
        { fr: 'C\'est en solde ?', en: 'Is it on sale?', context: 'Asking about discounts.' },
        { fr: 'Est-ce que vous faites une réduction ?', en: 'Do you offer a discount?', context: 'Negotiating a lower price.' },
        { fr: 'Je le / la prends', en: 'I\'ll take it', context: 'Deciding to buy an item.' },
        { fr: 'Je peux payer par carte ?', en: 'Can I pay by card?', context: 'Asking about payment methods.' },
        { fr: 'Vous acceptez les espèces ?', en: 'Do you accept cash?', context: 'Asking about cash payment.' },
        { fr: 'Est-ce que je peux avoir un sac ?', en: 'Can I have a bag?', context: 'Bags may cost extra in France.' },
        { fr: 'Je voudrais un reçu, s\'il vous plaît', en: 'I would like a receipt, please', context: 'Asking for proof of purchase.' },
        { fr: 'Est-ce que je peux échanger ceci ?', en: 'Can I exchange this?', context: 'Returning or exchanging an item.' },
        { fr: 'Je voudrais être remboursé(e)', en: 'I would like a refund', context: 'Requesting your money back.' },
        { fr: 'À quelle heure fermez-vous ?', en: 'What time do you close?', context: 'Asking about closing time.' },
        { fr: 'Merci, bonne journée', en: 'Thank you, have a good day', context: 'Polite farewell when leaving a shop.' }
      ]
    },

    // --------------------------------------------------------
    // 6. Travel & Directions
    // --------------------------------------------------------
    {
      id: 'travel',
      name: 'Travel & Directions',
      icon: '✈️',
      color: '#22c55e',
      phrases: [
        { fr: 'Où est la gare ?', en: 'Where is the train station?', context: 'Asking for the station location.' },
        { fr: 'Où est l\'arrêt de bus ?', en: 'Where is the bus stop?', context: 'Finding public transportation.' },
        { fr: 'Je voudrais un billet pour...', en: 'I would like a ticket to...', context: 'Buying a train or bus ticket.' },
        { fr: 'Un aller simple / Un aller-retour', en: 'A one-way ticket / A round trip', context: 'Specifying ticket type.' },
        { fr: 'À quelle heure part le prochain train ?', en: 'What time does the next train leave?', context: 'Asking about departure time.' },
        { fr: 'De quel quai part le train ?', en: 'Which platform does the train leave from?', context: 'Finding the right platform.' },
        { fr: 'Le train a du retard ?', en: 'Is the train delayed?', context: 'Checking for schedule changes.' },
        { fr: 'Excusez-moi, pour aller à... ?', en: 'Excuse me, how do I get to...?', context: 'The classic way to ask for directions.' },
        { fr: 'C\'est loin d\'ici ?', en: 'Is it far from here?', context: 'Gauging the distance.' },
        { fr: 'C\'est à combien de minutes à pied ?', en: 'How many minutes on foot?', context: 'Asking about walking time.' },
        { fr: 'Tournez à gauche / à droite', en: 'Turn left / right', context: 'Understanding directions someone gives you.' },
        { fr: 'Allez tout droit', en: 'Go straight ahead', context: 'A common direction given by locals.' },
        { fr: 'C\'est au coin de la rue', en: 'It\'s on the street corner', context: 'Indicating a nearby location.' },
        { fr: 'C\'est en face de...', en: 'It\'s across from...', context: 'Using a landmark to describe location.' },
        { fr: 'C\'est à côté de...', en: 'It\'s next to...', context: 'Describing proximity.' },
        { fr: 'Je suis perdu(e)', en: 'I am lost', context: 'Letting someone know you need help navigating.' },
        { fr: 'Pouvez-vous me montrer sur la carte ?', en: 'Can you show me on the map?', context: 'Asking for visual directions.' },
        { fr: 'Où puis-je louer une voiture ?', en: 'Where can I rent a car?', context: 'Arranging car rental.' },
        { fr: 'Le plein, s\'il vous plaît', en: 'Fill it up, please', context: 'At a gas station.' },
        { fr: 'Y a-t-il un parking près d\'ici ?', en: 'Is there a parking lot near here?', context: 'Finding parking.' }
      ]
    },

    // --------------------------------------------------------
    // 7. Hotel & Accommodation
    // --------------------------------------------------------
    {
      id: 'hotel',
      name: 'Hotel & Accommodation',
      icon: '🏨',
      color: '#64748b',
      phrases: [
        { fr: 'J\'ai une réservation au nom de...', en: 'I have a reservation under the name...', context: 'Checking in at a hotel.' },
        { fr: 'Je voudrais réserver une chambre', en: 'I would like to book a room', context: 'Making a hotel reservation.' },
        { fr: 'Une chambre simple / double', en: 'A single / double room', context: 'Specifying room type.' },
        { fr: 'Pour combien de nuits ?', en: 'For how many nights?', context: 'A question the receptionist may ask.' },
        { fr: 'Pour deux nuits, s\'il vous plaît', en: 'For two nights, please', context: 'Specifying your stay duration.' },
        { fr: 'C\'est combien par nuit ?', en: 'How much is it per night?', context: 'Asking about the room rate.' },
        { fr: 'Le petit-déjeuner est inclus ?', en: 'Is breakfast included?', context: 'Checking if breakfast comes with the room.' },
        { fr: 'À quelle heure est le petit-déjeuner ?', en: 'What time is breakfast?', context: 'Planning your morning.' },
        { fr: 'Avez-vous le Wi-Fi ?', en: 'Do you have Wi-Fi?', context: 'Asking about internet access.' },
        { fr: 'Quel est le mot de passe du Wi-Fi ?', en: 'What is the Wi-Fi password?', context: 'Getting the internet code.' },
        { fr: 'La chambre a la climatisation ?', en: 'Does the room have air conditioning?', context: 'Asking about room amenities.' },
        { fr: 'Pouvez-vous me donner la clé ?', en: 'Can you give me the key?', context: 'Requesting your room key.' },
        { fr: 'L\'ascenseur est où ?', en: 'Where is the elevator?', context: 'Finding the elevator in the hotel.' },
        { fr: 'Pouvez-vous me réveiller à... ?', en: 'Can you wake me up at...?', context: 'Requesting a wake-up call.' },
        { fr: 'Il y a un problème avec la chambre', en: 'There is a problem with the room', context: 'Reporting an issue to the front desk.' },
        { fr: 'Je voudrais changer de chambre', en: 'I would like to change rooms', context: 'Requesting a different room.' },
        { fr: 'À quelle heure est le check-out ?', en: 'What time is checkout?', context: 'Asking about departure time.' },
        { fr: 'Je voudrais prolonger mon séjour', en: 'I would like to extend my stay', context: 'Staying additional nights.' },
        { fr: 'Pouvez-vous garder mes bagages ?', en: 'Can you keep my luggage?', context: 'Storing bags after checkout.' },
        { fr: 'Pouvez-vous appeler un taxi ?', en: 'Can you call a taxi?', context: 'Requesting transportation.' }
      ]
    },

    // --------------------------------------------------------
    // 8. Health & Emergency
    // --------------------------------------------------------
    {
      id: 'health',
      name: 'Health & Emergency',
      icon: '🏥',
      color: '#dc2626',
      phrases: [
        { fr: 'Au secours !', en: 'Help!', context: 'Emergency cry for help.' },
        { fr: 'Appelez une ambulance !', en: 'Call an ambulance!', context: 'Requesting emergency medical services.' },
        { fr: 'Appelez la police !', en: 'Call the police!', context: 'Requesting law enforcement.' },
        { fr: 'J\'ai besoin d\'un médecin', en: 'I need a doctor', context: 'Requesting medical attention.' },
        { fr: 'Où est l\'hôpital le plus proche ?', en: 'Where is the nearest hospital?', context: 'Finding emergency medical care.' },
        { fr: 'Où est la pharmacie ?', en: 'Where is the pharmacy?', context: 'Pharmacies in France can provide basic medical advice.' },
        { fr: 'J\'ai mal à la tête', en: 'I have a headache', context: 'Describing head pain.' },
        { fr: 'J\'ai mal au ventre', en: 'I have a stomachache', context: 'Describing stomach pain.' },
        { fr: 'J\'ai mal à la gorge', en: 'I have a sore throat', context: 'Describing throat pain.' },
        { fr: 'J\'ai de la fièvre', en: 'I have a fever', context: 'Reporting a high temperature.' },
        { fr: 'Je me sens mal', en: 'I feel unwell', context: 'General expression of feeling sick.' },
        { fr: 'Je suis allergique à...', en: 'I am allergic to...', context: 'Communicating allergies to medical staff.' },
        { fr: 'Je prends des médicaments', en: 'I take medication', context: 'Informing doctors about current medication.' },
        { fr: 'J\'ai besoin d\'une ordonnance', en: 'I need a prescription', context: 'Requesting a prescription from a doctor.' },
        { fr: 'Avez-vous quelque chose pour... ?', en: 'Do you have something for...?', context: 'Asking the pharmacist for a remedy.' },
        { fr: 'C\'est urgent', en: 'It\'s urgent', context: 'Emphasizing the seriousness of the situation.' },
        { fr: 'Je me suis blessé(e)', en: 'I injured myself', context: 'Reporting a physical injury.' },
        { fr: 'J\'ai perdu mon passeport', en: 'I lost my passport', context: 'A common travel emergency.' },
        { fr: 'On m\'a volé mon portefeuille', en: 'My wallet was stolen', context: 'Reporting a theft.' },
        { fr: 'Je voudrais contacter mon ambassade', en: 'I would like to contact my embassy', context: 'Seeking consular help abroad.' }
      ]
    },

    // --------------------------------------------------------
    // 9. Making Plans & Appointments
    // --------------------------------------------------------
    {
      id: 'plans',
      name: 'Making Plans & Appointments',
      icon: '📅',
      color: '#8b5cf6',
      phrases: [
        { fr: 'Tu es libre ce soir ?', en: 'Are you free tonight?', context: 'Informal. Proposing to meet up.' },
        { fr: 'Êtes-vous disponible ?', en: 'Are you available?', context: 'Formal. Used professionally.' },
        { fr: 'On se retrouve où ?', en: 'Where shall we meet?', context: 'Setting a meeting point.' },
        { fr: 'On se retrouve à quelle heure ?', en: 'What time shall we meet?', context: 'Setting a meeting time.' },
        { fr: 'Ça te dit d\'aller au cinéma ?', en: 'Do you fancy going to the cinema?', context: 'Casual way to suggest an activity.' },
        { fr: 'Je voudrais prendre rendez-vous', en: 'I would like to make an appointment', context: 'Formal. For doctors, offices, etc.' },
        { fr: 'Est-ce que je peux déplacer mon rendez-vous ?', en: 'Can I reschedule my appointment?', context: 'Changing an existing appointment.' },
        { fr: 'Je dois annuler notre rendez-vous', en: 'I have to cancel our appointment', context: 'Cancelling plans.' },
        { fr: 'Ça marche !', en: 'That works! / Deal!', context: 'Informal agreement to a plan.' },
        { fr: 'D\'accord, c\'est noté', en: 'OK, noted', context: 'Confirming you have registered the information.' },
        { fr: 'C\'est à quelle adresse ?', en: 'What is the address?', context: 'Asking for a location.' },
        { fr: 'Je serai là à...', en: 'I will be there at...', context: 'Confirming your arrival time.' },
        { fr: 'Je suis en retard, désolé(e)', en: 'I\'m late, sorry', context: 'Apologizing for being late.' },
        { fr: 'Je suis en avance', en: 'I\'m early', context: 'Noting you arrived before the agreed time.' },
        { fr: 'On remet ça à quand ?', en: 'When shall we reschedule?', context: 'Informal. Suggesting a new date.' },
        { fr: 'Je vous confirme pour...', en: 'I confirm for...', context: 'Formal confirmation of a date or appointment.' },
        { fr: 'Qu\'est-ce qu\'on fait ce week-end ?', en: 'What are we doing this weekend?', context: 'Casual planning with friends.' },
        { fr: 'Je propose que l\'on se voie...', en: 'I suggest we meet...', context: 'Making a suggestion to see each other.' }
      ]
    },

    // --------------------------------------------------------
    // 10. On the Phone
    // --------------------------------------------------------
    {
      id: 'phone',
      name: 'On the Phone',
      icon: '📞',
      color: '#14b8a6',
      phrases: [
        { fr: 'Allô ?', en: 'Hello?', context: 'The standard way to answer the phone in French.' },
        { fr: 'Qui est à l\'appareil ?', en: 'Who is speaking?', context: 'Formal way to ask who is calling.' },
        { fr: 'C\'est... à l\'appareil', en: 'This is... speaking', context: 'Identifying yourself on the phone.' },
        { fr: 'Je voudrais parler à...', en: 'I would like to speak to...', context: 'Asking for a specific person.' },
        { fr: 'Est-ce que... est disponible ?', en: 'Is... available?', context: 'Checking if someone can take the call.' },
        { fr: 'Un instant, s\'il vous plaît', en: 'One moment, please', context: 'Asking the caller to wait.' },
        { fr: 'Ne quittez pas', en: 'Hold on / Don\'t hang up', context: 'Asking someone to stay on the line.' },
        { fr: 'Pouvez-vous rappeler plus tard ?', en: 'Can you call back later?', context: 'Asking someone to call again.' },
        { fr: 'Je rappellerai plus tard', en: 'I will call back later', context: 'Saying you will call again.' },
        { fr: 'Vous pouvez laisser un message', en: 'You can leave a message', context: 'Offering to take a message.' },
        { fr: 'Pouvez-vous lui transmettre un message ?', en: 'Can you pass on a message to him/her?', context: 'Asking someone to relay information.' },
        { fr: 'Je n\'ai pas de réseau', en: 'I have no signal', context: 'Explaining poor phone connectivity.' },
        { fr: 'Je vous entends mal', en: 'I can\'t hear you well', context: 'Indicating poor call quality.' },
        { fr: 'La ligne a été coupée', en: 'The line was cut off', context: 'Explaining a dropped call.' },
        { fr: 'Quel est votre numéro de téléphone ?', en: 'What is your phone number?', context: 'Asking for contact information.' },
        { fr: 'Je vous envoie un SMS', en: 'I\'ll send you a text message', context: 'Offering to text instead.' },
        { fr: 'Merci d\'avoir appelé', en: 'Thank you for calling', context: 'Polite way to end a professional call.' },
        { fr: 'C\'est de la part de qui ?', en: 'Who is calling?', context: 'Asking the identity of the caller.' }
      ]
    },

    // --------------------------------------------------------
    // 11. Expressing Feelings & Opinions
    // --------------------------------------------------------
    {
      id: 'feelings',
      name: 'Expressing Feelings & Opinions',
      icon: '💭',
      color: '#ec4899',
      phrases: [
        { fr: 'Je suis content(e)', en: 'I am happy', context: 'Expressing happiness.' },
        { fr: 'Je suis triste', en: 'I am sad', context: 'Expressing sadness.' },
        { fr: 'Je suis fatigué(e)', en: 'I am tired', context: 'Expressing fatigue.' },
        { fr: 'Je suis en colère', en: 'I am angry', context: 'Expressing anger.' },
        { fr: 'J\'ai peur', en: 'I am scared', context: 'Expressing fear.' },
        { fr: 'Je m\'ennuie', en: 'I am bored', context: 'Expressing boredom.' },
        { fr: 'Je suis surpris(e)', en: 'I am surprised', context: 'Expressing surprise.' },
        { fr: 'Je suis stressé(e)', en: 'I am stressed', context: 'Expressing stress or anxiety.' },
        { fr: 'C\'est génial !', en: 'That\'s great!', context: 'Enthusiastic positive reaction.' },
        { fr: 'C\'est nul', en: 'That\'s rubbish', context: 'Informal negative reaction.' },
        { fr: 'Ça m\'énerve', en: 'That annoys me', context: 'Expressing irritation.' },
        { fr: 'J\'en ai marre', en: 'I\'m fed up', context: 'Informal expression of exasperation.' },
        { fr: 'Je m\'en fiche', en: 'I don\'t care', context: 'Informal expression of indifference.' },
        { fr: 'Je suis d\'accord', en: 'I agree', context: 'Expressing agreement.' },
        { fr: 'Je ne suis pas d\'accord', en: 'I disagree', context: 'Expressing disagreement.' },
        { fr: 'À mon avis...', en: 'In my opinion...', context: 'Introducing a personal viewpoint.' },
        { fr: 'Je trouve que...', en: 'I think that... / I find that...', context: 'Sharing an opinion or impression.' },
        { fr: 'Ça me plaît', en: 'I like it', context: 'Expressing that something pleases you.' },
        { fr: 'Ça ne me plaît pas', en: 'I don\'t like it', context: 'Expressing displeasure.' },
        { fr: 'Quelle bonne nouvelle !', en: 'What great news!', context: 'Reacting to positive information.' }
      ]
    },

    // --------------------------------------------------------
    // 12. At School / Work
    // --------------------------------------------------------
    {
      id: 'school_work',
      name: 'At School / Work',
      icon: '💼',
      color: '#0284c7',
      phrases: [
        { fr: 'Quelle est votre profession ?', en: 'What is your profession?', context: 'Formal way to ask about someone\'s job.' },
        { fr: 'Qu\'est-ce que vous faites dans la vie ?', en: 'What do you do for a living?', context: 'Common conversational question.' },
        { fr: 'Je travaille comme...', en: 'I work as a...', context: 'Stating your occupation.' },
        { fr: 'Je suis étudiant(e)', en: 'I am a student', context: 'Identifying yourself as a student.' },
        { fr: 'J\'étudie le / la...', en: 'I study...', context: 'Saying what subject you are studying.' },
        { fr: 'J\'ai une réunion à...', en: 'I have a meeting at...', context: 'Mentioning a scheduled meeting.' },
        { fr: 'Est-ce que vous avez reçu mon e-mail ?', en: 'Did you receive my email?', context: 'Following up on communication.' },
        { fr: 'Je vous enverrai un rapport', en: 'I will send you a report', context: 'Professional communication about deliverables.' },
        { fr: 'La date limite est le...', en: 'The deadline is...', context: 'Communicating a deadline.' },
        { fr: 'Je suis en congé', en: 'I am on leave / vacation', context: 'Indicating time off from work.' },
        { fr: 'J\'ai un examen demain', en: 'I have an exam tomorrow', context: 'Mentioning an upcoming test.' },
        { fr: 'J\'ai réussi / échoué à l\'examen', en: 'I passed / failed the exam', context: 'Sharing exam results.' },
        { fr: 'Je fais un stage', en: 'I am doing an internship', context: 'Describing an internship.' },
        { fr: 'Mon collègue / Ma collègue', en: 'My colleague (m/f)', context: 'Referring to a coworker.' },
        { fr: 'Le bureau est fermé', en: 'The office is closed', context: 'Stating office availability.' },
        { fr: 'Je cherche un emploi', en: 'I am looking for a job', context: 'Stating job search status.' },
        { fr: 'J\'ai postulé pour un poste', en: 'I applied for a position', context: 'Discussing a job application.' },
        { fr: 'Quelles sont les heures de travail ?', en: 'What are the working hours?', context: 'Asking about work schedule.' }
      ]
    },

    // --------------------------------------------------------
    // 13. Weather Conversations
    // --------------------------------------------------------
    {
      id: 'weather',
      name: 'Weather Conversations',
      icon: '🌦️',
      color: '#38bdf8',
      phrases: [
        { fr: 'Quel temps fait-il ?', en: 'What is the weather like?', context: 'The standard question about weather.' },
        { fr: 'Il fait beau', en: 'The weather is nice', context: 'Describing good weather.' },
        { fr: 'Il fait mauvais', en: 'The weather is bad', context: 'Describing poor weather.' },
        { fr: 'Il fait chaud', en: 'It\'s hot', context: 'Describing warm or hot weather.' },
        { fr: 'Il fait froid', en: 'It\'s cold', context: 'Describing cold weather.' },
        { fr: 'Il pleut', en: 'It\'s raining', context: 'Stating that it is raining.' },
        { fr: 'Il neige', en: 'It\'s snowing', context: 'Stating that it is snowing.' },
        { fr: 'Il y a du vent', en: 'It\'s windy', context: 'Describing windy conditions.' },
        { fr: 'Il y a du soleil', en: 'It\'s sunny', context: 'Describing sunny weather.' },
        { fr: 'Il y a des nuages', en: 'It\'s cloudy', context: 'Describing overcast conditions.' },
        { fr: 'Il y a du brouillard', en: 'It\'s foggy', context: 'Describing foggy conditions.' },
        { fr: 'Il y a un orage', en: 'There is a storm', context: 'Describing a thunderstorm.' },
        { fr: 'La météo annonce de la pluie', en: 'The forecast says rain', context: 'Referring to the weather forecast.' },
        { fr: 'Quelle chaleur !', en: 'What heat! / It\'s so hot!', context: 'Exclamation about hot weather.' },
        { fr: 'Quel froid !', en: 'How cold it is!', context: 'Exclamation about cold weather.' },
        { fr: 'Il fait doux aujourd\'hui', en: 'It\'s mild today', context: 'Describing pleasantly warm weather.' },
        { fr: 'Le temps va changer', en: 'The weather is going to change', context: 'Predicting a weather shift.' },
        { fr: 'Il fait combien de degrés ?', en: 'How many degrees is it?', context: 'Asking about the temperature.' }
      ]
    },

    // --------------------------------------------------------
    // 14. Small Talk & Socializing
    // --------------------------------------------------------
    {
      id: 'social',
      name: 'Small Talk & Socializing',
      icon: '🗣️',
      color: '#d946ef',
      phrases: [
        { fr: 'Quoi de neuf ?', en: 'What\'s new?', context: 'Casual conversation opener.' },
        { fr: 'Qu\'est-ce que tu fais ce week-end ?', en: 'What are you doing this weekend?', context: 'Asking about weekend plans.' },
        { fr: 'Tu as passé un bon week-end ?', en: 'Did you have a good weekend?', context: 'Monday small talk classic.' },
        { fr: 'Comment ça se passe ?', en: 'How\'s it going?', context: 'General check-in question.' },
        { fr: 'Ça fait longtemps !', en: 'It\'s been a long time!', context: 'Said when reuniting after a long absence.' },
        { fr: 'Tu viens d\'où ?', en: 'Where are you from?', context: 'Asking about someone\'s origin.' },
        { fr: 'Qu\'est-ce que tu fais dans la vie ?', en: 'What do you do for a living?', context: 'Common get-to-know-you question.' },
        { fr: 'Tu as des frères et sœurs ?', en: 'Do you have siblings?', context: 'Asking about family.' },
        { fr: 'Qu\'est-ce que tu aimes faire ?', en: 'What do you like to do?', context: 'Asking about hobbies.' },
        { fr: 'J\'adore la musique / le sport / la cuisine', en: 'I love music / sports / cooking', context: 'Talking about interests.' },
        { fr: 'Tu connais un bon restaurant ?', en: 'Do you know a good restaurant?', context: 'Asking for a recommendation.' },
        { fr: 'C\'est la première fois que tu viens ici ?', en: 'Is this your first time here?', context: 'Conversation starter at a new place.' },
        { fr: 'Je suis en vacances', en: 'I\'m on vacation', context: 'Explaining why you are traveling.' },
        { fr: 'Qu\'est-ce que tu me conseilles de visiter ?', en: 'What do you recommend I visit?', context: 'Asking for sightseeing tips.' },
        { fr: 'C\'était super !', en: 'It was great!', context: 'Positive reaction about an experience.' },
        { fr: 'On garde le contact', en: 'Let\'s keep in touch', context: 'Said when parting with a new acquaintance.' },
        { fr: 'Tu as un numéro / un Insta ?', en: 'Do you have a number / an Instagram?', context: 'Informal. Exchanging contact details.' },
        { fr: 'J\'ai passé une très bonne soirée', en: 'I had a really great evening', context: 'Expressing enjoyment after a social event.' },
        { fr: 'À la prochaine !', en: 'Until next time!', context: 'Casual farewell implying future meeting.' },
        { fr: 'C\'est sympa ici', en: 'It\'s nice here', context: 'Complimenting a place or venue.' }
      ]
    },

    // --------------------------------------------------------
    // 15. Everyday Essentials
    // --------------------------------------------------------
    {
      id: 'essentials',
      name: 'Everyday Essentials',
      icon: '📌',
      color: '#f97316',
      phrases: [
        { fr: 'Oui', en: 'Yes', context: 'Basic affirmative.' },
        { fr: 'Non', en: 'No', context: 'Basic negative.' },
        { fr: 'Peut-être', en: 'Maybe / Perhaps', context: 'Expressing uncertainty.' },
        { fr: 'D\'accord', en: 'OK / Agreed', context: 'Expressing agreement.' },
        { fr: 'Bien sûr', en: 'Of course', context: 'Emphatic agreement.' },
        { fr: 'Pas du tout', en: 'Not at all', context: 'Strong negation.' },
        { fr: 'Je ne sais pas', en: 'I don\'t know', context: 'Expressing lack of knowledge.' },
        { fr: 'J\'ai faim', en: 'I\'m hungry', context: 'Expressing hunger.' },
        { fr: 'J\'ai soif', en: 'I\'m thirsty', context: 'Expressing thirst.' },
        { fr: 'J\'ai chaud', en: 'I\'m hot', context: 'Expressing that you feel warm.' },
        { fr: 'J\'ai froid', en: 'I\'m cold', context: 'Expressing that you feel cold.' },
        { fr: 'J\'ai sommeil', en: 'I\'m sleepy', context: 'Expressing tiredness.' },
        { fr: 'Je voudrais...', en: 'I would like...', context: 'Polite way to express a want or make a request.' },
        { fr: 'J\'ai besoin de...', en: 'I need...', context: 'Expressing a need.' },
        { fr: 'Ce n\'est pas possible', en: 'It\'s not possible', context: 'Stating impossibility.' },
        { fr: 'Ça dépend', en: 'It depends', context: 'A non-committal answer.' },
        { fr: 'Pas encore', en: 'Not yet', context: 'Indicating something has not happened yet.' },
        { fr: 'Déjà', en: 'Already', context: 'Indicating something has happened earlier than expected.' },
        { fr: 'Tout de suite', en: 'Right away / Immediately', context: 'Expressing immediacy.' },
        { fr: 'Tant pis', en: 'Too bad / Never mind', context: 'Accepting an unfortunate situation.' },
        { fr: 'Tant mieux', en: 'So much the better / Good', context: 'Reacting positively to good news.' },
        { fr: 'N\'importe quoi', en: 'Whatever / Nonsense', context: 'Can express indifference or dismissal.' },
        { fr: 'C\'est parfait', en: 'It\'s perfect', context: 'Expressing satisfaction.' },
        { fr: 'Pas de souci', en: 'No worries', context: 'Casual reassurance.' },
        { fr: 'À tout à l\'heure', en: 'See you later (same day)', context: 'Said when you will see the person again that day.' }
      ]
    }
  ]
};
