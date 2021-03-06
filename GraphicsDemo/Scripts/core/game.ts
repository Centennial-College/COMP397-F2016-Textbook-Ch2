/// <reference path="_reference.ts" />

(function () {

    const LOADER_WIDTH = 400;
    let stage: createjs.Stage, loaderBar: createjs.Shape, loadInterval;
    let percentLoaded = 0;

    function init() {
        setupStage();
        buildLoaderBar();
        startLoad();
    }

    function setupStage() {
        stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on('tick', (e) => {
            stage.update();
        });
    }

    function buildLoaderBar() {
        loaderBar = new createjs.Shape();
        loaderBar.x = loaderBar.y = 100;
        loaderBar.graphics.setStrokeStyle(2);
        loaderBar.graphics.beginStroke('#000');
        loaderBar.graphics.drawRect(0, 0, LOADER_WIDTH, 40);
        stage.addChild(loaderBar);
    }

    function updateLoaderBar() {
        loaderBar.graphics.clear();
        loaderBar.graphics.beginFill('#0f0');
        loaderBar.graphics.drawRect(0, 0, LOADER_WIDTH * percentLoaded, 40);
        loaderBar.graphics.endFill();
        loaderBar.graphics.setStrokeStyle(2);
        loaderBar.graphics.beginStroke('#000');
        loaderBar.graphics.drawRect(0, 0, LOADER_WIDTH, 40);
        loaderBar.graphics.endStroke();
    }

    function startLoad() {
        loadInterval = setInterval(updateLoad, 50);
    }

    function updateLoad() {
        percentLoaded += .005;
        updateLoaderBar();
        if (percentLoaded >= 1) {
            clearInterval(loadInterval);
            stage.removeChild(loaderBar);
        }
    }

    window.onload = init;

})();