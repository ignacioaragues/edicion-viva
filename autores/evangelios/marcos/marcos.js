/* Marcos 1,1–45; 2,1–20 · SBLGNT (signos de aparato omitidos), Vulgata Clementina, traducción propia. */
(() => {
  'use strict';

  const passages = [
    { n: 1, gr: 'Ἀρχὴ τοῦ εὐαγγελίου Ἰησοῦ χριστοῦ.', es: 'Comienzo del evangelio de Jesucristo.', la: 'Initium Evangelii Jesu Christi, Filii Dei.', notes: ['titulo'] },
    { n: 2, gr: 'Καθὼς γέγραπται ἐν τῷ Ἠσαΐᾳ τῷ προφήτῃ· Ἰδοὺ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου, ὃς κατασκευάσει τὴν ὁδόν σου·', es: 'Como está escrito en Isaías, el profeta: «Mira, envío a mi mensajero delante de ti, que preparará tu camino».', la: 'Sicut scriptum est in Isaia propheta: Ecce ego mitto angelum meum ante faciem tuam, qui præparabit viam tuam ante te.', notes: ['cita'] },
    { n: 3, gr: 'φωνὴ βοῶντος ἐν τῇ ἐρήμῳ· Ἑτοιμάσατε τὴν ὁδὸν κυρίου, εὐθείας ποιεῖτε τὰς τρίβους αὐτοῦ,', es: '«Voz de uno que clama en el desierto: preparen el camino del Señor, enderecen sus senderos».', la: 'Vox clamantis in deserto: Parate viam Domini, rectas facite semitas ejus.', notes: ['desierto'] },
    { n: 4, gr: 'ἐγένετο Ἰωάννης ὁ βαπτίζων ἐν τῇ ἐρήμῳ κηρύσσων βάπτισμα μετανοίας εἰς ἄφεσιν ἁμαρτιῶν.', es: 'Apareció Juan, que bautizaba en el desierto y proclamaba un bautismo de conversión para el perdón de los pecados.', la: 'Fuit Joannes in deserto baptizans, et prædicans baptismum pœnitentiæ in remissionem peccatorum.', notes: ['metanoia'] },
    { n: 5, gr: 'καὶ ἐξεπορεύετο πρὸς αὐτὸν πᾶσα ἡ Ἰουδαία χώρα καὶ οἱ Ἱεροσολυμῖται πάντες, καὶ ἐβαπτίζοντο ὑπʼ αὐτοῦ ἐν τῷ Ἰορδάνῃ ποταμῷ ἐξομολογούμενοι τὰς ἁμαρτίας αὐτῶν.', es: 'Acudían a él toda la región de Judea y todos los habitantes de Jerusalén; Juan los bautizaba en el río Jordán mientras confesaban sus pecados.', la: 'Et egrediebatur ad eum omnis Judææ regio, et Jerosolymitæ universi, et baptizabantur ab illo in Jordanis flumine, confitentes peccata sua.', notes: [] },
    { n: 6, gr: 'καὶ ἦν ὁ Ἰωάννης ἐνδεδυμένος τρίχας καμήλου καὶ ζώνην δερματίνην περὶ τὴν ὀσφὺν αὐτοῦ, καὶ ἔσθων ἀκρίδας καὶ μέλι ἄγριον.', es: 'Juan iba vestido con pelo de camello y llevaba un cinturón de cuero alrededor de la cintura; comía langostas y miel silvestre.', la: 'Et erat Joannes vestitus pilis cameli, et zona pellicea circa lumbos ejus, et locustas et mel silvestre edebat.', notes: ['langostas'] },
    { n: 7, gr: 'καὶ ἐκήρυσσεν λέγων· Ἔρχεται ὁ ἰσχυρότερός μου ὀπίσω μου, οὗ οὐκ εἰμὶ ἱκανὸς κύψας λῦσαι τὸν ἱμάντα τῶν ὑποδημάτων αὐτοῦ·', es: 'Y proclamaba: «Después de mí viene alguien más poderoso que yo; ni siquiera soy digno de agacharme para desatar la correa de sus sandalias».', la: 'Et prædicabat dicens: Venit fortior me post me, cujus non sum dignus procumbens solvere corrigiam calceamentorum ejus.', notes: ['sandalias'] },
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
    {"n":40,"gr":"Καὶ ἔρχεται πρὸς αὐτὸν λεπρὸς παρακαλῶν αὐτὸν καὶ γονυπετῶν λέγων αὐτῷ ὅτι Ἐὰν θέλῃς δύνασαί με καθαρίσαι.","es":"Se le acercó un hombre con una enfermedad de la piel, que le suplicaba de rodillas: «Si quieres, puedes purificarme».","la":"Et venit ad eum leprosus deprecans eum: et genu flexo dixit ei: Si vis, potes me mundare.","notes":["lepra","rodillas"]},
    {"n":41,"gr":"καὶ ὀργισθεὶς ἐκτείνας τὴν χεῖρα αὐτοῦ ἥψατο καὶ λέγει αὐτῷ· Θέλω, καθαρίσθητι·","es":"Enojado, extendió la mano, lo tocó y le dijo: «Quiero. Queda purificado».","la":"Jesus autem misertus ejus, extendit manum suam: et tangens eum, ait illi: Volo: mundare.","notes":["enojo"]},
    {"n":42,"gr":"καὶ εὐθὺς ἀπῆλθεν ἀπʼ αὐτοῦ ἡ λέπρα, καὶ ἐκαθαρίσθη.","es":"Y enseguida la enfermedad desapareció de él y quedó purificado.","la":"Et cum dixisset, statim discessit ab eo lepra, et mundatus est.","notes":["purificacion"]},
    {"n":43,"gr":"καὶ ἐμβριμησάμενος αὐτῷ εὐθὺς ἐξέβαλεν αὐτόν,","es":"Después de advertirle severamente, lo despidió de inmediato","la":"Et comminatus est ei, statimque ejecit illum,","notes":["severidad"]},
    {"n":44,"gr":"καὶ λέγει αὐτῷ· Ὅρα μηδενὶ μηδὲν εἴπῃς, ἀλλὰ ὕπαγε σεαυτὸν δεῖξον τῷ ἱερεῖ καὶ προσένεγκε περὶ τοῦ καθαρισμοῦ σου ἃ προσέταξεν Μωϋσῆς εἰς μαρτύριον αὐτοῖς.","es":"y le dijo: «Mira, no le digas nada a nadie. Ve, preséntate ante el sacerdote y ofrece por tu purificación lo que prescribió Moisés, para que les sirva de testimonio».","la":"et dicit ei: Vide nemini dixeris: sed vade, ostende te principi sacerdotum, et offer pro emundatione tua, quæ præcepit Moyses in testimonium illis.","notes":["sacerdote"]},
    {"n":45,"gr":"ὁ δὲ ἐξελθὼν ἤρξατο κηρύσσειν πολλὰ καὶ διαφημίζειν τὸν λόγον, ὥστε μηκέτι αὐτὸν δύνασθαι φανερῶς εἰς πόλιν εἰσελθεῖν, ἀλλὰ ἔξω ἐπʼ ἐρήμοις τόποις ἦν· καὶ ἤρχοντο πρὸς αὐτὸν πάντοθεν.","es":"Pero él, al salir, empezó a proclamarlo insistentemente y a divulgar la noticia, de modo que Jesús ya no podía entrar abiertamente en ninguna ciudad, sino que permanecía afuera, en lugares despoblados. Y acudían a él de todas partes.","la":"At ille egressus cœpit prædicare, et diffamare sermonem, ita ut jam non posset manifeste introire in civitatem, sed foris in desertis locis esset, et conveniebant ad eum undique.","notes":["divulgacion"]},
    { chapter: 2, n: 1, gr: "Καὶ εἰσελθὼν πάλιν εἰς Καφαρναοὺμ δι’ ἡμερῶν ἠκούσθη ὅτι ἐν οἴκῳ ἐστίν·", es: "Cuando volvió a entrar en Cafarnaúm, al cabo de unos días, se supo que estaba en casa.", la: "Et iterum intravit Capharnaum post dies,", notes: ['mc2casa'] },
    { chapter: 2, n: 2, gr: "καὶ συνήχθησαν πολλοὶ ὥστε μηκέτι χωρεῖν μηδὲ τὰ πρὸς τὴν θύραν, καὶ ἐλάλει αὐτοῖς τὸν λόγον.", es: "Se reunió tanta gente que ya no quedaba lugar, ni siquiera junto a la puerta, y él les anunciaba el mensaje.", la: "et auditum est quod in domo esset, et convenerunt multi, ita ut non caperet neque ad januam, et loquebatur eis verbum.", notes: ['mc2orden'] },
    { chapter: 2, n: 3, gr: "καὶ ἔρχονται φέροντες πρὸς αὐτὸν παραλυτικὸν αἰρόμενον ὑπὸ τεσσάρων.", es: "Entonces llegaron unos hombres que le traían a una persona paralizada, transportada entre cuatro.", la: "Et venerunt ad eum ferentes paralyticum, qui a quatuor portabatur.", notes: ['mc2camilla'] },
    { chapter: 2, n: 4, gr: "καὶ μὴ δυνάμενοι προσενέγκαι αὐτῷ διὰ τὸν ὄχλον ἀπεστέγασαν τὴν στέγην ὅπου ἦν, καὶ ἐξορύξαντες χαλῶσι τὸν κράβαττον ὅπου ὁ παραλυτικὸς κατέκειτο.", es: "Como no podían acercárselo por la multitud, levantaron la cubierta del techo donde estaba Jesús y, tras abrir un hueco, bajaron la camilla en la que yacía el paralítico.", la: "Et cum non possent offerre eum illi præ turba, nudaverunt tectum ubi erat: et patefacientes submiserunt grabatum in quo paralyticus jacebat.", notes: ['mc2techo'] },
    { chapter: 2, n: 5, gr: "καὶ ἰδὼν ὁ Ἰησοῦς τὴν πίστιν αὐτῶν λέγει τῷ παραλυτικῷ· Τέκνον, ἀφίενταί σου αἱ ἁμαρτίαι.", es: "Al ver Jesús la confianza de ellos, le dice al paralítico: «Hijo, tus pecados son perdonados».", la: "Cum autem vidisset Jesus fidem illorum, ait paralytico: Fili, dimittuntur tibi peccata tua.", notes: ["mc2perdon"] },
    {"chapter":2,"n":6,"gr":"ἦσαν δέ τινες τῶν γραμματέων ἐκεῖ καθήμενοι καὶ διαλογιζόμενοι ἐν ταῖς καρδίαις αὐτῶν·","es":"Había allí algunos escribas sentados, que deliberaban en su interior:","la":"Erant autem illic quidam de scribis sedentes, et cogitantes in cordibus suis:","notes":["mc2escribas"]},
    {"chapter":2,"n":7,"gr":"Τί οὗτος οὕτως λαλεῖ; βλασφημεῖ· τίς δύναται ἀφιέναι ἁμαρτίας εἰ μὴ εἷς ὁ θεός;","es":"«¿Por qué habla este así? ¡Blasfema! ¿Quién puede perdonar pecados sino solo Dios?»","la":"Quid hic sic loquitur? blasphemat. Quis potest dimittere peccata, nisi solus Deus?","notes":["mc2blasfemia"]},
    {"chapter":2,"n":8,"gr":"καὶ εὐθὺς ἐπιγνοὺς ὁ Ἰησοῦς τῷ πνεύματι αὐτοῦ ὅτι οὕτως διαλογίζονται ἐν ἑαυτοῖς λέγει αὐτοῖς· Τί ταῦτα διαλογίζεσθε ἐν ταῖς καρδίαις ὑμῶν;","es":"Y enseguida Jesús, al advertir en su espíritu que razonaban así en su interior, les dice: «¿Por qué piensan estas cosas en sus corazones?»","la":"Quo statim cognito Jesus spiritu suo, quia sic cogitarent intra se, dicit illis: Quid ista cogitatis in cordibus vestris?","notes":["mc2interior","mc2variantes8"]},
    {"chapter":2,"n":9,"gr":"τί ἐστιν εὐκοπώτερον, εἰπεῖν τῷ παραλυτικῷ· Ἀφίενταί σου αἱ ἁμαρτίαι, ἢ εἰπεῖν· Ἔγειρε καὶ ἆρον τὸν κράβαττόν σου καὶ περιπάτει;","es":"¿Qué es más fácil: decirle al paralítico «Tus pecados son perdonados», o decirle «Levántate, toma tu camilla y camina»?","la":"Quid est facilius dicere paralytico: Dimittuntur tibi peccata tua: an dicere: Surge, tolle grabatum tuum, et ambula?","notes":["mc2facil","mc2variantes9"]},
    {"chapter":2,"n":10,"gr":"ἵνα δὲ εἰδῆτε ὅτι ἐξουσίαν ἔχει ὁ υἱὸς τοῦ ἀνθρώπου ἐπὶ τῆς γῆς ἀφιέναι ἁμαρτίας— λέγει τῷ παραλυτικῷ·","es":"Pero para que sepan que el Hijo del hombre tiene autoridad en la tierra para perdonar pecados… —le dice al paralítico—:","la":"Ut autem sciatis quia Filius hominis habet potestatem in terra dimittendi peccata (ait paralytico),","notes":["mc2autoridad","mc2transicion"]},
    {"chapter":2,"n":11,"gr":"Σοὶ λέγω, ἔγειρε ἆρον τὸν κράβαττόν σου καὶ ὕπαγε εἰς τὸν οἶκόν σου.","es":"A ti te digo: levántate, toma tu camilla y vete a tu casa.","la":"tibi dico: Surge, tolle grabatum tuum, et vade in domum tuam.","notes":["mc2orden11"]},
    {"chapter":2,"n":12,"gr":"καὶ ἠγέρθη καὶ εὐθὺς ἄρας τὸν κράβαττον ἐξῆλθεν ἔμπροσθεν πάντων, ὥστε ἐξίστασθαι πάντας καὶ δοξάζειν τὸν θεὸν λέγοντας ὅτι Οὕτως οὐδέποτε εἴδομεν.","es":"Y se levantó y, tomando enseguida la camilla, salió delante de todos. Todos quedaron asombrados y glorificaban a Dios, diciendo: «Nunca habíamos visto algo así».","la":"Et statim surrexit ille: et, sublato grabato, abiit coram omnibus, ita ut mirarentur omnes, et honorificent Deum, dicentes: Quia numquam sic vidimus.","notes":["mc2reaccion12","mc2variantes12"]},
    {"chapter":2,"n":13,"gr":"Καὶ ἐξῆλθεν πάλιν παρὰ τὴν θάλασσαν· καὶ πᾶς ὁ ὄχλος ἤρχετο πρὸς αὐτόν, καὶ ἐδίδασκεν αὐτούς.","es":"Volvió a salir junto al mar; toda la multitud acudía a él y él les enseñaba.","la":"Et egressus est rursus ad mare, omnisque turba veniebat ad eum, et docebat eos.","notes":["mc2orilla"]},
    {"chapter":2,"n":14,"gr":"καὶ παράγων εἶδεν Λευὶν τὸν τοῦ Ἁλφαίου καθήμενον ἐπὶ τὸ τελώνιον, καὶ λέγει αὐτῷ· Ἀκολούθει μοι. καὶ ἀναστὰς ἠκολούθησεν αὐτῷ.","es":"Al pasar, vio a Leví, hijo de Alfeo, sentado en el puesto de recaudación, y le dijo: «Sígueme». Él se levantó y lo siguió.","la":"Et cum præteriret, vidit Levi Alphæi sedentem ad telonium, et ait illi: Sequere me. Et surgens secutus est eum.","notes":["mc2levi"]},
    {"chapter":2,"n":15,"gr":"Καὶ γίνεται κατακεῖσθαι αὐτὸν ἐν τῇ οἰκίᾳ αὐτοῦ, καὶ πολλοὶ τελῶναι καὶ ἁμαρτωλοὶ συνανέκειντο τῷ Ἰησοῦ καὶ τοῖς μαθηταῖς αὐτοῦ, ἦσαν γὰρ πολλοὶ καὶ ἠκολούθουν αὐτῷ.","es":"Y sucedió que, mientras él estaba a la mesa en su casa, muchos recaudadores de impuestos y personas consideradas pecadoras compartían la mesa con Jesús y sus discípulos, pues eran muchos los que lo seguían.","la":"Et factum est, cum accumberet in domo illius, multi publicani et peccatores simul discumbebant cum Jesu et discipulis ejus: erant enim multi, qui et sequebantur eum.","notes":["mc2mesa"]},
    {"chapter":2,"n":16,"gr":"καὶ οἱ γραμματεῖς τῶν Φαρισαίων ἰδόντες ὅτι ἐσθίει μετὰ τῶν ἁμαρτωλῶν καὶ τελωνῶν ἔλεγον τοῖς μαθηταῖς αὐτοῦ· Ὅτι μετὰ τῶν τελωνῶν καὶ ἁμαρτωλῶν ἐσθίει;","es":"Los escribas del grupo de los fariseos, al ver que comía con personas consideradas pecadoras y recaudadores de impuestos, preguntaban a sus discípulos: «¿Por qué come con recaudadores y pecadores?»","la":"Et scribæ et pharisæi videntes quia manducaret cum publicanis et peccatoribus, dicebant discipulis ejus: Quare cum publicanis et peccatoribus manducat et bibit Magister vester?","notes":["mc2escribas"]},
    {"chapter":2,"n":17,"gr":"καὶ ἀκούσας ὁ Ἰησοῦς λέγει αὐτοῖς ὅτι Οὐ χρείαν ἔχουσιν οἱ ἰσχύοντες ἰατροῦ ἀλλʼ οἱ κακῶς ἔχοντες· οὐκ ἦλθον καλέσαι δικαίους ἀλλὰ ἁμαρτωλούς.","es":"Jesús lo oyó y les dijo: «No son los que están sanos quienes necesitan médico, sino los enfermos. No vine a llamar a los justos, sino a los pecadores».","la":"Hoc audito Jesus ait illis: Non necesse habent sani medico, sed qui male habent: non enim veni vocare justos, sed peccatores.","notes":["mc2medico","mc2arrepentimiento"]},
    {"chapter":2,"n":18,"gr":"Καὶ ἦσαν οἱ μαθηταὶ Ἰωάννου καὶ οἱ Φαρισαῖοι νηστεύοντες. καὶ ἔρχονται καὶ λέγουσιν αὐτῷ· Διὰ τί οἱ μαθηταὶ Ἰωάννου καὶ οἱ μαθηταὶ τῶν Φαρισαίων νηστεύουσιν, οἱ δὲ σοὶ μαθηταὶ οὐ νηστεύουσιν;","es":"Los discípulos de Juan y los fariseos estaban ayunando. Unos se acercan y le preguntan: «¿Por qué ayunan los discípulos de Juan y los discípulos de los fariseos, mientras que tus discípulos no ayunan?»","la":"Et erant discipuli Joannis et pharisæi jejunantes: et veniunt, et dicunt illi: Quare discipuli Joannis et pharisæorum jejunant, tui autem discipuli non jejunant?","notes":["mc2ayuno18"]},
    {"chapter":2,"n":19,"gr":"καὶ εἶπεν αὐτοῖς ὁ Ἰησοῦς· Μὴ δύνανται οἱ υἱοὶ τοῦ νυμφῶνος ἐν ᾧ ὁ νυμφίος μετʼ αὐτῶν ἐστιν νηστεύειν; ὅσον χρόνον ἔχουσιν τὸν νυμφίον μετʼ αὐτῶν οὐ δύνανται νηστεύειν·","es":"Jesús les dijo: «¿Acaso pueden ayunar los invitados a una boda mientras el novio está con ellos? Mientras tengan al novio con ellos, no pueden ayunar».","la":"Et ait illis Jesus: Numquid possunt filii nuptiarum, quamdiu sponsus cum illis est, jejunare? Quanto tempore habent secum sponsum, non possunt jejunare.","notes":["mc2novio19"]},
    {"chapter":2,"n":20,"gr":"ἐλεύσονται δὲ ἡμέραι ὅταν ἀπαρθῇ ἀπʼ αὐτῶν ὁ νυμφίος, καὶ τότε νηστεύσουσιν ἐν ἐκείνῃ τῇ ἡμέρᾳ.","es":"Pero vendrán días en que les será arrebatado el novio, y entonces ayunarán, aquel día.","la":"Venient autem dies cum auferetur ab eis sponsus: et tunc jejunabunt in illis diebus.","notes":["mc2ayuno20"]}
  ];

  const notes = {
    mc2ayuno20: ["El día de la ausencia", "ὅταν con subjuntivo (ἀπαρθῇ, aoristo pasivo de ἀπαίρω) sitúa la separación en un momento futuro sin precisar su fecha. ἐν ἐκείνῃ τῇ ἡμέρᾳ es singular («aquel día»), pese al plural inicial ἡμέραι. La Clementina ofrece in illis diebus («en aquellos días»), una diferencia que no se armoniza. Algunas tradiciones griegas también presentan el plural ἐν ἐκείναις ταῖς ἡμέραις; SBLGNT adopta el singular. La relación con la muerte de Jesús es una interpretación narrativa, no el significado gramatical obligatorio de ἀπαρθῇ. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 2,20, https://biblia.com/bible/sblgnt/mark/2/20; cotejo de ediciones en https://www.biblehub.com/texts/mark/2-20.htm; Vulgata Clementina, Mc 2,20, https://biblia.com/bible/vulgataclem/mark/2/18-22."] ,
    mc2novio19: ["Los acompañantes del novio", "οἱ υἱοὶ τοῦ νυμφῶνος significa literalmente «los hijos de la sala nupcial»: en contexto, los participantes de una boda, no hijos biológicos. La interrogación con μή espera una respuesta negativa, que se hace explícita en οὐ δύνανται. La imagen contrasta la celebración nupcial con el ayuno. La identificación simbólica del novio con Jesús es una interpretación del relato. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 2,19, https://www.biblestudytools.com/sblg/mark/2-19.html; Marvin R. Vincent, Word Studies in the New Testament (1887–1900), comentario a Mc 2,19, https://biblehub.com/commentaries/mark/2-19.htm; Vulgata Clementina, Mc 2,19, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/2/."],
    mc2ayuno18: ["El ayuno y los grupos mencionados", "El imperfecto perifrástico ἦσαν ... νηστεύοντες presenta una práctica en curso; el presente histórico ἔρχονται introduce la pregunta. En la primera cláusula figuran los fariseos; en la pregunta, los discípulos de los fariseos: la distinción debe conservarse. El griego no identifica a quienes formulan la pregunta. La Clementina dice primero «discipuli Joannis et pharisæi» y luego «discipuli Joannis et pharisæorum». Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 2,18, https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 2,18, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/2/; J. K. Tauber, MorphGNT SBLGNT 6.12, Mc 2,18, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt."],
    mc2escribas: ["Escribas vinculados a los fariseos", "El genitivo τῶν Φαρισαίων precisa la adscripción de los escribas; no equivale necesariamente a identificar a todos los escribas con los fariseos. El imperfecto ἔλεγον presenta la pregunta en desarrollo. La Clementina tiene «scribæ et pharisæi» y agrega «et bibit Magister vester», elementos que no se incorporan al griego de Holmes. Fuentes: Holmes (ed.), SBLGNT, Mc 2,16 (2010), https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 2,16, https://biblia.com/bible/vulgataclem/mark/2/16-18."],
    mc2medico: ["El dicho del médico", "οἱ ἰσχύοντες («los fuertes») se opone a οἱ κακῶς ἔχοντες («los que se encuentran mal»); la metáfora médica explica narrativamente la compañía de Jesús, sin constituir un diagnóstico de los comensales. ὅτι introduce el discurso directo. Fuente: Holmes (ed.), SBLGNT, Mc 2,17 (2010), https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Expositor’s Greek Testament, comentario a Mc 2,17, https://biblehub.com/commentaries/mark/2-17.htm."],
    mc2arrepentimiento: ["Una ampliación textual", "La lectura SBLGNT termina en ἁμαρτωλούς («pecadores»). Otras tradiciones añaden εἰς μετάνοιαν («al arrepentimiento»), como en Lc 5,32; la Clementina también presenta el final breve. La posible armonización con Lucas es una explicación textual, no una certeza sobre cada copista. Fuentes: Holmes (ed.), SBLGNT, Mc 2,17 (2010), https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Adam Clarke, comentario a Mc 2,17, https://www.biblehub.com/commentaries/clarke/mark/2.htm; Vulgata Clementina, Mc 2,17, https://biblia.com/bible/vulgataclem/mark/2/16-18."],
    mc2mesa: ["La mesa y la casa", "κατακεῖσθαι y συνανέκειντο describen la postura reclinada propia de una comida; el posesivo αὐτοῦ («su casa») admite discusión sobre su referente, aunque la continuidad con Leví favorece esa identificación. ἦσαν γὰρ πολλοί puede referirse al numeroso grupo de seguidores, no necesariamente solo a los recaudadores. Cf. Holmes (ed.), SBLGNT, Mc 2,15 (2010), https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Bruce M. Metzger, A Textual Commentary on the Greek New Testament, comentario a Mc 2,15–16, https://www.bibliaplus.org/en/commentaries/428/a-textual-commentary-on-the-greek-new-testament-by-bruce-m-metzger/mark/2/15-16."],
    mc2orilla: ["Regreso a la orilla", "πάλιν («otra vez») enlaza el escenario costero con Mc 1,16; los imperfectos ἤρχετο y ἐδίδασκεν describen acciones en desarrollo o repetidas, sin precisar cuántas veces ocurrieron. Fuente: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,13, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, comentario a Mc 2,13, https://www.truthaccordingtoscripture.com/commentaries/cgt/mark-2.php."],
    mc2levi: ["Leví y el puesto de recaudación", "τελώνιον designa un puesto de cobro de impuestos o peajes, no necesariamente una oficina fiscal romana. Marcos llama al personaje Λευί, hijo de Alfeo; Mateo 9,9 lo llama Mateo. Identificarlos como una sola persona es una interpretación tradicional del paralelo sinóptico, no una equivalencia explícita en Marcos. Ἀκολούθει es imperativo presente. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,14, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, Mc 2,14, https://www.truthaccordingtoscripture.com/commentaries/cgt/mark-2.php; Ezra P. Gould, A Critical and Exegetical Commentary on Mark (1896), Mc 2,14, https://www.studylight.org/commentaries/eng/icc/mark-2.html."],

    mc2orden11: ["Tres órdenes consecutivas", "La secuencia ἔγειρε, ἆρον, ὕπαγε reúne tres imperativos de segunda persona singular: levantarse, tomar la camilla y marcharse a casa. El enfático Σοὶ («a ti») retoma el discurso interrumpido de 2,10. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,10–11, https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Tauber, MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt."],
    mc2reaccion12: ["La reacción de los presentes", "ἠγέρθη («se levantó») responde al imperativo ἔγειρε del versículo anterior. ὥστε con infinitivos (ἐξίστασθαι, δοξάζειν) presenta la reacción resultante de la multitud. εἴδομεν es aoristo, primera persona plural, de ὁράω: la frase final pertenece a los personajes del relato, no constituye verificación histórica independiente. Fuente: Holmes (ed.), SBLGNT (2010), Mc 2,12, https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt."],
    mc2variantes12: ["Variación textual y latín", "SBLGNT lee καὶ εὐθὺς, ἔμπροσθεν πάντων y Οὕτως οὐδέποτε εἴδομεν. Otras ediciones griegas presentan diferencias de orden y formulación; las diferencias editoriales no equivalen a un recuento de manuscritos. La Clementina sitúa la inmediatez en «Et statim surrexit ille» y conserva su propia formulación latina. Fuentes: Holmes (ed.), SBLGNT, Mc 2,12, https://github.com/LogosBible/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 2,11–12, https://biblia.com/bible/vulgataclem/mark/2/11-12; Society of Biblical Literature, descripción del aparato, https://www.sbl-site.org/resources/digital-texts/."],

    mc2autoridad: ["Autoridad y «Hijo del hombre»", "ἐξουσία significa autoridad o potestad, no simplemente fuerza. ὁ υἱὸς τοῦ ἀνθρώπου funciona como designación del hablante en este relato; su relación con Daniel 7,13 es una interpretación intertextual, no una conclusión morfológica. Fuente: Holmes (ed.), SBLGNT (2010), Mc 2,10, https://biblia.com/bible/sblgnt/mark/2/10-12."],
    mc2transicion: ["La frase interrumpida", "La construcción final ἵνα δὲ εἰδῆτε se interrumpe antes de λέγει τῷ παραλυτικῷ; la orden del versículo siguiente completa la escena. La posición de ἐπὶ τῆς γῆς ἀφιέναι ἁμαρτίας difiere entre ediciones: SBLGNT antepone el complemento de lugar al infinitivo, otras lo posponen. La hipótesis de una composición redaccional del diálogo no es un hecho gramatical. Fuentes: Holmes, SBLGNT (2010), Mc 2,10, https://www.sbl-site.org/wp-content/uploads/2024/12/62-SBLGNT-Mark.pdf; cotejo https://www.biblehub.com/texts/mark/2-10.htm."],
    mc2facil: ["¿Qué es más fácil?", "εὐκοπώτερον es comparativo neutro de εὐκοπώτερος; la pregunta contrapone dos enunciados, sin afirmar todavía cuál de los dos hechos es más fácil de realizar o comprobar. El segundo enunciado reúne los imperativos Ἔγειρε, ἆρον y περιπάτει. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,9, https://biblia.com/bible/sblgnt/mark/2/9; Tauber (ed.), MorphGNT 6.12 (2017), https://github.com/morphgnt/sblgnt."],
    mc2variantes9: ["Lecturas editoriales en 2,9", "El aparato comparativo de SBLGNT registra Ἀφίενταί frente a Ἀφέωνταί, Ἔγειρε frente a Ἐγείρου y Ἔγειραι, y diferencias en el orden de τὸν κράβαττόν σου. Estas son diferencias entre ediciones cotejadas, no un recuento directo de manuscritos. Fuente: Holmes (ed.), SBLGNT, aparato a Mc 2,9, https://biblia.com/bible/sblgnt/mark/2/9."],
    mc2interior: ["El reconocimiento interior", "ἐπιγνοὺς es participio aoristo de ἐπιγινώσκω («advertir, reconocer»); τῷ πνεύματι αὐτοῦ es un dativo que sitúa el reconocimiento «en su espíritu». καρδίαις («corazones») designa aquí el pensamiento interior. El relato atribuye ese conocimiento a Jesús, pero su explicación sobrenatural corresponde a la interpretación teológica del comentarista, no a la morfología. Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, comentario a Mc 2,8, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/2/8."],
    mc2variantes8: ["Variantes en 2,8", "SBLGNT lee εὐθὺς, no incluye αὐτοὶ después de οὕτως y emplea el presente histórico λέγει. La tradición mayoritaria lee εὐθέως, añade αὐτοὶ y presenta un aoristo («dijo»). La Clementina mantiene dicit («dice»). Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,8 y aparato, https://biblia.com/bible/sblgnt/mark/2/8; Vulgata Clementina, Mc 2,8, https://biblia.com/bible/vulgataclem/mark/2/8."],
    mc2escribas: ["La deliberación interior", "διαλογιζόμενοι es participio presente medio de διαλογίζομαι; la acción de razonar se sitúa ἐν ταῖς καρδίαις αὐτῶν («en sus corazones»), expresión que aquí designa el ámbito interior de la reflexión, no un diagnóstico de la disposición moral de todos los escribas. La Clementina emplea cogitantes in cordibus suis. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,6, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 2,6, https://biblia.com/bible/vulgataclem/mark/2/6-8."],
    mc2blasfemia: ["La acusación de blasfemia", "βλασφημεῖ es presente indicativo activo de βλασφημέω («blasfema»); εἰ μὴ forma una excepción («excepto, sino»). Los escribas formulan una objeción a la autoridad para perdonar pecados; el relato no obliga a convertir su razonamiento en una descripción uniforme de todas las corrientes judías de la época. Comparar Isaías 43,25 para el perdón atribuido a Dios. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,7, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Clementina, Mc 2,7, https://biblia.com/bible/vulgataclem/mark/2/6-8; análisis léxico de Mc 2,7, https://lemma.gebible.app/v/mark/2/7."],
    mc2perdon: ["La confianza y el perdón", "πίστιν αὐτῶν («la confianza de ellos») no determina por sí solo si el enfermo está incluido en el plural. SBLGNT lee ἀφίενταί σου (presente pasivo: «son perdonados»); la tradición bizantina presenta también ἀφέωνταί σοι (perfecto). La Clementina traduce dimittuntur tibi peccata tua. La diferencia de tiempo verbal no autoriza por sí sola una conclusión doctrinal. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 2,5 y aparato, https://studybible.info/SBLGNT/Mark%202%3A5-10; Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, comentario a Mc 2,5, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/2/5."],
    mc2techo: ["El techo abierto", "ἀπεστέγασαν τὴν στέγην repite la raíz del verbo y el sustantivo («destecharon el techo»). ἐξορύξαντες describe la apertura mediante remoción de material, pero el texto no permite reconstruir con certeza la arquitectura de la vivienda. SBLGNT lee προσενέγκαι; existe la variante προσεγγίσαι. La Clementina expresa la acción con nudaverunt tectum y patefacientes, sin reproducir literalmente el juego de raíces. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,4, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, comentario a Mc 2,4, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/2/4; Vulgata Clementina, Mc 2,4, https://biblia.com/bible/vulgataclem/mark/2/1-5."],
    mc2casa: ["La noticia de la llegada", "El griego de SBLGNT lee ἐν οἴκῳ («en casa»); otras ediciones registran εἰς οἶκον («a casa»). El pasaje no identifica al dueño de la vivienda. A. T. Robertson, Word Pictures in the New Testament, comentario a Marcos 2,1: https://www.sermonindex.net/commentary/robertsonwp/MRK/2; Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,1."],
    mc2orden: ["Orden del relato y Vulgata", "La división de versículos de la Clementina distribuye de otro modo la noticia de que Jesús estaba en casa: su «et auditum est» aparece en 2,2, mientras que SBLGNT sitúa ἠκούσθη en 2,1. Se conservan ambos textos sin armonizarlos. Textos: Holmes (ed.), SBLGNT, Mc 2,1–2, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 2,1–2, https://biblia.com/bible/vulgataclem/mark/2/1-12."],
    mc2camilla: ["Cuatro portadores", "αἰρόμενον es participio presente pasivo de αἴρω: el paralítico es llevado por cuatro personas. La narración no precisa el vínculo entre ellas. Alfred Plummer, Cambridge Greek Testament for Schools and Colleges, comentario a Marcos 2,3, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/2."],
    lepra: ["Una enfermedad de la piel","λεπρός designa a una persona afectada por una afección cutánea que la tradición bíblica agrupa bajo λέπρα; no equivale necesariamente a la enfermedad de Hansen moderna. Las normas de identificación y purificación se encuentran en Levítico 13–14. Fuente primaria: Lev 13,1–46; 14,1–32."],
    rodillas: ["La súplica de rodillas","γονυπετῶν («arrodillándose», participio presente activo) aparece en SBLGNT, pero falta en el códice Vaticano (B) y en Beza (D); este último presenta además ἐρωτῶν frente a παρακαλῶν («suplicando»). La comparación de testigos no permite atribuir automáticamente prioridad a una sola redacción. ἐὰν θέλῃς introduce una condición relativa a la voluntad, no a la capacidad. Jean-Claude Haelewyck, «The Healing of a Leper (Mark 1,40–45): A Textual Commentary», Ephemerides Theologicae Lovanienses 89/1 (2013), pp. 15–36, DOI:10.2143/ETL.89.1.2985320, https://doi.org/10.2143/ETL.89.1.2985320; cotejo de B y D: https://greeknewtestament.net/mk1-40; Michael W. Holmes (ed.), SBLGNT (2010), Mc 1,40."],
    enojo: ["Enojo o compasión: variante textual","SBLGNT lee ὀργισθεὶς («enojado»); la mayoría de los manuscritos griegos y NA28 leen σπλαγχνισθείς («movido a compasión»). La Clementina, misertus ejus, refleja compasión y no se armoniza. El texto no identifica el objeto del enojo. Bąk defiende la primera lectura (Verbum Vitae 34, 2018, DOI:10.31743/vv.2018.34.09); Johnson argumenta a favor de la segunda (New Testament Studies 63/2, 2017, pp. 183–202, DOI:10.1017/S0028688516000412). Lorenz (Tyndale Bulletin 67/2, 2016, DOI:10.53751/001c.29416) advierte sobre la posible dependencia de los testigos latinos. Kirsopp Lake (1923, Harvard Theological Review 16/2, pp. 197–198, DOI:10.1017/S0017816000013663) propuso incluso una puntuación alternativa que atribuiría el gesto airado al enfermo, no a Jesús: es una hipótesis interpretativa, no la puntuación adoptada aquí. La dificultad de una lectura no prueba por sí sola su originalidad."],
    purificacion: ["Desaparición y purificación","Marcos describe el resultado mediante dos predicados: ἀπῆλθεν ἀπʼ αὐτοῦ ἡ λέπρα («la afección se apartó de él») y ἐκαθαρίσθη («quedó purificado», aoristo pasivo). La segunda expresión retoma el vocabulario de καθαρίσθητι en 1,41 y enlaza con la comprobación ritual exigida en 1,44; no equivale a un diagnóstico médico moderno. A. B. Bruce (Expositor’s Greek Testament, comentario a Mc 1,42) observa esta duplicación y la compara con Mt 8,3 y Lc 5,13. Ezra P. Gould (International Critical Commentary, 1896, Mc 1,42) registra la variante que antepone εἰπόντος αὐτοῦ («cuando él hubo hablado»); SBLGNT no la incluye. Fuentes: https://www.biblehub.com/commentaries/mark/1-42.htm; https://www.studylight.org/commentaries/eng/icc/mark-1.html; Holmes (ed.), SBLGNT (2010), Mc 1,42."],
    severidad: ["Una despedida enérgica","ἐμβριμησάμενος puede indicar una advertencia severa o un gesto de fuerte emoción; ἐξέβαλεν («lo echó, lo hizo salir») es más enérgico que una simple despedida. La conexión con el enojo de 1,41 es interpretativa y no resuelve la variante textual. Ezra P. Gould (A Critical and Exegetical Commentary on the Gospel according to St. Mark, ICC, 1896, comentario a 1,43) considera insuficiente traducir ambos verbos como una simple advertencia y despedida, y entiende la severidad en el marco de la notoriedad de las curaciones; el Cambridge Greek Testament for Schools and Colleges (comentario a 1,43) prefiere «advertencia estricta» y rechaza inferir enojo efectivo. La hipótesis de que Jesús previó la desobediencia del hombre tampoco está explícita en el versículo. La secuencia ἐμβριμησάμενος (participio aoristo) / ἐξέβαλεν (indicativo aoristo) presenta advertencia y expulsión/despedida enérgica; el texto no especifica el lugar físico del que sale el hombre. Fuentes: SBLGNT, Mc 1,43; cf. Mc 1,12 (ἐκβάλλει); Gould, ICC, https://www.studylight.org/commentaries/eng/icc/mark-1.html; Cambridge Greek Testament, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/1/43."],
    sacerdote: ["Purificación y testimonio","La orden de presentarse al sacerdote y realizar la ofrenda remite a Lev 14,1–32. «Para testimonio a ellos» (εἰς μαρτύριον αὐτοῖς) no identifica inequívocamente quiénes son «ellos», ni si el testimonio es favorable o acusatorio. A. B. Bruce (Expositor’s Greek Testament, comentario a Mc 1,44) entiende que el certificado sacerdotal acreditaría la purificación ante la comunidad; Cambridge Bible for Schools and Colleges (Mc 1,44) prefiere entenderlo como testimonio contra la incredulidad. Son interpretaciones divergentes, no precisiones expresas del texto (https://biblehub.com/commentaries/mark/1-44.htm). La Clementina dice principi sacerdotum («al jefe de los sacerdotes»), frente al singular griego τῷ ἱερεῖ («al sacerdote»). Fuentes: Lev 14,1–32; SBLGNT y Vulgata Clementina, Mc 1,44, https://www.bibliacatolica.com.br/vulgata-clementina/evangelium-secundum-marcum/1/."],
    divulgacion: ["La difusión y el retiro","El sujeto de ἤρξατο es el hombre recién curado; el de δύνασθαι y ἦν se entiende como Jesús por el desarrollo de la frase. La divulgación del episodio explica narrativamente su permanencia fuera de las ciudades, sin demostrar una prohibición jurídica de entrada. κηρύσσειν πολλά puede entenderse como «proclamar extensamente» (πολλά adverbial); τὸν λόγον admite «la noticia/el asunto» (Cambridge Greek Testament) o, en otra interpretación, las palabras pronunciadas por Jesús (A. B. Bruce). El imperfecto ἤρχοντο presenta una afluencia continuada. La oposición espacial entre ciudad y lugares despoblados retoma 1,35. Fuentes: Cambridge Greek Testament for Schools and Colleges, comentario a Mc 1,45, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/1/45; A. B. Bruce, Expositor’s Greek Testament, Mc 1,45, https://www.bibliaplus.org/en/commentaries/326/expositors-greek-testament-nicoll/mark/1/45; Holmes (ed.), SBLGNT (2010), Mc 1,45."],
    sandalias: ["La correa de las sandalias","κύψας («agachándose») es participio aoristo y λῦσαι («desatar») infinitivo aoristo dependiente de ἱκανός: Juan declara que no se considera digno de realizar esa tarea, no que la haya realizado. La imagen representa una labor servil. La comparación con el servicio de un discípulo a su maestro se documenta en b. Ketubbot 96a, fuente rabínica posterior que no debe proyectarse sin reservas al siglo I. Cf. Cambridge Greek Testament for Schools and Colleges, comentario a Mc 1,7, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/1/7; A. B. Bruce, Expositor’s Greek Testament, Mc 1,7, https://www.studylight.org/commentaries/eng/egt/mark-1.html."],
    alba: ["Antes del amanecer","πρωῒ ἔννυχα λίαν combina «muy temprano» con «todavía de noche»; ἔννυχα funciona aquí adverbialmente. El imperfecto προσηύχετο presenta la oración en desarrollo. Fuentes: Holmes (ed.), SBLGNT, Mc 1,35 (2010), https://biblia.com/bible/sblgnt/mark/1/35-39; A. B. Bruce, The Expositor’s Greek Testament, comentario a Mc 1,35, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    oracion: ["Un lugar apartado","ἔρημον τόπον designa un lugar deshabitado o solitario, sin exigir un desierto arenoso. El pasaje no identifica su localización. Cf. Mc 1,12–13, donde ἔρημος ya había aparecido. Fuente: SBLGNT, Mc 1,35; https://biblia.com/bible/sblgnt/mark/1/35-39"],
    persecucion: ["κατεδίωξεν: salieron tras él","κατεδίωξεν es aoristo singular con sujeto compuesto («Simón y los que estaban con él»): la concordancia singular no elimina a los acompañantes. El compuesto καταδιώκω admite un matiz de seguimiento insistente, pero el contexto no exige persecución hostil. Bruce subraya su fuerza expresiva, con cautela sobre el debilitamiento semántico de compuestos en el griego helenístico. Cf. A. B. Bruce, «Mark 1:36», en The Expositor’s Greek Testament (ed. W. R. Nicoll), https://www.studylight.org/commentaries/eng/egt/mark-1.html; Cambridge Greek Testament for Schools and Colleges, comentario a Mc 1,35–39, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/1/35."],
    todos: ["«Todos te buscan»","πάντες es una generalización enfática de los interlocutores, no una afirmación demográfica comprobable. El presente histórico λέγουσιν da viveza al intercambio. Cf. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,37, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    poblaciones: ["κωμοπόλεις: poblaciones","κωμόπολις combina κώμη («aldea») y πόλις («ciudad»); aquí se refiere a poblaciones cercanas. El plural acusativo ἐχομένας («contiguas, próximas») concuerda con κωμοπόλεις. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,38, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    salida: ["«Para eso he salido»","ἐξῆλθον puede remitir a la salida narrada en 1,35 o entenderse más ampliamente como declaración de misión; el griego no obliga a resolver esa ambigüedad. La Clementina dice ad hoc enim veni («para esto vine»), sin reproducir literalmente el verbo de salida. Fuentes: SBLGNT, Mc 1,38, https://biblia.com/bible/sblgnt/mark/1/35-39; Vulgata Clementina, Mc 1,38, https://szentiras.hu/biblia/vuc/mrk/1"],
    recorrido: ["Predicación y expulsión","Los participios κηρύσσων y ἐκβάλλων coordinan dos actividades del recorrido por Galilea. La sintaxis de εἰς τὰς συναγωγάς puede vincularse con el desplazamiento o con la predicación; no conviene imponer una lectura excluyente. A. B. Bruce, The Expositor’s Greek Testament, Mc 1,39, https://www.studylight.org/commentaries/eng/egt/mark-1.html"],
    casa: ["La casa de Simón y Andrés","La transición desde la sinagoga a la vivienda enlaza dos escenas del mismo día narrativo. El texto menciona a cuatro discípulos, pero no identifica la casa con un yacimiento arqueológico concreto. Fuente primaria: SBLGNT, Mc 1,29; https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt"],
    suegra: ["La suegra de Simón","πενθερά significa «suegra». La existencia de una suegra presupone un vínculo matrimonial, pero el pasaje no dice si la esposa de Simón estaba presente. κατέκειτο (imperfecto) describe su estado, mientras πυρέσσουσα es un participio presente. Fuente: SBLGNT, Mc 1,30; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    levanto: ["ἤγειρεν: la levantó","El aoristo ἤγειρεν procede de ἐγείρω («levantar», también «despertar»). Aquí describe la acción física de levantar a la enferma; las asociaciones con otros usos del verbo en Marcos requieren interpretación contextual. Fuente: SBLGNT, Mc 1,31; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    servicio: ["διηκόνει: se puso a servir","El imperfecto διηκόνει presenta la atención a los presentes como una actividad continuada, sin precisar su duración. La misma raíz reaparece en Mc 10,45, pero leer aquí una anticipación deliberada de ese versículo es una interpretación literaria, no una exigencia de la forma verbal. Cf. Ezra P. Gould, A Critical and Exegetical Commentary on the Gospel according to St. Mark (International Critical Commentary, 1896), comentario a 1,31, https://www.studylight.org/commentaries/eng/icc/mark-1.html; A. B. Bruce, Expositor’s Greek Testament, Mc 1,31, https://biblehub.com/commentaries/egt/mark/1.htm."],
    ocaso: ["Al ponerse el sol","Ὀψίας δὲ γενομένης es un genitivo absoluto temporal; ὅτε ἔδυ ὁ ἥλιος («cuando se puso el sol») precisa el momento. Como la escena comenzó en sábado (1,21), el final del descanso sabático es una explicación histórica plausible de la llegada de enfermos entonces, pero Marcos no atribuye explícitamente ese motivo a la multitud. Cf. Mark L. Strauss, comentario a Mc 1,29–34, The Gospel Coalition Bible Commentary, https://www.thegospelcoalition.org/commentary/mark/; Ezra P. Gould, International Critical Commentary (1896), Mc 1,32, https://www.studylight.org/commentaries/eng/icc/mark-1.html."],
    ciudad: ["Toda la ciudad","ὅλη ἡ πόλις es una generalización narrativa; no constituye un censo literal de asistentes. θύρα designa la puerta de la casa mencionada en 1,29 según la continuidad del relato. Fuente: SBLGNT, Mc 1,33; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    muchos: ["Todos y muchos","En 1,32 se dice que llevaban a «todos» los enfermos; en 1,34 se afirma que curó a «muchos». La alternancia no exige convertir «muchos» en «todos»: se conserva la diferencia del griego. Fuente: SBLGNT, Mc 1,32–34; https://biblia.com/bible/sblgnt/mark/1/29-34"],
    silenciomarc: ["El silencio de los demonios","La prohibición se explica con ὅτι ᾔδεισαν αὐτόν («porque lo conocían»); ᾔδεισαν es pluscuamperfecto de οἶδα con valor de estado de conocimiento anterior. El texto no precisa en este versículo qué sabían los demonios. Relacionarlo con el llamado «secreto mesiánico» es una hipótesis de lectura del conjunto narrativo. Cf. A. B. Bruce, Expositor’s Greek Testament, Mc 1,34, https://biblehub.com/commentaries/egt/mark/1.htm; SBLGNT, Mc 1,34, https://biblia.com/bible/sblgnt/mark/1/34."],
    sinagoga: ["La sinagoga","συναγωγή designa el lugar de reunión y enseñanza comunitaria. El relato no identifica aquí una construcción arqueológica concreta."],
    sabado: ["Los sábados","τοῖς σάββασιν es un dativo plural usado para indicar el tiempo; en este contexto se refiere al sábado."],
    autoridad: ["Autoridad y enseñanza","ἐξουσία designa autoridad o potestad. Marcos contrapone el modo de enseñar de Jesús al de los escribas sin transcribir aquí el contenido de su enseñanza. La relación entre autoridad y conflicto se desarrolla en el relato posterior: no debe inferirse de esta sola frase una descripción histórica exhaustiva de los métodos de todos los escribas. Cf. Joshua Starr, «The Meaning of ‘Authority’ in Mark 1,22», Harvard Theological Review 23/4 (1930), https://www.cambridge.org/core/journals/harvard-theological-review/article/abs/meaning-of-authority-in-mark-1-22/B9646AC4FBD50024A1CB80B136E5F998; «Exousia and Conflict in the Gospel of Mark», Religions 14/10 (2023), art. 1318, https://www.mdpi.com/2077-1444/14/10/1318."],
    espirituimpuro: ["Espíritu impuro","La expresión πνεῦμα ἀκάθαρτον pertenece al vocabulario religioso del relato. No constituye por sí misma un diagnóstico médico moderno."],
    idioma: ["¿Qué tenemos que ver contigo?","Τί ἡμῖν καὶ σοί es un giro idiomático semítico, literalmente «¿qué [hay] para nosotros y para ti?», que expresa distanciamiento o conflicto; cf. Jue 11,12 (LXX)."],
    silencio: ["Φιμώθητι","Imperativo aoristo pasivo de φιμόω, literalmente «ser amordazado». La Vulgata traduce Obmutesce («enmudece»)."],
    convulsion: ["La salida del espíritu","σπαράξαν es participio aoristo de σπαράσσω, «sacudir violentamente». El texto describe una acción del espíritu dentro del marco narrativo."],
    nueva: ["Enseñanza nueva","διδαχὴ καινή es una frase nominal exclamativa. La puntuación es editorial: κατʼ ἐξουσίαν puede vincularse con «enseñanza» o con la orden dada a los espíritus. David Pessoa de Lira analiza la frase como parte de la configuración narrativa de Jesús como maestro autorizado, distinguiendo la autoridad del discurso y la del exorcismo; es una propuesta exegética, no una certeza gramatical. Cf. David Pessoa de Lira, «διδαχὴ καινὴ κατʼ ἐξουσίαν: análise redacional e traditiva de Marcos 1.21-28», 2018, DOI:10.22351/nepp.v44i1.3269, https://periodicos.est.edu.br/index.php/nepp/article/view/3269; A. B. Bruce, Expositor’s Greek Testament, Mc 1,27, https://www.studylight.org/commentaries/eng/egt/mark-1.html."],
    rumor: ["La fama que se difunde","ἀκοή puede designar noticia, informe o fama. El griego dice «salió su noticia»; la Vulgata emplea rumor."],
    entregado: ['Juan, entregado', 'μετὰ τὸ παραδοθῆναι es una construcción temporal con infinitivo aoristo pasivo articular: «después de que Juan fuera entregado». El agente no se nombra aquí; el contexto de su arresto se desarrolla en Mc 6,17–29. El mismo verbo παραδίδωμι reaparece en la pasión, pero esa recurrencia literaria no identifica por sí sola un agente común. Cotejo: Holmes (ed.), SBLGNT, Mc 1,14 y 6,17–29 (2010), https://biblia.com/bible/sblgnt/mark/1/14-20.'],
    evangelio: ['La buena noticia de Dios', 'SBLGNT lee τοῦ θεοῦ («de Dios»); la Vulgata Clementina presenta regni Dei («del reino de Dios»). No se armonizan ambas versiones.'],
    kairos: ['καιρός', 'No se trata simplemente de tiempo medido (χρόνος), sino de un momento u ocasión decisiva. El perfecto πεπλήρωται presenta el tiempo como ya cumplido.'],
    reino: ['ἤγγικεν', 'Perfecto de ἐγγίζω: «se ha acercado». La proximidad del reino puede recibir distintas interpretaciones escatológicas; la traducción no decide entre ellas.'],
    mar: ['Mar de Galilea', 'La denominación θάλασσα se usa para el lago de Galilea. ἀμφιβάλλοντας describe la acción de echar una red, sin precisar en este versículo un tipo único de aparejo.'],
    pescadores: ['Pescadores de personas', 'ποιήσω ὑμᾶς γενέσθαι contiene un infinitivo de devenir («haré que lleguen a ser»), que la traducción conserva. ἁλιεῖς ἀνθρώπων aprovecha el oficio de los llamados; su alcance metafórico se interpreta en el conjunto del relato, no como descripción literal. Fuente textual: Holmes (ed.), SBLGNT, Mc 1,16–18 (2010), https://biblia.com/bible/sblgnt/mark/1/14-20.'],
    redes: ['καταρτίζοντας', 'Participio presente activo de καταρτίζω: arreglar, preparar o poner en condiciones. En este contexto se refiere a las redes de pesca.'],
    asalariados: ['Los trabajadores contratados', 'μισθωτοί son trabajadores asalariados, no necesariamente esclavos. Su mención en Mc 1,20 distingue la escena de Zebedeo de la llamada anterior. Puede sugerir cierta organización económica de la pesca familiar, pero no permite calcular su riqueza. A. B. Bruce, The Expositor’s Greek Testament, comentario a Mc 1,20, https://biblehub.com/commentaries/mark/1-20.htm; Cambridge Greek Testament for Schools and Colleges, comentario a Mc 1,20 (ibíd.); texto base: Holmes (ed.), SBLGNT (2010), https://biblia.com/bible/sblgnt/mark/1/14-20.'],
    titulo: ['El comienzo', 'La lectura adoptada por SBLGNT termina en χριστοῦ («Cristo»). Numerosos testigos incluyen además υἱοῦ θεοῦ («Hijo de Dios»), que aparece en la Vulgata. La inclusión de esas palabras es una variante textual importante, no una omisión accidental de nuestra traducción. La autenticidad de la lectura larga es debatida: Tommy Wasserman defiende su originalidad, mientras otras interpretaciones consideran secundaria la adición. Véanse Wasserman, «The ‘Son of God’ was in the Beginning (Mark 1:1)», Journal of Theological Studies 62.1 (2011), pp. 20–50, DOI:10.1093/jts/flr013; Kalle O. Lundahl, «Mark 1:1: How to Display Differences in Biblical Manuscripts in Editions and Translations», Harvard Theological Review 117.1 (2024), DOI:10.1017/S0017816023000378.'],
    cita: ['Isaías y Malaquías', 'Aunque la introducción menciona a Isaías, la primera cita recuerda Mal 3,1 (y Ex 23,20); la segunda procede de Is 40,3. Algunos testigos griegos sustituyen «en Isaías, el profeta» por «en los profetas». La lectura «Isaías» es más difícil por la combinación de citas y suele considerarse anterior a la generalización «los profetas», aunque esto es un juicio crítico, no una certeza paleográfica. Cf. Daniel B. Wallace, «Mark 1:2 and New Testament Textual Criticism», Bible.org (2004), https://bible.org/article/mark-12-and-new-testament-textual-criticism.'],
    desierto: ['Una voz en el desierto', 'La cita reproduce Is 40,3 y enlaza con la aparición de Juan en Mc 1,4. En el hebreo de Isaías, «en el desierto» se relaciona naturalmente con la orden de preparar el camino; en Marcos puede oírse como localización de la voz. La puntuación actual decide una lectura sintáctica, no es un dato manuscrito indiscutible. Fuentes: Is 40,3 (texto hebreo y traducciones antiguas); Cambridge Bible for Schools and Colleges, comentario a Is 40,3, https://biblehub.com/commentaries/isaiah/40-3.htm; Holmes (ed.), SBLGNT, Mc 1,3 (2010).'],
    metanoia: ['μετάνοια y bautismo', 'μετάνοια designa un cambio de orientación vital; «conversión» no la reduce a pesar subjetivo. Los participios βαπτίζων y κηρύσσων presentan el bautizar y el proclamar como actividades relacionadas de Juan. La conexión entre el rito, la conversión y el perdón en Mc 1,4 es objeto de discusión; Flavio Josefo (Antigüedades 18.116–117) presenta otra formulación del bautismo de Juan. Fuente: Artur Malina, «Baptism of Repentance for the Remission of Sins: Mark 1:4 in Its Context», The Biblical Annals 11.4 (2021), pp. 689–707, DOI:10.31743/biban.12794; Josefo, Ant. 18.116–117.'],
    langostas: ['ἀκρίδες y vestimenta profética', 'ἀκρίδες designa langostas (insectos), alimento permitido en Lev 11,21–22. La prenda de pelo de camello y el cinturón de cuero recuerdan la caracterización de Elías en 2 Re 1,8; se trata de una relación intertextual plausible, no de una identificación explícita en este versículo. Cf. también Zac 13,4 (manto de pelo como indumentaria profética). Fuentes: Lev 11,21–22; 2 Re 1,8; Zac 13,4; Cambridge Bible for Schools and Colleges, comentario a Mc 1,6, https://www.biblehub.com/commentaries/mark/1-6.htm.'],
    espiritu: ['Agua y Espíritu', 'La oposición entre ὕδατι («con agua», dativo sin preposición) y ἐν πνεύματι ἁγίῳ («en/con Espíritu Santo») se conserva en el griego. La traducción en español emplea «con» en ambos casos.'],
    cielos: ['Los cielos rasgados', 'σχιζομένους (participio presente pasivo de σχίζω) presenta los cielos «rasgándose», no simplemente abiertos. El mismo verbo aparece en Mc 15,38 para el velo del santuario: el paralelismo literario es comprobable, aunque su intención teológica sigue siendo interpretativa. Se ha propuesto además una alusión a la súplica de Is 64,1 (numeración hebrea; 63,19 en otras tradiciones). La Vulgata Clementina lee apertos y agrega «et manentem in ipso», ausente del griego SBLGNT en este lugar. Véase Kevin J. Vanhoozer, «Staurology, Ontology, and the Travail of Biblical Narrative», Southern Baptist Journal of Theology 23/2 (2019), pp. 7–33, citado en https://intertextual.bible/read/mark-1.10/isaiah-64.1; cf. Mc 15,38 e Is 64,1. Sobre la comparación con la paloma y la diversidad de propuestas: Peter Chamberlain, Moaning like a Dove (tesis, University of St Andrews, 2016), https://research-repository.st-andrews.ac.uk/handle/10023/7916.'],
    hijo: ['La voz celeste', 'Σὺ εἶ («tú eres») dirige la voz a Jesús en segunda persona. La declaración combina ecos de Sal 2,7 (filiación del rey) e Is 42,1 (el siervo en quien Dios se complace); ninguna de las dos fuentes coincide literalmente con toda la formulación de Marcos. La asociación de ambos textos es una lectura intertextual, no una cita explícita identificada por el narrador. Cf. Sal 2,7; Is 42,1; Mc 9,7 y el cotejo de pasajes en https://www.esv.org/Mark%2B9%3A7%3BPsalm%2B2%3A7%3BIsaiah%2B42%3A1%3BEphesians%2B1%3A6%3BColossians%2B1%3A13%3B2%2BPeter%2B1%3A17%3B1%2BJohn%2B5%3A9/.'],
    expulsa: ['ἐκβάλλει', 'El presente histórico y el verbo «echar fuera, expulsar» imprimen brusquedad al relato; «lo empuja» refleja esa fuerza mejor que «lo conduce».'],
    cuarenta: ['Los cuarenta días y las fieras', 'Marcos menciona cuarenta días, pero no «cuarenta noches»; la Vulgata Clementina sí agrega esa expresión. El participio presente πειραζόμενος describe la prueba durante la estancia, sin narrar tentaciones concretas. La mención de las fieras (μετὰ τῶν θηρίων) es propia de Marcos frente a Mt 4 y Lc 4: puede indicar peligro, aislamiento o convivencia pacífica, sin que el texto decida expresamente. Artur Malina (2017, «Why Was Jesus with Wild Animals (Mark 1:13)?», Verbum Vitae, https://doi.org/10.31743/vv.1824) defiende la lectura de armonía; Peter Joshua Atkins (2024, «The Son of Man Behaving Beastly», Journal for the Study of the New Testament 46/3, pp. 401–416, https://doi.org/10.1177/0142064X231211524) propone examinar la relación con Daniel 4 griego y las conductas propias de la vida silvestre. Son hipótesis interpretativas, no variantes textuales.'],
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
    const records = verse > 100 ? externalMorphology.versesChapter2.verses[verse - 100] : morphologyByVerse[verse];
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
    40: ['1,40–45', 'La purificación de un enfermo'],
  };
  passages.forEach(p => {
    if (p.chapter === 2 && p.n === 18) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,18–22'), makeElement('h2', '', 'El ayuno y las imágenes de lo nuevo')); verses.append(section); }
    if (p.chapter === 2 && p.n === 13) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,13–17'), makeElement('h2', '', 'La vocación de Leví')); verses.append(section); }
    if (p.chapter === 2 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,1–5'), makeElement('h2', '', 'Regreso a Cafarnaúm')); verses.append(section); }
    if (p.chapter !== 2 && sections[p.n]) {
      const section = makeElement('div', 'verse-section');
      section.append(makeElement('p', '', sections[p.n][0]), makeElement('h2', '', sections[p.n][1]));
      verses.append(section);
    }
    const row = makeElement('div', 'verse');
    row.id = p.chapter === 2 ? `v2-${p.n}` : `v${p.n}`;
    const number = makeElement('div', 'number', String(p.n));
    const speech = makeElement('div', 'speech');
    const original = makeElement('p', 'latin');
    original.lang = 'grc';
    greekContent(original, p.gr, p.chapter === 2 ? 100 + p.n : p.n);
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
