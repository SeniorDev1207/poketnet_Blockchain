if(typeof loclib == 'undefined' || !loclib)
loclib = {};

loclib.en = {};

var ____loclib = loclib.en;

//time

____loclib.fewseconds = "Vor einigen Sekunden";	
____loclib.oneminute = "Vor einer Minute";	

____loclib.minutes = function(v){
return v + " Minuten zuvor"
}

____loclib.tenminutes = "Vor zehn Minuten";	
____loclib.halfanhour = "Vor einer Stunde";	
____loclib.anhour = "Vor einer Stunde";	
____loclib.today = "Heute";	

//authorization

____loclib.id0 = "Mit einem bestehenden Konto anmelden";	
____loclib.id1 = "Wenn Sie bereits registriert sind, melden Sie sich bitte an";	
____loclib.loadqrcode = "QR Code hochladen";
____loclib.stay = "Angemeldet bleiben";
____loclib.signin = "Anmelden";
____loclib.orcreate = "Oder einen neuen Account erstellen";
____loclib.createnew = "Neuen Account erstellen";
____loclib.staysafe = "Es ist nicht sicher. Wollen Sie fortfahren?";

// Register a New Account
____loclib.id71 = "Einen neuen Account erstellen";
____loclib.id72 = "Bereits Mitglied? Anmelden";

____loclib.rtip1 = "Notieren Sie sich Ihren privaten Anmeldeschl�ssel";
____loclib.rtip2 = function(mobile){
var h = 'Unten sehen Sie Ihren privaten Anmeldeschl�ssel. Schreiben Sie ihn auf und speichern Sie Ihren QR Code' 

if(mobile){ h += 'Ger�t' } else { h+='PC' }

h+=' und verlieren Sie ihn nicht. Wir speichern keine pers�nlichen Daten. Der Anmeldeschl�ssel kann nicht wiederhergestellt werden!'

return h 
}

____loclib.generatepkey = "Anmeldeschl�ssel erzeugen";
____loclib.rtip3 = "Schreiben Sie den Anmeldeschl�ssel auf und speichern Sie es als QR Code. Wir speichern keine pers�nlichen Daten. Der Anmeldeschl�ssel kann nicht wiederhergestellt werden! ";
____loclib.saveqrcode = "QR Code speichern" 
____loclib.copyprivkey = "Anmeldeschl�ssel kopieren"
____loclib.rcontinue = "Weiter"
____loclib.idle = "Einige Zeit im Wartungszustand"
____loclib.congratulations = 'Herzlichen Gl�ckwunsch! Sie sind in <span class="pnlabel">Pocketnet</span>'
____loclib.creatingpreloader = 'Account wird erstellt'
____loclib.removepaste = 'F�r diese Eingabe wurde die Kopierfunktion deaktiviert'
____loclib.filedamaged = "Datei enth�lt keinen g�ltigen Anmeldeschl�ssel"
____loclib.keysnotmatch = 'Anmeldeschl�ssel stimmt nicht �berein'
____loclib.confirmkey = 'Geben Sie Ihren privaten Anmeldeschl�ssel ein oder laden Sie den QR Code aus dem vorherigen Schritt hoch'
____loclib.successfullycopied = "Schl�ssel wurde erfolgreich kopiert"
____loclib.urlsuccesscopied = "Link wurde erfolgreich kopiert"

____loclib.confirmkeyLabel = "Bitte best�tigen Sie Ihren Anmeldeschl�ssel. Geben Sie den Schl�ssel in das Formular ein oder <b>laden Sie den QR Code hoch</b>"
____loclib.repeatetocreate = "Wiederholen, um nochmals einen Anmeldeschl�ssel zu erzeugen"
____loclib.confirmcreate = "Account erstellen"


//user activation

____loclib.useractivation = "Benutzer-Aktivierung";	
____loclib.wesentmoney = "Wir haben Ihnen einige M�nzen f�r die Registrierung gesendet";	
____loclib.wesentmoneym = "Wir haben Ihnen bereits einige M�nzen f�r die Registrierung gesendet";


____loclib.wesentmoneydelay = "Der Vorgang dauert l�nger als gew�hnlich, bitte warten Sie noch etwas";

____loclib.funetworkproblems = "Es gibt ein Problem mit der Verbindung, bitte versuchen Sie es sp�ter erneut";

____loclib.pleasewait = "Bitte warten";	
____loclib.next = "Weiter";	
____loclib.welcometopocketnet = "Willkommen zu Pocketnet";	
____loclib.continue = "Weiter";	

//user page

____loclib.rstate = "Ansehen";	
____loclib.rprofile = "Profil";	
____loclib.rsettings = "Einstellungen";	
____loclib.rwallet = 'Geldbeutel';	
____loclib.raccounts = 'Accounts';	
____loclib.rsystem = 'System';
____loclib.rconnection = 'Verbindung';
____loclib.pnetAddress = 'Pocketnet Adresse';	
____loclib.profile = 'Profil';	
____loclib.signout = 'Abmelden';

//send

____loclib.postlabel = "Spende f�r den Beitrag";	
____loclib.donationlabel = "Spende";	
____loclib.donationwel = "Wenn Sie dem Autor danken m�chten, k�nnen Sie eine Pocketnet-�berweisung benutzen ";
____loclib.donationwela = "Pocketnet-�berweisung";	
____loclib.donationwelan = "Oder Sie k�nnen ein anderes Kryptow�hrungs-System nutzen";	
____loclib.successfullycopiedaddress = "Adresse wurde erfolgreich kopiert";	

//wallet

____loclib.wrecieve = "Erhalte M�nzen durch das Teilen der Adresse";	
____loclib.wcopyshare = "Adresse kopieren und teilen:";	
____loclib.wqrcode = "QR Code";		
____loclib.wcopeaddress = "Adresse kopieren";	
____loclib.wcreatelink = "Oder erstellen Sie einen Link f�r die Bezahlung";	
____loclib.required = "Erforderlich";	
____loclib.wgetlink = "Link bekommen";	
____loclib.waddresses = "Adressen";	
____loclib.waddress = "Adresse";	
____loclib.wbalance = "Balance";	
____loclib.wpercente = "Prozent";	
____loclib.waddaddress = "Eine neue Geldbeutel-Adresse entdecken";	
____loclib.wrecieve = "Erhalten";	
____loclib.wrecieveon = "Erhalten am";	
____loclib.wcopyshareorcreate = "Adresse kopieren und teilen oder Zahlungslink erstellen";
____loclib.wdgetlink = "Link bekommen";	
____loclib.wdqrcode = "QR Code";
____loclib.wdcopyaddress = "Adresse kopieren";	
____loclib.wdpleasefill = "Bitte f�llen Sie diese Felder aus";
____loclib.wduseqr = "Benutzen Sie diesen QR Code um das Geld zu empfangen";	
____loclib.wdaddress = "Adresse";
____loclib.wdamount = "Betrag";	
____loclib.wdlabel = "Label";	
____loclib.wdmessage = "Nachricht";	
____loclib.wsend = "Senden";
____loclib.calcfeesandsend = "Geb�hren berechnen und senden";	
____loclib.wstrfees = "Transaktionsgeb�hren";	
____loclib.wsfees = "Geb�hren";	

