/* Marcos 1,1–39 · SBLGNT (signos de aparato omitidos), Vulgata Clementina, traducción propia. */
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
    {"n":29,"gr":"Καὶ εὐθὺς ἐκ τῆς συναγωγῆς ἐξελθόντες ἦλθον εἰς τὴν οἰκίαν Σίμωνος καὶ Ἀνδρέου μετὰ Ἰακώβου καὶ Ἰωάννου.","es":"Y enseguida, al salir de la sinagoga, fueron a la casa de Simón y Andrés, acompañados por Santiago y Juan.","la":"Et protinus egredientes de synagoga, venerunt in domum Simonis et Andreæ, cum Jacobo et Joanne.","notes":["casa"]},
    {"n":30,"gr":"ἡ δὲ πενθερὰ Σίμωνος κατέκειτο πυρέσσουσα, καὶ εὐθὺς λέγουσιν αὐτῷ περὶ αὐτῆς.","es":"La suegra de Simón estaba en cama con fiebre, y enseguida le hablaron de ella.","la":"Decumbebat autem socrus Simonis febricitans: et statim dicunt ei de illa.","notes":["suegra"]},
    {"n":31,"gr":"καὶ προσελθὼν ἤγειρεν αὐτὴν κρατήσας τῆς χειρός· καὶ ἀφῆκεν αὐτὴν ὁ πυρετός, καὶ διηκόνει αὐτοῖς.","es":"Él se acercó, la tomó de la mano y la levantó. La fiebre la dejó y ella se puso a atenderlos.","la":"Et accedens elevavit eam, apprehensa manu ejus: et continuo dimisit eam febris, et ministrabat eis.","notes":["levanto","servicio"]},
    {"n":32,"gr":"Ὀψίας δὲ γενομένης, ὅτε ἔδυ ὁ ἥλιος, ἔφερον πρὸς αὐτὸν πάντας τοὺς κακῶς ἔχοντας καὶ τοὺς δαιμονιζομένους·","es":"Al caer la tarde, cuando se puso el sol, le llevaban a todos los enfermos y a los que el relato describe como poseídos por demonios.","la":"Vespere autem facto cum occidisset sol, afferebant ad eum omnes male habentes, et dæmonia habentes:","notes":["ocaso"]},
    {"n":33,"gr":"καὶ ἦν ὅλη ἡ πόλις ἐπισυνηγμένη πρὸς τὴν θύραν.","es":"Y toda la ciudad estaba reunida ante la puerta.","la":"et erat omnis civitas congregata ad januam.","notes":["ciudad"]},
    {"n":34,"gr":"καὶ ἐθεράπευσεν πολλοὺς κακῶς ἔχοντας ποικίλαις νόσοις, καὶ δαιμόνια πολλὰ ἐξέβαλεν, καὶ οὐκ ἤφιεν λαλεῖν τὰ δαιμόνια, ὅτι ᾔδεισαν αὐτόν.","es":"Curó a muchos que padecían diversas enfermedades y expulsó muchos demonios; no les permitía hablar, porque lo conocían.","la":"Et curavit multos, qui vexabantur variis languoribus, et dæmonia multa ejiciebat, et non sinebat ea loqui, quoniam sciebant eum.","notes":["muchos","silenciomarc"]},
    {"n":35,"gr":"Καὶ πρωῒ ἔννυχα λίαν ἀναστὰς ἐξῆλθεν καὶ ἀπῆλθεν εἰς ἔρημον τόπον κἀκεῖ προσηύχετο.","es":"Muy de mañana, cuando todavía estaba muy oscuro, se levantó, salió y se fue a un lugar apartado. Allí oraba.","la":"Et diluculo valde surgens, egressus abiit in desertum locum, ibique orabat.","notes":["alba","oracion"]},
    {"n":36,"gr":"καὶ κατεδίωξεν αὐτὸν Σίμων καὶ οἱ μετ’ αὐτοῦ,","es":"Simón y quienes estaban con él salieron a buscarlo con insistencia.","la":"Et prosecutus est eum Simon, et qui cum illo erant.","notes":["persecucion"]},
    {"n":37,"gr":"καὶ εὗρον αὐτὸν καὶ λέγουσιν αὐτῷ ὅτι Πάντες ζητοῦσίν σε.","es":"Lo encontraron y le dijeron: «Todos te están buscando».","la":"Et cum invenissent eum, dixerunt ei: Quia omnes quærunt te.","notes":["todos"]},
    {"n":38,"gr":"καὶ λέγει αὐτοῖς· Ἄγωμεν ἀλλαχοῦ εἰς τὰς ἐχομένας κωμοπόλεις, ἵνα καὶ ἐκεῖ κηρύξω, εἰς τοῦτο γὰρ ἐξῆλθον.","es":"Él les dijo: «Vayamos a otra parte, a las poblaciones vecinas, para que también allí anuncie el mensaje; para eso he salido».","la":"Et ait illis: Eamus in proximos vicos, et civitates, ut et ibi prædicem: ad hoc enim veni.","notes":["poblaciones","salida"]},
    {"n":39,"gr":"καὶ ἦλθεν κηρύσσων εἰς τὰς συναγωγὰς αὐτῶν εἰς ὅλην τὴν Γαλιλαίαν καὶ τὰ δαιμόνια ἐκβάλλων.","es":"Y recorrió Galilea proclamando el mensaje en sus sinagogas y expulsando demonios.","la":"Et erat prædicans in synagogis eorum, et in omni Galilæa, et dæmonia ejiciens.","notes":["recorrido"]},
  ];

  const notes = {
    alba: ["Antes del amanecer","πρωῒ ἔννυχα λίαν combina «muy temprano» con «todavía de noche»; ἔννυχα funciona aquí adverbialmente. El imperfecto προσηύχετο presenta la oración en desarrollo. Fuentes: Holmes (ed.), SBLGNT, Mc 1,35 (2010), https://biblia.com/bible/sblgnt/mark/1/35-39; A. B. Bruce, The Expositor’s Greek Testament, comentario a Mc 1,35, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    oracion: ["Un lugar apartado","ἔρημον τόπον designa un lugar deshabitado o solitario, sin exigir un desierto arenoso. El pasaje no identifica su localización. Cf. Mc 1,12–13, donde ἔρημος ya había aparecido. Fuente: SBLGNT, Mc 1,35; https://biblia.com/bible/sblgnt/mark/1/35-39"],
    persecucion: ["κατεδίωξεν: salieron tras él","El verbo καταδιώκω puede sugerir persecución o búsqueda insistente; traducirlo aquí como «lo persiguieron» podría exagerar una hostilidad que el contexto no explicita. El verbo está en singular, aunque el sujeto incluye a Simón y a sus acompañantes. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,36, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    todos: ["«Todos te buscan»","πάντες es una generalización enfática de los interlocutores, no una afirmación demográfica comprobable. El presente histórico λέγουσιν da viveza al intercambio. Cf. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,37, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    poblaciones: ["κωμοπόλεις: poblaciones","κωμόπολις combina κώμη («aldea») y πόλις («ciudad»); aquí se refiere a poblaciones cercanas. El plural acusativo ἐχομένας («contiguas, próximas») concuerda con κωμοπόλεις. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,38, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    salida: ["«Para eso he salido»","ἐξῆλθον puede remitir a la salida narrada en 1,35 o entenderse más ampliamente como declaración de misión; el griego no obliga a resolver esa ambigüedad. La Clementina dice ad hoc enim veni («para esto vine»), sin reproducir literalmente el verbo de salida. Fuentes: SBLGNT, Mc 1,38, https://biblia.com/bible/sblgnt/mark/1/35-39; Vulgata Clementina, Mc 1,38, https://szentiras.hu/biblia/vuc/mrk/1"],
    recorrido: ["Predicación y expulsión","Los participios κηρύσσων y ἐκβάλλων coordinan dos actividades del recorrido por Galilea. La sintaxis de εἰς τὰς συναγωγάς puede vincularse con el desplazamiento o con la predicación; no conviene imponer una lectura excluyente. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,39, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    casa: ["La casa de Simón y Andrés","La transición desde la sinagoga a la vivienda enlaza dos escenas del mismo día narrativo. El texto menciona a cuatro discípulos, pero no identifica la casa con un yacimiento arqueológico concreto. Fuente primaria: SBLGNT, Mc 1,29; https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt"],
    suegra: ["La suegra de Simón","πενθερά significa «suegra». La existencia de una suegra presupone un vínculo matrimonial, pero el pasaje no dice si la esposa de Simón estaba presente. κατέκειτο (imperfecto) describe su estado, mientras πυρέσσουσα es un participio presente. Fuente: SBLGNT, Mc 1,30; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    levanto: ["ἤγειρεν: la levantó","El aoristo ἤγειρεν procede de ἐγείρω («levantar», también «despertar»). Aquí describe la acción física de levantar a la enferma; las asociaciones con otros usos del verbo en Marcos requieren interpretación contextual. Fuente: SBLGNT, Mc 1,31; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    servicio: ["διηκόνει: se puso a servir","El imperfecto διηκόνει puede describir una acción en desarrollo («los atendía»). No obliga por sí solo a entender un oficio institucional ni una valoración social del servicio. Fuente: SBLGNT, Mc 1,31; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    ocaso: ["Al ponerse el sol","La precisión ὅτε ἔδυ ὁ ἥλιος («cuando se puso el sol») sigue al episodio situado en sábado (1,21). Puede aludir al término del descanso sabático, aunque el narrador no explica expresamente la motivación de quienes esperaron. Fuente: SBLGNT, Mc 1,21.32; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    ciudad: ["Toda la ciudad","ὅλη ἡ πόλις es una generalización narrativa; no constituye un censo literal de asistentes. θύρα designa la puerta de la casa mencionada en 1,29 según la continuidad del relato. Fuente: SBLGNT, Mc 1,33; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    muchos: ["Todos y muchos","En 1,32 se dice que llevaban a «todos» los enfermos; en 1,34 se afirma que curó a «muchos». La alternancia no exige convertir «muchos» en «todos»: se conserva la diferencia del griego. Fuente: SBLGNT, Mc 1,32–34; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    silenciomarc: ["El silencio de los demonios","El narrador explica la prohibición con ὅτι ᾔδεισαν αὐτόν («porque lo conocían»). Su relación con el motivo literario del secreto en Marcos es materia de interpretación; aquí no se explicita qué conocimiento tenían. Fuente: SBLGNT, Mc 1,34; https://biblia.com/bible/sblgnt/mark/1/29-34"],
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
    titulo: ['El comienzo', 'La lectura adoptada por SBLGNT termina en χριστοῦ («Cristo»). Numerosos testigos incluyen además υἱοῦ θεοῦ («Hijo de Dios»), que aparece en la Vulgata. La inclusión de esas palabras es una variante textual importante, no una omisión accidental de nuestra traducción. La autenticidad de la lectura larga es debatida: Tommy Wasserman defiende su originalidad, mientras otras interpretaciones consideran secundaria la adición. Véanse Wasserman, «The ‘Son of God’ was in the Beginning (Mark 1:1)», Journal of Theological Studies 62.1 (2011), pp. 20–50, DOI:10.1093/jts/flr013; Kalle O. Lundahl, «Mark 1:1: How to Display Differences in Biblical Manuscripts in Editions and Translations», Harvard Theological Review 117.1 (2024), DOI:10.1017/S0017816023000378.'],
    cita: ['Isaías y Malaquías', 'Aunque la introducción menciona a Isaías, la primera cita recuerda Mal 3,1 (y Ex 23,20); la segunda procede de Is 40,3. Algunos testigos griegos sustituyen «en Isaías, el profeta» por «en los profetas». La lectura «Isaías» es más difícil por la combinación de citas y suele considerarse anterior a la generalización «los profetas», aunque esto es un juicio crítico, no una certeza paleográfica. Cf. Daniel B. Wallace, «Mark 1:2 and New Testament Textual Criticism», Bible.org (2004), https://bible.org/article/mark-12-and-new-testament-textual-criticism.'],
    desierto: ['Una voz en el desierto', 'La cita reproduce Is 40,3 y enlaza con la aparición de Juan en Mc 1,4. En el hebreo de Isaías, «en el desierto» se relaciona naturalmente con la orden de preparar el camino; en Marcos puede oírse como localización de la voz. La puntuación actual decide una lectura sintáctica, no es un dato manuscrito indiscutible. Fuentes: Is 40,3 (texto hebreo y traducciones antiguas); Cambridge Bible for Schools and Colleges, comentario a Is 40,3, https://biblehub.com/commentaries/isaiah/40-3.htm; Holmes (ed.), SBLGNT, Mc 1,3 (2010).'],
    metanoia: ['μετάνοια y bautismo', 'μετάνοια designa un cambio de orientación vital; «conversión» no la reduce a pesar subjetivo. Los participios βαπτίζων y κηρύσσων presentan el bautizar y el proclamar como actividades relacionadas de Juan. La conexión entre el rito, la conversión y el perdón en Mc 1,4 es objeto de discusión; Flavio Josefo (Antigüedades 18.116–117) presenta otra formulación del bautismo de Juan. Fuente: Artur Malina, «Baptism of Repentance for the Remission of Sins: Mark 1:4 in Its Context», The Biblical Annals 11.4 (2021), pp. 689–707, DOI:10.31743/biban.12794; Josefo, Ant. 18.116–117.'],
    langostas: ['ἀκρίδες y vestimenta profética', 'ἀκρίδες designa langostas (insectos), alimento permitido en Lev 11,21–22. La prenda de pelo de camello y el cinturón de cuero recuerdan la caracterización de Elías en 2 Re 1,8; se trata de una relación intertextual plausible, no de una identificación explícita en este versículo. Cf. también Zac 13,4 (manto de pelo como indumentaria profética). Fuentes: Lev 11,21–22; 2 Re 1,8; Zac 13,4; Cambridge Bible for Schools and Colleges, comentario a Mc 1,6, https://www.biblehub.com/commentaries/mark/1-6.htm.'],
    espiritu: ['Agua y Espíritu', 'La oposición entre ὕδατι («con agua», dativo sin preposición) y ἐν πνεύματι ἁγίῳ («en/con Espíritu Santo») se conserva en el griego. La traducción en español emplea «con» en ambos casos.'],
    cielos: ['Los cielos rasgados', 'σχιζομένους es más intenso que «abiertos»: literalmente, «rasgándose». La Vulgata dice apertos y añade «permaneciendo sobre él», expresión que no figura en el texto griego aquí adoptado.'],
    hijo: ['La voz celeste', 'La fórmula reúne resonancias del Salmo 2,7 y de Isaías 42,1. Son alusiones interpretativas, no citas literales idénticas.'],
    expulsa: ['ἐκβάλλει', 'El presente histórico y el verbo «echar fuera, expulsar» imprimen brusquedad al relato; «lo empuja» refleja esa fuerza mejor que «lo conduce».'],
    cuarenta: ['Los cuarenta días', 'Marcos menciona cuarenta días, pero no añade aquí «cuarenta noches». La Vulgata Clementina sí incorpora esa expresión. La diferencia se conserva en nuestras columnas.'],
  };

  // Glosario inicial seleccionado. Otras formas se incorporarán en nuevas pasadas editoriales.
  const glossary = {
    "ἐξελθόντες": ["ἐξέρχομαι","participio aoristo activo, nominativo masculino plural","al salir"],
    "ἦλθον": ["ἔρχομαι","aoristo indicativo activo, 3.ª plural","fueron"],
    "οἰκίαν": ["οἰκία","acusativo singular femenino","casa"],
    "Σίμωνος": ["Σίμων","genitivo singular masculino","de Simón"],
    "Ἀνδρέου": ["Ἀνδρέας","genitivo singular masculino","de Andrés"],
    "Ἰακώβου": ["Ἰάκωβος","genitivo singular masculino","de Santiago"],
    "Ἰωάννου": ["Ἰωάννης","genitivo singular masculino","de Juan"],
    "πενθερὰ": ["πενθερά","nominativo singular femenino","suegra"],
    "κατέκειτο": ["κατάκειμαι","imperfecto indicativo medio, 3.ª singular","estaba acostada"],
    "πυρέσσουσα": ["πυρέσσω","participio presente activo, nominativo femenino singular","con fiebre"],
    "λέγουσιν": ["λέγω","presente indicativo activo, 3.ª plural","dicen"],
    "προσελθὼν": ["προσέρχομαι","participio aoristo activo, nominativo masculino singular","acercándose"],
    "ἤγειρεν": ["ἐγείρω","aoristo indicativo activo, 3.ª singular","levantó"],
    "κρατήσας": ["κρατέω","participio aoristo activo, nominativo masculino singular","tomando"],
    "χειρός": ["χείρ","genitivo singular femenino","mano"],
    "ἀφῆκεν": ["ἀφίημι","aoristo indicativo activo, 3.ª singular","dejó"],
    "πυρετός": ["πυρετός","nominativo singular masculino","fiebre"],
    "διηκόνει": ["διακονέω","imperfecto indicativo activo, 3.ª singular","atendía, servía"],
    "Ὀψίας": ["ὄψιος","genitivo singular femenino","tarde"],
    "γενομένης": ["γίγνομαι","participio aoristo medio, genitivo femenino singular","al llegar"],
    "ἔδυ": ["δύω","aoristo indicativo activo, 3.ª singular","se puso"],
    "ἥλιος": ["ἥλιος","nominativo singular masculino","sol"],
    "ἔφερον": ["φέρω","imperfecto indicativo activo, 3.ª plural","llevaban"],
    "πάντας": ["πᾶς","acusativo plural masculino","todos"],
    "κακῶς": ["κακῶς","adverbio","mal"],
    "ἔχοντας": ["ἔχω","participio presente activo, acusativo masculino plural","que estaban"],
    "δαιμονιζομένους": ["δαιμονίζομαι","participio presente medio-pasivo, acusativo masculino plural","poseídos por demonios"],
    "ὅλη": ["ὅλος","nominativo singular femenino","toda"],
    "πόλις": ["πόλις","nominativo singular femenino","ciudad"],
    "ἐπισυνηγμένη": ["ἐπισυνάγω","participio perfecto medio-pasivo, nominativo femenino singular","reunida"],
    "θύραν": ["θύρα","acusativo singular femenino","puerta"],
    "ἐθεράπευσεν": ["θεραπεύω","aoristo indicativo activo, 3.ª singular","curó"],
    "πολλοὺς": ["πολύς","acusativo plural masculino","muchos"],
    "ποικίλαις": ["ποικίλος","dativo plural femenino","diversas"],
    "νόσοις": ["νόσος","dativo plural femenino","enfermedades"],
    "δαιμόνια": ["δαιμόνιον","acusativo plural neutro","demonios"],
    "πολλὰ": ["πολύς","acusativo plural neutro","muchos"],
    "ἐξέβαλεν": ["ἐκβάλλω","aoristo indicativo activo, 3.ª singular","expulsó"],
    "ἤφιεν": ["ἀφίημι","imperfecto indicativo activo, 3.ª singular","permitía"],
    "λαλεῖν": ["λαλέω","infinitivo presente activo","hablar"],
    "ᾔδεισαν": ["οἶδα","pluscuamperfecto indicativo activo con valor imperfectivo, 3.ª plural","conocían"],
    "αὐτόν": ["αὐτός","acusativo singular masculino","a él"],
    "αὐτὴν": ["αὐτός","acusativo singular femenino","a ella"],
    "αὐτῆς": ["αὐτός","genitivo singular femenino","de ella"],
    "αὐτῷ": ["αὐτός","dativo singular masculino","a él"],
    "αὐτοῖς": ["αὐτός","dativo plural masculino","a ellos"],
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


  // Cobertura de todos los términos griegos (MorphGNT 6.12, CC BY-SA 3.0).
  // Las fichas son posicionales, para distinguir formas iguales con distintos análisis.
  const externalMorphology = window.edicionVivaMarcosMorphology;
  if (!externalMorphology || !externalMorphology.verses || !externalMorphology.glosses) {
    throw new Error('Falta cargar morphology.js antes de marcos.js');
  }
  const morphologyByVerse = externalMorphology.verses;

  function greekGrammar(pos, code) {
    const category = {
      'A-': 'adjetivo', 'C-': 'conjunción', 'D-': 'adverbio',
      'I-': 'interjección', 'N-': 'sustantivo', 'P-': 'preposición',
      'RA': 'artículo determinado', 'RD': 'pronombre demostrativo',
      'RI': 'pronombre interrogativo o indefinido', 'RP': 'pronombre personal',
      'RR': 'pronombre relativo', 'V-': 'verbo', 'X-': 'partícula'
    }[pos] || 'forma gramatical';
    const cases = {N:'nominativo',G:'genitivo',D:'dativo',A:'acusativo'};
    const numbers = {S:'singular',P:'plural'};
    const genders = {M:'masculino',F:'femenino',N:'neutro'};
    const degrees = {C:'comparativo',S:'superlativo'};
    const voices = {A:'activa',M:'media',P:'pasiva'};
    const tenses = {P:'presente',I:'imperfecto',F:'futuro',A:'aoristo',X:'perfecto',Y:'pluscuamperfecto'};
    const moods = {I:'indicativo',D:'imperativo',S:'subjuntivo',O:'optativo',N:'infinitivo',P:'participio'};
    const persons = {'1':'1.ª persona','2':'2.ª persona','3':'3.ª persona'};
    const parts = [];
    if (pos === 'V-') {
      if (code[1] !== '-') parts.push(tenses[code[1]] || 'tiempo por determinar');
      if (code[3] !== '-') parts.push(moods[code[3]] || 'modo por determinar');
      if (code[2] !== '-') parts.push('voz ' + (voices[code[2]] || code[2]));
      if (code[0] !== '-') parts.push(persons[code[0]] || 'persona por determinar');
    }
    if (code[4] !== '-') parts.push(cases[code[4]] || 'caso por determinar');
    if (code[5] !== '-') parts.push(numbers[code[5]] || 'número por determinar');
    if (code[6] !== '-') parts.push(genders[code[6]] || 'género por determinar');
    if (code[7] !== '-') parts.push('grado ' + (degrees[code[7]] || code[7]));
    return category + (parts.length ? '; ' + parts.join(', ') : '');
  }

  function analyzeWord(form, record) {
    const [, lemma, pos, parse] = record;
    const contextual = Object.hasOwn(glossary, form) ? glossary[form][2] : null;
    return [lemma, greekGrammar(pos, parse), contextual || externalMorphology.glosses[lemma]];
  }

  // Completar el índice de formas para preservar los diccionarios locales anteriores.
  for (const records of Object.values(morphologyByVerse)) {
    for (const record of records) {
      if (!Object.hasOwn(glossary, record[0])) {
        glossary[record[0]] = analyzeWord(record[0], record);
      }
    }
  }

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
  let selectedAnalysis = null;
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
  function setParadigmLink(lemma, partOfSpeech) {
    const link = $('#word-paradigm');
    const kind = partOfSpeech === 'V-' ? 'conjugación' :
      /^(N-|A-|RA|RD|RI|RP|RR)$/.test(partOfSpeech) ? 'declinación' : 'entrada';
    link.textContent = kind === 'entrada' ? 'Ver entrada en Wiktionary ↗' :
      'Ver ' + kind + ' en Wiktionary ↗';
    link.href = 'https://en.wiktionary.org/wiki/' + encodeURIComponent(lemma) + '#Ancient_Greek';
    link.title = 'Consultar el lema ' + lemma + ' en Wiktionary; los paradigmas disponibles pueden corresponder a variedades distintas del griego koiné.';
    link.hidden = false;
  }

  function showWord(form, anchor, record) {
    closePanels();
    selectedWord = form;
    selectedAnalysis = analyzeWord(form, record);
    const [lemma, morph, gloss] = selectedAnalysis;
    $('#word-form').textContent = form;
    $('#word-lemma').textContent = lemma;
    $('#word-morphology').textContent = morph;
    $('#word-gloss').textContent = gloss;
    setParadigmLink(lemma, record[2]);
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

  function greekContent(container, text, verse) {
    // Ninguna palabra puede quedar sin ficha: validación en tiempo de renderizado.
    const records = morphologyByVerse[verse];
    if (!records) throw new Error('Faltan fichas para Marcos 1,' + verse);
    const tokens = text.split(/(\p{L}[\p{L}\p{M}\u1fbdʼ’]*)/u);
    let i = 0;
    tokens.forEach(token => {
      if (!/^\p{L}/u.test(token)) {
        container.append(document.createTextNode(token));
        return;
      }
      const record = records[i++];
      if (!record || record[0] !== token) {
        throw new Error('Análisis ausente o desajustado en Marcos 1,' + verse + ': ' + token);
      }
      const button = makeElement('button', 'token', token);
      button.type = 'button';
      button.title = 'Ficha: ' + record[1];
      button.setAttribute('aria-label', token + '. Consultar ficha morfológica');
      button.addEventListener('click', () => showWord(token, button, record));
      container.append(button);
    });
    if (i !== records.length) throw new Error('Sobran fichas para Marcos 1,' + verse);
  }

  const sections = {
    1: ['1,1–8', 'Juan el Bautista'],
    9: ['1,9–11', 'El bautismo de Jesús'],
    12: ['1,12–13', 'En el desierto'],
    14: ['1,14–15', 'El anuncio en Galilea'],
    16: ['1,16–20', 'Los primeros discípulos'],
    21: ['1,21–28', 'En la sinagoga de Cafarnaúm'],
    29: ['1,29–34', 'En casa de Simón y al atardecer'],
    35: ['1,35–39', 'Oración y predicación en Galilea'],
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
    greekContent(original, p.gr, p.n);
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
    dictionary[selectedWord] = selectedAnalysis;
    persist();
    $('#save-word').setAttribute('aria-pressed', 'true');
    $('#save-word').textContent = '✓ Guardada en mi diccionario';
  });
  updateDictionary();
  window.addEventListener('edicion-viva:dictionary-updated', event => {
    if (event.detail?.language === 'gr') {
      dictionary = readDictionary();
      updateDictionary();
    }
  });

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
