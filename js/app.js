/*
if(typeof require != 'undefined' && typeof __map == 'undefined')
{
	var __map = require("./_map.js");
}*/

if (typeof _OpenApi == 'undefined') _OpenApi = false;

if(typeof _Electron != 'undefined' && _Electron){

	imagesLoaded = require('imagesloaded');

	emojione = require('emojione')

	var Isotope = require('isotope-layout'); require('isotope-packery')

	var jquerytextcomplete = require('jquery-textcomplete')

	animateNumber = require('./js/vendor/jquery.animate-number.js')
	touchSwipe = require('./js/vendor/jquery.touchSwipe.js')
	

	MessageStorage = require('./js/vendor/rtc/db.js')
	RTCMultiConnection = require('./js/vendor/rtc/RTCMultiConnection.js')

	io = require('./js/vendor/rtc/socket.io.js')

	MediumEditor = require('medium-editor').MediumEditor
	jQueryBridget = require('jquery-bridget');
	jQueryBridget( 'isotope', Isotope, $ );
	jQueryBridget( 'textcomplete', jquerytextcomplete, $ );

	Mark = require('./js/vendor/jquery.mark.js');

	emojionearea = require('./js/vendor/emojionearea.js')
	filterXss = require('./js/vendor/xss.min.js')

	const contextMenu = require('electron-context-menu');

	contextMenu({
		showSearchWithGoogle : false,
		showCopyImageAddress : true,
		showSaveImageAs : true
	})



}

if(typeof _Node == 'undefined') _Node = false;

/////////////////////////////////////////////
///

chrsz = 8;

