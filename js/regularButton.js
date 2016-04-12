function RegularButton(x,y,url1,url2){

    var me = this;
    this.x = x;
    this.y = y;
    this.url1 = url1;
    this.url2 = url2;

    this.state = 'up';

    this.init = function (stage){

        var upImage = PIXI.Sprite.fromImage(me.url1);
        var downImage = PIXI.Sprite.fromImage(me.url2);

        this.upImage = upImage;
        this.downImage = downImage;

        var rootContanier = new PIXI.Container();
        rootContanier.position.x = me.x;
        rootContanier.position.y = me.y;
        rootContanier.addChild(downImage);
        rootContanier.addChild(upImage);

        this.rootContanier = rootContanier;

        rootContanier.interactive = true;
        rootContanier.on('mousedown', me.onMouseDown);
        rootContanier.on('mouseup', me.onMouseUp);
        rootContanier.on('mouseover',me.onMouseOver);
        rootContanier.on('mouseout', me.onMouseOut);

        stage.addChild(rootContanier)
    }

    this.onMouseDown = function(){
        me.state = 'down';
        me.upImage.visible = false;
        me.upImage.alpha = 1;
        me.onMouseDownCallBack();
    };
    this.onMouseUp = function(){
        me.state = 'up';
        me.upImage.visible = true;
        me.upImage.alpha = 1;
        me.onMouseUpCallBack();
    };
    this.onMouseOver = function(){
        me.state = 'hover';
        me.upImage.alpha = 0;
        me.onMouseOverCallBack();
    };
    this.onMouseOut = function(){
        me.state = 'up';
        me.upImage.visible = true;
        me.upImage.alpha = 1;
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
}

// зделать дизейбл стейт, сет кол бек функция
