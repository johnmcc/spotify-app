var Song = require('./Song');

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