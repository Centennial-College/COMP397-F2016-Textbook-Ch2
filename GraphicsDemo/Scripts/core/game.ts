/// <reference path="_reference.ts" />

(function () {
    let canvas: HTMLElement = document.getElementById('canvas');
    let stage: createjs.Stage;

    function setupStage(): void {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', gameLoop);

        // semi-transparent screen
        let screen = new createjs.Shape()
        screen.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 0.6))
            .drawRect(0, 0, stage.canvas.width, stage.canvas.height)
        stage.addChild(screen)

        let g = new createjs.Graphics()
            .beginStroke('#000')
            .beginFill('#f00')
            .drawRect(0, 0, 100, 100);

        let square: createjs.Shape = new createjs.Shape(g);
        square.x = 150;
        square.y = 100;
        stage.addChild(square)
        
        createjs.Tween.get(square).to({ rotation: 360 }, 3000);
    }

    function gameLoop(): void {
        main();
        stage.update();
    }

    function main(): void {
        
    }

    window.onload = setupStage;
})();