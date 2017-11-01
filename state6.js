demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        
        game.stage.backgroundColor = '#99DDEE';
        console.log('state6');
        addEventListeners();
    },
    update: function(){}
};