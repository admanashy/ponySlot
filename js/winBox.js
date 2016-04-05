function WinBox(){
    var me = this;

    this.lastResponse = {};
    this.win = 0;

    this.drawWinBar = function(){

        var winImage = PIXI.Sprite.fromImage('image/winBar.png');
        winImage.x = 80;
        winImage.y = 50;
        winImage.height = 447;
        winImage.width = 768;
        winImage.shadow = 200;
        winImage.shadowColor = 'white';

        return winImage;

    };

    addListener('initialWin', function(win) {
        me.win = win;
    });

}



