function SpinModule(){
    var me = this;



    this.startAllReels = function(){ //зделать фором

        for (var i = 0; i<=4; i++){
            me.startReel(i, i*500);
        };

        setTimeout(me.stopAllReels, 10000)


    };

    this.startReel= function(reelNum, timeOut){

        setTimeout(function(){
            fireEvent('reelSpinStart', reelNum);
        },timeOut)

    }

    this.stopAllReels = function(){ //зделать фором

        for (var i = 0; i<=4; i++){
            me.stopReel(i, i*500);

        }

        if (i==4){
            fireEvent('allReelsStopped');
        }


    };

    this.stopReel= function(reelNum, timeOut){

        setTimeout(function(){
            fireEvent('reelSpinStop', {reelNum: reelNum, stopSymNum: 0});
            },
                timeOut);

    }

    addListener('spinButtonPress', me.startAllReels);


}

//должны останавливаться на 0 позициию как только рилы остановились рилы вызывают событие которое запускало олл рилс стоппед