____loclib.wssendto = "M�NZEN SENDEN AN";	
____loclib.wssendb = "SENDEN";	

____loclib.tacaddress = 'Account Adresse';	
____loclib.twallet = "Geldbeutel";	
____loclib.twalletaddresses = "Geldbeutel-Adressen";	
____loclib.tTotal = "Insgesamt";	
____loclib.wsselect = "W�hlen Sie die Quelle aus dem Men� aus";	
____loclib.wsenter = "Geben Sie die Adresse ein oder w�hlen Sie sie aus dem Men� aus";	
____loclib.wsreciever = "Empf�ngeradresse";	
____loclib.wsamount = "Betrag";	
____loclib.wsamountof = "Betrag Ihrer �berweisung";	
____loclib.wsincludefees = "Geb�hren in Betrag inklusive";	
____loclib.wsrecieverpay = 'Vom Empf�nger zu bezahlen';	
____loclib.wssenderpay = 'Vom Sender zu bezahlen';	
____loclib.wdselectfrom = "Aus Men� ausw�hlen";	

____loclib.wdenteramount = "Betrag eingeben";	
____loclib.wdmessageplaceholder = "F�r was ist diese �berweisung?";
____loclib.wrenteraddress = 'Adresse eingeben';
____loclib.wrenteraddressselect = "Geben Sie die Adresse ein oder w�hlen Sie sie aus dem Men� aus";
____loclib.wreturntoeallet = "ZUR�CK ZUM GELDBEUTEL";	
____loclib.linkCreated = 'LINK ERSTELLT';
____loclib.waddresswascop = "Adresse wurde erfolgreich kopiert";
____loclib.wqrcodecreated = 'QR CODE ERSTELLT';
____loclib.wlinkcreating = 'LINK WIRD ERSTELLT';
____loclib.wqrcodecreating = 'QR CODE WIRD ERSTELLT';
____loclib.wdoptions = 'OPTIONEN';
____loclib.wssuccessfully = "�berweisung erfolgreich gesendet";
____loclib.wscalculatefees = 'GEB�HREN BERECHNEN';
____loclib.wsaddressnotv = "Adresse ist nicht g�ltig";

//user profile
____loclib.uaddaddressdona = "Adresse f�r Spenden hinzuf�gen";
____loclib.uaddaddressdonaplace = "Adresse eingeben";
____loclib.uchangeicon = "Profilbild hochladen";
____loclib.utip1 = "Sie m�ssen einen Namen und einen Avatar auf blockchain erstellen bevor Sie Pocketnet benutzen";
____loclib.utip2 = "Nur noch ein Schritt";
____loclib.upicset = "Profilicon festlegen";
____loclib.upic = "Profilicon";
____loclib.uuserinfo = "Benutzer-Informationen";
____loclib.usave = "Speichern";
____loclib.ucancel = "Abbruch";
____loclib.uwaitb = "Warte auf Best�tigung, um die Informationen zu speichern ";
____loclib.uchanges = "Es gibt keine Ver�nderung";
____loclib.uchangesvalid = "Sie m�ssen ein Profilbild hochladen und einen Benutzernamen erstellen";
____loclib.uname = "Name";
____loclib.unickname = "Spitzname";
____loclib.ulanguage = "Sprache";
____loclib.uabout = "�ber mich";
____loclib.uwebsite = "Website";
____loclib.uaddresesd = "Adresse f�r Spenden";
____loclib.usavechanges = "Wollen Sie die �nderungen speichern?";

//ustate
____loclib.sreps = "Ansehen und Einschr�nkungen";
____loclib.sdisconnected = "Vom Netzwerkknoten getrennt
____loclib.suseractivation = "Benutzeraktivierung";
____loclib.sprofile = "Profil";
____loclib.spc = "Beitragsz�hler";
____loclib.ssc = "Sternez�hler";
____loclib.ccc = "Kommentarez�hler";
____loclib.crc = "Kommentierratenz�hler";
____loclib.stp = "Testphase";
____loclib.srep = "Ansehen";

//accounts
____loclib.aaddedacc = "Hinzugef�gte Accounts";
____loclib.acure = "Momentan";
____loclib.aaddacc = "Account hinzuf�gen";
____loclib.ascheduler = "Planer";
____loclib.aused = "Diese Adresse wird bereits in einem anderen Adressenpool verwendet";


//author
____loclib.sub = "Folgen";
____loclib.unsub = "Nicht mehr folgen";
____loclib.joined = "Pocketnet beigetreten";
____loclib.shares = "GETEILT";
____loclib.uposts = "BEITR�GE";
____loclib.myuposts = "MEINE BEITR�GE";
____loclib.followers = "FOLLOWERS";
____loclib.following = "FOLLOWING";
____loclib.settings = "VERWALTEN";
____loclib.anofollowers = "Dieser Benutzer hat keine Follower";
____loclib.aynofollowers = "Sie haben keine Follower";
____loclib.anofollowing = "Dieser Benutzer folgt niemandem";
____loclib.aynofollowing = "Sie folgen niemandem";

//lenta
____loclib.lloadmore = "Mehr tolle Beitr�ge laden!";
____loclib.lloadprev = "Neue, tolle Beitr�ge laden";


____loclib.lend = "Ende der Beitr�ge";
____loclib.zerop = "Momentan gibt es keine Beitr�ge von diesem Autor";
____loclib.zeroy = "Sie haben noch keine Ver�ffentlichungen bis jetzt, teilen Sie etwas!";



