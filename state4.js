demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        console.log('state4');
        
        game.stage.backgroundColor = '#0101D0';
        addEventListeners();
    },
    update: function(){}
};