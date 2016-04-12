function Reel(reelNum, reelStrip, x) {
    var me = this;
    this.reelNum = reelNum;
    this.symbolHieght = 155;
    this.reelStripHeith = reelStrip.length * me.symbolHieght;
    this.reelStrip = reelStrip;
    this.x = x;
    this.y = -me.reelStripHeith;
    this.rootContainer = new PIXI.Container();

    this.stopPosition = 0;
    this.spinSpeed = 50;

    this.movingState = 'stopped';


    for (var j = 0; j < reelStrip.length; j++) {
        var symbol = PIXI.Sprite.fromImage('image/' + me.reelStrip[j] + '.png');
        var symbol1 = PIXI.Sprite.fromImage('image/' + me.reelStrip[j] + '.png');

        symbol.y = me.symbolHieght * j;
        symbol1.y = me.symbolHieght * j + me.reelStripHeith;
        me.rootContainer.addChild(symbol);
        me.rootContainer.addChild(symbol1);
    }

    me.rootContainer.y = me.y;
    me.rootContainer.x = me.x;



    this.getRoot = function () {
        return me.rootContainer;
    };

    this.update = function () {
        var lastStep;

        if (me.movingState == 'stopped') {
            return true;
        }


        if (me.movingState == 'stopping'){
            if (me.y < me.stopPosition) {
                lastStep = me.stopPosition - me.y;
                me.y += lastStep;
                me.movingState = 'stopped';
                if (me.reelNum == 4){
                    fireEvent('allReelsStopped');
                                    }
            } else {
                me.y += me.spinSpeed;
            }


        } else if (me.movingState == 'moving'){
            me.y += me.spinSpeed;

        }


        if (me.y >= 0) {
            me.y = -me.reelStripHeith;
        }



        me.rootContainer.y = me.y;
        me.rootContainer.x = me.x;

    };

    addListener('reelSpinStart', function (reelNum) {
        if (me.reelNum == reelNum) {
            me.movingState = 'moving';

        }
    });

    addListener('reelSpinStop', function (params) {
        if (me.reelNum == params.reelNum) {
            me.movingState = 'stopping';
            me.stopPosition = - params.stopSymNum*me.symbolHieght;
        }
    });

 /*   addListener('reelSpinStop', function () {
        if (me.reelNum == 4 && me.movingState == 'stopped') {
            fireEvent('allReelsStopped');
        }
    });
*/
}