____loclib.llogin = 'Sie m�ssen sich einloggen, um fortzufahren';
____loclib.lcomlaindialog = "Sind Sie sicher, dass Sie diesen Beitrag melden wollen?";
____loclib.lunsubscribe = "Wollen Sie diesem Account wirklich nicht mehr folgen?";
____loclib.lprivatepublic = "Wollen Sie ein privates oder �ffentliches Abonnement abschlie�en?";
____loclib.lprivate = "Privat";
____loclib.lpublic = "�ffentlich";

//share
____loclib.newShare = "Neuer Beitrag";
____loclib.firstShare = "Teilen Sie Ihren ersten Beitrag in Pocketnet";
____loclib.scaption = "Unterschrift";
____loclib.whatsnew = "Was ist neu?";
____loclib.saddlink = "Link zu externer Seite oder Video hinzuf�gen";
____loclib.saddimages = "Bilder zum Beitrag hinzuf�gen";
____loclib.sarticle = "Um einen Artikel zu schreiben";
____loclib.stelegram = "Auf Telegram senden"
____loclib.stimes = "Beitrag entfernen"


____loclib.snothing = "Nichts";
____loclib.sposttime = "Zu bestimmter Zeit posten";
____loclib.spostnow = "Jetzt posten";
____loclib.stimenotselected = "Zeit wurde nicht eingestellt";
____loclib.spost = "Posten";
____loclib.sdate = "Datum";
____loclib.stime = "Zeit";
____loclib.snotags = "Tags hinzuf�gen";
____loclib.expandvideo = "Klicken zum ausfahren";
____loclib.emptymessage = "Nachricht ist leer";
____loclib.emptytags = "Bitte f�gen Sie Tags hinzu";
____loclib.emptyutxo = "Kein Geld";
____loclib.networkerror = "Netzwerk Error";
____loclib.maximages = "Maximal 6 Bilder erlaubt";
____loclib.sharenow = "Wollen Sie diesen Inhalt jetzt teilen?";
____loclib.pastdate = 'Fr�heres Datum';
____loclib.timenotselected = 'Zeit nicht ausgew�hlt';
____loclib.addtags = 'Tags hinzuf�gen';
____loclib.tnews = "News";
____loclib.timages = "Bilder";
____loclib.tvideos = "Videos";
____loclib.tmarket = "Markt";
____loclib.tsport = "Sport";

//menu
____loclib.signinmenu = "Anmelden";
____loclib.signupmenu = "Registrieren";
____loclib.aboutmenu = "Mehr erfahren";

//footer
____loclib.aboutus = "�ber uns";



// Dialog Box Options
____loclib.daccept = "Akzeptieren";
____loclib.dcancel = "Abbrechen";
____loclib.dyes = "Ja";
____loclib.dno = "Nein";
____loclib.dsa = "Nicht mehr anzeigen";


// Messages

____loclib.coinbaseSuccess = function(v){
return "Herzlichen Gl�ckwunsch, Sie haben " + v + " Pocketm�nzen f�r Ihre letzte Aktivit�t gewonnen!"
}
____loclib.coinbaseSuccesspost = function(v){
return "Herzlichen Gl�ckwunsch, Sie haben " + v + " Pocketm�nzen f�r Ihren letzten Beitrag gewonnen!"
}
____loclib.coinbaseSuccesscomment = function(v){
return "Herzlichen Gl�ckwunsch, Sie haben " + v + " Pocketm�nzen f�r Ihren letzten Kommentar gewonnen!"
}
____loclib.userSent = function(v){
return "Es wurden <b>" + v + " POC</b> zu Ihnen gesendet"
}




____loclib.refferalUserMessage = "Herzlichen Gl�ckwunsch! Sie haben jemanden aus dem zensierten Netz befreit. Einige M�nzen sind auf ihrem Weg!"

____loclib.subscribeUserMessage = "folgt Ihnen"
____loclib.unsubscribeUserMessage = "folgt Ihnen nicht mehr"
____loclib.gotoprofileMessage = "Gehe zum Profil"
____loclib.upvoteShareMessage = "Hat Ihren Beitrag geliket"

____loclib.upvoteCommentMessage = " hat Ihren Kommentar geliket"

// Errors

____loclib.error = "Error";
____loclib.checkScoreError = "Sie m�ssen die notwendigen Kontoinformationen ausf�llen, bevor Sie Pocketnet benutzen k�nnen. Wollen Sie dies jetzt machen?";
____loclib.checkScoreErrorLight = "Account ist nicht aktiviert
____loclib.timestamperror = "Uhrzeit in der Anwendung und im Netzknoten stimmen nicht �berein";

// Error Page 404
____loclib.e404 = "ERROR 404";	
____loclib.e404e = "Seite nicht gefunden. Zur�ck zur Hauptseite?";	
____loclib.postLimitLight = function(v){
return "Sie haben Ihr Limit von " + (v || 15) + " Beitr�gen in 24h erreicht";
}
____loclib.postLimitLight = function(v){
return "Sie haben Ihr Limit von " + (v || 15) + " Bewertungen in 24h erreicht";
}

____loclib.doubleLimitLight = "Sie haben dies bereits bewertet";	

____loclib.SelfSubscribeError = "Sie k�nnen Sich nicht selber folgen";
____loclib.DoubleSubscribeError = "Sie folgen diesem Nutzer bereits";
____loclib.InvalideSubscribeError = "Sie haben diesen Benutzer nicht abonniert";
____loclib.ChangeInfoLimitError = "Sie k�nnen Ihr Profil nur ein mal pro Stunde bearbeiten. Bitte warten Sie und versuchen Sie es erneut. ";
____loclib.SelfScoreError = "Sie k�nnen Ihren eigenen Beitrag nicht bewerten";

____loclib.unexperror10 = "Unbekannter Fehler (10)";
____loclib.unexperror11 = "Unbekannter Fehler (11)";
____loclib.unexperror12 = "Unbekannter Fehler (12)";

____loclib.networkerror = "Es sind Probleme mit dem Netzwerkknoten aufgetreten";

____loclib.canSpendError = "Sie m�ssen warten, bis Ihre vorherige �berweisung in der Blockchain freigegeben wurde. Bitte warten Sie.";
____loclib.noMoneyError  = "Sie k�nnen keine Aktionen mit einem leeren Kontostand ausf�hren";



____loclib.waitConf = "Sie m�ssen warten, bis Ihre vorherige �berweisung in der Blockchain freigegeben wurde.";
____loclib.postWaitConf = "Beitrag wartet auf Best�tigung der Blockchain";



// notifications

