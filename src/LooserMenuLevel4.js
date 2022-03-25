BasicGame.LooserMenuLevel4 = function (game) { };

BasicGame.LooserMenuLevel4.prototype = {

	create: function ()
	{
// code for the Looser Menu Creation

//code for the background image
        this.add.sprite(0, 0, 'LooserMenuBackground');
//code for the game ttile 
		TitleText = this.game.add.text(600, 50, 'ROBOT PLATFORMER', { fontSize: '55px', fill: '#000000' });
// code for the page title 
		otherText = this.game.add.text(735, 220, 'YOU HAVE DIED', { fontSize: '40px', fill: '#000000' });
// code for the loosing text 
		otherText = this.game.add.text(850, 610, 'L4', { fontSize: '25px', fill: '#000000' });
		otherText = this.game.add.text(760, 700, 'The Robot is SAD', { fontSize: '25px', fill: '#000000' });
// code for the buttton
		button = this.game.add.button(760, 765, 'restartlevelbutton', this.startGame, this, 2, 1);
	},

	update: function () {
	},

// code for the button definition
	startGame: function () {
// code for starting the audio
		music = this.add.audio('BM');
		music.play();
//code for staring the level  
		this.state.start('level4');
	}
};