var oldchat = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var id = makeid(), readinterval;

		var el;
		var essenseData = {};
		var topcaption = null;
		var bottomcaption = null;
		var getPreviewTimer = null;

		var mestate;

		var newmessageslength = 0;

        var chat = null;
        var chatInterval = null;
		var lastUpdate = null;

		var lastmessage = null;

		var renderedMessages = {};
		var renderedMessagesTime = {};

		var actions = {

			preloader : function(show){
				if(show){
					el.c.addClass('loading')
				}
				else
				{
					el.c.removeClass('loading')
				}
			},
			
			close : function(){				

				self.removeEssense(essenses, id);

				if (essenseData.closeClbk)
					essenseData.closeClbk();
				
			},

			sendClbk : function(temp, id, encrypted){

				var messageEl = el.messages.find('#' + temp.EncryptedMessageID)

				if(!id){
					temp.result = 'fail';
				}

				else
				{
					temp.EncryptedMessageID = id;
					temp.result = 'success';

					temp.Message = encrypted.note || "";
					temp.Attachment = encrypted.attachment || "";
					temp.AttachmentName  = encrypted.attachmentName || "";
					temp.AttachmentPreview = encrypted.attachmentPreview  || "";

					messageEl.attr('id', temp.EncryptedMessageID)
				}

				messageEl.removeClass('sending')
				messageEl.addClass(temp.result)


			},
			mobileBuildHeight : function(){
				if (essenseData.view == 'buildin' && isMobile()){

					var h = el.c.find('.chatwindow').height()

					var w = $(window).height();

					var hc = el.c.find('.chatmessages').height();

					if (h <= w - 175 && hc < h){
						el.c.find('.chatwindow').height(w - 175)
					}
					else
					{
						el.c.find('.chatwindow').css('height', 'auto')
					}

				}
			},
			spacer : function(){

				actions.mobileBuildHeight()

				if(isTablet()){

					var h = 0;
					var messages = el.messages.find('.chatmessage');

					if(messages.length > 0){


						el.c.find(".spacer").height(0)

						h = el.c.find('.chatwindow').height() - el.c.find('.chatmessages').height() - 10;

						if(h < 0) h = 0;

						el.spacer.height((h) + 'px');

					}

					

				}

				
			},
			send : function(value){


				if (value){

					chat.rtc.send(value)

				}
				

			},
			sendAttachment : function(p, temp){

				self.app.platform.sdk.chats.send({
		        	attachment : p.attachment,
		        	attachmentName : p.attachmentName,
		        	attachmentPreview : p.attachmentPreview,
		        	temp : temp
		        }, chat.ThreadID, function(id, encrypted){
		        	actions.sendClbk(temp, id, encrypted)
		        })

			},
			addTempMessage : function(p){

				var created = new Date();

				if(self.app.platform.timeDifference){
					created = created.addSeconds(self.app.platform.timeDifference / 1000);
				}

				var message = {
					
					Created : dateToStrUtcS(created),					
					ThreadID : chat.ThreadID,
					EncryptedMessageID : makeid(true),
					temp : true,
					UserID : self.app.user.data.id,

					decrypted : {
						Message : p.note,
						AttachmentName : p.attachmentName,
						AttachmentPreview : p.attachmentPreview,
					}					
				}

				chat.messages.push(message)

				renders.messages(null, [message], true)

				return message;
			},
			clearTempMessages : function(){
				el.messages.find(".temp").remove()
			},
			scrollToPx : function(_mode, px){

				if(!actions.checkState()) return false;

				if(px === null) return;


				var _el = null;
				var innerContent = null;
				var prop = 'position'
				
				if (essenseData.view == 'buildin'){
					_el = $(window);
					innerContent = $('html');
					prop = 'offset'
				}

				else
				{
					_el = el.c.find('.chatwindow');
					innerContent = el.c.find('.chatmessages');
				}

				if(_mode == 'toLast' || px == 'toLast'){
					
					var to = el.messages.find('.chatmessage:nth-last-child(1)');

					var offset = to[prop]();

					if (offset)
					{

						var bottomoffset = 70;

						if(isMobile()){
							bottomoffset = 115
						}

						px = to[prop]().top + to.height() + bottomoffset - _el.height();

						_el.scrollTop(px, 200)

					}
				}

				else
				{
					var h = innerContent.height();
					_el.scrollTop( h - px, 200)
				}
			},
			scrollPx : function(_mode){

				if(!el.c) return

				var _el = null;
				var innerContent = null;
				var px = null;

				if (essenseData.view == 'buildin'){
					_el = $(window);
					innerContent = $('html');
				}

				else
				{
					_el = el.c.find('.chatwindow');
					innerContent = el.c.find('.chatmessages');
				}

				if(_mode == 'toLast'){
					px = 'toLast'
				}

				else
				{
					var to = el.messages.find('.chatmessage:nth-last-child(1)');

					var offset = -20;
					var prop = 'position'

					if (essenseData.view == 'buildin'){
						//offset = -200;
						prop = 'offset'
					}

					var inv = inView(to, {
						inel : _el,
						offset : offset,
						mode : 'partall'
					})

					if(to && to[prop]())
					{
						var h = innerContent.height();
						var scroll = _el.scrollTop();
						px = h - to.height() - 150;
						
						if(scroll + _el.height() > px)
							px = 'toLast';
						else
						{
							px = null;
							
						}
					}


					
				}

				return px;
			},
			saveAttachment : function(message){

				topPreloader(30);

				var el = helpers.findEl(message);

				if (el){
					el.addClass('saveAttachment')
				}

				self.app.platform.sdk.chats.getAttachment(message, function(message){

					topPreloader(100);

					if (el){
						el.removeClass('saveAttachment')
					}

					if(!message){
						console.log("ERROR")
					}

					else

						if(message.ChatMessageAttach){


							saveAs({
								download : message.decrypted.AttachmentName,
								file : message.ChatMessageAttach,
								noA : true
							})

						}

				})

			},
			openGallery : function(message){

				var getImages = function(){

					var images = _.filter(chat.messages, function(m){
						var n = deep(m, 'decrypted.AttachmentName');

						if (n){

							if(n.indexOf('.jpg') > -1 || n.indexOf('.png')  > -1 || n.indexOf('.jpeg')  > -1){
								return true;
							}

						}
					})

					/*images = _.map(images, function(m){
						return m.decrypted
					})*/

					return images;

				}

				var getImage = function(message, clbk){

					if(message.ChatMessageAttach)
					{
						if (clbk)
							clbk({
								src : message.ChatMessageAttach,
								name : message.decrypted.AttachmentName
							})
					}

					else

						self.app.platform.sdk.chats.getAttachment(message, function(message){

							var image = {
								src : message.ChatMessageAttach,
								name : message.decrypted.AttachmentName
							}

							if (clbk)
								clbk(image)

						})
				}


				var p = {
					idName : 'EncryptedMessageID',
					initialValue : message.EncryptedMessageID,
					getImages : getImages,
					getImage : getImage
				}

				renders.gallery(p)
			},

			getPreview : function(messages){
				self.app.platform.sdk.chats.getPreview(messages, function(messages){
					_.each(messages, function(message){

						var el = helpers.findEl(message)

						renders.messages(null, [message], true, el)
					})
				})
			},

			read : function(){

				//if (self.app.platform.focus)

					//self.app.platform.sdk.chats.read(chat.messages, function(messages){
					//
					
					/*if(newmessageslength){

						setTimeout(function(){
							
							newmessageslength = 0;

							actions.countUnread();
						})

					}

						readinterval = slowMade(function(){
							
						}, readinterval, 1000)*/

						

						/*_.each(messages, function(msg){
							var el = helpers.findEl(msg);

							el.addClass('read');
						})*/

					//})
				
			},
			countUnread : function(){


				if(!el.countUnread) return

				/*var myid = self.app.user.data.id;

				var unread = _.filter(chat.messages, function(message){
					if(message.UserID != myid && !message.Read) return true;
				})*/

				el.countUnread.html("")

				/*var unreadCount = newmessageslength;


				if (unreadCount){
					
					el.countUnread.html(unreadCount + ' <i class="far fa-envelope"></i>')
				}
				else
				{
					el.countUnread.html("")
				}

				self.app.platform.api.electron.notifications(unreadCount, 'messages')*/
			},
			checkState : function(){
				if(el.c && !el.c.hasClass('minimized')) return true
			}
		}

		var events = {
			minimize : function(){
				el.c.addClass('minimized')

				if (essenseData.minimizeClbk)
				{
					essenseData.minimizeClbk();
				}

				topcaption.clear();
				bottomcaption.clear();

				el.type.blur();
			},
			expand : function(){

				el.c.removeClass('minimized')

				if (essenseData.expandClbk)
				{
					essenseData.expandClbk();
				}

				if(!isTablet())
					el.type.focus()

				actions.spacer();

				setTimeout(function(){
					actions.scrollToPx('toLast', 'toLast');
				}, 100)

				
			},
			out : function(){
				self.app.modules.chats.module.api.add(chat.ThreadID)
			},
			close : function(){

				actions.close();
			},
			type : function(editor, event){

				var c = this;

				var value = c.getText();

				if (event.which == 13 || event.keyCode == 13) {

					if(!value) return false;

					c.setText('');

					/*var m =  actions.addTempMessage({
			        	note : value
			        })*/
			        
			        actions.send(value);

			        $(this).val('')

			        return false;
			    }
			},

			resizeWindow : function(){
				if (topcaption){
					topcaption.setOffset([65, 0]);
					
				}

				if (bottomcaption){
					bottomcaption.setOffset([0, 100]);
				}
			},

			getAttachment : function(){
				var el = $(this).closest('.chatmessage');

				var id = el.attr('id');

				var sending = el.hasClass('sending');

				if(!sending)
				{
					var message = helpers.findMessage(id);

					if (message.decrypted && message.decrypted.AttachmentName){

						var n = message.decrypted.AttachmentName.toLowerCase();

						if (n.indexOf('.jpg') > -1 || n.indexOf('.png') > -1 || n.indexOf('.jpeg')  > -1){

							actions.openGallery(message);

						}

						else
						{
							actions.saveAttachment(message);
						}

					}

					
				}
			},

			messagesInView : function(){
				getPreviewTimer = slowMade(function(){

					if(!actions.checkState()) return false;

					//if(!el.messages) return;

					var messagesEls = el.messages.find('.chatmessage');
					var lastMessages =  el.messages.find('.chatmessage:nth-last-child(1)');
					var _el;


					if (essenseData.view == 'buildin')
					{
						_el = $(window); 
					}

					if (essenseData.view == 'fixedin')
					{
						_el = el.c.find('.chatwindow');
					}

					var inv = inView(messagesEls, {
						inel : _el
					})

					var inVlastMessages = inView(lastMessages, {
						inel : _el
					})

					if (inv.length > 0){

						var messages = _.map(inv, function(el){
							var id = $(el).attr('id');

							return helpers.findMessage(id);
						})

						
						//actions.getPreview(messages);
						
					}

					if(inVlastMessages.length > 0){
						actions.read();
					}



				}, getPreviewTimer, 100)
			},
		
		}

		var helpers = {
			findMessage : function(id){

				return _.find(chat.messages, function(m){
					return m.EncryptedMessageID == id
				})
			},
			findEl : function(message){
				return el.c.find('#' + (message.tm + message.f))
			}
		}

		var renders = {
			gallery : function(p){

				if(!p) p = {};

				self.app.nav.api.load({
					open : true,
					id : 'imageGallery',
					inWnd : true,
					essenseData : p
				})

			},

			safemessages : function(messages, clbk){

				
				var times = _.map(renderedMessagesTime, function(m, t){
					return {
						m : m,
						t : t
					}
				})

				times = _.sortBy(times, function(mt){
					return Number(mt.t);
				})

				var messagesPack = [];

				_.each(times, function(mt, index){

					var pack = {
						newmessages : [],
						oldmessage : mt
					};

					_.each(messages, function(m){

						if( (Number(m.tm) < Number(mt.t) || (index == times.length - 1)) 

							&& (!index ||  Number(times[index - 1].t) > Number(m.tm))){


							pack.newmessages.push(m)

						}

					})

					if(pack.newmessages.length)
					{
						pack.newmessages.push(pack.oldmessage.m)

						pack.newmessages = _.sortBy(pack.newmessages, function(m){
							return Number(mt.t);
						})

						messagesPack.push(pack)
					}

				})

				if(messagesPack.length){
					lazyEach({
						array : messagesPack,
						action : function(p){
							var pack = p.item

							var el = helpers.findEl(pack.oldmessage)


							renders.messages(p.success, pack.newmessages, null, el)
						},

						all : {
							success : clbk
						}
					})
				}
				else
				{
					renders.messages(clbk, messages)
				}

			},

			messages : function(clbk, messages, saveTempMessages, replace){

				if(!el.c) return

				messages = _.filter(messages, function(m, i){

						
					var t = m.tm

					if(m.tm.length == 17) m.tm = t + '0'


					if(lastmessage && lastmessage.tm > m.tm) return

					if(messages.length - 50 > i) return false

						return true
				})

				var scrollMode = 'toLast';

				if (messages) scrollMode = 'fixed';

				var px = actions.scrollPx(scrollMode);

				messages || (messages = []);

				console.log("BEFORE", messages)

				messages = _.filter(messages, function(m){
					var id = m.tm + m.f

					if(!m.tm) return false

					if(!renderedMessages[id]) {

						renderedMessages[id] = true;

						renderedMessagesTime[m.tm] = m;



						return true;
					}

				})

				var sorted = _.sortBy(messages, function(msg){

					var t = msg.tm

					if(msg.tm.length == 17) msg.tm = t + '0'

					return Number(msg.tm)
				})


				if(!saveTempMessages) actions.clearTempMessages()

				//lastUpdate = chat.lastUpdate;

				var inner = append;
				var _el = el.messages;

				if (replace) {
					inner = replaceWith
					_el = replace;
				}

				if(!messages.length){
					if (clbk)
						clbk();
					
					return
				}
				
				lastmessage = sorted[sorted.length - 1]

				console.log('messages : sorted	', sorted	)

				self.shell({
					name :  'messages',
					el :   _el,
					data : {
						chat : chat,
						messages : sorted						
					},

					inner : inner

				}, function(_p){

					if (essenseData.messagesClbk)
					{
						essenseData.messagesClbk();
					}

					

					el.messages.find('.attachment').off('click')

					el.messages.find('.attachment').on('click', events.getAttachment)

					events.messagesInView();

					var els = el.messages.find('.chatmessage');

					if (els.length > 0){
						el.c.find('.other').fadeOut(1);
					}
					else
					{
						el.c.find('.other').fadeIn(1);
					}

					if(saveTempMessages) px = 'toLast'

						actions.spacer();

					setTimeout(function(){
						actions.scrollToPx(scrollMode, px);
					}, 20)

					

					if (topcaption)
						topcaption.action();

					if (bottomcaption)
						bottomcaption.action();

					/*if(_p.el.find('img').length){
						_p.el.find('img').imagesLoaded(function(image){*/
						
							

							actions.countUnread();

							/*actions.scrollToPx(scrollMode, px);

							
						/*})
					}*/

					

					if (clbk)
						clbk();
					
				})
			}
		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var initEvents = function(){

			if (essenseData.view == 'buildin')
			{
				if(!isMobile())

					topcaption = new Caption({
						container: el.c.find('.chatWrapper'),
						caption: el.c.find('.captionfwrapper'),
						offset: [65, 0],
						
					}).init();	

				var bottom = 0;

				if(isMobile()){
					bottom = 50
				}

				bottomcaption = new Caption({
					container: el.c.find('.chatWrapper'),
					caption: el.c.find('.bcaptionfwrapper'),
					offset: [bottom, 2 * bottom],
					pos : 'bottom'
					
				}).init();	


				el.c.find('.out').on('click', events.out);

				window.addEventListener('scroll', events.messagesInView);
				window.addEventListener('resize', events.resizeWindow);
				$('html').on('mousemove', events.messagesInView);
			}
				

			if (essenseData.view == 'fixedin')
			{
				
				el.c.find('.close').on('click', events.close)

				el.c.find('.chatwindow').on('scroll', events.messagesInView);
				$('html').on('mousemove', events.messagesInView)
				
			}

			el.c.find('.minimize').on('click', events.minimize)
			el.c.find('.expand').on('click', events.expand)

			

			el.countUnread.on('click', function(){

				events.expand();
				
				
			})

			//el.type.on('keyup', events.type);

			el.type.emojioneArea({
		    	pickerPosition : 'top',

		    	/*change : events.eTextChange,
	    		click : events.eTextChange,*/
	    		
		    	
		    	search : false,
		    	tones : false,

		    	attributes: {
			        spellcheck : true,
			        autocomplete   : "on",
			    },

		    	events : {
		    			
		    		keyup : events.type,

		    		onLoad : function(c,d){


		    		}
		    	}
		    });


			initUpload({
				el : el.attachement,
				ext : ['png', 'jpeg', 'jpg', 'pdf'],
				multiple : true,
				maxFileSize : 5,
				dropZone : el.c.find('.chatWrapper'),

				beforeUpload : function(obj){

					var name = deep(obj, 'file.name')

					if (obj.ext == 'png' || obj.ext == 'jpeg' || obj.ext == 'jpg'){

						resize(obj.base64, 200, 200, function(preview){

							var m = actions.addTempMessage({
					        	attachmentName : name,
					        	attachmentPreview : preview
					        })

							resize(obj.base64, 1600, 1600, function(attachment){

								actions.sendAttachment({
									attachment : attachment,
									attachmentName : name,
									attachmentPreview : preview
								}, m);

							});

						});

					}

					else
					{
						var m = actions.addTempMessage({
				        	attachmentName : name
				        })

				        actions.sendAttachment({
							attachment : obj.base64,
							attachmentName : name
						}, m);
					}
					
				}
			})

		}

		var make = function(){

			chat.rtc.clbks.receive.message.messenger = function(message){
				if(!self.app.platform.focus && self.app.platform.titleManager){

					self.app.platform.titleManager.add("You have new messages")

				}	

				lastmessage = message

				self.app.platform.sdk.messenger.load.messages(message, function(){
					renders.messages(null, [message])
				})
			}

			chat.rtc.clbks.receive.messages.messenger = function(messages){

			
				newmessageslength++;


				self.app.platform.sdk.messenger.load.messages(messages, function(){

					renders.messages(null, messages, true)
					//renders.safemessages(messages)
					
				})
			}

			chat.rtc.clbks.send.message.messenger = function(message){
				self.app.platform.sdk.messenger.load.messages(message, function(){

					lastmessage = message

					renders.messages(null, [message], true)
				})
			}

			if(chat){

				var m = _.toArray(chat.rtc.storage._db || {});

				self.app.platform.sdk.messenger.load.messages(m, function(){
					renders.messages(null, m, true)
				})


				chat.rtc.connect(function(){
					//console.log(chat)
				})

			}

		}

		var addMessagesClbk = function(){
			var ws = self.app.platform.ws;

			$(window).on('focus', actions.read)
			$(window).on('mousemove', actions.read)
			
		}

		var removeMessagesClbk = function(){
			var ws = self.app.platform.ws;

			$(window).off('focus', actions.read)
			$(window).off('mousemove', actions.read)

			delete chat.rtc.clbks.receive.message.messenger

			delete chat.rtc.clbks.receive.messages.messenger

			delete chat.rtc.clbks.send.message.messenger
		}


		return {
			primary : primary,

			getdata : function(clbk, p){

				var data = {};

				var _chat = deep(p, 'settings.essenseData.chat');

				if(!_chat){

					var chatid = parameters().chatid

					_chat = self.app.platform.sdk.discussions.fromChatId(chatid)

				}

				if(!_chat){
					self.app.platform.sdk.chats.add(chatid, 'share')

					_chat = self.app.platform.sdk.discussions.fromChatId(chatid)
				}

				var ed = deep(p, 'settings.essenseData') || {};

				if (_chat) 
				{
					chat = _chat.chat
					self.app.platform.sdk.chats.info([_chat.chat], function(d){

						data.chat = _chat;


						self.app.platform.sdk.tempmessenger.getChat(_chat.chat)

						data.canEnc = true;

						self.app.platform.sdk.ustate.me(function(_mestate){

							mestate = _mestate

							data.mestate = mestate;
						
							clbk(data);

						})

					})

					
				
				}
					

			},

			destroy : function(){

				if (readinterval){
					clearInterval(readinterval)
				}

				if (el.type)

					el.type.blur();

				$('html').off('mousemove', events.messagesInView)

				window.removeEventListener('scroll', events.messagesInView);
				window.removeEventListener('resize', events.resizeWindow);

				removeMessagesClbk();

				if (getPreviewTimer)
					clearTimeout(getPreviewTimer)

				el = {};

				if (topcaption)
					topcaption.destroy();

				if(bottomcaption)
					bottomcaption.destroy();

				bottomcaption = null;
				topcaption = null;

				if (chat){
					chat.rtc.leave()

					chat = null;
				}

               
                clearInterval(chatInterval);
				lastUpdate = 0;

				$('#tawkchat-container').fadeIn();


				if (essenseData.destroyClbk)
					essenseData.destroyClbk();

				
			},
			
			init : function(p){


				renderedMessages = {};
				renderedMessagesTime = {};
				lastmessage = null

				essenseData = p.essenseData || {};
				essenseData.view || (essenseData.view = 'buildin')

				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.messages = el.c.find('.chatmessages');
				el.type = el.c.find('.type');
				el.attachement = el.c.find('.attachement');
				el.countUnread = el.c.find('.countUnread');
				el.spacer = el.c.find('.spacer');

				el.c.addClass(essenseData.view)

				initEvents();

				//setTimeout(function(){

					make();

					addMessagesClbk();


				actions.countUnread()

					p.clbk(null, p);

				//}, 10)
			},
			id : id,
			api : events
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

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = oldchat;
}
else{

	app.modules.oldchat = {};
	app.modules.oldchat.module = oldchat;

}