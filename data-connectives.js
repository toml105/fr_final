// ============================================================
// data-connectives.js — French Connective Words Database
// ============================================================

const CONNECTIVES = {
  categories: [
    // --------------------------------------------------------
    // 1. Adding Information
    // --------------------------------------------------------
    {
      id: 'addition',
      name: 'Adding Information',
      icon: '➕',
      color: '#22c55e',
      words: [
        {
          fr: 'et',
          en: 'and',
          usage: 'The most basic connector. Links words, phrases, or clauses together.',
          examples: [
            { fr: "J'aime le café et le thé.", en: 'I like coffee and tea.' },
            { fr: 'Il est intelligent et travailleur.', en: 'He is intelligent and hardworking.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'aussi',
          en: 'also / too',
          usage: 'Adds complementary information. Placed after the verb in formal writing.',
          examples: [
            { fr: 'Elle parle français et aussi espagnol.', en: 'She speaks French and also Spanish.' },
            { fr: "J'aime aussi la musique classique.", en: 'I also like classical music.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'de plus',
          en: 'moreover / furthermore',
          usage: 'Introduces additional information that reinforces the previous point.',
          examples: [
            { fr: 'Ce restaurant est excellent. De plus, les prix sont raisonnables.', en: 'This restaurant is excellent. Moreover, the prices are reasonable.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'en plus',
          en: 'in addition / on top of that',
          usage: 'Adds an extra point, often used in spoken French.',
          examples: [
            { fr: "Il pleut et en plus, j'ai oublié mon parapluie.", en: "It's raining and on top of that, I forgot my umbrella." }
          ],
          level: 'beginner',
          register: 'informal'
        },
        {
          fr: 'également',
          en: 'also / equally',
          usage: 'A more formal synonym of "aussi." Common in written French.',
          examples: [
            { fr: 'Ce produit est également disponible en ligne.', en: 'This product is also available online.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'de même',
          en: 'likewise / similarly',
          usage: 'Shows that the same idea applies to another subject or context.',
          examples: [
            { fr: "Il a réussi son examen. De même, sa sœur a obtenu d'excellents résultats.", en: 'He passed his exam. Likewise, his sister obtained excellent results.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'par ailleurs',
          en: 'furthermore / besides',
          usage: 'Introduces a new but related point. Common in essays and formal writing.',
          examples: [
            { fr: "L'entreprise est rentable. Par ailleurs, elle recrute de nouveaux employés.", en: 'The company is profitable. Furthermore, it is hiring new employees.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'en outre',
          en: 'moreover / in addition',
          usage: 'Very formal connector used in academic and professional writing.',
          examples: [
            { fr: "En outre, cette étude confirme les résultats précédents.", en: 'Moreover, this study confirms the previous results.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'ainsi que',
          en: 'as well as',
          usage: 'Links two elements of equal importance, slightly more formal than "et."',
          examples: [
            { fr: 'Les étudiants ainsi que les professeurs sont invités.', en: 'The students as well as the professors are invited.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'non seulement... mais aussi',
          en: 'not only... but also',
          usage: 'Emphasizes two points, giving extra weight to the second one.',
          examples: [
            { fr: 'Elle est non seulement intelligente, mais aussi très créative.', en: 'She is not only intelligent, but also very creative.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        }
      ]
    },

    // --------------------------------------------------------
    // 2. Contrasting
    // --------------------------------------------------------
    {
      id: 'contrast',
      name: 'Contrasting',
      icon: '⚖️',
      color: '#ef4444',
      words: [
        {
          fr: 'mais',
          en: 'but',
          usage: 'The most common contrast word. Introduces an opposing idea.',
          examples: [
            { fr: "Je veux venir, mais je n'ai pas le temps.", en: "I want to come, but I don't have time." }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'cependant',
          en: 'however',
          usage: 'Formal alternative to "mais." Often begins a new sentence.',
          examples: [
            { fr: "Le projet est ambitieux. Cependant, il est réalisable.", en: 'The project is ambitious. However, it is achievable.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'pourtant',
          en: 'yet / nevertheless',
          usage: 'Highlights a surprising contrast or contradiction.',
          examples: [
            { fr: "Il a beaucoup étudié, pourtant il a échoué à l'examen.", en: 'He studied a lot, yet he failed the exam.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'néanmoins',
          en: 'nevertheless / nonetheless',
          usage: 'Very formal. Used mainly in academic or literary contexts.',
          examples: [
            { fr: "Les résultats sont décevants. Néanmoins, l'expérience a été enrichissante.", en: 'The results are disappointing. Nevertheless, the experience was enriching.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'toutefois',
          en: 'however / yet',
          usage: 'Formal synonym of "cependant." Frequently used in formal writing.',
          examples: [
            { fr: 'Le plan semble parfait. Toutefois, quelques détails restent à régler.', en: 'The plan seems perfect. However, a few details remain to be settled.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'en revanche',
          en: 'on the other hand',
          usage: 'Introduces a contrasting alternative, often a positive after a negative.',
          examples: [
            { fr: "Le film était ennuyeux. En revanche, la musique était magnifique.", en: 'The movie was boring. On the other hand, the music was magnificent.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'par contre',
          en: 'on the other hand / however',
          usage: 'Common in spoken French. Some grammarians prefer "en revanche" in writing.',
          examples: [
            { fr: "J'adore le chocolat. Par contre, je n'aime pas les bonbons.", en: "I love chocolate. However, I don't like candy." }
          ],
          level: 'beginner',
          register: 'informal'
        },
        {
          fr: 'malgré',
          en: 'despite / in spite of',
          usage: 'Followed by a noun or pronoun. Use "malgré que" with a clause (informal).',
          examples: [
            { fr: 'Malgré la pluie, nous sommes sortis.', en: 'Despite the rain, we went out.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'bien que',
          en: 'although / even though',
          usage: 'Followed by the subjunctive mood. Common in formal writing.',
          examples: [
            { fr: "Bien qu'il soit fatigué, il continue de travailler.", en: 'Although he is tired, he continues to work.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'quand même',
          en: 'still / all the same / anyway',
          usage: 'Emphasizes that something happened despite an obstacle. Very common in speech.',
          examples: [
            { fr: "Il pleuvait, mais on y est allés quand même.", en: 'It was raining, but we went anyway.' }
          ],
          level: 'intermediate',
          register: 'informal'
        },
        {
          fr: 'or',
          en: 'now / however / but',
          usage: 'Literary connector that introduces a new key element in a narrative.',
          examples: [
            { fr: "Il pensait être seul. Or, quelqu'un l'observait.", en: 'He thought he was alone. But someone was watching him.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'alors que',
          en: 'whereas / while',
          usage: 'Highlights a direct contrast between two simultaneous facts.',
          examples: [
            { fr: "Elle adore la mer, alors qu'il préfère la montagne.", en: 'She loves the sea, whereas he prefers the mountains.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        }
      ]
    },

    // --------------------------------------------------------
    // 3. Cause & Reason
    // --------------------------------------------------------
    {
      id: 'cause',
      name: 'Cause & Reason',
      icon: '🔍',
      color: '#f59e0b',
      words: [
        {
          fr: 'parce que',
          en: 'because',
          usage: 'The most common way to state a reason. Answers the question "pourquoi?"',
          examples: [
            { fr: "Je reste à la maison parce qu'il pleut.", en: "I'm staying home because it's raining." }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'car',
          en: 'because / for',
          usage: 'Slightly more formal than "parce que." Never starts a sentence.',
          examples: [
            { fr: "Il n'est pas venu, car il était malade.", en: "He didn't come, because he was sick." }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'puisque',
          en: 'since / given that',
          usage: 'States a reason already known or obvious to the listener.',
          examples: [
            { fr: "Puisque tu es là, aide-moi.", en: "Since you're here, help me." }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'comme',
          en: 'as / since',
          usage: 'States a cause at the beginning of a sentence. Common in spoken and written French.',
          examples: [
            { fr: "Comme il faisait beau, nous sommes allés au parc.", en: 'As the weather was nice, we went to the park.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'à cause de',
          en: 'because of (negative)',
          usage: 'Followed by a noun. Implies the cause has a negative effect.',
          examples: [
            { fr: "Le match a été annulé à cause de la pluie.", en: 'The match was cancelled because of the rain.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'grâce à',
          en: 'thanks to (positive)',
          usage: 'Followed by a noun. Implies the cause has a positive effect.',
          examples: [
            { fr: "J'ai réussi grâce à ton aide.", en: 'I succeeded thanks to your help.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'en raison de',
          en: 'due to / owing to',
          usage: 'Formal expression used in official communication and news.',
          examples: [
            { fr: 'Le vol est retardé en raison de conditions météorologiques.', en: 'The flight is delayed due to weather conditions.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'étant donné que',
          en: 'given that',
          usage: 'Formal. Introduces a well-established fact as a reason.',
          examples: [
            { fr: "Étant donné qu'il est mineur, il ne peut pas voter.", en: 'Given that he is a minor, he cannot vote.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'vu que',
          en: 'seeing that / given that',
          usage: 'Less formal than "étant donné que." Common in everyday conversation.',
          examples: [
            { fr: "Vu qu'il est tard, on devrait rentrer.", en: "Seeing that it's late, we should head home." }
          ],
          level: 'intermediate',
          register: 'informal'
        }
      ]
    },

    // --------------------------------------------------------
    // 4. Consequence & Result
    // --------------------------------------------------------
    {
      id: 'consequence',
      name: 'Consequence & Result',
      icon: '➡️',
      color: '#8b5cf6',
      words: [
        {
          fr: 'donc',
          en: 'so / therefore',
          usage: 'The most common connector expressing a consequence.',
          examples: [
            { fr: 'Je pense, donc je suis.', en: 'I think, therefore I am.' },
            { fr: "Il pleut, donc je prends mon parapluie.", en: "It's raining, so I'm taking my umbrella." }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'alors',
          en: 'so / then',
          usage: 'Very common in speech. Can also mean "then" in a sequence.',
          examples: [
            { fr: "Tu n'es pas content ? Alors, pars !", en: "You're not happy? Then leave!" }
          ],
          level: 'beginner',
          register: 'informal'
        },
        {
          fr: 'par conséquent',
          en: 'consequently / as a result',
          usage: 'Formal. Used to state a logical conclusion in writing.',
          examples: [
            { fr: "Les ventes ont baissé. Par conséquent, l'entreprise doit réduire ses coûts.", en: 'Sales have dropped. Consequently, the company must reduce its costs.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: "c'est pourquoi",
          en: 'that is why',
          usage: 'Clearly links a cause to its result. Works in both speech and writing.',
          examples: [
            { fr: "J'adore les langues. C'est pourquoi j'étudie le français.", en: "I love languages. That's why I study French." }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'ainsi',
          en: 'thus / in this way',
          usage: 'Formal. Indicates a result or a method. Common in academic texts.',
          examples: [
            { fr: 'Il a travaillé dur. Ainsi, il a obtenu une promotion.', en: 'He worked hard. Thus, he got a promotion.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'de ce fait',
          en: 'as a result / thereby',
          usage: 'Formal. Emphasizes a direct causal link between two facts.',
          examples: [
            { fr: "La route est fermée. De ce fait, nous devons prendre un détour.", en: 'The road is closed. As a result, we have to take a detour.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'en conséquence',
          en: 'as a consequence',
          usage: 'Very formal. Commonly found in legal and administrative documents.',
          examples: [
            { fr: "Le règlement a été violé. En conséquence, une amende sera appliquée.", en: 'The regulation was violated. As a consequence, a fine will be applied.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'si bien que',
          en: 'so much so that',
          usage: 'Indicates a strong consequence of a preceding action or situation.',
          examples: [
            { fr: "Il a plu toute la journée, si bien que la rivière a débordé.", en: 'It rained all day, so much so that the river overflowed.' }
          ],
          level: 'advanced',
          register: 'neutral'
        },
        {
          fr: 'de sorte que',
          en: 'so that / in such a way that',
          usage: 'Can express result (indicative) or purpose (subjunctive).',
          examples: [
            { fr: "Il a organisé son emploi du temps de sorte qu'il puisse étudier chaque soir.", en: 'He organized his schedule so that he could study every evening.' }
          ],
          level: 'advanced',
          register: 'formal'
        }
      ]
    },

    // --------------------------------------------------------
    // 5. Time & Sequence
    // --------------------------------------------------------
    {
      id: 'time',
      name: 'Time & Sequence',
      icon: '⏱️',
      color: '#0ea5e9',
      words: [
        {
          fr: "d'abord",
          en: 'first / first of all',
          usage: 'Introduces the first step in a sequence.',
          examples: [
            { fr: "D'abord, je prends mon petit-déjeuner.", en: 'First, I have my breakfast.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'ensuite',
          en: 'then / next',
          usage: 'Indicates what follows after the first action.',
          examples: [
            { fr: "Ensuite, je vais à l'école.", en: 'Then, I go to school.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'puis',
          en: 'then / afterwards',
          usage: 'Similar to "ensuite" but slightly more literary.',
          examples: [
            { fr: "J'ai mangé, puis je suis sorti.", en: 'I ate, then I went out.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'enfin',
          en: 'finally / at last',
          usage: 'Marks the last step in a sequence, or expresses relief.',
          examples: [
            { fr: 'Enfin, nous sommes arrivés !', en: 'Finally, we arrived!' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'premièrement',
          en: 'firstly',
          usage: 'Formal ordering. Often paired with "deuxièmement."',
          examples: [
            { fr: "Premièrement, il faut définir le problème.", en: 'Firstly, we must define the problem.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'deuxièmement',
          en: 'secondly',
          usage: 'Formal ordering. Follows "premièrement."',
          examples: [
            { fr: "Deuxièmement, nous devons analyser les données.", en: 'Secondly, we must analyze the data.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'après',
          en: 'after / afterwards',
          usage: 'Can be a preposition ("après le dîner") or an adverb ("juste après").',
          examples: [
            { fr: 'Après le cours, je vais à la bibliothèque.', en: 'After class, I go to the library.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'avant',
          en: 'before',
          usage: 'Can be a preposition ("avant midi") or part of "avant de + infinitive."',
          examples: [
            { fr: 'Avant de partir, vérifie tes affaires.', en: 'Before leaving, check your things.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'pendant',
          en: 'during / while',
          usage: 'Indicates an action occurring throughout a period of time.',
          examples: [
            { fr: "Pendant les vacances, j'ai lu trois livres.", en: 'During the holidays, I read three books.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'depuis',
          en: 'since / for (duration)',
          usage: 'Indicates a starting point in time or a duration that continues to the present.',
          examples: [
            { fr: "J'habite ici depuis cinq ans.", en: "I've been living here for five years." }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'dès que',
          en: 'as soon as',
          usage: 'Indicates immediate succession. Uses the future tense for future events.',
          examples: [
            { fr: "Dès que j'arrive, je t'appelle.", en: "As soon as I arrive, I'll call you." }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'aussitôt que',
          en: 'as soon as',
          usage: 'Synonym of "dès que." Slightly more formal.',
          examples: [
            { fr: "Aussitôt qu'il a su la nouvelle, il est parti.", en: 'As soon as he heard the news, he left.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'lorsque',
          en: 'when (formal)',
          usage: 'Formal synonym of "quand." Preferred in literary and written contexts.',
          examples: [
            { fr: "Lorsque le soleil se couche, le ciel devient orange.", en: 'When the sun sets, the sky turns orange.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'quand',
          en: 'when',
          usage: 'The everyday word for "when." Used in questions and statements.',
          examples: [
            { fr: "Quand j'étais enfant, j'adorais les dessins animés.", en: 'When I was a child, I loved cartoons.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'tandis que',
          en: 'while / whereas',
          usage: 'Can indicate simultaneity or contrast depending on context.',
          examples: [
            { fr: "Je lis tandis qu'il regarde la télévision.", en: 'I read while he watches television.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        }
      ]
    },

    // --------------------------------------------------------
    // 6. Giving Examples
    // --------------------------------------------------------
    {
      id: 'examples',
      name: 'Giving Examples',
      icon: '💡',
      color: '#ec4899',
      words: [
        {
          fr: 'par exemple',
          en: 'for example',
          usage: 'The most common way to introduce an example.',
          examples: [
            { fr: "J'aime les fruits, par exemple les fraises et les cerises.", en: 'I like fruit, for example strawberries and cherries.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'notamment',
          en: 'notably / in particular',
          usage: 'Highlights specific items from a larger group.',
          examples: [
            { fr: "Plusieurs pays, notamment la France et l'Italie, ont signé l'accord.", en: 'Several countries, notably France and Italy, signed the agreement.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'en particulier',
          en: 'in particular / especially',
          usage: 'Draws attention to one specific element among many.',
          examples: [
            { fr: "J'apprécie l'art, en particulier la peinture impressionniste.", en: 'I appreciate art, in particular Impressionist painting.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: "c'est-à-dire",
          en: 'that is to say / i.e.',
          usage: 'Clarifies or rephrases the preceding statement.',
          examples: [
            { fr: "Il est bilingue, c'est-à-dire qu'il parle deux langues.", en: 'He is bilingual, that is to say he speaks two languages.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'tel que',
          en: 'such as',
          usage: 'Introduces one or more examples. Agrees with the noun in gender and number.',
          examples: [
            { fr: 'Les sports collectifs, tels que le football et le basket, sont populaires.', en: 'Team sports, such as football and basketball, are popular.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'comme',
          en: 'like / such as',
          usage: 'Simple and versatile way to introduce an example in everyday speech.',
          examples: [
            { fr: "Il joue d'un instrument, comme la guitare.", en: 'He plays an instrument, like the guitar.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'entre autres',
          en: 'among others / among other things',
          usage: 'Indicates that the examples given are not exhaustive.',
          examples: [
            { fr: "Elle parle, entre autres, le français, l'anglais et le japonais.", en: 'She speaks, among others, French, English, and Japanese.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'à savoir',
          en: 'namely / that is',
          usage: 'Introduces a precise specification or list. Formal register.',
          examples: [
            { fr: "Deux conditions sont requises, à savoir l'expérience et le diplôme.", en: 'Two conditions are required, namely experience and the degree.' }
          ],
          level: 'advanced',
          register: 'formal'
        }
      ]
    },

    // --------------------------------------------------------
    // 7. Expressing Opinion
    // --------------------------------------------------------
    {
      id: 'opinion',
      name: 'Expressing Opinion',
      icon: '💬',
      color: '#14b8a6',
      words: [
        {
          fr: 'à mon avis',
          en: 'in my opinion',
          usage: 'The most common way to express a personal opinion.',
          examples: [
            { fr: 'À mon avis, ce film est le meilleur de la série.', en: 'In my opinion, this movie is the best in the series.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'selon moi',
          en: 'according to me',
          usage: 'A slightly more formal alternative to "à mon avis."',
          examples: [
            { fr: "Selon moi, il faut agir rapidement.", en: 'According to me, we must act quickly.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'je pense que',
          en: 'I think that',
          usage: 'Direct and common way to share a thought or belief.',
          examples: [
            { fr: "Je pense qu'il a raison.", en: 'I think he is right.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'il me semble que',
          en: 'it seems to me that',
          usage: 'Expresses an opinion with some uncertainty or politeness.',
          examples: [
            { fr: "Il me semble que cette solution est la meilleure.", en: 'It seems to me that this solution is the best.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'je crois que',
          en: 'I believe that',
          usage: 'Expresses a belief. Slightly less certain than "je pense que."',
          examples: [
            { fr: "Je crois qu'il viendra demain.", en: 'I believe he will come tomorrow.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: "d'après moi",
          en: 'in my view',
          usage: 'Another way to preface a personal opinion. Similar to "selon moi."',
          examples: [
            { fr: "D'après moi, ce restaurant sert les meilleurs croissants.", en: 'In my view, this restaurant serves the best croissants.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'personnellement',
          en: 'personally',
          usage: 'Emphasizes that the opinion is strictly personal.',
          examples: [
            { fr: "Personnellement, je préfère le thé au café.", en: 'Personally, I prefer tea to coffee.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'en ce qui me concerne',
          en: 'as far as I am concerned',
          usage: 'Formal. Limits the scope of the statement to the speaker.',
          examples: [
            { fr: "En ce qui me concerne, le dossier est clos.", en: 'As far as I am concerned, the matter is closed.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'je suis convaincu(e) que',
          en: 'I am convinced that',
          usage: 'Expresses a strong, firm opinion.',
          examples: [
            { fr: "Je suis convaincu que nous réussirons.", en: 'I am convinced that we will succeed.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: "j'estime que",
          en: 'I consider that / I reckon that',
          usage: 'Formal way to express a considered opinion.',
          examples: [
            { fr: "J'estime que cette décision est juste.", en: 'I consider that this decision is fair.' }
          ],
          level: 'advanced',
          register: 'formal'
        }
      ]
    },

    // --------------------------------------------------------
    // 8. Concluding
    // --------------------------------------------------------
    {
      id: 'conclusion',
      name: 'Concluding',
      icon: '🏁',
      color: '#64748b',
      words: [
        {
          fr: 'en conclusion',
          en: 'in conclusion',
          usage: 'Signals the final part of a speech, essay, or argument.',
          examples: [
            { fr: "En conclusion, cette réforme est nécessaire.", en: 'In conclusion, this reform is necessary.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'pour conclure',
          en: 'to conclude',
          usage: 'Similar to "en conclusion." Common in presentations.',
          examples: [
            { fr: "Pour conclure, je voudrais remercier tous les participants.", en: 'To conclude, I would like to thank all the participants.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'en résumé',
          en: 'in summary',
          usage: 'Introduces a brief recap of the main points.',
          examples: [
            { fr: "En résumé, le projet a été un succès.", en: 'In summary, the project was a success.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'bref',
          en: 'in short / anyway',
          usage: 'Very common in spoken French to wrap up or cut a long story short.',
          examples: [
            { fr: "Bref, on s'est bien amusés.", en: 'In short, we had a great time.' }
          ],
          level: 'beginner',
          register: 'informal'
        },
        {
          fr: 'en somme',
          en: 'in sum / all in all',
          usage: 'Formal. Summarizes the essence of what has been said.',
          examples: [
            { fr: "En somme, tout s'est bien passé.", en: 'All in all, everything went well.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'finalement',
          en: 'finally / in the end',
          usage: 'Indicates the last point or the final outcome.',
          examples: [
            { fr: "Finalement, il a décidé de rester.", en: 'In the end, he decided to stay.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'en fin de compte',
          en: 'at the end of the day / ultimately',
          usage: 'Summarizes after considering all factors.',
          examples: [
            { fr: "En fin de compte, c'était la bonne décision.", en: 'At the end of the day, it was the right decision.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'tout compte fait',
          en: 'all things considered',
          usage: 'Expresses a final judgment after weighing all aspects.',
          examples: [
            { fr: "Tout compte fait, je suis satisfait du résultat.", en: 'All things considered, I am satisfied with the result.' }
          ],
          level: 'advanced',
          register: 'neutral'
        },
        {
          fr: 'en définitive',
          en: 'ultimately / when all is said and done',
          usage: 'Formal. Introduces a final, decisive statement.',
          examples: [
            { fr: "En définitive, c'est à vous de décider.", en: "Ultimately, it's up to you to decide." }
          ],
          level: 'advanced',
          register: 'formal'
        }
      ]
    },

    // --------------------------------------------------------
    // 9. Comparing
    // --------------------------------------------------------
    {
      id: 'comparison',
      name: 'Comparing',
      icon: '🔄',
      color: '#d946ef',
      words: [
        {
          fr: 'comme',
          en: 'like / as',
          usage: 'The simplest way to make a comparison.',
          examples: [
            { fr: 'Elle chante comme un oiseau.', en: 'She sings like a bird.' }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'de même que',
          en: 'just as / in the same way as',
          usage: 'Draws a parallel between two ideas or situations.',
          examples: [
            { fr: "De même que le soleil se lève chaque matin, l'espoir renaît toujours.", en: 'Just as the sun rises every morning, hope is always reborn.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'ainsi que',
          en: 'as well as / just as',
          usage: 'Used for comparison or addition. Common in formal writing.',
          examples: [
            { fr: "Ainsi que je l'ai mentionné, le projet avance bien.", en: 'As I mentioned, the project is progressing well.' }
          ],
          level: 'intermediate',
          register: 'formal'
        },
        {
          fr: 'de la même façon',
          en: 'in the same way',
          usage: 'Emphasizes that two things are done identically.',
          examples: [
            { fr: "Il réagit de la même façon que son père.", en: 'He reacts in the same way as his father.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'pareillement',
          en: 'similarly / likewise',
          usage: 'Indicates a similarity between two facts or situations.',
          examples: [
            { fr: "Elle a été touchée par le discours. Pareillement, le public était ému.", en: 'She was moved by the speech. Similarly, the audience was emotional.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'tout comme',
          en: 'just like',
          usage: 'Emphasizes a strong similarity between two things.',
          examples: [
            { fr: 'Tout comme sa mère, elle adore la cuisine.', en: 'Just like her mother, she loves cooking.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'à la manière de',
          en: 'in the manner of / like',
          usage: 'Describes something done in the style or fashion of another.',
          examples: [
            { fr: 'Il peint à la manière de Monet.', en: 'He paints in the manner of Monet.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'par rapport à',
          en: 'compared to / in relation to',
          usage: 'Sets up a comparison, often involving measurement or evaluation.',
          examples: [
            { fr: "Les prix ont augmenté par rapport à l'année dernière.", en: 'Prices have increased compared to last year.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        }
      ]
    },

    // --------------------------------------------------------
    // 10. Condition
    // --------------------------------------------------------
    {
      id: 'condition',
      name: 'Condition',
      icon: '❓',
      color: '#f97316',
      words: [
        {
          fr: 'si',
          en: 'if',
          usage: 'The most basic conditional word. Followed by the present, imperfect, or plus-que-parfait.',
          examples: [
            { fr: 'Si tu veux, on peut sortir ce soir.', en: 'If you want, we can go out tonight.' },
            { fr: "Si j'avais su, je ne serais pas venu.", en: "If I had known, I wouldn't have come." }
          ],
          level: 'beginner',
          register: 'neutral'
        },
        {
          fr: 'à condition que',
          en: 'on the condition that / provided that',
          usage: 'Followed by the subjunctive. Sets a requirement.',
          examples: [
            { fr: "Tu peux sortir à condition que tu finisses tes devoirs.", en: 'You can go out provided that you finish your homework.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'pourvu que',
          en: 'provided that / as long as',
          usage: 'Followed by the subjunctive. Also used to express a wish.',
          examples: [
            { fr: "Pourvu qu'il fasse beau demain !", en: 'Let us hope the weather is nice tomorrow!' },
            { fr: "Je suis d'accord, pourvu que les conditions soient respectées.", en: 'I agree, as long as the conditions are met.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'à moins que',
          en: 'unless',
          usage: 'Followed by the subjunctive. Introduces a negative condition.',
          examples: [
            { fr: "Nous partirons demain, à moins qu'il pleuve.", en: 'We will leave tomorrow, unless it rains.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'en cas de',
          en: 'in case of',
          usage: 'Followed by a noun. Used for hypothetical situations.',
          examples: [
            { fr: "En cas d'urgence, appelez le 15.", en: 'In case of emergency, call 15.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'dans le cas où',
          en: 'in the event that',
          usage: 'Followed by the conditional. Formal version of "si."',
          examples: [
            { fr: 'Dans le cas où vous seriez intéressé, contactez-nous.', en: 'In the event that you are interested, contact us.' }
          ],
          level: 'advanced',
          register: 'formal'
        },
        {
          fr: 'au cas où',
          en: 'just in case',
          usage: 'Followed by the conditional. Common in everyday French.',
          examples: [
            { fr: "Prends un parapluie, au cas où il pleuvrait.", en: 'Take an umbrella, just in case it rains.' }
          ],
          level: 'intermediate',
          register: 'neutral'
        },
        {
          fr: 'à supposer que',
          en: 'assuming that / supposing that',
          usage: 'Followed by the subjunctive. Introduces a hypothesis.',
          examples: [
            { fr: "À supposer qu'il accepte, nous pourrons commencer lundi.", en: 'Assuming that he accepts, we can start on Monday.' }
          ],
          level: 'advanced',
          register: 'formal'
        }
      ]
    }
  ]
};
