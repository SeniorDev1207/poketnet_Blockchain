var uploadpeertube = (function(){

	var self = new nModule();

	var essenses = {};

	var Essense = function(p){

		var primary = deep(p, 'history');

		var el;

		var actions = {

		}

		var events = {
			
		}

		var renders = {

		}

		var state = {
			save : function(){

			},
			load : function(){
				
			}
		}

		var initEvents = function(){
			el.videoInput.change(function(evt) {
				var fileName = evt.target.files[0].name;
				el.videoError.text(fileName.slice(0, 20) + (fileName.length > 20 ? '...' : ''));
				el.videoError.removeClass('error-message');
			});

			el.videoWallpaper.change(function(evt) {
				var fileName = evt.target.files[0].name;

				el.wallpaperError.text(fileName.slice(0, 20) + (fileName.length > 20 ? '...' : ''));
				el.wallpaperError.removeClass('error-message');
			});

		}

		return {
			primary : primary,

			getdata : function(clbk, p){

				actions = p.settings.essenseData.actions;

				var data = {};

				clbk(data);

			},

			destroy : function(){
				el = {};
			},
			
			init : function(p){

				state.load();

				el = {};
				el.c = p.el.find('#' + self.map.id);
				el.videoInput = el.c.find('.upload-video-file');
				el.videoWallpaper = el.c.find('.upload-video-wallpaper');
				el.videoError = el.c.find('.file-type-error');
				el.wallpaperError = el.c.find('.wallpaper-type-error');
				el.uploadProgress = el.c.find('.upload-progress-container')

				initEvents();

				p.clbk(null, p);
			},

			wnd : {
				header : "",
				buttons : {

					close : {
						class : "close",
						html : '<i class="fas fa-upload"></i> Upload',
						fn : function(wnd, wndObj){
							wndObj.hide();
							// var videoInputFile = el.videoInput.prop('files');

							// var videoWallpaperFile = el.videoWallpaper.prop('files');
							// // var wallpaperError = wnd.find('.wallpaper-type-error');

							// var videoName = wnd.find('.upload-video-name').val();
							// var nameError = wnd.find('.name-type-error');

							// nameError.text('');

							// var filesWrittenObject = {};

							// // validation
							// if (!videoInputFile[0]) {
							// 	el.videoError.text('No video selected');
							// 	el.videoError.addClass('error-message');

							// 	return;
							// }
							// if (!videoInputFile[0].type.includes('video')) {
							// 	el.videoError.text('Incorrect video format');
							// 	el.videoError.addClass('error-message');

							// 	return;
							// };

							// filesWrittenObject.video = videoInputFile[0];

							// if (videoWallpaperFile[0]) {
							// 	console.log(videoWallpaperFile[0].type);
								
							// 	if (videoWallpaperFile[0].type !== 'image/jpeg' && videoWallpaperFile[0].type !== 'image/jpg') {
							// 		el.wallpaperError.text('Incorrect wallpaper format. Supported: .jpg, .jpeg');
							// 		el.wallpaperError.addClass('error-message');

							// 		return;
							// 	};

							// 	filesWrittenObject.image = videoWallpaperFile[0];
							// }
							// if (!videoName) {
							// 	nameError.text('Name is empty');

							// 	return;
							// }

							// filesWrittenObject.name = videoName;

							// filesWrittenObject.uploadFunction = function(percentComplete){
							// 	var formattedProgress = percentComplete.toFixed(2);

							// 	el.uploadProgress.find('.upload-progress-bar').css('width', formattedProgress + '%');
							// 	el.uploadProgress.find('.upload-progress-percentage').text(formattedProgress + '%');
							// }

							// filesWrittenObject.successFunction = function(response){
							// 	if (response === 'error') {
							// 		sitemessage('Uploading error');

							// 		return;
							// 	};

							// 	actions.added(response);
							// 	wndObj.close();
							// }

							el.uploadProgress.removeClass('hidden');
							// self.app.peertubeHandler.uploadVideo(filesWrittenObject);
						}
					}

				},
				close : function(){

				},
				success : function(_wnd, _wndObj){
					wndObj = _wndObj;
					wnd = _wnd;
				},
				offScroll : true,
				noInnerScroll : true,
				class : 'uploadpeertube',


				swipeClose : true,
				swipeCloseDir : 'right',
				swipeMintrueshold : 30,
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

	return self;
})();


if(typeof module != "undefined")
{
	module.exports = uploadpeertube;
}
else{

	app.modules.uploadpeertube = {};
	app.modules.uploadpeertube.module = uploadpeertube;

}