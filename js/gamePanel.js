function GamePanel(){
    var me =  this;
    this.width = 1280;
    this.height = 30;

    this.x = 0;
    this.y = 345;
    this.win = 0;

    this.bgColor= 'black';

    this.totalWin = function (){

        var style = {
            font : '20px Arial',
            fill : '#F7EDCA'

        };

        var winText = new PIXI.Text('TOTAL WIN:  '+ me.win, style);
        winText.x = me.x + 400;
        winText.y = me.y + 10;
        winText.visible = false;



        var noWinText = new PIXI.Text('TOTAL WIN:  ', style);
        noWinText.x = me.x + 400;
        noWinText.y = me.y + 10;
        noWinText.visible = true;

        this.winText = winText;
        this.noWinText = noWinText;


        var textContanier = new PIXI.Container();
        textContanier.addChild(winText);
        textContanier.addChild(noWinText);
        return textContanier;

    };

    this.gamePanelShape = function(){
        var shape = new PIXI.Graphics();
        shape.lineStyle(0);
        shape.beginFill(me.bgColor);
        shape.drawRect(me.x, me.y, me.width, me.height);
        shape.endFill();

        return shape;
    };

        this.init = function(stage) {
        var rootContanier = new PIXI.Container(me.width, me.height);
            rootContanier.position.x = me.x;
            rootContanier.position.y = me.y;

            rootContanier.addChild(me.gamePanelShape());
            rootContanier.addChild(me.totalWin());

        stage.addChild(rootContanier);

    };

    this.onServerResponse = function(params){

        me.win = params.win;
        console.log(me.win);
        me.winText.visible = true;
        me.noWinText.visible = false;
    };

    addListener('serverResponse', me.onServerResponse);

    addListener('spinButtonPress', function(){
        me.win = 0;
        me.winText.visible = false;
        me.noWinText.visible = true;

    });

}
