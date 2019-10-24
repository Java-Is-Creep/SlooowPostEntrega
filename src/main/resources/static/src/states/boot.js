var Slooow = {}

Slooow.Params = {
	baseWidth: 1280,
	baseHeight: 720,
	minPadding: 0,
	horizontalMargin: 0,
	verticalMargin: 0
};

Slooow.bootState = function (game) {}

Slooow.bootState.prototype = {

	init: function () {
		if (game.global.DEBUG_MODE) {
			console.log("[DEBUG] Entering **BOOT** state");
		}
		// Modo de Re-escalado = SHOW ALL --> Se mantienen las proporciones para mostrar en pantalla
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// Los bordes generados por la pantalla se dividen entre ambos lados
		this.scale.pageAlignVertically = true;
		this.scale.pageAlignHorizontally = true;
	},

	preload: function () {
		this.game.add.plugin(PhaserInput.Plugin)
		this.game.renderer.renderSession.roundPixels = true
		this.time.desiredFps = game.global.FPS
		game.load.spritesheet ('loading', './assets/img/bg/loadingSpritesheet.png', 600, 337.5, 8)
	},

	create: function () {
		game.state.start('preloadState')
	},

	// Se ejecuta siempre hasta que se consigue conexion, en ese caso, pasa a preload (escena)
	update : function() {
		//if (typeof game.global.socket !== 'undefined') {
		//game.state.start('preloadState')
		//}
	}
}