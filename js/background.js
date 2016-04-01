var mask = PIXI.Sprite.fromImage('image/background.png');
mask.anchor.set(1);
mask.position.x = 310;
mask.position.y = 190;

cells.mask = mask;

stage.addChild(mask);
