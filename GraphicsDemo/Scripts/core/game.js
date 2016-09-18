/// <reference path="_reference.ts" />
(function () {
    var stage = new createjs.Stage(document.getElementById('canvas'));
    var direction = 1;
    var speed = 10;
    var circle = new createjs.Shape();
    circle.graphics.beginStroke('#000');
    circle.graphics.beginFill('#fff000');
    circle.graphics.drawCircle(0, 0, 50);
    circle.radius = 50;
    circle.x = 100;
    circle.y = 300;
    stage.addChild(circle);
    createjs.Ticker.on('tick', gameLoop);
    createjs.Ticker.framerate = 60;
    function updateCircle() {
        var nextX = circle.x + (speed * direction);
        if (nextX > stage.canvas.width - circle.radius) {
            nextX = stage.canvas.width - circle.radius;
            direction *= -1;
        }
        else if (nextX < circle.radius) {
            nextX = circle.radius;
            direction *= -1;
        }
        circle.nextX = nextX;
    }
    function renderCircle() {
        circle.x = circle.nextX;
    }
    function gameLoop(e) {
        if (!e.paused) {
            updateCircle();
            renderCircle();
            stage.update();
        }
    }
})();
//# sourceMappingURL=game.js.map