const { performance } = require('perf_hooks');
const axios = require('axios');
var _ = require('underscore');
var f = require('../functions');
var instance = function (host, Roy) {
  var self = this;

  self.host = host;

  var inited = false;
  var logs = [];
  var lastStat = null;
  var k = 1000;

  var performanceBenchmarks = [];

  var videosinfo = {};

  var methods = {
    stats: '/api/v1/videos',
    video: function ({ id }) {
      return '/api/v1/videos/' + id;
    },
    performance: '/api/v1/server/stats',
    channelVideos: ({ account }) => `/api/v1/accounts/${account}/videos`,
  };

  var statsRequest = function () {
    lastStat = null;

    if (logs.length > 300) {
      logs.splice(0, 300);
    }

    if (performanceBenchmarks.length > 300) {
      performanceBenchmarks.splice(0, 300);
    }

    if (!inited) {
      return Promise.resolve();
    }

    return self
      .request('stats')
      .then((data) => {
        data = data.data || {};

        var difference = 0;

        if (videosinfo.total) {
          difference = data.total - videosinfo.total;
        }

        videosinfo = data;
        videosinfo.difference = difference;

        return Promise.resolve();
      })
      .catch((e) => {
        return Promise.resolve();
      })
      .then(() => self.request('performance'))
      .then((performance) =>
        performance.data ? performanceBenchmarks.push(performance.data) : null,
      )
      .then(() => {
        lastStat = null;

        return f.delay(Roy.parent.statsInterval());
      })
      .then(() => {
        return statsRequest();
      })
      .catch(() => Promise.resolve());
  };

  self.inited = function () {
    return inited;
  };

  self.request = function (method, data, p = {}) {
    var responseTime = performance.now();
    var url = methods[method];

    if (!url) return Promise.reject('url');

    if (typeof url == 'function') url = url(data);

    return axios[p.type || 'get'](`http://${host}${url}`, {
      timeout: p.timeout || Roy.parent.timeout() || 10000,
    })
      .then((result) => {
        var meta = {
          url,
          status: 200,
          time: performance.now() - responseTime,
          success: true,
        };

        logs.push(meta);

        return Promise.resolve({
          data: result.data || {},
          meta,
          host,
        });
      })
      .catch((error) => {

        logs.push({
          url,
          status: ((error || {}).response || {}).status || 500,
          time: performance.now() - responseTime,
          success: false,
        });

        return Promise.reject((error || {}).response || {});
      });
  };

  self.stats = function () {
    if (lastStat) return lastStat;

    var alltime = 0;
    var c = 0;

    var groupped = f.group(logs, function (l) {
      if (l.success) {
        alltime += l.time;
        c++;
      }

      return l.success ? 's' : 'f';
    });

    var info = {
      inited,

      success: f.deep(groupped, 's.length') || 0,
      failed: f.deep(groupped, 'f.length') || 0,

      count: logs.length,

      averageTime: c ? alltime / c : 0,

      k: 0,
      p: 0,

      total: videosinfo.total || 0,
    };

    lastStat = info;

    if (logs.length) {
      info.k = (k * info.averageTime) / ((c / logs.length) * (info.total + 1));
      info.p = (100 * c) / logs.length;
    }

    return info;
  };

  self.canuse = function () {
    var s = self.stats();

    return inited && s.averageTime && s.k;
  };

  self.init = function () {
    inited = true;

    statsRequest().catch((e) => {});
  };

  self.export = function () {
    return {
      host,
    };
  };

  self.destroy = function () {
    inited = false;
  };

  self.performance = () => ({
    data: performanceBenchmarks.length ? performanceBenchmarks[performanceBenchmarks.length - 1] : null,
    host: self.host,
  });

  return self;
};

module.exports = instance;
