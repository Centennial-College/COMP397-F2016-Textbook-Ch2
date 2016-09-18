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
        // semi-transparent screen
        var screen = new createjs.Shape();
        screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0.6))
            .drawRect(0, 0, stage.canvas.width, stage.canvas.height);
        stage.addChild(screen);
        // RECTANGLE
        var rect = new createjs.Shape();
        rect.graphics.beginStroke('#000');
        rect.graphics.beginFill('#f00');
        rect.graphics.drawRect(0, 0, 150, 100);
        rect.x = rect.y = 20;
        stage.addChild(rect);
        //CIRCLE
        var circle = new createjs.Shape();
        circle.graphics.beginStroke('#000');
        circle.graphics.beginFill('#f00');
        circle.graphics.drawCircle(0, 0, 50);
        circle.x = 250;
        circle.y = 70;
        stage.addChild(circle);
    }
    window.onload = setupStage;
})();
//# sourceMappingURL=game.js.map