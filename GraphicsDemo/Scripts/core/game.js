/// <reference path="_reference.ts" />
(function () {
    var canvas = document.getElementById('canvas');
    var stage;
    function setupStage() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', gameLoop);
        // semi-transparent screen
        var screen = new createjs.Shape();
        screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0.6))
            .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
        stage.addChild(screen);
        var g = new createjs.Graphics()
            .beginStroke('#000')
            .beginFill('#f00')
            .drawRect(0, 0, 100, 100);
        var square = new createjs.Shape(g);
        square.regX = square.regY = 50;
        square.x = stage.canvas.width / 2;
        square.y = stage.canvas.height / 2;
        stage.addChild(square);
        createjs.Tween.get(square).to({ rotation: 360 }, 3000);
    }
    function gameLoop() {
        main();
        stage.update();
    }
    function main() {
    }
    window.onload = setupStage;
})();
//# sourceMappingURL=game.js.map