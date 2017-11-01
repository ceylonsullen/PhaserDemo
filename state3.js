demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        
        game.stage.backgroundColor = '#0DDDFF';
        console.log('state3');
        addEventListeners();
    },
    update: function(){}
};