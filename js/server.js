function Server(){
    var me = this;



    this.generateOutcome = function(){ /*создать фор */
        var response = {
            reels: [],
            betLines: [],
            win: 0,
            winType: 'none'
        };


        var reel0StopPosition = parseInt( Math.random()*CONFIG.reelStrips[0].length );
        var reel1StopPosition = parseInt( Math.random()*CONFIG.reelStrips[1].length );
        var reel2StopPosition = parseInt( Math.random()*CONFIG.reelStrips[2].length );
        var reel3StopPosition = parseInt( Math.random()*CONFIG.reelStrips[3].length );
        var reel4StopPosition = parseInt( Math.random()*CONFIG.reelStrips[4].length );
        console.log(reel1StopPosition);


        response.reels.push(reel0StopPosition);
        response.reels.push(reel1StopPosition);
        response.reels.push(reel2StopPosition);
        response.reels.push(reel3StopPosition);
        response.reels.push(reel4StopPosition);

        var winSym0 = CONFIG.reelStrips[0][reel0StopPosition];
        var winSym1 = CONFIG.reelStrips[1][reel1StopPosition];
        var winSym2 = CONFIG.reelStrips[2][reel2StopPosition];
        var winSym3 = CONFIG.reelStrips[3][reel3StopPosition];
        var winSym4 = CONFIG.reelStrips[4][reel4StopPosition];

        if (winSym0 == winSym1 && winSym0 == winSym2 && winSym0 == winSym3 && winSym0 == winSym4){
        me.response.win += 2;
        }

        if (me.response.win > 200){
            me.response.winType = 'big win'
        }

        return response;

    };

    /*this.calcSameElems() */

    this.request = function(){



        console.log(me.generateOutcome());

        me.response({
            reels: [1,3,4,2,1],
            win: 200,
            winType : 'Big Win',
            betLine: [0]
        });

    };

    this.response = function(response){

        fireEvent('serverResponse', response);

    }

    addListener('serverRequest', me.request);
}
