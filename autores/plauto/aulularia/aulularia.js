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
  {"n":"73","latin":"quasi claudus sutor domi sedet totos dies.","spanish":"se queda sentado en casa días enteros, como un zapatero cojo.","words":[["quasi","quasi","conjunción comparativa"],["claudus","claudus","adjetivo masculino nominativo singular"],["sutor","sutor","sustantivo masculino nominativo singular"],["domi","domus","locativo singular"],["sedet","sedeo","indicativo presente activo tercera singular"],["totos","totus","adjetivo masculino acusativo plural"],["dies","dies","sustantivo masculino acusativo plural de duración"]]},

  {"n":"74","latin":"neque iam quo pacto celem erilis filiae","spanish":"Y ya no se me ocurre cómo ocultar lo que le sucede a la hija de mi amo,","words":[["neque","neque","conjunción copulativa negativa: y no, ni"],["iam","iam","adverbio temporal: ya, a estas alturas"],["quo","qui, quae, quod","adjetivo interrogativo masculino, ablativo singular, con pacto"],["pacto","pactum","sustantivo neutro, ablativo singular; quo pacto: de qué manera"],["celem","celo","verbo, presente de subjuntivo activo, primera persona singular; interrogativa indirecta"],["erilis","erilis","adjetivo femenino, genitivo singular, modifica filiae: del amo"],["filiae","filia","sustantivo femenino, genitivo singular, complemento de probrum del verso siguiente"]]},
  {"n":"75","latin":"probrum, propinqua partitudo cui appetit,","spanish":"su deshonra: el parto está ya muy próximo para ella.","words":[["probrum","probrum","sustantivo neutro, acusativo singular, objeto de celem; deshonra social"],["propinqua","propinquus","adjetivo femenino, nominativo singular, modifica partitudo"],["partitudo","partitudo","sustantivo femenino, nominativo singular, sujeto de appetit; parto, alumbramiento"],["cui","qui, quae, quod","pronombre relativo, dativo femenino singular, referido a la hija del amo"],["appetit","appeto","verbo, presente de indicativo activo, tercera persona singular; se acerca"]]},
  {"n":"76","latin":"queo comminisci; neque quicquam meliust mihi,","spanish":"No puedo imaginar una salida; y no hay nada mejor para mí,","words":[["queo","queo","verbo irregular, presente de indicativo activo, primera persona singular; puedo"],["comminisci","comminiscor","verbo deponente, infinitivo presente; idear, imaginar"],["neque","neque","conjunción copulativa negativa"],["quicquam","quisquam","pronombre indefinido neutro, nominativo singular, sujeto de est elidido"],["meliust","melior + est","contracción de melius est: adjetivo comparativo neutro nominativo singular en función predicativa + indicativo presente de sum, tercera singular"],["mihi","ego","pronombre personal, dativo singular de interés"]]},
  {"n":"77","latin":"ut opinor, quam ex me ut unam faciam litteram","spanish":"me parece, que convertirme yo misma en una sola letra","words":[["ut","ut","conjunción comparativa o modal: como, según"],["opinor","opinor","verbo deponente, presente de indicativo, primera persona singular"],["quam","quam","conjunción comparativa tras melius"],["ex","ex","preposición con ablativo; de, a partir de"],["me","ego","pronombre personal, ablativo singular, término de ex"],["ut","ut","conjunción que introduce una cláusula explicativa de la opción comparada; con faciam"],["unam","unus","adjetivo numeral femenino, acusativo singular, modifica litteram"],["faciam","facio","verbo, presente de subjuntivo activo, primera persona singular; dependiente de ut"],["litteram","littera","sustantivo femenino, acusativo singular, objeto de faciam"]]},
  {"n":"78","latin":"longam, meum laqueo collum quando obstrinxero.","spanish":"bien larga, cuando me haya ceñido una soga al cuello.","words":[["longam","longus","adjetivo femenino, acusativo singular, modifica litteram; aquí alude a la forma alargada de una letra"],["meum","meus","adjetivo posesivo neutro, acusativo singular, modifica collum; palabra suplida editorialmente en algunas transcripciones, presente en Leo/Perseus"],["laqueo","laqueus","sustantivo masculino, ablativo singular de instrumento; con una soga"],["collum","collum","sustantivo neutro, acusativo singular, objeto de obstrinxero"],["quando","quando","conjunción temporal: cuando"],["obstrinxero","obstringo","verbo, futuro perfecto de indicativo activo, primera persona singular; formalmente homónimo del perfecto de subjuntivo"]]},
  {"n":"79","speaker":"EUCLIÓN","latin":"Nunc defaecato demum animo egredior domo,","spanish":"Ahora, por fin, salgo de casa con el ánimo despejado.","words":[["Nunc","nunc","adverbio temporal: ahora"],["defaecato","defaeco","participio perfecto pasivo, ablativo masculino singular, con animo; literalmente, aclarado o decantado"],["demum","demum","adverbio: finalmente, por fin"],["animo","animus","sustantivo masculino ablativo singular; ablativo absoluto con defaecato"],["egredior","egredior","verbo deponente, indicativo presente, primera persona singular"],["domo","domus","sustantivo femenino ablativo singular de separación, sin preposición"]]},
  {"n":"80","latin":"postquam perspexi salva esse intus omnia.","spanish":"después de comprobar que todo está a salvo dentro.","words":[["postquam","postquam","conjunción temporal: después de que"],["perspexi","perspicio","indicativo perfecto activo, primera persona singular"],["salva","salvus","adjetivo neutro acusativo plural, predicativo de omnia en oración de infinitivo"],["esse","sum","infinitivo presente activo, dependiente de perspexi"],["intus","intus","adverbio de lugar: dentro"],["omnia","omnis","pronombre/adjetivo sustantivado neutro acusativo plural, sujeto del infinitivo esse"]]},
  {"n":"81","latin":"redi nunciam intro atque intus serva.","spanish":"Vuelve ahora mismo adentro y vigila lo que hay allí.","words":[["redi","redeo","imperativo presente activo, segunda persona singular"],["nunciam","nunciam","adverbio coloquial: ahora mismo; compuesto de nunc e iam"],["intro","intro","adverbio de dirección: hacia dentro"],["atque","atque","conjunción copulativa: y"],["intus","intus","adverbio de lugar: dentro"],["serva","servo","imperativo presente activo, segunda persona singular; vigila, custodia"]]},
  {"n":"82","speaker":"ESTÁFILA","latin":"Quippini? ego intus servem? an ne quis aedes auferat?","spanish":"¿Cómo no? ¿Que yo vigile dentro? ¿Para que nadie se lleve la casa entera?","words":[["Quippini","quippini","partícula interrogativa coloquial de asentimiento irónico: ¿cómo no?; formación con quin"],["ego","ego","pronombre personal nominativo singular"],["intus","intus","adverbio de lugar: dentro"],["servem","servo","subjuntivo presente activo, primera persona singular; interrogativa deliberativa"],["an","an","partícula interrogativa disyuntiva: ¿o acaso?"],["ne","ne","conjunción final negativa: para que no"],["quis","quis","pronombre indefinido nominativo singular tras ne: alguien"],["aedes","aedes","sustantivo femenino acusativo plural: casa"],["auferat","aufero","subjuntivo presente activo, tercera persona singular, en subordinada final"]]},
  {"n":"83","latin":"nam hic apud nos nihil est aliud quaesti furibus,","spanish":"Porque aquí, en nuestra casa, no hay nada que pueda servir de botín a los ladrones:","words":[["nam","nam","conjunción causal: pues"],["hic","hic","adverbio locativo: aquí"],["apud","apud","preposición con acusativo: en casa de"],["nos","nos","pronombre personal acusativo plural"],["nihil","nihil","pronombre indefinido neutro nominativo singular, sujeto de est"],["est","sum","indicativo presente, tercera persona singular"],["aliud","alius","adjetivo/pronombre neutro nominativo singular: otra cosa"],["quaesti","quaestus","sustantivo masculino genitivo singular arcaico por quaestus; genitivo de valor o provecho, con nihil"],["furibus","fur","sustantivo masculino dativo plural: para los ladrones"]]},
  {"n":"84","latin":"ita inaniis sunt oppletae atque araneis.","spanish":"tan llenas están las habitaciones de vacío y telarañas.","words":[["ita","ita","adverbio de grado: tan, de tal manera"],["inaniis","inania","sustantivo neutro ablativo plural, cosas vacías o vaciedad; forma de interpretación léxica discutida"],["sunt","sum","indicativo presente, tercera persona plural, auxiliar de perfecto pasivo"],["oppletae","oppleo","participio perfecto pasivo femenino nominativo plural, referido a aedes sobrentendido"],["atque","atque","conjunción copulativa: y"],["araneis","aranea","sustantivo femenino ablativo plural: telarañas o arañas"]]},
  {"n":"85","speaker":"EUCLIÓN","latin":"Mirum quin tua me causa faciat Iuppiter","spanish":"¡Qué raro que Júpiter, por consideración a ti, no me convierta","words":[["Mirum","mirus","adjetivo neutro nominativo singular usado impersonalmente: sorprendente"],["quin","quin","conjunción con subjuntivo tras expresión de extrañeza: que no"],["tua","tuus","posesivo femenino ablativo singular, modifica causa"],["me","ego","pronombre personal acusativo singular, objeto de faciat"],["causa","causa","sustantivo femenino ablativo singular; tua causa: por ti"],["faciat","facio","subjuntivo presente activo, tercera persona singular"],["Iuppiter","Iuppiter","nombre propio masculino nominativo singular: Júpiter"]]},
  {"n":"86","latin":"Philippum regem aut Dareum, trivenefica.","spanish":"en el rey Filipo o en Darío, bruja tres veces maldita!","words":[["Philippum","Philippus","nombre propio masculino acusativo singular, predicativo de me"],["regem","rex","sustantivo masculino acusativo singular, aposición a Philippum"],["aut","aut","conjunción disyuntiva: o"],["Dareum","Dareus","nombre propio masculino acusativo singular; Darío, rey persa"],["trivenefica","trivenefica","sustantivo/adjetivo femenino vocativo singular, insulto intensivo: triple hechicera"]]},
  {"n":"87","latin":"araneas mihi ego illas servari volo.","spanish":"¡Quiero que me cuides esas telarañas!","words":[["araneas","aranea","sustantivo femenino acusativo plural, sujeto de la construcción pasiva infinitiva"],["mihi","ego","pronombre personal dativo singular, dativo de interés"],["ego","ego","pronombre personal nominativo singular"],["illas","ille","demostrativo femenino acusativo plural, modifica araneas"],["servari","servo","infinitivo presente pasivo, dependiente de volo"],["volo","volo","indicativo presente activo, primera persona singular"]]},
  {"n":"88","latin":"pauper sum; fateor, patior; quod di dant fero.","spanish":"Soy pobre; lo reconozco, lo soporto; acepto lo que los dioses me dan.","words":[["pauper","pauper","adjetivo de una terminación, nominativo singular, atributo del sujeto"],["sum","sum","indicativo presente, primera persona singular"],["fateor","fateor","verbo deponente, indicativo presente, primera persona singular"],["patior","patior","verbo deponente, indicativo presente, primera persona singular"],["quod","qui, quae, quod","pronombre relativo neutro acusativo singular, objeto de dant y antecedente implícito de fero"],["di","deus","sustantivo masculino nominativo plural, forma alternativa a dei"],["dant","do","indicativo presente activo, tercera persona plural"],["fero","fero","indicativo presente activo, primera persona singular"]]},
  {"n":"89","latin":"abi intro, occlude ianuam. iam ego hic ero.","spanish":"Entra, cierra la puerta. Enseguida estaré de vuelta.","words":[["abi","abeo","imperativo presente activo, segunda persona singular"],["intro","intro","adverbio de dirección: adentro"],["occlude","occludo","imperativo presente activo, segunda persona singular"],["ianuam","ianua","sustantivo femenino acusativo singular"],["iam","iam","adverbio temporal: pronto, enseguida"],["ego","ego","pronombre personal nominativo singular"],["hic","hic","adverbio de lugar: aquí"],["ero","sum","futuro de indicativo, primera persona singular"]]},
  {"n":"90","latin":"cave quemquam alienum in aedis intro miseris.","spanish":"¡No se te ocurra dejar entrar en casa a ningún extraño!","words":[["cave","caveo","imperativo presente activo, segunda persona singular; introduce prohibición"],["quemquam","quisquam","pronombre indefinido masculino acusativo singular"],["alienum","alienus","adjetivo masculino acusativo singular, referido a quemquam: ajeno, extraño"],["in","in","preposición con acusativo, dirección"],["aedis","aedes","sustantivo femenino acusativo plural, variante de aedes"],["intro","intro","adverbio de dirección: adentro"],["miseris","mitto","perfecto de subjuntivo activo, segunda persona singular, en prohibición con cave; formalmente coincide con futuro perfecto de indicativo"]]},
  {"n":"91","latin":"quod quispiam ignem quaerat, extingui volo,","spanish":"Si alguien viene a pedir fuego, quiero que lo apagues,","words":[["quod","quod","conjunción condicional coloquial: si, en caso de que"],["quispiam","quispiam","pronombre indefinido masculino nominativo singular: alguien"],["ignem","ignis","sustantivo masculino acusativo singular, objeto de quaerat"],["quaerat","quaero","presente de subjuntivo activo, tercera persona singular, eventualidad"],["extingui","exstinguo","infinitivo presente pasivo, referido al fuego"],["volo","volo","presente de indicativo activo, primera persona singular"]]},
  {"n":"92","latin":"ne causae quid sit quod te quisquam quaeritet.","spanish":"para que nadie tenga el menor motivo de venir a buscarte.","words":[["ne","ne","conjunción final negativa: para que no"],["causae","causa","genitivo singular femenino partitivo con quid: motivo alguno"],["quid","quis, quid","pronombre indefinido neutro nominativo singular: algo"],["sit","sum","presente de subjuntivo, tercera persona singular, subordinada final"],["quod","qui, quae, quod","pronombre relativo neutro nominativo singular: motivo por el que; introduce relativa de finalidad"],["te","tu","pronombre personal acusativo singular"],["quisquam","quisquam","pronombre indefinido masculino nominativo singular"],["quaeritet","quaerito","presente de subjuntivo activo, tercera persona singular; frecuentativo de quaero"]]},
  {"n":"93","latin":"nam si ignis vivet, tu extinguere extempulo.","spanish":"Porque si el fuego sigue vivo, a ti te apagaré en el acto.","words":[["nam","nam","conjunción explicativa: porque"],["si","si","conjunción condicional"],["ignis","ignis","sustantivo masculino nominativo singular"],["vivet","vivo","futuro de indicativo activo, tercera persona singular"],["tu","tu","pronombre personal nominativo singular, sujeto enfático"],["extinguere","exstinguo","futuro de indicativo pasivo, segunda persona singular; forma en -re equivalente a -ris, no imperativo"],["extempulo","extempulo","adverbio: inmediatamente, en el acto"]]},
  {"n":"94","latin":"tum aquam aufugisse dicito, si quis petet.","spanish":"Y si alguien pide agua, dile que se ha escapado.","words":[["tum","tum","adverbio consecutivo o temporal: entonces"],["aquam","aqua","sustantivo femenino acusativo singular, sujeto del infinitivo aufugisse"],["aufugisse","aufugio","infinitivo perfecto activo en acusativo con infinitivo dependiente de dicito"],["dicito","dico","imperativo futuro activo, segunda persona singular"],["si","si","conjunción condicional"],["quis","quis","pronombre indefinido masculino nominativo singular, tras si"],["petet","peto","futuro de indicativo activo, tercera persona singular"]]},
  {"n":"95","latin":"cultrum, securim, pistillum, mortarium,","spanish":"Y el cuchillo, el hacha, la mano del mortero y el mortero,","words":[["cultrum","culter","sustantivo masculino acusativo singular"],["securim","securis","sustantivo femenino acusativo singular"],["pistillum","pistillum","sustantivo neutro acusativo singular, mano o mazo de mortero"],["mortarium","mortarium","sustantivo neutro acusativo singular, mortero"]]},
  {"n":"96","latin":"quae utenda vasa semper vicini rogant,","spanish":"esos utensilios que los vecinos siempre piden prestados,","words":[["quae","qui, quae, quod","pronombre relativo neutro acusativo plural, referido a vasa"],["utenda","utor","gerundivo neutro acusativo plural de verbo deponente, concuerda con vasa; finalidad de uso o préstamo"],["vasa","vas, vasis","sustantivo neutro acusativo plural, objeto de rogant"],["semper","semper","adverbio: siempre"],["vicini","vicinus","sustantivo masculino nominativo plural, sujeto de rogant"],["rogant","rogo","presente de indicativo activo, tercera persona plural"]]},
  {"n":"97","latin":"fures venisse atque abstulisse dicito.","spanish":"di que vinieron ladrones y se los llevaron.","words":[["fures","fur","sustantivo masculino nominativo plural en la oración de infinitivo (se esperaría acusativo fures, formalmente idéntico)"],["venisse","venio","infinitivo perfecto activo"],["atque","atque","conjunción copulativa"],["abstulisse","aufero","infinitivo perfecto activo, de aufero"],["dicito","dico","imperativo futuro activo, segunda persona singular"]]},
  {"n":"98","latin":"profecto in aedis meas me absente neminem","spanish":"Desde luego, mientras yo esté fuera, no quiero a nadie","words":[["profecto","profecto","adverbio: ciertamente, desde luego"],["in","in","preposición con acusativo, dirección"],["aedis","aedes","sustantivo femenino acusativo plural, forma arcaica de aedes"],["meas","meus","adjetivo posesivo femenino acusativo plural, modifica aedis"],["me","ego","pronombre personal ablativo singular, sujeto de ablativo absoluto"],["absente","absens","participio presente de absum, ablativo singular; ablativo absoluto con me"],["neminem","nemo","pronombre indefinido acusativo singular, objeto de mitti"]]},
  {"n":"99","latin":"volo intro mitti. atque etiam hoc praedico tibi,","spanish":"entrando en mi casa. Y además te advierto una cosa:","words":[["volo","volo","presente de indicativo activo, primera persona singular"],["intro","intro","adverbio de dirección: adentro"],["mitti","mitto","infinitivo presente pasivo, dependiente de volo"],["atque","atque","conjunción copulativa"],["etiam","etiam","adverbio: además"],["hoc","hic, haec, hoc","pronombre demostrativo neutro acusativo singular, objeto de praedico"],["praedico","praedico","presente de indicativo activo, primera persona singular"],["tibi","tu","pronombre personal dativo singular"]]},
  {"n":"100","latin":"si Bona Fortuna veniat, ne intro miseris.","spanish":"aunque venga la Buena Fortuna, no la dejes entrar.","words":[["si","si","conjunción condicional, aquí eventualidad hiperbólica"],["Bona","bonus","adjetivo femenino nominativo singular, parte de la personificación Bona Fortuna"],["Fortuna","Fortuna","sustantivo femenino nominativo singular, personificación de la buena suerte"],["veniat","venio","presente de subjuntivo activo, tercera persona singular, prótasis eventual"],["ne","ne","partícula prohibitiva"],["intro","intro","adverbio de dirección: adentro"],["miseris","mitto","perfecto de subjuntivo activo, segunda persona singular, prohibición con ne; formalmente igual a futuro perfecto de indicativo"]]},
  {"n":"101","speaker":"ESTÁFILA","latin":"Pol ea ipsa credo ne intro mittatur cavet,","spanish":"¡Por Pólux! Creo que ella misma procura que no la dejen entrar.","words":[["Pol","pol","interjección de juramento por Pólux"],["ea","is, ea, id","pronombre demostrativo femenino nominativo singular; sujeto de cavet"],["ipsa","ipse","pronombre intensivo femenino nominativo singular, concuerda con ea"],["credo","credo","indicativo presente activo, primera persona singular"],["ne","ne","conjunción completiva de prevención, con subjuntivo"],["intro","intro","adverbio de dirección: adentro"],["mittatur","mitto","subjuntivo presente pasivo, tercera persona singular"],["cavet","caveo","indicativo presente activo, tercera persona singular"]]},
  {"n":"102","latin":"nam ad aedis nostras numquam adit, quamquam prope est.","spanish":"porque nunca se acerca a nuestra casa, aunque vive cerca.","words":[["nam","nam","conjunción causal"],["ad","ad","preposición con acusativo"],["aedis","aedes","acusativo plural arcaico por aedes; casa"],["nostras","noster","adjetivo posesivo femenino acusativo plural"],["numquam","numquam","adverbio de negación temporal"],["adit","adeo","indicativo presente activo, tercera persona singular"],["quamquam","quamquam","conjunción concesiva"],["prope","prope","adverbio de lugar: cerca"],["est","sum","indicativo presente, tercera persona singular"]]},
  {"n":"103","speaker":"EUCLIÓN","latin":"Tace atque abi intro. STAPHYLA: Taceo atque abeo. EUCLIO: Occlude sis","spanish":"¡Calla y entra! —ESTÁFILA: Callo y me voy. —EUCLIÓN: Cierra, por favor,","words":[["Tace","taceo","imperativo presente activo, segunda persona singular"],["atque","atque","conjunción copulativa"],["abi","abeo","imperativo presente activo, segunda persona singular"],["intro","intro","adverbio de dirección"],["STAPHYLA","Staphyla","nombre propio femenino nominativo singular; rótulo de parlamento editorial"],["Taceo","taceo","indicativo presente activo, primera persona singular"],["atque","atque","conjunción copulativa"],["abeo","abeo","indicativo presente activo, primera persona singular"],["EUCLIO","Euclio","nombre propio masculino nominativo singular; rótulo de parlamento editorial"],["Occlude","occludo","imperativo presente activo, segunda persona singular"],["sis","si vis","fórmula coloquial de cortesía, contracción de si vis"]]},
  {"n":"104","latin":"fores ambobus pessulis. iam ego hic ero.","spanish":"la puerta con los dos cerrojos. Enseguida estaré aquí.","words":[["fores","fores","sustantivo femenino acusativo plural: hojas de la puerta"],["ambobus","ambo","numeral adjetivo ablativo plural masculino, concuerda con pessulis"],["pessulis","pessulus","sustantivo masculino ablativo plural, instrumento"],["iam","iam","adverbio temporal"],["ego","ego","pronombre personal nominativo singular"],["hic","hic","adverbio de lugar: aquí"],["ero","sum","futuro imperfecto de indicativo, primera persona singular"]]},
  {"n":"105","latin":"discrucior animi, quia ab domo abeundum est mihi.","spanish":"Me atormento de angustia porque tengo que alejarme de casa.","words":[["discrucior","discrucio","indicativo presente pasivo, primera persona singular, uso reflexivo: atormentarse"],["animi","animus","genitivo singular de relación o especificación"],["quia","quia","conjunción causal"],["ab","ab","preposición con ablativo"],["domo","domus","ablativo singular, separación"],["abeundum","abeo","gerundivo neutro singular en construcción impersonal de obligación"],["est","sum","indicativo presente, tercera persona singular"],["mihi","ego","pronombre personal dativo singular, agente de obligación"]]},
  {"n":"106","latin":"nimis hercle invitus abeo. sed quid agam scio.","spanish":"¡Por Hércules, qué poco quiero irme! Pero sé lo que tengo que hacer.","words":[["nimis","nimis","adverbio de grado"],["hercle","hercle","interjección de juramento"],["invitus","invitus","adjetivo masculino nominativo singular, predicativo del sujeto"],["abeo","abeo","indicativo presente activo, primera persona singular"],["sed","sed","conjunción adversativa"],["quid","quis, quid","pronombre interrogativo neutro acusativo singular"],["agam","ago","subjuntivo presente activo, primera persona singular, interrogativa indirecta"],["scio","scio","indicativo presente activo, primera persona singular"]]},
  {"n":"107","latin":"nam noster nostrae qui est magister curiae","spanish":"El caso es que el responsable de nuestra curia","words":[["nam","nam","conjunción explicativa"],["noster","noster","adjetivo posesivo masculino nominativo singular, modifica magister"],["nostrae","noster","adjetivo posesivo femenino genitivo singular, modifica curiae"],["qui","qui, quae, quod","pronombre relativo masculino nominativo singular"],["est","sum","indicativo presente, tercera persona singular"],["magister","magister","sustantivo masculino nominativo singular"],["curiae","curia","sustantivo femenino genitivo singular"]]},
  {"n":"108","latin":"dividere argenti dixit nummos in viros;","spanish":"ha anunciado que repartirá monedas de plata entre los hombres.","words":[["dividere","divido","infinitivo presente activo, complemento de dixit"],["argenti","argentum","sustantivo neutro genitivo singular, materia"],["dixit","dico","indicativo perfecto activo, tercera persona singular"],["nummos","nummus","sustantivo masculino acusativo plural"],["in","in","preposición con acusativo, distribución"],["viros","vir","sustantivo masculino acusativo plural"]]},
  {"n":"109","latin":"id si relinquo ac non peto, omnes ilico","spanish":"Si renuncio a eso y no voy a reclamarlo, todos al instante","words":[["id","is, ea, id","pronombre demostrativo neutro acusativo singular"],["si","si","conjunción condicional"],["relinquo","relinquo","indicativo presente activo, primera persona singular"],["ac","ac","conjunción copulativa"],["non","non","adverbio de negación"],["peto","peto","indicativo presente activo, primera persona singular"],["omnes","omnis","pronombre/adjetivo sustantivado masculino nominativo plural"],["ilico","ilico","adverbio temporal: inmediatamente"]]},
  {"n":"110","latin":"me suspicentur, credo, habere aurum domi.","spanish":"sospecharán, creo, que tengo oro en casa.","words":[["me","ego","pronombre personal acusativo singular, sujeto de infinitivo"],["suspicentur","suspicor","subjuntivo presente deponente, tercera persona plural; eventualidad en apódosis"],["credo","credo","indicativo presente activo, primera persona singular, inciso"],["habere","habeo","infinitivo presente activo"],["aurum","aurum","sustantivo neutro acusativo singular"],["domi","domus","locativo singular: en casa"]]}
