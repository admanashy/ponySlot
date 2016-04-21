var renderer = PIXI.autoDetectRenderer(1280, 720);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

var reels = new PIXI.Container();
reels.position.y = 55;

var background = PIXI.Sprite.fromImage('image/background.png');
background.position.set(0, 0);
stage.addChild(background);

var spin = new SpinModule();



var reel0 = new Reel(0, CONFIG.reelStrips[0], 60);
var reel1 = new Reel(1, CONFIG.reelStrips[1], 220);
var reel2 = new Reel(2, CONFIG.reelStrips[2], 380);
var reel3 = new Reel(3, CONFIG.reelStrips[3], 540);
var reel4 = new Reel(4, CONFIG.reelStrips[4], 700);

var server = new Server ();



reels.addChild(reel0.getRoot());
reels.addChild(reel1.getRoot());
reels.addChild(reel2.getRoot());
reels.addChild(reel3.getRoot());
reels.addChild(reel4.getRoot());

stage.addChild(reels);

var thing = new PIXI.Graphics();

thing.position.x = 50;
thing.position.y = 50;
thing.beginFill();
thing.drawRect(0,0,1000,465);
thing.endFill();

stage.addChild(thing);
reels.mask = thing;



var spinButton = new RegularButton(400,550,'image/button.png','image/buttonDown.png');
spinButton.init(stage);

spinButton.onMouseDownCallBack = function(){
    fireEvent('spinButtonPress');
};


var gamePanel = new GamePanel();
gamePanel.init(stage);

var bigWin  = new BigWin();
bigWin.init(stage);

var betLineIndicators  = new BetLineIndicators();
betLineIndicators.init(stage);

betLineIndicators.onMouseDownCallBack = function(){
    fireEvent('spinButtonPress');
};