____loclib.ntnow = "Jetzt"
____loclib.ntlasthour = "Diese Stunde"
____loclib.nttoday = "Heute"
____loclib.ntmounth = "Diesen Monat"
____loclib.ntearlier = "�lter"


____loclib.nodeWalletAdd = 'Es kann einige Zeit in Anspruch nehmen, eine Adresse hinzuzuf�gen. Fortfahren?'
____loclib.nodeEnableNoteHeader = 'Hinweis'
____loclib.nodeEnableNote = 'Diese Drehung am Netzwerkknoten kann bis zu 5GB RAM-Speicher in Anspruch nehmen. Stellen Sie sicher, dass Sie genug Speicherplatz haben. Fr�hliches staking!'


/// 1301

____loclib.address = "Adresse"
____loclib.privatekey = "Anmeldeschl�ssel"
____loclib.qrcode = "QR Code"
____loclib.addaccount = "Account hinzuf�gen"
____loclib.entermnimo = "Geben Sie die mnemonische Phrase oder den Anmeldeschl�ssel ein"
____loclib.add = "Hinzuf�gen"
____loclib.e13011 = "Sie werden mit Ihrer Registrierung fortfahren, nachdem Sie PocketnetDesktop installiert haben."
____loclib.e13012 = "Falls der Download von Pocketnet f�r Windows nicht gestratet ist, bitte klicken Sie hier um es zu installieren."
____loclib.e13013 = "Schreiben Sie eine Bildunterschrift (optional)"
____loclib.e13014 = "Diese Datei besitzt ein ung�ltiges Format:"
____loclib.e13015 = "Diese Datei ist zu gro�:"
____loclib.e13016 = "F�gen Sie einen Youtube, Vimeo Link ein und dr�cken Sie Enter"
____loclib.e13017 = "Auf Blockchain laden"
____loclib.e13018 = "Wollen Sie diesen Artikel wirklich entfernen?"
____loclib.e13019 = "Neu"
____loclib.e13020 = "Neuen Artikel schreiben"
____loclib.youarefollowing = "Sie folgen"
____loclib.follow = "Folgen"
____loclib.blocked = "Blockiert"
____loclib.e13021 = "Mehr anzeigen"
____loclib.blockuser = "Benutzer blockieren"
____loclib.unblockuser = "Benutzer freigeben"
____loclib.e13022 = "Wollen Sie diesem Benutzer wirklich nicht mehr folgen?"
____loclib.unfollow = "Nicht mehr folgen"
____loclib.unblock = "Freigeben"
____loclib.share = "Teilen"
____loclib.info = "Info"
____loclib.e13023 = "Wollen Sie diesen Benutzer wirklich freigeben?"
____loclib.e13024 = "Ihr privater Anmeldeschl�ssel"
____loclib.e13025 = "Neuen Account erstellen"
____loclib.e13026 = "Tritt Pocketnet bei � Die Zukunft des freien Webs"

____loclib.e13027 = "Angemeldet bleiben"
____loclib.e13028 = "Sie haben einen ung�ltigen Anmeldeschl�ssel eingegeben"
____loclib.e13029 = "Nachricht ist leer"
____loclib.e13030 = "Kommentare k�nnen nicht l�nger als 1000 Zeichen sein"
____loclib.e13031 = "Diesen Kommentar teilen"
____loclib.e13032 = "Wollen Sie Ihren Kommentar wirklich l�schen?"
____loclib.e13033 = "Kommentar wurde gel�scht"
____loclib.e13034 = "Ja"
____loclib.e13035 = "Nein, Abbrechen"
____loclib.hide = "Ausblenden"
____loclib.e13036 = "Vorherige Kommentare anzeigen"
____loclib.e13037 = "Antworten"
____loclib.remove = "Entfernen"
____loclib.e13038 = "Jetzt kommentieren und Ansehen erwerben"
____loclib.e13039 = "Jetzt kommentieren und Ansehen erwerben"
____loclib.e13040 = "Sie haben keinen Kommentierprivileg"
____loclib.complain = "Beschweren"
____loclib.next = "Weiter"
____loclib.post = "Posten"
____loclib.e13041 = "Pocketnet Verbindung"
____loclib.e13042 = "Pocketnet Proxy"

____loclib.e13043 = "Pocketnet Netzwerkknoten"
____loclib.e13044 = "Knoten hinzuf�gen"
____loclib.e13045 = "Knoten nicht gefunden"
____loclib.e13046 = "Adresse"
____loclib.e13047 = "WS"
____loclib.e13048 = "Name"
____loclib.e13049 = "Status"
____loclib.e13050 = "Proxies nicht gefunden"
____loclib.e13051 = "Proxy nicht benutzen"
____loclib.e13052 = "Keine Verbindung zum Proxy m�glich"
____loclib.e13053 = "Keine Verbindung zum Knoten m�glich"
____loclib.e13054 = "Proxy hinzuf�gen"
____loclib.e13055 = "Proxy bearbeiten"
____loclib.save = "Speichern"
____loclib.e13056 = "Knoten Host"
____loclib.close = "Schlie�en"
____loclib.e13057 = "Bitte f�llen Sie alle Felder aus"
____loclib.e13058 = "Sie haben diesen Proxy bereits gelistet"
____loclib.delete = "L�schen"
____loclib.e13059 = "Wollen Sie diesen Proxy wirklich aus der Liste l�schen?"
____loclib.e13060 = "Proxyliste"
____loclib.e13061 = "Wollen Sie wirklich ohne Proxy verbinden? Dies ist unsicher (Http Verbindung)"

