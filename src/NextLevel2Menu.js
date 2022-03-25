BasicGame.NextLevel2Menu = function (game) { };

BasicGame.NextLevel2Menu.prototype = {
		
	create: function () 
	{
// code for the next level Menu Creation

// code for the background image
		this.add.sprite(0, 0, 'NextLevelMenuBackground');
// code for the game ttile 
		TitleText = this.game.add.text(560, 50, 'ROBOT PLATFORMER', { fontSize: '55px', fill: '#8080ff' });
// code for the page title 
        otherText = this.game.add.text(500, 360, 'WELCOME TO THE SPIRAL GALAXY', { fontSize: '40px', fill: '#d7be69' });
// code for the button text  
		otherText = this.game.add.text(575, 700, 'CLICK ON THE BUTTON TO START LEVEL 2', { fontSize: '25px', fill: '#aaa9ad' });
// code for the buttton
		button = this.game.add.button(750, 760, 'nextlevelbutton', this.startGame, this, 2, 1);
		button = this.game.add.button(50, 48, 'level2button', this.donothing, this, 2, 1);
		button = this.game.add.button(1450, 48, 'level2button', this.donothing, this, 2, 1);
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
// code for staring the level   
		this.state.start('level2');
	}
};