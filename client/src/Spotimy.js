var Spotimy = function(){
  this.clientId = "24f59f279b824fe9891b49c10c9e6130";
  this.redirect_uri = "http://spotimy.com:3000";

  var params = this.getHashParams();
  this.accessToken = params.access_token || null;
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
  getHashParams: function() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
};

module.exports = Spotimy;