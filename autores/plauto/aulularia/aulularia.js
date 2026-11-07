/* Aulularia I.1, vv. 40–51: F. Leo (1895), vía Perseus (CC BY-SA 4.0).
   Se suprimen las marcas prosódicas de la edición digital.
   Traducción y análisis morfológico: Edición Viva. */
'use strict';

const verses = [
  {
    n: '40', speaker: 'EUCLIÓN', latin: 'Exi, inquam. Age exi. Exeundum hercle tibi hinc est foras,',
    spanish: '¡Sal, te digo! Vamos, sal. ¡Por Hércules, tienes que irte de aquí!',
    words: [
      ['Exi','exeo','verbo; imperativo presente, 2.ª persona singular, voz activa'],
      ['inquam','inquam','verbo defectivo; indicativo presente, 1.ª persona singular'],
      ['Age','ago','verbo; imperativo presente, 2.ª persona singular (uso exhortativo)'],
      ['exi','exeo','verbo; imperativo presente, 2.ª persona singular, voz activa'],
      ['Exeundum','exeo','gerundivo neutro singular en construcción impersonal de obligación (exeundum est)'],
      ['hercle','hercle','interjección de juramento (por Hércules)'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['hinc','hinc','adverbio de lugar: desde aquí'],
      ['est','sum','verbo; indicativo presente, 3.ª persona singular'],
      ['foras','foras','adverbio de dirección: hacia fuera']
    ]
  },
  {
    n: '41', latin: 'circumspectatrix cum oculis emissiciis.',
    spanish: '¡Fisgona, con esos ojos que lo escudriñan todo!',
    words: [
      ['circumspectatrix','circumspectatrix','sustantivo femenino; vocativo singular'],
      ['cum','cum','preposición con ablativo'],
      ['oculis','oculus','sustantivo masculino; ablativo plural'],
      ['emissiciis','emissicius','adjetivo masculino; ablativo plural, concuerda con oculis']
    ]
  },
  {
    n: '42', speaker: 'ESTÁFILA', latin: 'Nam cur me miseram verberas?',
    spanish: '¿Y por qué me pegas, desgraciada de mí?',
    words: [
      ['Nam','nam','partícula introductoria o enfática'],
      ['cur','cur','adverbio interrogativo: por qué'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['miseram','miser','adjetivo femenino; acusativo singular, referido a me'],
      ['verberas','verbero','verbo; indicativo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '', speaker: 'EUCLIÓN', latin: 'Ut misera sis',
    spanish: 'Para que seas desgraciada...',
    words: [
      ['Ut','ut','conjunción final; introduce subjuntivo'],
      ['misera','miser','adjetivo femenino; nominativo singular, atributo del sujeto'],
      ['sis','sum','verbo; subjuntivo presente, 2.ª persona singular']
    ]
  },
  {
    n: '43', latin: 'atque ut te dignam mala malam aetatem exigas.',
    spanish: '...y para que, malvada, lleves la mala vida que te mereces.',
    words: [
      ['atque','atque','conjunción copulativa'],
      ['ut','ut','conjunción final; introduce subjuntivo'],
      ['te','tu','pronombre personal; acusativo singular'],
      ['dignam','dignus','adjetivo femenino; acusativo singular, referido a te'],
      ['mala','malus','adjetivo femenino; vocativo singular, insulto dirigido a Estáfila'],
      ['malam','malus','adjetivo femenino; acusativo singular, concuerda con aetatem'],
      ['aetatem','aetas','sustantivo femenino; acusativo singular'],
      ['exigas','exigo','verbo; subjuntivo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '44', speaker: 'ESTÁFILA', latin: 'Nam qua me nunc causa extrusisti ex aedibus?',
    spanish: 'Pero ¿por qué motivo me has echado ahora de la casa?',
    words: [
      ['Nam','nam','partícula introductoria o enfática'],
      ['qua','qui, quae, quod','adjetivo interrogativo femenino; ablativo singular, concuerda con causa'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['nunc','nunc','adverbio de tiempo: ahora'],
      ['causa','causa','sustantivo femenino; ablativo singular (ablativo de causa)'],
      ['extrusisti','extrudo','verbo; indicativo perfecto, voz activa, 2.ª persona singular'],
      ['ex','ex','preposición con ablativo'],
      ['aedibus','aedes','sustantivo femenino; ablativo plural']
    ]
  },
  {
    n: '45', speaker: 'EUCLIÓN', latin: 'Tibi ego rationem reddam, stimulorum seges?',
    spanish: '¿Yo tengo que darte explicaciones, cosecha de azotes?',
    words: [
      ['Tibi','tu','pronombre personal; dativo singular'],
      ['ego','ego','pronombre personal; nominativo singular'],
      ['rationem','ratio','sustantivo femenino; acusativo singular'],
      ['reddam','reddo','verbo; futuro imperfecto de indicativo, voz activa, 1.ª persona singular'],
      ['stimulorum','stimulus','sustantivo masculino; genitivo plural'],
      ['seges','seges','sustantivo femenino; vocativo singular (metáfora insultante)']
    ]
  },
  {
    n: '46', latin: 'illuc regredere ab ostio. illuc sis vide,',
    spanish: '¡Retrocede, aléjate de la puerta! ¡Allá, por favor! Mira...',
    words: [
      ['illuc','illuc','adverbio de dirección: hacia allá'],
      ['regredere','regredior','verbo deponente; imperativo presente, 2.ª persona singular'],
      ['ab','ab','preposición con ablativo'],
      ['ostio','ostium','sustantivo neutro; ablativo singular'],
      ['illuc','illuc','adverbio de dirección: hacia allá'],
      ['sis','si vis','expresión coloquial de cortesía: «si quieres»; no es sum, sis'],
      ['vide','video','verbo; imperativo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '47', latin: 'ut incedit. at scin quo modo tibi res se habet?',
    spanish: '...cómo camina. Pero ¿sabes cómo están las cosas para ti?',
    words: [
      ['ut','ut','adverbio exclamativo: cómo'],
      ['incedit','incedo','verbo; indicativo presente, voz activa, 3.ª persona singular'],
      ['at','at','conjunción adversativa'],
      ['scin','scio + -ne','contracción de scisne: indicativo presente, voz activa, 2.ª persona singular + interrogativa'],
      ['quo','qui, quae, quod','adjetivo interrogativo masculino; ablativo singular, concuerda con modo'],
      ['modo','modus','sustantivo masculino; ablativo singular'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['res','res','sustantivo femenino; nominativo singular'],
      ['se','sui','pronombre reflexivo; acusativo singular'],
      ['habet','habeo','verbo; indicativo presente, voz activa, 3.ª persona singular']
    ]
  },
  {
    n: '48', latin: 'si hercle hodie fustem cepero aut stimulum in manum,',
    spanish: 'Si hoy, por Hércules, llego a tomar un palo o un aguijón en la mano...',
    words: [
      ['si','si','conjunción condicional'],
      ['hercle','hercle','interjección de juramento'],
      ['hodie','hodie','adverbio de tiempo: hoy'],
      ['fustem','fustis','sustantivo masculino; acusativo singular'],
      ['cepero','capio','verbo; futuro perfecto de indicativo, voz activa, 1.ª persona singular'],
      ['aut','aut','conjunción disyuntiva'],
      ['stimulum','stimulus','sustantivo masculino; acusativo singular'],
      ['in','in','preposición con acusativo (dirección)'],
      ['manum','manus','sustantivo femenino; acusativo singular']
    ]
  },
  {
    n: '49', latin: 'testudineum istum tibi ego grandibo gradum.',
    spanish: '...te haré alargar ese paso de tortuga.',
    words: [
      ['testudineum','testudineus','adjetivo masculino; acusativo singular, concuerda con gradum'],
      ['istum','iste','demostrativo masculino; acusativo singular, concuerda con gradum'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['ego','ego','pronombre personal; nominativo singular'],
      ['grandibo','grandio','verbo poco frecuente; futuro imperfecto de indicativo, voz activa, 1.ª persona singular'],
      ['gradum','gradus','sustantivo masculino; acusativo singular']
    ]
  },
  {
    n: '50', speaker: 'ESTÁFILA', latin: 'Utinam me divi adaxint ad suspendium',
    spanish: '¡Ojalá los dioses me lleven a la horca...',
    words: [
      ['Utinam','utinam','partícula optativa; introduce un deseo con subjuntivo'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['divi','divus','sustantivo masculino; nominativo plural'],
      ['adaxint','adigo','verbo; subjuntivo perfecto, voz activa, 3.ª persona plural (forma arcaica de adegerint)'],
      ['ad','ad','preposición con acusativo'],
      ['suspendium','suspendium','sustantivo neutro; acusativo singular']
    ]
  },
  {
    n: '51', latin: 'potius quidem quam hoc pacto apud te serviam.',
    spanish: '...antes que tener que seguir sirviéndote de esta manera!',
    words: [
      ['potius','potius','adverbio comparativo: más bien, antes'],
      ['quidem','quidem','partícula enfática'],
      ['quam','quam','conjunción comparativa'],
      ['hoc','hic, haec, hoc','demostrativo neutro; ablativo singular, concuerda con pacto'],
      ['pacto','pactum','sustantivo neutro; ablativo singular (modo)'],
      ['apud','apud','preposición con acusativo'],
      ['te','tu','pronombre personal; acusativo singular'],
      ['serviam','servio','verbo; subjuntivo presente, voz activa, 1.ª persona singular']
    ]
  }
,
  { n: "52", speaker: "EUCLIÓN", latin: "At ut scelesta sola secum murmurat.", spanish: "¡Miren cómo murmura para sí esa malvada!", words: [["At","at","conjunción adversativa o exclamativa: pero, y sin embargo"],["ut","ut","adverbio exclamativo: cómo"],["scelesta","scelestus","adjetivo femenino nominativo singular, sustantivado: malvada"],["sola","solus","adjetivo femenino nominativo singular, predicativo: sola"],["secum","sui + cum","pronombre reflexivo ablativo singular con posposición de cum: consigo misma"],["murmurat","murmuro","indicativo presente activo, tercera persona singular"]] },
  { n: "53", latin: "oculos hercle ego istos, improba, ecfodiam tibi,", spanish: "¡Por Hércules, desvergonzada, te sacaré esos ojos!", words: [["oculos","oculus","sustantivo masculino acusativo plural"],["hercle","hercle","interjección de juramento por Hércules"],["ego","ego","pronombre personal nominativo singular"],["istos","iste","demostrativo masculino acusativo plural, modifica oculos"],["improba","improbus","adjetivo femenino vocativo singular, insulto"],["ecfodiam","ecfodio","futuro de indicativo activo, primera persona singular; variante de effodio"],["tibi","tu","pronombre personal dativo singular, dativo de interés o perjuicio"]] },
  { n: "54", latin: "ne me observare possis quid rerum geram.", spanish: "para que no puedas vigilar lo que hago.", words: [["ne","ne","conjunción final negativa"],["me","ego","pronombre personal acusativo singular"],["observare","observo","infinitivo presente activo"],["possis","possum","subjuntivo presente activo, segunda persona singular, en subordinada final"],["quid","quis, quid","pronombre interrogativo neutro acusativo singular; objeto de geram"],["rerum","res","sustantivo femenino genitivo plural; genitivo partitivo con quid"],["geram","gero","subjuntivo presente activo, primera persona singular, interrogativa indirecta"]] },
  { n: "55", latin: "abscede etiam nunc—etiam nunc—etiam—ohe,", spanish: "¡Aléjate! ¡Más todavía! ¡Más! ¡Más! ¡Eh, basta!", words: [["abscede","abscedo","imperativo presente activo, segunda persona singular"],["etiam","etiam","adverbio: todavía, aún más"],["nunc","nunc","adverbio: ahora"],["etiam","etiam","adverbio repetido: aún más"],["nunc","nunc","adverbio: ahora"],["etiam","etiam","adverbio repetido: más"],["ohe","ohe","interjección para detener o llamar la atención: basta, eh"]] },
  { n: "56", latin: "istic astato. si hercle tu ex istoc loco", spanish: "¡Quédate ahí mismo! Si, por Hércules, desde ese sitio", words: [["istic","istic","adverbio de lugar: ahí, en ese sitio"],["astato","asto","imperativo futuro activo, segunda persona singular; orden enfática"],["si","si","conjunción condicional"],["hercle","hercle","interjección de juramento"],["tu","tu","pronombre personal nominativo singular"],["ex","ex","preposición con ablativo"],["istoc","iste","demostrativo masculino ablativo singular; variante de isto, modifica loco"],["loco","locus","sustantivo masculino ablativo singular"]] },
  { n: "57", latin: "digitum transvorsum aut unguem latum excesseris", spanish: "te mueves siquiera un dedo de lado o el ancho de una uña,", words: [["digitum","digitus","sustantivo masculino acusativo singular, acusativo de extensión"],["transvorsum","transvorsus","adjetivo masculino acusativo singular, modifica digitum; grafía arcaica de transversum"],["aut","aut","conjunción disyuntiva"],["unguem","unguis","sustantivo masculino acusativo singular, acusativo de extensión"],["latum","latus","adjetivo masculino acusativo singular, modifica unguem"],["excesseris","excedo","futuro perfecto de indicativo activo, segunda persona singular, en condición futura; formalmente coincide con perfecto de subjuntivo"]] },
  { n: "58", latin: "aut si respexis, donicum ego te iussero,", spanish: "o si miras atrás antes de que yo te lo ordene,", words: [["aut","aut","conjunción disyuntiva"],["si","si","conjunción condicional"],["respexis","respicio","futuro perfecto de indicativo activo, segunda persona singular, forma sincopada por respexeris; formalmente también compatible con perfecto de subjuntivo"],["donicum","donicum","conjunción temporal arcaica: hasta que"],["ego","ego","pronombre personal nominativo singular"],["te","tu","pronombre personal acusativo singular"],["iussero","iubeo","futuro perfecto de indicativo activo, primera persona singular; formalmente también perfecto de subjuntivo"]] },
  { n: "59", latin: "continuo hercle ego te dedam discipulam cruci.", spanish: "te entregaré enseguida, por Hércules, como alumna a la cruz.", words: [["continuo","continuo","adverbio: inmediatamente"],["hercle","hercle","interjección de juramento"],["ego","ego","pronombre personal nominativo singular"],["te","tu","pronombre personal acusativo singular"],["dedam","dedo","futuro de indicativo activo, primera persona singular"],["discipulam","discipula","sustantivo femenino acusativo singular, predicativo de te"],["cruci","crux","sustantivo femenino dativo singular, complemento de dedam"]] },
  { n: "60", latin: "scelestiorem me hac anu certo scio", spanish: "Estoy seguro de que nunca he visto a nadie más perverso que esta vieja;", words: [["scelestiorem","scelestus","adjetivo comparativo femenino acusativo singular; complemento predicativo de me, en construcción de acusativo con infinitivo"],["me","ego","pronombre personal acusativo singular, sujeto del infinitivo vidisse"],["hac","hic, haec, hoc","demostrativo femenino ablativo singular, modifica anu"],["anu","anus","sustantivo femenino ablativo singular, segundo término de comparación"],["certo","certo","adverbio: con certeza"],["scio","scio","indicativo presente activo, primera persona singular"]] },
  { n: "61", latin: "vidisse numquam, nimisque ego hanc metuo male,", spanish: "y le tengo un miedo terrible, excesivo,", words: [["vidisse","video","infinitivo perfecto activo, dependiente de scio"],["numquam","numquam","adverbio de negación temporal: nunca"],["nimisque","nimis + -que","adverbio nimis, demasiado, con enclítica coordinante -que"],["ego","ego","pronombre personal nominativo singular"],["hanc","hic, haec, hoc","pronombre demostrativo femenino acusativo singular, objeto de metuo"],["metuo","metuo","indicativo presente activo, primera persona singular"],["male","male","adverbio: mal, mucho, intensificador coloquial"]] }
,
  { n: "62", latin: "ne mi ex insidiis verba imprudenti duit", spanish: "no sea que me engañe con alguna trampa cuando esté desprevenido", words: [["ne","ne","conjunción que introduce una subordinada de temor con subjuntivo"],["mi","ego","pronombre personal, dativo singular arcaico de mihi; afectado por la trampa"],["ex","ex","preposición con ablativo"],["insidiis","insidiae","sustantivo femenino plural, ablativo; locución ex insidiis: mediante una emboscada"],["verba","verbum","sustantivo neutro, acusativo plural; parte de la locución verba dare: engañar"],["imprudenti","imprudens","adjetivo de una terminación, dativo singular; referido a mi"],["duit","do","verbo, presente de subjuntivo activo, tercera persona singular; forma arcaica por det; en la locución verba dare"]] },
  { n: "63", latin: "neu persentiscat aurum ubi est absconditum,", spanish: "ni descubra dónde está escondido el oro,", words: [["neu","neve","conjunción negativa coordinante: ni, y que no"],["persentiscat","persentisco","verbo, presente de subjuntivo activo, tercera persona singular; dependiente de metuo"],["aurum","aurum","sustantivo neutro, nominativo singular; sujeto de est absconditum"],["ubi","ubi","adverbio interrogativo de lugar; introduce interrogativa indirecta"],["est","sum","verbo, presente de indicativo, tercera persona singular; auxiliar de perfecto pasivo"],["absconditum","abscondo","participio perfecto pasivo, neutro nominativo singular, con est: ha sido escondido"]] },
  { n: "64", latin: "quae in occipitio quoque habet oculos pessima.", spanish: "¡Esa malvada tiene ojos hasta en la nuca!", words: [["quae","qui, quae, quod","pronombre relativo femenino, nominativo singular; retoma a Estáfila"],["in","in","preposición con ablativo; lugar"],["occipitio","occipitium","sustantivo neutro, ablativo singular; nuca, parte posterior de la cabeza"],["quoque","quoque","adverbio aditivo: también, incluso"],["habet","habeo","verbo, presente de indicativo activo, tercera persona singular"],["oculos","oculus","sustantivo masculino, acusativo plural; objeto de habet"],["pessima","malus","adjetivo superlativo femenino, nominativo singular; referido a Estáfila, con valor insultante"]] },
  { n: "65", latin: "nunc ibo ut visam sitne ita aurum ut condidi,", spanish: "Ahora iré a comprobar si el oro sigue tal como lo escondí,", words: [["nunc","nunc","adverbio temporal: ahora"],["ibo","eo","verbo irregular, futuro de indicativo activo, primera persona singular"],["ut","ut","conjunción final: para que; con subjuntivo visam"],["visam","viso","verbo, presente de subjuntivo activo, primera persona singular; ir a mirar, comprobar"],["sitne","sum + -ne","verbo, presente de subjuntivo, tercera persona singular, con enclítica interrogativa -ne; interrogativa indirecta"],["ita","ita","adverbio de modo: así, de esa manera"],["aurum","aurum","sustantivo neutro, nominativo singular; sujeto de sit"],["ut","ut","conjunción comparativa: tal como"],["condidi","condo","verbo, perfecto de indicativo activo, primera persona singular"]] },
  { n: "66", latin: "quod me sollicitat plurimis miserum modis.", spanish: "porque esa preocupación me atormenta de mil maneras, desdichado de mí.", words: [["quod","quod","conjunción causal: porque; también cabe leer relativo neutro referido a aurum"],["me","ego","pronombre personal, acusativo singular; objeto de sollicitat"],["sollicitat","sollicito","verbo, presente de indicativo activo, tercera persona singular"],["plurimis","multus","adjetivo superlativo, ablativo masculino plural; modifica modis"],["miserum","miser","adjetivo masculino, acusativo singular; predicativo de me"],["modis","modus","sustantivo masculino, ablativo plural; ablativo de modo"]] },
  {"n":"67","speaker":"ESTÁFILA","latin":"Noenum mecastor quid ego ero dicam meo","spanish":"Por Cástor, no sé qué decirle a mi amo","words":[["Noenum","non","negación arcaica equivalente a non"],["mecastor","mecastor","interjección juratoria por Cástor"],["quid","quis","pronombre interrogativo neutro acusativo singular"],["ego","ego","pronombre nominativo singular"],["ero","erus","sustantivo masculino dativo singular"],["dicam","dico","subjuntivo presente activo primera singular, interrogativa deliberativa"],["meo","meus","posesivo masculino dativo singular"]]},
  {"n":"68","latin":"malae rei evenisse quamve insaniam,","spanish":"sobre qué desgracia le ha ocurrido o qué locura le ha entrado;","words":[["malae","malus","adjetivo femenino genitivo singular"],["rei","res","sustantivo femenino genitivo singular, construcción de referencia"],["evenisse","evenio","infinitivo perfecto activo"],["quamve","qui quae quod + -ve","interrogativo femenino acusativo singular con enclítica disyuntiva"],["insaniam","insania","sustantivo femenino acusativo singular"]]},
  {"n":"69","latin":"queo comminisci; ita me miseram ad hunc modum","spanish":"no consigo imaginarlo. ¡Pobre de mí! De esta manera","words":[["queo","queo","indicativo presente activo primera singular"],["comminisci","comminiscor","infinitivo presente deponente"],["ita","ita","adverbio de modo"],["me","ego","pronombre acusativo singular exclamativo"],["miseram","miser","adjetivo femenino acusativo singular"],["ad","ad","preposición con acusativo"],["hunc","hic","demostrativo masculino acusativo singular"],["modum","modus","sustantivo masculino acusativo singular"]]},
  {"n":"70","latin":"decies die uno saepe extrudit aedibus.","spanish":"me echa de casa hasta diez veces en un solo día.","words":[["decies","decies","adverbio numeral diez veces"],["die","dies","sustantivo masculino ablativo singular"],["uno","unus","numeral masculino ablativo singular"],["saepe","saepe","adverbio"],["extrudit","extrudo","indicativo presente activo tercera singular"],["aedibus","aedes","sustantivo femenino ablativo plural de separación"]]},
  {"n":"71","latin":"nescio pol quae illunc hominem intemperiae tenent:","spanish":"No sé, por Pólux, qué arrebatos dominan a ese hombre:","words":[["nescio","nescio","indicativo presente activo primera singular"],["pol","pol","interjección juratoria por Pólux"],["quae","qui quae quod","interrogativo femenino nominativo plural"],["illunc","ille","demostrativo masculino acusativo singular arcaico"],["hominem","homo","sustantivo masculino acusativo singular"],["intemperiae","intemperies","sustantivo femenino nominativo plural"],["tenent","teneo","indicativo presente activo tercera plural"]]},
  {"n":"72","latin":"pervigilat noctes totas, tum autem interdius","spanish":"pasa en vela las noches enteras y luego, durante el día,","words":[["pervigilat","pervigilo","indicativo presente activo tercera singular"],["noctes","nox","sustantivo femenino acusativo plural de duración"],["totas","totus","adjetivo femenino acusativo plural"],["tum","tum","adverbio temporal"],["autem","autem","partícula pospositiva"],["interdius","interdius","adverbio temporal"]]},
  {"n":"73","latin":"quasi claudus sutor domi sedet totos dies.","spanish":"se queda sentado en casa días enteros, como un zapatero cojo.","words":[["quasi","quasi","conjunción comparativa"],["claudus","claudus","adjetivo masculino nominativo singular"],["sutor","sutor","sustantivo masculino nominativo singular"],["domi","domus","locativo singular"],["sedet","sedeo","indicativo presente activo tercera singular"],["totos","totus","adjetivo masculino acusativo plural"],["dies","dies","sustantivo masculino acusativo plural de duración"]]}
];

verses.unshift(...prologueVerses);

const notes = { ...prologueNotes,
  '67': {number: 18,type:'LINGÜÍSTICA',heading:'Noenum y mecastor',text:'Noenum es una negación antigua y mecastor un juramento por Cástor. Estáfila expresa su desconcierto mediante una interrogativa deliberativa.'},
  '73': {number: 19,type:'CULTURAL',heading:'Como un zapatero cojo',text:'La comparación con un zapatero cojo ridiculiza la inmovilidad de Euclión: permanece sentado en casa, aunque expulsa continuamente a Estáfila.'},
  '62': { number: 11, type: 'LINGÜÍSTICA', heading: 'Verba dare · duit', text: 'Verba dare alicui es una expresión idiomática: «engañar a alguien». Duit es una forma arcaica del presente de subjuntivo de do, no un indicativo. Fuente: Plauto, Aulularia I.1, v. 62, ed. Leo (1895).' },
  '64': { number: 12, type: 'RETÓRICA', heading: 'Ojos en la nuca', text: 'La hipérbole de los ojos en el occipitium convierte la vigilancia de Estáfila en una amenaza imaginaria para Euclión. Pessima, nominativo femenino, es una caracterización insultante de la esclava. Fuente: Leo (1895), v. 64.' },
  '65': { number: 13, type: 'MORFOLÓGICA', heading: 'Sitne · visam', text: 'Sitne contiene la enclítica interrogativa -ne, en una interrogativa indirecta dependiente de visam. Visam es subjuntivo presente de viso, verbo frecuentativo de video; no es futuro de video. Fuente: Leo (1895), v. 65.' },
  '55': { number: 8, type: 'RETÓRICA', heading: 'Una orden que se estira', text: 'La repetición de etiam nunc, seguida del abrupto ohe, convierte la vigilancia obsesiva de Euclión en una secuencia de gestos escénicos. Texto base: Leo (1895), Aulularia I.1, vv. 55–56.' },
  '57': { number: 9, type: 'LINGÜÍSTICA', heading: 'Digitum transvorsum', text: 'La expresión mide una distancia mínima: ni un dedo de lado ni el ancho de una uña. Transvorsum conserva una variante gráfica antigua de transversum. Fuente: Leo (1895), Aulularia I.1, v. 57.' },
  '59': { number: 10, type: 'CULTURAL', heading: 'Discipulam cruci', text: 'La amenaza de entregar a Estáfila como «alumna» a la cruz es una personificación cruel del suplicio: la cruz aparece como maestra de castigo. No debe perderse el doble sentido de discipulam. Fuente: Leo (1895), Aulularia I.1, v. 59.' },
  '40': { number: 1, type: 'FILOLÓGICA', heading: 'Exi · exeundum', text: 'La insistencia en exi y la variación exi / exeundum producen una apertura entrecortada y agresiva. Hercle, invocación a Hércules, es una fórmula corriente de juramento en la comedia.' },
  '41': { number: 2, type: 'LÉXICA', heading: 'Una fisgona con ojos de explorador', text: 'Circumspectatrix es una formación excepcional de Plauto para quien mira a todas partes. Emissicius evoca a quien se envía a reconocer o explorar: los ojos de Estáfila parecen espías que buscan el secreto de Euclión.' },
  '43': { number: 3, type: 'FILOLÓGICA', heading: 'Mala malam', text: 'La yuxtaposición de mala (vocativo) y malam (acusativo) refuerza el insulto por repetición de la raíz. El juego sonoro importa tanto como el significado.' },
  '45': { number: 4, type: 'CULTURAL', heading: 'Stimulorum seges', text: 'Literalmente, «cosecha de aguijones». El cuerpo de la esclava se convierte metafóricamente en un campo donde proliferan los instrumentos de castigo. La exageración cómica no elimina la violencia de la relación entre amo y esclava.' },
  '46': { number: 5, type: 'LINGÜÍSTICA', heading: 'Illuc sis vide', text: 'Aquí sis funciona como una fórmula coloquial de cortesía, contraída de si vis («si quieres»). No debe confundirse con el subjuntivo sis de sum, que aparece unos versos antes.' },
  '49': { number: 6, type: 'FILOLÓGICA', heading: 'Grandibo gradum', text: 'La proximidad sonora entre grandibo y gradum es una paronomasia. Grandio, «hacer mayor», es un verbo muy raro. La imagen del paso de tortuga convierte una amenaza de golpes en un chiste cruel sobre la lentitud de Estáfila.' },
  '50': { number: 7, type: 'MORFOLÓGICA', heading: 'Adaxint', text: 'Adaxint equivale a adegerint: es una forma arcaica del perfecto de subjuntivo de adigo. Su empleo tras utinam expresa un deseo, formulado aquí con deliberada exageración dramática.' }
};

const dictionaryKey = 'edicion-viva:latin-dictionary:v1';
const container = document.querySelector('#verses');
const wordPanel = document.querySelector('#word-panel');
const notePanel = document.querySelector('#note-panel');
const saveWordButton = document.querySelector('#save-word');
const drawer = document.querySelector('#side-drawer');
const tabs = Array.from(document.querySelectorAll('[data-drawer]'));
const appShell = document.querySelector('#app-shell');
const sidebar = document.querySelector('#sidebar');
const characterRail = document.querySelector('#character-rail');
let selected = null;
let noteAnchor = null;
let currentWord = null;
let activeDrawer = null;
let reviewDeck = [];
let reviewIndex = 0;
let savedWords = readDictionary();

function readDictionary() {
  try {
    const value = JSON.parse(localStorage.getItem(dictionaryKey) || '[]');
    return Array.isArray(value) ? value.filter(item => item && typeof item.id === 'string' &&
      typeof item.form === 'string' && typeof item.lemma === 'string' && typeof item.morphology === 'string') : [];
  } catch { return []; }
}

function persistDictionary() {
  try {
    localStorage.setItem(dictionaryKey, JSON.stringify(savedWords));
    return true;
  } catch {
    return false;
  }
}

function wordId(word) {
  return 'la|' + word[1].toLocaleLowerCase('la') + '|' + word[0].toLocaleLowerCase('la');
}

function updateSaveButton() {
  if (!currentWord) return;
  const exists = savedWords.some(item => item.id === wordId(currentWord.word));
  saveWordButton.textContent = exists ? '✓ Guardada · quitar' : '+ Guardar en mi diccionario';
  saveWordButton.setAttribute('aria-pressed', String(exists));
}

function positionPopover(anchor, popover) {
  if (!anchor || popover.hidden) return;
  const r = anchor.getBoundingClientRect();
  const p = popover.getBoundingClientRect();
  const margin = 12;
  const width = Math.min(p.width, window.innerWidth - margin * 2);
  let left = r.left - 22;
  left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
  let top = r.bottom + margin;
  if (top + p.height > window.innerHeight - margin && r.top > p.height + margin * 2) {
    top = r.top - p.height - margin;
  }
  top = Math.max(margin, Math.min(top, window.innerHeight - p.height - margin));
  popover.style.left = left + 'px';
  popover.style.top = top + 'px';
}

function closeWord() {
  if (selected) selected.setAttribute('aria-pressed','false');
  selected = null;
  currentWord = null;
  wordPanel.hidden = true;
}

function closeNote() {
  if (noteAnchor) noteAnchor.setAttribute('aria-expanded','false');
  noteAnchor = null;
  notePanel.hidden = true;
}

function openWord(button, word, reference) {
  closeNote();
  if (selected) selected.setAttribute('aria-pressed','false');
  selected = button;
  currentWord = { word, reference };
  button.setAttribute('aria-pressed','true');
  document.querySelector('#word-form').textContent = word[0];
  document.querySelector('#word-lemma').textContent = word[1];
  document.querySelector('#word-morphology').textContent = word[2];
  wordPanel.hidden = false;
  updateSaveButton();
  positionPopover(button, wordPanel);
}

function openNote(button, note) {
  closeWord();
  closeNote();
  noteAnchor = button;
  button.setAttribute('aria-expanded','true');
  document.querySelector('#note-type').textContent = 'NOTA ' + note.number + ' · ' + note.type;
  document.querySelector('#note-heading').textContent = note.heading;
  document.querySelector('#note-content').textContent = note.text;
  notePanel.hidden = false;
  positionPopover(button, notePanel);
}

let lastNumber = '';
for (const entry of verses) {
  if (entry.n) lastNumber = entry.n;
  const row = document.createElement('div');
  row.className = 'verse';
  const left = document.createElement('div');
  left.className = 'latin-side';
  const num = document.createElement('span');
  num.className = 'number';
  num.textContent = entry.n;
  const speech = document.createElement('div');
  speech.className = 'speech';
  if (entry.speaker) {
    const who = document.createElement('span');
    who.className = 'speaker';
    who.textContent = entry.speaker;
    speech.append(who);
  }
  const latin = document.createElement('p');
  latin.className = 'latin';
  const reference = (Number(lastNumber) <= 39 ? 'Prólogo' : 'I.1') + ', v. ' + lastNumber;
  const chunks = entry.latin.match(/\p{L}+|[^\p{L}]+/gu) || [];
  let index = 0;
  for (const chunk of chunks) {
    if (!/^\p{L}/u.test(chunk)) {
      latin.append(document.createTextNode(chunk));
      continue;
    }
    const word = entry.words[index++];
    if (!word || word[0].toLocaleLowerCase('la') !== chunk.toLocaleLowerCase('la')) {
      throw new Error('Falta análisis o hay un desajuste en ' + entry.n + ': ' + chunk);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'token';
    button.textContent = chunk;
    button.setAttribute('aria-label', chunk + ': ver análisis morfológico');
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click', () => openWord(button, word, reference));
    latin.append(button);
  }
  if (index !== entry.words.length) throw new Error('Sobran análisis en el verso ' + entry.n);
  const note = notes[entry.n];
  if (note) {
    latin.append(document.createTextNode(' '));
    const noteButton = document.createElement('button');
    noteButton.type = 'button';
    noteButton.className = 'note-anchor';
    noteButton.textContent = String(note.number);
    noteButton.setAttribute('aria-label', 'Nota ' + note.number + ': ' + note.heading);
    noteButton.setAttribute('aria-expanded','false');
    noteButton.addEventListener('click', () => openNote(noteButton, note));
    latin.append(noteButton);
  }
  speech.append(latin);
  left.append(num,speech);
  const right = document.createElement('p');
  right.className = 'spanish';
  right.textContent = entry.spanish;
  row.append(left,right);
  row.dataset.section = Number(lastNumber) <= 39 ? 'prologue' : 'act1scene1';
  container.append(row);
}

saveWordButton.addEventListener('click', () => {
  if (!currentWord) return;
  const id = wordId(currentWord.word);
  const before = savedWords.slice();
  const index = savedWords.findIndex(item => item.id === id);
  if (index >= 0) savedWords.splice(index, 1);
  else savedWords.push({
    id, language: 'latín', form: currentWord.word[0], lemma: currentWord.word[1],
    morphology: currentWord.word[2], work: 'Plauto · Aulularia',
    reference: currentWord.reference, addedAt: new Date().toISOString()
  });
  if (!persistDictionary()) {
    savedWords = before;
    saveWordButton.textContent = 'No se pudo guardar en este navegador';
    return;
  }
  updateSaveButton();
  renderDictionary();
});

function renderDictionary() {
  document.querySelector('#saved-count').textContent = String(savedWords.length);
  document.querySelectorAll('.mobile-saved-count').forEach(node => node.textContent = savedWords.length ? '(' + savedWords.length + ')' : '');
  document.querySelector('#start-review').disabled = !savedWords.length;
  document.querySelector('#export-dictionary').disabled = !savedWords.length;
  const list = document.querySelector('#dictionary-list');
  list.replaceChildren();
  if (!savedWords.length) {
    const empty = document.createElement('p');
    empty.className = 'dictionary-empty';
    empty.textContent = 'Todavía no hay palabras guardadas. Seleccioná una palabra del latín y elegí «Guardar».';
    list.append(empty);
    return;
  }
  for (const item of savedWords) {
    const article = document.createElement('article');
    article.className = 'dictionary-entry';
    const content = document.createElement('div');
    const form = document.createElement('strong');
    form.textContent = item.form;
    const lemma = document.createElement('span');
    lemma.textContent = item.lemma + ' · ' + item.reference;
    content.append(form,lemma);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = '×';
    remove.setAttribute('aria-label', 'Quitar ' + item.form + ' del diccionario');
    remove.addEventListener('click', () => {
      const before = savedWords.slice();
      savedWords = savedWords.filter(word => word.id !== item.id);
      if (!persistDictionary()) { savedWords = before; return; }
      renderDictionary();
      updateSaveButton();
    });
    article.append(content,remove);
    list.append(article);
  }
}

function closeDrawer() {
  activeDrawer = null;
  drawer.hidden = true;
  sidebar.classList.remove('open');
  characterRail.classList.remove('open');
  tabs.filter(tab => tab.dataset.drawer === 'dictionary').forEach(tab => tab.setAttribute('aria-expanded','false'));
  document.querySelector('#flashcard').hidden = true;
  document.querySelector('#dictionary-list').hidden = false;
  syncPanelButtons();
}
function syncPanelButtons() {
  const compact = window.matchMedia('(max-width: 1160px)').matches;
  const mobile = window.matchMedia('(max-width: 860px)').matches;
  tabs.forEach(tab => {
    const type = tab.dataset.drawer;
    let expanded = type === 'dictionary' ? activeDrawer === 'dictionary' :
      type === 'position' ? (mobile ? sidebar.classList.contains('open') : !appShell.classList.contains('nav-collapsed')) :
      (compact ? characterRail.classList.contains('open') : !appShell.classList.contains('characters-collapsed'));
    tab.setAttribute('aria-expanded', String(expanded));
  });
}
function openDrawer(name) {
  closeWord();
  closeNote();
  const compact = window.matchMedia('(max-width: 1160px)').matches;
  const mobile = window.matchMedia('(max-width: 860px)').matches;
  if (name === 'position') {
    const wasOpen = mobile ? sidebar.classList.contains('open') : !appShell.classList.contains('nav-collapsed');
    closeDrawer();
    if (mobile) sidebar.classList.toggle('open', !wasOpen);
    else appShell.classList.toggle('nav-collapsed', wasOpen);
    syncPanelButtons();
    return;
  }
  if (name === 'characters') {
    const wasOpen = compact ? characterRail.classList.contains('open') : !appShell.classList.contains('characters-collapsed');
    closeDrawer();
    if (compact) characterRail.classList.toggle('open', !wasOpen);
    else appShell.classList.toggle('characters-collapsed', wasOpen);
    syncPanelButtons();
    return;
  }
  const wasOpen = activeDrawer === 'dictionary';
  closeDrawer();
  if (!wasOpen && name === 'dictionary') {
    activeDrawer = name;
    drawer.hidden = false;
    renderDictionary();
  }
  syncPanelButtons();
}
tabs.forEach(tab => tab.addEventListener('click', () => openDrawer(tab.dataset.drawer)));
document.querySelector('#close-drawer').addEventListener('click', closeDrawer);
document.querySelector('#return-to-text').addEventListener('click', closeDrawer);
document.querySelector('#close-word').addEventListener('click', closeWord);
document.querySelector('#close-note').addEventListener('click', closeNote);

document.querySelector('#export-dictionary').addEventListener('click', () => {
  if (!savedWords.length) return;
  const blob = new Blob([JSON.stringify({version:1, words:savedWords},null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'edicion-viva-diccionario.json';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#import-trigger').addEventListener('click', () => document.querySelector('#import-dictionary').click());
document.querySelector('#import-dictionary').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  const feedback = document.querySelector('#dictionary-feedback');
  try {
    const data = JSON.parse(await file.text());
    if (data.version !== 1 || !Array.isArray(data.words)) throw new Error('Formato no reconocido');
    const incoming = data.words.filter(item => item && typeof item.id === 'string' &&
      typeof item.form === 'string' && typeof item.lemma === 'string' && typeof item.morphology === 'string');
    const before = savedWords.slice();
    const known = new Set(savedWords.map(item => item.id));
    let count = 0;
    for (const item of incoming) {
      if (!known.has(item.id)) { savedWords.push(item); known.add(item.id); count++; }
    }
    if (!persistDictionary()) { savedWords = before; throw new Error('No se pudo guardar'); }
    feedback.textContent = count + ' palabra(s) importada(s).';
    renderDictionary();
  } catch {
    feedback.textContent = 'No se pudo importar ese archivo JSON.';
  }
  event.target.value = '';
});

function showCard() {
  const card = reviewDeck[reviewIndex];
  document.querySelector('#flash-progress').textContent = (reviewIndex + 1) + ' de ' + reviewDeck.length;
  document.querySelector('#flash-form').textContent = card.form;
  document.querySelector('#flash-lemma').textContent = card.lemma;
  document.querySelector('#flash-morph').textContent = card.morphology;
  document.querySelector('#flash-answer').hidden = true;
  document.querySelector('#reveal-card').hidden = false;
  document.querySelector('#next-card').hidden = true;
}

document.querySelector('#start-review').addEventListener('click', () => {
  reviewDeck = savedWords.slice();
  if (!reviewDeck.length) return;
  reviewIndex = 0;
  document.querySelector('#dictionary-list').hidden = true;
  document.querySelector('#flashcard').hidden = false;
  showCard();
});
document.querySelector('#reveal-card').addEventListener('click', () => {
  document.querySelector('#flash-answer').hidden = false;
  document.querySelector('#reveal-card').hidden = true;
  document.querySelector('#next-card').hidden = false;
});
document.querySelector('#next-card').addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % reviewDeck.length;
  showCard();
});
document.querySelector('#end-review').addEventListener('click', () => {
  document.querySelector('#flashcard').hidden = true;
  document.querySelector('#dictionary-list').hidden = false;
  renderDictionary();
});

function trackAnchor() {
  for (const [anchor, popover] of [[selected,wordPanel],[noteAnchor,notePanel]]) {
    if (!anchor || popover.hidden) continue;
    const r = anchor.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) {
      popover === wordPanel ? closeWord() : closeNote();
    } else positionPopover(anchor,popover);
  }
}
window.addEventListener('scroll', trackAnchor, {passive:true});
window.addEventListener('resize', trackAnchor);
document.addEventListener('pointerdown', event => {
  if (!wordPanel.hidden && !wordPanel.contains(event.target) && !event.target.closest('.token')) closeWord();
  if (!notePanel.hidden && !notePanel.contains(event.target) && !event.target.closest('.note-anchor')) closeNote();
  if (!drawer.hidden && !drawer.contains(event.target) && !event.target.closest('.side-tabs')) closeDrawer();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeWord();
    closeNote();
    closeDrawer();
  }
});
renderDictionary();
syncPanelButtons();
window.addEventListener('resize', syncPanelButtons);

/* Navegación editorial: no se mezclan tramos discontinuos. */
const sectionSelector = document.createElement('select');
sectionSelector.id = 'section-selector';
sectionSelector.setAttribute('aria-label','Elegir sección de la obra');
const maxPrologue = Math.max(0, ...verses.filter(v => Number(v.n) < 40).map(v => Number(v.n)));
const maxSceneOne = Math.max(40, ...verses.filter(v => Number(v.n) >= 40).map(v => Number(v.n)));
for (const [value,label] of [['prologue','Prólogo · vv. 1–' + maxPrologue],['act1scene1','Acto I · escena 1 · vv. 40–' + maxSceneOne]]) {
 const option=document.createElement('option');option.value=value;option.textContent=label;sectionSelector.append(option);
}
const sectionNav=document.createElement('nav');sectionNav.className='section-navigation';sectionNav.append(sectionSelector);
document.querySelector('#section-nav-slot').append(sectionNav);
function selectSection(section){
 for(const row of container.querySelectorAll('.verse'))row.hidden=row.dataset.section!==section;
 const current=document.querySelector('.position-current');if(current)current.textContent=section==='prologue'?'Prólogo · Lar familiar':'Acto I, escena 1';
 const marker=document.querySelector('.position-marker strong');if(marker)marker.textContent=section==='prologue'?'vv. 1–'+maxPrologue:'vv. 40–'+maxSceneOne;
 closeWord();closeNote();
}
sectionSelector.addEventListener('change',()=>selectSection(sectionSelector.value));
selectSection('prologue');
