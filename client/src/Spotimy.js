export default class Spotimy {
  constructor(){
    this.clientId = "24f59f279b824fe9891b49c10c9e6130";
    this.redirect_uri = "https://johnmcc.github.io/spotify-app";

    const params = this.getHashParams();
    this.accessToken = params.access_token || null;
  }

  getAuthURL(){
    const url = `https://accounts.spotify.com/authorize?
                client_id=${this.clientId};
                &response_type=token";
                &scope=user-read-recently-played
                &redirect_uri=${this.redirect_uri}`;
    return url;
  }

  getRecentlyPlayedUrl() {
    return "https://api.spotify.com/v1/me/player/recently-played";
  }

  getSongInfoUrl(ids){
    return `https://api.spotify.com/v1/audio-features/?ids=${ids}`;
  }

  getHashParams(){
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
}
