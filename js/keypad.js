var spinButton = PIXI.Sprite.fromImage('image/button.png');
spinButton.position.set(400, 580);
spinButton.height = 100;
spinButton.width = 100;
spinButton.interactive = true;

spinButton.on('mousedown', function(){
    fireEvent('spinButtonPress');
});

stage.addChild(spinButton);

