BasicGame.WinnerMenu = function (game) { };

BasicGame.WinnerMenu.prototype = {

	create: function ()
	{
// code for the Winner Menu Creation

//code for the background image
		this.add.sprite(0, 0, 'WinnerMenuBackground');
//code for the game ttile 
		TitleText = this.game.add.text(600, 50, 'ROBOT PLATFORMER', { fontSize: '55px', fill: '#ffd700' });
// code for the page title  
		otherText = this.game.add.text(660, 220, 'YOU ARE A WINNER!!!', { fontSize: '40px', fill: '#d7be69' });
// code for the winning text 
		otherText = this.game.add.text(630, 610, 'You Have Succesfully Completed The Game', { fontSize: '25px', fill: '#aaa9ad' });
		otherText = this.game.add.text(685, 700, 'The Robot is Happy to be Home :)', { fontSize: '25px', fill: '#ffd700' });
// code for the butttons
		button = this.game.add.button(630, 765, 'menubutton', this.startGame, this, 2, 1);
		button = this.game.add.button(950, 765, 'closebutton', this.startGame, this, 2, 1);
	},

	update: function ()
	{
	},

// code for the button definition
	startGame: function () {
//code for staring the main menu
		this.state.start('MainMenu');
	}
};