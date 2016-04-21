/**
 * шлет ивенты модулю бетлайнс
 */

function BetLineIndicators (){
    var me =  this;
    this.radiusUp = 3;
    this.radiusDown = 10;
    this.x = 0;
    this.y = 0;


    this.createIndicator = function(x,y,i,rootContanier){

        var indicator = PIXI.Sprite.fromImage('image/indicator.png');
        indicator.position.x = x;
        indicator.position.y = y;
        indicator.interactive = true;
        indicator.index = i;

        this.indicator = indicator;


        indicator.on('mousedown', me.onMouseDown);
        indicator.on('mouseup', me.onMouseUp);
        indicator.on('mouseover',me.onMouseOver);
        indicator.on('mouseout', me.onMouseOut);

        rootContanier.addChild(indicator);


    };

    this.onMouseDown = function(){
        me.state = 'down';
        me.indicator.visible = false;
        me.indicator.alpha = 1;
        me.onMouseDownCallBack();
    };
    this.onMouseUp = function(){
        me.state = 'up';
        me.indicator.visible = true;
        me.indicator.alpha = 1;
        me.onMouseUpCallBack();
    };
    this.onMouseOver = function(){
        me.state = 'hover';
        me.indicator.alpha = 0;
        me.onMouseOverCallBack();
    };
    this.onMouseOut = function(){
        me.state = 'up';
        me.indicator.visible = true;
        me.indicator.alpha = 1;
        me.onMouseOutCallBack();
    };

    this.onMouseDownCallBack = function(){

    };
    this.onMouseUpCallBack = function(){

    };
    this.onMouseOverCallBack = function(){

    };
    this.onMouseOutCallBack = function(){

    };

    this.init = function(stage){
        var rootContanier = new PIXI.Container();
        rootContanier.position.x = me.x;
        rootContanier.position.y = me.y;
        rootContanier.visible = true;

        var x = 30;
        var y = 20;

        console.log(CONFIG.betLines.length);

        for (var i=0; i < CONFIG.betLines.length; i++){
            y = y+130;
            console.log(y);
            me.createIndicator(x, y, i, rootContanier);
        }

        this.rootContanier = rootContanier;

        stage.addChild(rootContanier);
    };



}
