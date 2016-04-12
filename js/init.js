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


var reelStrip0 = ['sym1', 'sym3', 'sym8', 'sym8', 'sym4', 'sym8', 'sym6', 'sym2', 'sym7', 'sym3', 'sym8', 'sym5', 'sym5', 'sym1', 'sym4', 'sym1', 'sym5', 'sym7', 'sym2', 'sym3', 'sym1', 'sym7', 'sym3', 'sym2', 'sym7', 'sym4', 'sym6', 'sym3', 'sym2', 'sym4', 'sym6', 'sym6', 'sym2'];
var reelStrip1 = ['sym3', 'sym5', 'sym6', 'sym5', 'sym4', 'sym6', 'sym3', 'sym7', 'sym2', 'sym1', 'sym6', 'sym1', 'sym4', 'sym7', 'sym8', 'sym8', 'sym3', 'sym2', 'sym5', 'sym8', 'sym1', 'sym2', 'sym2', 'sym4', 'sym3', 'sym6', 'sym3', 'sym7', 'sym1', 'sym4', 'sym8', 'sym2', 'sym7'];
var reelStrip2 = ['sym5', 'sym1', 'sym5', 'sym8', 'sym2', 'sym3', 'sym6', 'sym3', 'sym4', 'sym1', 'sym1', 'sym2', 'sym4', 'sym8', 'sym7', 'sym6', 'sym6', 'sym3', 'sym2', 'sym3', 'sym4', 'sym7', 'sym2', 'sym5', 'sym2', 'sym4', 'sym7', 'sym7', 'sym6', 'sym8', 'sym3', 'sym8', 'sym1'];
var reelStrip3 = ['sym4', 'sym3', 'sym6', 'sym3', 'sym7', 'sym1', 'sym4', 'sym8', 'sym2', 'sym3', 'sym5', 'sym6', 'sym5', 'sym4', 'sym6', 'sym3', 'sym7', 'sym2', 'sym1', 'sym6', 'sym1', 'sym4', 'sym7', 'sym8', 'sym8', 'sym3', 'sym2', 'sym5', 'sym8', 'sym1', 'sym2', 'sym2', 'sym7'];
var reelStrip4 = ['sym1', 'sym2', 'sym4', 'sym8', 'sym7', 'sym6', 'sym6', 'sym3', 'sym2','sym5', 'sym1', 'sym5', 'sym8', 'sym2', 'sym3', 'sym6', 'sym3', 'sym4', 'sym1', 'sym3', 'sym4', 'sym7', 'sym2', 'sym5', 'sym2', 'sym4', 'sym7', 'sym7', 'sym6', 'sym8', 'sym3', 'sym8', 'sym1'];


var reel0 = new Reel(0, reelStrip0, 60);
var reel1 = new Reel(1, reelStrip1, 220);
var reel2 = new Reel(2, reelStrip2, 380);
var reel3 = new Reel(3, reelStrip3, 540);
var reel4 = new Reel(4, reelStrip4, 700);

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
