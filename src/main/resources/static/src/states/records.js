Slooow.recordsState = function(game) {
}

Slooow.recordsState.prototype = {

    init : function() {
        if (game.global.DEBUG_MODE) {
            console.log("[DEBUG] Entering **RECORDS** state");
        }
        game.world.setBounds(0, 0, 1280, 720);
    },

    preload : function() {
    },

    create : function() {

        function calculateTime(time){
            let ms
            let seg
            let min
            min = parseInt(time / (60*1000))
            seg = parseInt(time / 1000 % 60)
            ms = time % 1000
            let timeString
            if(min > 0){
                timeString = min+'´ '+seg+'´´ '+ms+'ms'
            } else if (seg > 0) {
                timeString =seg+'´´ '+ms+'ms'
            } else {
                timeString = ms+'ms'
            }
            return timeString       
        }
        
        //Background
        /*
        var b = game.add.image (game.world.centerX, game.world.centerY, 'background')
		b.anchor.set (0.5, 0.5)
        b.scale.setTo (1.2,1.2)*/
        this.background = game.add.tileSprite(game.world.centerX, game.world.centerY, game.world.width, game.world.height, 'backgroundMenu')
        //this.background.height = this.game.height;
        //this.background.width = this.game.width;
        //Tints chulos:  1653685.9351650865
        //               10799539.640765665
        //               4535760.527128731   
        //this.background.tint = Math.random() * 0xffffff;
        //this.background.tint = 4535760.527128731;
		//console.log(this.background.tint)
		this.background.tileScale.set(0.4, 0.4)
        this.background.anchor.set(0.5, 0.5)

        
        
        //Boton mapa 1
		buttonMap1 = game.add.button(game.world.centerX - 400,
            game.world.centerY - 200, 'button', actionOnClickMap1, this,
            0, 0, 0)
        buttonMap1.anchor.set(0.5)
        buttonMap1.scale.setTo(0.8, 0.7)
        //Texto mapa1
		textButtonMap1 = game.add.text(game.world.centerX - 400,
            game.world.centerY - 200, game.global.nameMapRecords[1], game.global.style)
        textButtonMap1.anchor.set(0.5)
        textButtonMap1.scale.setTo(0.8,0.8)

        buttonTime1 = game.add.button(game.world.centerX +100,
            game.world.centerY -200, 'button', null, this,
            0, 0, 0)
        buttonTime1.anchor.set(0.5, 0.5)
        buttonTime1.scale.setTo(1, 0.5)
        buttonTime1.inputEnabled = false;

        if (game.global.myTimes[1] >= 1000000000 || isNaN(game.global.myTimes[1])){
            textTimeMap1 = game.add.text(game.world.centerX +100,
                game.world.centerY -200, game.global.activeLanguage.NoPlayed, game.global.style)
        } else {
            textTimeMap1 = game.add.text(game.world.centerX +100,
                game.world.centerY -200 , calculateTime(game.global.myTimes[1]), game.global.style)
        }
        textTimeMap1.anchor.set(0.5)
        textTimeMap1.scale.setTo(0.8,0.8)

        //Boton mapa 2
		buttonMap2 = game.add.button(game.world.centerX -400 ,
            game.world.centerY , 'button', actionOnClickMap2, this,
            0, 0, 0)
        buttonMap2.anchor.set(0.5)
        buttonMap2.scale.setTo(0.8, 0.7)
        //Texto mapa2
		textButtonMap2 = game.add.text(game.world.centerX -400,
            game.world.centerY , game.global.nameMapRecords[0], game.global.style)
        textButtonMap2.anchor.set(0.5)
        textButtonMap2.scale.setTo(0.8,0.8)
        buttonTime1 = game.add.button(game.world.centerX +100,
            game.world.centerY , 'button', null, this,
            0, 0, 0)
        buttonTime1.anchor.set(0.5, 0.5)
        buttonTime1.scale.setTo(1, 0.5)
        buttonTime1.inputEnabled = false;

        if (game.global.myTimes[0] >= 1000000000|| isNaN(game.global.myTimes[0])){
            textTimeMap2 = game.add.text(game.world.centerX +100,
                game.world.centerY , game.global.activeLanguage.NoPlayed, game.global.style)
        } else {
            textTimeMap2 = game.add.text(game.world.centerX +100,
                game.world.centerY , calculateTime(game.global.myTimes[0]), game.global.style)
        }
        textTimeMap2.anchor.set(0.5)
        textTimeMap2.scale.setTo(0.8,0.8)

        //Boton mapa 3
		buttonMap3 = game.add.button(game.world.centerX - 400,
            game.world.centerY + 200, 'button', actionOnClickMap3, this,
            0, 0, 0)
        buttonMap3.anchor.set(0.5)
        buttonMap3.scale.setTo(0.8, 0.7)
        //Texto mapa3
		textButtonMap3 = game.add.text(game.world.centerX - 400,
            game.world.centerY + 200, game.global.nameMapRecords[2], game.global.style)
        textButtonMap3.anchor.set(0.5)
        textButtonMap3.scale.setTo(0.8,0.8)

        buttonTime1 = game.add.button(game.world.centerX +100,
            game.world.centerY +200, 'button', null, this,
            0, 0, 0)
        buttonTime1.anchor.set(0.5, 0.5)
        buttonTime1.scale.setTo(1, 0.5)
        buttonTime1.inputEnabled = false;

        if (game.global.myTimes[2] >= 1000000000 || isNaN(game.global.myTimes[2]) ){
            textTimeMap3 = game.add.text(game.world.centerX +100,
                game.world.centerY +200, game.global.activeLanguage.NoPlayed, game.global.style)
        } else {
        textTimeMap3 = game.add.text(game.world.centerX +100 ,
            game.world.centerY +200, calculateTime(game.global.myTimes[2]), game.global.style)
        }
        textTimeMap3.anchor.set(0.5)
        textTimeMap3.scale.setTo(0.8,0.8)

/*
        var headings = ['Mapa', 'Tiempo']
        var textHeading = game.add.text(game.world.centerX - 320,
            game.world.centerY - 200, '', game.global.style);
        textHeading.anchor.set(0.5)
        textHeading.parseList(headings);

        var times = []
        if (game.global.myTimes != null){
            for (var i = 0; i< game.global.myTimes; i++){
                times.push([game.global.nameMapRecords[i], game.global.myTimes[i]])
            }
        }
        var records = game.add.text(game.world.centerX - 425,
            game.world.centerY - 160, '', game.global.style);
        records.parseList(times)    
*/


        //Boton desconectar
		buttonBack = game.add.button(50,
            40, 'button', actionOnClickBack, this,
            0, 0, 0)
        buttonBack.anchor.set(0.5)
        buttonBack.scale.setTo(0.2, 0.3)

        //Texto desconectar
		textButtonBack = game.add.text(50,
            40, game.global.activeLanguage.Back, game.global.style)
        textButtonBack.anchor.set(0.5)
        textButtonBack.scale.setTo(0.5,0.5)

        function actionOnClickMap1(){

        }

        function actionOnClickMap2(){
            
        }

        function actionOnClickMap3(){
            
        }

        function actionOnClickBack(){
            game.state.start('mainMenuState')
        }
    },

    update : function() {
        this.background.tilePosition.x+=0.5
        this.background.tilePosition.y-=0.5
    }
}