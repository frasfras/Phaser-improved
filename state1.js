var demo = {};
demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){
  }
  create: function(){
  	 game.stage.backgroundColor ="#fff000";
  	 console.log('stage1');
  	  addChangeStateEventListeners();
  	  
  }
  update: function(){
  }
 }