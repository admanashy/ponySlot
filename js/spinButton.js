function SButton(x, y, url) {
    var me = this;

    this.x = x;
    this.y = y;
    this.path = url;
    this.state = 'up';

    //метод инит, будет принемать контейнер, будет создавать спрайт, задавать позицию
    this.init = function (mainStage) {

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

    this.setState = function () {

    };

    this.onClickCallBack = function () {

    };

    this.update = function () {
        if (me.state == 'down') {
            me.path = 'image/buttonDown.png';
        }

        if (me.state == 'hover') {
            me.height = me.height*1.5;

        }

    };

    this.onClick = function () {
        if (me.state !== 'down') {
            me.state = 'down';
            fireEvent('buttonPressed');
            me.update();
        }
    };

    this.onHover = function () {
        if (me.state !== 'hover') {
            me.state = 'hover';
            me.update();
        }
    };

    this.onClickUp = function () {
        if (me.state !== 'up') {
            me.state = 'up';
            me.update();
        }
    };

    this.onDisabled = function (state) {
        if (state == 'down') {
            console.log('true!!!')
        }
    addListener('allReelsStopped', me.onClickUp)

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
