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