Application = function(p)
{	

	if(!p) p = {}

	var self = this;
	var realtimeInterval = null;


	self._meta = {
		Pocketnet : {
			url : "pocketnet.app",
			turl : "test.pocketnet.app",
			fullname : "Pocketnet",
			protocol : 'pocketnet',
			blockexplorer : 'https://pocketnet.app/blockexplorer/'
		},

		Bastyon : {
			fullname : "Bastyon",
			url : "bastyon.com",
			turl : "test.pocketnet.app",
			protocol : 'bastyon',
			blockexplorer : 'https://pocketnet.app/blockexplorer/'
		}
	}

	self.meta = self._meta.Pocketnet

	if (window.pocketnetproject && self._meta[window.pocketnetproject]){
		self.meta = self._meta[window.pocketnetproject]
	}

	var url = window.pocketnetdomain

	if (window.testpocketnet){
		self.test = true
	}

	self.options = {
		
		url : url,

		matrix : p.matrix,

		nav : {
			navPrefix : window.pocketnetpublicpath || '/pocketnet',
		},

		name : 'PCRB',
		fullName : self.meta.protocol,
		localStoragePrefix : self.meta.protocol,

		
		server : p.server || 'https://'+url+'/Shop/AJAXMain.aspx', //donations will be removed

		//////////////
		
		firebase : p.firebase || 'https://'+url+':8888', /// will be removed

		//////////////

		imageServer : p.imageServer || 'https://api.imgur.com/3/',
		imageStorage : 'https://api.imgur.com/3/images/',

		//imageServerup1 : p.imageServerup1 || 'https://'+url+':8092/up', // will be part of proxy
		imageServerup1 : p.imageServerup1 || 'https://pocketnet.app:8092/up',
		rtc : p.rtc || 'https://'+url+':9001/',
		rtcws : p.rtcws || 'wss://pocketnet.app:9090',
		rtchttp : p.rtchttp || 'https://pocketnet.app:9091',
		
		listofnodes : p.listofnodes || null,
		listofproxies : p.listofproxies || null,

		unathorizated : function(ignoreDialog){

			self.user.isState(function(state){

				if (state){

					self.user.signout();

					self.reload({
						href : 'authorization'
					});

					if(!ignoreDialog)
						dialog({
							html : self.localization.e('id189_1'),
							class : 'accepting one',
							btn1text : "Okay",
							btn2text : self.localization.e('dcancel'),
						})

					

				}

			})

			
		},

		/////////

		successHandler : function(p){

			var ca = {}
			var change = false;

			if (p.rpc){
				ca.proxy = true;
				ca.node = true;
				ca.offline = true;
			}

			if (p.api){
				ca.proxy = true;
				ca.offline = true;
			}

			if (p.apim){
				ca.proxymain = true;
				ca.offline = true;
			}

			if (p.online){
				ca.offline = true
			}

			ca.offline = true;

			_.each(ca, function(t, i){

				if (self.errors.state[i]){
					delete self.errors.state[i]

					change = true
				}

			})

			if(change){
				_.each(self.errors.clbks, function(c){
					c(self.errors.state)
				})
			}

		},


		///////////

		errorHandler : function(error, p){

			if(!error) {

				if (p.rpc || p.api)

					error = 'proxy'

				if (p.apim)
					error = 'proxymain'

			}

			else
			{
				if(error == 'fail') error = ''
				//error = 'node'
			}


			if((error == 'proxy' || error == 'proxymain') && self.platform && !self.platform.online){
				error = 'offline'
			}

			self.app.api.changeProxyIfNeed()

			if(error && !self.errors.state[error]){

				self.errors.state[error] = true;

				_.each(self.errors.clbks, function(c){
					c(self.errors.state)
				})

			}


			return error;
	
		}
		
	};

	///////////////
	self.errors = {
		clear : function(){
			this.state = {};

			self.platform.loadingWithErrors = false

			self.errors.autocheck(false)

		},
		state : {},
		clbks : {

			/*_platform : function(change){
				if(!self.errors.connection() && !self.platform.loadingWithErrors){
					self.prepareUserData()
				}
			},*/

			_modules : function(change){


				if(!self.errors.connection() && !self.platform.loadingWithErrors){

					_.each(self.modules, function(m){

						_.each(m.module.iclbks, function(c){
	
							c(change)
	
						})
						
					})

				}
				
			},

			check : function(){
				if (self.errors.connection()){
					self.errors.autocheck(true)
				}

				else
				{
					self.errors.autocheck(false)
				}
			}

		},

		_autocheck : null,

		autocheck : function(enable){
			if (enable){

				if(!self.platform || !this.connection()) return

				self.errors._autocheck || (self.errors._autocheck = setInterval(function(){

					if (self.platform.focus){
						self.errors.check()
					}

				}, 5000))

			}
			else{

				if(self.errors._autocheck){

					clearInterval(self.errors._autocheck)
					self.errors._autocheck = null;

				}

			}
		},

		check : function(clbk){
			if (self.errors.state.node || self.errors.state.proxy)

				self.platform.sdk.node.get.time(function(t, error){
						
				})

			if (self.errors.state.proxymain){

				self.platform.sdk.proxy.info(function(t, error){
						
				}, true)

			}
		},

		connection : function(){
			return this.state.node || this.state.proxy || this.state.offline
		},

		connectionRs : function(){
			return (this.state.node || this.state.proxy || this.state.offline) && !self.platform.loadingWithErrors
		}
	}

	self.apiHandlers = {
		success : function(p){

			var ca = {}
			var change = false;

			if (p.rpc){
				ca.proxy = true;
				ca.node = true;
			}

			if (p.api){
				ca.proxy = true;
			}

			ca.offline = true;


			_.each(ca, function(t, i){

				if (self.errors.state[i]){
					delete self.errors.state[i]

					change = true
				}

			})

			if (change){
				_.each(self.errors.clbks, function(c){
					c(self.errors.state)
				})
			}

		},

		///////////

		error : function(p){
			var error = null

			if (p.rpc){
				error = 'node'
			}

			if (p.api){
				error = 'proxy'
			}

			if((error == 'proxy') && (self.platform && !self.platform.online)){
				error = 'offline'
			}


			if(error && !self.errors.state[error]){

				self.errors.state[error] = true;

				_.each(self.errors.clbks, function(c){
					c(self.errors.state)
				})

			}
			

			return error;
	
		}
	}

	self.el = {}

	self.id = makeid();
	self.map = __map;
	self.modules = {};

	self.curation = function(){
		if(typeof isios != 'undefined' && isios() && window.cordova) return true
		return false
	}

	self.relations = {};

	self.backmap = {

		index : {
			href : 'index',
			childrens : ['author', 'chat', 's', 'share', 'userpage']
		},

		s : {
			href : 's',
			childrens : ['author', 'chat', 's', 'share','userpage']
		},

		author : {
			href : 'author',
			childrens : ['author', 's', 'chat', 'share', 'userpage']
		},
		userpage : {
			href : 'userpage',
			childrens : ['userpage', 'share', 'author', 'post', 'authorization', 'registration', 'pkview']
		}

	}

	if(self.curation()){
		delete self.backmap.index
	}

	self.options.backmap = self.backMap

	var prepareMap = function(){

		_.each(self.map, function(m, id){
			m.id = id;
		})

	}

	if (typeof window != 'undefined')
		self.options.address = window.location.protocol + "//" + window.location.host; 


	self.preapi = function(){

		if(self.preapied) return
			
		self.api = new Api(self)
		self.api.initIf()

		self.localization = new Localization(self);
		self.localization.init()

		self.preapied = true
		
	}
	
	var newObjects = function(p){
		
		self.settings = new settingsLocalstorage(self);
		self.nav = new Nav(self);	
		
		self.ajax = new AJAX(self.options);	
		self.user = new User(self);	
		self.ajax.set.user(self.user);

		self.platform = new Platform(self, self.options.listofnodes);

		self.options.platform = self.platform

		if (self.ref)
			self.platform.sdk.users.addressByName(self.ref, function(r){
				if(r){
					self.ref = r;
					localStorage['ref'] = self.ref
				}

			})

		self.nav.dynamic = function(p, clbk){
			

			self.platform.sdk.users.addressByName((p.href), function(r){

				if (r){
					if (clbk)
						clbk(null, {

							id : 'author',
							extra : {
								address : r
							}

						})
				}
				else{
					if (clbk)
						clbk('notfound')
				}

			})

		}

	}

	self.module = function(id){

		var checkedId = deep(self, 'map.' + id + ".id");

		var module = null;

		if (checkedId)

			module = deep(self, 'modules.' + checkedId + ".module") || null;

		return module;
	}

	self.initTest = function(mnemokey, clbk,){
		if (typeof localStorage == 'undefined') localStorage = {};

		prepareMap();

		newObjects();

		self.platform.nodeid = 0;

		self.user.setKeysPair(self.user.keysFromMnemo(mnemokey));

		self.user.isState(function(state){

			self.localization.init(function(){

				self.platform.prepare(function(){
					if (clbk)
						clbk(state)
				})

			})

			
		})
	}

	self.initTestFromPrivate = function(private, clbk,){
		if (typeof localStorage == 'undefined') localStorage = {};

		prepareMap();

		newObjects();

		self.platform.nodeid = 0;

		self.user.setKeysPairFromPrivate(private);

		self.user.isState(function(state){

			self.localization.init(function(){

				self.platform.prepare(function(){
					if (clbk)
						clbk(state)
				})

			})

			
		})
	}

	self.showuikeysfirstloading = function(){

		self.user.isState(function(state){

			if(state && self.platform.sdk.address.pnet()){

				self.user.usePeertube = self.platform.sdk.usersettings.meta.enablePeertube ? self.platform.sdk.usersettings.meta.enablePeertube.value : false;


				if (self.platform.sdk.registrations.showprivate()){
					self.platform.ui.showmykey({
						showsavelabel : true
					})
				}
			}

		})
	}

	self.init = function(p){

		if (navigator.webdriver && !self.test) return

		if (typeof localStorage == 'undefined')
			localStorage = {};

		if(!p) p = {};
		
		p.nav || 		(p.nav = {})
		p.nav.clbk || 	(p.nav.clbk = self.initClbk || null)

		prepareMap();

		self.options.fingerPrint = hexEncode('fakefingerprint');

		
		
		self.localization.init(function(){

			newObjects(p);

			lazyActions([
				self.platform.prepare
			], function(){

				self.realtime();

				if (typeof hideSplashScreen != 'undefined'){
					hideSplashScreen();
				}	
				else{
					$('#splashScreen').remove()
				}
				
				self.nav.init(p.nav);

				if (p.clbk) 
					p.clbk();

				if(!_OpenApi)
					self.showuikeysfirstloading()

			})
		})

		

	}

	self.reload = function(p){
		if(!p) p = {};

			p.nav || (p.nav = {})


		if(typeof p.nav.reload == 'undefined')
			p.nav.reload = true;

		if(p.href) p.nav.href = p.href;
		if(p.history) p.nav.history = p.history;
		if(p.current) p.nav.href = self.nav.get.href()

		if (typeof _Electron != 'undefined' && _Electron) {
			p.nav.href = 'index'
		}

		self.destroyModules();
		
		self.user.isState(function(s){

			p.nav.clbk = p.clbk;

			if(typeof p.nav.href == 'function') p.nav.href = p.nav.href()

			console.log('p.nav', p.nav)

			self.nav.init(p.nav);
			
		})
	}

	self.reloadModules = function(clbk){
		self.destroyModules();
		
		self.user.isState(function(){

			var mp = _.filter(self.map, function(mobj, i){

				var m = self.modules[i]

				if (m && m.module.inited && m.module.authclbk){
					m.module.authclbk()
				}

				if (m && m.module.inited && m.module.restart && (mobj.reload && !mobj.now) ) {
					m.module.restart();
				}

				if (m && mobj.now) {
					//m.module.restart();

					return true;
				}
			})

			self.nav.api.ini(function(){
				if (clbk)
					clbk()
			}, mp)

			
		})
	}

	self.reloadLight = function(clbk){

		self.reloadModules(function(){
			if (clbk)
				clbk();
		})

	}

	self.deviceReadyInit = function(p){

		self.el = {
			content : 		$('#content'),
			app : 			$('#application'),
			header : 		$('#headerWrapper'),
			menu : 			$('#menuWrapper'),
			toppanel : 		$('#panelWrapper'),
			navigation : 	$('#navigationWrapper'),
			footer : 		$('#footerWrapper'),
			chats : 		$('.chats'),
			html : 			$('html'),
			window : 		$(window)
		};
	
		if (self.test){
			$('html').addClass('testpocketnet') /// bstn
		}

		initevents()


		if(typeof window.cordova != 'undefined')
		{
			document.addEventListener('deviceready', function(){

				self.mobile.screen.lock()

				p || (p = {});

				p.clbk = function(){
					navigator.splashscreen.hide();
				}

				if (window.Keyboard && window.Keyboard.disableScroll){
					window.Keyboard.disableScroll(false)
				}

				self.init(p)

			}, false);
		}
		else
		{
			self.init(p);
		}

	}

	self.destroyModules = function(){
		_.each(self.modules, function(module){
			if (module.module.inited) {
				if (module.module.destroy)
					module.module.destroy();
			}
				
		})
	}

	self.stopModules = function(){
		_.each(self.modules, function(module){

			if (module.module.inited) {
				module.module.stop();
			}
				
		})
	}

	self.destroy = function(){

		self.destroyModules();

		self.modules = {};
		self.ajax = null;

		self.nav = null;
	}

	self.renewModules = function(map){}
	self.logger = function(Function, Message){}

	self.scrollRemoved = 0;
	self.scrollTop = 0
	self.lastScrollTop = 0

	self.height = 0
	self.width = 0
	self.fullscreenmode = false
	self.playingvideo = null

	var blockScroll = false
	var optimizeTimeout = null

	self.actions = {

		emoji : function(text){
			if(isMobile()) return text

			return joypixels.toImage(text)
		},

		restore : function(){

			if (optimizeTimeout) clearTimeout(optimizeTimeout)

				optimizeTimeout = null
			
			window.requestAnimationFrame(function(){
				self.el.content.css('width', 'auto')
				self.el.content.css('height', 'auto')
				self.el.content.removeClass('optimized')
			})
		},

		optimize : function(){

			if (optimizeTimeout) clearTimeout(optimizeTimeout)

				optimizeTimeout = setTimeout(function(){
					var w = self.el.content.width()
					var h = self.el.content.height()

					window.requestAnimationFrame(function(){
						self.el.content.width(w + 'px')
						self.el.content.height(h + 'px')
						self.el.content.addClass('optimized')
					})
				}, 300)

			
		},

		playingvideo : function(v){

			if (self.playingvideo && self.playingvideo.playing){

				try{
					self.playingvideo.pause()
				}
				catch(e){

				}
				
			}

			self.playingvideo = v

		},

		up : function(scrollTop, el, time){
			_scrollTop(scrollTop, el, time)
		},

		wscroll : function(){
			self.actions.scroll(self.scrollTop)
		},

		scrollToTop: function(){
			self.actions.scroll(0)
		},

		backupscroll : function(){
			self.actions.scroll(self.lastScrollTop)
		},

		scroll : function(to){

			blockScroll = true

			self.el.window.scrollTop(to)
			self.scrollTop = to

			setTimeout(function(){
				blockScroll = false
			}, 100)
			
		},

		getScroll : function(){

			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			var s = scrollTop //self.el.window.scrollTop()

			if(!self.fullscreenmode){
				self.lastScrollTop = s
			}

			return s
		},

		offScroll : function(){

			if(self.scrollRemoved < 0) self.scrollRemoved = 0

			self.scrollRemoved++

			if (self.scrollRemoved > 1){
				return false
			}

			blockScroll = true

			self.el.html.addClass('nooverflow')

			if (window.Keyboard && window.Keyboard.disableScroll){
				window.Keyboard.disableScroll(true)
			}

			setTimeout(function(){
				blockScroll = false
			}, 100)

			return true
			
		},

		onScroll : function(){

			if(self.scrollRemoved < 1) self.scrollRemoved = 1

			if (self.scrollRemoved){
				self.scrollRemoved--
			}

			if(!self.scrollRemoved){
				///
				self.el.html.removeClass('nooverflow')
				///

				if (window.Keyboard && window.Keyboard.disableScroll){
					window.Keyboard.disableScroll(false)
				}
			}

		},

	}

	var initevents = function(){

		var delayscroll = null,
			delayscrollopt = null,
			delayresize = null

		var body = document.body
		var mobile = isMobile()

		self.height = self.el.window.height()
		self.width = self.el.window.width()

		var showPanel = '1' // 2 // 3

		/*window.removeEventListener('scroll')
		window.removeEventListener('resize')*/


		//self.el.content.css('width', self.width + 'px')

		var scrolling = _.throttle(function(){
			window.requestAnimationFrame(function(){

				if(!self.el.window) return
				if (self.fullscreenmode) return

				var lastScrollTop = self.lastScrollTop

				var scrollTop = self.actions.getScroll()

				_.each(self.events.scroll, function(s){
					s(scrollTop, blockScroll)
				})

				if(mobile){

					var cs = (lastScrollTop + 40 < scrollTop || lastScrollTop - 40 < scrollTop)

					if (scrollTop < 900){

						showPanel = '1'

						if (self.el.html.hasClass('scrollmodedown'))
							self.el.html.removeClass('scrollmodedown')

						return
					}

					if (scrollTop > 900 && cs){
						if(lastScrollTop + 40 < scrollTop){
							showPanel = '2'
						}
					}
					else{
						showPanel = '3'
					}

				}

			})
		}, 100)

		var t = false

		window.addEventListener('touchstart', function(e){
			t = true
		})

		window.addEventListener('touchend', function(e){
			t = false
		})

		window.addEventListener('touchcancel', function(e){
			t = false
		})

		window.addEventListener('scroll', function(){

			scrolling()

			delayscroll = slowMade(function(){
				window.requestAnimationFrame(function(){

					if(!self.el.window) return
					if (self.fullscreenmode) return
					
					_.each(self.events.delayedscroll, function(s){
						s(self.lastScrollTop, blockScroll)
					})

					if(!t){

						if (showPanel == '2' && !self.el.html.hasClass('scrollmodedown')){
							self.el.html.addClass('scrollmodedown')
						}
			
						if (showPanel == '3' && self.el.html.hasClass('scrollmodedown'))
							self.el.html.removeClass('scrollmodedown')
							
						showPanel = '1'
					}

					
		
					
				})

			}, delayscroll, 100)

		})

        window.addEventListener('resize', function(){


			delayresize = slowMade(function(){
				window.requestAnimationFrame(function(){

					if(!self.el.window) return
					if (self.fullscreenmode) return

					var scrollTop = self.actions.getScroll(),
						height = self.el.window.height(),
						width = self.el.window.width();

						self.height = height
						self.width = width

					_.each(self.events.resize, function(s){
						s({
							scrollTop : scrollTop,
							height : height,
							width : width
						})
					})

				})

			}, delayresize, 30)

		})
	}

	self.events = {
		scroll : {},
		resize : {},
		delayedscroll : {}
	}

	self.loadModules = function(p){

		lazyEach({
			array : p.modules,
			action : function(p){

				self.nav.p.open({
					nohistory : true,
					load : true,
					uri : p.item,
					success : p.success,
					psname : true
				})

			},
			each : {
				after : p.after
			},
			all : {
				success : function(){

					p.success(p.modules);
				}
			}
		})

	}

	self.name = self.options.name;

	self.reltime = function(time){
		var tt = convertDateRel(time)

		if (tt[0]) {
			tt[0] = self.localization.e(tt[0], tt[2])
			tt[2] = ''
		}

		tt = _.filter(tt, function(t){
			return t;
		})

		return tt.join(' ')
	}

	self.realtime = function(){

		if (realtimeInterval) 
			clearInterval(realtimeInterval)

		if(typeof window != 'undefined' && typeof $ != 'undefined'){

		}

		realtimeInterval = setInterval(function(){

			var realtimeelements = $('.realtime');


			realtimeelements.each(function(){
				var el = $(this);

				var time = el.attr('time');
				var utc =  el.attr('utc');


				var ctime = null;

				if (utc && utc == 'true'){
					ctime = self.platform.convertUTCSSrel(time)
				}
				else{
					ctime = self.reltime(new Date(time))
				}

				el.html(ctime)

			})
		}, 30000)

	}

	self.storage = {

		getStorageLocation: function() {
			if (!device || !device.platform || !cordova || !cordova.file)
				return undefined;
			var storageLocation = "";
			switch (device.platform) {
				case "Android":
					storageLocation = 'file:///storage/emulated/0/';
					break;
				case "iOS":
					storageLocation = cordova.file.cacheDirectory;
					break;
			}
			return storageLocation;
		},
	
		getStorageDirectory: function() {
			return 'Pocketnet';
		},
	
		saveFile: function(url, blob) {

			if(!window.resolveLocalFileSystemURL){
				return Promise.resolve()
			}

			return new Promise((resolve, reject) => {
				var storageLocation = self.storage.getStorageLocation();
				// var blob = new Blob([file], { type: "image/png" });
				var name = $.md5(url);

				window.resolveLocalFileSystemURL(storageLocation, function (fileSystem) {
					fileSystem.getDirectory(self.storage.getStorageDirectory(), {
						create: true,
						exclusive: false
					},
					function (directory) {
						directory.getFile(name, { create: true, exclusive: false }, function (entry) {
							var myFileUrl = entry.toURL();
							entry.createWriter(function (writer) {
								writer.onwriteend = function () {
									return resolve(myFileUrl);
								};
								writer.seek(0);
								writer.write(blob);
							}, function (error) {
								return reject(error);
							});
						}, function (error) {
							return reject(error);
						});
					}, function (error) {
						return reject(error);
					});
				}, function (evt) {
					return reject(evt);
				});
			});
		},
	
		loadFile: function(url) {
			
			if(!window.resolveLocalFileSystemURL){
				return Promise.reject()
			}

			return new Promise((resolve, reject) => {
				var storageLocation = self.storage.getStorageLocation();
				var name = $.md5(url);
				window.resolveLocalFileSystemURL(storageLocation, function (fileSystem) {
					fileSystem.getDirectory(self.storage.getStorageDirectory(), {
						create: true,
						exclusive: false
					},
					function (directory) {
						directory.getFile(name, { create: false }, function (entry) {

							console.log(entry)

							entry.file(function(file) {

								var reader = new FileReader();

								console.log(file)

								reader.onloadend = function() {
						
									var blob = new Blob([new Uint8Array(this.result)], { type: file.type || "file" });

									return resolve(blob);
								};
						
								reader.readAsArrayBuffer(file);

								

							}, function(error) {
								console.error(error)
								return reject(error);
							});


						}, function (error) {
							return reject(error);
						});
					}, function (error) {
						return reject(error);
					});
				}, function (evt) {
					return reject(evt);
				});
			});
		},
	
		// Delete the file if it is older than the time passed as parameter
		deleteFileIfTooOld: function(fileEntry, time) {
			return new Promise((resolve, reject) => {
				if (fileEntry.isFile) {
					fileEntry.file((file) => {
						// If file is older than the date passed as parameter
						if (file.lastModifiedDate <= time.getTime()) {
							// Delete the file
							fileEntry.remove(function() {
								return resolve();
							}, function(error) {
								return resolve();
							});
						} else
							return resolve();
					}, function(error) {
						return resolve();
					}); 
				} else
					return resolve();
			});
		},
	
		clearStorage: function(time) {
			return new Promise((resolve, reject) => {
				if (!time || !time.getTime)
					return reject('Invalid date object');
				var nbEntries, nbDone = 0;
				var incrementAndCheckNbDone = function() {
					nbDone += 1;
					if (nbDone >= nbEntries)
						resolve();
				}
				var storageLocation = self.storage.getStorageLocation();
				window.resolveLocalFileSystemURL(storageLocation, function (fileSystem) {
					fileSystem.getDirectory(self.storage.getStorageDirectory(), {
						create: true,
						exclusive: false
					},
					function (directory) {
						var directoryReader = directory.createReader();
						directoryReader.readEntries(function(entries) {
							nbEntries = entries.length;
							// For each file inside the directory
							for (var i = 0; i < nbEntries; i++) {
								self.storage.deleteFileIfTooOld(entries[i], time).then(() => {
									incrementAndCheckNbDone();
								});
							}
						}, function(error) {
							return reject(error);
						});
					}, function (error) {
						return reject(error);
					});
				});
			});
		}
	
	}

	self.mobile = {
		saveImages : {
			save : function(base64, nms){
				var nm = nms.split('.')

				var name = nm[0],
					format = nm[1]

				var mt = {
					png : 'image/png',
					jpg : 'image/jpeg'
				}

				var ms = mt[format] || 'image/' + format

				if (window.cordova){

					console.log('base64', base64)

					var image = b64toBlob(base64.split(',')[1], 'image/' + ms);	

					p_saveAsWithCordova(image, name + '.' + format, function(){
						clbk()
					})

				}

				else{
					p_saveAs({
						file : base64,
						format : format,
						name : name
					})
				}
			},
			dialog : function(name, src){
				

				var items = [
					{
						text : app.localization.e('saveimage'),
						class : 'itemmain',
						action : function(clbk){

							globalpreloader(true, true)

							srcToData(src, function(base64){

								self.mobile.saveImages.save(base64, name)

								successCheck()

								globalpreloader(false)

							})
						}
					}
				]

					/*if(!removesharing){
						if (window.cordova && window.plugins && window.plugins.socialsharing){

							items.push({
								text : app.localization.e('share'),
								class : 'itemmain',
								action : function(clbk){
	
									var options = {
										files : [base64]
									}
	
									window.plugins.socialsharing.shareWithOptions(options);
		
								}
							})
	
						}
					}*/
					

					

					menuDialog({
						items : items
					})
				
			},
			init : function(_el){

				if(isMobile()){
					_el.swipe({
						longTap : function(){

							console.log("longtap")

							self.mobile.vibration.small()

							var name = this.attr('save')
							var src = this.attr('src') || this.attr('i')

							console.log("src", src)

							setTimeout(function(){
								self.mobile.saveImages.dialog(name, src)
							}, 200)

							return false
							
						}
					})
				}

				
			}
		},
		vibration : {
            small : function(time){

				if(!window.cordova) return

                if(isios()){

                    if(typeof TapticEngine != 'undefined')
                        TapticEngine.impact({
                            style: "medium"
                        });

                    return
                }

                

                if (navigator.vibrate){
                    navigator.vibrate(time || 50)
                }
            }
        },
		statusbar : {
			background : function(){

				var colors = {
					white : "#FFF",
					black : "#030F1B"
				}

				if (window.StatusBar) {
					self.platform.sdk.theme.current == 'white' ? window.StatusBar.styleDefault() : window.StatusBar.styleLightContent()
					window.StatusBar.backgroundColorByHexString(colors[self.platform.sdk.theme.current] || "#FFF");
				}

				if (window.NavigationBar)
					window.NavigationBar.backgroundColorByHexString(colors[self.platform.sdk.theme.current] || "#FFF", self.platform.sdk.theme.current == 'black');
			},
			hide : function(){
				if (window.StatusBar) {
					window.StatusBar.hide()
					window.StatusBar.overlaysWebView(true);
				}

				if (window.NavigationBar){
					window.NavigationBar.hide()
				}
			},
			show : function(){
				if (window.StatusBar) {
					window.StatusBar.show()
					window.StatusBar.overlaysWebView(false);
				}

				if (window.NavigationBar){
					window.NavigationBar.show()
				}

				self.mobile.statusbar.background()
			},	
		},

		unsleep : function(t){

			if (window.plugins && window.plugins.insomnia){

				if(t) window.plugins.insomnia.keepAwake()
				else window.plugins.insomnia.allowSleepAgain()
			}
				
		},

		fullscreenmode : function(v){
			v ? self.mobile.screen.unlock() : self.mobile.screen.lock()
			v ? self.mobile.statusbar.hide() : self.mobile.statusbar.show()

			self.mobile.unsleep(v)

			//v ? self.el.html.addClass('fullscreen') : self.el.html.removeClass('fullscreen')

			

			if(!v){
				setTimeout(function(){
					self.fullscreenmode = v
					self.actions.scroll(self.lastScrollTop)
				}, 10)
			}
			else{
				self.fullscreenmode = v
			}
		},

		screen : {

			lock : function(){

				if (window.cordova)
					window.screen.orientation.lock('portrait')
			},
			unlock : function(){
				if (window.cordova)
					window.screen.orientation.unlock()
			},

			destroy : function(){
				if (window.cordova)
					window.screen.orientation.removeEventListener('change')
				self.mobile.screen.clbks = {}
			},

			init : function(){
				self.mobile.screen.clbks = {}

				if (window.cordova)
					window.screen.orientation.addEventListener('change', function(){

						_.each(self.mobile.screen.clbks, function(c){
							c(screen.orientation.type)
						})

					});
			},

			clbks : {}
		}
	}

	self.ref = null;
	
	try{
		self.ref = localStorage['ref'] || parameters().ref;
	}catch(e){}
	

	self.options.device = localStorage['device'] || makeid();

	localStorage['device'] = self.options.device

	if(typeof window != 'undefined'){ self.fref = deep(window, 'location.href') }

	return self;
}

topPreloader(85);

if(typeof module != "undefined")
{
	module.exports = Application;
}


