/* Edición Viva · lector de Attila. Los enlaces léxicos abren Wiktionnaire;
   el diccionario local no afirma sincronización todavía. */
(() => {
  'use strict';
  const edition = window.ATTILA_EDITION;
  if (!edition) return;
  const $ = selector => document.querySelector(selector);
  const verses = $('#verses');
  const popup = $('#word-panel'), notePopup = $('#note-panel'), drawer = $('#side-drawer');
  const STORE = 'edicion-viva:dictionary:fr:v1';
  let activeWord = null, currentData = null;
  const lex = Object.create(null);
  function add(forms, lemma, analysis, gloss) {
    forms.split(';').forEach(form => { lex[form.trim().toLocaleLowerCase('fr')] = [lemma,analysis,gloss]; });
  }
  // Las formas que admiten varias interpretaciones se describen sin imponer una lectura mecánica.
  add('ils;elles','il / elle','pronombre personal; 3.ª persona plural','ellos / ellas');
  add('il;elle','il / elle','pronombre personal; 3.ª persona singular','él / ella');
  add('je;j’','je','pronombre personal; 1.ª persona singular','yo');
  add('vous','vous','pronombre personal; 2.ª persona plural o tratamiento de cortesía','vos / usted(es)');
  add('on','on','pronombre indefinido; funciona como 3.ª persona singular','uno / se');
  add('nos','notre','posesivo; plural','nuestros / nuestras');
  add('votre','votre','posesivo; singular','vuestro / su');
  add('vos','votre','posesivo; plural','vuestros / sus');
  add('leur;leurs','leur','posesivo o pronombre de 3.ª persona plural, según el contexto','su / sus / les');
  add('me;m’','me','pronombre clítico; 1.ª persona singular','me');
  add('les','le','pronombre de objeto directo; 3.ª persona plural o artículo plural','los / las');
  add('eux','eux','pronombre personal tónico; 3.ª persona plural','ellos');
  add('en','en','pronombre adverbial o preposición; función dependiente del contexto','de ello / de eso / en');
  add('se;s’','se','pronombre reflexivo; 3.ª persona','se');
  add('ce;c’','ce','demostrativo; singular o clítico neutro','este / eso');
  add('ces','ce','determinante demostrativo plural','estos / estas');
  add('un','un','artículo indefinido masculino singular / numeral','un');
  add('une','un','artículo indefinido femenino singular','una');
  add('le;l’','le','artículo definido masculino singular o pronombre clítico','el / lo');
  add('la','la','artículo definido femenino singular o pronombre clítico','la');
  add('des','de + les / un','contracción o artículo indefinido plural; depende del contexto','de los / unos');
  add('du','de + le','contracción de preposición y artículo','del');
  add('de;d’','de','preposición','de');
  add('à','à','preposición','a / en');
  add('pour','pour','preposición','para / por');
  add('sur','sur','preposición','sobre');
  add('sous','sous','preposición','bajo');
  add('avant','avant','preposición o adverbio','antes');
  add('partout','partout','adverbio','por todas partes');
  add('ici','ici','adverbio de lugar','aquí');
  add('déjà','déjà','adverbio','ya');
  add('alors','alors','adverbio; en alors que, locución temporal','entonces / cuando');
  add('si','si','adverbio de intensidad o conjunción condicional','tan / si');
  add('trop','trop','adverbio de grado','demasiado');
  add('tout;tous','tout','determinante, pronombre o adverbio; concordancia variable','todo / todos');
  add('même','même','adjetivo, pronombre o adverbio','mismo / incluso');
  add('seul','seul','adjetivo masculino singular','solo');
  add('deux','deux','numeral cardinal invariable','dos');
  add('pas','pas','adverbio de negación; normalmente junto con ne','no');
  add('ne;n’','ne','partícula negativa','no');
  add('non','non','adverbio de negación','no');
  add('mais','mais','conjunción adversativa','pero');
  add('et','et','conjunción copulativa','y');
  add('ou','ou','conjunción disyuntiva','o');
  add('que;qu’','que','conjunción o pronombre relativo; función según el contexto','que');
  add('qui','qui','pronombre relativo o interrogativo','quien / que');
  add('quel','quel','determinante interrogativo masculino singular','qué / cuál');
  add('pourquoi','pourquoi','adverbio interrogativo','por qué');
  add('lequel','lequel','pronombre relativo/interrogativo masculino singular','cuál / el que');
  add('dont','dont','pronombre relativo','del cual / de quien');
  add('autre;l’autre','autre','adjetivo o pronombre indefinido singular','otro');
  add('aucun','aucun','determinante negativo masculino singular','ningún');
  add('plus','plus','adverbio; grado o negación según el contexto','más / ya no');
  add('moins','moins','adverbio de grado','menos');
  add('bien','bien','adverbio / sustantivo','bien');
  add('aussi','aussi','adverbio','también');
  add('enfin','enfin','adverbio','finalmente / al fin');
  add('hautement','hautement','adverbio','abiertamente');
  add('venu;venus','venir','participio pasado masculino singular/plural','venido / llegados');
  add('sont','être','indicativo presente; 3.ª persona plural','son / han (auxiliar)');
  add('est','être','indicativo presente; 3.ª persona singular','es / está');
  add('être','être','infinitivo presente','ser / estar');
  add('font','faire','indicativo presente; 3.ª persona plural','hacen');
  add('faire','faire','infinitivo presente','hacer');
  add('doivent','devoir','indicativo presente; 3.ª persona plural','deben');
  add('doit','devoir','indicativo presente; 3.ª persona singular','debe');
  add('die','dire','subjuntivo presente arcaico; 3.ª persona singular (hoy dise: qu’il dise)','diga');
  add('dit','dire','participio pasado masculino singular; también indicativo presente 3.ª singular','dicho / dice');
  add('diront','dire','futuro simple; 3.ª persona plural','dirán');
  add('mande','mander','indicativo presente; 1.ª persona singular','mando llamar');
  add('hâter','hâter','infinitivo presente, usado pronominalmente','apresurarse');
  add('ennuie','ennuyer','indicativo presente; 3.ª persona singular, con pronombre s’','se aburre / se impacienta');
  add('lais­sez;laissez','laisser','indicativo presente; 2.ª persona plural','dejáis');
  add('prendre','prendre','infinitivo presente','tomar');
  add('prennent','prendre','indicativo presente; 3.ª persona plural','toman');
  add('prendrois','prendre','condicional presente histórico; 1.ª persona singular (hoy prendrais)','tomaría / aprovecharía');
  add('trai­ner;traîner','traîner','infinitivo presente','arrastrar / llevar');
  add('puis','pouvoir','indicativo presente; 1.ª persona singular','puedo');
  add('pouvoir','pouvoir','infinitivo presente','poder');
  add('résoudre','résoudre','infinitivo presente','resolver / decidir');
  add('appelle','appeler','indicativo presente; 1.ª o 3.ª persona singular; aquí 1.ª','llamo');
  add('crois','croire','indicativo presente; 1.ª persona singular','creo');
  add('voir','voir','infinitivo presente','ver');
  add('éclairciront','éclaircir','futuro simple; 3.ª persona plural','aclararán');
  add('préfère','préférer','subjuntivo presente; 1.ª persona singular en concesiva','prefiera');
  add('veux','vouloir','indicativo presente; 1.ª persona singular','quiero');
  add('attirer','attirer','infinitivo presente','atraer / hacer recaer');
  add('assurer','assurer','infinitivo presente','asegurar / procurar');
  add('oblige','obliger','indicativo presente; 3.ª persona singular','obliga');
  add('consulter','consulter','infinitivo presente','consultar');
  add('éclater','éclater','infinitivo presente','resaltar / manifestarse');
  add('aimerois','aimer','condicional presente, grafía histórica de aimerais; 1.ª persona singular','me gustaría');
  add('choque','choquer','indicativo presente; 3.ª persona singular','molesta / irrita');
  add('sais','savoir','indicativo presente; 1.ª persona singular','sé');
  add('commande','commander','indicativo presente; 1.ª persona singular','ordeno / mando');
  add('ose','oser','indicativo presente; 3.ª persona singular','se atreve');
  add('nommer','nommer','infinitivo presente','llamar / nombrar');
  add('marque','marquer','indicativo presente; 3.ª persona singular','marca / expresa');
  add('souille','souiller','indicativo presente; 3.ª persona singular','mancha');
  add('détruit','détruire','indicativo presente; 3.ª persona singular','destruye');
  add('suis','être','indicativo presente; 1.ª persona singular','soy / estoy');
  add('traiter','traiter','infinitivo presente','tratar');
  add('roi;rois','roi','sustantivo masculino; singular / plural','rey / reyes');
  add('att­ila;attila','Attila','nombre propio','Atila');
  add('octar','Octar','nombre propio','Octar');
  add('seigneur','seigneur','sustantivo masculino; vocativo','señor');
  add('besoin','besoin','sustantivo masculino singular','necesidad');
  add('hymen','hymen','sustantivo masculino singular; francés clásico: unión matrimonial','matrimonio');
  add('arbitres','arbitre','sustantivo masculino o femenino plural','árbitros');
  add('trône','trône','sustantivo masculino singular','trono');
  add('vains','vain','adjetivo masculino plural','vacíos / vanos');
  add('titres;titre','titre','sustantivo masculino singular o plural','título(s)');
  add('nombre','nombre','sustantivo masculino singular','número');
  add('vivants','vivant','sustantivo/adjetivo masculino plural','vivos');
  add('suivants','suivant','sustantivo masculino plural; miembros del séquito','acompañantes / séquito');
  add('espoir','espoir','sustantivo masculino singular','esperanza');
  add('lumière','lumière','sustantivo femenino singular; metáfora de conocimiento','luz / aclaración');
  add('nouvelle','nouveau','adjetivo femenino singular','nueva');
  add('partis','parti','sustantivo masculino plural; aquí, opciones o alianzas','opciones');
  add('gloire','gloire','sustantivo femenino singular','gloria / triunfo');
  add('affront','affront','sustantivo masculino singular','afrenta');
  add('frère','frère','sustantivo masculino singular','hermano');
  add('juste','juste','adjetivo masculino o femenino singular','justo');
  add('courroux','courroux','sustantivo masculino singular','ira / indignación');
  add('auteur','auteur','sustantivo masculino singular','autor / responsable');
  add('conseil','conseil','sustantivo masculino singular','consejo');
  add('dangereux','dangereux','adjetivo masculino singular o plural; aquí plural','peligrosos');
  add('coups','coup','sustantivo masculino plural','golpes');
  add('excuse','excuse','sustantivo femenino singular','excusa');
  add('manque','manque','sustantivo masculino singular','falta');
  add('estime','estime','sustantivo femenino singular','estima / consideración');
  add('besoin','besoin','sustantivo masculino singular','necesidad');
  add('livrer','livrer','infinitivo presente','entregar');
  add('victime','victime','sustantivo femenino singular','víctima');
  add('périls','péril','sustantivo masculino plural','peligros / riesgos');
  add('grand','grand','adjetivo masculino singular','gran / grande');
  add('choix','choix','sustantivo masculino singular','elección');
  add('prétexte','prétexte','sustantivo masculino singular','pretexto');
  add('perte','perte','sustantivo femenino singular','pérdida / ruina');
  add('occasion','occasion','sustantivo femenino singular','ocasión');
  add('offerte','offrir','participio pasado femenino singular; modifica occasion','ofrecida');
  add('glorieux','glorieux','adjetivo masculino singular','glorioso');
  add('nom','nom','sustantivo masculino singular','nombre');
  add('indépendance','indépendance','sustantivo femenino singular','independencia');
  add('moindre','moindre','adjetivo comparativo; singular','menor / más pequeño');
  add('obéissance','obéissance','sustantivo femenino singular','obediencia');
  add('las','las','adjetivo masculino singular; predicativo del sujeto','cansado / harto');
  add('bandeau','bandeau','sustantivo masculino singular; distintivo real','diadema / banda');
  add('royal','royal','adjetivo masculino singular','real');
  add('droit','droit','sustantivo masculino singular','derecho');
  add('égal','égal','adjetivo masculino singular; sustantivado en d’égal','igual');
  add('attendre','attendre','infinitivo presente','esperar');
  add('au','à + le','contracción de preposición y artículo definido masculino','al');
  add('sa','son','determinante posesivo femenino singular','su');
  add('son','son','determinante posesivo masculino singular','su');
  add('d’estime','de + estime','preposición elidida + sustantivo femenino singular','de estima');
  add('m’oblige','me + obliger','pronombre objeto 1.ª singular + indicativo presente, 3.ª singular','me obliga');
  add('car','car','conjunción causal','pues / porque');
  // Contracciones con apóstrofo: análisis explícito sin perder la forma impresa.
  add('qu’on','que + on','conjunción que + pronombre indefinido on','que se / que alguien');
  add('qu’ils','que + ils','conjunción que + pronombre personal plural','que ellos');
  add('qu’att­ila;qu’attila','que + Attila','conjunción que + nombre propio','que Atila');
  add('qu’alors','que + alors','conjunción que + adverbio','cuando');
  add('n’ont','ne + avoir','negación ne + indicativo presente; 3.ª plural','no tienen');
  add('n’','ne','partícula negativa elidida','no');
  add('j’en','je + en','pronombre 1.ª singular + pronombre adverbial','yo sobre ello / de ello');
  add('j’aimerois','je + aimer','1.ª persona singular + condicional histórico','me gustaría');
  add('j’en','je + en','pronombre personal + adverbial; significado contextual','de ello');
  add('l’auteur','le + auteur','artículo masculino elidido + sustantivo','el responsable');
  add('l’autre','le + autre','artículo definido elidido + adjetivo/pronombre','el otro');
  add('l’occasion','la + occasion','artículo elidido + sustantivo femenino','la ocasión');
  add('l’','le / la','artículo definido o pronombre clítico elidido','el / la');
  add('m’être','me + être','pronombre reflexivo + infinitivo auxiliar','haberme');
  add('m’éclairciront','me + éclaircir','pronombre clítico + futuro 3.ª plural','me aclararán');
  add('s’ennuie','s’ennuyer','indicativo presente; 3.ª singular, pronominal','se impacienta');
  add('s’il','si + il','conjunción condicional + pronombre','si él');
  add('c’est','ce + être','demostrativo + indicativo presente, 3.ª singular','esto es');
  add('d’un','de + un','preposición + artículo indefinido masculino','de un');
  add('d’égal','de + égal','preposición + adjetivo sustantivado','como a un igual');

  // Fichas nuevas de Attila I.1, vv. 29–72; revisión contextual inicial.
  add("peut","pouvoir","indicativo presente, 3.ª singular","puede");
  add("princesses","princesse","sustantivo femenino plural","princesas");
  add("ayez","avoir","subjuntivo presente, 2.ª plural","tengáis");
  add("mêmes","même","adjetivo plural","mismos / iguales");
  add("yeux","œil","sustantivo masculino plural irregular","ojos");
  add("pareilles","pareil","adjetivo femenino plural","semejantes / iguales");
  add("tendresses","tendresse","sustantivo femenino plural","ternuras / afectos");
  add("mérite","mérite","sustantivo masculino singular","mérito");
  add("dispose","disposer","subjuntivo presente, 3.ª singular; rige el complemento «âme»","disponga / influya");
  add("sans","sans","preposición","sin");
  add("ennui","ennui","sustantivo masculino singular","pena / disgusto / inquietud");
  add("âme","âme","sustantivo femenino singular","alma / ánimo");
  add("irrésolue","irrésolu","adjetivo femenino singular","indecisa");
  add("aux","à + les","contracción de preposición y artículo plural","a los / a las");
  add("sentiments","sentiment","sustantivo masculino plural","opiniones / sentimientos");
  add("d’autrui","de + autrui","preposición + pronombre indefinido","de otra persona / ajeno");
  add("vers","vers","preposición espacial o figurada","hacia");
  add("l’une","le / la + un","pronombre indefinido femenino con artículo","una de las dos");
  add("a","avoir","indicativo presente, 3.ª singular; auxiliar de passé composé","ha");
  add("pris","prendre","participio pasado masculino singular","tomado / adquirido");
  add("quelque","quelque","determinante indefinido singular","alguna / cierta");
  add("pente","pente","sustantivo femenino singular; inclinación figurada","inclinación");
  add("route","route","sustantivo femenino singular","camino / rumbo");
  add("différente","différent","adjetivo femenino singular","distinto");
  add("voudra","vouloir","futuro simple, 3.ª singular","querrá");
  add("t","-t-","-t- eufónico entre verbo y pronombre en interrogación","enlace fonético");
  add("dépens","dépens","sustantivo masculino plural lexicalizado; «aux dépens de»","a costa de");
  add("ses","son","posesivo plural","sus");
  add("vœux","vœu","sustantivo masculino plural","deseos");
  add("doux","doux","adjetivo masculino plural","dulces");
  add("préparer","préparer","infinitivo presente","preparar");
  add("qu’il","que + il","conjunción que + pronombre de 3.ª singular","que él");
  add("soit","être","subjuntivo presente, 3.ª singular","sea");
  add("fort","fort","adverbio de intensidad; «si fort»","tan / tanto");
  add("craindre","craindre","infinitivo presente","temer");
  add("s’abaisse","s’abaisser","subjuntivo presente, 3.ª singular; forma pronominal","se rebaje");
  add("contraindre","contraindre","infinitivo presente","forzar / contenerse");
  add("noble","noble","adjetivo femenino singular en «noble ardeur»","noble");
  add("ardeur","ardeur","sustantivo femenino singular","ardor");
  add("d’envahir","de + envahir","preposición elidida + infinitivo","de invadir");
  add("tant","tant","adverbio cuantitativo","tanto(s)");
  add("d’états","de + État","preposición elidida + sustantivo masculino plural","de Estados");
  add("combattre","combattre","infinitivo presente","combatir");
  add("tête","tête","sustantivo femenino singular; «de tête»","cabeza / inteligencia");
  add("encor","encore","adverbio; variante poética sin -e final","aún / todavía");
  add("bras","bras","sustantivo masculino singular o plural, aquí plural","brazos");
  add("entre","entre","preposición","entre");
  add("ennemis","ennemi","sustantivo masculino plural","enemigos");
  add("rompre","rompre","infinitivo presente","romper");
  add("l’intelligence","le / la + intelligence","artículo elidido + sustantivo femenino; acuerdo político","entendimiento / alianza");
  add("y","y","pronombre adverbial","allí / en ello");
  add("jeter","jeter","infinitivo presente","arrojar / sembrar");
  add("désordre","désordre","sustantivo masculino singular","desorden");
  add("défiance","défiance","sustantivo femenino singular","desconfianza");
  add("rien","rien","pronombre indefinido; en ne… rien","nada");
  add("hasarder","hasarder","infinitivo presente","arriesgar");
  add("n’ait","ne + avoir","negación elidida + subjuntivo presente, 3.ª singular","no haya");
  add("toutes","tout","determinante femenino plural","todas");
  add("parts","part","sustantivo femenino plural","partes");
  add("autant","autant","adverbio cuantitativo; «autant que possible»","tanto como");
  add("possible","possible","adjetivo singular","posible");
  add("enchaîné","enchaîner","participio pasado masculino singular","encadenado / sujeto");
  add("hasards","hasard","sustantivo masculino plural","azares / contingencias");
  add("nous","nous","pronombre personal, 1.ª plural","nosotros");
  add("étions","être","indicativo imperfecto, 1.ª plural","éramos / estábamos");
  add("forts","fort","adjetivo masculino plural","fuertes");
  add("qu’à","que + à","conjunción comparativa + preposición","que en");
  add("présent","présent","sustantivo masculino singular en «à présent»","presente / ahora");
  add("sommes","être","indicativo presente, 1.ª plural","somos / estamos");
  add("quand","quand","conjunción temporal","cuando");
  add("fondis","fondre","pasado simple, 1.ª singular; «fondre sur»","me abalancé / irrumpí");
  add("gaule","Gaule","nombre propio geográfico femenino singular","Galia");
  add("avec","avec","preposición","con");
  add("cinq","cinq","numeral cardinal","cinco");
  add("cent","cent","numeral cardinal","cien");
  add("mille","mille","numeral cardinal invariable","mil");
  add("hommes","homme","sustantivo masculino plural","hombres");
  add("dès","dès","preposición temporal","desde");
  add("lors","lors","adverbio temporal en «dès lors»","entonces");
  add("t’en","te + en","pronombres clíticos de 2.ª singular y adverbial","te / de ello");
  add("souvient","souvenir","indicativo presente, 3.ª singular en «il t’en souvient»","te acuerdas");
  add("voulus","vouloir","pasado simple, 1.ª singular","quise / intenté");
  add("vain","vain","adjetivo masculino singular en «en vain»","en vano");
  add("d’avec","de + avec","locución prepositiva de separación","de / respecto de");
  add("visigoth","Visigoth","etnónimo masculino singular; visigodo","visigodo");
  add("détacher","détacher","infinitivo presente","separar / desligar");
  add("romain","Romain","etnónimo masculino singular; romano","romano");
  add("j’y","je + y","pronombre de 1.ª singular + adverbial","yo allí / en ello");
  add("perdis","perdre","pasado simple, 1.ª singular","perdí");
  add("auprès","auprès","adverbio / preposición en «auprès de»","ante / cerca de");
  add("d’eux","de + eux","preposición elidida + pronombre personal tónico","de ellos");
  add("soins","soin","sustantivo masculino plural; esfuerzos / diligencias","esfuerzos");
  add("perdirent","perdre","pasado simple, 3.ª plural","perdieron");
  add("loin","loin","adverbio en «loin de»","lejos");
  add("diviser","diviser","infinitivo presente","dividir");
  add("d’autant","de + autant","locución de grado «d’autant mieux»","tanto mejor / aún más");
  add("mieux","bien","adverbio comparativo irregular","mejor");
  add("s’unirent","s’unir","pasado simple, 3.ª plural, pronominal","se unieron");
  add("terreur","terreur","sustantivo femenino singular","terror");
  add("mon","mon","posesivo masculino singular","mi");
  add("nouveaux","nouveau","adjetivo masculino plural","nuevos");
  add("compagnons","compagnon","sustantivo masculino plural","compañeros / aliados");
  add("donna","donner","pasado simple, 3.ª singular","dio");
  add("alains","Alain","etnónimo masculino plural","alanos");
  add("francs","Franc","etnónimo masculino plural","francos");
  add("bourguignons","Bourguignon","etnónimo masculino plural","burgundios");
  add("n’ayant","ne + avoir","negación elidida + participio presente del auxiliar","no habiendo");
  add("pu","pouvoir","participio pasado","podido");
  add("semer","semer","infinitivo presente","sembrar");
  add("aucuns","aucun","determinante indefinido / negativo plural","ningunos");
  add("divorces","divorce","sustantivo masculino plural; rupturas entre aliados","discordias / separaciones");
  add("vis","voir","pasado simple, 1.ª singular","vi");
  add("déroute","déroute","sustantivo femenino singular","derrota");
  add("mes","mon","posesivo plural, 1.ª singular","mis");
  add("forces","force","sustantivo femenino plural","fuerzas");
  add("j’ai","je + avoir","pronombre de 1.ª singular + auxiliar presente","he");
  add("su","savoir","participio pasado","sabido");
  add("rétablir","rétablir","infinitivo presente","restablecer / recomponer");
  add("cherche","chercher","indicativo presente, 1.ª singular","busco");
  add("venger","venger","infinitivo presente; aquí pronominal","vengarme");
  add("danger","danger","sustantivo masculino singular","peligro");
  add("nations","nation","sustantivo femenino plural","naciones");
  add("contre","contre","preposición","contra");
  add("moi","moi","pronombre personal tónico, 1.ª singular","mí");
  add("heureuses","heureux","adjetivo femenino plural; aquí afortunadas en la victoria","afortunadas / victoriosas");
  add("j’envoie","je + envoyer","pronombre de 1.ª singular + indicativo presente","envío");
  add("offrir","offrir","infinitivo presente","ofrecer");
  add("paix","paix","sustantivo femenino singular","paz");
  add("belliqueuses","belliqueux","adjetivo femenino plural","belicosas");
  add("traite","traiter","indicativo presente, 1.ª singular","negocio / trato");
  add("chacune","chacun","pronombre indefinido femenino singular","cada una");
  add("comme","comme","conjunción causal o comparativa; aquí causal","como / dado que");
  add("offert","offrir","participio pasado masculino singular","ofrecido");
  add("ont","avoir","indicativo presente, 3.ª plural; auxiliar","han");
  add("accepté","accepter","participio pasado","aceptado");
  add("nœuds","nœud","sustantivo masculino plural; «nœuds de l’hymen»","lazos matrimoniales");
  add("qu’ensuite","que + ensuite","conjunción / pronombre elidido + adverbio","que después");
  add("gage","gage","sustantivo masculino singular","garantía / prenda");
  add("sera","être","futuro simple, 3.ª singular","será");
  add("ma","mon","posesivo femenino singular","mi");
  add("femme","femme","sustantivo femenino singular","esposa / mujer");
  add("otage","otage","sustantivo común en cuanto al género, singular","rehén");
  add("j’offense","je + offenser","pronombre de 1.ª singular + indicativo presente","ofendo");
  add("par","par","preposición","por / mediante");
  add("là","là","adverbio; «par là» = de este modo","ahí / con ello");
  add("l’un","le + un","pronombre indefinido masculino con artículo","uno de los dos");
  add("souverains","souverain","sustantivo masculino plural","soberanos");
  add("craindra","craindre","futuro simple, 3.ª singular","temerá");
  add("sœur","sœur","sustantivo femenino singular","hermana");
  add("reste","rester","indicativo presente, 3.ª singular","permanece");
  add("mains","main","sustantivo femenino plural","manos");
  add("ainsi","ainsi","adverbio consecutivo","así");
  add("tiendrai","tenir","futuro simple, 1.ª singular","mantendré");
  add("contrainte","contrainte","sustantivo femenino singular","coacción / sometimiento");
  add("alliance","alliance","sustantivo femenino singular","alianza");
  add("crainte","crainte","sustantivo femenino singular","temor");
  add("malheureux","malheureux","adjetivo masculino singular sustantivado","desfavorecido");
  add("s’obstine","s’obstiner","indicativo presente, 3.ª singular, pronominal","se obstina");
  add("s’irriter","s’irriter","infinitivo pronominal","indignarse");
  add("l’heureux","le + heureux","artículo + adjetivo sustantivado","el favorecido");
  add("faveur","faveur","sustantivo femenino singular","favor / defensa");
  add("saura","savoir","futuro simple, 3.ª singular","sabrá");
  add("lui","lui","pronombre personal de 3.ª singular, objeto indirecto","a él / le");
  add("résister","résister","infinitivo presente; «résister à»","resistir / enfrentarse");
  add("vainqueurs","vainqueur","sustantivo masculino plural","vencedores");
  add("terrassés","terrasser","participio pasado masculino plural","derrotados / abatidos");
  add("trônes","trône","sustantivo masculino plural","tronos");
  add("ébranlés","ébranler","participio pasado masculino plural","tambaleantes / sacudidos");
  add("tombent","tomber","subjuntivo presente, 3.ª plural («tant que» con resultado buscado)","caigan");
  add("pieds","pied","sustantivo masculino plural","pies");
  add("nôtre","nôtre","pronombre posesivo singular con artículo","nuestro / mío");
  add("quant","quant","preposición en «quant à»","en cuanto a");
  add("l’amour","le + amour","artículo definido elidido + sustantivo masculino","el amor");
  add("apprends","apprendre","imperativo presente, 2.ª singular","sabe / aprende");
  add("souci","souci","sustantivo masculino singular","preocupación");
  add("n’est","ne + être","negación elidida + indicativo presente, 3.ª singular","no es");
  add("ardaric","Ardaric","nombre propio masculino","Ardaric");
  add("valamir","Valamir","nombre propio masculino","Valamir");
  function getLex(form) {
    const exact = form.toLocaleLowerCase('fr').replace(/\u00ad/g,'');
    return lex[exact] || [form.replace(/^[^’']+[’']/,'').toLocaleLowerCase('fr'), 'Análisis específico pendiente de revisión; consultá el lema o la forma en el diccionario.', 'Ficha provisional'];
  }
  function renderText(text, node) {
    const re = /[\p{L}\p{M}]+(?:[’'][\p{L}\p{M}]+)*/gu;
    let start=0;
    for (const match of text.matchAll(re)) {
      const end=match.index ?? 0;
      if (end>start) node.append(document.createTextNode(text.slice(start,end)));
      const word=match[0], button=document.createElement('button');
      button.className='token';button.type='button';button.textContent=word;button.dataset.form=word;
      button.setAttribute('aria-label','Analizar '+word);
      button.addEventListener('click',()=>showWord(word,button));
      node.append(button);start=end+word.length;
    }
    if (start<text.length)node.append(document.createTextNode(text.slice(start)));
  }
  function place(panel,anchor){
    const b=anchor.getBoundingClientRect();
    panel.hidden=false;
    const r=panel.getBoundingClientRect(),pad=12;
    const x=Math.max(pad,Math.min(window.innerWidth-r.width-pad,b.left));
    const below=b.bottom+9;
    const y=below+r.height+pad<window.innerHeight?below:Math.max(pad,b.top-r.height-9);
    panel.style.left=x+'px';panel.style.top=y+'px';
  }
  function hidePanels(){popup.hidden=true;notePopup.hidden=true;document.querySelectorAll('.token[aria-pressed]').forEach(t=>t.removeAttribute('aria-pressed'));}
  for(const [n,speaker,fr,es] of edition.verses) {
    const headings={
      303:['scene3','ACTO PRIMERO · ESCENA TERCERA','Ardaric y Valamir'],
      363:['act2','ACTO SEGUNDO · ESCENA PRIMERA','Honoria y Flavia'],
      450:['act2scene2','ACTO SEGUNDO · ESCENA SEGUNDA','Honoria, Valamir y Flavia'],
      497:['act2scene3','ACTO SEGUNDO · ESCENA TERCERA','Valamir y Flavia'],
      517:['act2scene4','ACTO SEGUNDO · ESCENA CUARTA','Ardaric y Valamir'],
      531:['act2scene5','ACTO SEGUNDO · ESCENA QUINTA','Ardaric y Octar (transición compartida)']
    };
    if(headings[n]){
      const [id,kickerText,titleText]=headings[n];
      const heading=document.createElement('div');heading.className='scene-transition';heading.id=id;
      const kicker=document.createElement('span');kicker.textContent=kickerText;
      const title=document.createElement('h2');title.textContent=titleText;
      heading.append(kicker,title);verses.append(heading);
    }
    if(n===363){
      const end=document.createElement('p');end.className='act-end';end.textContent='FIN DEL ACTO PRIMERO';verses.append(end);
    }
    if(n===73){
      const heading=document.createElement('div');heading.className='scene-transition';heading.id='scene2';
      const kicker=document.createElement('span');kicker.textContent='ACTO PRIMERO · ESCENA SEGUNDA';
      const title=document.createElement('h2');title.textContent='Atila, Ardaric, Valamir y Octar';
      heading.append(kicker,title);verses.append(heading);
    }
    const row=document.createElement('div');row.className='verse';row.id='v'+n;row.dataset.sceneId=n<73?'corneille-attila-1-1':n<303?'corneille-attila-1-2':n<363?'corneille-attila-1-3':n<450?'corneille-attila-2-1':n<497?'corneille-attila-2-2':n<517?'corneille-attila-2-3':n<531?'corneille-attila-2-4':'corneille-attila-2-5';
    const num=document.createElement('span');num.className='number';num.textContent=n;
    const speech=document.createElement('div');speech.className='speech';speech.lang='fr';
    if (speaker){const sp=document.createElement('span');sp.className='speaker';sp.textContent=speaker;speech.append(sp);}
    const original=document.createElement('p');original.className='latin';renderText(fr,original);speech.append(original);
    if (edition.notes[n]){
      const anchor=document.createElement('button');anchor.type='button';anchor.className='note-anchor';anchor.textContent='n';anchor.setAttribute('aria-label','Nota al verso '+n);
      anchor.addEventListener('click',()=>{hidePanels();$('#note-heading').textContent=edition.notes[n][0];$('#note-content').textContent=edition.notes[n][1];place(notePopup,anchor);});
      speech.append(anchor);
    }
    const translation=document.createElement('p');translation.className='spanish';translation.lang='es';translation.textContent=es;
    row.append(num,speech,translation);verses.append(row);
  }
  function readSaved(){try{const a=JSON.parse(localStorage.getItem(STORE)||'[]');return Array.isArray(a)?a:[];}catch{return [];}}
  function storeSaved(a){try{localStorage.setItem(STORE,JSON.stringify(a));return true;}catch{return false;}}
  function showWord(form,anchor){
    hidePanels();const [lemma,morph,gloss]=getLex(form);
    currentData={form,lemma,morph,gloss};
    $('#word-form').textContent=form;$('#word-lemma').textContent=lemma;$('#word-morphology').textContent=morph;$('#word-gloss').textContent=gloss;
    const link=$('#word-paradigm');link.href='https://fr.wiktionary.org/wiki/'+encodeURIComponent(lemma.includes(' + ')||lemma.includes(' / ')?form.toLowerCase():lemma);link.textContent='Consultar Wiktionnaire ↗';
    activeWord=anchor;anchor.setAttribute('aria-pressed','true');place(popup,anchor);
    refreshSave();
  }
  function refreshSave(){const saved=readSaved(),found=!!currentData&&saved.some(x=>x.form===currentData.form);const btn=$('#save-word');btn.setAttribute('aria-pressed',String(found));btn.textContent=found?'✓ Guardada en mi diccionario':'+ Guardar en mi diccionario';}
  function listSaved(){
    const saved=readSaved(), target=$('#dictionary-list');target.replaceChildren();$('#saved-count').textContent=saved.length;
    if (!saved.length){const p=document.createElement('p');p.className='storage-note';p.textContent='Todavía no guardaste palabras de esta obra.';target.append(p);return;}
    saved.sort((a,b)=>a.form.localeCompare(b.form,'fr')).forEach(item=>{
      const div=document.createElement('div');div.className='dict-record';
      const name=document.createElement('strong');name.textContent=item.form;
      const sub=document.createElement('small');sub.textContent=item.lemma+' · '+item.gloss;
      const del=document.createElement('button');del.type='button';del.textContent='Eliminar';del.setAttribute('aria-label','Eliminar '+item.form);
      del.addEventListener('click',()=>{storeSaved(readSaved().filter(x=>x.form!==item.form));listSaved();refreshSave();});
      div.append(name,sub,del);target.append(div);
    });
  }
  $('#save-word').addEventListener('click',()=>{
    if(!currentData)return;let saved=readSaved();if(!saved.some(x=>x.form===currentData.form))saved.push(currentData);
    if(storeSaved(saved)){refreshSave();listSaved();} else $('#dictionary-feedback').textContent='No se pudo guardar en este navegador.';
  });
  $('#close-word').addEventListener('click',hidePanels);$('#close-note').addEventListener('click',hidePanels);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePanels();closeDrawer();}});
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.popover-card,.token,.note-anchor'))hidePanels();});
  function closeDrawer(){drawer.hidden=true;}
  function openDrawer(){drawer.hidden=false;listSaved();}
  $('#close-drawer').addEventListener('click',closeDrawer);
  $('#export-dictionary').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({language:'fr',entries:readSaved()},null,2)],{type:'application/json'});
    const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='edicion-viva-attila-diccionario-fr.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);
  });
  document.querySelectorAll('[data-drawer]').forEach(button=>button.addEventListener('click',()=>{
    const type=button.dataset.drawer;
    if(type==='dictionary'){openDrawer();return;}
    const shell=$('#app-shell'),cls=type==='position'?'nav-collapsed':'characters-collapsed';
    if (window.matchMedia('(max-width:1160px)').matches && type==='characters') {
      const rail=$('#character-rail');rail.classList.toggle('open');
      button.setAttribute('aria-expanded',String(rail.classList.contains('open')));
    } else if (window.matchMedia('(max-width:860px)').matches && type==='position') {
      $('#sidebar').classList.toggle('open');button.setAttribute('aria-expanded',String($('#sidebar').classList.contains('open')));
    } else {
      shell.classList.toggle(cls);button.setAttribute('aria-expanded',String(!shell.classList.contains(cls)));
    }
  }));
  listSaved();
})();