/**
 * questions.js — Official College Board SAT question data.
 *
 * ⚠️  DO NOT modify question content, correct answers, or explanations
 *     without explicit instruction. This data represents official College
 *     Board material. Question IDs map to the College Board question bank.
 *
 * Shape: see CLAUDE.md → "Question Data Shape"
 *
 * Daily rotation: handled by getDailyQuestion() — no date field needed here.
 */

/** @type {Array<Object>} */
export const preguntas = [

  // ─────────────────────────────────────────────────────────────────────────
  // LECTURA Y ESCRITURA  (16 questions)
  // ─────────────────────────────────────────────────────────────────────────

  // Added following README "Adding Questions" steps as verification example.
  {
    id: '6266dc01',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',

    enunciado: {
      es: `La arquitecta Zaha Hadid es conocida por diseños que desafían las convenciones geométricas tradicionales. Su edificio Heydar Aliyev Center en Bakú, Azerbaiyán, carece de ángulos rectos y presenta superficies onduladas continuas que eliminan la distinción entre suelo, pared y techo. Los críticos de arquitectura señalan que esta fluidez formal refleja la filosofía central de Hadid: que los espacios construidos deben fluir de manera orgánica, como el movimiento. ¿Cuál de las siguientes opciones expresa mejor la idea principal del texto?`,
      en: `Architect Zaha Hadid is known for designs that challenge traditional geometric conventions. Her Heydar Aliyev Center in Baku, Azerbaijan, has no right angles and features continuous undulating surfaces that eliminate the distinction between floor, wall, and ceiling. Architecture critics note that this formal fluidity reflects Hadid's central philosophy: that built spaces should flow organically, like movement itself. Which choice best states the main idea of the text?`,
    },

    opciones: [
      {
        letra: 'A',
        texto: {
          es: `El Heydar Aliyev Center es el edificio más importante de Hadid porque fue construido en Azerbaiyán.`,
          en: `The Heydar Aliyev Center is Hadid's most significant building because it was constructed in Azerbaijan.`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: `El enfoque de diseño de Hadid, ilustrado por su trabajo en Bakú, refleja una filosofía de espacios fluidos y orgánicos que rompe con la geometría convencional.`,
          en: `Hadid's design approach, illustrated by her work in Baku, reflects a philosophy of fluid, organic space that breaks with conventional geometry.`,
        },
      },
      {
        letra: 'C',
        texto: {
          es: `Los ángulos rectos se evitan en la arquitectura moderna porque los críticos los consideran estéticamente anticuados.`,
          en: `Right angles are avoided in modern architecture because critics consider them aesthetically outdated.`,
        },
      },
      {
        letra: 'D',
        texto: {
          es: `Hadid diseñó el Heydar Aliyev Center para desafiar a los críticos de arquitectura que favorecen las formas geométricas tradicionales.`,
          en: `Hadid designed the Heydar Aliyev Center to challenge architecture critics who favor traditional geometric forms.`,
        },
      },
    ],

    respuestaCorrecta: 'B',

    explicacion: {
      es: `La opción B es correcta porque el texto describe tanto el estilo de Hadid (sin ángulos rectos, superficies onduladas) como la filosofía subyacente (espacios que fluyen orgánicamente), convirtiendo al Heydar Aliyev Center en el ejemplo concreto de esa idea central. La opción A es incorrecta porque la ubicación no determina la importancia. La opción C generaliza más allá de lo que dice el texto. La opción D invierte la relación: el diseño refleja la filosofía de Hadid, no una intención de desafiar a los críticos.`,
      en: `Choice B is correct because the text describes both Hadid's style (no right angles, undulating surfaces) and the underlying philosophy (spaces that flow organically), making the Heydar Aliyev Center the concrete example of that central idea. Choice A is wrong because location does not determine significance. Choice C overgeneralizes beyond what the text says. Choice D inverts the relationship: the design reflects Hadid's philosophy, not an intent to challenge critics.`,
    },

    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'f1bfbed3',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Inferencias',
    enunciado: {
      es: 'El censo de biodiversidad del mar Mediterráneo de 2010 realizado por Marta Coll y sus colegas reportó aproximadamente 17,000 especies, casi el doble de las reportadas en el censo de Carlo Bianchi y Carla Morri del año 2000, diferencia solo parcialmente atribuible a la descripción de nuevas especies de invertebrados. Otro factor es que la variabilidad morfológica de los microorganismos está poco comprendida en comparación con la de los vertebrados, invertebrados, plantas y algas, generando incertidumbre sobre cómo evaluarlos como especies. Los dos censos reportaron conteos similares de vertebrados, plantas y algas, lo que sugiere que ______',
      en: `Marta Coll and colleagues' 2010 Mediterranean Sea biodiversity census reported approximately 17,000 species, nearly double the number reported in Carlo Bianchi and Carla Morri's 2000 census—a difference only partly attributable to the description of new invertebrate species. Another factor is that the morphological variability of microorganisms is poorly understood compared to that of vertebrates, invertebrates, plants, and algae. The two censuses reported similar counts of vertebrate, plant, and algal species, suggesting that ______`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Coll y sus colegas reportaron muchas más especies que Bianchi y Morri principalmente por incluir invertebrados no descritos en el momento del primer censo.',
          en: 'Coll and colleagues reported far more species than Bianchi and Morri largely due to the inclusion of invertebrate species not described at the time of the first census.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Algunas diferencias observadas en microorganismos pueden haber sido tratadas como variaciones dentro de la misma especie por Bianchi y Morri, pero como especies distintas por Coll y sus colegas.',
          en: 'Some differences observed in microorganisms may have been treated as variations within species by Bianchi and Morri but as indicative of distinct species by Coll and colleagues.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Bianchi y Morri pueden haber sido menos sensibles al grado de variación morfológica de los microorganismos que Coll y sus colegas.',
          en: 'Bianchi and Morri may have been less sensitive to the degree of morphological variation in microorganisms than Coll and colleagues.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'La subestimación del número de microorganismos por parte de Coll y sus colegas explica principalmente la diferencia en el conteo total de especies.',
          en: `Coll and colleagues' underestimate of microorganism species mainly accounts for the difference in total species count.`,
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'La clave está en que ambos censos reportaron conteos similares de vertebrados, plantas y algas, así que la diferencia proviene de los microorganismos. La opción B es correcta: si Bianchi y Morri agruparon variaciones de microorganismos como una misma especie mientras que Coll las clasificó como especies distintas, eso explica el mayor número en el segundo censo. La opción A es incorrecta porque el texto descarta que la diferencia sea principalmente por invertebrados. La opción D es incorrecta porque una subestimación por Coll ampliaría la brecha, no la explicaría.',
      en: 'Both censuses reported similar vertebrate, plant, and algal counts, so the difference must come from microorganisms. Choice B is correct: if Bianchi and Morri lumped microorganism differences as within-species variation while Coll classified them as distinct species, that explains the higher count. Choice A is ruled out because the text says the invertebrate explanation is only partial. Choice D is wrong because an undercount by Coll would widen the gap, not explain it.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '87aa7bab',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Una suposición común entre los historiadores del arte es que la invención de la fotografía a mediados del siglo XIX desplazó el retrato pintado. La disminución de la popularidad del retrato en miniatura, que coincidió con el auge de la fotografía, parece apoyar esta afirmación. Sin embargo, registros de exposiciones de arte en los Países Bajos entre 1820 y 1892 muestran una disminución en los retratos —tanto en miniatura como de tamaño completo— establecida antes de la invención de la fotografía. Según el texto, ¿qué se puede concluir sobre la disminución de la popularidad del retrato en miniatura en el siglo XIX?',
      en: 'A common assumption among art historians is that the invention of photography in the mid-nineteenth century displaced the painted portrait. The diminishing popularity of the portrait miniature, which coincided with the rise of photography, seems to support this claim. However, records from art exhibitions in the Netherlands from 1820 to 1892 show a decrease in portraits—both full-sized and miniature—established before the invention of photography. Based on the text, what can be concluded about the diminishing popularity of the portrait miniature in the nineteenth century?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Factores distintos al auge de la fotografía pueden ser más directamente responsables del declive del retrato en miniatura.',
          en: `Factors other than the rise of photography may be more directly responsible for the portrait miniature's decline.`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Aunque los retratos en miniatura se volvieron menos comunes que las fotografías, se consideraban con mayor mérito artístico.',
          en: 'Although portrait miniatures became less common than photographs, they were widely regarded as having more artistic merit.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'La popularidad del retrato en miniatura probablemente persistió más tiempo de lo que los historiadores han supuesto.',
          en: 'The popularity of the portrait miniature likely persisted longer than art historians have assumed.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'A medida que disminuyó la demanda de retratos en miniatura, los artistas probablemente trasladaron su enfoque creativo a la fotografía.',
          en: 'As demand for portrait miniatures decreased, portrait artists likely shifted their creative focus to photography.',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'La opción A es correcta porque los registros holandeses muestran que la disminución del retrato en miniatura comenzó antes de la invención de la fotografía, lo que indica que otros factores pueden ser responsables del declive. Las opciones B, C y D no están respaldadas por el texto.',
      en: 'Choice A is correct because Dutch exhibition records show the decline of portrait miniatures began before photography was invented, indicating other factors may be responsible. Choices B, C, and D are not supported by the text.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'd73a908a',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Creyendo que vivir en un espacio poco funcional puede aumentar la conciencia e incluso mejorar la salud, los artistas conceptuales Madeline Gins y Shusaku Arakawa diseñaron un edificio de apartamentos en Japón más imaginativo que funcional: una encimera de cocina es alta de un lado y baja del otro; el techo tiene una puerta que no lleva a ningún lado. El efecto es desconcertante pero vigorizante: tras cuatro años viviendo allí, el cineasta Nobu Yamaoka reportó beneficios significativos para la salud. ¿Cuál de las siguientes opciones expresa mejor la idea principal del texto?',
      en: 'Believing that living in an impractical space can heighten awareness and even improve health, conceptual artists Madeline Gins and Shusaku Arakawa designed an apartment building in Japan to be more fanciful than functional: a kitchen counter is chest-high on one side and knee-high on the other; a ceiling has a door to nowhere. The effect is disorienting but invigorating: after four years there, filmmaker Nobu Yamaoka reported significant health benefits. Which choice best states the main idea of the text?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Aunque habitar un hogar con características extravagantes como las diseñadas por Gins y Arakawa puede ser revitalizante, no es sostenible a largo plazo.',
          en: 'Although inhabiting a home with fanciful features like those designed by Gins and Arakawa can be rejuvenating, it is not sustainable long-term.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Diseñar espacios desconcertantes como los del edificio de Gins y Arakawa es la forma más eficaz de crear un entorno físicamente estimulante.',
          en: 'Designing disorienting spaces like those in the Gins and Arakawa building is the most effective way to create a physically stimulating environment.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Como cineasta, Yamaoka ha apoyado durante mucho tiempo los diseños de artistas conceptuales como Gins y Arakawa.',
          en: 'As a filmmaker, Yamaoka has long supported the designs of conceptual artists such as Gins and Arakawa.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Aunque poco funcional, el diseño del edificio de apartamentos de Gins y Arakawa puede mejorar el bienestar de sus residentes.',
          en: `Although impractical, the design of the apartment building by Gins and Arakawa may improve the well-being of the building's residents.`,
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'La opción D es correcta porque el texto presenta el diseño extravagante del edificio y el testimonio de Yamaoka como evidencia de que vivir en un espacio poco funcional puede mejorar el bienestar. Las demás opciones introducen ideas no respaldadas por el texto.',
      en: `Choice D is correct because the text presents the building's fanciful design and Yamaoka's testimony as evidence that impractical spaces may improve well-being. The other choices introduce ideas not supported by the text.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'd748c3fd',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Inferencias',
    enunciado: {
      es: 'En su artículo de 2021 "Throwaway History: Towards a Historiography of Ephemera", la académica Anne Garner analiza a John Johnson (1882–1956), un coleccionista dedicado de objetos destinados a desecharse, como boletos de autobús y panfletos de campaña. Johnson reconocía que las instituciones académicas consideraban su colección sin valor. De hecho, no fue hasta 1968, después de la muerte de Johnson, que la Biblioteca Bodleiana de Oxford adquirió la colección al reconocer su potencial valor para historiadores e investigadores. Por lo tanto, el ejemplo de Johnson sirve para ______',
      en: `In her 2021 article "Throwaway History: Towards a Historiography of Ephemera," scholar Anne Garner discusses John Johnson (1882–1956), a devoted collector of items intended to be discarded, including bus tickets and campaign pamphlets. Johnson recognized that scholarly institutions considered his collection worthless—it wasn't until 1968, after Johnson's death, that Oxford University's Bodleian Library acquired the collection after grasping its potential value to historians and researchers. Hence, the example of Johnson serves to ______`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'demostrar las dificultades que enfrentan los historiadores modernos al investigar en la Biblioteca Bodleiana sin acceso a objetos efímeros.',
          en: 'demonstrate the difficulties faced by contemporary historians in conducting research at the Bodleian Library without access to ephemera.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'representar el desafío de incorporar objetos efímeros en las colecciones de bibliotecas y otras instituciones académicas.',
          en: 'represent the challenge of incorporating ephemera into the collections of libraries and other scholarly institutions.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'respaldar los argumentos de historiadores que aún sostienen que los objetos efímeros no tienen valor académico.',
          en: 'lend support to arguments by historians who continue to assert that ephemera holds no value for scholars.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'ilustrar tanto el escaso reconocimiento académico que tenían los objetos efímeros como el posterior reconocimiento de su posible utilidad.',
          en: `illustrate both the relatively low scholarly regard in which ephemera was once held and the later recognition of ephemera's possible utility.`,
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'La opción D es correcta porque el ejemplo de Johnson muestra las dos etapas descritas en el texto: primero, la consideración de su colección como sin valor; luego, el reconocimiento posterior de su utilidad para la investigación histórica.',
      en: `Choice D is correct because Johnson's example illustrates both stages described in the text: first, his collection being considered worthless; then, its later recognition as valuable to historical research.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'a15b3219',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Dominio de la Evidencia',
    enunciado: {
      es: 'En Estados Unidos, las empresas frecuentemente buscan incentivos de los gobiernos municipales para expandirse. Un equipo de politólogos hipotetizó que los municipios tienen mucha más probabilidad de responder y ofrecer incentivos si la expansión puede anunciarse antes de las elecciones. El equipo contactó a funcionarios de miles de municipios indicando que la empresa anunciaría su expansión justo antes o justo después de las próximas elecciones. ¿Cuál de las siguientes opciones describe mejor los datos de la gráfica que debilitan la hipótesis del equipo?',
      en: `In the United States, firms often seek incentives from municipal governments to expand. A team of political scientists hypothesized that municipalities are much more likely to respond and offer incentives if expansions can be announced in time to benefit local elected officials. The team contacted officials in thousands of municipalities, indicating the firm would announce its expansion just before or just after the next election. Which choice best describes data from the graph that weaken the team's hypothesis?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Una gran mayoría de los municipios que recibieron una consulta con anuncio antes de las elecciones no respondieron.',
          en: 'A large majority of the municipalities that received an inquiry mentioning an announcement before the election did not respond.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'La proporción de municipios que respondieron u ofrecieron incentivos no difirió sustancialmente según el momento del anuncio.',
          en: 'The proportion of municipalities that responded or offered incentives did not substantially differ across the announcement timing conditions.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Solo alrededor de la mitad de los municipios que respondieron a consultas con anuncio antes de las elecciones ofrecieron incentivos.',
          en: 'Only around half the municipalities that responded to inquiries mentioning an announcement before the election offered incentives.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'De los municipios que recibieron una consulta con anuncio después de las elecciones, más de 1,200 no respondieron y solo unos 100 ofrecieron incentivos.',
          en: 'Of the municipalities that received an inquiry mentioning an announcement after the election, more than 1,200 did not respond and only around 100 offered incentives.',
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'La opción B es correcta porque debilita directamente la hipótesis: si las tasas de respuesta e incentivos fueron prácticamente iguales independientemente del momento del anuncio, entonces el beneficio electoral no tuvo el efecto que el equipo predijo. Las opciones A, C y D describen datos reales, pero no comparan ambas condiciones del experimento.',
      en: 'Choice B is correct because it directly weakens the hypothesis: if response and incentive rates were virtually the same regardless of announcement timing, the electoral benefit had no effect. Choices A, C, and D accurately describe data from one condition but do not compare both announcement timing groups.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'ed314256',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'La más reciente versión de la experiencia de teatro inmersivo Sleep No More, que se estrenó en Nueva York en 2011, transforma su espacio escénico —un almacén de cinco pisos— en un hotel de los años 30. Los espectadores, que deambulan por el laberíntico local a su propio ritmo y siguen a los actores en sus narrativas simultáneas e interconectadas, se enfrentan a la imposibilidad de experimentar la producción en su totalidad. El rechazo de la coherencia narrativa de la obra depende del sentido de fragmentación espacial que genera el inmenso e intrincado diseño del local. ¿Qué sugiere principalmente el texto sobre el uso del espacio escénico en Sleep No More?',
      en: `The most recent iteration of the immersive theater experience Sleep No More, which premiered in New York City in 2011, transforms its performance space—a five-story warehouse—into a 1930s-era hotel. Audience members, who wander through the labyrinthine venue at their own pace and follow the actors in simultaneous, interweaving narrative loops, confront the impossibility of experiencing the production in its entirety. The play's refusal of narrative coherence hinges on the sense of spatial fragmentation that the venue's immense and intricate layout generates. What does the text most strongly suggest about Sleep No More's use of its performance space?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La elección de un local en Nueva York probablemente permitió experimentar con el espacio teatral de maneras que locales anteriores no podían.',
          en: 'The choice of a New York City venue likely enabled experimentation with theatrical space in ways earlier venues could not.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Los espectadores probablemente se sienten decepcionados porque en general no pueden recorrer el local completo.',
          en: 'Audience members likely find the experience disappointing because they generally cannot make their way through the entire venue.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'La dependencia de la producción de un entorno escénico particular probablemente dificultaría reproducirla exactamente en un espacio diferente.',
          en: `The production's dependence on a particular performance environment would likely make it difficult to reproduce exactly in a different theatrical space.`,
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Los espectadores que siguen un itinerario recomendado comprenderán mejor la narrativa que quienes se desvían de él.',
          en: `Audience members who navigate the space according to a recommended itinerary will likely have a better grasp of the play's narrative.`,
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'La opción C es correcta porque el texto establece que el efecto de la obra depende específicamente del tamaño y diseño laberíntico del local. Si el espacio es tan fundamental para crear ese efecto, reproducir la obra en otro lugar sería muy difícil. La opción B es incorrecta porque el texto sugiere que no poder ver todo es parte de la experiencia, no una decepción.',
      en: `Choice C is correct because the text establishes that the play's effect depends specifically on the venue's size and labyrinthine design. If the space is so fundamental to the effect, reproducing it elsewhere would be very difficult. Choice B is incorrect because the text suggests that not seeing everything is part of the experience, not a disappointment.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '8c1be131',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Durante la Segunda Guerra Mundial, algunas mujeres mexicoamericanas adoptaron un llamativo estilo llamado "pachuca". Usaban sacos de hombre modificados o trajes zoot suit, maquillaje dramático y peinados altos y redondeados. Algunas personas criticaron el estilo pachuca por considerarlo peligroso, argumentando que las mujeres debían vestirse de forma tradicional. Sin embargo, los historiadores lo ven de manera diferente: para ellos, el estilo pachuca fue una forma de rebelión contra las rígidas expectativas sociales de la época para las mujeres, una expresión del deseo de autoexpresión y libertad. Según el texto, ¿cómo ven los historiadores el estilo pachuca?',
      en: `During the World War II era, some Mexican American women adopted a striking new look called pachuca style. They wore altered men's jackets or zoot suits and dramatic makeup, and combed their hair into high, rounded shapes. Some people criticized pachuca style, saying it was dangerous and women should dress traditionally. But historians see things differently: they see pachuca style as a form of rebellion against the era's rigid social expectations for women, showing a desire for self-expression and freedom. According to the text, how do historians view pachuca style?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Creen que el estilo pachuca fue una tendencia tan popular que sigue influyendo en la moda de Estados Unidos hasta hoy.',
          en: 'They think that pachuca style was such a popular trend that it continues to influence fashion in the United States to the present day.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Creen que el estilo pachuca fue una manera en que algunas mujeres mexicoamericanas se expresaron y resistieron las expectativas sociales estrictas.',
          en: 'They think that pachuca style was a way for some Mexican American women to express themselves and resist strict social expectations.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Creen que el estilo pachuca fue celebrado porque permitió a las mujeres mexicoamericanas mostrar su apoyo a Estados Unidos durante la guerra.',
          en: 'They think that pachuca style was celebrated because it enabled some Mexican American women to show their support for the United States during World War II.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Creen que el estilo pachuca fue similar a otras tendencias de moda adoptadas por distintos grupos de mujeres en el mismo período.',
          en: 'They think that pachuca style was similar to other fashion trends that different groups of women adopted in the same period.',
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'La opción B es correcta porque el texto afirma explícitamente que los historiadores ven el estilo pachuca como una forma de rebelión que expresaba el deseo de autoexpresión y libertad de las mujeres. Las demás opciones introducen ideas no respaldadas por el texto.',
      en: `Choice B is correct because the text explicitly states that historians see pachuca style as a form of rebellion expressing women's desire for self-expression and freedom. The other choices introduce ideas not supported by the text.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '92c2564d',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Utah alberga a Pando, una colonia de aproximadamente 47,000 álamos temblones que comparten un único sistema de raíces. Pando es uno de los organismos individuales más grandes de la Tierra en términos de masa, pero los ecólogos están preocupados porque su crecimiento está disminuyendo, en parte por el pastoreo de animales. Los ecólogos señalan que cercas resistentes podrían evitar que los venados coman los árboles jóvenes y ayudar a Pando a prosperar nuevamente. Según el texto, ¿por qué están preocupados los ecólogos por Pando?',
      en: 'Utah is home to Pando, a colony of about 47,000 quaking aspen trees that all share a single root system. Pando is one of the largest single organisms by mass on Earth, but ecologists are worried that its growth is declining in part because of grazing by animals. The ecologists say that strong fences could prevent deer from eating young trees and help Pando start thriving again. According to the text, why are ecologists worried about Pando?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'No está creciendo al mismo ritmo que antes.',
          en: `It isn't growing at the same rate it used to.`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Ya no produce árboles jóvenes.',
          en: `It isn't producing young trees anymore.`,
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'No puede expandirse a nuevas áreas porque está bloqueado por cercas.',
          en: `It can't grow into new areas because it is blocked by fences.`,
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Su sistema de raíces no puede sostener muchos más árboles nuevos.',
          en: `Its root system can't support many more new trees.`,
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'La opción A es correcta porque el texto afirma directamente que el crecimiento de Pando está disminuyendo, es decir, que no crece al mismo ritmo que antes. La opción B es incorrecta porque el texto menciona que sí produce árboles jóvenes, pero los venados los comen. La opción C invierte la función de las cercas, que según el texto protegerían a Pando, no lo bloquearían.',
      en: `Choice A is correct because the text directly states that Pando's growth is declining—meaning it isn't growing at the rate it used to. Choice B is incorrect because the text mentions young trees do exist but are eaten by deer. Choice C inverts the role of fences, which the text says would protect Pando, not block it.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '22e4d633',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Dominio de la Evidencia',
    enunciado: {
      es: 'Aunque muchos transposones —secuencias de ADN que se mueven dentro del genoma de un organismo— se han corrompido y vuelto inactivos con el tiempo, los de la familia LINE parecen permanecer activos en los genomas de algunas especies. En humanos, son funcionalmente importantes en el hipocampo, una estructura cerebral que apoya procesos cognitivos complejos. Cuando en 2022 se anunciaron los resultados del análisis molecular de dos especies de pulpo —un animal conocido por su inteligencia—, la confirmación de un transposón LINE en sus genomas llevó a los investigadores a plantear la hipótesis de que esa familia de transposones está vinculada a la capacidad de cognición avanzada. ¿Cuál de los siguientes hallazgos, si fuera verdadero, respaldaría más directamente la hipótesis de los investigadores?',
      en: `Although many transposons—DNA sequences that move within an organism's genome—have become corrupted and inactive over time, those from the LINE family appear to remain active in the genomes of some species. In humans, they are functionally important within the hippocampus, a brain structure that supports complex cognitive processes. When in 2022 researchers confirmed a LINE transposon in two octopus species—an animal known for its intelligence—they hypothesized that the LINE family is tied to a species' capacity for advanced cognition. Which finding, if true, would most directly support the researchers' hypothesis?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El transposón LINE en los genomas de los pulpos es activo en una estructura cerebral que funciona de manera similar al hipocampo humano.',
          en: 'The LINE transposon in octopus genomes is active in a brain structure that functions similarly to the human hippocampus.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El genoma humano contiene múltiples transposones de la familia LINE, todos principalmente activos en el hipocampo.',
          en: 'The human genome contains multiple transposons from the LINE family that are all primarily active in the hippocampus.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Un número consistente de copias de transposones LINE está presente en los genomas de la mayoría de las especies de pulpo, con pocas corrupciones conocidas.',
          en: 'A consistent number of copies of LINE transposons is present across the genomes of most octopus species, with few known corruptions.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Los pulpos tienen cerebros más pequeños que los humanos en relación con el tamaño del cuerpo, pero sus genomas contienen secuencias de una mayor variedad de familias de transposones.',
          en: 'Octopuses have smaller brains than humans relative to body size, but their genomes contain sequences from a wider variety of transposon families.',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'La opción A respalda directamente la hipótesis: si en los pulpos el transposón LINE es activo en una estructura que funciona como el hipocampo humano (vinculado a la cognición compleja), eso sugiere que los transposones LINE apoyan la cognición avanzada en general. Las opciones B, C y D no establecen esta conexión entre los transposones LINE y la cognición avanzada en los pulpos.',
      en: 'Choice A directly supports the hypothesis: if the LINE transposon in octopuses is active in a brain structure similar to the human hippocampus (linked to complex cognition), that suggests LINE transposons support advanced cognition more broadly. Choices B, C, and D do not establish this connection between LINE transposons and advanced cognition in octopuses.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '458b4a11',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Para entender cómo el cambio de temperatura afecta el ciclo de nutrientes del suelo mediado por microorganismos en ecosistemas alpinos, Eva Kátovská et al. recolectaron núcleos de suelo-planta en las montañas Tatra a elevaciones de aproximadamente 2,100 metros y los trasplantaron a elevaciones de 1,700–1,800 metros, donde la temperatura media era 2°C más cálida. El ciclo de nutrientes se aceleró en los núcleos trasplantados; de manera crucial, la composición de la comunidad de microorganismos no cambió, lo que permitió al equipo atribuir la aceleración a aumentos en la actividad de los microorganismos inducidos por la temperatura. ¿Por qué fue importante el hallazgo sobre la composición de la comunidad de microorganismos?',
      en: 'To understand how temperature change affects microorganism-mediated cycling of soil nutrients in alpine ecosystems, Eva Kátovská et al. collected plant-soil cores in the Tatra Mountains at elevations around 2,100 meters and transplanted them to elevations of 1,700–1,800 meters, where the mean air temperature was warmer by 2°C. Microorganism-mediated nutrient cycling was accelerated in the transplanted cores; crucially, microorganism community composition was unchanged, allowing the team to attribute the acceleration to temperature-induced increases in microorganism activity. For which reason was the finding about microorganism community composition important?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Proporcionó evidencia preliminar de que el ciclo de nutrientes se aceleró en los núcleos trasplantados.',
          en: 'It provided preliminary evidence that microorganism-mediated nutrient cycling was accelerated in the transplanted cores.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Sugirió que los cambios en la actividad de los microorganismos inducidos por la temperatura pueden ocurrir a elevaciones cada vez más altas.',
          en: 'It suggested that temperature-induced changes in microorganism activity may be occurring at increasingly high elevations.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Descartó una posible explicación alternativa para la aceleración del ciclo de nutrientes.',
          en: 'It ruled out a potential alternative explanation for the acceleration in microorganism-mediated nutrient cycling.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Aclaró que los niveles de actividad de los microorganismos variaban según cuáles conformaban la comunidad.',
          en: 'It clarified that microorganism activity levels in the cores varied depending on which microorganisms comprised the community.',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'La opción C es correcta porque si la composición de la comunidad de microorganismos no cambió, eso elimina la posibilidad de que la aceleración del ciclo de nutrientes se deba a un cambio en qué microorganismos estaban presentes. Esto le permitió al equipo atribuir la aceleración únicamente al aumento de temperatura.',
      en: `Choice C is correct because if the microorganism community composition didn't change, that eliminates the possibility that the acceleration in nutrient cycling was caused by a change in which microorganisms were present, allowing the team to attribute the acceleration solely to the temperature increase.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '0d7f4966',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Dominio de la Evidencia',
    enunciado: {
      es: 'Jean-Bernard Caron y sus colegas descubrieron recientemente una colección de fósiles de medusas en el Esquisto de Burgess, un sitio en las Rocosas canadienses rico en fósiles del período Cámbrico (hace más de 500 millones de años). Caron y sus colegas afirman que son los fósiles de medusas más antiguos descubiertos. En los últimos veinte años, dos sitios en China y Estados Unidos produjeron fósiles de edad similar que algunos expertos creen que son medusas por su forma y los tentáculos aparentes. Sin embargo, Caron y sus colegas argumentan que los tentáculos aparentes son en realidad las filas de peines de los ctenóforos, animales gelatinosos poco relacionados con las medusas. ¿Cuál enunciado, si fuera verdadero, debilitaría más directamente la afirmación de Caron sobre los fósiles de China y Estados Unidos?',
      en: `Jean-Bernard Caron and colleagues recently discovered a cache of jellyfish fossils in the Burgess Shale, a site in the Canadian Rockies rich in Cambrian period fossils (over 500 million years ago). Caron and colleagues claim these are the oldest jellyfish fossils ever discovered. In the past twenty years, two sites in China and the United States yielded fossils of similar age that some experts believe are jellyfish due to their shapes and apparent projecting tentacles. But Caron and colleagues argue that the apparent tentacles are actually the comb rows of ctenophores, gelatinous animals only distantly related to jellyfish. Which statement, if true, would most directly weaken Caron's claim about the fossils found in China and the United States?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Sitios en las Rocosas canadienses de períodos posteriores al Cámbrico han producido fósiles identificados de manera concluyente como ctenóforos.',
          en: 'Sites in the Canadian Rockies from periods later than the Cambrian have yielded fossils conclusively identified as ctenophore fossils.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Los fósiles encontrados en China y Estados Unidos están tan mal conservados que no pueden identificarse de manera concluyente ni como medusas ni como ctenóforos.',
          en: 'The fossils found in China and the United States are so poorly preserved that they cannot be conclusively identified as jellyfish or as ctenophores.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Si bien se han encontrado fósiles de ctenóforos en China y Estados Unidos, nunca se han encontrado en el Esquisto de Burgess.',
          en: 'While ctenophore fossils have been discovered in China and the United States, they have never been discovered in the Burgess Shale.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Los fósiles descubiertos por Caron en el Esquisto de Burgess estaban mejor conservados que los de China y Estados Unidos.',
          en: 'The fossils discovered by Caron in the Burgess Shale were better preserved than those found by other researchers in China and the United States.',
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'La opción B debilita directamente la afirmación de Caron. Si los fósiles están tan mal conservados que no pueden identificarse de manera concluyente ni como medusas ni como ctenóforos, entonces tampoco puede sostenerse la afirmación de Caron de que son ctenóforos. Las opciones A, C y D son irrelevantes o no afectan la afirmación de Caron sobre esos fósiles específicos.',
      en: `Choice B directly weakens Caron's claim. If the fossils are so poorly preserved that they cannot be conclusively identified as either jellyfish or ctenophores, then Caron's claim that they are ctenophores is also unsupported. Choices A, C, and D are irrelevant to or do not affect Caron's specific claim about the Chinese and American fossils.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '3543e6e2',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'El siguiente texto es de la novela Sentido y Sensibilidad (1811) de Jane Austen. Elinor vive con sus hermanas menores y su madre, la Sra. Dashwood. Elinor, la hija mayor cuyo consejo era tan eficaz, poseía tal fortaleza de entendimiento y serenidad de juicio que, aunque tenía solo diecinueve años, era la consejera de su madre y lograba frecuentemente contrarrestar, en beneficio de todos, la impulsividad de mente de la Sra. Dashwood, que generalmente la hubiera llevado a la imprudencia. Tenía un excelente corazón; su carácter era afectuoso y sus sentimientos eran fuertes; pero sabía cómo gobernarlos: era un conocimiento que su madre aún no había adquirido y que una de sus hermanas había resuelto no aprender jamás. Según el texto, ¿qué es cierto sobre Elinor?',
      en: `The following text is from Jane Austen's 1811 novel Sense and Sensibility. Elinor lives with her younger sisters and her mother, Mrs. Dashwood. Elinor, this eldest daughter whose advice was so effectual, possessed a strength of understanding and coolness of judgment which qualified her, though only nineteen, to be the counsellor of her mother, and enabled her frequently to counteract, to the advantage of them all, that eagerness of mind in Mrs. Dashwood which must generally have led to imprudence. She had an excellent heart; her disposition was affectionate, and her feelings were strong; but she knew how to govern them: it was a knowledge which her mother had yet to learn, and which one of her sisters had resolved never to be taught. According to the text, what is true about Elinor?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Elinor frecuentemente discute con su madre, pero no logra cambiar su opinión.',
          en: 'Elinor often argues with her mother but fails to change her mind.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Elinor puede ser excesivamente sensible en asuntos familiares.',
          en: 'Elinor can be overly sensitive with regard to family matters.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Elinor piensa que su madre es un mal ejemplo a seguir.',
          en: 'Elinor thinks her mother is a bad role model.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Elinor es notablemente madura para su edad.',
          en: 'Elinor is remarkably mature for her age.',
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'La opción D es correcta porque el texto indica que, aunque Elinor tiene solo diecinueve años, sirve como consejera de su madre y posee una fortaleza de entendimiento y serenidad de juicio excepcionales, lo que demuestra una madurez inusual para su edad. Las opciones A, B y C no están respaldadas por el texto.',
      en: `Choice D is correct because the text states that although Elinor is only nineteen, she serves as her mother's counsellor and possesses exceptional strength of understanding and coolness of judgment, demonstrating unusual maturity for her age. Choices A, B, and C are not supported by the text.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '1ba5ad7a',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Muchos teóricos literarios distinguen entre fábula —el contenido de una narrativa— y syuzhet —su organización y presentación de eventos—. En El Padrino, Parte II, la fábula es la historia de la familia Corleone y el syuzhet es la presentación alternada entre dos líneas temporales. Pero el teórico Mijaíl Bajtín sostuvo que fábula y syuzhet son insuficientes para describir completamente una narrativa, ya que las categorizaciones sistemáticas de los fenómenos artísticos descuidan la forma sutil en que el significado surge de las interacciones entre el artista, la obra y el público. ¿Cuál de las siguientes opciones expresa mejor la idea principal del texto?',
      en: `Many literary theorists distinguish between fabula—a narrative's content—and syuzhet—its arrangement and presentation of events. In The Godfather Part II, the fabula is the story of the Corleone family and the syuzhet is the presentation alternating between two timelines. But literary theorist Mikhail Bakhtin maintained that fabula and syuzhet are insufficient to completely describe a narrative—he held that systematic categorizations of artistic phenomena discount the subtle way in which meaning is created by interactions between the artist, the work, and the audience. Which choice best states the main idea of the text?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El teórico Mijaíl Bajtín argumentó que hay características importantes de las narrativas que no están completamente contempladas en los dos conceptos que otros teóricos han utilizado para analizarlas.',
          en: 'Literary theorist Mikhail Bakhtin argued that there are important characteristics of narratives not fully encompassed by two concepts other theorists have used to analyze narratives.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Mijaíl Bajtín sostuvo que el significado no es inherente a una narrativa, sino que se crea cuando el público la encuentra, por lo que diferentes personas la interpretan de manera diferente.',
          en: 'Mikhail Bakhtin claimed that meaning is not inherent in a narrative but is created when an audience encounters it, so different people interpret narratives differently.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Los métodos narrativos de El Padrino, Parte II pueden parecer inusualmente complejos, pero se pueden comprender fácilmente usando dos conceptos de la teoría literaria.',
          en: 'The storytelling methods used in The Godfather Part II may seem unusually complicated, but they can be easily understood when two concepts from literary theory are utilized.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Las narrativas contadas fuera del orden cronológico son más difíciles de entender para el público que las presentadas de manera cronológica.',
          en: 'Narratives told out of chronological order are more difficult for audiences to understand than narratives presented chronologically.',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'La opción A es correcta porque el texto presenta los conceptos de fábula y syuzhet, y luego muestra cómo Bajtín argumentó que estos dos conceptos son insuficientes para describir completamente una narrativa. Esa es la idea principal del texto. Las opciones B, C y D introducen ideas no respaldadas o secundarias.',
      en: 'Choice A is correct because the text introduces the concepts of fabula and syuzhet, then shows how Bakhtin argued these two concepts are insufficient to fully describe a narrative. That is the main idea. Choices B, C, and D introduce unsupported or secondary ideas.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '602b47c7',
    tipo: 'lectura-escritura',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Información e Ideas',
    habilidad: 'Ideas Centrales y Detalles',
    enunciado: {
      es: 'Los biólogos habían predicho que la estructura de las plumas de las aves varía con la temperatura del hábitat, pero esto no había sido probado en entornos montañosos. El ornitólogo Sahas Barve estudió las plumas de 249 especies de aves cantoras que habitan distintas elevaciones —y por tanto experimentan distintas temperaturas— en las montañas del Himalaya. Encontró que las plumas de las especies de alta elevación no solo tienen una mayor proporción de secciones suaves y cálidas en relación con las secciones planas y lisas, sino que también tienden a ser más largas, proporcionando una capa más gruesa de aislamiento. ¿Cuál de las siguientes opciones expresa mejor la idea principal del texto?',
      en: `Biologists had predicted that birds' feather structures vary with habitat temperature, but this hadn't been tested in mountain environments. Ornithologist Sahas Barve studied feathers from 249 songbird species inhabiting different elevations—and thus different temperatures—in the Himalaya Mountains. He found that feathers of high-elevation species not only have a greater proportion of warming downy sections to flat and smooth sections, but also tend to be longer, providing a thicker layer of insulation. Which choice best states the main idea of the text?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La investigación de Barve muestra que algunas especies de aves del Himalaya han desarrollado plumas que regulan mejor la temperatura corporal que las de otras especies, contradiciendo predicciones previas.',
          en: `Barve's investigation shows that some Himalayan songbird species have evolved feathers that better regulate body temperature than those of other species, contradicting previous predictions.`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Barve encontró una asociación entre la temperatura del hábitat y la estructura de las plumas en las aves cantoras del Himalaya, aportando nueva evidencia a una predicción general.',
          en: 'Barve found an association between habitat temperature and feather structure among Himalayan songbirds, lending new support to a general prediction.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Barve descubrió que las aves cantoras se han adaptado a su entorno desarrollando plumas sin secciones planas y lisas, lo cual complica una hipótesis anterior.',
          en: 'Barve discovered that songbirds have adapted to their environment by growing feathers without flat and smooth sections, complicating an earlier hypothesis.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Los resultados del estudio de Barve sugieren que la capacidad de las aves para soportar temperaturas frías está determinada más por la longitud de las plumas que por su estructura.',
          en: `The results of Barve's study suggest that the ability of birds to withstand cold temperatures is determined more strongly by feather length than feather structure.`,
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'La opción B es correcta porque el texto describe cómo Barve encontró que las aves de mayor altitud (menor temperatura) tienen plumas con más aislamiento, lo que respalda la predicción general de que la estructura de las plumas varía con la temperatura del hábitat. La opción A es incorrecta porque el estudio no contradice predicciones previas, sino que las respalda.',
      en: 'Choice B is correct because the text describes how Barve found that higher-elevation birds have more insulating feathers, supporting the general prediction that feather structure varies with habitat temperature. Choice A is incorrect because the study does not contradict previous predictions—it supports them.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '068f939b',
    tipo: 'lectura-escritura',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Información e Ideas',
    habilidad: 'Dominio de la Evidencia',
    enunciado: {
      es: 'El concepto griego antiguo de "mímesis" —usado en obras de Platón, Aristóteles y otros filósofos griegos para hablar del arte representacional— es un concepto fundamental de la filosofía estética occidental. La mímesis se traduce típicamente como "imitación" en las ediciones modernas de textos griegos, pero el académico Stephen Halliwell advierte que esto es excesivamente reduccionista: "imitación" implica que el arte simplemente copia una realidad que existe fuera de la obra de arte, y traducir "mímesis" de esa manera oculta las formas multifacéticas en que los griegos antiguos entendían la relación entre el arte y la realidad. ¿Cuál enunciado, si fuera verdadero, respaldaría más directamente la afirmación de Halliwell?',
      en: `The ancient Greek concept of "mimesis"—used in the works of Plato, Aristotle, and other Greek philosophers in discussions of representational art—is a foundational concept of Western aesthetic philosophy. Mimesis is typically translated as "imitation" in modern editions of ancient Greek texts, but scholar Stephen Halliwell warns that this is overly reductive: "imitation" implies that art merely copies a reality that exists outside the work of art, and translating "mimesis" thusly obscures the multifaceted ways in which the ancient Greeks understood the relationship between art and reality. Which statement, if true, would most directly support Halliwell's claim?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Una de las primeras apariciones de la raíz de mímesis puede encontrarse en una tragedia griega que hace referencia a la personificación dramática, y esa raíz llegó a asociarse con las artes musicales y poéticas en el siglo V a.C.',
          en: `One of the earliest appearances of mimesis's root word can be found in an ancient Greek tragedy in reference to dramatic impersonation, and the root came to be associated with the musical and poetic arts by the fifth century BCE.`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Las teorizaciones de mímesis tanto de Platón como de Aristóteles examinan los efectos psicológicos que las obras de arte producen en el espectador.',
          en: `Both Plato's and Aristotle's theorizations of mimesis examine the psychological effects that works of art induce in the viewer or listener.`,
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Aunque algunas de las obras más tempranas de Platón discuten ideas estéticas, el término "mímesis" no aparece en sus discusiones sobre el arte sino hasta obras relativamente tardías.',
          en: `Although several of Plato's earliest works discuss aesthetic ideas, the term "mimesis" doesn't appear in Plato's discussions of art until relatively late works.`,
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Aunque los escritos de Platón caracterizan el arte representacional como un reflejo inferior del mundo físico, Aristóteles sugiere que la mímesis puede referirse a la capacidad del arte de imaginar condiciones hipotéticas que no existen aún.',
          en: `Although Plato's writings typically characterize representational art as an inferior reflection of the physical world, Aristotle suggests that mimesis can refer to art's capacity to envision hypothetical conditions that could, but don't yet, exist.`,
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'La opción D respalda directamente a Halliwell: si Platón entiende la mímesis como copia inferior de la realidad (consistent con "imitación") pero Aristóteles la entiende como la capacidad del arte de imaginar lo que podría existir (más allá de la imitación), eso confirma que "imitación" es una traducción excesivamente simplificada que oculta los matices del concepto. Las opciones A, B y C no establecen este contraste crucial.',
      en: `Choice D directly supports Halliwell: if Plato views mimesis as inferior copying (consistent with "imitation") but Aristotle sees it as art's capacity to envision what could exist (beyond imitation), that confirms "imitation" is an overly simplified translation that obscures the concept's nuance. Choices A, B, and C do not establish this crucial contrast.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // MATEMÁTICAS  (15 questions)
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 'f224df07',
    tipo: 'matematicas',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Álgebra',
    habilidad: 'Desigualdades lineales en una o dos variables',
    enunciado: {
      es: 'Un helicóptero de carga entrega únicamente paquetes de 100 libras y paquetes de 120 libras. En cada viaje de entrega, el helicóptero debe llevar al menos 10 paquetes, y el peso total de los paquetes puede ser como máximo 1,100 libras. ¿Cuál es el número máximo de paquetes de 120 libras que el helicóptero puede llevar por viaje?',
      en: 'A cargo helicopter delivers only 100-pound packages and 120-pound packages. For each delivery trip, the helicopter must carry at least 10 packages, and the total weight of the packages can be at most 1,100 pounds. What is the maximum number of 120-pound packages that the helicopter can carry per trip?',
    },
    opciones: [
      { letra: 'A', texto: { es: '2', en: '2' } },
      { letra: 'B', texto: { es: '4', en: '4' } },
      { letra: 'C', texto: { es: '5', en: '5' } },
      { letra: 'D', texto: { es: '6', en: '6' } },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'Sea a el número de paquetes de 120 libras y b el de 100 libras. Las restricciones son: 120a + 100b ≤ 1,100 y a + b ≥ 10. Para maximizar a, hay que minimizar b. El mínimo de b es 10 − a. Sustituyendo: 120a + 100(10 − a) ≤ 1,100 → 20a ≤ 100 → a ≤ 5. El máximo es 5 paquetes de 120 libras.',
      en: 'Let a = number of 120-pound packages and b = number of 100-pound packages. Constraints: 120a + 100b ≤ 1,100 and a + b ≥ 10. To maximize a, minimize b to 10 − a. Substituting: 120a + 100(10 − a) ≤ 1,100 → 20a ≤ 100 → a ≤ 5. The maximum is 5 packages.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '45cfb9de',
    tipo: 'matematicas',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Álgebra',
    habilidad: 'Desigualdades lineales en una o dos variables',
    enunciado: {
      es: 'La escuela de Adán queda a 20 minutos caminando o a 5 minutos en autobús desde su casa. El autobús pasa cada 30 minutos, y el número de minutos w que Adán espera el autobús varía entre 0 y 30. ¿Cuál de las siguientes desigualdades da los valores de w para los que sería más rápido que Adán caminara a la escuela?',
      en: `Adam's school is a 20-minute walk or a 5-minute bus ride away from his house. The bus runs once every 30 minutes, and the number of minutes w that Adam waits for the bus varies between 0 and 30. Which of the following inequalities gives the values of w for which it would be faster for Adam to walk to school?`,
    },
    opciones: [
      { letra: 'A', texto: { es: 'w < 15', en: 'w < 15' } },
      { letra: 'B', texto: { es: 'w + 5 < 20', en: 'w + 5 < 20' } },
      { letra: 'C', texto: { es: 'w − 5 > 20', en: 'w − 5 > 20' } },
      { letra: 'D', texto: { es: 'w + 5 > 20', en: 'w + 5 > 20' } },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'El tiempo total en autobús es w + 5 minutos (espera + trayecto). Caminar tarda 20 minutos. Caminar es más rápido cuando el autobús tarda más: w + 5 > 20. Las opciones A y B son incorrectas porque w − 5 no representa el tiempo total del autobús. La opción C usa resta en lugar de suma.',
      en: `The total bus time is w + 5 minutes (wait + ride). Walking takes 20 minutes. Walking is faster when the bus takes longer: w + 5 > 20. Choices A and B are incorrect because they don't correctly represent total bus time. Choice C uses subtraction instead of addition.`,
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '87322577',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en dos variables',
    enunciado: {
      es: 'La ecuación x + y = 75 relaciona el número de minutos x que María corre cada día con el número de minutos y que pasa en bicicleta cada día. ¿Qué representa el número 75 en la ecuación?',
      en: 'The equation x + y = 75 relates the number of minutes x Maria spends running each day and the number of minutes y she spends biking each day. What does the number 75 represent in the equation?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El número de minutos que pasa corriendo cada día',
          en: 'The number of minutes spent running each day',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El número de minutos que pasa en bicicleta cada día',
          en: 'The number of minutes spent biking each day',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El número total de minutos que pasa corriendo y en bicicleta cada día',
          en: 'The total number of minutes spent running and biking each day',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número de minutos en bicicleta por cada minuto corriendo',
          en: 'The number of minutes spent biking for each minute spent running',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'En la ecuación x + y = 75, x representa los minutos corriendo e y los minutos en bicicleta. La suma x + y representa el total de minutos de ambas actividades, que es igual a 75. Las opciones A y B son incorrectas porque x e y pueden variar; la opción D describe una relación de cociente, no una suma.',
      en: 'In x + y = 75, x represents running minutes and y represents biking minutes. Their sum represents the total minutes for both activities, which equals 75. Choices A and B are incorrect because x and y can each vary. Choice D describes a ratio, not a sum.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'aa85b138',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en una variable',
    enunciado: {
      es: 'Un árbol medía 6 pies cuando fue plantado. La ecuación 6 + 2n = 14 puede usarse para encontrar cuántos años n tardó el árbol en alcanzar una altura de 14 pies. ¿Cuál de las siguientes es la mejor interpretación del número 2 en este contexto?',
      en: 'A tree had a height of 6 feet when it was planted. The equation 6 + 2n = 14 can be used to find how many years n it took the tree to reach a height of 14 feet. Which of the following is the best interpretation of the number 2 in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El número de años que tardó el árbol en duplicar su altura',
          en: 'The number of years it took the tree to double its height',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El número promedio de pies que el árbol creció por año',
          en: 'The average number of feet that the tree grew per year',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'La altura en pies del árbol cuando tenía 1 año de edad',
          en: 'The height, in feet, of the tree when it was 1 year old',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número promedio de años que tardan árboles similares en crecer 14 pies',
          en: 'The average number of years it takes similar trees to grow 14 feet',
        },
      },
    ],
    respuestaCorrecta: 'B',
    explicacion: {
      es: 'En la ecuación 6 + 2n = 14, el 6 es la altura inicial, 14 es la altura final y n es el número de años. El término 2n representa el crecimiento total, por lo que 2 es el crecimiento promedio por año, en pies. La opción A es incorrecta porque 2 es una tasa de crecimiento, no el tiempo en duplicarse. La opción C es incorrecta: a los 1 año, la altura sería 6 + 2(1) = 8 pies, no 2.',
      en: 'In 6 + 2n = 14, the 6 is the initial height, 14 is the final height, and n is the number of years. The term 2n represents total growth, so 2 is the average yearly growth in feet. Choice A is incorrect because 2 is a growth rate, not a doubling time. Choice C is wrong because at year 1, height = 6 + 2(1) = 8 feet, not 2.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'dd797fe2',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en dos variables',
    enunciado: {
      es: 'Mario compró 4 carpetas que cuestan x dólares cada una y 3 cuadernos que cuestan y dólares cada uno. Si la ecuación 4x + 3y = 24 representa esta situación, ¿cuál de las siguientes es la mejor interpretación del número 24 en este contexto?',
      en: 'Mario purchased 4 binders that cost x dollars each and 3 notebooks that cost y dollars each. The equation 4x + 3y = 24 represents this situation. Which of the following is the best interpretation of 24 in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El costo total, en dólares, de todas las carpetas compradas',
          en: 'The total cost, in dollars, for all binders purchased',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El costo total, en dólares, de todos los cuadernos comprados',
          en: 'The total cost, in dollars, for all notebooks purchased',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El costo total, en dólares, de todas las carpetas y cuadernos comprados',
          en: 'The total cost, in dollars, for all binders and notebooks purchased',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'La diferencia en el costo total, en dólares, entre el número de carpetas y cuadernos comprados',
          en: 'The difference in the total cost, in dollars, between the number of binders and notebooks purchased',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'La expresión 4x representa el costo total de las 4 carpetas y 3y el de los 3 cuadernos. La suma 4x + 3y = 24 indica que el costo total de carpetas y cuadernos juntos es $24. Las opciones A y B describen solo parte del costo; la opción D es incorrecta porque la ecuación es una suma, no una diferencia.',
      en: 'The expression 4x represents the total cost of 4 binders and 3y the total cost of 3 notebooks. So 4x + 3y = 24 means the combined cost of all binders and notebooks is $24. Choices A and B describe only part of the cost; Choice D is wrong because the equation is a sum, not a difference.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '3462d850',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Álgebra',
    habilidad: 'Funciones lineales',
    enunciado: {
      es: 'Marisol condujo 3 horas desde la Ciudad A hasta la Ciudad B. La ecuación d = 45t estima la distancia d, en millas, que Marisol recorrió después de conducir durante t horas. ¿Qué representa el número 45 en la ecuación?',
      en: 'Marisol drove 3 hours from City A to City B. The equation d = 45t estimates the distance d, in miles, Marisol traveled after driving for t hours. Which of the following does 45 represent in the equation?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Marisol hizo 45 viajes de la Ciudad A a la Ciudad B.',
          en: 'Marisol took 45 trips from City A to City B.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'La distancia entre la Ciudad A y la Ciudad B es de 45 millas.',
          en: 'The distance between City A and City B is 45 miles.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Marisol condujo a una velocidad promedio de aproximadamente 45 millas por hora.',
          en: 'Marisol drove at an average speed of about 45 miles per hour.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Marisol tardó 45 horas en conducir de la Ciudad A a la Ciudad B.',
          en: 'It took Marisol 45 hours to drive from City A to City B.',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'En la ecuación d = 45t, el coeficiente 45 multiplica al tiempo t para dar la distancia d. Eso significa que por cada hora de conducción, Marisol recorre 45 millas; es decir, su velocidad promedio es 45 millas por hora. Las opciones A, B y D confunden la tasa con otras cantidades.',
      en: 'In d = 45t, the coefficient 45 multiplies time t to give distance d. This means for each hour of driving, Marisol travels 45 miles—her average speed is 45 mph. Choices A, B, and D confuse the rate with other quantities.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '620fe971',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Álgebra',
    habilidad: 'Funciones lineales',
    enunciado: {
      es: 'Un equipo de trabajadores lleva horas descargando carga de un barco. La ecuación y = 120 − 25x modela el número aproximado de toneladas de carga y que queda por mover x horas después de que el equipo comenzó a trabajar. El gráfico de esta ecuación en el plano xy es una línea. ¿Cuál es la mejor interpretación del intercepto en x en este contexto?',
      en: 'A team of workers has been moving cargo off of a ship. The equation y = 120 − 25x models the approximate number of tons of cargo y that remains to be moved x hours after the team started working. The graph of this equation in the xy-plane is a line. What is the best interpretation of the x-intercept in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El equipo habrá movido toda la carga en aproximadamente 4.8 horas.',
          en: 'The team will have moved all the cargo in about 4.8 hours.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El equipo ha estado moviendo aproximadamente 4.8 toneladas de carga por hora.',
          en: 'The team has been moving about 4.8 tons of cargo per hour.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El equipo ha estado moviendo aproximadamente 25 toneladas de carga por hora.',
          en: 'The team has been moving about 25 tons of cargo per hour.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El equipo comenzó con 120 toneladas de carga por mover.',
          en: 'The team started with 120 tons of cargo to move.',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'El intercepto en x ocurre cuando y = 0: 0 = 120 − 25x → x = 4.8. Como y representa la carga restante, y = 0 significa que no queda carga. Por lo tanto, el intercepto en x indica que el equipo terminará de mover toda la carga a las 4.8 horas. La opción D describe el intercepto en y (carga inicial), no el intercepto en x.',
      en: 'The x-intercept occurs when y = 0: 0 = 120 − 25x → x = 4.8. Since y represents remaining cargo, y = 0 means no cargo remains. So the x-intercept means the team finishes moving all cargo at 4.8 hours. Choice D describes the y-intercept (initial cargo), not the x-intercept.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'af2ba762',
    tipo: 'matematicas',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Álgebra',
    habilidad: 'Funciones lineales',
    enunciado: {
      es: 'Según datos del Departamento de Energía de Estados Unidos, el precio promedio por galón de gasolina regular desde el 1 de septiembre hasta el 1 de diciembre de 2014 se modela con la función F definida por F(x) = 2.74 − 0.19(x − 3), donde F(x) es el precio promedio por galón x meses después del 1 de septiembre. La constante 2.74 en esta función estima ¿cuál de las siguientes opciones?',
      en: 'According to data from the US Department of Energy, the average price per gallon of regular gasoline from September 1 to December 1, 2014, is modeled by F(x) = 2.74 − 0.19(x − 3), where F(x) is the average price per gallon x months after September 1. The constant 2.74 in this function estimates which of the following?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La disminución mensual promedio en el precio por galón',
          en: 'The average monthly decrease in the price per gallon',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'La diferencia en el precio promedio por galón del 1 de septiembre al 1 de diciembre de 2014',
          en: 'The difference in the average price per gallon from September 1 to December 1, 2014',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El precio promedio por galón el 1 de septiembre de 2014',
          en: 'The average price per gallon on September 1, 2014',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El precio promedio por galón el 1 de diciembre de 2014',
          en: 'The average price per gallon on December 1, 2014',
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'Para encontrar cuándo F(x) = 2.74: 2.74 = 2.74 − 0.19(x − 3) → 0 = −0.19(x − 3) → x = 3. Tres meses después del 1 de septiembre es el 1 de diciembre, entonces 2.74 es el precio estimado el 1 de diciembre. La opción C es incorrecta: F(0) = 2.74 − 0.19(0 − 3) = 2.74 + 0.57 = 3.31, que es el precio del 1 de septiembre.',
      en: 'To find when F(x) = 2.74: 2.74 = 2.74 − 0.19(x − 3) → 0 = −0.19(x − 3) → x = 3. Three months after September 1 is December 1, so 2.74 is the estimated price on December 1. Choice C is wrong: F(0) = 2.74 + 0.57 = 3.31, which is the September 1 price.',
    },
    calculadora: true,
    expresionDesmos: null,
  },

  {
    id: '113b938e',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Álgebra',
    habilidad: 'Funciones lineales',
    enunciado: {
      es: 'La ecuación y = 20 − 4x representa la velocidad y, en pies por segundo, de la bicicleta de Sheila x segundos después de aplicar los frenos. Si la ecuación se grafica en el plano xy, ¿cuál de las siguientes es la mejor interpretación de la coordenada x del intercepto en x en el contexto del problema?',
      en: `The equation y = 20 − 4x represents the speed y, in feet per second, of Sheila's bicycle x seconds after she applied the brakes. If the equation is graphed in the xy-plane, which of the following is the best interpretation of the x-coordinate of the line's x-intercept in the context of the problem?`,
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La velocidad de la bicicleta de Sheila, en pies por segundo, antes de que ella aplicara los frenos',
          en: `The speed of Sheila's bicycle, in feet per second, before Sheila applied the brakes`,
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El número de pies por segundo en que disminuyó la velocidad de la bicicleta por cada segundo después de aplicar los frenos',
          en: `The number of feet per second the speed of Sheila's bicycle decreased each second after she applied the brakes`,
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El número de segundos desde que Sheila comenzó a frenar hasta que la bicicleta se detuvo completamente',
          en: 'The number of seconds it took from the time Sheila began applying the brakes until the bicycle came to a complete stop',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número de pies que recorrió la bicicleta de Sheila desde que comenzó a frenar hasta que se detuvo',
          en: `The number of feet Sheila's bicycle traveled from the time she began applying the brakes until the bicycle came to a complete stop`,
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'El intercepto en x ocurre cuando y = 0 (velocidad = 0). En ese punto, la bicicleta se ha detenido completamente. La coordenada x de ese intercepto representa el tiempo en segundos desde que se aplicaron los frenos hasta la parada completa. La opción A describe el intercepto en y; la opción B describe la pendiente; la opción D confunde tiempo con distancia.',
      en: 'The x-intercept occurs when y = 0 (speed = 0), meaning the bicycle has completely stopped. The x-coordinate of that intercept represents the number of seconds from when brakes were applied to when the bike stopped. Choice A describes the y-intercept; Choice B describes the slope; Choice D confuses time with distance.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '5bf0f84a',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Matemática Avanzada',
    habilidad: 'Funciones no lineales',
    enunciado: {
      es: 'La función h(t) = 72 − 16t² modela la altura h, en pies, de un objeto sobre el suelo t segundos después de ser lanzado verticalmente hacia arriba. ¿Qué representa el número 72 en la función?',
      en: 'The function h(t) = 72 − 16t² models the height h, in feet, of an object above ground t seconds after being launched straight up in the air. What does the number 72 represent in the function?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La altura inicial, en pies, del objeto',
          en: 'The initial height, in feet, of the object',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'La altura máxima, en pies, del objeto',
          en: 'The maximum height, in feet, of the object',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'La velocidad inicial, en pies por segundo, del objeto',
          en: 'The initial speed, in feet per second, of the object',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'La velocidad máxima, en pies por segundo, del objeto',
          en: 'The maximum speed, in feet per second, of the object',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'Cuando t = 0 (en el momento del lanzamiento), h(0) = 72 − 16(0)² = 72. Por lo tanto, 72 representa la altura del objeto en el instante inicial, es decir, su altura de lanzamiento. La altura máxima ocurriría en otro momento (cuando la velocidad es 0), y 16 está relacionado con la aceleración gravitacional, no con la velocidad inicial.',
      en: 'When t = 0 (at launch), h(0) = 72 − 16(0)² = 72. So 72 represents the height of the object at the initial moment—its launch height. The maximum height would occur at a different time (when velocity = 0), and 16 relates to gravitational acceleration, not initial speed.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '70ebd3d0',
    tipo: 'matematicas',
    modulo: 2,
    dificultad: 'medio',
    dominio: 'Matemática Avanzada',
    habilidad: 'Funciones no lineales',
    enunciado: {
      es: 'La función N(d) = 115(0.90)^d puede usarse para modelar el número de especies de braquiópodos a distintas profundidades del océano d, donde d está en cientos de metros. ¿Cuál de las siguientes predice el modelo?',
      en: 'The function N(d) = 115(0.90)^d can be used to model the number of species of brachiopods at various ocean depths d, where d is in hundreds of meters. Which of the following does the model predict?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Por cada aumento de 1 metro en la profundidad, el número de especies de braquiópodos disminuye en 115.',
          en: 'For every increase in depth by 1 meter, the number of brachiopod species decreases by 115.',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Por cada aumento de 1 metro en la profundidad, el número de especies de braquiópodos disminuye en un 10%.',
          en: 'For every increase in depth by 1 meter, the number of brachiopod species decreases by 10%.',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'Por cada aumento de 100 metros en la profundidad, el número de especies de braquiópodos disminuye en 115.',
          en: 'For every increase in depth by 100 meters, the number of brachiopod species decreases by 115.',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'Por cada aumento de 100 metros en la profundidad, el número de especies de braquiópodos disminuye en un 10%.',
          en: 'For every increase in depth by 100 meters, the number of brachiopod species decreases by 10%.',
        },
      },
    ],
    respuestaCorrecta: 'D',
    explicacion: {
      es: 'La función es exponencial con base 0.90. Como d se mide en cientos de metros, un aumento de d en 1 corresponde a 100 metros de profundidad. La base 0.90 significa que por cada incremento de 1 en d (es decir, 100 metros), N se multiplica por 0.90, lo que equivale a una disminución del 10%. Las opciones A y C describen disminuciones lineales, no exponenciales.',
      en: 'The function is exponential with base 0.90. Since d is in hundreds of meters, an increase of 1 in d corresponds to 100 meters of depth. The base 0.90 means N is multiplied by 0.90 for each unit increase in d (each 100 meters), which is a 10% decrease. Choices A and C describe linear decreases, not exponential ones.',
    },
    calculadora: true,
    expresionDesmos: null,
  },

  {
    id: '9d4270fe',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en una variable',
    enunciado: {
      es: 'Una empresa que crea y vende dispensadores de cinta calcula su ganancia mensual en dólares restando sus costos fijos mensuales de sus ingresos mensuales por ventas. La ecuación P = 1,500n − 12,000 representa esta situación para un mes en que se fabrican y venden n dispensadores. ¿Cuál enunciado es la mejor interpretación de 1,500n en este contexto?',
      en: 'A company that creates and sells tape dispensers calculates its monthly profit in dollars by subtracting its fixed monthly costs from its monthly sales revenue. The equation P = 1,500n − 12,000 represents this situation for a month where n tape dispensers are created and sold. Which statement is the best interpretation of 1,500n in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'Los ingresos mensuales por ventas, en dólares, de vender n dispensadores de cinta',
          en: 'The monthly sales revenue, in dollars, from selling n tape dispensers',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'Los ingresos mensuales por ventas, en dólares, de cada dispensador de cinta vendido',
          en: 'The monthly sales revenue, in dollars, from each tape dispenser sold',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El costo mensual, en dólares, de crear cada dispensador de cinta',
          en: 'The monthly cost, in dollars, of creating each tape dispenser',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El costo mensual, en dólares, de crear n dispensadores de cinta',
          en: 'The monthly cost, in dollars, of creating n tape dispensers',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'En la ecuación P = 1,500n − 12,000, la ganancia (P) es igual a los ingresos por ventas menos los costos fijos. Por lo tanto, 1,500n representa los ingresos totales por ventas de n dispensadores, y 12,000 representa los costos fijos mensuales. La opción B describe solo el precio por unidad (1,500), no el total de ingresos.',
      en: 'In P = 1,500n − 12,000, profit equals sales revenue minus fixed costs. Therefore 1,500n represents the total sales revenue from n dispensers, and 12,000 is the fixed monthly cost. Choice B describes only the per-unit price (1,500), not the total revenue.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: 'cc7ffe02',
    tipo: 'matematicas',
    modulo: 2,
    dificultad: 'dificil',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en dos variables',
    enunciado: {
      es: 'Keenan preparó 44 tazas de caldo de verduras. Luego llenó s frascos pequeños y g frascos grandes con todo el caldo. La ecuación 2s + 4g = 44 representa esta situación. ¿Cuál es la mejor interpretación de 4g en este contexto?',
      en: 'Keenan made 44 cups of vegetable broth. Keenan then filled s small jars and g large jars with all the vegetable broth he made. The equation 2s + 4g = 44 represents this situation. Which is the best interpretation of 4g in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El número de frascos grandes que llenó Keenan',
          en: 'The number of large jars Keenan filled',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El número de frascos pequeños que llenó Keenan',
          en: 'The number of small jars Keenan filled',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El número total de tazas de caldo de verduras en los frascos grandes',
          en: 'The total number of cups of vegetable broth in the large jars',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número total de tazas de caldo de verduras en los frascos pequeños',
          en: 'The total number of cups of vegetable broth in the small jars',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'En la ecuación 2s + 4g = 44, el término 2s representa el total de tazas en los frascos pequeños (2 tazas por frasco × s frascos) y 4g representa el total de tazas en los frascos grandes (4 tazas por frasco × g frascos). La suma es igual a las 44 tazas totales. La opción A describe solo g, no 4g.',
      en: 'In 2s + 4g = 44, the term 2s represents total cups in small jars (2 cups per jar × s jars) and 4g represents total cups in large jars (4 cups per jar × g jars). Their sum equals the 44 total cups. Choice A describes only g, not 4g.',
    },
    calculadora: false,
    expresionDesmos: null,
  },

  {
    id: '9d9fe1e6',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'facil',
    dominio: 'Álgebra',
    habilidad: 'Funciones lineales',
    enunciado: {
      es: 'En clase de ciencias, Diego realizó un experimento para aprender sobre la evaporación. Midió la altura del líquido en un vaso durante un período de tiempo. La función f(d) = 47 − 3d da la altura estimada f, en centímetros, del líquido en el vaso d días después del inicio del experimento. ¿Cuál de las siguientes es la mejor interpretación de f(0) en este contexto?',
      en: 'In science class, Diego conducted an experiment to learn about evaporation. Diego measured the height of fluid in a beaker over a period of time. The function f(d) = 47 − 3d gives the estimated height f, in centimeters, of the fluid in the beaker d days after the start of the experiment. Which of the following is the best interpretation of f(0) in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'La altura estimada, en centímetros, del líquido al inicio del experimento',
          en: 'The estimated height, in centimeters, of the fluid at the start of the experiment',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'La altura estimada, en centímetros, del líquido al final del experimento',
          en: 'The estimated height, in centimeters, of the fluid at the end of the experiment',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El cambio estimado en la altura, en centímetros, del líquido por día',
          en: 'The estimated change in the height, in centimeters, of the fluid each day',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número estimado de días para que todo el líquido se evapore',
          en: 'The estimated number of days for all the fluid to evaporate',
        },
      },
    ],
    respuestaCorrecta: 'A',
    explicacion: {
      es: 'f(0) = 47 − 3(0) = 47. Como d representa los días desde el inicio del experimento, d = 0 es el momento inicial. Por lo tanto, f(0) = 47 cm es la altura estimada del líquido al inicio del experimento. La opción C describe la pendiente −3 (cambio por día), no f(0).',
      en: 'f(0) = 47 − 3(0) = 47. Since d represents days since the start, d = 0 is the initial moment. So f(0) = 47 cm is the estimated height of the fluid at the start of the experiment. Choice C describes the slope −3 (change per day), not f(0).',
    },
    calculadora: false,
    expresionDesmos: null,
  },


  {
    id: 'df78b361',
    tipo: 'matematicas',
    modulo: 1,
    dificultad: 'medio',
    dominio: 'Álgebra',
    habilidad: 'Ecuaciones lineales en dos variables',
    enunciado: {
      es: 'Lily preparó 40 tazas de mermelada. Luego llenó s recipientes pequeños y g recipientes grandes con toda la mermelada. La ecuación 2s + 5g = 40 representa esta situación. ¿Cuál es la mejor interpretación de 5g en este contexto?',
      en: 'Lily made 40 cups of jam. Lily then filled s small containers and g large containers with all the jam she made. The equation 2s + 5g = 40 represents this situation. Which is the best interpretation of 5g in this context?',
    },
    opciones: [
      {
        letra: 'A',
        texto: {
          es: 'El número de recipientes grandes que llenó Lily',
          en: 'The number of large containers Lily filled',
        },
      },
      {
        letra: 'B',
        texto: {
          es: 'El número de recipientes pequeños que llenó Lily',
          en: 'The number of small containers Lily filled',
        },
      },
      {
        letra: 'C',
        texto: {
          es: 'El número total de tazas de mermelada en los recipientes grandes',
          en: 'The total number of cups of jam in the large containers',
        },
      },
      {
        letra: 'D',
        texto: {
          es: 'El número total de tazas de mermelada en los recipientes pequeños',
          en: 'The total number of cups of jam in the small containers',
        },
      },
    ],
    respuestaCorrecta: 'C',
    explicacion: {
      es: 'En 2s + 5g = 40, el término 2s representa el total de tazas en los recipientes pequeños (2 tazas × s recipientes) y 5g representa el total de tazas en los recipientes grandes (5 tazas × g recipientes). La suma es igual a 40 tazas totales. La opción A describe solo g (el número de recipientes), no 5g (el volumen total).',
      en: 'In 2s + 5g = 40, the term 2s represents total cups in small containers (2 cups × s containers) and 5g represents total cups in large containers (5 cups × g containers), summing to 40 total cups. Choice A describes only g (the number of containers), not 5g (the total volume).',
    },
    calculadora: false,
    expresionDesmos: null,
  },

];
