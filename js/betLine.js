function BetLines(){

    /**
     * шлет ивенты модулю бетлайнс
     */

        var me =  this;
        this.x = 0;
        this.y = 0;


        this.createBetLine = function(x,y,i,rootContanier){

            var betline = new PIXI.Graphics();
            betline.lineStyle(7, 0xff69b4 ,0);
            console.log(y);

            betline.moveTo(x, y);
            betline.lineTo(850, y);


            this.betline = betline;
            rootContanier.addChild(betline);

        };


        this.init = function(stage){
            var rootContanier = new PIXI.Container();
            rootContanier.position.x = me.x;
            rootContanier.position.y = me.y;
            rootContanier.visible = true;

            var x = 44;
            var y = 17;


            for (var i=0; i < CONFIG.betLines.length; i++){
                y = y+130;
                console.log(y);
                me.createBetLine(x, y, i, rootContanier);
            }

            this.rootContanier = rootContanier;

            stage.addChild(rootContanier);
        };

    addListener('showBetline', function(){
        me.betline.alpha = 1;
        console.log(me.betline.alpha);
        me.betline;


    });

    addListener('hideBetline', function(){
        me.betline.alpha = 0;
    });

}

