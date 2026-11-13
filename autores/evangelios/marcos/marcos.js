/* Marcos 1,1–45; 2,1–28; 3,1–35; 4,1–15 · SBLGNT (signos de aparato omitidos), Vulgata Clementina, traducción propia. */
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
    {"chapter":2,"n":20,"gr":"ἐλεύσονται δὲ ἡμέραι ὅταν ἀπαρθῇ ἀπʼ αὐτῶν ὁ νυμφίος, καὶ τότε νηστεύσουσιν ἐν ἐκείνῃ τῇ ἡμέρᾳ.","es":"Pero vendrán días en que les será arrebatado el novio, y entonces ayunarán, aquel día.","la":"Venient autem dies cum auferetur ab eis sponsus: et tunc jejunabunt in illis diebus.","notes":["mc2ayuno20"]},
    {"chapter":2,"n":21,"gr":"Οὐδεὶς ἐπίβλημα ῥάκους ἀγνάφου ἐπιράπτει ἐπὶ ἱμάτιον παλαιόν· εἰ δὲ μή, αἴρει τὸ πλήρωμα ἀπʼ αὐτοῦ τὸ καινὸν τοῦ παλαιοῦ, καὶ χεῖρον σχίσμα γίνεται.","es":"Nadie cose un remiendo de tela sin abatanar sobre un manto viejo; de lo contrario, el remiendo nuevo tira de la tela vieja y se produce una rotura peor.","la":"Nemo assumentum panni rudis assuit vestimento veteri: alioquin aufert supplementum novum a veteri, et major scissura fit.","notes":["mc2remiendo21"]},
    {"chapter":2,"n":22,"gr":"καὶ οὐδεὶς βάλλει οἶνον νέον εἰς ἀσκοὺς παλαιούς· εἰ δὲ μή, ῥήξει ὁ οἶνος τοὺς ἀσκούς, καὶ ὁ οἶνος ἀπόλλυται καὶ οἱ ἀσκοί. ἀλλὰ οἶνον νέον εἰς ἀσκοὺς καινούς.","es":"Y nadie echa vino nuevo en odres viejos; si lo hace, el vino reventará los odres, y se perderán tanto el vino como los odres. En cambio: vino nuevo en odres nuevos.","la":"Et nemo mittit vinum novum in utres veteres: alioquin dirumpet vinum utres, et vinum effundetur, et utres peribunt: sed vinum novum in utres novos mitti debet.","notes":["mc2odres22"]},
    {"chapter":2,"n":23,"gr":"Καὶ ἐγένετο αὐτὸν ἐν τοῖς σάββασιν παραπορεύεσθαι διὰ τῶν σπορίμων, καὶ οἱ μαθηταὶ αὐτοῦ ἤρξαντο ὁδὸν ποιεῖν τίλλοντες τοὺς στάχυας.","es":"Y sucedió que, un sábado, mientras él atravesaba unos sembrados, sus discípulos comenzaron a abrirse paso arrancando espigas.","la":"Et factum est iterum cum Dominus sabbatis ambularet per sata, et discipuli ejus cœperunt progredi, et vellere spicas.","notes":["mc2espigas23"]},
    {"chapter":2,"n":24,"gr":"καὶ οἱ Φαρισαῖοι ἔλεγον αὐτῷ· Ἴδε τί ποιοῦσιν τοῖς σάββασιν ὃ οὐκ ἔξεστιν;","es":"Y los fariseos le decían: «Miren, ¿por qué hacen en sábado lo que no está permitido?»","la":"Pharisæi autem dicebant ei: Ecce, quid faciunt sabbatis quod non licet?","notes":["mc2sabado24"]},
    {"chapter":2,"n":25,"gr":"καὶ λέγει αὐτοῖς· Οὐδέποτε ἀνέγνωτε τί ἐποίησεν Δαυὶδ ὅτε χρείαν ἔσχεν καὶ ἐπείνασεν αὐτὸς καὶ οἱ μετʼ αὐτοῦ;","es":"Y les dice: «¿Nunca leyeron lo que hizo David cuando tuvo necesidad y pasó hambre, él y quienes estaban con él?","la":"Et ait illis: Numquam legistis quid fecerit David, quando necessitatem habuit, et esuriit ipse, et qui cum eo erant?","notes":["mc2david25"]},
    {"chapter":2,"n":26,"gr":"πῶς εἰσῆλθεν εἰς τὸν οἶκον τοῦ θεοῦ ἐπὶ Ἀβιαθὰρ ἀρχιερέως καὶ τοὺς ἄρτους τῆς προθέσεως ἔφαγεν, οὓς οὐκ ἔξεστιν φαγεῖν εἰ μὴ τοὺς ἱερεῖς, καὶ ἔδωκεν καὶ τοῖς σὺν αὐτῷ οὖσιν;","es":"¿Cómo entró en la casa de Dios, en tiempos del sumo sacerdote Abiatar, y comió los panes de la presencia, que no está permitido comer sino a los sacerdotes, y dio también a quienes estaban con él?","la":"quomodo introivit in domum Dei sub Abiathar principe sacerdotum, et panes propositionis manducavit, quos non licebat manducare, nisi sacerdotibus, et dedit eis qui cum eo erant?","notes":["mc2abiatar26"]},
    {"chapter":2,"n":27,"gr":"καὶ ἔλεγεν αὐτοῖς· Τὸ σάββατον διὰ τὸν ἄνθρωπον ἐγένετο καὶ οὐχ ὁ ἄνθρωπος διὰ τὸ σάββατον·","es":"Y les decía: «El sábado fue instituido para el ser humano, y no el ser humano para el sábado.","la":"Et dicebat eis: Sabbatum propter hominem factum est, et non homo propter sabbatum.","notes":["mc2sabado27"]},
    {"chapter":2,"n":28,"gr":"ὥστε κύριός ἐστιν ὁ υἱὸς τοῦ ἀνθρώπου καὶ τοῦ σαββάτου.","es":"Por eso, el Hijo del hombre es señor incluso del sábado».","la":"Itaque Dominus est Filius hominis, etiam sabbati.","notes":["mc2senor28"]},
    {"chapter":3,"n":1,"gr":"Καὶ εἰσῆλθεν πάλιν εἰς συναγωγήν, καὶ ἦν ἐκεῖ ἄνθρωπος ἐξηραμμένην ἔχων τὴν χεῖρα.","es":"Entró otra vez en una sinagoga. Allí había un hombre que tenía una mano reseca.","la":"Et introivit iterum in synagogam: et erat ibi homo habens manum aridam.","notes":["mc3mano1"]},
    {"chapter":3,"n":2,"gr":"καὶ παρετήρουν αὐτὸν εἰ τοῖς σάββασιν θεραπεύσει αὐτόν, ἵνα κατηγορήσωσιν αὐτοῦ.","es":"Lo vigilaban para ver si lo curaba en sábado y así poder acusarlo.","la":"Et observabant eum, si sabbatis curaret, ut accusarent illum.","notes":["mc3vigilancia2"]},
    {"chapter":3,"n":3,"gr":"καὶ λέγει τῷ ἀνθρώπῳ τῷ τὴν χεῖρα ἔχοντι ξηράν· Ἔγειρε εἰς τὸ μέσον.","es":"Y le dice al hombre que tenía la mano reseca: «Levántate y ponte en el centro».","la":"Et ait homini habenti manum aridam: Surge in medium.","notes":["mc3centro3"]},
    {"chapter":3,"n":4,"gr":"καὶ λέγει αὐτοῖς· Ἔξεστιν τοῖς σάββασιν ἀγαθοποιῆσαι ἢ κακοποιῆσαι, ψυχὴν σῶσαι ἢ ἀποκτεῖναι; οἱ δὲ ἐσιώπων.","es":"Y les pregunta: «¿Está permitido en sábado hacer el bien o hacer el mal, salvar una vida o quitarla?». Pero ellos guardaban silencio.","la":"Et dicit eis: Licet sabbatis benefacere, an male? animam salvam facere, an perdere? At illi tacebant.","notes":["mc3pregunta4"]},
    {"chapter":3,"n":5,"gr":"καὶ περιβλεψάμενος αὐτοὺς μετʼ ὀργῆς, συλλυπούμενος ἐπὶ τῇ πωρώσει τῆς καρδίας αὐτῶν, λέγει τῷ ἀνθρώπῳ· Ἔκτεινον τὴν χεῖρα· καὶ ἐξέτεινεν, καὶ ἀπεκατεστάθη ἡ χεὶρ αὐτοῦ.","es":"Y, después de mirarlos a todos con ira, afligido por el endurecimiento de sus corazones, le dice al hombre: «Extiende la mano». Él la extendió y la mano le quedó restablecida.","la":"Et circumspiciens eos cum ira, contristatus super cæcitate cordis eorum, dicit homini: Extende manum tuam. Et extendit, et restituta est manus illi.","notes":["mc3ira5"]},
    {"chapter":3,"n":6,"gr":"καὶ ἐξελθόντες οἱ Φαρισαῖοι εὐθὺς μετὰ τῶν Ἡρῳδιανῶν συμβούλιον ἐδίδουν κατʼ αὐτοῦ ὅπως αὐτὸν ἀπολέσωσιν.","es":"Los fariseos salieron y enseguida comenzaron a deliberar con los herodianos contra él, buscando la manera de acabar con su vida.","la":"Exeuntes autem pharisæi, statim cum Herodianis consilium faciebant adversus eum quomodo eum perderent.","notes":["mc3conspiracion6"]},
    {"chapter":3,"n":7,"gr":"Καὶ ὁ Ἰησοῦς μετὰ τῶν μαθητῶν αὐτοῦ ἀνεχώρησεν πρὸς τὴν θάλασσαν· καὶ πολὺ πλῆθος ἀπὸ τῆς Γαλιλαίας ἠκολούθησεν, καὶ ἀπὸ τῆς Ἰουδαίας","es":"Jesús se retiró con sus discípulos hacia el mar. Una gran multitud de Galilea lo siguió; también acudía gente de Judea…","la":"Jesus autem cum discipulis suis secessit ad mare: et multa turba a Galilæa et Judæa secuta est eum,","notes":["mc3retirada7"]},
    {"chapter":3,"n":8,"gr":"καὶ ἀπὸ Ἱεροσολύμων καὶ ἀπὸ τῆς Ἰδουμαίας καὶ πέραν τοῦ Ἰορδάνου καὶ περὶ Τύρον καὶ Σιδῶνα, πλῆθος πολύ, ἀκούοντες ὅσα ἐποίει ἦλθον πρὸς αὐτόν.","es":"Y de Jerusalén, de Idumea, de más allá del Jordán y de los alrededores de Tiro y Sidón llegó hasta él una gran multitud, que había oído hablar de cuanto hacía.","la":"et ab Jerosolymis, et ab Idumæa, et trans Jordanem: et qui circa Tyrum et Sidonem multitudo magna, audientes quæ faciebat, venerunt ad eum.","notes":["mc3geografia8"]},
    {"chapter":3,"n":9,"gr":"καὶ εἶπεν τοῖς μαθηταῖς αὐτοῦ ἵνα πλοιάριον προσκαρτερῇ αὐτῷ διὰ τὸν ὄχλον ἵνα μὴ θλίβωσιν αὐτόν·","es":"Y dijo a sus discípulos que tuvieran preparada una pequeña barca para él, a causa de la multitud, para que no lo apretujaran.","la":"Et dicit discipulis suis ut navicula sibi deserviret propter turbam, ne comprimerent eum:","notes":["mc3barca9"]},
    {"chapter":3,"n":10,"gr":"πολλοὺς γὰρ ἐθεράπευσεν, ὥστε ἐπιπίπτειν αὐτῷ ἵνα αὐτοῦ ἅψωνται ὅσοι εἶχον μάστιγας.","es":"Pues había curado a muchos, de modo que cuantos padecían dolencias se abalanzaban sobre él para tocarlo.","la":"multos enim sanabat, ita ut irruerent in eum ut illum tangerent, quotquot habebant plagas.","notes":["mc3multitud10"]},
    {"chapter":3,"n":11,"gr":"καὶ τὰ πνεύματα τὰ ἀκάθαρτα, ὅταν αὐτὸν ἐθεώρουν, προσέπιπτον αὐτῷ καὶ ἔκραζον λέγοντα ὅτι Σὺ εἶ ὁ υἱὸς τοῦ θεοῦ.","es":"Y los espíritus impuros, cada vez que lo veían, caían ante él y gritaban: «Tú eres el Hijo de Dios».","la":"Et spiritus immundi, cum illum videbant, procidebant ei: et clamabant, dicentes:","notes":["mc3espiritus11"]},
    {"chapter":3,"n":12,"gr":"καὶ πολλὰ ἐπετίμα αὐτοῖς ἵνα μὴ αὐτὸν φανερὸν ποιήσωσιν.","es":"Pero él les ordenaba insistentemente que no lo dieran a conocer.","la":"Tu es Filius Dei. Et vehementer comminabatur eis ne manifestarent illum.","notes":["mc3silencio12"]},
    {"chapter":3,"n":13,"gr":"Καὶ ἀναβαίνει εἰς τὸ ὄρος καὶ προσκαλεῖται οὓς ἤθελεν αὐτός, καὶ ἀπῆλθον πρὸς αὐτόν.","es":"Jesús sube al monte y llama a quienes él quiere; ellos acuden a su encuentro.","la":"Et ascendens in montem vocavit ad se quos voluit ipse: et venerunt ad eum.","notes":["mc3llamamiento13"]},
    {"chapter":3,"n":14,"gr":"καὶ ἐποίησεν δώδεκα, ἵνα ὦσιν μετ’ αὐτοῦ καὶ ἵνα ἀποστέλλῃ αὐτοὺς κηρύσσειν","es":"Y constituyó a doce para que estuvieran con él y para enviarlos a proclamar el mensaje","la":"Et fecit ut essent duodecim cum illo: et ut mitteret eos prædicare.","notes":["mc3doce14"]},
    {"chapter":3,"n":15,"gr":"καὶ ἔχειν ἐξουσίαν ἐκβάλλειν τὰ δαιμόνια·","es":"y para que tuvieran autoridad para expulsar a los demonios.","la":"Et dedit illis potestatem curandi infirmitates et ejiciendi dæmonia.","notes":["mc3autoridad15"]},
    {"chapter":3,"n":16,"gr":"καὶ ἐποίησεν τοὺς δώδεκα, καὶ ἐπέθηκεν ὄνομα τῷ Σίμωνι Πέτρον,","es":"Y constituyó a los doce; a Simón le dio el nombre de Pedro;","la":"Et imposuit Simoni nomen Petrus:","notes":["mc3reiteracion16"]},
    {"chapter":3,"n":17,"gr":"καὶ Ἰάκωβον τὸν τοῦ Ζεβεδαίου καὶ Ἰωάννην τὸν ἀδελφὸν τοῦ Ἰακώβου (καὶ ἐπέθηκεν αὐτοῖς ὀνόματα Βοανηργές, ὅ ἐστιν Υἱοὶ Βροντῆς),","es":"también a Santiago, hijo de Zebedeo, y a Juan, hermano de Santiago, a quienes dio el nombre de Boanergés, que significa «Hijos del trueno»;","la":"et Jacobum Zebedæi, et Joannem fratrem Jacobi, et imposuit eis nomina Boanerges, quod est, Filii tonitrui:","notes":["mc3boanerges17"]},
    {"chapter":3,"n":18,"gr":"καὶ Ἀνδρέαν καὶ Φίλιππον καὶ Βαρθολομαῖον καὶ Μαθθαῖον καὶ Θωμᾶν καὶ Ἰάκωβον τὸν τοῦ Ἁλφαίου καὶ Θαδδαῖον καὶ Σίμωνα τὸν Καναναῖον","es":"y a Andrés, Felipe, Bartolomé, Mateo, Tomás, Santiago, hijo de Alfeo, Tadeo y Simón el Cananeo,","la":"et Andream, et Philippum, et Bartholomæum, et Matthæum, et Thomam, et Jacobum Alphæi, et Thaddæum, et Simonem Cananæum,","notes":["mc3cananeo18"]},
    {"chapter":3,"n":19,"gr":"καὶ Ἰούδαν Ἰσκαριώθ, ὃς καὶ παρέδωκεν αὐτόν.","es":"y a Judas Iscariote, que además lo entregó.","la":"et Judam Iscariotem, qui et tradidit illum.","notes":["mc3judas19"]},
    {"chapter":3,"n":20,"gr":"Καὶ ἔρχεται εἰς οἶκον· καὶ συνέρχεται πάλιν ὁ ὄχλος, ὥστε μὴ δύνασθαι αὐτοὺς μηδὲ ἄρτον φαγεῖν.","es":"Y entra en una casa. De nuevo se reúne la multitud, de modo que ellos ni siquiera podían comer.","la":"Et veniunt ad domum: et convenit iterum turba, ita ut non possent neque panem manducare.","notes":["mc3multitud20"]},
    {"chapter":3,"n":21,"gr":"καὶ ἀκούσαντες οἱ παρʼ αὐτοῦ ἐξῆλθον κρατῆσαι αὐτόν, ἔλεγον γὰρ ὅτι ἐξέστη.","es":"Al enterarse, los suyos salieron para hacerse cargo de él, pues decían: «Ha perdido el juicio».","la":"Et cum audissent sui, exierunt tenere eum: dicebant enim: Quoniam in furorem versus est.","notes":["mc3allegados21"]},
    {"chapter":3,"n":22,"gr":"καὶ οἱ γραμματεῖς οἱ ἀπὸ Ἱεροσολύμων καταβάντες ἔλεγον ὅτι Βεελζεβοὺλ ἔχει καὶ ὅτι ἐν τῷ ἄρχοντι τῶν δαιμονίων ἐκβάλλει τὰ δαιμόνια.","es":"Los escribas que habían bajado de Jerusalén decían: «Tiene a Beelzebul», y también: «Expulsa a los demonios por medio del jefe de los demonios».","la":"Et scribæ, qui ab Jerosolymis descenderant, dicebant: Quoniam Beelzebub habet, et quia in principe dæmoniorum ejicit dæmonia.","notes":["mc3acusacion22"]},
    {"chapter":3,"n":23,"gr":"καὶ προσκαλεσάμενος αὐτοὺς ἐν παραβολαῖς ἔλεγεν αὐτοῖς· Πῶς δύναται Σατανᾶς Σατανᾶν ἐκβάλλειν;","es":"Y, después de llamarlos, les hablaba mediante comparaciones: «¿Cómo puede Satanás expulsar a Satanás?»","la":"Et convocatis eis in parabolis dicebat illis: Quomodo potest Satanas Satanam ejicere?","notes":["mc3parabolas23"]},
    {"chapter":3,"n":24,"gr":"καὶ ἐὰν βασιλεία ἐφʼ ἑαυτὴν μερισθῇ, οὐ δύναται σταθῆναι ἡ βασιλεία ἐκείνη·","es":"Y si un reino se divide contra sí mismo, ese reino no puede mantenerse en pie.","la":"Et si regnum in se dividatur, non potest regnum illud stare.","notes":["mc3reino24"]},
    {"chapter":3,"n":25,"gr":"καὶ ἐὰν οἰκία ἐφʼ ἑαυτὴν μερισθῇ, οὐ δυνήσεται ἡ οἰκία ἐκείνη σταθῆναι·","es":"Y si una casa se divide contra sí misma, esa casa no podrá mantenerse en pie.","la":"Et si domus super semetipsam dispertiatur, non potest domus illa stare.","notes":["mc3casa25"]},
    {"chapter":3,"n":26,"gr":"καὶ εἰ ὁ Σατανᾶς ἀνέστη ἐφʼ ἑαυτὸν καὶ ἐμερίσθη, οὐ δύναται στῆναι ἀλλὰ τέλος ἔχει.","es":"Y si Satanás se ha levantado contra sí mismo y se ha dividido, no puede mantenerse en pie, sino que ha llegado a su fin.","la":"Et si Satanas consurrexerit in semetipsum, dispertitus est, et non poterit stare, sed finem habet.","notes":["mc3satan26"]},
    {"chapter":3,"n":27,"gr":"ἀλλ’ οὐδεὶς δύναται εἰς τὴν οἰκίαν τοῦ ἰσχυροῦ εἰσελθὼν τὰ σκεύη αὐτοῦ διαρπάσαι ἐὰν μὴ πρῶτον τὸν ἰσχυρὸν δήσῃ, καὶ τότε τὴν οἰκίαν αὐτοῦ διαρπάσει.","es":"Pero nadie puede entrar en la casa de un hombre fuerte y saquear sus bienes si antes no ata al hombre fuerte; entonces sí saqueará su casa.","la":"Nemo potest vasa fortis ingressus in domum diripere, nisi prius fortem alliget, et tunc domum ejus diripiet.","notes":["mc3fuerte27"]}
