demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        
        game.stage.backgroundColor = '#FFFF11';
        console.log('state7');
        addEventListeners();
    },
    update: function(){}
};