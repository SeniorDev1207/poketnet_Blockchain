var videoCabinet = (function () {
  var self = new nModule();

  var essenses = {};

  var videoServers = {};

  var peertubeServers = {};

  var perServerCounter = 10;

  var startingPosition = 0;

  var Essense = function (p) {
    var primary = deep(p, 'history');

    var el;

    var actions = {
      async getHosts() {
        const serverStructureHosts = await self.app.peertubeHandler.api.proxy
          .roys()
          .catch(() => ({}));

        Object.entries(serverStructureHosts).forEach(
          ([name, hosts]) =>
            (videoServers[name] = { ...videoServers[name], hosts }),
        );

        return Promise.resolve(serverStructureHosts);
      },

      async getVideos(server) {
        const options = {
          start: peertubeServers[server].start,
          count: perServerCounter,
        };

        return self.app.peertubeHandler.api.videos
          .getMyAccountVideos(options, {
            host: server,
          })
          .then((data = []) => {
            peertubeServers[server].start += perServerCounter;
            peertubeServers[server].videos = [...data];
          })
          .catch((err) => sitemessage(`Error loading ${server}`));
      },
    };

    var events = {};

    var renders = {};

    var state = {
      save: function () {},
      load: function () {},
    };

    var initEvents = function () {};

    return {
      primary: primary,

      getdata: function (clbk) {
        var data = {};

        actions
          .getHosts()
          .then((hosts = {}) => {
            const servers = Object.values(hosts).flat();

            servers.forEach(
              (server) =>
                (peertubeServers[server] = {
                  videos: null,
                  start: 0,
                }),
            );

            const serverPromises = servers.map((server) =>
              actions.getVideos(server),
            );

            return Promise.all(serverPromises);
          })
          .then(() => {
            debugger;
            clbk(data);
          });
      },

      destroy: function () {
        el = {};
      },

      init: function (p) {
        state.load();

        el = {};
        el.c = p.el.find('#' + self.map.id);

        initEvents();

        p.clbk(null, p);
      },
    };
  };

  self.run = function (p) {
    var essense = self.addEssense(essenses, Essense, p);

    self.init(essense, p);
  };

  self.stop = function () {
    _.each(essenses, function (essense) {
      essense.destroy();
    });
  };

  return self;
})();

if (typeof module != 'undefined') {
  module.exports = videoCabinet;
} else {
  app.modules.videoCabinet = {};
  app.modules.videoCabinet.module = videoCabinet;
}