,
    {"chapter":3,"n":28,"gr":"Ἀμὴν λέγω ὑμῖν ὅτι πάντα ἀφεθήσεται τοῖς υἱοῖς τῶν ἀνθρώπων, τὰ ἁμαρτήματα καὶ αἱ βλασφημίαι ὅσα ἐὰν βλασφημήσωσιν·","es":"Les aseguro que a los seres humanos les serán perdonados todos los pecados y las blasfemias que lleguen a proferir.","la":"Amen dico vobis, quoniam omnia dimittentur filiis hominum peccata, et blasphemiæ quibus blasphemaverint:","notes":["mc3perdon28"]},
    {"chapter":3,"n":29,"gr":"ὃς δʼ ἂν βλασφημήσῃ εἰς τὸ πνεῦμα τὸ ἅγιον, οὐκ ἔχει ἄφεσιν εἰς τὸν αἰῶνα, ἀλλὰ ἔνοχός ἐστιν αἰωνίου ἁμαρτήματος.","es":"Pero quien blasfeme contra el Espíritu Santo no tendrá perdón jamás, sino que será culpable de un pecado eterno.","la":"qui autem blasphemaverit in Spiritum Sanctum, non habebit remissionem in æternum, sed reus erit æterni delicti.","notes":["mc3blasfemia29"]},
    {"chapter":3,"n":30,"gr":"ὅτι ἔλεγον· Πνεῦμα ἀκάθαρτον ἔχει.","es":"Porque decían: «Tiene un espíritu impuro».","la":"Quoniam dicebant: Spiritum immundum habet.","notes":["mc3explicacion30"]},
    {"chapter":3,"n":31,"gr":"Καὶ ἔρχονται ἡ μήτηρ αὐτοῦ καὶ οἱ ἀδελφοὶ αὐτοῦ καὶ ἔξω στήκοντες ἀπέστειλαν πρὸς αὐτὸν καλοῦντες αὐτόν.","es":"Llegaron su madre y sus hermanos; se quedaron afuera y mandaron a llamarlo.","la":"Et veniunt mater ejus et fratres: et foris stantes miserunt ad eum vocantes eum,","notes":["mc3familia31"]},
    {"chapter":3,"n":32,"gr":"καὶ ἐκάθητο περὶ αὐτὸν ὄχλος, καὶ λέγουσιν αὐτῷ· Ἰδοὺ ἡ μήτηρ σου καὶ οἱ ἀδελφοί σου ἔξω ζητοῦσίν σε.","es":"Una multitud estaba sentada alrededor de él, y le dicen: «Mira, tu madre y tus hermanos están afuera buscándote».","la":"et sedebat circa eum turba: et dicunt ei: Ecce mater tua et fratres tui foris quærunt te.","notes":["mc3familia32"]},
    {"chapter":3,"n":33,"gr":"καὶ ἀποκριθεὶς αὐτοῖς λέγει· Τίς ἐστιν ἡ μήτηρ μου ἢ οἱ ἀδελφοί μου;","es":"Él les responde: «¿Quién es mi madre, o quiénes son mis hermanos?».","la":"Et respondens eis, ait: Quæ est mater mea et fratres mei?","notes":["mc3familia33"]},
    {"chapter":3,"n":34,"gr":"καὶ περιβλεψάμενος τοὺς περὶ αὐτὸν κύκλῳ καθημένους λέγει· Ἴδε ἡ μήτηρ μου καὶ οἱ ἀδελφοί μου·","es":"Y, después de mirar a quienes estaban sentados en círculo a su alrededor, dice: «Aquí están mi madre y mis hermanos».","la":"Et circumspiciens eos, qui in circuitu ejus sedebant, ait: Ecce mater mea et fratres mei.","notes":["mc3familia34"]},
    {"chapter":3,"n":35,"gr":"ὃς γὰρ ἂν ποιήσῃ τὸ θέλημα τοῦ θεοῦ, οὗτος ἀδελφός μου καὶ ἀδελφὴ καὶ μήτηρ ἐστίν.","es":"Porque quien haga la voluntad de Dios, ese es mi hermano, mi hermana y mi madre.","la":"Qui enim fecerit voluntatem Dei, hic frater meus, et soror mea, et mater est.","notes":["mc3familia35"]}
    ,{"chapter":4,"n":1,"gr":"Καὶ πάλιν ἤρξατο διδάσκειν παρὰ τὴν θάλασσαν. καὶ συνάγεται πρὸς αὐτὸν ὄχλος πλεῖστος, ὥστε αὐτὸν εἰς πλοῖον ἐμβάντα καθῆσθαι ἐν τῇ θαλάσσῃ, καὶ πᾶς ὁ ὄχλος πρὸς τὴν θάλασσαν ἐπὶ τῆς γῆς ἦσαν.","es":"De nuevo comenzó a enseñar junto al mar. Se reúne a su alrededor una multitud enorme, de modo que él sube a una barca y se sienta en el mar, mientras toda la multitud permanece en tierra, junto a la orilla.","la":"Et iterum cœpit docere ad mare: et congregata est ad eum turba multa, ita ut navim ascendens sederet in mari, et omnis turba circa mare super terram erat:","notes":["mc4barca"]},
    {"chapter":4,"n":2,"gr":"καὶ ἐδίδασκεν αὐτοὺς ἐν παραβολαῖς πολλά καὶ ἔλεγεν αὐτοῖς ἐν τῇ διδαχῇ αὐτοῦ·","es":"Les enseñaba muchas cosas por medio de parábolas y, en el curso de su enseñanza, les decía:","la":"et docebat eos in parabolis multa, et dicebat illis in doctrina sua:","notes":["mc4parabolas"]},
    {"chapter":4,"n":3,"gr":"Ἀκούετε. ἰδοὺ ἐξῆλθεν ὁ σπείρων σπεῖραι.","es":"«Escuchen. Miren: salió el sembrador a sembrar».","la":"Audite: ecce exiit seminans ad seminandum.","notes":["mc4escuchen"]}