____loclib.e13062 = "Netzwerkknoten bearbeiten"
____loclib.onproxy = "Auf Proxy"
____loclib.locally = "Lokal"
____loclib.nodehost = "Knoten Host"
____loclib.e13063 = "RPC Port"
____loclib.e13064 = "WS Port"
____loclib.e13065 = "Name des Netzwerkknotens"
____loclib.e13066 = "Bitte geben Sie den Namen des Knotens ein"
____loclib.e13067 = "RPC Login"
____loclib.e13068 = "Login f�r PRC Autorisierung"
____loclib.e13069 = "RPC Passwort"
____loclib.e13070 = "Passwort f�r PRC Autorisierung"
____loclib.e13071 = "Bitte f�llen Sie alle Felder aus"
____loclib.e13072 = "Wollen Sie diesen Netzwerkknoten wirklich aus der Liste l�schen?"
____loclib.e13073 = "Wollen Sie wirklich ohne Proxy verbinden? Dies ist unsicher (Http Verbindung)"
____loclib.notselected = "Nicht ausgew�hlt"
____loclib.donation = "Spende"
____loclib.e13074 = "Erwarte Gelder. Adresse wird g�ltig sein f�r"
____loclib.sminutes = "Minuten"
____loclib.e13075 = "Zeit f�r diesen Deal ist abgelaufen"
____loclib.reactivate = "Reaktivieren"
____loclib.e13076 = "Diesen Code scannen, um zu senden"
____loclib.back = "Zur�ck"
____loclib.e13077 = "F�gen Sie Ihr Profil zu der Liste des Spenders hinzu"
____loclib.e13078 = "Warum fragen wir nach Spenden?"
____loclib.e13079 = "Wir haben trotz Vollzeitjob mehr als 14 Monate in unserer Freizeit damit verbracht, Pocketnet zu den Menschen zu bringen. Zus�tzlich zu unserer Zeit und Energie haben wir auch aus eigener Hand Geld bezahlt, um die Plattform zum Laufen zu bringen. Jetzt brauchen wir die Community, um uns f�r weiteres Wachstum zu helfen."
____loclib.e13080 = "Wie werden die Spendengelder benutzt?"
____loclib.e13081 = "Die Gelder werden f�r Werbematerialien und die Anstellung von speziellen Experten verwendet, um Pocketnet noch sicherer zu machen. Das momentane Entwicklerteam wird von den Spenden nichts bekommen. Wann immer m�glich werden wir hier posten, wie wir die Spendengelder verwendet haben. "
____loclib.e13082 = "Was du f�r deine Spende bekommst, au�er das Wissen, die Freiheit unterst�tzt zu haben:"
____loclib.e13083 = "Als Zeichen f�r die Wertsch�tzung deiner Spende wirst du ein Geschenk von einigen Pocketm�nzen erhalten."
____loclib.e13084 = "Au�erdem wirst du, sobald ein Gruppenchat besteht, Teil einer speziellen Spendergruppe sein und direkten Zugang zum Team haben, auch wenn die Plattform w�chst."
____loclib.e13085 = "Der Link zu deinem Pocketnet-Profil wird unten angegeben sein, sodass mehr Menschen zu deinen Beitr�gen finden (au�er du willst das nicht)"
____loclib.e13086 = "Unterst�tze das dezantralisierte Web jetzt"
____loclib.e13087 = "Bitcoin, Litecoin, Monero"

____loclib.e13088 = "Pocketnet Mitglieder, die gespendet haben, um Pocketnet zu unterst�tzen"
____loclib.thankyou = "Danke!"
____loclib.e13089 = "Wenn Ihr Pocketnet-Profil in der Liste der Spender erscheinen soll, senden Sie uns bitte Informationen �ber Ihre Spende"
____loclib.e13090 = "F�ge mich zur Liste der Spender hinzu"
____loclib.e13091 = "Oder Sie k�nnen uns eine E-Mail senden"
____loclib.e13092 = "mit Ihrem �ffentlichen Schl�ssel und dem Betrag."
____loclib.finish = "Fertig"
____loclib.e13093 = "Bitte w�hlen Sie die Spendenmethode"
____loclib.e13094 = "Etwas ist schief gelaufen. Bitte laden Sie die Seite neu und versuchen Sie es nochmals (error: 0001)"
____loclib.e13095 = 'Danke, dass Sie unsere Arbeit f�r Freiheit unterst�tzen. Wir werden sicherstellen, dass jeder Cent z�hlt.'
____loclib.e13096 = 'Bitte geben Sie den Betrag der Spende ein'
____loclib.e13097 = "Etwas ist schief gelaufen. Bitte laden Sie die Seite neu und versuchen Sie es nochmals (error: 0002)"
____loclib.e13098 = "Link auf externe Seite oder Ressource hinzuf�gen"
____loclib.e13099 = "Bilder hochladen"
____loclib.e13100 = "Klicken Sie hier, um die Dateien auszuw�hlen, die hochgeladen werden sollen"
____loclib.e13101 = "oder durch drag & drop"
____loclib.e13102 = "Link auf externe Seite hinzuf�gen"
____loclib.e13103 = "URL ung�ltig"
____loclib.e13104 = "Max 6 Bilder erlaubt"
____loclib.e13105 = "Netzwerkknoten Management"
____loclib.e13106 = "Pocketnet Netzwerkknoten"
____loclib.e13107 = "Netzwerkknoten Management kann durch die Anwendung ausgef�hrt werden"
____loclib.e13108 = "Es gibt keine Verbindung mit dem Electron proxy Interface"

____loclib.e13109 = "Bitte geben Sie die W�rter in dem Bild ein, um Pocketcoins zu empfangen und mit der Registrierung fortzufahren"
____loclib.e13110 = "W�rter eingeben"
____loclib.next = "Weiter"
____loclib.refresh = "Neu laden"
____loclib.e13111 = "Geben Sie Ihre E-Mail an, um die neusten Pocketnet Infos zu bekommen"
____loclib.e13112 = "E-Mail eingeben"
____loclib.e13113 = "E-Mail hinzuf�gen"
____loclib.skip = "�berspringen"
____loclib.e13114 = "Es gibt ein Problem mit Ihrer Registrierung aufgrund seltsamer Aktivit�t"
____loclib.e13115 = "Bitte E-Mail"
____loclib.e13116 = "um M�nzen zu empfangen und Ihren Account zu �ffnen"
____loclib.e13117 = "Kontostand �berpr�fen"
____loclib.joinnow = "Jetzt beitreten"
____loclib.loading = "L�dt"
____loclib.e13118 = "W�rter stimmen nicht �berein"
____loclib.e13119 = "E-Mail hinzuf�gen und fortfahren"
____loclib.e13120 = "Anwendungen"
____loclib.e13121 = "Es sind keine Bilder vorhanden"
____loclib.e13122 = "Neueste Kommentare"

____loclib.e13123 = "Mehr Beitr�ge anzeigen"
____loclib.e13124 = "Mehr tolle Pocketnet Beitr�ge!"
____loclib.e13125 = "Top Beitr�ge Sektion ist leer!"
____loclib.e13126 = "Beitr�ge von Leuten, denen du folgst erscheinen hier"
____loclib.e13127 = "Beitr�ge von Leuten, denen du folgst erscheinen hier"
____loclib.e13128 = "Beitr�ge von Leuten, denen du folgst erscheinen hier"
____loclib.registration = "Registrierung"
____loclib.editpost = "Beitrag bearbeiten"
____loclib.removepost = "Beitrag entfernen"


