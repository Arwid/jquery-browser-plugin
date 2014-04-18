// Generated by CoffeeScript 1.7.1
(function() {
  (function($, window, undefined_) {
    "use strict";
    var android, browser, ie, matched, opera;
    matched = void 0;
    browser = void 0;
    $.uaMatch = function(ua) {
      var match, platform_match;
      ua = ua.toLowerCase();
      match = /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      platform_match = /(ipad)/.exec(ua) || /(iphone)/.exec(ua) || /(android)/.exec(ua) || /(windows phone)/.exec(ua) || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/i.exec(ua) || [];
      return {
        browser: match[3] || match[1] || "",
        version: match[2] || "0",
        platform: platform_match[0] || ""
      };
    };
    matched = $.uaMatch(window.navigator.userAgent);
    browser = {};
    if (matched.browser) {
      browser[matched.browser] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.version);
    }
    if (matched.platform) {
      browser[matched.platform] = true;
    }
    if (browser.android || browser.ipad || browser.iphone || browser["windows phone"]) {
      browser.mobile = true;
    }
    if (browser.cros || browser.mac || browser.linux || browser.win) {
      browser.desktop = true;
    }
    if (browser.chrome || browser.opr || browser.safari) {
      browser.webkit = true;
    }
    if (browser.rv) {
      ie = "msie";
      matched.browser = ie;
      browser[ie] = true;
    }
    if (browser.opr) {
      opera = "opera";
      matched.browser = opera;
      browser[opera] = true;
    }
    if (browser.safari && browser.android) {
      android = 'android';
      matched.browser = android;
      browser[android] = true;
    }
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return $.browser = browser;
  })(window, window);

}).call(this);
