/// <reference path="_reference.ts" />

(function () {
    let canvas: HTMLElement = document.getElementById('canvas');
    let stage: createjs.Stage;

    function setupStage(): void {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', gameLoop);
    }

    function gameLoop(): void {
        main();
        stage.update();
    }

    function main(): void {
        // semi-transparent screen
        let screen = new createjs.Shape()
        screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0.6))
            .drawRect(0, 0, stage.canvas.width, stage.canvas.height)
        stage.addChild(screen)

        // RECTANGLE
        let rect = new createjs.Shape()
        rect.graphics.beginStroke('#000')
        rect.graphics.beginFill('#f00')
        rect.graphics.drawRect(0, 0, 150, 100)
        rect.x = rect.y = 20;
        stage.addChild(rect)

        //CIRCLE
        let circle = new createjs.Shape()
        circle.graphics.beginStroke('#000')
        circle.graphics.beginFill('#f00')
        circle.graphics.drawCircle(0, 0, 50)
        circle.x = 250
        circle.y = 70
        stage.addChild(circle)

        //STAR
        let poly = new createjs.Shape();
        poly.graphics.beginStroke('#000');
        poly.graphics.beginFill('#90ABC2');
        poly.graphics.drawPolyStar(0, 0, 60, 6, 0.6, 20);
        poly.x = 400;
        poly.y = 70
        stage.addChild(poly)

        //TRIANGLE
        let tri = new createjs.Shape();
        tri.graphics.beginStroke('#000');
        tri.graphics.beginFill('#0f0')
        tri.graphics.moveTo(50, 0)
            .lineTo(0, 100)
            .lineTo(100, 100)
            .lineTo(50, 0);
        tri.x = 20
        tri.y = 150
        stage.addChild(tri)

        //ROUNDED RECTANGLE
        let roundedRectangle = new createjs.Shape()
        roundedRectangle.graphics.beginStroke('#000')
        roundedRectangle.graphics.beginFill('#f7d0d1')
        roundedRectangle.graphics.drawRoundRect(0, 0, 400, 100, 10)
        roundedRectangle.x = roundedRectangle.y = 150
        stage.addChild(roundedRectangle)

    }

    window.onload = setupStage;
})();