,
  {"n":"111","latin":"nam non est veri simile, hominem pauperem","spanish":"Porque no es verosímil que un pobre","words":[["nam","nam","conjunción explicativa"],["non","non","adverbio negativo"],["est","sum","indicativo presente 3.ª singular"],["veri","verus","genitivo singular neutro, de relación con simile"],["simile","similis","nominativo singular neutro, atributo impersonal"],["hominem","homo","acusativo singular masculino, sujeto lógico del infinitivo facere"],["pauperem","pauper","acusativo singular masculino, modifica hominem"]]},
  {"n":"112","latin":"pauxillum parvi facere quin nummum petat.","spanish":"despreciara una monedita y no fuera a reclamarla.","words":[["pauxillum","pauxillus","acusativo singular neutro sustantivado, objeto de facere"],["parvi","parvus","genitivo singular neutro de estimación"],["facere","facio","infinitivo presente activo"],["quin","quin","conjunción con subjuntivo tras negación"],["nummum","nummus","acusativo singular masculino"],["petat","peto","subjuntivo presente activo 3.ª singular"]]},
  {"n":"113","latin":"nam nunc cum celo sedulo omnis, ne sciant,","spanish":"Pues ahora, aunque procuro ocultárselo cuidadosamente a todos, para que no se enteren,","words":[["nam","nam","conjunción explicativa"],["nunc","nunc","adverbio temporal"],["cum","cum","conjunción temporal con matiz concesivo"],["celo","celo","indicativo presente activo 1.ª singular"],["sedulo","sedulo","adverbio de modo"],["omnis","omnis","acusativo plural masculino arcaico por omnes"],["ne","ne","conjunción final negativa"],["sciant","scio","subjuntivo presente activo 3.ª plural"]]},
  {"n":"114","latin":"omnes videntur scire et me benignius","spanish":"todos parecen saberlo, y con más amabilidad","words":[["omnes","omnis","nominativo plural masculino sustantivado"],["videntur","videor","indicativo presente pasivo 3.ª plural, «parecen»"],["scire","scio","infinitivo presente activo"],["et","et","conjunción copulativa"],["me","ego","acusativo singular"],["benignius","benigne","adverbio comparativo"]]},
  {"n":"115","latin":"omnes salutant quam salutabant prius;","spanish":"todos me saludan más amablemente que antes;","words":[["omnes","omnis","nominativo plural masculino, sujeto"],["salutant","saluto","indicativo presente activo 3.ª plural"],["quam","quam","conjunción comparativa"],["salutabant","saluto","indicativo imperfecto activo 3.ª plural"],["prius","prius","adverbio temporal comparativo"]]},
  {"n":"116","latin":"adeunt, consistunt, copulantur dexteras,","spanish":"Se me acercan, se detienen, me estrechan la mano;","words":[["adeunt","adeo","verbo; indicativo presente activo, 3.ª persona plural"],["consistunt","consisto","verbo; indicativo presente activo, 3.ª persona plural"],["copulantur","copulo","verbo; indicativo presente pasivo, 3.ª persona plural; uso recíproco con dexteras"],["dexteras","dextera","sustantivo femenino; acusativo plural, manos derechas"]]},
  {"n":"117","latin":"rogitant me ut valeam, quid agam, quid rerum geram.","spanish":"me preguntan una y otra vez cómo estoy, qué hago y en qué ando ocupado.","words":[["rogitant","rogito","verbo frecuentativo; indicativo presente activo, 3.ª persona plural"],["me","ego","pronombre personal; acusativo singular"],["ut","ut","adverbio interrogativo indirecto: cómo"],["valeam","valeo","verbo; subjuntivo presente activo, 1.ª persona singular, interrogativa indirecta"],["quid","quis","pronombre interrogativo neutro; acusativo singular"],["agam","ago","verbo; subjuntivo presente activo, 1.ª persona singular, interrogativa indirecta"],["quid","quis","pronombre interrogativo neutro; acusativo singular"],["rerum","res","sustantivo femenino; genitivo plural partitivo con quid"],["geram","gero","verbo; subjuntivo presente activo, 1.ª persona singular, interrogativa indirecta"]]},
  {"n":"118","latin":"nunc quo profectus sum ibo; postidea domum","spanish":"Ahora iré adonde me había encaminado; después, a casa","words":[["nunc","nunc","adverbio temporal"],["quo","quo","adverbio relativo de dirección: adonde"],["profectus","proficiscor","participio perfecto deponente, nominativo masculino singular; con sum forma perfecto"],["sum","sum","verbo auxiliar; indicativo presente, 1.ª persona singular, con profectus"],["ibo","eo","verbo; futuro de indicativo activo, 1.ª persona singular"],["postidea","postidea","adverbio temporal arcaico: después"],["domum","domus","sustantivo femenino; acusativo singular de dirección sin preposición"]]},
  {"n":"119","latin":"me rursum quantum potero tantum recipiam.","spanish":"regresaré tan deprisa como me sea posible.","words":[["me","ego","pronombre personal reflexivo de 1.ª persona; acusativo singular"],["rursum","rursum","adverbio: de vuelta, nuevamente"],["quantum","quantum","adverbio correlativo de grado: cuanto"],["potero","possum","verbo; futuro de indicativo activo, 1.ª persona singular"],["tantum","tantum","adverbio correlativo de grado: tanto"],["recipiam","recipio","verbo; futuro de indicativo activo, 1.ª persona singular; en me recipere: retirarse, regresar; formalmente también subjuntivo presente"]]}
];

