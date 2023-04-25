var test = (function(){

	var self = new nModule();

	var mdl = self;

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var el, lastTransaction, ed, ref, plissing; 

		var firstTime = false;

		var tempInfo = {
			language : /*self.app.localization.key ||*/ 'en'
		}

		var changedLoc = false;

		var actions = {		

			valid : function(v1, v2){
				if(!actions.equal((v1), (v2))){

					if(trim(v1.name) && v1.image) return true

				}
			},

			equal : function(v1, v2){

				var a = function(o){
					return 'name:' + (trim(o.name) || "") + 'image:' + (o.image || "") + 'about:' + (trim(o.about) || "") + 'site:' + (trim(o.site) || "")  + 'language:' + (o.language || "") + "addresses:" + JSON.stringify(o.addresses || [])
				}

				return a(v1) == a(v2)
			},
			cancel : function(){
				actions.userOptions()

				actions.upanel();

				renders.icon();

				renders.options();
			},
			save : function(clbk){

				self.sdk.users.checkFreeRef(self.app.platform.sdk.address.pnet().address, function(resref, err){				

					if(el.c.find('.userPanel').hasClass('loading')){
						return
					}

					if(actions.equal(tempInfo, self.app.platform.sdk.user.storage.me)){
						sitemessage(self.app.localization.e('uchanges'))

						return
					}

					if(!actions.valid(tempInfo, self.app.platform.sdk.user.storage.me)){
						sitemessage(self.app.localization.e('uchangesvalid'))

						if(!trim(tempInfo.name)){	
							var pn = el.c.find('[parameter="name"] input')

							pn.focus()

							_scrollTo(pn)
						}
						else{
							if(!tempInfo.image){	
								var pn = el.c.find('.fileUploader')

								_scrollTo(pn)
							}	

						}

							

						return
					}

					var userInfo = new UserInfo();

						userInfo.name.set(trim(tempInfo.name));
						userInfo.language.set(tempInfo.language);
						userInfo.about.set(trim(tempInfo.about));
						userInfo.site.set(trim(tempInfo.site));
						userInfo.image.set(tempInfo.image);
						userInfo.addresses.set(tempInfo.addresses);

						userInfo.ref.set(deep(ref, 'address') || '');

					var err  = userInfo.validation()

					if (err){

						if(err == 'namelength'){
							el.c.find('.errorname').fadeIn();
							el.c.find('.errorname span').html('The name length can be more than 20 symbols');

							var pn = el.c.find('[parameter="name"] input')

								pn.focus()

								_scrollTo(pn)
						}

						return false;
					}

					topPreloader(40)

					el.c.find('.userPanel').addClass('loading')

					el.upanel.addClass('loading')

					

					
					el.c.find('.errorname').fadeOut();

					userInfo.uploadImage(function(){


						self.sdk.node.transactions.create.commonFromUnspent(

							userInfo,

							function(tx, error){

								el.upanel.removeClass('loading')

								el.c.find('.userPanel').removeClass('loading')

								topPreloader(100)

								if(!tx){

									self.app.platform.errorHandler(error, true)	
								}
								else
								{

									self.app.platform.sdk.user.storage.me = tx
									
									tempInfo = _.clone(self.app.platform.sdk.user.storage.me)
									
									actions.upanel()

									if (ref && firstTime){
										localStorage[self.app.platform.sdk.address.pnet().address + 'subscribeRef'] = ref.address										
									}

									if(ref && resref && firstTime){
										var refaddress = deep(ref, 'address');		

										self.sdk.users.requestFreeRef(refaddress, function(res, err){
											console.log(res, err)
										})
									}

									self.app.reloadModules(function(){


										if (primary){

											self.nav.api.go({
												href : 'index',
												history : true,
												open : true
											})	

										}
										else
										{

											if (ed.success){
												ed.success()
											}
											else
											{
												if (clbk)
													clbk()
											}

											

										}

										

									})

									
								}

							},

							/*{
								pseudo : true
							}*/
						
						)
					})

				})
				
		
			},
			upload	: function(file, clbk){

				topPreloader(20);

				var images = [{
					original : file.base64,
					index : 0
				}]

				self.nav.api.load({
					open : true,
					id : 'imageGalleryEdit',
					inWnd : true,

					essenseData : {
						edit : true,
						initialValue : 0,
						images : images,

						apply : true,

						crop : {
							aspectRatio : 1 / 1,
							style : 'round apply',
							autoCropArea : 0.9,
						},

						success : function(i, editclbk){

							images[0].original

							resize(images[0].original, 100, 100, function(resized){
								var r = resized.split(',');

								editclbk();

								if (r[1]){

									tempInfo.image = resized;

									renders.icon()

									actions.upanel()	
									
									if (clbk)
										clbk()

								}
								else
								{
									topPreloader(100);
								}

								
							})

						}
					}
				})


				
			},
			upanel : function(){

				if(!el.upanel) return

				if(_.toArray((self.app.platform.sdk.node.transactions.temp.userInfo || {})).length > 0){

					el.upanel.addClass('wait')

					el.c.find('.caption').remove()

				}
				else{
					el.upanel.removeClass('wait')

					if(actions.equal(tempInfo, self.app.platform.sdk.user.storage.me) || !actions.valid(tempInfo, self.app.platform.sdk.user.storage.me)){
						
						el.upanel.removeClass('changes')
					}
					else
					{
						el.upanel.addClass('changes')
					}
				}

				
				
			},

			clear : function(){
				actions.userOptions();
				renders.caption();
			},

			userOptions : function(){

				tempInfo = _.clone(self.app.platform.sdk.user.storage.me)

				_.each(userOptions, function(parameter, id){
					var value = self.app.platform.sdk.user.storage.me[parameter.id];

					if(id == 'addresses'){
						value = _.clone(self.app.platform.sdk.user.storage.me[parameter.id]);
					}
					
					parameter.value = value || parameter.defaultValue || ''
					tempInfo[parameter.id] = parameter.value

					parameter._onChange = function(value){

						if(id == 'addresses'){
							tempInfo[parameter.id] = _.clone(value);
						}
						else
						{
							tempInfo[parameter.id] = trim(value);
						}

						

						actions.upanel()

						if (id == 'language'){
							var a = self.app.localization.available[value];

							if (a && a.key != self.app.localization.key)
							{
								self.app.localization.lightSet(a.key);
							}
						}

						if (id == 'name'){
							
							if(tempInfo[parameter.id].length > 20){
								el.c.find('.errorname').fadeIn();
								el.c.find('.errorname span').html('The name length can be more than 20 symbols');	
							}
							else
							{
								el.c.find('.errorname').fadeOut();

								self.app.platform.sdk.users.nameExist(tempInfo[parameter.id], function(exist){

									if(!exist || exist == self.app.platform.sdk.address.pnet().address){
										el.c.find('.errorname').fadeOut();
									}
									else
									{
										el.c.find('.errorname').fadeIn();
										el.c.find('.errorname span').html('This name has busy in Pocketnet');									
									}
								})	
							}
						}
					}

					//if(id == 'ref'){

						//self.app.platform.api.inputs.user(parameter)

					//}
				})
			},

			signout : function(){
				self.app.user.signout();

				self.app.reload({
					href : 'authorization'
				});
			},
		}

		var userOptions = {
			name : new Parameter({
				name : 'Nickname',
				id : 'name',
				type : "NICKNAME",
				onType : true,
				require : true
			}),

			language : new Parameter({
				name : self.app.localization.e('ulanguage'),
				id : 'language',
				type : "VALUES",
				defaultValue : /*self.app.localization.key || */'en',
				possibleValues : ['en'/*, 'ru'*/],
				possibleValuesLabels : ['English'/*, 'Русский'*/],
			}),

			about : new Parameter({
				name : self.app.localization.e('uabout'),
				id : 'about',
				type : "TEXT",
				onType : true,
				
				placeholder : 'Please write a few words about yourself to help people decide if they want to follow you'
			}),

			site : new Parameter({
				name : self.app.localization.e('uwebsite'),
				id : 'site',
				type : "STRINGANY",
				onType : true,
				value : ''
			}),

			addresses : new function(){

				var _self = this;

				_self.id = 'addresses';
				_self.name = self.app.localization.e('uaddresesd')
				_self.value = [];

				_self.defaultValue = [];

				_self.remove = function(currency, address){
					removeEqual(_self.value, {
						currency : currency,
						address : address
					})

					if (_self._onChange)
						_self._onChange(_self.value)

					_self.addedAddresses();
				}

				_self.add = function(v){


					_self.value.push(v)

					if (_self._onChange)
						_self._onChange(_self.value)

					_self.addedAddresses();

				}

				_self.addDialog = function(){

					var validate = function(cur, address){

						if(address.length > 0){
							return true
						}
						else
						{
							return false
						}

						
					}

					mdl.fastTemplate('addaddress', function(rendered){

						dialog({
							html : rendered,

							wrap : true,

							success : function(d){

								var currency = d.el.find('.currency').val();
								var address = d.el.find('.address').val();

								if(validate(currency, address)){


									_self.add({
										currency : currency,
										address : address
									})

									return true;

								}
							},

							clbk : function(_el){

								var currency = _el.find('.currency');
								var address = _el.find('.address');
								var b = _el.find('.btn1');


								var vl = function(){
									var c = currency.val();
									var a = address.val();

									if(validate(c, a)){
										b.removeClass('disabled')

										return true;
									}
									else
									{
										b.addClass('disabled')
										return false;
									}
								}

								address.focus()
								address.on('change', vl)
								address.on('keyup', vl)

								currency.on('change', vl)
								currency.on('keyup', vl)

								vl()
							},

							class : "one addaddressDialog"
						})

					}, {
					})
				}

				_self.removeEvent = function(){
					var currency = $(this).closest('.addedAddress').attr('currency')
					var address = $(this).closest('.addedAddress').attr('address')

					_self.remove(currency, address)
				}

				_self.addedAddresses = function(){

					/* 1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX */

					var h = '';

					_.each(_self.value, function(v){
					
						if(!v || !v.currency) return

						h += '<div class="addedAddressWrapper">'
							h += '<div class="addedAddress table" currency="'+v.currency+'" address="'+v.address+'">'

							h += 	'<div class="currencyWrapper">'	
							h += 		v.currency.toUpperCase()
							h += 	'</div>'

							h += 	'<div class="addressWrapper">'	
							h += 		v.address
							h += 	'</div>'

							h += 	'<div class="panelWrapper">'	
							h += 		'<div class="item remove">'	
							h += 			'<i class="far fa-times-circle"></i>'	
							h += 		'</div>'
							h += 	'</div>'

							h += '</div>'
						h += '</div>'
					})
					
					_self.el.find('.addedAddressesWrapper').html(h)

					_self.el.find('.addedAddressesWrapper .remove').on('click', _self.removeEvent)
				}



				_self.init = function(_el){

					_self.defaultValue = [];

					_self.el = _el.find('.adressesInput')

					_self.addedAddresses();

					_self.el.find('.addaddress').on('click', _self.addDialog)
				}	

				_self.input = function(){
					var h = ''

					h += '<div class="adressesInput">'
					h += 	'<div class="addaddressWrapper">'
					h += 		'<div class="addaddress">'
					h += 			'<i class="fas fa-plus"></i>'
					h += 		'</div>'
					h += 	'</div>'
					h += 	'<div class="addedAddressesWrapper">'
					h += 	'</div>'
					h += '</div>'

					return h;
				}

				return _self
			},

			/*ref : new Parameter({
				name : "Referal",
				id : 'ref',
				type : "BOOLEAN",
				onType : true,
				value : ''
			}),*/
			
		}

		var privateInformation = {
			/*sex : new Parameter({
				name : "Sex",
				id : 'sex',
				type : "VALUES",
				defaultValue : 'notspecified',
				possibleValues : ['men', 'woman', 'notspecified'],
				possibleValuesLabels : ['Not Specified', 'Man', 'Woman'],
			})*/
		}

		var events = {
			signout : function(){
				actions.signout()
			},
			save : function(){
				actions.save()
			},
			cancel : function(){
				actions.cancel()
			},
			importAddress : function(){

				var address = self.app.platform.sdk.address.pnet()
				
				topPreloader(30);

				self.app.platform.sdk.node.account.import(address.address, function(){

					topPreloader(100);

					sitemessage("Address " + address.address + " was successfully imported")

				})
			}
		}

		var setNode = null;
		var setAddressType = null;

		var renders = {
			options : function(clbk){

				self.shell({

					name :  'options',
					el :   el.options,
					data : {
						tempInfo : tempInfo,
						userOptions : userOptions
					},

				}, function(_p){

					ParametersLive(_.toArray(userOptions), _p.el)

					userOptions.addresses.init(_p.el)

					if (clbk)
						clbk();

				})
			},
			icon : function(clbk){
				self.shell({

					name :  'icon',
					el :   el.icon,
					data : {
						tempInfo : tempInfo,
						ed : ed
					},

				}, function(_p){


					initUpload({
						el : _p.el.find('.pgroup'),
			
						ext : ['png', 'jpeg', 'jpg'],

						dropZone : el.c,

						multiple : false,

						action : function(file, clbk){

							actions.upload(file, function(){		
								if (plissing)
									plissing.destroy()

								console.log("el.c.find('.nickname input')", el.c.find('.nickname input'))
									_scrollTo(el.c.find('.nickname input').focus());
								

								if (clbk)
									clbk();

							})
							
						}
					})

					if (ed.wizard && !tempInfo.image)

						plissing = self.app.platform.api.plissing({
							el : _p.el.find('.iconWrapper'),
							text : "Upload image"
						})

					if (clbk)
						clbk();

				})
			},
			unspent : function(unspent, clbk){
				self.shell({

					name :  'unspent',
					el :   el.unspent,
					data : {
						unspent : unspent
					},

				}, function(_p){

					if (clbk)
						clbk();

				})
			},

			caption : function(unspent, clbk){

				return

				self.shell({

					name :  'caption',
					el :   el.caption,
					data : {
						p2pkh : self.app.platform.sdk.address.pnet(),
						tempInfo : tempInfo
					},

				}, function(_p){					

					if (clbk)
						clbk();

				})
			},

			address : function(){
				el.c.find('.adr').html(bitcoin.payments[self.app.platform.addressType]({ pubkey: self.app.user.key.value}))
			}
			
		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var initEvents = function(){
			el.import.on('click', events.importAddress)
			el.showhidetestpanel.on('click', function(){
				$(this).closest('.testPanel').toggleClass('active')
			})

			el.upanel.find('.cancel').on('click', events.cancel)
			el.upanel.find('.save').on('click', events.save)

			ParametersLive([setNode, setAddressType], el.c)			

			el.signout.on('click', events.signout)

			el.c.find('.refRemove').on('click', function(){
				ref = null;

				delete localStorage['ref']

				el.c.find('.referalMaketWrapper').remove()
			})
		}

		var make = function(){

			renders.caption()

			renders.icon();

			renders.options();

			self.sdk.node.transactions.get.unspent(function(unspent){
				renders.unspent(unspent)
			})

			self.app.platform.ws.messages.transaction.clbks.utemp = function(data){
				if(data.temp){
					if(data.temp.type == 'userInfo'){
						actions.upanel()
					}
				}
			}
		}

		var prepare = function(){

			var pv = _.map(self.app.platform.nodes, function(n, i){
				return i.toString()
			})

			var pvl = _.map(self.app.platform.nodes, function(n, i){
				return n.full
			})

			setNode = new Parameter({
				type : "VALUES",
				name : "setNode",
				id : 'setNode',
				possibleValues : pv,
				possibleValuesLabels : pvl,
				defaultValue : "1",
			}),

			setNode.value = self.app.platform.nodeid

			setNode._onChange = function(value){
				self.app.platform.nodeid = value;

				self.app.platform.state.save()
			}

			setAddressType = new Parameter({
				type : "VALUES",
				name : "setAddressType",
				id : 'setAddressType',
				possibleValues : self.app.platform.addressTypes,
				possibleValuesLabels : ['P2PKH', 'P2SH'/*, 'P2WPKH'*/],

				defaultValue : "p2sh"
			}),

			setAddressType.value = self.app.platform.addressType
			

			setAddressType._onChange = function(value){

				self.app.platform.addressType = value;

				self.app.platform.state.save()

				self.user.address.set(self.app.platform.sdk.address.pnet().address)

				self.app.reload();

			}

			actions.userOptions()

		}

		var freeMoney = function(){			

			self.app.platform.sdk.users.checkFreeMoney(self.app.platform.sdk.address.pnet().address, function(res){
				
			})
		}

		var testletter = function(clbk){
			var _p = {
				Email : 'maxgrishkov@gmail.com'
			}

			_p.Action || (_p.Action = 'ADDTOMAILLIST');
			_p.TemplateID = '1005'

			_p.ref = ''

			var getrefname = function(clbk){
				if (self.app.ref){
					self.sdk.users.get(self.app.ref, function(){

						var name = deep(self, 'sdk.users.storage.' + self.app.ref + '.name');

						if (clbk)
							clbk(name)
					})
				}
				else{
					if (clbk)
						clbk(null)	
				}
			}

			var gettype = function(){
				var fref = self.app.ref || '';


				var type = 'Overall'

				if(fref.indexOf('author') > -1) type='Account'
				if(fref.indexOf('&s=') > -1 || fref.indexOf('&v=') > -1) type='Post'

				return type
			}

			getrefname(function(name){

				var body = ''

				_p.ref += gettype()

				if (name) {
					
					_p.ref += ', ' + name

					body += '<p><a href="https://pocketnet.app/author?address='+self.app.ref+'">Referrer: '+name+'</a></p>'
				}

				var r = deep(document, 'referrer')

				if (r) {
					body += '<p><a href="'+r+'">From: '+r+'</a></p>'
				}

				_p.body = encodeURIComponent(body)

				console.log(_p)

				return

				$.ajax({
					type: 'POST',
					url: 'https://pocketnet.app/Shop/AJAXMain.aspx',
					data: _p,
					dataType: 'json',
					success : function(){
	
						topPreloader(100)
	
						if (clbk)
							clbk();
	
					}
				});
			})

			
			
		}
		
		return {
			primary : primary,

			getdata : function(clbk, p){

				//testletter()

				ref = null
				changedLoc = true;

				ed = p.settings.essenseData;

				self.app.platform.sdk.user.get(function(){

					if(_.isEmpty(self.app.platform.sdk.user.storage.me)){
						firstTime = true

						var _r = self.app.ref;

						if (_r && _r != self.app.platform.sdk.address.pnet())

						ref = _r;
					}

					prepare();

					var data = {};

						data.p2pkh = self.app.platform.sdk.address.pnet()

						data.setNode = setNode;
						data.setAddressType = setAddressType;
						data.userOptions = userOptions;
						data.tempInfo = tempInfo;
						data.firstTime = firstTime;
						data.ref = ref;

					if(ref){
						self.sdk.users.get(ref, function(){

							var address = ref;

							ref = self.sdk.users.storage[address] || null;

							if(ref) ref.address = address;
							
							data.ref = ref;

							clbk(data);

						})
					}
					else
					{
						clbk(data);
					}

					

				})

			},

			destroy : function(){
				el = {};



				if(self.app.platform.sdk.user.storage.me && !actions.equal(tempInfo, self.app.platform.sdk.user.storage.me)){
					
					return function(clbk){


						var locF = function(){

							delete self.app.platform.ws.messages.transaction.clbks.utemp
							
							clbk()

						}

						dialog({
							html : self.app.localization.e('usavechanges'),
							btn1text : self.app.localization.e('dyes'),
							btn2text : self.app.localization.e('dno'),
							success : function(){
								actions.save(locF)
							},

							fail : function(){

								tempInfo = _.clone(self.app.platform.sdk.user.storage.me)
								
								locF()
							}
						})

					}

				}

				return null;
			},
			
			init : function(p){

			
				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.transaction = p.el.find('.transactionInfo');
				el.unspent = p.el.find('.unspentlist');
				el.showhidetestpanel = p.el.find('.showhidetestpanel')
				el.import = p.el.find('.import');
				el.caption = el.c.find('.bgCaption');
				el.icon = el.c.find('.pgroupIconWrapper');

				el.usericon = el.c.find('.usericon');
				el.options = el.c.find('.optionsParameters');
				el.upanel = ed.panel || el.c.find('.upanel');

				el.signout = el.c.find('.signout')

				initEvents();

				actions.upanel();

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

		var s = null

		_.each(essenses, function(essense){

			var d = essense.destroy();

			if (d){
				s = d;
			}

		})

		if(!s) return;

		return {
			action : s
		};

	}

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = test;
}
else{

	app.modules.test = {};
	app.modules.test.module = test;

}