,
    {"chapter":4,"n":4,"gr":"καὶ ἐγένετο ἐν τῷ σπείρειν ὃ μὲν ἔπεσεν παρὰ τὴν ὁδόν, καὶ ἦλθεν τὰ πετεινὰ καὶ κατέφαγεν αὐτό.","es":"Y sucedió que, mientras sembraba, una parte de la semilla cayó junto al camino; llegaron las aves y se la comieron.","la":"Et dum seminat, aliud cecidit circa viam, et venerunt volucres cæli, et comederunt illud.","notes":["mc4camino"]},
    {"chapter":4,"n":5,"gr":"καὶ ἄλλο ἔπεσεν ἐπὶ τὸ πετρῶδες ὅπου οὐκ εἶχεν γῆν πολλήν, καὶ εὐθὺς ἐξανέτειλεν διὰ τὸ μὴ ἔχειν βάθος γῆς·","es":"Otra parte cayó en terreno pedregoso, donde no había mucha tierra, y brotó enseguida porque la tierra no tenía profundidad.","la":"Aliud vero cecidit super petrosa, ubi non habuit terram multam : et statim exortum est, quoniam non habebat altitudinem terræ :","notes":["mc4pedregoso"]}
    ,{"chapter":4,"n":6,"gr":"καὶ ὅτε ἀνέτειλεν ὁ ἥλιος ἐκαυματίσθη καὶ διὰ τὸ μὴ ἔχειν ῥίζαν ἐξηράνθη.","es":"Y cuando salió el sol, quedó abrasada y, como no tenía raíz, se secó.","la":"et quando exortus est sol, exæstuavit: et eo quod non habebat radicem, exaruit.","notes":["mc4sol"]}
    ,{"chapter":4,"n":7,"gr":"καὶ ἄλλο ἔπεσεν εἰς τὰς ἀκάνθας, καὶ ἀνέβησαν αἱ ἄκανθαι καὶ συνέπνιξαν αὐτό, καὶ καρπὸν οὐκ ἔδωκεν.","es":"Otra parte cayó entre los espinos; los espinos crecieron, la ahogaron y no dio fruto.","la":"Et aliud cecidit in spinas: et ascenderunt spinæ, et suffocaverunt illud, et fructum non dedit.","notes":["mc4espinos"]}
    ,{"chapter":4,"n":8,"gr":"καὶ ἄλλα ἔπεσεν εἰς τὴν γῆν τὴν καλήν, καὶ ἐδίδου καρπὸν ἀναβαίνοντα καὶ αὐξανόμενα, καὶ ἔφερεν ἓν τριάκοντα καὶ ἓν ἑξήκοντα καὶ ἓν ἑκατόν.","es":"Otras semillas cayeron en tierra buena y dieron fruto: brotaron, crecieron y produjeron, unas treinta, otras sesenta y otras cien veces lo sembrado.","la":"Et aliud cecidit in terram bonam: et dabat fructum ascendentem et crescentem, et afferebat unum triginta, unum sexaginta, et unum centum.","notes":["mc4fruto"]}
    ,{"chapter":4,"n":9,"gr":"καὶ ἔλεγεν· Ὃς ἔχει ὦτα ἀκούειν ἀκουέτω.","es":"Y decía: «Quien tenga oídos para oír, que escuche».","la":"Et dicebat: Qui habet aures audiendi, audiat.","notes":["mc4oidos"]}
    ,{"chapter":4,"n":10,"gr":"Καὶ ὅτε ἐγένετο κατὰ μόνας, ἠρώτων αὐτὸν οἱ περὶ αὐτὸν σὺν τοῖς δώδεκα τὰς παραβολάς.","es":"Cuando quedó a solas, quienes estaban a su alrededor, junto con los Doce, le preguntaban por las parábolas.","la":"Et cum esset singularis, interrogaverunt eum hi qui cum eo erant duodecim, parabolam.","notes":["mc4privado"]}
    ,{"chapter":4,"n":11,"gr":"καὶ ἔλεγεν αὐτοῖς· Ὑμῖν τὸ μυστήριον δέδοται τῆς βασιλείας τοῦ θεοῦ· ἐκείνοις δὲ τοῖς ἔξω ἐν παραβολαῖς τὰ πάντα γίνεται,","es":"Y les decía: «A ustedes se les ha dado el misterio del reino de Dios; para aquellos de afuera, en cambio, todo sucede en parábolas,","la":"Et dicebat eis: Vobis datum est nosse mysterium regni Dei: illis autem, qui foris sunt, in parabolis omnia fiunt:","notes":["mc4misterio"]}
    ,{"chapter":4,"n":12,"gr":"ἵνα βλέποντες βλέπωσι καὶ μὴ ἴδωσιν, καὶ ἀκούοντες ἀκούωσι καὶ μὴ συνιῶσιν, μήποτε ἐπιστρέψωσιν καὶ ἀφεθῇ αὐτοῖς.","es":"para que miren y miren, pero no perciban; para que oigan y oigan, pero no comprendan; no sea que se vuelvan y se les perdone».","la":"ut videntes videant, et non videant: et audientes audiant, et non intelligant: nequando convertantur, et dimittantur eis peccata.","notes":["mc4isaias"]}
    ,{"chapter":4,"n":13,"gr":"Καὶ λέγει αὐτοῖς· Οὐκ οἴδατε τὴν παραβολὴν ταύτην, καὶ πῶς πάσας τὰς παραβολὰς γνώσεσθε;","es":"Y les dice: «¿No comprenden esta parábola? ¿Cómo comprenderán entonces todas las parábolas?»","la":"Et ait illis: Nescitis parabolam hanc? Et quomodo omnes parabolas cognoscetis?","notes":["mc4comprender"]}
    ,{"chapter":4,"n":14,"gr":"ὁ σπείρων τὸν λόγον σπείρει.","es":"El sembrador siembra la palabra.","la":"Qui seminat, verbum seminat.","notes":["mc4sembrador"]}
    ,{"chapter":4,"n":15,"gr":"οὗτοι δέ εἰσιν οἱ παρὰ τὴν ὁδὸν ὅπου σπείρεται ὁ λόγος, καὶ ὅταν ἀκούσωσιν εὐθὺς ἔρχεται ὁ Σατανᾶς καὶ αἴρει τὸν λόγον τὸν ἐσπαρμένον εἰς αὐτούς.","es":"Estos son los que están junto al camino, donde se siembra la palabra: cuando la oyen, enseguida viene Satanás y les quita la palabra sembrada en ellos.","la":"Hi autem sunt, qui circa viam, ubi seminatur verbum, et cum audierint, confestim venit Satanas, et aufert verbum, quod seminatum est in cordibus eorum.","notes":["mc4camino","mc4variante"]}
  ];

  const notes = {
    mc4camino: ["Los oyentes junto al camino", "οἱ παρὰ τὴν ὁδόν identifica a los oyentes con el terreno del camino en una construcción elíptica; ὅταν ἀκούσωσιν combina ὅταν con subjuntivo aoristo. Cf. Cambridge Greek Testament for Schools and Colleges, comentario a Mc 4,15: https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/4/15."],
    mc4variante: ["La palabra sembrada: variante textual", "SBLGNT lee εἰς αὐτούς («en ellos»), mientras la Clementina explicita in cordibus eorum («en sus corazones»). Hay testigos con ἐν αὐτοῖς y otros con ἐν ταῖς καρδίαις αὐτῶν, lectura próxima a Mateo 13,19. Cf. Bruce M. Metzger, A Textual Commentary on the Greek New Testament, Mc 4,15: https://www.bibliaplus.org/en/commentaries/428/a-textual-commentary-on-the-greek-new-testament-by-bruce-m-metzger/mark/4/15; Vulgata Clementina: https://biblia.com/bible/vulgataclem/mark/4/15-19."],
    mc4comprender: ["Comprender y llegar a conocer", "οἴδατε (perfecto con sentido presente) contrasta con γνώσεσθε (futuro medio): la pregunta contrapone la comprensión actual de esta parábola a la comprensión futura de las demás. La puntuación de dos interrogaciones es editorial; Cambridge Greek Testament también contempla otra articulación. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 4,13, https://biblia.com/bible/sblgnt/mark/4/13-14; Cambridge Greek Testament for Schools and Colleges, comentario a Mc 4,13, https://lemma.gebible.app/v/mark/4/14."],
    mc4sembrador: ["La palabra sembrada", "El participio sustantivado ὁ σπείρων designa al sembrador, sin identificarlo nominalmente. τὸν λόγον es el objeto de σπείρει y aclara el sentido de la semilla. Cambridge Greek Testament advierte que la identificación del sembrador con Jesús, sus ministros o la comunidad es interpretación, no una precisión del versículo. Cf. Ezra P. Gould, International Critical Commentary (1896), Mc 4,14; Cambridge Greek Testament for Schools and Colleges, Mc 4,14, https://lemma.gebible.app/v/mark/4/14; Vulgata Clementina, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/4/."],
    mc4privado: ["Una pregunta en privado","κατὰ μόνας señala una situación apartada de la multitud; οἱ περὶ αὐτὸν σὺν τοῖς δώδεκα distingue a los que rodean a Jesús de los Doce, sin reducir necesariamente el grupo a estos últimos. El plural τὰς παραβολάς contrasta con el singular parabolam de la Clementina. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,10, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 4,10, https://biblia.com/bible/vulgataclem/mark/4/9-12."],
    mc4misterio: ["El misterio y quienes están afuera","δέδοται es perfecto pasivo de δίδωμι: el misterio «ha sido dado»; el texto griego no incluye un infinitivo «conocer», presente en la Clementina (datum est nosse). «Los de afuera» (τοῖς ἔξω) retoma una oposición espacial y social ya visible en Mc 3,31–35. No debe confundirse esta oposición narrativa con una identificación histórica inequívoca de sus destinatarios. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,11, https://biblia.com/bible/sblgnt/mark/4; Vulgata Clementina, Mc 4,11, https://biblia.com/bible/vulgataclem/mark/4/11-12."],
    mc4isaias: ["Una cita difícil de Isaías","La formulación remite a Is 6,9–10; ἵνα y μήποτε plantean una dificultad interpretativa: la sintaxis expresa finalidad o resultado en el relato, sin resolver por sí sola su alcance teológico. La Clementina añade explícitamente peccata («pecados»), ausente del griego SBLGNT. M. Yurovitskaya (2022), «Reconsidering the Textual Background of Mark 4.12», Journal of Septuagint and Cognate Studies 55, pp. 141–153, propone como hipótesis una revisión hebraizante de la Septuaginta para explicar ἀφεθῇ; no es una identificación textual demostrada. Fuentes: https://publications.hse.ru/en/articles/802061791; Holmes (ed.), SBLGNT, Mc 4,12, https://biblia.com/bible/sblgnt/mark/4; Vulgata Clementina, https://biblia.com/bible/vulgataclem/mark/4/11-12."],
    mc4fruto: ["El rendimiento de la tierra buena","El imperfecto ἐδίδου presenta una producción continuada; los participios ἀναβαίνοντα y αὐξανόμενα describen el crecimiento. La serie ἓν τριάκοντα, ἓν ἑξήκοντα, ἓν ἑκατόν asciende de treinta a cien, a diferencia del orden descendente de Mt 13,8. SBLGNT conserva el plural neutro αὐξανόμενα, frente a αὐξάνοντα en la tradición del Textus Receptus. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 4,8, https://biblia.com/bible/sblgnt/mark/4/8-9; A. B. Bruce, The Expositor’s Greek Testament, Mc 4,8, https://biblehub.com/commentaries/egt/mark/4.htm; Vulgata Clementina, https://biblia.com/bible/vulgataclem/mark/4/8-9."],
    mc4oidos: ["Una exhortación a escuchar","Ὃς ἔχει ὦτα ἀκούειν ἀκουέτω combina una relativa general con el imperativo presente de tercera persona ἀκουέτω. La fórmula concluye la parábola y prepara la explicación posterior sobre escuchar y comprender (Mc 4,10–20); no es una afirmación sobre la capacidad auditiva física. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,9, https://biblia.com/bible/sblgnt/mark/4/8-9; Vulgata Clementina, Mc 4,9, https://biblia.com/bible/vulgataclem/mark/4/8-9."],
    mc4espinos: ["Los espinos y la falta de fruto","εἰς τὰς ἀκάνθας sitúa la semilla entre espinos; ἀνέβησαν y συνέπνιξαν presentan su crecimiento y el ahogamiento de la planta. καρπὸν οὐκ ἔδωκεν explicita la ausencia de cosecha, detalle que Marcos añade frente a los paralelos de Mt 13,7 y Lc 8,7. La Clementina traduce suffocaverunt illud. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 4,7, https://github.com/Faithlife/SBLGNT; James K. Tauber, MorphGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Robert G. Bratcher y Eugene A. Nida, A Handbook on the Gospel of Mark (1961), Mc 4,7, https://tips.translation.bible/tip_verse/mark-47/; Cambridge Greek Testament for Schools and Colleges, Mc 4,7, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/4/7; Vulgata Clementina, https://biblia.com/bible/vulgataclem/mark/4/7-9."],
    mc4sol: ["El sol y la raíz","Los aoristos pasivos ἐκαυματίσθη y ἐξηράνθη narran el daño y el marchitamiento de la semilla; διὰ τὸ μὴ ἔχειν ῥίζαν expresa la causa mediante infinitivo articular. En el texto bizantino se documenta la construcción alternativa ἡλίου δὲ ἀνατείλαντος, frente a καὶ ὅτε ἀνέτειλεν ὁ ἥλιος de SBLGNT; no se altera la lectura base. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,6, https://biblia.com/bible/sblgnt/mark/4; MorphGNT 6.12, Mc 4,6, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 4,6, https://www.catholicshare.com/bible/clementine-vulgate/mark/4/; cotejo de tradiciones en https://biblehub.com/text/mark/4-6.htm."],
    mc4camino: ["La semilla junto al camino","ἐν τῷ σπείρειν es un infinitivo articular de valor temporal («mientras sembraba»); ὃ μὲν presenta el primer destino de la semilla. παρὰ τὴν ὁδόν significa literalmente «junto al camino». El griego dice τὰ πετεινά («las aves»), mientras la Clementina amplía volucres cæli («las aves del cielo»). Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 4,4, https://biblia.com/bible/sblgnt/mark/4; Vulgata Clementina, Mc 4,4, https://biblehub.com/vul/mark/4.htm; Bratcher y Nida, A Handbook on the Gospel of Mark (1961), comentario a 4,4, https://old-tips.translation.bible/story/translation-commentary-on-mark-44/."],
    mc4pedregoso: ["El suelo pedregoso","τὸ πετρῶδες designa el terreno rocoso; διὰ τὸ μὴ ἔχειν βάθος γῆς es una construcción causal con infinitivo articular: el brote rápido se explica por la poca profundidad de la tierra, no por una mayor fertilidad. La Clementina expresa «super petrosa» y «altitudinem terræ». Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,5, https://biblia.com/bible/sblgnt/mark/4; Vulgata Clementina, Mc 4,5, https://biblehub.com/vul/mark/4.htm."],
    mc4barca: ["La barca y la multitud","El presente histórico συνάγεται contrasta con ἤρξατο; el singular colectivo ὄχλος aparece con ἦσαν en plural al final del versículo. El griego sitúa la barca ἐν τῇ θαλάσσῃ y a la multitud ἐπὶ τῆς γῆς: la oposición espacial es explícita, no una prueba de condiciones acústicas. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 4,1, https://biblehub.com/sbl/mark/4.htm; Sinopsis griega, https://www.virtualreligion.net/primer/sower_gr.html."],
    mc4parabolas: ["En parábolas","ἐν παραβολαῖς expresa el modo de enseñanza; πολλά es acusativo neutro plural, «muchas cosas». El imperfecto ἐδίδασκεν presenta la enseñanza como actividad en curso. Fuente: Holmes (ed.), SBLGNT (2010), Mc 4,2, https://biblehub.com/sbl/mark/4.htm."],
    mc4escuchen: ["Escuchar antes de interpretar","Ἀκούετε es imperativo presente de segunda persona plural; ἰδού introduce la escena y ὁ σπείρων sustantiva el participio: «el que siembra». El infinitivo σπεῖραι expresa el propósito de la salida. Fuente: Holmes (ed.), SBLGNT (2010), Mc 4,3, https://biblehub.com/sbl/mark/4.htm."],
    mc3familia32: ["La familia afuera","La oposición entre ἔξω («afuera») y περὶ αὐτόν («alrededor de él») estructura la escena. Algunos testigos añaden «y tus hermanas», palabras ausentes del SBLGNT, pero las hermanas aparecen en 3,35. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,32, https://biblehub.com/sbl/mark/3.htm; A. B. Bruce, Expositor's Greek Testament, Mc 3,32, https://biblehub.com/commentaries/egt/mark/3.htm."],
    mc3familia33: ["La pregunta sobre el parentesco","Τίς ἐστιν («¿quién es?») inicia una pregunta retórica que se resuelve en 3,34–35. No implica que Jesús desconozca la identidad de su familia. Paralelos: Mt 12,48–50 y Lc 8,21. Fuente: Holmes (ed.), SBLGNT (2010), Mc 3,33–35, https://biblehub.com/sbl/mark/3.htm."],
    mc3familia34: ["Una mirada circular","περιβλεψάμενος es participio aoristo medio de περιβλέπομαι; κύκλῳ refuerza la disposición circular. El mismo verbo aparece en Mc 3,5, acompañado allí de ira, sentimiento que no se debe trasladar automáticamente a 3,34. Fuente: A. B. Bruce, Expositor's Greek Testament, Mc 3,34, https://biblehub.com/commentaries/egt/mark/3.htm."],
    mc3familia35: ["La condición abierta","ὃς γὰρ ἂν ποιήσῃ expresa una condición general mediante ἄν y subjuntivo aoristo: «quien haga». ἀδελφός, ἀδελφή y μήτηρ funcionan como predicados sin artículo; se redefine la pertenencia, no se presenta una genealogía. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,35, https://biblehub.com/sbl/mark/3.htm; Bruce, Expositor's Greek Testament, Mc 3,35, https://biblehub.com/commentaries/egt/mark/3.htm; Vulgata Clementina, https://biblia.com/bible/vulgataclem/mark/3/31-35."],
    mc3familia31: ["Familia, espacio y variantes","La escena retoma a los allegados de 3,21 sin declarar aquí sus intenciones. SBLGNT lee ἔρχονται (plural), στήκοντες y καλοῦντες, frente a ἔρχεται, ἑστῶτες y φωνοῦντες en otras tradiciones. El contraste ἔξω / περὶ αὐτὸν prepara 3,34–35. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,31 y aparato, https://biblia.com/bible/sblgnt/mark/3/31; Vulgata Clementina, Mc 3,31, https://biblia.com/bible/vulgataclem/mark/3/31-35."],
    mc3perdon28: ["La amplitud del perdón","πάντα se precisa mediante τὰ ἁμαρτήματα καὶ αἱ βλασφημίαι; ὅσα ἐὰν βλασφημήσωσιν expresa una eventualidad general mediante subjuntivo aoristo. Bruce observa alternativas para la relación sintáctica de πάντα con los sustantivos. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,28, https://biblia.com/bible/sblgnt/mark/3; A. B. Bruce, Expositor’s Greek Testament, Mc 3,28, https://www.biblehub.com/commentaries/egt/mark/3.htm."],
    mc3blasfemia29: ["Pecado eterno y variante textual","SBLGNT lee αἰωνίου ἁμαρτήματος («de un pecado eterno»), mientras el texto recibido lee κρίσεως («juicio»). No son traducciones equivalentes. εἰς τὸν αἰῶνα y αἰωνίου repiten el campo semántico de la duración; la Clementina presenta æterni delicti. La advertencia se vincula con la acusación narrada en 3,30, sin que ello agote su interpretación teológica. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,29 y aparato, https://biblia.com/bible/sblgnt/mark/3; Bruce, Expositor’s Greek Testament, Mc 3,29, https://www.biblehub.com/commentaries/egt/mark/3.htm; Vulgata Clementina, Mc 3,29, https://biblia.com/bible/vulgataclem/mark/3/28-30."],
    mc3explicacion30: ["La explicación del narrador","ὅτι introduce la explicación del narrador; el imperfecto ἔλεγον remite a la acusación reiterada de 3,22. «Tiene un espíritu impuro» reproduce la imputación de los escribas, no una constatación independiente. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,22 y 3,30, https://biblia.com/bible/sblgnt/mark/3; Vulgata Clementina, Mc 3,30, https://biblia.com/bible/vulgataclem/mark/3/28-30."],
    mc3fuerte27: ["La casa del hombre fuerte", "El participio εἰσελθὼν precede al infinitivo διαρπάσαι; ἐὰν μὴ ... δήσῃ formula la condición previa para el saqueo, y διαρπάσει (futuro) su consecuencia. σκεύη designa los bienes o enseres de la casa, no necesariamente armas. El hombre fuerte se interpreta como Satanás a partir del contexto (3,22–26), pero no es nombrado en el símil. La Clementina emplea vasa fortis y alliget. Paralelos: Mt 12,29 y Lc 11,21–22, sin armonización. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 3,27, https://www.biblestudytools.com/sblg/mark/3.html; Tauber (ed.), MorphGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,27, https://biblia.com/bible/vulgataclem/mark/3/27-30."],
    mc3satan26: ["La conclusión sobre Satanás", "εἰ con ἀνέστη y ἐμερίσθη (aoristos de indicativo) aplica a Satanás el argumento de 3,24–25; οὐ δύναται στῆναι presenta la consecuencia en presente, y τέλος ἔχει expresa su final. La Clementina usa consurrexerit y non poterit, futuro donde el griego tiene presente. Algunas tradiciones leen μεμέρισται y σταθῆναι; no se incorporan al texto SBLGNT. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,26, https://www.biblestudytools.com/sblg/mark/3-26.html; James K. Tauber, MorphGNT 6.12, Mc 3,26, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,26, https://biblia.com/bible/vulgataclem/mark/3/26-27; cotejo de variantes, https://www.bibelkommentare.de/index/bibel/markus/3/26."],
    mc3casa25: ["La casa dividida","La repetición de οἰκία retoma, en escala doméstica, el argumento sobre βασιλεία (3,24). ἐὰν con μερισθῇ (aoristo subjuntivo pasivo) formula una hipótesis; δυνήσεται (futuro medio de δύναμαι) sustituye al presente δύναται del versículo anterior: la casa no podrá mantenerse en pie. La Clementina utiliza non potest, sin reproducir el futuro griego, y super semetipsam dispertiatur. οἰκία puede designar una unidad doméstica, además del edificio. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,25, https://biblia.com/bible/sblgnt/mark/3; James K. Tauber, MorphGNT 6.12, Mc 3,25, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; A. B. Bruce, Expositor’s Greek Testament, Mc 3,24–26, https://www.biblehub.com/commentaries/egt/mark/3.htm; Vulgata Clementina, Mc 3,25, https://biblia-online.pl/Porownaj/Wersety/Tysiaclecia/Ewangelia-Marka/3/25."],

    mc3reino24: ["El reino dividido","ἐὰν con μερισθῇ (aoristo subjuntivo pasivo) plantea una condición general; οὐ δύναται σταθῆναι expresa la imposibilidad de mantenerse en pie. La repetición de βασιλεία enlaza la premisa con su conclusión. La comparación se amplía a la casa en 3,25 y a Satanás en 3,26: es un argumento retórico, no una descripción histórica de un reino concreto. La Clementina emplea dividatur y stare. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,24, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; James K. Tauber (ed.), MorphGNT 6.12, Mc 3,24, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; A. B. Bruce, Expositor’s Greek Testament, Mc 3,24–26, https://www.biblehub.com/commentaries/egt/mark/3.htm; Vulgata Clementina, Mc 3,24, https://biblia.com/bible/vulgataclem/mark/3/24-25."],
    mc3parabolas23: ["Una pregunta en comparaciones","προσκαλεσάμενος es participio aoristo medio; ἔλεγεν es imperfecto. ἐν παραβολαῖς introduce aquí comparaciones argumentativas. La repetición Σατανᾶς (nominativo) / Σατανᾶν (acusativo) plantea la contradicción de que Satanás expulse a Satanás. La Clementina conserva Satanas Satanam. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,23, https://biblia.com/bible/sblgnt/mark/3/22-23; James K. Tauber (ed.), MorphGNT 6.12 (2017), https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,23, https://biblia.com/bible/vulgataclem/mark/3/23-27."],
    mc3acusacion22: ["La acusación de los escribas","El imperfecto ἔλεγον presenta una acusación reiterada; καταβάντες indica procedencia de Jerusalén, no prueba por sí solo una comisión oficial. La fórmula Βεελζεβοὺλ ἔχει significa literalmente «tiene a Beelzebul»; la Clementina escribe Beelzebub. La construcción ἐν τῷ ἄρχοντι expresa aquí el medio o poder atribuido a la expulsión. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,22, https://biblia.com/bible/sblgnt/mark/3/22-26; James K. Tauber, MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,22, https://biblia.com/bible/vulgataclem/mark/3/22."],
    mc3multitud20: ["La multitud y la comida","ὥστε con infinitivo indica el resultado de la aglomeración. αὐτούς es plural: el impedimento afecta a Jesús y a quienes lo acompañan, sin precisar más. ἄρτον φαγεῖν es una expresión ordinaria para comer. La Clementina conserva el plural (non possent). Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,20, https://biblehub.com/sbl/mark/3.htm; Vulgata Clementina, Mc 3,20, https://biblia.com/bible/vulgataclem/mark/3/20-21."],
    mc3allegados21: ["Los suyos y la acusación","οἱ παρʼ αὐτοῦ puede designar a los allegados o familiares; la relación con 3,31 favorece la segunda posibilidad, pero la expresión por sí sola no la impone. κρατῆσαι significa sujetar o tomar bajo control; ἐξέστη admite «ha perdido el juicio» en este contexto. La identificación del sujeto de ἔλεγον ha sido discutida: la lectura más inmediata lo vincula a los allegados. La Clementina traduce sui e in furorem versus est. Fuentes: Holmes, SBLGNT, Mc 3,21, https://biblehub.com/sbl/mark/3.htm; William D. Mounce, «Those from [παρά] him (Mark 3:21)», https://www.billmounce.com/blog/mwm/those-para-him-mark-3-21; Vulgata Clementina, Mc 3,21, https://biblia.com/bible/vulgataclem/mark/3/20-21."],
    mc3reiteracion16: ["La reiteración de los Doce","El griego SBLGNT conserva καὶ ἐποίησεν τοὺς δώδεκα («y constituyó a los doce»), repetición de 3,14 omitida en otras tradiciones y ausente en la Clementina de 3,16. No se elimina como redundancia. ἐπέθηκεν ὄνομα indica la imposición del nombre Pedro a Simón. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,16, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Cambridge Greek Testament, Mc 3,16, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/3; Vulgata Clementina, Mc 3,16, https://biblia.com/bible/vulgataclem/mark/3/16-19."],
    mc3boanerges17: ["Boanergés y los nombres","Βοανηργές es un sobrenombre transliterado que el propio texto explica como «Hijos del trueno» (Υἱοὶ Βροντῆς); su etimología exacta y el motivo histórico de su atribución son discutidos. El plural ὀνόματα es la lectura SBLGNT; hay testimonios con singular ὄνομα. Fuentes: Holmes, SBLGNT, Mc 3,17, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Marvin R. Vincent, Word Studies in the New Testament, comentario a Mc 3,17, https://biblehub.com/commentaries/mark/3-17.htm."],
    mc3cananeo18: ["Simón el Cananeo","Καναναῖον no debe interpretarse como «natural de Caná» ni «de Canaán» sin prueba. La tradición lo relaciona con un epíteto semítico de celo; Lc 6,15 llama a Simón ζηλωτής («zelota»), pero la identificación histórica con un movimiento organizado no se deduce automáticamente de este sobrenombre. Hay variantes de la forma griega. Fuentes: Cambridge Greek Testament for Schools and Colleges, Mc 3,18, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/3; Lc 6,15; Holmes, SBLGNT (2010), Mc 3,18."],
    mc3judas19: ["La identificación de Judas","La cláusula relativa ὃς καὶ παρέδωκεν αὐτόν identifica retrospectivamente a Judas por la entrega de Jesús; παραδίδωμι significa «entregar, poner en manos de», y el contexto narrativo determinará la valoración del acto. La lectura Ἰσκαριώθ presenta variantes de forma. Fuentes: Holmes, SBLGNT (2010), Mc 3,19, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Cambridge Greek Testament for Schools and Colleges, Mc 3,19, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/3."],
    mc3llamamiento13: ["La subida al monte y la convocatoria","El presente histórico ἀναβαίνει, seguido de προσκαλεῖται, introduce una nueva escena. οὓς ἤθελεν αὐτός subraya la iniciativa de Jesús; ἀπῆλθον expresa que los convocados acudieron. No se identifica el monte. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,13, https://biblehub.com/sbl/mark/3.htm; James K. Tauber (ed.), MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt."],
    mc3doce14: ["Constituyó a doce","ἐποίησεν δώδεκα puede traducirse «constituyó a doce»; las dos cláusulas ἵνα expresan compañía y envío, sin reducir el grupo exclusivamente a una función misionera. Algunos testimonios incluyen οὓς καὶ ἀποστόλους ὠνόμασεν («a quienes también llamó apóstoles»), ausente del texto SBLGNT adoptado aquí; la variante no se incorpora al cuerpo. Fuentes: Holmes, SBLGNT (2010), Mc 3,14, https://biblehub.com/sbl/mark/3.htm; SIL, Translator's Notes on Mark 3:14, https://tips.translation.bible/story/sil-translators-notes-on-mark-314/."],
    mc3autoridad15: ["Autoridad y divergencia latina","ἐξουσίαν expresa autoridad o potestad, y ἐκβάλλειν designa expulsar. El griego SBLGNT de 3,15 solo menciona expulsar demonios; la Clementina añade curandi infirmitates («curar enfermedades»), diferencia textual que se conserva sin armonizar. Fuentes: Holmes, SBLGNT (2010), Mc 3,15, https://biblehub.com/sbl/mark/3.htm; Vulgata Clementina, Mc 3,15, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3espiritus11: ["Los espíritus impuros y la confesión","ὅταν con los imperfectos ἐθεώρουν, προσέπιπτον y ἔκραζον presenta una acción repetida: «cada vez que lo veían». El participio neutro plural λέγοντα concuerda con πνεύματα, no con personas explícitamente nombradas. El texto atribuye la declaración «Tú eres el Hijo de Dios» a los espíritus impuros; la interpretación de su conocimiento o intención pertenece al plano exegético. En la Clementina, la declaración se encuentra al comienzo del versículo 12, una diferencia de segmentación, no una omisión. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,11, https://github.com/Faithlife/SBLGNT; James K. Tauber, MorphGNT SBLGNT 6.12, Mc 3,11, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,11–12, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3silencio12: ["La prohibición de divulgarlo","πολλὰ funciona adverbialmente con ἐπετίμα: la reprensión es insistente o enérgica; el imperfecto indica reiteración o duración en la escena. ἵνα μή con subjuntivo aoristo ποιήσωσιν introduce el contenido de la prohibición. φανερὸν ποιεῖν significa «hacer manifiesto» o «dar a conocer». La Clementina coloca «Tu es Filius Dei» al comienzo de 3,12, mientras que SBLGNT lo incluye en 3,11; no deben forzarse equivalencias versículo a versículo en la columna latina. Fuentes: Holmes, SBLGNT (2010), Mc 3,12, https://github.com/Faithlife/SBLGNT; Tauber, MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,11–12, https://biblia.com/bible/vulgataclem/mark/3/11-12."],
    mc3multitud10: ["La presión de la multitud", "ὥστε + infinitivo (ἐπιπίπτειν) expresa el resultado de las curaciones: quienes padecían enfermedades se abalanzaban sobre Jesús para tocarlo (ἵνα ... ἅψωνται). μάστιγας, literalmente «azotes», designa aquí dolencias, como en Marcos 5,29 y 5,34; no obliga a interpretar cada enfermedad como castigo divino. El aoristo ἐθεράπευσεν y el imperfecto latino sanabat conservan aspectos narrativos distintos. Una variante minoritaria registra ἐθεράπευεν en lugar de ἐθεράπευσεν; se mantiene SBLGNT. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,10, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; James K. Tauber (ed.), MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,10, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/; A. B. Bruce, en W. Robertson Nicoll (ed.), The Expositor’s Greek Testament, Mc 3,10, https://biblehub.com/commentaries/egt/mark/3.htm; aparato comparativo de manuscritos, https://greeknewtestament.net/mk3-10."],
    mc3barca9: ["La pequeña embarcación", "πλοιάριον designa una embarcación pequeña. προσκαρτερῇ es subjuntivo presente: se pide que la barca permanezca disponible; el relato no afirma que Jesús embarcara. Las dos cláusulas con ἵνα presentan la disposición de la barca y la prevención de la presión física de la multitud (θλίβωσιν). El aoristo εἶπεν del griego contrasta con dicit, presente de la Clementina. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,9, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; James K. Tauber (ed.), MorphGNT SBLGNT 6.12 (2017), https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,9, https://biblia.com/bible/vulgataclem/mark/3/9-10; W. Robertson Nicoll (ed.), The Expositor’s Greek Testament, Mc 3,9, https://biblehub.com/commentaries/mark/3-9.htm."],
    mc3geografia8: ["La geografía de las multitudes", "La enumeración continúa la de 3,7: Galilea, Judea, Jerusalén, Idumea, la región transjordana y las cercanías de Tiro y Sidón. La mención de esos territorios no demuestra por sí sola la identidad religiosa de quienes acudieron. ἀκούοντες es participio masculino plural, aunque πλῆθος es neutro singular: concordancia según el sentido colectivo. ἐποίει es imperfecto y presenta una actividad continuada. La Clementina conserva su propia construcción, sin armonizarla con el griego. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,8, https://www.biblestudytools.com/sblg/mark/3.html; James K. Tauber (ed.), MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; A. T. Robertson, Word Pictures in the New Testament, Mc 3,8, https://www.bibliaplus.org/en/commentaries/464/robertsons-word-pictures-of-the-new-testament/mark/3/8; Vulgata Clementina, Mc 3,8, https://biblia.com/bible/vulgataclem/mark/3/7-8."],
    mc3retirada7: ["Retirada y procedencia de la multitud", "ἀνεχώρησεν significa que Jesús se retiró; el verbo no prueba por sí solo que huyera, aunque el contexto de 3,6 permite interpretar una retirada prudente. El sujeto singular πολὺ πλῆθος concuerda con ἠκολούθησεν, también singular. La enumeración de lugares continúa en 3,8: el corte de versículo no equivale a un cierre sintáctico. La Clementina reúne Galilea y Judea en una misma multitud, sin reproducir necesariamente la segmentación sintáctica del griego. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,7, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Cambridge Greek Testament for Schools and Colleges, comentario a Mc 3,7–8, https://www.bibliaplus.org/en/commentaries/236/cambridge-greek-testament-for-schools-and-colleges-commentary/mark/3/7%2C8; W. Robertson Nicoll (ed.), The Expositor’s Greek Testament, Mc 3,7, https://biblehub.com/commentaries/egt/mark/3.htm; Vulgata Clementina, Mc 3,7, https://biblia.com/bible/vulgataclem/mark/3/7-8."],
    mc3ira5: ["Ira, aflicción y restauración","El participio aoristo περιβλεψάμενος presenta la mirada previa al presente histórico λέγει; el participio presente συλλυπούμενος expresa la aflicción simultánea. πώρωσις designa el endurecimiento o insensibilidad del corazón, no un diagnóstico médico. La Clementina traduce «cæcitate cordis», con una imagen distinta. ἀπεκατεστάθη es aoristo pasivo: la mano quedó restablecida. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,5, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; W. Robertson Nicoll (ed.), The Expositor’s Greek Testament, Mc 3,5, https://www.studylight.org/commentaries/eng/egt/mark-3.html; Vulgata Clementina, Mc 3,5, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3conspiracion6: ["La alianza contra Jesús","El imperfecto ἐδίδουν, junto con συμβούλιον, describe una deliberación en curso; ὅπως con subjuntivo expresa el objetivo de acabar con Jesús. «Herodianos» designa a partidarios vinculados con la casa de Herodes, aunque el texto no define su organización ni autoriza a reconstruir una alianza institucional estable. El adverbio εὐθύς intensifica la inmediatez narrativa. La Clementina tiene «consilium faciebant ... quomodo eum perderent», sin reproducir literalmente la subordinada final griega. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,6, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; W. Robertson Nicoll (ed.), The Expositor’s Greek Testament, Mc 3,6, https://www.studylight.org/commentaries/eng/egt/mark-3.html; Vulgata Clementina, Mc 3,6, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3pregunta4: ["La pregunta y el silencio", "Los infinitivos aoristos ἀγαθοποιῆσαι, κακοποιῆσαι, σῶσαι y ἀποκτεῖναι forman dos alternativas paralelas. ψυχὴν puede designar aquí la vida de una persona, no necesariamente un alma separada del cuerpo. El imperfecto ἐσιώπων presenta el silencio de los interlocutores. La Clementina conserva la oposición con benefacere / male y salvam facere / perdere, sin reproducir exactamente el verbo griego «matar». Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,4, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; James K. Tauber (ed.), MorphGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 3,4, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3centro3: ["En medio de todos", "El presente histórico λέγει da viveza al diálogo. El participio ἔχοντι concuerda con ἀνθρώπῳ; ξηράν califica χεῖρα. La orden Ἔγειρε εἰς τὸ μέσον pide levantarse y situarse en el centro, a la vista de los presentes; todavía no describe la curación. La Clementina dice «Surge in medium». Fuentes: Robert G. Bratcher y Eugene A. Nida, A Handbook on the Gospel of Mark (UBS, 1961), Mc 3,3, https://tips.translation.bible/story/translation-commentary-on-mark-33/; Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,3, https://github.com/Faithlife/SBLGNT/blob/master/data/sblgnt/text/Mark.txt; Vulgata Clementina, Mc 3,3, https://www.catholicshare.com/la/bible/clementine-vulgate/mark/3/."],
    mc3vigilancia2: ["La vigilancia y la acusación", "παρετήρουν, imperfecto de παρατηρέω, presenta una vigilancia sostenida; el sujeto plural se infiere del contexto, sin identificación explícita en este versículo. εἰ introduce una interrogativa indirecta («si lo curaría»), mientras que ἵνα κατηγορήσωσιν expresa la finalidad de acusarlo. La Clementina utiliza observabant y ut accusarent, sin alterar la construcción griega. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 3,2, https://biblia.com/bible/sblgnt/mark/3/2; Vulgata Clementina, Mc 3,2, https://biblia.com/bible/vulgataclem/mark/3/2; James K. Tauber (ed.), MorphGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt."],
    mc3mano1: ["La mano reseca y la sinagoga", "ἐξηραμμένην es participio perfecto medio-pasivo de ξηραίνω: presenta la mano en un estado de sequedad o atrofia, sin identificar su causa clínica. La expresión εἰς συναγωγήν no lleva artículo en la lectura de SBLGNT; la Clementina dice in synagogam. πάλιν enlaza el episodio con las escenas anteriores de sinagoga y sábado. Fuentes: Michael W. Holmes (ed.), The Greek New Testament: SBL Edition (2010), Mc 3,1, https://biblia.com/bible/sblgnt/mark/3/1; Vulgata Clementina, Mc 3,1, https://szentiras.hu/biblia/vuc/mrk/3; cf. Mc 1,21–28 y 2,23–28."],
    mc2sabado27: ["El sábado y el ser humano", "διὰ + acusativo aparece en ambos miembros de la antítesis y señala finalidad o beneficio: el sábado existe para el ser humano, no a la inversa. ἄνθρωπος designa aquí al ser humano genéricamente. ἐγένετο es aoristo medio de γίνομαι, no una forma pasiva, aunque «fue hecho» es traducción idiomática posible. El texto de SBLGNT conserva καὶ οὐχ, frente a la omisión de καὶ en Robinson-Pierpont; el códice Bezae (D) transmite una forma abreviada de la sentencia. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,27, https://studybible.info/SBLGNT/Mark%202%3A25-27; Wieland Willker, A Textual Commentary on the Greek Gospels, vol. 2, TVU 47, https://www.willker.de/wie/TCG/TC-Mark.pdf; Vulgata Clementina, Mc 2,27, https://biblia.com/bible/vulgataclem/mark/2/27."],
    mc2senor28: ["Señor incluso del sábado", "ὥστε introduce la conclusión de la controversia. κύριος es predicativo y καὶ ante τοῦ σαββάτου tiene valor inclusivo («también / incluso»). ὁ υἱὸς τοῦ ἀνθρώπου es literalmente «el hijo del ser humano», título cuya interpretación en Marcos exige considerar otros pasajes (cf. Mc 2,10; 8,31; 14,62) y Daniel 7,13: la identificación exacta de sus ecos no se deduce solo de esta frase. Los paralelos Mt 12,8 y Lc 6,5 contienen la afirmación del señorío sabático, pero no reproducen la máxima de Mc 2,27. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,27–28, https://biblia.com/bible/sblgnt/mark/2/27-28; Vulgata Clementina, Mc 2,28, https://biblia.com/bible/vulgataclem/mark/2/27-28."],
    mc2abiatar26: ["Abiatar, Ajimélec y los panes", "El griego ἐπὶ Ἀβιαθὰρ ἀρχιερέως sitúa el episodio en tiempos de Abiatar, sin artículo ante ἀρχιερέως. En 1 Samuel 21,1–6 (numeración hebrea; varía según edición) quien entrega los panes a David es Ajimélec; 1 Samuel 22,20 presenta a Abiatar como hijo suyo. La discrepancia histórica no queda resuelta por el texto. Algunos testigos omiten la referencia a Abiatar o añaden el artículo; se conserva la lectura de SBLGNT. ἄρτοι τῆς προθέσεως son los panes dispuestos ritualmente ante Dios (cf. Levítico 24,5–9). La Clementina dice sub Abiathar principe sacerdotum y panes propositionis. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,26, https://bible-strong.app/bible/sblgnt/mark/2/26; James K. Tauber, MorphGNT SBLGNT 6.12, https://github.com/morphgnt/sblgnt/blob/master/62-Mk-morphgnt.txt; Vulgata Clementina, Mc 2,26, https://biblia.com/bible/vulgataclem/mark/2/26; W. Robertson Nicoll (ed.), Expositor’s Greek Testament (1897–1910), Mc 2,26, https://lemma.gebible.app/v/mark/2/26. La lectura que atribuye a Marcos un error histórico y las propuestas de armonización son interpretaciones alternativas, no datos demostrados."],
    mc2david25: ["David y la necesidad", "Οὐδέποτε ἀνέγνωτε introduce una pregunta retórica; χρείαν ἔσχεν expresa necesidad y ἐπείνασεν añade el hambre. La respuesta remite a 1 Samuel 21,2–7; la identificación del sacerdote en Marcos 2,26 requiere examen separado. La Clementina utiliza Numquam legistis y necessitatem habuit. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Marcos 2,25, https://midvash.com/sblgnt/mark/2; Vulgata Clementina, Marcos 2,25, https://biblia.com/bible/vulgataclem/mark/2/25-26; 1 Samuel 21,2–7."],
    mc2sabado24: ["La objeción sabática", "ἔλεγον (imperfecto) presenta una intervención en curso; ἔξεστιν expresa impersonalmente lo permitido. Deuteronomio 23,25 permite arrancar espigas con la mano: la objeción se refiere a la actividad en sábado, interpretada como trabajo, no al robo. Algunas ediciones bizantinas incluyen ἐν antes de τοῖς σάββασιν; SBLGNT lo omite. Fuentes: Michael W. Holmes (ed.), SBLGNT (2010), Mc 2,24, https://biblia.com/bible/sblgnt/mark/2/24; A. B. Bruce, Expositor’s Greek Testament, Mc 2,24, https://www.biblehub.com/commentaries/egt/mark/2.htm; Deuteronomio 23,25; comparación de ediciones: https://anakalypsis.com/read/Mark/2/24."],
    mc2espigas23: ["Espigas en sábado","El griego presenta ὁδὸν ποιεῖν («hacer camino») junto al participio τίλλοντες («arrancando»): el texto no precisa si arrancaban las espigas para comer o al abrirse paso. La discusión sobre la licitud de la acción se formula en el versículo siguiente. Deuteronomio 23,25 (23,26 en algunas numeraciones) permite arrancar espigas con la mano en campo ajeno, sin resolver por sí solo la cuestión sabática. La Clementina agrega iterum y Dominus en su formulación, que no se introducen en el griego SBLGNT. Fuentes: Holmes (ed.), SBLGNT, Mc 2,23 (2010), https://biblia.com/bible/sblgnt/mark/2/23; Vulgata Clementina, Mc 2,23, https://biblia.com/bible/vulgataclem/mark/2/23-24; Deuteronomio 23,25."],
    mc2remiendo21: ["La tela sin abatanar","ἐπίβλημα ῥάκους ἀγνάφου designa un remiendo de tela sin abatanar. La explicación tradicional supone que encoge y agrava la rotura, pero la sintaxis de αἴρει τὸ πλήρωμα ... τὸ καινὸν τοῦ παλαιοῦ admite dificultades. Edsall reconsidera el pasaje a partir de las técnicas textiles antiguas: no hay una única reconstrucción material segura. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,21, https://biblia.com/bible/sblgnt/mark/2/21-22; Benjamin A. Edsall, «From Unfulled Rag to New Cloak», New Testament Studies 71.1 (2025), 19–28, https://doi.org/10.1017/S0028688524000195."],
    mc2odres22: ["El vino y los odres","νέος califica al vino reciente y καινός a los odres nuevos. SBLGNT termina con una frase elíptica («vino nuevo en odres nuevos»); la Clementina explicita mitti debet («debe echarse»), sin equivalente verbal en este punto del texto griego. La lectura teológica de la imagen no es una conclusión impuesta por la gramática. Fuentes: Holmes (ed.), SBLGNT (2010), Mc 2,22, https://biblia.com/bible/sblgnt/mark/2/21-22; Vulgata Clementina, Mc 2,22, https://biblia.com/bible/vulgataclem/mark/2/21-22."],
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
    titulo: ['El comienzo', 'La lectura adoptada por SBLGNT termina en χριστοῦ («Cristo»). Numerosos testigos incluyen además υἱοῦ θεοῦ («Hijo de Dios»), que aparece en la Vulgata. La inclusión de esas palabras es una variante textual importante, no una omisión accidental de nuestra traducción. La autenticidad de la lectura larga es debatida: Tommy Wasserman (2011) defiende su originalidad y propone una omisión accidental; Alexander Globe (1982) estudia la omisión en la tradición llamada cesariense, sin que el mero reparto de testimonios resuelva la cuestión. La lectura corta de SBLGNT se mantiene como base editorial, no como certeza acerca del autógrafo. Véanse Wasserman, «The ‘Son of God’ was in the Beginning (Mark 1:1)», Journal of Theological Studies 62.1 (2011), pp. 20–50, DOI:10.1093/jts/flr013; Kalle O. Lundahl, «Mark 1:1: How to Display Differences in Biblical Manuscripts in Editions and Translations», Harvard Theological Review 117.1 (2024), DOI:10.1017/S0017816023000378; Alexander Globe, «The Caesarean Omission of the Phrase ‘Son of God’ in Mark 1:1», Harvard Theological Review 75.2 (1982), pp. 209–218, DOI:10.1017/S0017816000018319.'],
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
    const records = verse > 200 ? externalMorphology.versesChapter3.verses[verse - 200] : verse > 100 ? externalMorphology.versesChapter2.verses[verse - 100] : morphologyByVerse[verse];
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
    if (p.chapter === 3 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '3,1–6'), makeElement('h2', '', 'Una curación en sábado')); verses.append(section); }
    if (p.chapter === 2 && p.n === 18) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,18–22'), makeElement('h2', '', 'El ayuno y las imágenes de lo nuevo')); verses.append(section); }
    if (p.chapter === 2 && p.n === 13) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,13–17'), makeElement('h2', '', 'La vocación de Leví')); verses.append(section); }
    if (p.chapter === 2 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,1–5'), makeElement('h2', '', 'Regreso a Cafarnaúm')); verses.append(section); }
    if (!p.chapter && sections[p.n]) {
      const section = makeElement('div', 'verse-section');
      section.append(makeElement('p', '', sections[p.n][0]), makeElement('h2', '', sections[p.n][1]));
      verses.append(section);
    }
    const row = makeElement('div', 'verse');
    row.id = p.chapter ? `v${p.chapter}-${p.n}` : `v${p.n}`;
    const number = makeElement('div', 'number', String(p.n));
    const speech = makeElement('div', 'speech');
    const original = makeElement('p', 'latin');
    original.lang = 'grc';
    greekContent(original, p.gr, p.chapter ? (p.chapter - 1) * 100 + p.n : p.n);
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

  // The chapter index follows the published passage data, not a static HTML list.
  // Newly added chapters and verses become navigable without editing index.html.
  function buildPassageNavigation() {
    const nav = document.querySelector('.passage-nav');
    if (!nav) return;
    nav.replaceChildren();
    const titles = {
      1: {1:'Juan el Bautista',9:'El bautismo de Jesús',12:'En el desierto',14:'El anuncio en Galilea',16:'Los primeros discípulos',21:'En la sinagoga de Cafarnaúm',29:'La casa de Simón y las curaciones',35:'Oración y predicación en Galilea',40:'La purificación de un enfermo'},
      2: {1:'Regreso a Cafarnaúm',13:'Leví y los comensales',18:'El ayuno y lo nuevo',23:'Las espigas y el sábado'},
      3: {1:'Una curación en sábado',7:'La multitud junto al mar',13:'La elección de los Doce',20:'Jesús y los suyos'},
      4: {1:'La enseñanza junto al mar'}
    };
    const byChapter = new Map();
    for (const verse of passages) {
      const chapter = verse.chapter || 1;
      if (!byChapter.has(chapter)) byChapter.set(chapter, []);
      byChapter.get(chapter).push(verse.n);
    }
    for (const [chapter, numbers] of byChapter) {
      const heading = makeElement('div','act-label');
      heading.append(makeElement('span','', 'CAPÍTULO ' + chapter));
      heading.append(makeElement('span','act-count', String(chapter).padStart(2,'0') + ' / 16'));
      nav.append(heading);
      const starts = Object.keys(titles[chapter] || {}).map(Number).filter(n => numbers.includes(n));
      const segments = [...new Set([Math.min(...numbers), ...starts])].sort((a,b)=>a-b);
      for (let i=0;i<segments.length;i++) {
        const start = segments[i], end = i+1<segments.length ? segments[i+1]-1 : Math.max(...numbers);
        const link = makeElement('a','passage-link');
        link.href = '#v' + (chapter===1?'':chapter+'-') + start;
        link.append(document.createTextNode(chapter + ',' + start + (end>start?'–'+end:'')));
        link.append(makeElement('small','',titles[chapter]?.[start] || 'Continuación'));
        nav.append(link);
      }
    }
  }
  buildPassageNavigation();

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
