demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#00DDDD';
        console.log('state1');
        addEventListeners();
    },
    update: function(){}
};