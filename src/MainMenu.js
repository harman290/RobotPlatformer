BasicGame.MainMenu = function (game) {
};

BasicGame.MainMenu.prototype = {


	create: function () 
	{
// code for the Main Menu Creation

//code for the background image
		this.add.sprite(0, 0, 'MainMenuBackground');
//code for the game ttile 
		TitleText = this.game.add.text(600, 50, 'ROBOT PLATFORMER', { fontSize: '55px', fill: '#aaa9ad' });
// code for the page title  
		otherText = this.game.add.text(740, 360, 'MAIN MENU', { fontSize: '40px', fill: '#d7be69' });
// code for the button text 
		otherText = this.game.add.text(530, 700, 'CLICK ON THE START BUTTON TO START THE GAME', { fontSize: '25px', fill: '#aaa9ad' });
// code for the buttton
		button = this.game.add.button(750, 760, 'startbutton', this.startGame, this, 2, 1);
// code for the player sprites on the right and left 
		this.add.sprite(250, 200, 'PlayerLeft');
		this.add.sprite(1170, 200, 'PlayerRight');
	},

	update: function () 
	{
	},

// code for the button definition
	startGame: function () 
	{
// code for starting the audio
		music = this.add.audio('BM');
		music.play();
//code for staring the level
		this.state.start('level1');
	}
};