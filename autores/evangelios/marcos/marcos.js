/* Marcos 1,1–28 · SBLGNT (signos de aparato omitidos), Vulgata Clementina, traducción propia. */
(() => {
  'use strict';

  const passages = [
    { n: 1, gr: 'Ἀρχὴ τοῦ εὐαγγελίου Ἰησοῦ χριστοῦ.', es: 'Comienzo del evangelio de Jesucristo.', la: 'Initium Evangelii Jesu Christi, Filii Dei.', notes: ['titulo'] },
    { n: 2, gr: 'Καθὼς γέγραπται ἐν τῷ Ἠσαΐᾳ τῷ προφήτῃ· Ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου, ὃς κατασκευάσει τὴν ὁδόν σου·', es: 'Como está escrito en Isaías, el profeta: «Mira, envío a mi mensajero delante de ti, que preparará tu camino».', la: 'Sicut scriptum est in Isaia propheta: Ecce ego mitto angelum meum ante faciem tuam, qui præparabit viam tuam ante te.', notes: ['cita'] },
    { n: 3, gr: 'φωνὴ βοῶντος ἐν τῇ ἐρήμῳ· Ἑτοιμάσατε τὴν ὁδὸν κυρίου, εὐθείας ποιεῖτε τὰς τρίβους αὐτοῦ,', es: '«Voz de uno que clama en el desierto: preparen el camino del Señor, enderecen sus senderos».', la: 'Vox clamantis in deserto: Parate viam Domini, rectas facite semitas ejus.', notes: ['desierto'] },
    { n: 4, gr: 'ἐγένετο Ἰωάννης ὁ βαπτίζων ἐν τῇ ἐρήμῳ κηρύσσων βάπτισμα μετανοίας εἰς ἄφεσιν ἁμαρτιῶν.', es: 'Apareció Juan, que bautizaba en el desierto y proclamaba un bautismo de conversión para el perdón de los pecados.', la: 'Fuit Joannes in deserto baptizans, et prædicans baptismum pœnitentiæ in remissionem peccatorum.', notes: ['metanoia'] },
    { n: 5, gr: 'καὶ ἐξεπορεύετο πρὸς αὐτὸν πᾶσα ἡ Ἰουδαία χώρα καὶ οἱ Ἱεροσολυμῖται πάντες, καὶ ἐβαπτίζοντο ὑπʼ αὐτοῦ ἐν τῷ Ἰορδάνῃ ποταμῷ ἐξομολογούμενοι τὰς ἁμαρτίας αὐτῶν.', es: 'Acudían a él toda la región de Judea y todos los habitantes de Jerusalén; Juan los bautizaba en el río Jordán mientras confesaban sus pecados.', la: 'Et egrediebatur ad eum omnis Judææ regio, et Jerosolymitæ universi, et baptizabantur ab illo in Jordanis flumine, confitentes peccata sua.', notes: [] },
    { n: 6, gr: 'καὶ ἦν ὁ Ἰωάννης ἐνδεδυμένος τρίχας καμήλου καὶ ζώνην δερματίνην περὶ τὴν ὀσφὺν αὐτοῦ, καὶ ἔσθων ἀκρίδας καὶ μέλι ἄγριον.', es: 'Juan iba vestido con pelo de camello y llevaba un cinturón de cuero alrededor de la cintura; comía langostas y miel silvestre.', la: 'Et erat Joannes vestitus pilis cameli, et zona pellicea circa lumbos ejus, et locustas et mel silvestre edebat.', notes: ['langostas'] },
    { n: 7, gr: 'καὶ ἐκήρυσσεν λέγων· Ἔρχεται ὁ ἰσχυρότερός μου ὀπίσω μου, οὗ οὐκ εἰμὶ ἱκανὸς κύψας λῦσαι τὸν ἱμάντα τῶν ὑποδημάτων αὐτοῦ·', es: 'Y proclamaba: «Después de mí viene alguien más poderoso que yo; ni siquiera soy digno de agacharme para desatar la correa de sus sandalias».', la: 'Et prædicabat dicens: Venit fortior me post me, cujus non sum dignus procumbens solvere corrigiam calceamentorum ejus.', notes: [] },
    { n: 8, gr: 'ἐγὼ ἐβάπτισα ὑμᾶς ὕδατι, αὐτὸς δὲ βαπτίσει ὑμᾶς ἐν πνεύματι ἁγίῳ.', es: 'Yo los bauticé con agua; él, en cambio, los bautizará con Espíritu Santo.', la: 'Ego baptizavi vos aqua, ille vero baptizabit vos Spiritu Sancto.', notes: ['espiritu'] },
    { n: 9, gr: 'Καὶ ἐγένετο ἐν ἐκείναις ταῖς ἡμέραις ἦλθεν Ἰησοῦς ἀπὸ Ναζαρὲτ τῆς Γαλιλαίας καὶ ἐβαπτίσθη εἰς τὸν Ἰορδάνην ὑπὸ Ἰωάννου.', es: 'En aquellos días, Jesús llegó de Nazaret de Galilea y fue bautizado por Juan en el Jordán.', la: 'Et factum est: in diebus illis venit Jesus a Nazareth Galilææ: et baptizatus est a Joanne in Jordane.', notes: [] },
    { n: 10, gr: 'καὶ εὐθὺς ἀναβαίνων ἐκ τοῦ ὕδατος εἶδεν σχιζομένους τοὺς οὐρανοὺς καὶ τὸ πνεῦμα ὡς περιστερὰν καταβαῖνον εἰς αὐτόν·', es: 'Y, apenas salió del agua, vio rasgarse los cielos y al Espíritu descender hacia él como una paloma.', la: 'Et statim ascendens de aqua, vidit cælos apertos, et Spiritum tamquam columbam descendentem, et manentem in ipso.', notes: ['cielos'] },
    { n: 11, gr: 'καὶ φωνὴ ἐγένετο ἐκ τῶν οὐρανῶν· Σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός, ἐν σοὶ εὐδόκησα.', es: 'Y se oyó una voz desde los cielos: «Tú eres mi Hijo amado; en ti me complazco».', la: 'Et vox facta est de cælis: Tu es Filius meus dilectus, in te complacui.', notes: ['hijo'] },
    { n: 12, gr: 'Καὶ εὐθὺς τὸ πνεῦμα αὐτὸν ἐκβάλλει εἰς τὴν ἔρημον.', es: 'Y enseguida el Espíritu lo empuja al desierto.', la: 'Et statim Spiritus expulit eum in desertum.', notes: ['expulsa'] },
    { n: 13, gr: 'καὶ ἦν ἐν τῇ ἐρήμῳ τεσσεράκοντα ἡμέρας πειραζόμενος ὑπὸ τοῦ Σατανᾶ, καὶ ἦν μετὰ τῶν θηρίων, καὶ οἱ ἄγγελοι διηκόνουν αὐτῷ.', es: 'Y estuvo en el desierto cuarenta días, tentado por Satanás; estaba con las fieras y los ángeles lo servían.', la: 'Et erat in deserto quadraginta diebus, et quadraginta noctibus: et tentabatur a Satana: eratque cum bestiis, et angeli ministrabant illi.', notes: ['cuarenta'] },
    {"n":14,"gr":"Καὶ μετὰ τὸ παραδοθῆναι τὸν Ἰωάννην ἦλθεν ὁ Ἰησοῦς εἰς τὴν Γαλιλαίαν κηρύσσων τὸ εὐαγγέλιον τοῦ θεοῦ","es":"Después de que Juan fuera entregado, Jesús llegó a Galilea proclamando la buena noticia de Dios","la":"Postquam autem traditus est Joannes, venit Jesus in Galilæam, prædicans Evangelium regni Dei,","notes":["entregado","evangelio"]},
    {"n":15,"gr":"καὶ λέγων ὅτι Πεπλήρωται ὁ καιρὸς καὶ ἤγγικεν ἡ βασιλεία τοῦ θεοῦ· μετανοεῖτε καὶ πιστεύετε ἐν τῷ εὐαγγελίῳ.","es":"y diciendo: «Se ha cumplido el tiempo y se ha acercado el reino de Dios. Conviértanse y crean en la buena noticia».","la":"et dicens: Quoniam impletum est tempus, et appropinquavit regnum Dei: pœnitemini, et credite Evangelio.","notes":["kairos","reino"]},
    {"n":16,"gr":"Καὶ παράγων παρὰ τὴν θάλασσαν τῆς Γαλιλαίας εἶδεν Σίμωνα καὶ Ἀνδρέαν τὸν ἀδελφὸν Σίμωνος ἀμφιβάλλοντας ἐν τῇ θαλάσσῃ, ἦσαν γὰρ ἁλιεῖς·","es":"Al pasar junto al mar de Galilea, vio a Simón y a Andrés, hermano de Simón, echando una red al agua, pues eran pescadores.","la":"Et præteriens secus mare Galilææ, vidit Simonem, et Andream fratrem ejus, mittentes retia in mare (erant enim piscatores),","notes":["mar"]},
    {"n":17,"gr":"καὶ εἶπεν αὐτοῖς ὁ Ἰησοῦς· Δεῦτε ὀπίσω μου, καὶ ποιήσω ὑμᾶς γενέσθαι ἁλιεῖς ἀνθρώπων.","es":"Jesús les dijo: «Vengan detrás de mí y haré que lleguen a ser pescadores de personas».","la":"et dixit eis Jesus: Venite post me, et faciam vos fieri piscatores hominum.","notes":["pescadores"]},
    {"n":18,"gr":"καὶ εὐθὺς ἀφέντες τὰ δίκτυα ἠκολούθησαν αὐτῷ.","es":"Y enseguida dejaron las redes y lo siguieron.","la":"Et protinus relictis retibus, secuti sunt eum.","notes":[]},
    {"n":19,"gr":"καὶ προβὰς ὀλίγον εἶδεν Ἰάκωβον τὸν τοῦ Ζεβεδαίου καὶ Ἰωάννην τὸν ἀδελφὸν αὐτοῦ, καὶ αὐτοὺς ἐν τῷ πλοίῳ καταρτίζοντας τὰ δίκτυα,","es":"Un poco más adelante vio a Santiago, hijo de Zebedeo, y a Juan, su hermano, que estaban también en la barca reparando las redes.","la":"Et progressus inde pusillum, vidit Jacobum Zebedæi, et Joannem fratrem ejus, et ipsos componentes retia in navi:","notes":["redes"]},
    {"n":20,"gr":"καὶ εὐθὺς ἐκάλεσεν αὐτούς. καὶ ἀφέντες τὸν πατέρα αὐτῶν Ζεβεδαῖον ἐν τῷ πλοίῳ μετὰ τῶν μισθωτῶν ἀπῆλθον ὀπίσω αὐτοῦ.","es":"Y enseguida los llamó. Ellos dejaron a su padre Zebedeo en la barca con los trabajadores asalariados y se fueron detrás de él.","la":"et statim vocavit illos. Et relicto patre suo Zebedæo in navi cum mercenariis, secuti sunt eum.","notes":["asalariados"]},
    {"n":21,"gr":"Καὶ εἰσπορεύονται εἰς Καφαρναούμ. καὶ εὐθὺς τοῖς σάββασιν ἐδίδασκεν εἰς τὴν συναγωγήν.","es":"Llegaron a Cafarnaúm. Y enseguida, en sábado, enseñaba en la sinagoga.","la":"Et ingrediuntur Capharnaum: et statim sabbatis ingressus in synagogam, docebat eos.","notes":["sinagoga","sabado"]},
    {"n":22,"gr":"καὶ ἐξεπλήσσοντο ἐπὶ τῇ διδαχῇ αὐτοῦ, ἦν γὰρ διδάσκων αὐτοὺς ὡς ἐξουσίαν ἔχων καὶ οὐχ ὡς οἱ γραμματεῖς.","es":"Se quedaban asombrados de su enseñanza, porque les enseñaba como quien tiene autoridad y no como los escribas.","la":"Et stupebant super doctrina ejus: erat enim docens eos quasi potestatem habens, et non sicut scribæ.","notes":["autoridad"]},
    {"n":23,"gr":"καὶ εὐθὺς ἦν ἐν τῇ συναγωγῇ αὐτῶν ἄνθρωπος ἐν πνεύματι ἀκαθάρτῳ καὶ ἀνέκραξεν","es":"Y enseguida había en su sinagoga un hombre con un espíritu impuro, que gritó:","la":"Et erat in synagoga eorum homo in spiritu immundo: et exclamavit,","notes":["espirituimpuro"]},
    {"n":24,"gr":"λέγων· Τί ἡμῖν καὶ σοί, Ἰησοῦ Ναζαρηνέ; ἦλθες ἀπολέσαι ἡμᾶς; οἶδά σε τίς εἶ, ὁ ἅγιος τοῦ θεοῦ.","es":"«¿Qué tenemos que ver contigo, Jesús Nazareno? ¿Has venido a destruirnos? Sé quién eres: el Santo de Dios».","la":"dicens: Quid nobis et tibi, Jesu Nazarene? venisti perdere nos? scio qui sis, Sanctus Dei.","notes":["idioma"]},
    {"n":25,"gr":"καὶ ἐπετίμησεν αὐτῷ ὁ Ἰησοῦς λέγων· Φιμώθητι καὶ ἔξελθε ἐξ αὐτοῦ.","es":"Jesús lo reprendió diciendo: «¡Calla y sal de él!».","la":"Et comminatus est ei Jesus, dicens: Obmutesce, et exi de homine.","notes":["silencio"]},
    {"n":26,"gr":"καὶ σπαράξαν αὐτὸν τὸ πνεῦμα τὸ ἀκάθαρτον καὶ φωνῆσαν φωνῇ μεγάλῃ ἐξῆλθεν ἐξ αὐτοῦ.","es":"El espíritu impuro lo sacudió violentamente y, dando un gran grito, salió de él.","la":"Et discerpens eum spiritus immundus, et exclamans voce magna, exiit ab eo.","notes":["convulsion"]},
    {"n":27,"gr":"καὶ ἐθαμβήθησαν ἅπαντες, ὥστε συζητεῖν πρὸς ἑαυτοὺς λέγοντας· Τί ἐστιν τοῦτο; διδαχὴ καινή· κατʼ ἐξουσίαν καὶ τοῖς πνεύμασι τοῖς ἀκαθάρτοις ἐπιτάσσει, καὶ ὑπακούουσιν αὐτῷ.","es":"Todos quedaron sobrecogidos, hasta el punto de discutir entre sí: «¿Qué es esto? ¡Una enseñanza nueva! Ordena con autoridad incluso a los espíritus impuros, y estos lo obedecen».","la":"Et mirati sunt omnes, ita ut conquirerent inter se dicentes: Quidnam est hoc? quænam doctrina hæc nova? quia in potestate etiam spiritibus immundis imperat, et obediunt ei.","notes":["nueva"]},
    {"n":28,"gr":"καὶ ἐξῆλθεν ἡ ἀκοὴ αὐτοῦ εὐθὺς πανταχοῦ εἰς ὅλην τὴν περίχωρον τῆς Γαλιλαίας.","es":"Y enseguida se difundió su fama por toda la región circundante de Galilea.","la":"Et processit rumor ejus statim in omnem regionem Galilææ.","notes":["rumor"]},
  ];

  const notes = {
    sinagoga: ["La sinagoga","συναγωγή designa el lugar de reunión y enseñanza comunitaria. El relato no identifica aquí una construcción arqueológica concreta."],
    sabado: ["Los sábados","τοῖς σάββασιν es un dativo plural usado para indicar el tiempo; en este contexto se refiere al sábado."],
    autoridad: ["Autoridad y enseñanza","ἐξουσία indica autoridad o potestad. El narrador contrapone el modo de enseñar de Jesús al de los escribas, sin explicar en qué consistía la práctica de estos."],
    espirituimpuro: ["Espíritu impuro","La expresión πνεῦμα ἀκάθαρτον pertenece al vocabulario religioso del relato. No constituye por sí misma un diagnóstico médico moderno."],
    idioma: ["¿Qué tenemos que ver contigo?","Τί ἡμῖν καὶ σοί es un giro idiomático semítico, literalmente «¿qué [hay] para nosotros y para ti?», que expresa distanciamiento o conflicto; cf. Jue 11,12 (LXX)."],
    silencio: ["Φιμώθητι","Imperativo aoristo pasivo de φιμόω, literalmente «ser amordazado». La Vulgata traduce Obmutesce («enmudece»)."],
    convulsion: ["La salida del espíritu","σπαράξαν es participio aoristo de σπαράσσω, «sacudir violentamente». El texto describe una acción del espíritu dentro del marco narrativo."],
    nueva: ["Enseñanza nueva","διδαχὴ καινή es una frase nominal exclamativa. La puntuación del pasaje es editorial; la relación entre «nueva» y «con autoridad» admite matices."],
    rumor: ["La fama que se difunde","ἀκοή puede designar noticia, informe o fama. El griego dice «salió su noticia»; la Vulgata emplea rumor."],
    entregado: ['Juan, entregado', 'παραδοθῆναι es un infinitivo aoristo pasivo de παραδίδωμι, «entregar, poner en manos de otro». La misma familia verbal reaparece en el relato de la pasión. El texto no identifica aquí a quien entrega a Juan.'],
    evangelio: ['La buena noticia de Dios', 'SBLGNT lee τοῦ θεοῦ («de Dios»); la Vulgata Clementina presenta regni Dei («del reino de Dios»). No se armonizan ambas versiones.'],
    kairos: ['καιρός', 'No se trata simplemente de tiempo medido (χρόνος), sino de un momento u ocasión decisiva. El perfecto πεπλήρωται presenta el tiempo como ya cumplido.'],
    reino: ['ἤγγικεν', 'Perfecto de ἐγγίζω: «se ha acercado». La proximidad del reino puede recibir distintas interpretaciones escatológicas; la traducción no decide entre ellas.'],
    mar: ['Mar de Galilea', 'La denominación θάλασσα se usa para el lago de Galilea. ἀμφιβάλλοντας describe la acción de echar una red, sin precisar en este versículo un tipo único de aparejo.'],
    pescadores: ['Pescadores de personas', 'ποιήσω ὑμᾶς γενέσθαι contiene un infinitivo de devenir: «haré que lleguen a ser». La imagen aprovecha el oficio de los llamados.'],
    redes: ['καταρτίζοντας', 'Participio presente activo de καταρτίζω: arreglar, preparar o poner en condiciones. En este contexto se refiere a las redes de pesca.'],
    asalariados: ['Los trabajadores contratados', 'μισθωτοί son personas que trabajan por salario. Su mención diferencia la escena de Zebedeo de la primera pareja de hermanos.'],
    titulo: ['El comienzo', 'La lectura adoptada por SBLGNT termina en χριστοῦ («Cristo»). Numerosos testigos incluyen además υἱοῦ θεοῦ («Hijo de Dios»), que aparece en la Vulgata. La inclusión de esas palabras es una variante textual importante, no una omisión accidental de nuestra traducción.'],
    cita: ['Isaías y Malaquías', 'Aunque la introducción menciona a Isaías, la primera cita recuerda Mal 3,1 (y Ex 23,20); la segunda procede de Is 40,3. Algunos testigos griegos sustituyen «en Isaías, el profeta» por «en los profetas».'],
    desierto: ['Una voz en el desierto', 'La cita de Isaías introduce el motivo del desierto, que estructura el comienzo de Marcos. La puntuación moderna ayuda a interpretar la frase, pero no proviene de los manuscritos antiguos de la misma manera que las palabras.'],
    metanoia: ['μετάνοια', 'El sustantivo puede describir un cambio de mente o de orientación vital. «Conversión» intenta conservar ese alcance sin reducirlo a un simple sentimiento de arrepentimiento.'],
    langostas: ['ἀκρίδες', 'La palabra designa langostas, es decir, insectos. La descripción de Juan evoca la figura profética de Elías (cf. 2 Re 1,8).'],
    espiritu: ['Agua y Espíritu', 'La oposición entre ὕδατι («con agua», dativo sin preposición) y ἐν πνεύματι ἁγίῳ («en/con Espíritu Santo») se conserva en el griego. La traducción en español emplea «con» en ambos casos.'],
    cielos: ['Los cielos rasgados', 'σχιζομένους es más intenso que «abiertos»: literalmente, «rasgándose». La Vulgata dice apertos y añade «permaneciendo sobre él», expresión que no figura en el texto griego aquí adoptado.'],
    hijo: ['La voz celeste', 'La fórmula reúne resonancias del Salmo 2,7 y de Isaías 42,1. Son alusiones interpretativas, no citas literales idénticas.'],
    expulsa: ['ἐκβάλλει', 'El presente histórico y el verbo «echar fuera, expulsar» imprimen brusquedad al relato; «lo empuja» refleja esa fuerza mejor que «lo conduce».'],
    cuarenta: ['Los cuarenta días', 'Marcos menciona cuarenta días, pero no añade aquí «cuarenta noches». La Vulgata Clementina sí incorpora esa expresión. La diferencia se conserva en nuestras columnas.'],
  };

  // Glosario inicial seleccionado. Otras formas se incorporarán en nuevas pasadas editoriales.
  const glossary = {
    "Καὶ": ["καί","conjunción coordinante","y, también"],
    "εἰσπορεύονται": ["εἰσπορεύομαι","presente indicativo medio, 3.ª plural","entran, llegan"],
    "εἰς": ["εἰς","preposición con acusativo","a, hacia, en"],
    "Καφαρναούμ": ["Καφαρναούμ","nombre propio indeclinable","Cafarnaúm"],
    "τοῖς": ["ὁ","artículo dativo plural masculino/neutro","los, a los"],
    "σάββασιν": ["σάββατον","dativo plural neutro","sábado"],
    "ἐδίδασκεν": ["διδάσκω","imperfecto indicativo activo, 3.ª singular","enseñaba"],
    "συναγωγήν": ["συναγωγή","acusativo singular femenino","sinagoga"],
    "ἐξεπλήσσοντο": ["ἐκπλήσσω","imperfecto indicativo medio-pasivo, 3.ª plural","quedaban asombrados"],
    "διδαχῇ": ["διδαχή","dativo singular femenino","enseñanza"],
    "ἐξουσίαν": ["ἐξουσία","acusativo singular femenino","autoridad"],
    "γραμματεῖς": ["γραμματεύς","nominativo plural masculino","escribas"],
    "ἄνθρωπος": ["ἄνθρωπος","nominativo singular masculino","hombre, persona"],
    "ἀκαθάρτῳ": ["ἀκάθαρτος","dativo singular neutro","impuro"],
    "ἀνέκραξεν": ["ἀνακράζω","aoristo indicativo activo, 3.ª singular","gritó"],
    "Ναζαρηνέ": ["Ναζαρηνός","vocativo singular masculino","Nazareno"],
    "ἀπολέσαι": ["ἀπόλλυμι","infinitivo aoristo activo","destruir"],
    "οἶδά": ["οἶδα","perfecto indicativo activo con valor presente, 1.ª singular","sé"],
    "ἅγιος": ["ἅγιος","nominativo singular masculino","santo"],
    "ἐπετίμησεν": ["ἐπιτιμάω","aoristo indicativo activo, 3.ª singular","reprendió"],
    "Φιμώθητι": ["φιμόω","imperativo aoristo pasivo, 2.ª singular","calla, queda amordazado"],
    "ἔξελθε": ["ἐξέρχομαι","imperativo aoristo activo, 2.ª singular","sal"],
    "σπαράξαν": ["σπαράσσω","participio aoristo activo, nominativo singular neutro","sacudiendo violentamente"],
    "ἀκάθαρτον": ["ἀκάθαρτος","nominativo singular neutro","impuro"],
    "φωνῇ": ["φωνή","dativo singular femenino","voz, grito"],
    "μεγάλῃ": ["μέγας","dativo singular femenino","grande, fuerte"],
    "ἐξῆλθεν": ["ἐξέρχομαι","aoristo indicativo activo, 3.ª singular","salió"],
    "ἐθαμβήθησαν": ["θαμβέω","aoristo indicativo pasivo, 3.ª plural","quedaron sobrecogidos"],
    "συζητεῖν": ["συζητέω","infinitivo presente activo","discutir, debatir"],
    "διδαχὴ": ["διδαχή","nominativo singular femenino","enseñanza"],
    "καινή": ["καινός","nominativo singular femenino","nueva"],
    "ἐπιτάσσει": ["ἐπιτάσσω","presente indicativo activo, 3.ª singular","ordena"],
    "ὑπακούουσιν": ["ὑπακούω","presente indicativo activo, 3.ª plural","obedecen"],
    "ἀκοὴ": ["ἀκοή","nominativo singular femenino","noticia, fama"],
    "πανταχοῦ": ["πανταχοῦ","adverbio","por todas partes"],
    "περίχωρον": ["περίχωρος","acusativo singular femenino","región circundante"],
    'Ἀρχὴ': ['ἀρχή', 'nominativo singular femenino', 'comienzo, principio'],
    'εὐαγγελίου': ['εὐαγγέλιον', 'genitivo singular neutro', 'buena noticia, evangelio'],
    'χριστοῦ': ['χριστός', 'genitivo singular masculino', 'ungido, Mesías, Cristo'],
    'γέγραπται': ['γράφω', 'perfecto indicativo medio-pasivo, 3.ª persona singular', 'está escrito'],
    'προφήτῃ': ['προφήτης', 'dativo singular masculino', 'profeta'],
    'ἄγγελόν': ['ἄγγελος', 'acusativo singular masculino', 'mensajero, ángel'],
    'ὁδόν': ['ὁδός', 'acusativo singular femenino', 'camino'],
    'ἐρήμῳ': ['ἔρημος', 'dativo singular femenino', 'desierto, lugar despoblado'],
    'ἐγένετο': ['γίγνομαι', 'aoristo indicativo medio, 3.ª persona singular', 'sucedió, apareció'],
    'βαπτίζων': ['βαπτίζω', 'participio presente activo, nominativo masculino singular', 'que bautiza'],
    'κηρύσσων': ['κηρύσσω', 'participio presente activo, nominativo masculino singular', 'que proclama'],
    'μετανοίας': ['μετάνοια', 'genitivo singular femenino', 'conversión, cambio de orientación'],
    'ἄφεσιν': ['ἄφεσις', 'acusativo singular femenino', 'remisión, perdón, liberación'],
    'ἁμαρτιῶν': ['ἁμαρτία', 'genitivo plural femenino', 'pecados, faltas'],
    'ἀκρίδας': ['ἀκρίς', 'acusativo plural femenino', 'langostas (insectos)'],
    'ἰσχυρότερός': ['ἰσχυρός', 'comparativo nominativo masculino singular', 'más fuerte, más poderoso'],
    'ὕδατι': ['ὕδωρ', 'dativo singular neutro', 'agua'],
    'ἐβάπτισα': ['βαπτίζω', 'aoristo indicativo activo, 1.ª persona singular', 'bauticé'],
    'πνεύματι': ['πνεῦμα', 'dativo singular neutro', 'espíritu, aliento'],
    'εὐθὺς': ['εὐθύς', 'adverbio', 'enseguida, inmediatamente'],
    'σχιζομένους': ['σχίζω', 'participio presente medio-pasivo, acusativo masculino plural', 'que se rasgan'],
    'περιστερὰν': ['περιστερά', 'acusativo singular femenino', 'paloma'],
    'ἐκβάλλει': ['ἐκβάλλω', 'presente indicativo activo, 3.ª persona singular', 'arroja, empuja, expulsa'],
    'πειραζόμενος': ['πειράζω', 'participio presente medio-pasivo, nominativo masculino singular', 'tentado, puesto a prueba'],
    'Πεπλήρωται': ['πληρόω', 'perfecto indicativo medio-pasivo, 3.ª persona singular', 'se ha cumplido'],
    'ἤγγικεν': ['ἐγγίζω', 'perfecto indicativo activo, 3.ª persona singular', 'se ha acercado'],
    'μετανοεῖτε': ['μετανοέω', 'presente imperativo activo, 2.ª persona plural', 'conviértanse, cambien de orientación'],
    'πιστεύετε': ['πιστεύω', 'presente imperativo activo, 2.ª persona plural', 'crean, confíen'],
    'ἁλιεῖς': ['ἁλιεύς', 'nominativo plural masculino', 'pescadores'],
    'δίκτυα': ['δίκτυον', 'acusativo plural neutro', 'redes'],
    'ἠκολούθησαν': ['ἀκολουθέω', 'aoristo indicativo activo, 3.ª persona plural', 'siguieron'],
    'μισθωτῶν': ['μισθωτός', 'genitivo plural masculino', 'trabajadores asalariados'],
    'διηκόνουν': ['διακονέω', 'imperfecto indicativo activo, 3.ª persona plural', 'servían, atendían'],
  };

  const $ = (selector) => document.querySelector(selector);
  const dictionaryKey = 'edicion-viva:dictionary:gr:v1';
  const vulgateKey = 'edicion-viva:marcos:vulgate:v1';
  const reader = $('#reader');
  const verses = $('#verses');
  const wordPanel = $('#word-panel');
  const notePanel = $('#note-panel');
  const dictionaryPanel = $('#side-drawer');
  const app = $('#app-shell');
  let selectedWord = null;
  let reviewItems = [];
  let reviewIndex = 0;

  function safeRead(key, fallback) {
    try { const result = localStorage.getItem(key); return result == null ? fallback : result; }
    catch { return fallback; }
  }
  function safeWrite(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
  function readDictionary() {
    try {
      const saved = JSON.parse(safeRead(dictionaryKey, '{}'));
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
      return Object.fromEntries(Object.entries(saved).filter(([form]) => Object.hasOwn(glossary, form)));
    } catch { return {}; }
  }
  let dictionary = readDictionary();

  function makeElement(tag, cls, content) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (content !== undefined) el.textContent = content;
    return el;
  }
  function closePanels() { wordPanel.hidden = true; notePanel.hidden = true; }
  function placePanel(panel, anchor) {
    const box = anchor.getBoundingClientRect();
    panel.hidden = false;
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const left = Math.max(12, Math.min(window.innerWidth - width - 12, box.left));
    const below = box.bottom + 10;
    const top = below + height < window.innerHeight - 12 ? below : Math.max(12, box.top - height - 10);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }
  function showWord(form, anchor) {
    closePanels();
    selectedWord = form;
    const [lemma, morph, gloss] = glossary[form];
    $('#word-form').textContent = form;
    $('#word-lemma').textContent = lemma;
    $('#word-morphology').textContent = morph;
    $('#word-gloss').textContent = gloss;
    const save = $('#save-word');
    save.setAttribute('aria-pressed', String(Object.hasOwn(dictionary, form)));
    save.textContent = Object.hasOwn(dictionary, form) ? '✓ Guardada en mi diccionario' : '+ Guardar en mi diccionario';
    placePanel(wordPanel, anchor);
  }
  function showNote(id, anchor) {
    closePanels();
    $('#note-heading').textContent = notes[id][0];
    $('#note-content').textContent = notes[id][1];
    placePanel(notePanel, anchor);
  }

  function greekContent(container, text) {
    // Se crean botones solamente para las formas cuyo análisis se ha verificado.
    const tokens = text.split(/(\p{L}[\p{L}\p{M}\u1fbdʼ’]*)/u);
    tokens.forEach(token => {
      if (Object.hasOwn(glossary, token)) {
        const button = makeElement('button', 'token', token);
        button.type = 'button';
        button.title = `Ficha: ${glossary[token][0]}`;
        button.setAttribute('aria-label', `${token}. Consultar ficha léxica`);
        button.addEventListener('click', () => showWord(token, button));
        container.append(button);
      } else container.append(document.createTextNode(token));
    });
  }

  const sections = {
    1: ['1,1–8', 'Juan el Bautista'],
    9: ['1,9–11', 'El bautismo de Jesús'],
    12: ['1,12–13', 'En el desierto'],
    14: ['1,14–15', 'El anuncio en Galilea'],
    16: ['1,16–20', 'Los primeros discípulos'],
    21: ['1,21–28', 'En la sinagoga de Cafarnaúm'],
  };
  passages.forEach(p => {
    if (sections[p.n]) {
      const section = makeElement('div', 'verse-section');
      section.append(makeElement('p', '', sections[p.n][0]), makeElement('h2', '', sections[p.n][1]));
      verses.append(section);
    }
    const row = makeElement('div', 'verse');
    row.id = `v${p.n}`;
    const number = makeElement('div', 'number', String(p.n));
    const speech = makeElement('div', 'speech');
    const original = makeElement('p', 'latin');
    original.lang = 'grc';
    greekContent(original, p.gr);
    speech.append(original);
    p.notes.forEach((noteId, i) => {
      const anchor = makeElement('button', 'note-anchor', String(i + 1));
      anchor.type = 'button';
      anchor.title = `Nota: ${notes[noteId][0]}`;
      anchor.setAttribute('aria-label', `Nota al versículo ${p.n}: ${notes[noteId][0]}`);
      anchor.addEventListener('click', () => showNote(noteId, anchor));
      speech.append(anchor);
    });
    const spanish = makeElement('div', 'spanish', p.es);
    spanish.lang = 'es';
    const latin = makeElement('div', 'vulgate', p.la);
    latin.lang = 'la';
    row.append(number, speech, spanish, latin);
    verses.append(row);
  });

  // Columna latina opcional y diseño en bloques/columnas compartido con Plauto.
  const latinToggle = $('#toggle-vulgate');
  const latinVisible = safeRead(vulgateKey, 'false') === 'true';
  reader.dataset.vulgate = String(latinVisible);
  latinToggle.setAttribute('aria-pressed', String(latinVisible));
  latinToggle.textContent = latinVisible ? 'Ocultar Vulgata' : 'Mostrar Vulgata';
  latinToggle.addEventListener('click', () => {
    const enabled = reader.dataset.vulgate !== 'true';
    reader.dataset.vulgate = String(enabled);
    latinToggle.textContent = enabled ? 'Ocultar Vulgata' : 'Mostrar Vulgata';
    latinToggle.setAttribute('aria-pressed', String(enabled));
    safeWrite(vulgateKey, String(enabled));
  });

  function updateDictionary() {
    const list = $('#dictionary-list');
    list.replaceChildren();
    const entries = Object.entries(dictionary).sort((a,b) => a[0].localeCompare(b[0], 'el'));
    $('#saved-count').textContent = String(entries.length);
    document.querySelectorAll('.mobile-saved-count').forEach(el => { el.textContent = entries.length ? `(${entries.length})` : ''; });
    if (!entries.length) list.append(makeElement('p', 'storage-note', 'Todavía no guardaste palabras griegas.'));
    entries.forEach(([form, data]) => {
      const entry = makeElement('div', 'dictionary-entry');
      const info = makeElement('div');
      info.append(makeElement('strong', '', form), makeElement('small', '', `${data[0]} · ${data[2]}`));
      const remove = makeElement('button', '', 'Quitar');
      remove.type = 'button';
      remove.setAttribute('aria-label', `Quitar ${form} del diccionario`);
      remove.addEventListener('click', () => { delete dictionary[form]; persist(); });
      entry.append(info, remove);
      list.append(entry);
    });
  }
  function persist() {
    if (!safeWrite(dictionaryKey, JSON.stringify(dictionary))) $('#dictionary-feedback').textContent = 'El almacenamiento de este navegador no está disponible.';
    updateDictionary();
  }
  $('#save-word').addEventListener('click', () => {
    if (!selectedWord) return;
    dictionary[selectedWord] = glossary[selectedWord];
    persist();
    $('#save-word').setAttribute('aria-pressed', 'true');
    $('#save-word').textContent = '✓ Guardada en mi diccionario';
  });
  updateDictionary();

  function showDictionary() {
    closePanels();
    dictionaryPanel.hidden = false;
    dictionaryPanel.querySelector('#close-drawer').focus();
  }
  function closeDictionary() { dictionaryPanel.hidden = true; }
  $('#close-drawer').addEventListener('click', closeDictionary);
  $('#close-word').addEventListener('click', closePanels);
  $('#close-note').addEventListener('click', closePanels);
  $('#export-dictionary').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({version: 1, language: 'grc', entries: dictionary}, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = makeElement('a'); a.href = url; a.download = 'edicion-viva-griego-diccionario.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('#import-trigger').addEventListener('click', () => $('#import-dictionary').click());
  $('#import-dictionary').addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 500_000) throw new Error('El archivo supera el tamaño permitido.');
      const data = JSON.parse(await file.text());
      if (data.version !== 1 || data.language !== 'grc' || !data.entries || typeof data.entries !== 'object') throw new Error('Formato de diccionario no reconocido.');
      let added = 0;
      for (const form of Object.keys(data.entries)) if (Object.hasOwn(glossary, form)) { dictionary[form] = glossary[form]; added++; }
      persist();
      $('#dictionary-feedback').textContent = `${added} palabras reconocidas incorporadas.`;
    } catch (error) { $('#dictionary-feedback').textContent = error.message; }
    event.target.value = '';
  });

  function showCard() {
    const [form, data] = reviewItems[reviewIndex];
    $('#flash-progress').textContent = `${reviewIndex + 1} / ${reviewItems.length}`;
    $('#flash-form').textContent = form;
    $('#flash-lemma').textContent = `${data[0]} · ${data[2]}`;
    $('#flash-morph').textContent = data[1];
    $('#flash-answer').hidden = true;
    $('#reveal-card').hidden = false;
    $('#next-card').hidden = true;
  }
  $('#start-review').addEventListener('click', () => {
    reviewItems = Object.entries(dictionary);
    if (!reviewItems.length) { $('#dictionary-feedback').textContent = 'Guardá alguna palabra para empezar a repasar.'; return; }
    reviewIndex = 0;
    $('#flashcard').hidden = false;
    showCard();
  });
  $('#reveal-card').addEventListener('click', () => {
    $('#flash-answer').hidden = false;
    $('#reveal-card').hidden = true;
    $('#next-card').hidden = false;
  });
  $('#next-card').addEventListener('click', () => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    showCard();
  });
  $('#end-review').addEventListener('click', () => { $('#flashcard').hidden = true; });

  function closeMobileRails() { $('#sidebar').classList.remove('open'); $('#character-rail').classList.remove('open'); }
  document.querySelectorAll('[data-drawer]').forEach(button => button.addEventListener('click', () => {
    const target = button.dataset.drawer;
    if (target === 'dictionary') { closeMobileRails(); showDictionary(); return; }
    closeDictionary(); closePanels();
    const mobile = window.matchMedia('(max-width: 860px)').matches;
    if (target === 'position') {
      if (mobile) { const open = !$('#sidebar').classList.contains('open'); closeMobileRails(); $('#sidebar').classList.toggle('open', open); }
      else app.classList.toggle('nav-collapsed');
    } else if (target === 'characters') {
      if (mobile || window.matchMedia('(max-width: 1160px)').matches) { const open = !$('#character-rail').classList.contains('open'); closeMobileRails(); $('#character-rail').classList.toggle('open', open); }
      else app.classList.toggle('characters-collapsed');
    }
    const sidebarExpanded = !app.classList.contains('nav-collapsed');
    const contextExpanded = !app.classList.contains('characters-collapsed');
    document.querySelectorAll('[data-drawer="position"]').forEach(b => b.setAttribute('aria-expanded', String(mobile ? $('#sidebar').classList.contains('open') : sidebarExpanded)));
    document.querySelectorAll('[data-drawer="characters"]').forEach(b => b.setAttribute('aria-expanded', String(mobile ? $('#character-rail').classList.contains('open') : contextExpanded)));
  }));
  $('.passage-nav').addEventListener('click', () => closeMobileRails());
  $('#return-to-text').addEventListener('click', () => closeMobileRails());
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closePanels(); closeDictionary(); closeMobileRails(); } });
  document.addEventListener('pointerdown', event => {
    if (!wordPanel.hidden && !wordPanel.contains(event.target) && !event.target.closest('.token')) wordPanel.hidden = true;
    if (!notePanel.hidden && !notePanel.contains(event.target) && !event.target.closest('.note-anchor')) notePanel.hidden = true;
  });
})();
