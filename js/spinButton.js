function SButton(x, y, url){
    var me = this;

    this.x= x;
    this.y = y;
    this.path = url;
    this.state = 'up';

    //метод инит, будет принемать контейнер, будет создавать спрайт, задавать позицию
    this.init = function(mainStage){

        var newButton = PIXI.Sprite.fromImage(me.path);
        newButton.position.set(me.x, me.y);
        newButton.height = 100;
        newButton.width = 100;
        newButton.interactive = true;

        newButton.on('mousedown', me.onClick);
        newButton.on('mousehover', me.onHover);
        newButton.on('mouseup', me.onClickUp);
        newButton.on('disabled', me.onDisabled);

        mainStage.addChild(newButton);


    };

    this.setState = function(){

    };

    this.onClickCallBack = function(){

    };

    this.onClick = function (){
        if (me.state !== 'down'){
            me.state = 'down';
            fireEvent('buttonPressed');
            console.log(me.state)
            newButton = PIXI.Sprite.fromImage(me.path);
        };
    };

    this.onHover = function (state) {
    }

    this.onClickUp = function (state){

    };

    this.onDisabled = function (state){
        if (state == 'down'){
            console.log('true!!!')
        }
    };



    //newButton.on('mousedown', me.onClick);
    //если фарим ивент кнопки передаем айдиху кнопки

    /*this.state = up, hover, down, disabled
    position x y
    this.update */

    /*onClick: function // проверять будет не задизейблена ли кнопк
    if state!= 'disabled'{
        fireEvent();
    }

    setSate - выставлять новое состояние*/
}