____loclib.reportpost = "Beitrag melden"
____loclib.donate = "Spenden"
____loclib.blockuser = "Benutzer blockieren"
____loclib.more = "Mehr"
____loclib.showmore = "Mehr anzeigen"
____loclib.e13129 = "Angeh�ngte Bilder"
____loclib.e13130 = "Bearbeitet"
____loclib.e13131 = "Sie haben diesen Benutzer blockiert"
____loclib.e13132 = "bewertet"
____loclib.e13133 = "Das teilen"
____loclib.e13134 = "F�r diese Sucheingabe gibt es keine Ergebnisse"
____loclib.e13135 = "Benutzer hat keinen privaten Schl�ssel"
____loclib.e13136 = "Alle Beitr�ge"
____loclib.e13137 = "Deine Pocket"
____loclib.e13138 = "Top Beitr�ge"
____loclib.e13139 = "SUCHE AUF POCKETNET"
____loclib.e13140 = "SUCHE AUF"
____loclib.notifications = "Benachrichtigungen"
____loclib.showall = "Zeige alles"
____loclib.e13141 = "Sie haben keine Benachrichtigungen"

____loclib.recommendations = "Empfehlungen"
____loclib.e13142 = "Ich habe meinen Schl�ssel gesichert, nicht mehr erinnern"
____loclib.e13143 = "Wichtig!"
____loclib.e13144 = "Text kopieren"
____loclib.e13145 = "Schl�ssel auf Ger�t speichern"
____loclib.e13146 = "Ende der Beitr�ge"
____loclib.e13147 = "Das teilen"
____loclib.e13148 = "Wollen Sie sich wirklich �ber diesen Beitrag beschweren?"
____loclib.e13149 = "Benutzer Bewertungen"
____loclib.e13150 = "Beitrag Bewertungen"
____loclib.e13151 = 'Keiner bewertet diesen Beitrag'
____loclib.e13152 = "Benutzer Punkte"
____loclib.e13153 = "�berspringen und weiter zur Website"
____loclib.e13154 = "Ihre Login Informationen"
____loclib.e13155 = "Um Pocketnet zu benutzen m�ssen Sie Ihren privaten, kryptographischen Schl�ssel generieren. Dieser ersetzt den Login und das Passwort von zentralgesteuerten sozialen Netzwerken."
____loclib.users = "Benutzer"
____loclib.userstx = "Benutzer"
____loclib.user = "Benutzer"
____loclib.postscount = "Beitragz�hler"
____loclib.about = "�ber uns"
____loclib.e13156 = "Weitere Ergebnisse"
____loclib.posts = "Beitr�ge"
____loclib.e13157 = "Suche nach"
____loclib.e13158 = "hat keine Ergebnisse"
____loclib.e13159 = "Die Sucheingabe ist leer"
____loclib.repost = "Repost"
____loclib.e13160 = "Hallo Pocketeers!"

____loclib.e13161 = "F�gen Sie Tags zu Ihren Beitr�gen hinzu"
____loclib.e13162 = "Sie k�nnen max. 30 Tags hinzuf�gen"
____loclib.e13163 = "Es gibt keine Ver�nderungen im Beitrag"
____loclib.e13164 = "Bitte f�ge einige W�rter hinzu, um den Pocketleuten �ber deinen Link zu erz�hlen. Um was geht es? Warum ist es wichtig? Was ist Ihre Meinung?"
____loclib.e13165 = 'Ihr Link zum Video ist ung�ltig. Bitte laden Sie eine g�ltige Video-URL.'
____loclib.e13166 = "Sie haben"
____loclib.e13167 = "Menschen aus dem zensierten Web gerettet"
____loclib.e13168 = "Verdienen Sie Pocketm�nzen durch jede Registrierung �ber Ihren Link"
____loclib.e13169 = "Direkter Link"
____loclib.copy = "Kopieren"
____loclib.e13170 = "Inklusive Pocketnet Registrierung �Ruf-zur-Aktion�"
____loclib.more = "Mehr"
____loclib.e13171 = "Gute Neuigkeiten! Ich habe meine Unabh�ngigkeit von sozialen Medien erworben, komm und begleite mich auf pocketnet.app, sodass wir uns unabh�ngig austauschen und chatten k�nnen auf der Blockchain. Begleite mich hier"
____loclib.e13172 = "Ich will dies mit dir von einer dezentralisierten Blockchain Plattform Pocketnet mit dir teilen. Hoffe du findest es n�tzlich und wenn du dich registrierst werden beide von uns einen Pocketcoin Kryptow�hrungs Bonus erhalten!"
____loclib.e13173 = "�ber E-Mail senden"
____loclib.e13174 = "Soziales Teilen"
____loclib.e13175 = "Beliebte Tags"
____loclib.e13176 = "Adressen Typ"
____loclib.e13177 = "Foto hochladen"

____loclib.requiredfields = "ben�tigte Felder"
____loclib.e13178 = "Nicht auf dein Profil verlinkt"
____loclib.e13179 = "Nicht ausgegebene Liste"
____loclib.e13180 = "Ihr Invoice wurde erfolgreich erstellt"
____loclib.e13181 = "Ein Fehler ist w�hrend des Erstellens des Angebotes aufgetreten"
____loclib.e13182 = "Erkunder blockieren"
____loclib.e13183 = "Hilfe Center"
____loclib.e13184 = "Registrierung fortfahren"
____loclib.e13185 = "Verbindung verloren"
____loclib.e13186 = "Profil bearbeiten"
____loclib.e13187 = "Inhalte"
____loclib.e13188 = "Bitte speichern Sie Ihren privaten kryptographischen Schl�ssel, da er Login und Passwort von zentralgesteuerten sozialen Netzwerken ersetzt"
____loclib.e13189 = "Verlassen und meinen Schl�ssel f�r immer verlieren!"
____loclib.e13190 = "Pocketnet Thema"
____loclib.e13191 = "Thema setzen"
____loclib.e13192 = "Level"
____loclib.e13193 = "BONUS"
____loclib.e13194 = "Ansehen und Belohnungen"
____loclib.e13195 = "Einschr�nkungen"
____loclib.e13196 = "Es nimmt viel auf"
____loclib.e13197 = "Pocketm�nzen empfangen"
____loclib.e13198 = "Ungef�hre Wartungszeit ist.."
____loclib.e13199 = "Pocketnet jetzt beitreten"

