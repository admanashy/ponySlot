    var serverConfig = {
        betLines:[[0,0,0],[1,1,1],[2,2,2]]
    };


function Server(){
    var me = this;



    this.generateOutcome = function(){ /*создать фор */
        var response = {
            reels: [],
            betLines: [],
            win: 0,
            winType: 'none'
        };

        var winSymbols = [];

        response.reels = [21,3,18,12,3]

        /*for (var i = 0; i < CONFIG.reelStrips.length; i++){
            response.reels.push(parseInt( Math.random()*CONFIG.reelStrips[i].length ))
        }*/

        for (i = 0; i < CONFIG.reelStrips.length; i++){
            winSymbols.push(CONFIG.reelStrips[i][response.reels[i]])
        }

        response.win = me.calcSameElems(winSymbols);

        if (response.win >= 500){
            response.winType = 'big win'
        } else if (response.win < 500 && response.win >= 300){
            response.winType = 'large win'
        } else if (response.win < 300 && response.win >= 100){
            response.winType = 'large win'
        } else if (response.win < 100 && response.win >= 50){
            response.winType = 'medium win'
        } else if (response.win < 50 && response.win > 0){
            response.winType = 'small win'
        }

       return response;

    };


    this.calcSameElems = function(winSymbols){
        var winAmount  = 0;
        var winMultiplier = 1;
        for (var i = 1; winSymbols[i] == winSymbols[i-1] && i < winSymbols.length; i++){
            winMultiplier++
        }

        if (i>2)
        {
            switch(winSymbols[0]) {
                case 'sym1': winAmount = 100;
                    break;
                case 'sym2': winAmount = 50;
                    break;
                case 'sym3': winAmount = 30;
                    break;
                case 'sym4': winAmount = 30;
                    break;
                case 'sym5': winAmount = 20;
                    break;
                case 'sym6': winAmount = 20;
                    break;
                case 'sym7': winAmount = 10;
                    break;
                case 'sym8': winAmount = 5;
                    break;
                default:console.log('Error');
                    break
            }
        }

        return winAmount*i
    };

    this.request = function(){

        me.response(me.generateOutcome());
        console.log(me.response);

    };

    this.response = function(response){
        setTimeout(function(){
            fireEvent('serverResponse', response);
        }, 200);

    };

    addListener('serverRequest', me.request);
}