verses.push(...[{"n":"120","speaker":"EUNOMIA","latin":"Velim te arbitrari med haec verba, frater,","spanish":"Quisiera, hermano, que consideraras que estas palabras las digo","words":[["Velim","volo","subjuntivo presente activo, primera singular; deseo atenuado"],["te","tu","acusativo singular, sujeto de arbitrari"],["arbitrari","arbitror","infinitivo presente deponente"],["med","ego","acusativo singular arcaico de me; sujeto de facere"],["haec","hic","demostrativo neutro acusativo plural, con verba"],["verba","verbum","acusativo neutro plural, objeto de facere"],["frater","frater","vocativo masculino singular"]]},{"n":"121","latin":"meai fidei tuaique rei","spanish":"por lealtad de mi parte y por tu propio bien,","words":[["meai","meus","genitivo femenino singular arcaico, con fidei"],["fidei","fides","genitivo femenino singular, dependiente de causa"],["tuaique","tuus + -que","genitivo femenino singular arcaico, con rei, más enclítica copulativa -que"],["rei","res","genitivo femenino singular, dependiente de causa"]]},{"n":"122","latin":"causa facere, ut aequom est germanam sororem.","spanish":"como corresponde a una hermana de sangre.","words":[["causa","causa","ablativo singular pospuesto a genitivos: por causa de"],["facere","facio","infinitivo presente activo, dependiente de arbitrari"],["ut","ut","conjunción comparativa: como"],["aequom","aequus","adjetivo neutro nominativo singular arcaico, predicativo con est"],["est","sum","indicativo presente, tercera singular"],["germanam","germanus","adjetivo femenino acusativo singular, con sororem"],["sororem","soror","acusativo femenino singular, sujeto elíptico de facere"]]},{"n":"123","latin":"quamquam haud falsa sum nos odiosas haberi;","spanish":"Aunque no me equivoco al decir que nos consideran molestas:","words":[["quamquam","quamquam","conjunción concesiva"],["haud","haud","adverbio negativo"],["falsa","fallo / falsus","participio perfecto pasivo/adjetivo femenino nominativo singular, con valor de equivocada"],["sum","sum","indicativo presente, primera singular"],["nos","ego","acusativo plural, sujeto de haberi"],["odiosas","odiosus","adjetivo femenino acusativo plural, predicativo de nos"],["haberi","habeo","infinitivo presente pasivo, dependiente de falsa sum"]]},{"n":"124","latin":"nam multum loquaces merito omnes habemur,","spanish":"pues, con razón o sin ella, a todas nos tienen por muy habladoras,","words":[["nam","nam","conjunción explicativa"],["multum","multum","adverbio de grado: mucho"],["loquaces","loquax","adjetivo femenino nominativo plural, predicativo"],["merito","merito","adverbio: merecidamente"],["omnes","omnis","pronombre/adjetivo femenino nominativo plural, sujeto"],["habemur","habeo","indicativo presente pasivo, primera plural"]]},{"n":"125","latin":"nec mutam profecto repertam ullam esse","spanish":"y aseguran que jamás se ha encontrado una sola mujer muda,","words":[["nec","neque","conjunción copulativa negativa"],["mutam","mutus","adjetivo femenino acusativo singular, con mulierem"],["profecto","profecto","adverbio: ciertamente"],["repertam","reperio","participio perfecto pasivo femenino acusativo singular, con esse"],["ullam","ullus","adjetivo femenino acusativo singular, con mulierem"],["esse","sum","infinitivo presente, auxiliar del perfecto pasivo repertam esse"]]},{"n":"126","latin":"aut hodie dicunt mulierem aut ullo in saeclo.","spanish":"ni hoy ni en ninguna época anterior.","words":[["aut","aut","conjunción disyuntiva correlativa"],["hodie","hodie","adverbio: hoy"],["dicunt","dico","indicativo presente activo, tercera plural; rige acusativo con infinitivo"],["mulierem","mulier","acusativo femenino singular, sujeto de repertam esse"],["aut","aut","conjunción disyuntiva correlativa"],["ullo","ullus","adjetivo neutro ablativo singular, con saeclo"],["in","in","preposición con ablativo"],["saeclo","saeclum","sustantivo neutro ablativo singular; grafía antigua de saeculo"]]}]);
verses.push(...[{"n":"127","latin":"verum hoc, frater, unum tamen cogitato,","spanish":"Pero piensa, hermano, en una sola cosa:","words":[["verum","verum","conjunción adversativa: pero"],["hoc","hic","demostrativo neutro acusativo singular, objeto de cogitato"],["frater","frater","vocativo masculino singular"],["unum","unus","numeral/adjetivo neutro acusativo singular, modifica hoc"],["tamen","tamen","adverbio concesivo"],["cogitato","cogito","imperativo futuro activo, segunda persona singular"]]},{"n":"128","latin":"tibi proximam me mihique esse item te;","spanish":"que yo soy tu pariente más cercana, y tú lo eres igualmente para mí;","words":[["tibi","tu","dativo singular, complemento de proximam"],["proximam","proximus","adjetivo femenino acusativo singular, predicativo de me"],["me","ego","acusativo singular, sujeto de esse"],["mihique","ego + -que","dativo singular más enclítica copulativa -que"],["esse","sum","infinitivo presente activo; núcleo de oración de infinitivo"],["item","item","adverbio: igualmente"],["te","tu","acusativo singular, sujeto de esse sobrentendido"]]},{"n":"129","latin":"ita aequom est quod in rem esse utrique arbitremur","spanish":"por eso es justo que aquello que juzguemos conveniente para ambos","words":[["ita","ita","adverbio consecutivo"],["aequom","aequus","adjetivo neutro nominativo singular, grafía arcaica de aequum"],["est","sum","indicativo presente activo, tercera singular"],["quod","qui","pronombre relativo neutro acusativo singular, objeto de arbitremur en construcción elíptica"],["in","in","preposición con acusativo en la locución in rem"],["rem","res","acusativo femenino singular, utilidad o interés"],["esse","sum","infinitivo presente activo"],["utrique","uterque","dativo singular, para cada uno de los dos"],["arbitremur","arbitror","subjuntivo presente deponente, primera plural"]]},{"n":"130","latin":"et mihi te et tibi me consulere et monere;","spanish":"nos lleve a aconsejarnos y advertirnos mutuamente: tú a mí y yo a ti;","words":[["et","et","conjunción copulativa correlativa"],["mihi","ego","dativo singular, destinatario"],["te","tu","acusativo singular, sujeto de los infinitivos"],["et","et","conjunción copulativa correlativa"],["tibi","tu","dativo singular, destinatario"],["me","ego","acusativo singular, sujeto de los infinitivos"],["consulere","consulo","infinitivo presente activo; aquí, velar por o aconsejar"],["et","et","conjunción copulativa"],["monere","moneo","infinitivo presente activo"]]},{"n":"131","latin":"neque occultum id haberi neque per metum mussari,","spanish":"sin mantenerlo oculto ni callarlo por miedo,","words":[["neque","neque","conjunción negativa correlativa"],["occultum","occultus","adjetivo/participio neutro acusativo singular, predicativo de id"],["id","is","pronombre demostrativo neutro acusativo singular"],["haberi","habeo","infinitivo presente pasivo"],["neque","neque","conjunción negativa correlativa"],["per","per","preposición con acusativo"],["metum","metus","acusativo masculino singular"],["mussari","mussor","infinitivo presente deponente: murmurar o guardar silencio"]]},{"n":"132","latin":"quin participem pariter ego te et tu me ut facias.","spanish":"sino haciéndonos partícipes por igual, yo a ti y tú a mí.","words":[["quin","quin","conjunción: antes bien / sin que; construcción sintáctica compleja"],["participem","particeps","adjetivo acusativo singular, complemento predicativo de te y me"],["pariter","pariter","adverbio: por igual"],["ego","ego","pronombre nominativo singular"],["te","tu","pronombre acusativo singular"],["et","et","conjunción copulativa"],["tu","tu","pronombre nominativo singular"],["me","ego","pronombre acusativo singular"],["ut","ut","conjunción completiva; introduce facias"],["facias","facio","subjuntivo presente activo, segunda singular"]]},{"n":"133","latin":"eo nunc ego secreto ted huc foras seduxi,","spanish":"Por eso te he apartado ahora aquí afuera, en privado,","words":[["eo","is","ablativo neutro singular de causa: por eso"],["nunc","nunc","adverbio temporal"],["ego","ego","nominativo singular"],["secreto","secreto","adverbio: en privado"],["ted","tu","acusativo singular arcaico de te"],["huc","huc","adverbio de dirección"],["foras","foras","adverbio de dirección: afuera"],["seduxi","seduco","indicativo perfecto activo, primera singular"]]},{"n":"134","latin":"ut tuam rem ego tecum hic loquerer familiarem.","spanish":"para hablar contigo aquí de un asunto que te concierne personalmente.","words":[["ut","ut","conjunción final"],["tuam","tuus","adjetivo posesivo femenino acusativo singular"],["rem","res","sustantivo femenino acusativo singular; acusativo de tema con loquerer"],["ego","ego","pronombre nominativo singular"],["tecum","tu + cum","pronombre ablativo singular con posposición de cum"],["hic","hic","adverbio de lugar: aquí"],["loquerer","loquor","subjuntivo imperfecto deponente, primera singular"],["familiarem","familiaris","adjetivo femenino acusativo singular, modifica rem"]]}]);
verses.push(...[{"n":"135","speaker":"MEGADORO","latin":"Da mi, optuma femina, manum.","spanish":"Dame la mano, excelente mujer.","words":[["Da","do","imperativo presente activo, segunda persona singular"],["mi","ego","dativo singular arcaico de mihi"],["optuma","bonus","superlativo femenino vocativo singular; variante arcaica de optima"],["femina","femina","sustantivo femenino vocativo singular"],["manum","manus","sustantivo femenino acusativo singular"]]},{"n":"136","speaker":"EUNOMIA","latin":"Ubi ea est? quis ea est nam optuma?","spanish":"¿Dónde está? ¿Y quién es esa mujer excelente?","words":[["Ubi","ubi","adverbio interrogativo de lugar"],["ea","is, ea, id","pronombre femenino nominativo singular; referente elíptico, probablemente la mujer"],["est","sum","presente de indicativo, tercera singular"],["quis","quis","pronombre interrogativo nominativo singular; forma común en uso coloquial con referente femenino"],["ea","is, ea, id","demostrativo femenino nominativo singular"],["est","sum","presente de indicativo, tercera singular"],["nam","nam","partícula interrogativa enfática"],["optuma","bonus","superlativo femenino nominativo singular, grafía arcaica por optima"]]},{"n":"137","speaker":"MEGADORO / EUNOMIA / MEGADORO","latin":"Tu. Tune ais? Si negas, nego.","spanish":"—Tú. —¿Eso dices? —Si tú lo niegas, yo también.","words":[["Tu","tu","pronombre personal nominativo singular"],["Tune","tu + -ne","pronombre nominativo singular con enclítica interrogativa -ne"],["ais","aio","presente de indicativo, segunda singular; verbo defectivo"],["Si","si","conjunción condicional"],["negas","nego","presente de indicativo activo, segunda singular"],["nego","nego","presente de indicativo activo, primera singular"]]},{"n":"138","speaker":"EUNOMIA","latin":"Decet te equidem vera proloqui;","spanish":"En cualquier caso, te corresponde decir la verdad;","words":[["Decet","decet","verbo impersonal, presente de indicativo activo, tercera singular"],["te","tu","pronombre personal acusativo singular"],["equidem","equidem","partícula enfática: ciertamente, por mi parte"],["vera","verus","adjetivo neutro acusativo plural sustantivado: cosas verdaderas"],["proloqui","proloquor","infinitivo presente deponente"]]},{"n":"139","latin":"nam optuma nulla potest eligi:","spanish":"porque no se puede elegir a ninguna como la mejor:","words":[["nam","nam","conjunción causal"],["optuma","bonus","superlativo femenino nominativo singular, predicativo; grafía arcaica"],["nulla","nullus","pronombre/adjetivo femenino nominativo singular"],["potest","possum","presente de indicativo, tercera singular"],["eligi","eligo","infinitivo presente pasivo"]]},{"n":"140","speaker":"EUNOMIA / MEGADORO","latin":"alia alia peior, frater, est. Idem ego arbitror,","spanish":"una es peor que otra, hermano. —Yo pienso lo mismo,","words":[["alia","alius","pronombre femenino nominativo singular: una"],["alia","alius","pronombre femenino ablativo singular de comparación: que otra; misma forma, función distinta"],["peior","malus","adjetivo comparativo femenino nominativo singular"],["frater","frater","sustantivo masculino vocativo singular"],["est","sum","presente de indicativo, tercera singular"],["Idem","idem","pronombre neutro acusativo singular: lo mismo"],["ego","ego","pronombre nominativo singular"],["arbitror","arbitror","presente de indicativo deponente, primera singular"]]},{"n":"141","speaker":"MEGADORO","latin":"nec tibi advorsari certum est de istac re umquam, soror.","spanish":"y tengo decidido no llevarte nunca la contraria en este asunto, hermana.","words":[["nec","neque","conjunción copulativa negativa"],["tibi","tu","pronombre personal dativo singular"],["advorsari","adversor","infinitivo presente deponente; grafía arcaica por adversari"],["certum","certus","adjetivo neutro nominativo singular en construcción impersonal certum est"],["est","sum","indicativo presente activo tercera singular"],["de","de","preposición con ablativo"],["istac","iste","demostrativo femenino ablativo singular; forma reforzada istac"],["re","res","sustantivo femenino ablativo singular"],["umquam","umquam","adverbio temporal: alguna vez, aquí bajo negación 'nunca'"],["soror","soror","sustantivo femenino vocativo singular"]]},
{"n":"142","speaker":"EUNOMIA / MEGADORO","latin":"Da mihi operam amabo. Tuast, utere atque impera, si quid vis.","spanish":"—Escúchame, por favor. —Toda mi atención es tuya: úsala y manda, si deseas algo.","words":[["Da","do","imperativo presente activo segunda singular"],["mihi","ego","pronombre dativo singular"],["operam","opera","sustantivo femenino acusativo singular; dare operam = prestar atención"],["amabo","amo","futuro indicativo activo primera singular; fórmula coloquial de cortesía"],["Tuast","tuus + sum","contracción de tua est; posesivo femenino nominativo singular y presente tercera singular"],["utere","utor","imperativo presente deponente segunda singular"],["atque","atque","conjunción copulativa"],["impera","impero","imperativo presente activo segunda singular"],["si","si","conjunción condicional"],["quid","quis, quid","pronombre indefinido neutro acusativo singular"],["vis","volo","indicativo presente activo segunda singular"]]},
{"n":"143","speaker":"EUNOMIA","latin":"Id quod in rem tuam optumum esse arbitror,","spanish":"Aquello que considero más conveniente para tus intereses,","words":[["Id","is, ea, id","pronombre demostrativo neutro acusativo singular; anticipa el consejo"],["quod","qui, quae, quod","pronombre relativo neutro acusativo singular"],["in","in","preposición con acusativo en locución in rem"],["rem","res","sustantivo femenino acusativo singular"],["tuam","tuus","posesivo femenino acusativo singular"],["optumum","bonus","superlativo neutro acusativo singular; grafía arcaica de optimum"],["esse","sum","infinitivo presente activo"],["arbitror","arbitror","indicativo presente deponente primera singular"]]},
{"n":"144","speaker":"EUNOMIA","latin":"ted id monitum advento.","spanish":"he venido a aconsejártelo.","words":[["ted","tu","pronombre personal acusativo singular arcaico"],["id","is, ea, id","pronombre demostrativo neutro acusativo singular"],["monitum","moneo","supino en -um; finalidad tras verbo de movimiento"],["advento","advento","indicativo presente activo primera singular; frecuentativo de advenio"]]},
{"n":"145","speaker":"MEGADORO / EUNOMIA","latin":"Soror, more tuo facis. Factum volo.","spanish":"—Hermana, haces lo que acostumbras. —Eso es lo que quiero hacer.","words":[["Soror","soror","sustantivo femenino vocativo singular"],["more","mos","sustantivo masculino ablativo singular de modo"],["tuo","tuus","posesivo masculino ablativo singular"],["facis","facio","indicativo presente activo segunda singular"],["Factum","facio","participio perfecto pasivo neutro acusativo singular; complementa volo, lectura contextual discutible"],["volo","volo","indicativo presente activo primera singular"]]},
{"n":"146","speaker":"MEGADORO / EUNOMIA","latin":"Quid est id, soror? Quod tibi sempiternum","spanish":"—¿Qué es eso, hermana? —Algo que para ti sea duraderamente...","words":[["Quid","quis, quid","pronombre interrogativo neutro nominativo singular"],["est","sum","indicativo presente activo tercera singular"],["id","is, ea, id","pronombre demostrativo neutro nominativo singular"],["soror","soror","sustantivo femenino vocativo singular"],["Quod","qui, quae, quod","pronombre relativo neutro nominativo singular; antecedente sobreentendido"],["tibi","tu","pronombre personal dativo singular de interés"],["sempiternum","sempiternus","adjetivo neutro nominativo singular, predicativo; oración continúa en verso siguiente"]]}
]); 
verses.push(...[{"n":"147","speaker":"EUNOMIA","latin":"salutare sit: liberis procreandis—","spanish":"te beneficie para siempre: para tener hijos... ","words":[["salutare","salutaris","adjetivo neutro nominativo singular, atributo de quod"],["sit","sum","subjuntivo presente, tercera singular; relativo de finalidad o caracterización"],["liberis","liberi","sustantivo masculino plural dativo; finalidad con procreandis"],["procreandis","procreo","gerundivo dativo plural masculino; concuerda con liberis"]]},{"n":"148","speaker":"EUNOMIA","latin":"ita di faxint—volo te uxorem","spanish":"¡Que así lo quieran los dioses! Quiero que te cases","words":[["ita","ita","adverbio de modo"],["di","deus","sustantivo masculino nominativo plural, forma contracta"],["faxint","facio","subjuntivo perfecto arcaico tercera plural, fórmula optativa; análisis formal discutido"],["volo","volo","indicativo presente activo primera singular"],["te","tu","acusativo singular, sujeto del infinitivo ducere"],["uxorem","uxor","acusativo singular femenino, objeto de ducere"]]},{"n":"149","speaker":"EUNOMIA / MEGADORO","latin":"domum ducere. Ei occidi. Quid ita?","spanish":"y lleves una esposa a casa. —¡Ay, estoy perdido! —¿Por qué?","words":[["domum","domus","acusativo singular de dirección"],["ducere","duco","infinitivo presente activo"],["Ei","ei","interjección de dolor"],["occidi","occido","indicativo perfecto activo primera singular, valor expresivo presente"],["Quid","quis, quid","interrogativo neutro acusativo adverbial: por qué"],["ita","ita","adverbio de modo"]]},{"n":"150","speaker":"MEGADORO","latin":"Quia mihi misero cerebrum excutiunt","spanish":"Porque tus palabras me sacuden los sesos a mí, desdichado","words":[["Quia","quia","conjunción causal"],["mihi","ego","dativo singular de interés"],["misero","miser","adjetivo masculino dativo singular, concuerda con mihi"],["cerebrum","cerebrum","sustantivo neutro acusativo singular"],["excutiunt","excutio","indicativo presente activo tercera plural"]]},{"n":"151","speaker":"MEGADORO","latin":"tua dicta, soror: lapides loqueris.","spanish":"hermana: ¡hablas como si arrojaras piedras!","words":[["tua","tuus","posesivo neutro nominativo plural"],["dicta","dictum","sustantivo neutro nominativo plural, sujeto de excutiunt"],["soror","soror","vocativo singular femenino"],["lapides","lapis","sustantivo masculino acusativo plural, objeto interno metafórico"],["loqueris","loquor","indicativo presente deponente segunda singular"]]},{"n":"152","speaker":"EUNOMIA / MEGADORO","latin":"Heia, hoc face quod te iubet soror. Si lubeat, faciam.","spanish":"—Vamos, haz lo que te manda tu hermana. —Si me apetece, lo haré.","words":[["Heia","heia","interjección exhortativa"],["hoc","hic","demostrativo neutro acusativo singular"],["face","facio","imperativo presente activo segunda singular, variante arcaica de fac"],["quod","qui, quae, quod","pronombre relativo neutro acusativo singular"],["te","tu","acusativo singular"],["iubet","iubeo","indicativo presente activo tercera singular"],["soror","soror","sustantivo femenino nominativo singular"],["Si","si","conjunción condicional"],["lubeat","libet","subjuntivo presente impersonal tercera singular, grafía arcaica"],["faciam","facio","futuro indicativo activo primera singular; formalmente también subjuntivo presente"]]},{"n":"153","speaker":"EUNOMIA / MEGADORO","latin":"In rem hoc tuam est. Ut quidem emoriar prius quam ducam.","spanish":"—Es por tu bien. —Sí, para que me muera antes de casarme.","words":[["In","in","preposición con acusativo, locución de conveniencia"],["rem","res","sustantivo femenino acusativo singular"],["hoc","hic","demostrativo neutro nominativo singular"],["tuam","tuus","posesivo femenino acusativo singular"],["est","sum","indicativo presente tercera singular"],["Ut","ut","conjunción final, respuesta irónica"],["quidem","quidem","partícula enfática"],["emoriar","emorior","subjuntivo presente deponente primera singular"],["prius","prius","adverbio comparativo temporal"],["quam","quam","conjunción comparativa temporal"],["ducam","duco","subjuntivo presente activo primera singular, uxorem sobreentendido"]]}]);
verses.unshift(...prologueVerses);

