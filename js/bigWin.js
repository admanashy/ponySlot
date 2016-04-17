function BigWin(){
    var me = this;

    this.lastResponse = {};
    this.winType = 0;
    this.x = 0;
    this.y = 100;

    this.drawBigWin = function(){

        var winImage = PIXI.Sprite.fromImage('image/winBar.png');
        winImage.x = 80;
        winImage.y = 50;
        winImage.height = 447;
        winImage.width = 768;
        winImage.shadow = 200;
        winImage.shadowColor = 'white';

        return winImage;

    };

    this.bigWinText = function(){
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

        var bigWinText = new PIXI.Text('BIG WIN!',style);
        bigWinText.x = 380;
        bigWinText.y = 250;

       return bigWinText
    };

    this.init = function(stage){
        var rootContanier = new PIXI.Container();
        rootContanier.position.x = me.x;
        rootContanier.position.y = me.y;
        rootContanier.visible = false;
        rootContanier.addChild(me.drawBigWin());
        rootContanier.addChild(me.bigWinText());
        this.rootContanier = rootContanier;

        stage.addChild(rootContanier)
    };


    this.onServerResponse = function(response){
        console.log(me.winType+'1');
        me.winType = response.winType;
        };

    addListener('serverResponse', me.onServerResponse);

    addListener('allReelsStopped', function() {
        console.log(me.winType+'2');
        if (me.winType == 'Big Win'){
            me.rootContanier.visible = true;
        }
    });

    addListener('spinButtonPress', function() {
            me.rootContanier.visible = false;

    });


}