____loclib.e13200 = "Zur�ck zu Pocketnet"
____loclib.e13201 = "BETA beitreten"
____loclib.e13202 = "Pocketnet beta test wird am 24. Januar starten"
____loclib.e13203 = "Danke, dass Sie der Pocketnet Beta E-Mail Liste beigetreten sind. Es ist nicht notwendig, dass Sie Pocketnet benutzen, wir werden jedoch diese E-Mail benutzen, um Ihnen Umfragen zu senden, die uns bei der Verbesserung der Plattform helfen. Danke, dass Sie uns bei der Gestaltung der Zukunft des Internets helfen."
____loclib.e13204 = "Pocketnet Empf�nger Adresse"
____loclib.e13205 = "Parameter"
____loclib.e13206 = "Pocketm�nzen Betrag empfangen"
____loclib.e13207 = "Betrag senden"
____loclib.e13208 = "Verf�gbar"
____loclib.e13209 = "Crowdfunding Liste"
____loclib.e13210 = "Neuer Deal"
____loclib.e13211 = "Link kopieren und teilen"
____loclib.amount = "Betrag"
____loclib.label = "Label"
____loclib.message = "Nachricht"
____loclib.copylink = "Link kopieren"
____loclib.e13211 = "Bitte f�llen Sie diese Felder aus"
____loclib.e13212 = "QR Code erstellen"
____loclib.e13213 = "Empf�nger Adresse"
____loclib.process = "Verarbeite"
____loclib.source = "Quelle"
____loclib.yourmessage = "Ihre Nachricht"
____loclib.e13214 = "Pocketm�nzen Betrag"
____loclib.currency = "W�hrung"


____loclib.e13215 = "W�hrung ausw�hlen"
____loclib.e13216 = "W�hrung Betrag"
____loclib.e13217 = "Zeit f�r diesen Deal ist abgelaufen."
____loclib.e13218 = "Warte auf Best�tigung der Blockchain"
____loclib.e13219 = "Sende Pocketm�nzen zu Ihnen"
____loclib.e13220 = 'Pocketm�nzen gesendet'
____loclib.errorreload = "Etwas ist schief gelaufen. Bitte laden Sie die Seite neu und versuchen Sie es nochmal."
____loclib.e13221 = "Wollen Sie wirklich die Informationen zu diesem Deal l�schen? Es kann nicht gestoppt werden"
____loclib.e13222 = "Downloade Desktop App � das ist der zensurbest�ndigste Weg, Pocketnet zu benutzen. Auch bei einer Schlie�ung der Websites wird die Desktop App durch die direkte Verbindung zum Netzwerkknoten weiterhin funktionieren."
____loclib.e13223 = "Download Pocketnet f�r Windows"
____loclib.e13224 = "Download Pocketnet f�r Linux"
____loclib.e13225 = "Pocketnet Netzwerkknoten"
____loclib.e13226 = 'Download Netzwerkknoten'
____loclib.e13227 = "Download Pocketnet Netzwerkknoten f�r Windows"
____loclib.e13228 = "Download Pocketnet Netzwerkknoten f�r Linux"
____loclib.e13229 = 'Ung�ltiger privater Schl�ssel'
____loclib.e13230 = 'Unbekannter Verbindungsfehler'

____loclib.e13231 = "Verbindung verloren"
____loclib.e13232 = "Nicht m�glich, sich mit dem Netzwerkknoten zu verbinden"
____loclib.e13233 = 'Dieser Kommentar wurde gel�scht'
____loclib.e13234 = 'Opreturn error/41'
____loclib.e13235 = 'Sie k�nnen einen Kommentar nicht zweimal bewerten'
____loclib.e13236 = 'TDieser Kommentar wurde gel�scht'
____loclib.e13237 = 'Sie k�nnen Sich nicht selbst bewerten'
____loclib.e13238 = 'Kommentarsendefehler. Bitte warten Sie und versuchen Sie es erneut/ 37'
____loclib.e13239 = 'Kommentarsendefehler/ 35'
____loclib.e13240 = 'Das Kommentar, auf das Sie antworten m�chten, wurde vom Benutzer gel�scht'
____loclib.e13241 = 'Dieser Kommentar ist zu lang, bitte teilen Sie es auf'
____loclib.e13242 = "Sie wurden von dieser Person blockiert, Sie k�nnen nicht mehr unter deren Beitr�gen kommentieren"
____loclib.e13243 = "Sie haben Ihr Limit an gelikten Kommentaren pro 24 Stunden erreicht"
____loclib.e13244 = "Sie haben Ihr Limit an bearbeiteten Kommentaren pro 24 Stunden erreicht"
____loclib.e13245 = "Sie haben Ihr Limit an gesendeten Kommentaren pro 24 Stunden erreicht"
____loclib.e13246 = "Sie versuchen, den Beitrag von jemand anderem zu bearbeiten"
____loclib.e13247 = "Sie haben Ihr Limit an 5 bearbeiteten Beitr�gen pro 24 Stunden erreicht"
____loclib.e13248 = 'Sie k�nnen nur einmal pro Blockchain block etwas bearbeiten. Bitte warten Sie etwas und versuchen Sie es erneut.'
____loclib.e13249 = 'Sie k�nnen Sich nicht selbst blockieren'
____loclib.e13250 = 'Sie haben diesen Nutzer bereits blockiert'
____loclib.e13251 = 'Sie haben diesen Nutzer nicht blockiert'
____loclib.e13252 = '�berweisung ist besch�digt'
____loclib.e13253 = 'Sie k�nnen Sich nicht auf sich selbst beziehen'
____loclib.e13254 = 'Dieser Benutzername ist zu lang'
____loclib.e13255 = 'Dieser Benutzername wird bereits verwendet'
____loclib.e13256 = 'Dieser Beitrag ist zu lange, bitte teile es auf'
____loclib.e13257 = 'Ihre Pocketnet Ansehens-Punkte erlauben es noch nicht, eine Beschwerde einzureichen.'
____loclib.e13258 = 'Sie haben Ihr Limit an Beschwerden pro 24 Stunden erreicht'

