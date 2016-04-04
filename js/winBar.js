function WinBar(){
    var me = this;

    this.lastResponse = {};
    this.win = 0;

    this.text = function(){

        var style = {
         font : 'bold italic 36px Arial',
         fill : '#F7EDCA',
         stroke : '#4a1850',
         strokeThickness : 5,
         dropShadow : true,
         dropShadowColor : '#000000',
         dropShadowAngle : Math.PI / 6,
         dropShadowDistance : 6,
         wordWrap : true,
         wordWrapWidth : 440
         };


        var winText = new PIXI.Text('Win:  '+ me.win, style);
        winText.x = 400;
        winText.y = 550;

        return winText;
    };
    this.drawWinBar = function(){

    };

    addListener('initialWin', function(win) {
        me.win = win;
    });

}



