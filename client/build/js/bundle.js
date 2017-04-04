/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Song = __webpack_require__(2);

var Spotimy = function(ui){
  this.clientId = "24f59f279b824fe9891b49c10c9e6130";
  this.redirect_uri = "http://spotimy.com:3000";
  this.ui = ui;
  this.accessToken;
};

Spotimy.prototype = {
  getAuthURL: function(){
      var url = "https://accounts.spotify.com/authorize?";
      url += "client_id=" + this.clientId;
      url += "&response_type=token";
      url += "&scope=user-read-recently-played";
      url += "&redirect_uri=" + this.redirect_uri;

      return url;
  },
  getRecentlyPlayedUrl: function(){
    var url = "https://api.spotify.com/v1/me/player/recently-played";
    return url;
  },
  getToken: function(){
    var params = this.getHashParams();
    this.accessToken = params.access_token;

    if(this.accessToken == null){
      var url = this.getAuthURL();
      window.location = url;
    }
  },
  getTunes: function(){
    var url = this.getRecentlyPlayedUrl();
    var ui = this.ui;
    this.makeRequest(url, function(){
      var stringResponse = this.responseText;
      var songsArr = JSON.parse(stringResponse).items.map(function(song){
        var id = song.track.id;
        var artist = song.track.artists[0].name;
        var title = song.track.name;

        return new Song(id, title, artist);
      });

      ui.populate(songsArr);
    });
  },
  getHashParams: function() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  },
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Authorization", "Bearer " + this.accessToken);
    request.onload = callback;
    request.send();
  }
};

module.exports = Spotimy;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Ui = function(){

};

Ui.prototype = {
  populate: function(songs){
    var wrapper = document.getElementById("songlist");
    for(var song of songs){
      var div = document.createElement("div");
      div.className = "played";
      
      var innerHTML = '<p class="song">' + song.title + '</p>';
      innerHTML += '<p class="artist">' + song.artist + '</p>';

      div.innerHTML = innerHTML;

      wrapper.appendChild(div);
    }
  }
};

module.exports = Ui;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var Song = function(id, title, artist){
  this.id = id;
  this.title = title;
  this.artist = artist;
  this.songinfo = {};
};

Song.prototype = {
  getImageUrl: function(){

  }
};

module.exports = Song;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Ui = __webpack_require__(1);
var Spotimy = __webpack_require__(0);

var app = function(){
  var ui = new Ui();
  var spotimy = new Spotimy(ui);
  
  spotimy.getToken();
  spotimy.getTunes();
};

window.onload = app;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map