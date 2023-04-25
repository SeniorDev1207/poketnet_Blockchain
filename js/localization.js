Localization = function(app){

	

	var self = this;

	if(typeof window == 'undefined') self.key = 'en'
	else
	{
		self.key = (window.navigator.userLanguage || window.navigator.language || 'en').split("-")[0];
	}

	self.loading = {}

	//self.key = 'en'

	self.available = {

		en : {
			name : "English",
			key : 'en'
		},

		de : {
			name : "Deutsch",
			key : 'de'
		},

		fr : {
			name : "Français",
			key : 'fr'
		},

		kr : {
			name : "한국어",
			key : 'kr'
		},
		es : {
			name : "Español",
			key : 'es'
		},

		ru : {
			name : "Русский",
			key : 'ru'
		},

		cmn : {
			name : "官話",
			key : 'cmn'
		}

	}

	self.loaded = {

	}


	self.current = function(){
		return self.available[self.key] || {}
	}

	self.locLinks = function(){
		return _.reduce(self.available, function(m, loc){

			return m + '<a href="?loc='+loc.key+'">'+loc.name+'</a>'

		}, '')
	}

	self.availableMap = function(id){
		return _.map(self.available, function(a){
			return a[id]
		})	
	}

	self.findByName = function(name){
		return _.find(self.available, function(a){
			return a.name == name
		})
	}

	self.lightSet = function(key, clbk){
		if(key && self.available[key] && self.key != key)
		{
			self.key = key;

			self.locSave();

			self.import(function(){
				
				if (clbk)
					clbk();

			});
		}

		else
		{
			if (clbk)
				clbk();
		}
	}

	self.set = function(key, clbk){

		if(self.available[key] && self.key != key)
		{
			if (app.nav)
				app.nav.api.history.removeParameters(['loc'])

			self.key = key;

			self.locSave();

			self.import(function(){

				if(app)
				{	
					
					app.reload({
						clbk : clbk,
						current : true
					})
					app.platform.clearlocal()
				}

				else
				{
					if (clbk)
						clbk();
				}

			});
		}

		else
		{
			if (clbk)
				clbk();
		}
	}

	self.locSave = function(){
		localStorage['loc'] = self.key || (window.navigator.userLanguage || window.navigator.language || 'en').split("-")[0];
	}

	self.init = function(clbk){

		if(typeof loclib == 'undefined' || !loclib) loclib = {};

		var prms = parameters();

		self.key = prms.loc || localStorage['loc'] || (window.navigator.userLanguage || window.navigator.language || 'en').split("-")[0];
		
		self.locSave();

		lazyActions([
			self.import,
			function(c){
				self.import(c, 'en')
			}
		], clbk)


	}

	self.import = function(clbk, _key){

		var __k = _key || self.key

		console.log(self.loaded[__k], self.loading[__k], __k)

		if(self.loaded[__k])
		{
			if (clbk)
				clbk();
		}
		else
		{

			if(self.loading[__k]){
				retry(function(){
					return !self.loading[__k]
				}, function(){
					
					self.import(clbk, __k)
					
				})

				return
			}

			var src = 'localization/' + (__k) + '.js'

			self.loading[__k] = true

			importScript(src, function(){

				self.loaded[__k] = true;
				self.loading[__k] = false;

				loclib[__k] || {};

				if (clbk)
					clbk();

			});
		}
	}

	self.e = function(id, args){
		var v = deep(loclib, self.key + '.' + id) || deep(loclib, 'en.' + id) || "";

		if(typeof v == 'function') v = v(args);

		return v || id;
		
		return '<span class="localizationContainer" localizationId="'+id+'">' + v + "</span>";
	}

	return self;
}

if(typeof module != "undefined")
{
	module.exports = Localization;
}