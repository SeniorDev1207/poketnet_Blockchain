var author = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');
		var author, _state;
		var el;
		var upbutton;

		var panel = null, uptimer = null, contentsready = false, fixedBlock = null;

		var actions = {
			subscribeLabel : function(){

				var user = self.app.user

				var my = (user.address.value && author.address == user.address.value)
				var subscribed = false;


				if(!my && user.address.value){

					var me = deep(self.app, 'platform.sdk.users.storage.' + user.address.value)

					if (me && me.relation(author.address, 'subscribes')){
						subscribed = true
					}
				}

				if(el.c){

					var _el = el.caption.find('.subscribebuttonstop')

					if(subscribed){
						_el.addClass("following")
					}
					else{
						_el.removeClass("following")
					}

				}
				

			},
			showmoreabout : function(){

				var a = filterXSS(clearScripts((findAndReplaceLink(deep(author, 'data.about'), true))))

				el.c.find('.aboutwrapper').html(a)
				el.c.find('.showmoreabout').remove()
			},
			
			destroy : function(){
				_.each(reports, function(r){
					r.active = false;

					if (r.module)
						r.module.destroy()
				})
			},
		}

		var events = {
		

			unsubscribe : function(){

				self.app.mobile.vibration.small()

				dialog({
					html : self.app.localization.e('e13022'),
					btn1text :  self.app.localization.e('unfollow'),
					btn2text : self.app.localization.e('ucancel') ,

					class : 'zindex',

					success : function(){

						self.app.platform.api.actions.unsubscribe(author.address, function(tx, err){

							if(tx){
								
							}
							else
							{
								self.app.platform.errorHandler(err, true)	
							}
		
						})

					}
				})

				
			},

			subscribe : function(){
				self.app.mobile.vibration.small()

				self.app.platform.api.actions.subscribeWithDialog(author.address, function(tx, err){

					if(tx){
					}
					else
					{
						self.app.platform.errorHandler(err, true)
					}

				})
			},

			startchat: function(){
				self.app.mobile.vibration.small()

				self.app.platform.matrixchat.startchat(author.address)

				
			},

			subscribePrivate : function(){

				self.app.mobile.vibration.small()

				var off = $(this).hasClass('turnon')

				var f = 'notificationsTurnOn'

				if(off){

					f = 'notificationsTurnOff'
					
				}

				self.app.platform.api.actions[f](author.address, function(tx, err){

					if(tx){
					}
					else
					{
						self.app.platform.errorHandler(err, true)
					}

				})
			},

		}

		var reports = {}
		
		var initreports = function(){

			var state = self.app.user.getstate()


				reports = {
					shares : {
						name : self.app.localization.e('uposts').toUpperCase(),
						mobile : '<i class="fas fa-align-justify"></i>',
						id : 'shares',
						render : 'lenta',
						history : true,
						if : function(){
							return !self.app.curation() || self.user.isItMe(author.address)
						},
						count : function(){
							return 0
						}
					},
		
					post : {
						if : function(){
							return false
						},
						id : 'post',
						render : 'post',
						count : function(){
							return 0
						}
					},
		
					followers : {
						name : self.app.localization.e('followers').toUpperCase(),
						mobile : '<i class="fas fa-users"></i>',
						id : 'followers',
						render : 'followers',
						history : true,
						count : function(){
		
							var u = _.map(deep(author, 'data.subscribers') || [], function(a){
								return a
							})
			
							var blocked = deep(author, 'data.blocking') || []
			
							u = _.filter(u, function(a){
								return _.indexOf(blocked, a) == -1
							})
							
							return u.length
						
						}
					},
		
					contents : {
						name : self.app.localization.e('followers').toUpperCase(),
						mobile : '<i class="fas fa-users"></i>',
						id : 'contents',
						render : 'contents',
						history : true,
						if : function(){
							return false
						}
						
					},
		
					following : {
						name : self.app.localization.e('following').toUpperCase(),
						id : 'following',
						mobile : '<i class="fas fa-user-plus"></i>',
						render : 'following',
						history : true,
						count : function(){
		
							var u = _.map(deep(author, 'data.subscribes') || [], function(a){
								return a.adddress
							})
			
							var blocked = deep(author, 'data.blocking') || []
			
							u = _.filter(u, function(a){
								return _.indexOf(blocked, a) == -1
							})
		
							return u.length
						}
					},
		
					blocking : {
						name : self.app.localization.e('blockedusers').toUpperCase(),
						id : 'blocking',
						mobile : '<i class="fas fa-user-slash"></i>',
						render : 'blocking',
						history : true,
						if : function(){
							if(self.user.isItMe(author.address)) return true
						},
						count : function(){
		
							var blocked = deep(author, 'data.blocking') || []
		
							return blocked.length
						}
					},
		
					
		
					share : {
						name : self.app.localization.e('share').toUpperCase() + ' <i class="fas fa-share-alt"></i>',
						mobile : '<i class="fas fa-share-alt"></i>',
						id : 'share',
						if : function(){
							return true
						},
						events : {
							click : function(){
		
								self.nav.api.load({
									open : true,
									href : 'socialshare2',
									history : true,
									inWnd : true,
									uid : "authorshare",
									essenseData : {
										caption : "Share this author",
										sharing : author.data.social(self.app),
										embedding : {
											type : 'channel',
											id : author.address
										},

										url : 'https://'+self.app.options.url+'/' + self.app.platform.api.authorlink(author.address, true)
									}
								})
								
							}
						}
					},

					signin : {
						name : self.app.localization.e('signinmenu').toUpperCase() + ' <i class="fas fa-sign-in-alt"></i>',
						mobile : '<i class="fas fa-sign-in-alt"></i>',
						id : 'signin',
						if : function(){
							return isMobile() && !state
						},
						events : {
							click : function(){
		
								self.nav.api.load({
									open : true,
									href : 'authorization',
									history : true
								})
								
							}
						}
					},
		
					settings : {
						name : self.app.localization.e('settings').toUpperCase() + ' <i class="fas fa-cog"></i>',
						mobile : '<i class="fas fa-cog"></i>',
						id : 'settings',
						href : function(){
		
							if(!self.app.user.validate()){
								return 'userpage'
							}
							else{
								return 'userpage?id=ustate'
							}
		
							
						}, 
						class : 'tosettings',
		
						if : function(){
							if(self.user.isItMe(author.address) && !isTablet()) return true
						}
					},
		
					more : {
						name : '<i class="fas fa-ellipsis-h"></i>',
						mobile : '<i class="fas fa-ellipsis-h"></i>',
						id : 'more',
						class : 'more',
		
						if : function(){
							if(!self.user.isItMe(author.address) && _state) return true
						},
		
						events : {
							click : function(){
								renders.metmenu($(this))
							}
						}
					},
		
		
					info : {
						name : self.app.localization.e('info') +  ' <i class="fas fa-info-circle"></i>',
						mobile : '<i class="fas fa-info-circle"></i>',
						id : 'info',
						class : 'info',
						render : 'info',
						history : true,
						if : function(){
							return false
							if(isTablet()) return true
						}
					},
					
				}

		}
		
		

		var renders = {
			contents : function(_el, report){

				self.app.platform.sdk.contents.get(author.address, function(contents){

					var selected = parameters().mt

					var pp = {
						name :  'contents',
						el :   _el,
						data : {
							contents : contents,
							author : author,
							selected : selected
						},
					}

					self.shell(pp, function(p){})

				})
			},
			
			metmenu : function(_el){

				var d = {};

				self.fastTemplate('metmenu', function(rendered, template){

					self.app.platform.api.tooltip(_el, function(){
						d.author = author
					
						return template(d);

					}, function(el){

						el.find('.donate').on('click', function(){
							self.app.mobile.vibration.small()
							actions.donate(id)

							if (_el.tooltipster)
								_el.tooltipster('hide')	

						})

						el.find('.block').on('click', function(){
							self.app.mobile.vibration.small()
							self.app.platform.api.actions.blocking(author.address, function(tx, error){
								if(!tx){
									self.app.platform.errorHandler(error, true)	
								}
							})

							if (_el.tooltipster)
								_el.tooltipster('hide')	

						})

						el.find('.startchat').on('click', function(){

							events.startchat()

							if (_el.tooltipster)
								_el.tooltipster('hide')	
						})
						
						el.find('.unblock').on('click', function(){
							self.app.mobile.vibration.small()
							self.app.platform.api.actions.unblocking(author.address, function(tx, error){
								if(!tx){
									self.app.platform.errorHandler(error, true)	
								}
							})

							if (_el.tooltipster)
								_el.tooltipster('hide')	

						})

						el.find('.unsubscribe').on('click', function(){

							self.app.mobile.vibration.small()

							events.unsubscribe()

                            /*self.app.platform.api.actions.unsubscribe(author.address, function (tx, error) {
                                if (!tx) {
                                    self.errorHandler(error, true)
                                }
                            })*/

                            if (_el.tooltipster)
                                _el.tooltipster('hide')


						})
						

					})

				}, d)

			},
			

			report : function(report, cl, npsh){

				actions.destroy();

				if(!report.active && report.history){

					var rem = ['mt', 's']

					if (report.id != 'shares' || cl) rem.push('ss')

					if(!npsh)
						self.app.nav.api.history.addRemoveParameters(rem, {
							report : report.id
						})
				}

				report.active = true;

				if (renders[report.render]){
					renders[report.render](el.lenta, report)

					renders.menulight()

					/*if(!isTablet())
						self.app.platform.sdk.contents.get(author.address, function(contents){
							renders.contents(contents)	
						})*/
				}
				
			},

			menulight : function(){
				el.menu.find('.usermenuitem').removeClass('active')

				var r = _.find(reports, function(r){
					return r.active
				})

				if(r){
					el.menu.find('.usermenuitem .c' + r.class).addClass('active')
				}
			},

			menu : function(clbk){
				self.shell({

					name :  'menu',
					el :   el.menu,

					data : {
						reports : reports
					},

					//animation : 'fadeIn',

				}, function(p){

					p.el.find('.usermenuitem').swipe({
						tap : function(){
							var r = $(this).attr('menuitem');

							if (reports[r] && reports[r].render)
								renders.report(reports[r])
						}
					})

					
					_.each(reports, function(r, j){
						if(r.events){

							var el = p.el.find('[menuitem="'+j+'"]')

							_.each(r.events, function(e, i){

								if(i == 'click' && isTablet()){

									el.swipe({
										tap : e
									})

								}
								else{
									el.on(i, e)
								}

								
							})

						}
					})

					if (clbk)
						clbk();
				})
			},

			userslist : function(_el, users, empty, caption, clbk){
				self.nav.api.load({

					open : true,
					id : 'userslist',
					el : _el,
					animation : false,

					essenseData : {
						addresses : users,
						empty : empty,
						caption : caption
					},
					
					clbk : function(e, p){
						if (clbk)
							clbk(e, p)
					}

				})
			},

			info : function(_el){

				

				

					author.state = self.sdk.ustate.storage[author.address]

					self.shell({

						name :  'info',
						el :   _el,

						data : {
							author : author
						},

						animation : false,

					}, function(p){

						p.el.find('.showmoreabout').on('click', actions.showmoreabout)

						p.el.find('.copyaddress').on('click', function(){
							copyText($(this))

							sitemessage(self.app.localization.e('successcopied'))
						})

						p.el.find('.postcnt').on('click', function(){

							renders.report(reports.contents)

						})
					})

			
			},

			followers : function(_el, report){

				var u = _.map(deep(author, 'data.subscribers') || [], function(a){
					return a
				})

				var blocked = deep(author, 'data.blocking') || []

				u = _.filter(u, function(a){
					return _.indexOf(blocked, a) == -1
				})

				var e = self.app.localization.e('anofollowers');

				if(self.user.isItMe(author.address)){
					e = self.app.localization.e('aynofollowers')
				}

				renders.userslist(_el, u, e, self.app.localization.e('followers'), function(e, p){
					report.module = p;
				})
			},

			following : function(_el, report){

				var u = _.map(deep(author, 'data.subscribes') || [], function(a){
					return a.adddress
				})

				var blocked = deep(author, 'data.blocking') || []

				u = _.filter(u, function(a){
					return _.indexOf(blocked, a) == -1
				})

				var e = self.app.localization.e('anofollowing');

				if(self.user.isItMe(author.address)){
					e = self.app.localization.e('aynofollowing')
				}

				renders.userslist(_el, u, e, self.app.localization.e('following'), function(e, p){
					report.module = p;
				})
			},

			blocking : function(_el, report){

				var u = _.map(deep(author, 'data.blocking') || [], function(a){
					return a
				})

				var e = self.app.localization.e('anoblocked');

				if(self.user.isItMe(author.address)){
					e = self.app.localization.e('aynoblocked')
				}

				renders.userslist(_el, u, e, self.app.localization.e('blockedusers'), function(e, p){
					report.module = p;
				})
			},

			post : function(_el, report){

				var id = parameters().mt

				//self.app.platform.sdk.contents.get(author.address, function(contents){

					var _contents = self.app.platform.sdk.contents.getsorteditems(contents)

					var txids = _.map(_contents, function(c){
						return c.txid
					});

					var currentindex = _.indexOf(txids, id);

					var d = {
						currentindex : currentindex + 1,
						allength : txids.length,
						leftid : null,
						rightid : null
					}

					if(currentindex > 0) d.leftid = txids[currentindex - 1]
					if(currentindex < txids.length - 1) d.rightid = txids[currentindex + 1]

					self.shell({

						name :  'post',
						el :   _el,
	
						data : d
	
					}, function(p){

						var hr = 'author?address=' + author.address

						var n =  app.platform.api.name(author.address)
		
						if (n) hr = n.toLowerCase() + "?"
		
						self.app.platform.papi.post(id, p.el.find('.postcnt'), function(e, _p){					
							external = _p
							
							if (contentsready)
								el.c.find('.contentswrapper').hcSticky('refresh');

							p.el.find('.postauarrows').addClass('active')

						}, {
							hr : hr
						})
	
					})
				//})

				

				

			},




			lenta : function(_el, report){

				if(self.app.curation() && !self.user.isItMe(author.address)){


					return
				}

				var load = function(){			
					
					var pp = {

						name :  'lenta',
						el :   _el,
	
						data : {
						},
	
					}
	
					self.shell(pp, function(p){
						
						
	
						self.nav.api.load({
	
							open : true,
							id : 'lenta',
							el : _el.find('.authorlentawrapper'),
							animation : false,
		
							mid : author.address,
		
							essenseData : params,
							
							clbk : function(e, p){
							
								report.module = p;
	
								if (contentsready)
									el.c.find('.contentswrapper').hcSticky('refresh');
							}
		
						})

						if(author.data && author.data.name){
							var c = p.el.find('.authorlentawrappermain');

							p.el.find('.authorsearchicon .icon').on('click', function(){

								c.toggleClass('searchactive')

								if (c.hasClass('searchactive')){
									c.find('.search input').focus()
								}
								else
								{
									c.find('.search input').val('')
									clearsearch()
								}
							})

							new search(p.el.find('.authorsearch'), {
								placeholder : 'Search on ' + author.data.name,
		
								clbk : function(_el){
									
		
								},
		
								last : {
									get : function(){
		
										return [];
		
									},
		
									tpl : function(result, clbk){
										
									}
								},
		
								events : {							
		
									search : function(value, clbk, e, helpers){
		
										var href = '?report=shares&ssa=' + value.replace("#", 'tag:')
		
										clearsearch(true)
		
										var p = {
											href : href,
											history : true,
											open : true,
											handler : true
										}	
		
										self.nav.api.go(p)
		
										if (clbk)
											clbk(true)
										
									},
		
									clear : function(fs){
										
										clearsearch()
									}
								}
								
							})


							if (parameters().ssa){
								c.addClass('searchactive')
								c.find('.search input').val(parameters().ssa)
							}

							if(isTablet()){
								c.addClass('searchactive')
							}
						}

						
	
					})
	
					
				}

				var hr = 'author?address=' + author.address

				var n =  app.platform.api.name(author.address)

				if (n) hr = n.toLowerCase() + "?"

				var params = {
					author : author.address,
					byauthor : true,
					hr : hr,
					
					renderclbk : function(){
						if (contentsready)
							el.c.find('.contentswrapper').hcSticky('refresh');

					}
				}
				

				if (parameters().r == 'b'){

					hr = n.toLowerCase() + "?r=b&mt=" + parameters().mt
					params.beginmaterial = parameters().mt
					params.contents = true	

					self.app.platform.sdk.contents.get(author.address, function(contents){

						var _contents = self.app.platform.sdk.contents.getsorteditems(contents)

						params.txids = _.map(_contents, function(c){
							return c.txid
						});

						load()
					})

				}
				else{

					if (parameters().ssa){
						params.search = true
						params.searchValue = parameters().ssa
						params.loader = function(clbk){

							var _clbk = function(data){
								var shares = self.app.platform.sdk.node.shares.transform(data) 

								if (clbk)
									clbk(shares, null, {
										count : 10
									})
							}

							
							makenext('posts', deep(result, 'data.length') || 0, 10, function(data){
								_clbk(data)
							})
							
						}
					}

					load()

				}


				
			}
		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var result = null;

		var clearsearch = function(light){
			if (parameters().ssa){

				self.app.platform.sdk.search.clear()

				result = null
				fixedBlock = null

				if(!light){
					self.app.nav.api.history.removeParameters(['ssa'])
					renders.report(reports.shares, true)
				}
			}
		}

		var makenext = function(type, start, count, clbk){

			var l = 0;
			var L = 10;

			if (result){
				l = result.data.length;
				L = result.count;
			}

			if(start + count <= l){
				return
			}

			if (start < l){
				var d = l - start;

				start = l;
				count = count - d;
			}
			
			if(start + count > L) count = L - start

			if(count <= 0) return

			load[type](function(data){

				if(clbk)
				{
					clbk(data)
				}

			}, start, count)	

		}

		var load = {

			posts : function(clbk, start, count){
				self.app.platform.sdk.search.get(parameters().ssa, 'posts', start, count, fixedBlock || null, function(r, block){


					fixedBlock = block

					
					result || (result = r);

					clbk(result.data);

				}, author.address)
			},
		}

		var initEvents = function(){


			var src = deep(author, 'data.image')
			console.log('src', src);

			if (!src){


				el.usericon.addClass('active')

				self.app.platform.api.plissing({
					el : el.usericon,
				})
	
				el.usericon.on('click', function(){
					self.app.nav.api.load({
						open: true,
						href: 'userpage?id=test',
						history: true
					})
				})
	

			}


			el.up.on('click', events.up)

			el.subscribe.find('.subscribe').on('click', events.subscribe)
			el.subscribe.find('.unsubscribe').on('click', events.unsubscribe)
			el.c.find('.notificationturn').on('click', events.subscribePrivate)

			el.c.find('.changeaccount').on('click', function(){
				self.nav.api.go({
					open : true,
					href : 'accounts',
					inWnd : true,

					essenseData : {
						toaccpage : true
					}
				})
			})

			el.caption.find('.startchat').on('click', events.startchat)

			el.caption.find('.unblocking').on('click', function(){

				dialog({
					html : self.app.localization.e('e13023'),
					btn1text : self.app.localization.e('unblock'),
					btn2text : self.app.localization.e('ucancel'),

					class : 'zindex',

					success : function(){

						self.app.platform.api.actions.unblocking(author.address, function(tx, error){
							if(!tx){
								self.app.platform.errorHandler(error, true)	
							}
						})

					}
				})

				
			})


			self.app.platform.ws.messages.event.clbks.author = function(data){
			
				if(data.mesType == 'subscribe' || data.mesType == 'unsubscribe'){

					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
					
				}
				
			}


			self.app.platform.clbks.api.actions.subscribe.author = function(address){

				if(address == author.address){
					el.subscribe.addClass('following')
					el.c.find('.notificationturn').removeClass('turnon')	

					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
				}

				if(self.app.user.address.value.toString('hex') == author.address){
					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
				}
			}

			self.app.platform.clbks.api.actions.subscribePrivate.author = function(address){

				if(address == author.address){
					el.subscribe.addClass('following')
					el.c.find('.notificationturn').addClass('turnon')	

					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
				}

				if(self.app.user.address.value.toString('hex') == author.address){
					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
				}
			}

			self.app.platform.clbks.api.actions.unsubscribe.author = function(address){

				if(address == author.address){

					el.subscribe.removeClass('following')
					el.c.find('.notificationturn').removeClass('turnon')	

					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())

				}

				if(self.app.user.address.value.toString('hex') == author.address){
					el.c.find('.toReport[report="followers"] .count').html(reports.followers.count())
					el.c.find('.toReport[report="following"] .count').html(reports.following.count())
				}


			}

			self.app.platform.clbks.api.actions.blocking.author = function(address){

				if(address == author.address){
					el.caption.addClass('blocking');
					el.c.find('.notificationturn').removeClass('turnon')
				}

				
			}

			self.app.platform.clbks.api.actions.unblocking.author = function(address){

				if(address == author.address){
					el.caption.removeClass('blocking');
				}

			}

		}

		var make = function(ini){

			var r = parameters().report || 'shares'

				reports[r].active = true;

			if (isTablet()){
				renders.info(el.c.find('.mobileinfo'))
			}

			renders.report(reports[r], null, ini)
			renders.menu()

			self.app.user.isState(function(state){

				if(state){
					var me = self.app.platform.sdk.users.storage[self.app.platform.sdk.address.pnet().address];

					if (me && me.relation(author.address, 'blocking')){
						el.caption.addClass('blocking');
					}
				}
				
				

			})
			
			if(!isMobile())
				upbutton = self.app.platform.api.upbutton(el.up, {
					top : function(){

						return '65px'
					},
					class : 'light',
					rightEl : el.c.find('.leftpanelcell')
				})	


			/*self.app.platform.sdk.contents.get(author.address, function(contents){
				renders.contents(contents)	
			})*/
			

			if(!isTablet())
				renders.info(el.info)
		}

		return {
			primary : primary,

			parametersHandler : function(){
				var r = parameters().report || 'shares'

				renders.report(reports[r], null, true)
				renders.menu()

				
			},

			authclbk : function(){
				

				var active = _.find(reports, function(r){
					return r.active
				})

				if(active && active.id != 'shares'){
					renders.report(active, null, true)
				}

				actions.subscribeLabel()
			},

			getdata : function(clbk, settings){

				author = {};

				self.app.platform.sdk.search.clear()

				var ed = settings.settings.essenseData || {}

				var p = parameters();

				_state = settings.state

				p.address || (p.address = ed.address)

				contentsready = false

				fixedBlock = null

				result = null

				initreports()

				self.loadTemplate({
					name : 'info'
				}, function(){

					self.sdk.users.addressByName(p.address, function(address){

						

						if (address){
							author.address = address

							self.sdk.ustate.get(author.address, function(){
								self.sdk.users.get(author.address, function(){

									if(!self.app.platform.sdk.address.pnet() || author.address != self.app.platform.sdk.address.pnet().address){
										reports.shares.name = self.app.localization.e('uposts')

										/*if(self.app.curation()){
											self.nav.api.load({
												open : true,
												href : 'userpage',
												history : true
											})
						
											return
										}*/
									}
									else
									{
										reports.shares.name = self.app.localization.e('myuposts')


										if(!self.app.user.validate()){

											self.nav.api.go({
												href : 'userpage?id=test',
												history : true,
												open : true
											})

											return;
										}
									
									}

									author.data = self.sdk.users.storage[author.address]
									//author.state = self.sdk.ustate.storage[author.address]

									var data = {
										author : author
									};

									clbk(data);

								})
							})
						}

						else
						{
							
						}

						
					})

				})
				

			},

			destroy : function(){

				if (upbutton)
					upbutton.destroy()

					upbutton = null

				if (panel)
					panel.destroy();



				delete self.app.platform.ws.messages.event.clbks.author
				delete self.app.platform.clbks.api.actions.subscribe.author
				delete self.app.platform.clbks.api.actions.unsubscribe.author
				delete self.app.platform.clbks.api.actions.subscribePrivate.author

				actions.destroy();

				/*var c = deep(self, 'app.modules.menu.module.destroyauthorsearch')

				if (c && isTablet()){
					c()
				}*/
				
				el = {};
			},
			
			init : function(p){

				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.lenta = el.c.find('.lentaWrapper');
				el.menu = el.c.find('.usermenu')
				el.panel = el.c.find('.panel')
				el.caption = el.c.find('.bgCaption')
				el.fxd = el.c.find('.fxd')
				el.subscribe = el.c.find('.subscribebuttonstop');
				el.up = el.c.find('.upbuttonwrapper');
				el.w = $(window);
				el.usericon = el.c.find('.usericon');

				el.contents = el.c.find('.contentswrapper')

				el.info = el.c.find('.authorinfoWrapper')

				make(true);
				initEvents();

				self.sdk.activity.adduser('visited', author.address)

				if(self.user.isItMe(author.address)){
					self.app.nav.api.backChainClear()
				}

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

	self.authclbk = function(){
		_.each(essenses, function(e){
			e.authclbk()
		})
	} 

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = author;
}
else{

	app.modules.author = {};
	app.modules.author.module = author;

}