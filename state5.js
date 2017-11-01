demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        
        game.stage.backgroundColor = '#CCDD00';
        console.log('state5');
        addEventListeners();
    },
    update: function(){}
};