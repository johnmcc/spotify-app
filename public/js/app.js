var app = function(){
  var ui = new Ui();
  var spotimy = new Spotimy(ui);
  
  spotimy.getToken();
  spotimy.getTunes();
};

window.onload = app;