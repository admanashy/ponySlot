var spinButton = PIXI.Sprite.fromImage('image/button.png');
spinButton.position.set(400, 610);
spinButton.height = 100;
spinButton.width = 100;
spinButton.interactive = true;

spinButton.on('mousedown', function(){
    fireEvent('spinButtonPress');
});

stage.addChild(spinButton);

function SButton(x, y, url){
    var me = this;

    me.x= x;
    me.y = y;
    me.path = url;

    //метод инит, будет принемать контейнер, будет создавать спрайт, задавать позицию
    this.init = function(mainStage){

        var newButton = PIXI.Sprite.fromImage(me.path);
        newButton.position.set(me.x, me.y);
        newButton.height = 100;
        newButton.width = 100;
        newButton.interactive = true;
        newButton.state = 'up';

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

    this.onClick = function (state){
        if (state !== 'disabled'){
            me.onClickCallBack();
            console.log('true!!!')
        }
    };

    this.onHover = function (state){
        if (state == 'down'){
            console.log('true!!!')
        }
    };

    this.onClickUp = function (state){
        if (state == 'down'){
            console.log('true!!!')
        }
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
