/// <reference path="_reference.ts" />
(function () {
    var canvas = document.getElementById('canvas');
    var stage;
    function setupStage() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', gameLoop);
    }
    function gameLoop() {
        main();
        stage.update();
    }
    function main() {
        var g = new createjs.Graphics();
        g.beginStroke('#000');
        g.beginFill('#ff0000');
        g.drawRect(0, 0, 100, 100);
        var square = new createjs.Shape(g);
        square.x = square.y = 100;
        stage.addChild(square);
        var screen = new createjs.Shape();
        screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0.6));
        screen.graphics.drawRect(0, 0, stage.canvas.width, stage.canvas.height);
        stage.addChild(screen);
    }
    window.onload = setupStage;
})();
//# sourceMappingURL=game.js.map