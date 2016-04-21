function SpinModule(){
    var me = this;

    this.lastResponse = {};

    this.startAllReels = function(){ //зделать фором


        for (var i = 0; i<=4; i++){
            me.startReel(i, i*500);
        }

        fireEvent('serverRequest', {action:'spin'});

        setTimeout(me.stopAllReels, 5000)


    };

    this.startReel= function(reelNum, timeOut){

        setTimeout(function(){
            fireEvent('reelSpinStart', reelNum);
        },timeOut)

    };

    this.stopAllReels = function(){ //зделать фором

        for (var i = 0; i<=4; i++){
            me.stopReel(i, i*500);

        }

    };

    this.stopReel= function(reelNum, timeOut){

        setTimeout(function(){
            fireEvent('reelSpinStop', {reelNum: reelNum, stopSymNum: me.lastResponse.reels[reelNum]});
            },
                timeOut);

    };


    this.onServerResponse = function(response){
        console.log(response);

        me.lastResponse = response;
    };

    addListener('serverResponse', me.onServerResponse);
    addListener('buttonPressed', me.startAllReels);
    addListener('spinButtonPress', me.startAllReels);


}


//должны останавливаться на 0 позициию как только рилы остановились рилы вызывают событие которое запускало олл рилс стоппед