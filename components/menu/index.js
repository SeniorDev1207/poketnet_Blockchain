var menu = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(){

		var el,
			searchBlurTimer = null,
			sitenameToNav = null,
			plissing = null,
			authorForSearch = null,
			searchBackAction = null,
			menusearch = null;

		var loc = new Parameter({

			type : "VALUES",
			name : "Localization",
			id : 'localization',
			defaultValue : app.localization.current().name,
			possibleValues : app.localization.availableMap('name'),
			format : {
				right : true
			},

			_onChange : function(value){
				var a = app.localization.findByName(value);

				if (a && a.key != app.localization.key)
				{
					app.localization.set(a.key);
				}
			}

		})

		var updateNew = function(){

			var s = self.app.platform.sdk.newmaterials.storage

			if(!el.c) return

			_.each(s, function(v, k){

				var _el = el.c.find('.lentaunseen[key="'+k+'"]')

				if(v > 99) v = '99'

				_el.html(v)

				if(v) _el.addClass('hasunseen')
				else _el.removeClass('hasunseen')

			})
		}

		var balanceHash;

		var notifications = {}

		var actions = {
			

			elswidth : function(){

			},

		
			ahnotifyclear : function(){
				notifications = {}

				actions.ahnotify(null)
			},
			ahnotify : function(el, c, type){


				if(!c) c = 0

				if(type) notifications[type] = c

				var cnt = _.reduce(notifications, function(s, i){
					return s + (i || 0)
				}, 0)

				var cordovabadge = null;
					
				if(typeof cordova != 'undefined'){
					cordovabadge = deep(cordova, 'plugins.notification.badge')
				}

				if (el)
					actions.ah(el, notifications[type])

				if (cordovabadge) cordovabadge.set(cnt)

				self.app.platform.api.electron.notifications(cnt, 'notifications')

			},

			ah : function(el, c){
				if (c > 0){
					el.addClass('amountHave')
				}
				else
				{
					el.removeClass('amountHave')
				}

				el.find('.amount').html(c)
			},

			sitenameToNav : function(){

				if(!events.navinit.el) return

				if (menusearch && menusearch.active || parameters().ss) return

				var pn = self.app.nav.current.href
				
				if ((pn == 'index' || pn == 'author') && self.app.lastScrollTop > 45){

					if(!el.nav.hasClass('active')){
						el.nav.addClass('active')
						el.c.addClass('menupanelactive') //// ??????

						el.nav.find('.pcenterLabel').removeClass('active')

			
						el.postssearch.find('input').blur()

						if (menusearch)
							menusearch.blur()

						var r = parameters(self.app.nav.current.completeHref, true).r || 'empty'

						var video = parameters(self.app.nav.current.completeHref, true).video;

						if (video) r = 'video'

						if (pn == 'index'){
							el.nav.find('.pcenterLabel[r="'+r+'"]').addClass('active')
						}
					}

					
						
				}
				else
				{	

					if (el.nav.hasClass('active')){
						el.c.removeClass('menupanelactive')
						el.nav.removeClass('active')
					}
					
				}

				actions.elswidth()

				
			}
		}

		var events = {

			navinit : {
				init : function(el){

					if(!isTablet()){

						self.app.events.scroll.menu = actions.sitenameToNav

						//$(window).on('scroll', actions.sitenameToNav)

						self.app.nav.clbks.history.menu = function(href){

							actions.sitenameToNav()

						}
					}

					
				},

				destroy : function(){

					delete self.app.events.scroll.menu
					delete self.app.nav.clbks.history.menu

				}
			},

			chats : {
				click : function(){

					var show = deep(self, 'app.platform.matrixchat.core.apptochat')

					if (show) {
						self.app.mobile.vibration.small()
						show()
					}

				},

				init : function(el){

					self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.menu = function(count){
						actions.ahnotify(el, count, 'chat')
					}
				},

				fast : true
			},

			sitename : {

				click : function(){

					self.app.user.isState(function(state){

						//if(self.app.nav.get.pathname() != 'index'){
							var k = localStorage['lentakey'] || 'index';

							if (parameters().r == k) k = 'index'

							if (k != 'index') {
								if (k == 'video'){
									k = 'index?video=1'
								}
								else{
									k = 'index?r=' + k
								}
								
							}

							if(!state) k = 'index'

							if(self.app.curation()){
								if(!state){
									k = 'welcome'
								}
								else{
									k = 'userpage'
								}
								
							}

							self.nav.api.go({
								href : k,
								history : true,
								open : true,
								handler : true
							})
						//}

					})

					
				},

				

			},

			activate : {
				click : function(){

					dialog({
						header : self.app.localization.e('id167'),
						html : self.app.localization.e('id168'),
						class : "one",
						btn1text : self.app.localization.e('id169'),

						success : function(){
							self.app.platform.sdk.user.activateWithDialogs(function(result){

							})
						}
					})

				}
			},

			keyexport : {
				click : function(){
					self.app.mobile.vibration.small()
					self.app.platform.ui.showmykey({
						showsavelabel : true
					})

				},

				init : function(el){

					self.app.platform.sdk.registrations.clbks.menu = function(){

						if (!self.app.platform.sdk.registrations.showprivate()){
							
							el.closest('.keyexportWrapper').addClass('hidden')

						}
						else
						{
							el.closest('.keyexportWrapper').removeClass('hidden')
						}

						
					}

				}
			},

			notifications : {
				init : function(el){

					var unseen = function(){

						return _.filter(self.app.platform.sdk.notifications.storage.notifications, function(notification){
							if(notification.seen) return false

							var m = null;

							if (notification.mesType) m = self.app.platform.ws.messages[notification.mesType]
							if (notification.msg && !m) m = self.app.platform.ws.messages[notification.msg]


							if(!m) return false
							
							var tpl = m.fastMessage(notification)

							if(!tpl) return false


							return true
						})

					}


					self.app.platform.sdk.notifications.init(function(){
						actions.ahnotify(el, unseen().length, 'notifications')
					})

					if(!isTablet()){
						self.nav.api.load({
							eid : 'menu',
							open : true,
							id : 'notifications',
							el : el,
							inTooltip : true
						})
					}

						

					self.app.platform.sdk.notifications.clbks.added.menu =
					self.app.platform.sdk.notifications.clbks.seen.menu = function(){
						actions.ahnotify(el, unseen().length, 'notifications')
					}
				},

				click : function(el){
					self.app.mobile.vibration.small()
					if(isTablet())
						self.nav.api.go({
							href : 'userpage?id=notifications&report=notifications',
							history : true,
							open : true
						})

				}
			},

			messenger : {
				init : function(el){

					var rtchttp = self.app.platform.clientrtc.rtchttp;

					var unread = function(){

						var c = 0;


						_.each(rtchttp.storage.chat, function(info, id){

							c = c + info.messages.unreaded 
						})

						return c;
					}

					self.app.platform.clientrtc.rtchttp.info.allchats(function(){
						actions.ahnotify(el, unread(), 'chat')
					})	

					self.app.platform.sdk.messenger.clbks.menu = function(){
						actions.ahnotify(el, unread(), 'chat')
					}

				},

				click : function(el){

					if(!isMobile())
						self.nav.api.go({
							href : 'userpage?id=messenger&report=messenger',
							history : true,
							open : true
						})
					else
						self.nav.api.load({
							href : 'messenger',
							history : true,
							open : true
						})

				}
			},

			savecross : {
				init : function(el){

					/*var n = deep(self.app, 'platform.sdk.user.storage.me.rc') || 0

					actions.ah(el, n)

					self.app.platform.ws.messages.event.clbks.menusave = function(d){
						if(d.mesType == 'userInfo'){

							var n = deep(self.app, 'platform.sdk.user.storage.me.rc') || 0

							actions.ah(el, n)
							
						}
					}*/


					

				},
				click : function(){


					self.nav.api.load({
						open : true,
						href : 'socialshare',
						history : true,
						inWnd : true,

						essenseData : {
							rescue : true
						}
					})
				}
			},

			search : {
				fast : true,
				click : function(){
					self.app.mobile.vibration.small()
					el.c.addClass('searchactive')

					//if (el.c.hasClass('searchactive')){

						searchBackAction = null;

						el.postssearch.find('input').focus();
						el.postssearch.addClass('active')

						if (searchBlurTimer) {
							clearTimeout(searchBlurTimer)
							searchBlurTimer = null
						}

						
					//}
					/*else
					{
						el.postssearch.removeClass('active')

						el.postssearch.find('input').val('')

						if (authorForSearch){
							authorForSearch.clear()
						}
					}*/

				}
			},
			searchinit : {
				init : function(_el){

					var close = function(cl){

						var pn = self.app.nav.current.href

						if (pn != 'index' || cl){

							_el.find('input').val('')
							
							closesearch()
							clearex()

						}

						else{

							if (searchBackAction){
								searchBackAction()
								searchBackAction = null;
							}

						}


						
					}

					var clearex = function(){
						if(searchBlurTimer)
						{
							clearTimeout(searchBlurTimer)
							searchBlurTimer = null;
						}
					}

					var render = function(results, value, clbk, p){


						renders.results(results, value, function(tpl){

							clbk(tpl, function(el, helpers){

								bgImages(el)

								self.app.nav.api.links(null, el, function(){
									helpers.closeResults()
									clearex()
								});


								el.find('.user').on('click', function(){

									var r = $(this).attr('address')
									var name = $(this).attr('name')

									self.nav.api.go({
										href : name ? name.toLowerCase() : 'author?address=' + r,
										history : true,
										open : true
									})

									helpers.closeResults()
									close()
									clearex()

								})
							})

						}, p)
					}

					menusearch = new search(el.postssearch, {
						placeholder : self.app.localization.e('e13139'),

						right : true,

						clbk : function(_el){

							_el.find('input').on('blur', function(){

								console.log('blur')

								searchBlurTimer = slowMade(function(){

									close()

								}, searchBlurTimer, 200)
								
							})

						},

						last : {
							get : function(){

								var result = {};

								var getresults = function(){
									
									var r = []

									var counts = {

									}

									_.each(self.sdk.activity.latest, function(c, k){

										_.each(c, function(v){
											counts[v.type] || (counts[v.type] = 0)

											if(counts[v.type] >= 7) return

											counts[v.type]++

											r.push(v)
										})
										
									})

									r = _.uniq(r, function(d){
										return d.type + d.index
									})

									r = _.sortBy(r, function(r){
										return -Number(r.date)
									})

									return r
								}

								return getresults();

							},

							tpl : function(result, clbk){
								render(result, '', clbk)
							}
						},

						events : {
							fastsearch : function(value, clbk){

								var result = {};
								var counts = {}

								var composeresult = function(type, results, count){

									result[type] = _.map(results, function(r){

										var vi = {
											type : type,
											data : r
										}

										if(type == 'user'){
											vi.id = r.address,
											vi.index = r.name
										}

										return vi
									})

									counts[type] = count
								}

								var getresults = function(){
									var mp = ['user', 'tag']
									var r = []

									_.each(mp, function(k){
										r = r.concat(result[k] || [])
									})

									return r
								}

								//authorForSearch

								self.app.platform.sdk.search.get(value, 'users', null, null, null, function(r){
									composeresult('user', r.data, r.count)

									render(getresults(), value, clbk, {
										counts : counts
									})
								})

								

							},

							search : function(value, clbk, e, helpers){

								var href = '';

								if (value.indexOf('#') > -1){

									var wordsRegExp = /[,.!?;:() \n\r]/g

									var words = _.uniq(_.filter(value.replace(/#/g, '').split(wordsRegExp), function(r){
										return r
									}));

									href = 'index?sst=' + words.join(' ')
								}
								else{
									href = 'index?ss=' + value
								}

								var p = {
									href : href,
									history : true,
									open : true
								}

								if (authorForSearch) p.handler = true

								self.nav.api.go(p)

								helpers.closeResults()

								clearex()

								if (clbk)
									clbk(true)
								
							},

							clear : function(fs){

								if(fs) return

								_el.find('input').blur();
								
								setTimeout(function(){
									close(true)
									clearex()
								}, 100)

								if(parameters().sst || parameters().ss){
									self.nav.api.go({
										href : 'index',
										history : true,
										open : true
									})
								}
								
							},

							blank : function(){
								events.search.click()
							}
						}
						
					})

					
				}
			},
			newaccount: {
				
				click : function(){
					self.app.mobile.vibration.small()
					self.nav.api.go({
						href : 'registration',
						history : true,
						open : true
					})	
				}

			},

			state : {
				init : function(el){
					
					var action = function(){
						if(!_.isEmpty(self.app.errors.state)){
							el.removeClass('hidden')
						}

						else{
							el.addClass('hidden')	
						}
					}

					action()

					self.app.errors.clbks.menu = function(){
						action()
					}

					if(!isMobile())
						el.tooltipster({
							theme: 'tooltipster-light',
							maxWidth : 300,
							zIndex : 200,
						});
				}
			},

			/*ustate : {
				click : function(){

					if(isMobile())
						self.nav.api.go({
							href : 'userpage?id=ustate&report=ustate',
							history : true,
							open : true
						})
					
				},

				init : function(el){

					if(!isMobile())

						self.nav.api.load({
							open : true,
							id : 'ustate',
							el : el,
							inTooltip : true
						})

					var act = function(){
						self.app.platform.sdk.user.waitActions(function(r){
							self.app.platform.sdk.ustate.attention(1, function(error){

								if(isMobile()) return

								if(error || !self.app.user.validate() || r){
									el.removeClass('hidden')
								}
								else
								{
									el.addClass('hidden')
								}

								self.app.platform.sdk.ustate.me(function(_mestate){
									if(_mestate){										

										if (self.app.user.validate() && r){
											el.addClass('wait')
										}
										else
										{
											el.removeClass('wait')
										}
									}
									else
									{
										

									}
								})
								
							})
						})
					}

					act()

					self.app.platform.sdk.ustate.clbks.menu = act;
					self.app.platform.ws.messages.transaction.clbks.menu = act;


					if(self.app.platform.online){
						el.removeClass('disconected')
					}
					else{
						el.addClass('disconected')
					}

					self.app.platform.clbks.online.menu = function(online){


						if(online){
							el.removeClass('disconected')
						}
						else{
							el.addClass('disconected')
						}
					}
					
				}
			},*/
			changeaccount : {
				click : function(){
					self.nav.api.go({
						open : true,
						href : 'accounts',
						inWnd : true,

						essenseData : {
							href : deep(self, 'app.nav.current.href') || 'index'
						}
					})
					
				}
			},
			wallets : {
				click : function(){

					
					self.nav.api.go({
						open : true,
						href : 'userpage?id=wallet',
						history : true
					})
					
				},

				init : function(el){

					var al = el.find('.number');
					var first = true;
					var current = 0;

					var set = function(value, add){

						var c = 'good';

						el.removeClass('hidden')

						//if(add < 0) c = 'bad'

						if(add == 0){
							al.text(self.app.platform.mp.coin(value))

							actions.elswidth()
						}
						else
						{
							al.animateNumber({
						    	number: add,

						    	numberStep: function(now, tween) {

						    		//actions.elswidth()

						    		//el.addClass(c)

						        	var number = Number(value + now).toFixed(8),
						            	target = $(tween.elem);

						           
						    		target.text(self.app.platform.mp.coin(number));

						    	},

						    }, rand(400, 1200), function(){

						    	el.removeClass(c)
								actions.elswidth()
						    });
						}
					
						
					}

					var setValue = function(){						

						self.app.platform.sdk.node.transactions.get.allBalance(function(amount){

							var t = self.app.platform.sdk.node.transactions.tempBalance()

							amount = amount + t

							var add = amount - current;

							if (first) {
								add = 0;
								current = amount
							}

							first = false;

							set(current, add)

							current = amount;

							self.app.platform.sdk.wallet.drawSpendLine(el.find('.numberWrp'))
						})

					}

					var setNewBalance = function(){
						self.app.platform.sdk.node.transactions.get.allBalance(function(amount){


							var t = self.app.platform.sdk.node.transactions.tempBalance()


							setValue(amount - current + t)	
							
						})
					}

					var act = function(){

						setValue()
						
					}

					self.app.platform.sdk.node.transactions.clbks.menu = act;

					act(0)
					
				}
			},
			signout : {
				click : function(){
					self.app.user.signout();

					self.app.reload({
						href : 'authorization'
					});
				}
			},
			signin : {
				init : function(element){

				},
				click : function(){
					self.app.mobile.vibration.small()
					self.nav.api.go({
						href : 'authorization',
						history : true,
						open : true
					})	
				}
			},

			signup : {
				init : function(element){

				},
				click : function(){
					self.app.mobile.vibration.small()
					self.nav.api.go({
						href : 'registration',
						history : true,
						open : true
					})	
				}
			},

		
		}

		var initEvents = function(){

			self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.menu2 = function(count){
				actions.ahnotify(null, count, 'chat')
			}

			el.c.find('.localization').on('click', function(){
				self.app.mobile.vibration.small()
				var items = []

				_.each(self.app.localization.available, function(a){
					items.push({
						text : a.name,
						action : function (clbk) {

							var na = app.localization.findByName(a.name);


							if (na && na.key != self.app.localization.key){
								self.app.mobile.vibration.small()
								self.app.localization.set(na.key);
							}

							clbk()

						}
					})
				})

				menuDialog({

                    items: items
				})
				
			})

			if (self.app.platform.sdk.newmaterials.clbks)
				self.app.platform.sdk.newmaterials.clbks.update.menu = updateNew

			el.c.find('[events]').each(function(){

				var element = $(this);

				var ekey = element.attr('events');

				if (events[ekey]){

					events[ekey].el = element

					_.each(events[ekey], function(action, event){

						if(typeof action == 'function'){
							if (event == 'init')
							{
								action(element)
							}
							else
							{

								if(event == 'click' && events[ekey].fast){
									element.on(clickAction(), action)
								}
								else{
									element.on(event, action)
								}

								
							}
						}

					})

				}

			})

			self.app.events.resize.menu = actions.elswidth


			ParametersLive([loc], el.c);




			////

			if(typeof _Electron != 'undefined'){
				var electron = require('electron');
				var remote = electron.remote; 

				var full = function(){
					var window = remote.getCurrentWindow();

					if (window.isFullScreen()){
						el.c.addClass('fullscreen')
					}
					else{
						el.c.removeClass('fullscreen')
					}
				}
				 
				el.c.find('.closeApp').on('click', function(){
					var window = remote.getCurrentWindow();
					window.close(); 
				})

				el.c.find('.miniizeApp').on('click', function(){
					var window = remote.getCurrentWindow();
					window.minimize(); 
				})

				el.c.find('.toggleMinMax').on('click', function(){
					var window = remote.getCurrentWindow();
					window.setFullScreen(!window.isFullScreen());

					full()
				})

				full()
			}

			
		}

		var renders = {
			results : function(results, value, clbk, p){

				if(!p) p = {}

				self.shell({
					name :  'results',
					data : {
						results : results,
						value : value,
						counts : p.counts || {}
					},

				}, function(_p){

					if (clbk)
						clbk(_p.rendered);
				})
			}
		}

		var make = function(){

			self.app.user.isState(function(state){

				if((parameters().ss || parameters().sst) && (isMobile() || self.app.nav.get.pathname() == 's')){

					el.c.addClass('searchactive')

					el.c.find('.postssearch').addClass('active')					

					actions.elswidth()

					el.postssearch.find('input').val(parameters().ss.replace('tag:', "#"));

				}
				
			})

		}

		var initauthorsearch = function(author){
			if (menusearch)
				menusearch.placeholder(self.app.localization.e('e13140') + " " + author.data.name.toUpperCase())

			authorForSearch = author
		} 

		var destroyauthorsearch = function(){
			if (menusearch)
				menusearch.placeholder(self.app.localization.e('e13139'))

			authorForSearch = null
		}

		var closesearch = function(){
			if (el.c)
				el.c.removeClass('searchactive')
				
			if (el.postssearch)
				el.postssearch.find('.search').removeClass('fastSearchShow')
		}

		return {

			getdata : function(clbk, p){

				var data = {};

					loc.value = app.localization.current().name;

					data.loc = loc;
					data._SEO = _SEO;
					data.lkey = app.localization.current()
					data.theme = self.app.platform.sdk.theme.current


					var userinfo = deep(app, 'platform.sdk.user.storage.me')

					data.haschat = self.app.platform.matrixchat.core// && (userinfo && !(userinfo.temp || userinfo.relay || userinfo.fromstorage))

				if(p.state){

					var addr = self.sdk.address.pnet().address

					if (self.app.platform.sdk.registrations.showprivate()){
						data.key = true
					}

					self.app.platform.sdk.users.getone(addr, function(){
				
						clbk(data)

					})
					

				}
				else
				{
					clbk(data);
				}

				

			},

			destroy : function(){

				destroyauthorsearch()
				actions.ahnotifyclear()
				menusearch = null


				delete self.app.events.resize.menu

				delete self.app.platform.sdk.newmaterials.clbks.update.menu

				delete self.app.platform.sdk.node.transactions.clbks.menu
				delete self.app.platform.ws.messages.event.clbks.menusave

				delete self.app.platform.sdk.notifications.clbks.seen.menu
				delete self.app.platform.sdk.notifications.clbks.added.menu

				delete self.app.platform.sdk.messenger.clbks.menu
				delete self.app.errors.clbks.menu

				delete self.app.platform.sdk.registrations.clbks.menu


				delete self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.menu
				delete self.app.platform.matrixchat.clbks.ALL_NOTIFICATIONS_COUNT.menu2

				_.each(events, function(e){

					delete e.el

					if (e.destroy)
						e.destroy()
				})

				el = {};
			},

			closesearch : function(){

				closesearch()
					
			},

			showsearch : function(v, _searchBackAction){


				if(v){
					el.c.addClass('searchactive')
					el.postssearch.find('.search').addClass('searchFilled')
				}
				else{
					el.postssearch.find('.search').removeClass('searchFilled')
				}
				
				el.postssearch.find('input').val(v.replace('tag:', "#"));

				searchBackAction = _searchBackAction || null

				actions.elswidth()

				setTimeout(function(){
					actions.elswidth()
				}, 2)

				
			},

			initauthorsearch : function(author){

				if (!author.data){
					return
				}

				initauthorsearch(author)
				
			},

			destroyauthorsearch : function(){
				destroyauthorsearch()
			},
			
			init : function(p){

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.a = p.el.find('.additionalbar');
				el.cart = el.c.find('.cart');
				el.likes = el.c.find('.favorites');

				el.messagesCount = el.c.find('.dialogs .count');
				el.notificationsCount = el.c.find('.notifications .count');

				el.walletsAmount = el.c.find('.wallets .amount');
				el.notactive = el.c.find('.notactive');
				el.currency = el.c.find('.currencyWrapper');
				el.postssearch =  el.c.find('.postssearch')
				el.nav = el.c.find('.menutoppanel')

				actions.ahnotifyclear()

				initEvents();

				make();


				p.clbk(null, p);
			}
		}
	};


	self.run = function(p){

		var essense = self.addEssense(essenses, Essense, p);

		self.init(essense, p);

	};

	self.stop = function(){

		_.each(essenses, function(essense){

			essense.destroy();

		})

	}

	self.initauthorsearch = function(author){
		_.each(essenses, function(essense){

			essense.initauthorsearch(author);

		})
	}

	self.destroyauthorsearch = function(){
		_.each(essenses, function(essense){

			essense.destroyauthorsearch();

		})
	}

	self.closesearch = function(){
		_.each(essenses, function(essense){

			essense.closesearch();

		})
	}

	self.showsearch = function(v){
		_.each(essenses, function(essense){

			essense.showsearch(v);

		})
	}

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = menu;
}
else{

	app.modules.menu = {};
	app.modules.menu.module = menu;

}