const notes = { ...prologueNotes,
 '148': {number:43,type:'MORFOLOGÍA',heading:'Faxint',text:'Faxint es una forma optativa arcaica de facio, generalmente analizada como subjuntivo perfecto; la fórmula invoca el favor de los dioses.'},
 '152': {number:44,type:'LENGUA COLOQUIAL',heading:'Face y lubeat',text:'Face conserva una variante antigua del imperativo fac; lubeat presenta la vocal arcaica u frente a libeat. La respuesta de Megadoro introduce una reserva burlona.'},
 '144': {number:41,type:'MORFOLOGÍA',heading:'Monitum advento',text:'El supino en -um (monitum) indica finalidad con el verbo de movimiento advento; ted conserva el acusativo arcaico de segunda persona.'},
 '142': {number:42,type:'PRAGMÁTICA',heading:'Amabo y tuast',text:'Amabo funciona como fórmula coloquial de cortesía, no como declaración amorosa. Tuast representa la contracción de tua est.'},
  '136': {number:39,type:'PRAGMÁTICA',heading:'Una cortesía desmontada',text:'Eunomia obliga a Megadoro a precisar su elogio; él lo retira en cuanto ella lo rechaza. El intercambio prepara el tópico misógino de los versos siguientes.'},
  '140': {number:40,type:'MORFOLOGÍA',heading:'Alia alia peior',text:'La primera alia es nominativo (una mujer); la segunda, ablativo de comparación (que otra). La identidad gráfica sostiene la concisión del chiste.'},
  '127': {number:37,type:'MORFOLOGÍA',heading:'Cogitato',text:'Imperativo futuro de cogito, aquí una exhortación solemne. El acusativo arcaico ted aparece en el v. 133.'},
  '132': {number:38,type:'SINTAXIS',heading:'Consejo recíproco',text:'La acumulación de infinitivos y la construcción quin… ut facias resultan sintácticamente densas. Se traduce el sentido recíproco sin fingir una correspondencia palabra por palabra inequívoca.'},
  '120': {number:35,type:'MORFOLOGÍA',heading:'Med, meai y tuai',text:'Med es acusativo arcaico de ego; meai y tuai son genitivos femeninos antiguos. Se conservan estas grafías plautinas y se omiten únicamente marcas prosódicas.'},
  '123': {number:36,type:'SINTAXIS',heading:'Haud falsa sum',text:'La forma falsa, participio o adjetivo, adquiere aquí sentido activo: «no estoy equivocada». La generalización sobre las mujeres es una broma del personaje, no una afirmación editorial.'},
  '117': {number:33,type:'ESTILO',heading:'Rogitant y la cortesía sospechosa',text:'Rogitant es un frecuentativo de rogo: la repetición de preguntas cotidianas se vuelve sospechosa para Euclión. Las tres interrogativas indirectas llevan subjuntivo.'},
  '119': {number:34,type:'SINTAXIS',heading:'Quantum… tantum',text:'La correlación quantum potero tantum intensifica la urgencia del regreso. Me recipiam es futuro en el contexto, aunque su forma coincide con el presente de subjuntivo.'},
  '111': {number:31,type:'SINTAXIS',heading:'Veri simile y parvi facere',text:'Veri simile expresa verosimilitud; parvi facere, «estimar en poco». Quin con subjuntivo depende de la negación previa.'},
  '113': {number:32,type:'GRAFÍA',heading:'Omnis y omnes',text:'Omnis (v. 113) es acusativo plural arcaico, mientras que omnes (vv. 114–115) es nominativo plural. La forma escrita permite distinguir sus funciones.'},
  '101': {number:28,type:'IRONÍA',heading:'La Buena Fortuna no se acerca',text:'Estáfila invierte la prohibición de Euclión: la Fortuna misma evita la casa. Pol es una fórmula de juramento por Pólux, frecuente en el diálogo cómico.'},
  '105': {number:29,type:'MORFOLOGÍA',heading:'Discrucior animi',text:'Discrucior es pasivo de discrucio con sentido reflexivo («me atormento»); animi es genitivo de relación. Abeundum est mihi expresa obligación impersonal con dativo de agente.'},
  '107': {number:30,type:'INSTITUCIONES',heading:'Magister curiae',text:'El magister curiae preside una de las curias cívicas. La distribución de monedas por cabeza explica la salida de Euclión: teme que negarse a una suma pequeña delate su riqueza oculta.'},
  '91': {number:25,type:'SINTAXIS',heading:'Quod quispiam',text:'Quod introduce aquí una hipótesis práctica: si alguien viene a pedir una brasa. El subjuntivo quaerat expresa eventualidad. Leo (1895), Aulularia I.2, v. 91.'},
  '93': {number:26,type:'JUEGO VERBAL',heading:'El fuego vivo y la esclava apagada',text:'Vivet se aplica al fuego y extinguere amenaza a Estáfila: Euclión juega con el mismo campo léxico. Extinguere es futuro pasivo de segunda persona, variante de extingueris, no un imperativo.'},
  '100': {number:27,type:'CULTURAL',heading:'Bona Fortuna',text:'La Buena Fortuna aparece personificada como visitante. Euclión lleva su obsesión al extremo: prefiere mantener la puerta cerrada incluso a la prosperidad.'},
  '79': {number:22,type:'LÉXICA',heading:'Defaecato animo',text:'Defaecare significa aclarar un líquido por decantación. El ablativo absoluto defaecato animo convierte la comprobación del tesoro en una purificación mental: Euclión sale aliviado solo después de inspeccionar su escondite.'},
  '82': {number:23,type:'RETÓRICA',heading:'¿Llevarse la casa?',text:'Estáfila responde con ironía a la orden de vigilar una casa supuestamente vacía: ¿habría que impedir que los ladrones se lleven incluso el edificio? El contraste entre pobreza aparente y oro oculto sostiene el diálogo.'},
  '86': {number:24,type:'CULTURAL',heading:'Filipo y Darío',text:'Filipo de Macedonia y Darío de Persia funcionan como emblemas de riqueza regia. Euclión convierte la mención de telarañas en un ataque desproporcionado contra Estáfila; trivenefica intensifica el insulto.'},

  '75': {number: 20,type:'LÉXICA',heading:'Partitudo',text:'Partitudo designa el parto o alumbramiento. La proximidad del nacimiento explica la urgencia de Estáfila por ocultar la situación de la hija de Euclión.'},
  '78': {number: 21,type:'RETÓRICA',heading:'Una letra larga',text:'El giro ex me unam faciam litteram longam transforma la imagen del ahorcamiento en una figura gráfica: el cuerpo suspendido se imagina como una letra alargada, tradicionalmente interpretada como una I. La comicidad verbal convive con la desesperación de Estáfila. Leo (1895) imprime meum sin corchetes; otras transcripciones lo marcan como suplemento.'},
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
  const reference = (Number(lastNumber) <= 39 ? 'Prólogo' : Number(lastNumber) <= 78 ? 'I.1' : Number(lastNumber) <= 119 ? 'I.2' : 'II.1') + ', v. ' + lastNumber;
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
  row.dataset.section = Number(lastNumber) <= 39 ? 'prologue' : Number(lastNumber) <= 78 ? 'act1scene1' : Number(lastNumber) <= 119 ? 'act1scene2' : 'act2scene1';
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
const maxSceneOne = Math.max(40, ...verses.filter(v => Number(v.n) >= 40 && Number(v.n) <= 78).map(v => Number(v.n)));
const maxSceneTwo = Math.max(79, ...verses.filter(v => Number(v.n) >= 79 && Number(v.n) <= 119).map(v => Number(v.n)));
const maxSceneThree = Math.max(120,...verses.filter(v => Number(v.n) >= 120).map(v => Number(v.n)));
for (const [value,label] of [['prologue','Prólogo · vv. 1–' + maxPrologue],['act1scene1','Acto I · escena 1 · vv. 40–' + maxSceneOne],['act1scene2','Acto I · escena 2 · vv. 79–' + maxSceneTwo],['act2scene1','Acto II · escena 1 · vv. 120–' + maxSceneThree]]) {
 const option=document.createElement('option');option.value=value;option.textContent=label;sectionSelector.append(option);
}
const sectionNav=document.createElement('nav');sectionNav.className='section-navigation';sectionNav.append(sectionSelector);
document.querySelector('#section-nav-slot').append(sectionNav);
function selectSection(section){
 for(const row of container.querySelectorAll('.verse'))row.hidden=row.dataset.section!==section;
 const current=document.querySelector('.position-current');if(current)current.textContent=section==='prologue'?'Prólogo · Lar familiar':section==='act1scene1'?'Acto I, escena 1':section==='act1scene2'?'Acto I, escena 2':'Acto II, escena 1';
 const marker=document.querySelector('.position-marker strong');if(marker)marker.textContent=section==='prologue'?'vv. 1–'+maxPrologue:section==='act1scene1'?'vv. 40–'+maxSceneOne:section==='act1scene2'?'vv. 79–'+maxSceneTwo:'vv. 120–'+maxSceneThree;
 closeWord();closeNote();
}
sectionSelector.addEventListener('change',()=>selectSection(sectionSelector.value));
selectSection('prologue');
