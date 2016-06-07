var events ={
    buttonPressed:[],
    spinButtonPress:[],
    reelSpinStart:[],
    reelSpinStop:[],
    allReelsStopped:[],
    serverResponse:[],
    serverRequest:[],
    bigWinStarted:[],
    bigWinEnded:[],
    showBetline:[],
    hideBetline:[],
    hideAllBetlines:[],


};

function addListener(eventName, functionCallback){ //name of event и анонимную функцию которую подписывает
    events[eventName].push(functionCallback);
}

function fireEvent(eventName,params){
    console.error(eventName);
    for (var i=0; i < events[eventName].length; i++){
        events[eventName][i](params);
    }
}