____loclib.e13259 = 'Sie k�nnen Sich nicht �ber Ihren eigenen Beitrag beschweren'
____loclib.e13260 = 'Sie haben bereits Beschwerde �ber diesen Beitrag eingereicht'
____loclib.e13261 = "Schl�ssel speichern"
____loclib.e13262 = "Sp�ter"
____loclib.e13263 = "Abonnieren und Benachrichtigungen f�r diesen Nutzer aktivieren"
____loclib.e13264 = "Abonnieren ohne Benachrichtigungen"
____loclib.e13265 = 'Ihr Name ist nicht mehr verf�gbar, bitte benutzen Sie einen anderen.'
____loclib.e13266 = "Wei�es Design"
____loclib.e13267 = "Dunkles Design"
____loclib.e13268 = 'Coinstake Gewinn'
____loclib.e13269 = '�berweisung erhalten'
____loclib.e13270 = 'Likes erhalten'
____loclib.e13271 = 'Kommentar erhalten'
____loclib.e13272 = 'Antwort erhalten'
____loclib.e13273 = 'Neuer Follower'
____loclib.e13274 = 'Gerettete Benutzer'
____loclib.e13275 = 'Kommentar Punkte'
____loclib.e13276 = 'Zeige eingebettete Videos'
____loclib.e13277 = 'Videos automatisch abspielen'
____loclib.e13278 = 'Pocketnet automatisch starten'
____loclib.e13279 = 'Chat'
____loclib.e13280 = 'Tags'
____loclib.e13281 = 'Neuste Kommentare'
____loclib.e13282 = "Telegram Bot token"
____loclib.e13283 = "Aus Telegram Kanal posten"
____loclib.e13284 = "Bot zum Chat hinzuf�gen und ausw�hlen"
____loclib.e13285 = 'Fragen, bevor Sie aus Telegram posten'
____loclib.e13286 = 'Fragen, bevor Sie zu Telegram senden'
____loclib.e13287 = "Zum Telegram Kanal senden"
____loclib.video = "Video"
____loclib.e13288 = "Hauptseite Vidgets"
____loclib.e13289 = "Integration mit Telegram"

____loclib.system = "System"
____loclib.e13290 = "M�chten Sie folgen?"
____loclib.e13291 = "M�chten Sie wirklich eine Nachricht an Telegram senden?"
____loclib.send = "Senden"
____loclib.e13292 = "Sie haben auf diesem Host bereits einen Netzwerkknoten"
____loclib.e13293 = "Interner Fehler"
____loclib.e13294 = 'PGSQL Database Aktiv'
____loclib.e13295 = 'DB Host'
____loclib.e13296 = 'DB Port'
____loclib.e13297 = 'DB Max'
____loclib.e13298 = 'DB Wartungszeit Timeout, ms'
____loclib.e13298 = 'DB Name'
____loclib.e13300 = 'DB Benutzer'
____loclib.e13031 = 'DB Passwort'
____loclib.e13302 = 'Proxy server Aktiv'
____loclib.e13303 = 'Proxy https server port'
____loclib.e13304 = 'Proxy wss server port'
____loclib.e13305 = 'Server SSL Key, pem'
____loclib.e13306 = 'Server SSL Cert, pem'
____loclib.e13307 = 'Server SSL Passphrase'
____loclib.e13308 = 'Firebase admin SDK'
____loclib.e13309 = 'Ihre Crane Adresse'
____loclib.e13310 = 'Captcha �ktiv'
____loclib.e13311 = 'Ip limiter An'
____loclib.e13312 = "Server"

____loclib.e13313 = "Data Base, PG sql"
____loclib.e13314 = "Firebase"
____loclib.e13315 = "Sonstiges"
____loclib.e13316 = 'Aktivieren'
____loclib.e13317 = 'Binary path'
____loclib.e13318 = 'Config path'
____loclib.e13319 = 'Data path'
____loclib.e13320 = 'Staking Address'
____loclib.e13321 = 'Importiere die Account Adresse zum Netzwerkknoten zum Stapeln'
____loclib.e13322 = 'Staat'
____loclib.e13323 = 'Stapel Adressen'
____loclib.e13324 = 'Letzter Block'
____loclib.control = "Kontrolle"
____loclib.setup = "Setup"
____loclib.e13325 = "Wollen Sie wirklich Nachrichten aus Telegram posten?"
____loclib.e13326 = "Posten"
____loclib.e13327 = 'Wollen Sie wirklich nochmals einen Proxy nutzen?'
____loclib.e13328 = 'hat deinen Kommentar geliket!'
____loclib.e13329 = "Neuer Kommentar Like"
____loclib.e13330 = "hat deinen Beitrag geteilt:"
____loclib.e13331 = "hat deinen Beitrag geteilt:"
____loclib.e13332 = "hat einen brandneuen Beitrag:"
____loclib.e13333 = "Einkommende �berweisung"
____loclib.e13334 = "Herzlichen Gl�ckwunsch, Sie haben gewonnen"
____loclib.e13335 = "Pocketm�nzen f�r Ihren letzten"
____loclib.e13336 = "mit Nachricht:"
____loclib.e13337 = "hat Ihren Beitrag kommentiert:"
____loclib.e13338 = "hat auf Ihren Kommentar geantwortet:"
____loclib.reply = "Antworten"
____loclib.e13339 = "Sie haben jemanden aus dem zensierten Web gerettet. Einige M�nzen sind auf ihrem Weg!"
____loclib.e13340 = 'Herzlichen Gl�ckwunsch!'
____loclib.e13341 = "folgt dir"
// <%=e('e13337')%> <%=e('e13037').toUpperCase()%> <%=e('')%> self.app.localization.e('e13337')
____loclib.e13342 = "Neuer Follower"
____loclib.e13343 = "hat deinen Beitrag geliket"
____loclib.e13344 = "Neuer Like"
____loclib.e13345 = "hat Ihnen eine private Nachricht gesendet"
____loclib.e13346 = "Sie haben neue Nachrichten"
____loclib.e13347 = "Es sind Updates f�r Pocketnet verf�gbar. Updates jetzt herunterladen?"
____loclib.e13348 = "Nein, sp�ter"
____loclib.e13349 = "Es sind Updates f�r Pocketnet verf�gbar. Website aufrufen, um die neue Version zu downloaden?"
____loclib.e13350 = 'Treten Sie Pocketnet bei und verdienen Sie Pocketm�nzen'
____loclib.e13351 = 'Bitte schreiben Sie einige Worte �ber Sich selbst, damit die Leute entscheiden k�nnen, ob sie Ihnen folgen m�chten.'
