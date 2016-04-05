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
        winText.x = 470;
        winText.y = 300;

        return winText;
    };

    addListener('initialWin', function(win) {
        me.win = win;
    });

}

// если вин обновляеться то уже в готовую сущность пикси записываем вин с выигрышом и наоборот. pixi.text('Win:',{style},2||3)



