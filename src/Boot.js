var BasicGame = {};

BasicGame.Boot = function (game) { };

BasicGame.Boot.prototype = {

    init: function () {
// code for the game input pointers set to 1 
		this.input.maxPointers = 1;

// code for pausing the game automaticly when not in foucs
        this.stage.disableVisibilityChange = true;

// code for game desktop configuration or else mobile/other view configuration
        if (this.game.device.desktop)
        {
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
// code for defining the game size not lower than 500x300 and not higher than 1700x900"
			this.scale.setMinMax(850, 450, 1700, 900);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

// code for the game Objects definition and loading in the cache for gameplay
	preload: function () {

//code for defining the variables for use in all levels
		var startbutton;
		var closebutton;
		var menubutton;
        var score;
        var scoreText;
        var platforms;
        var crowns;
		var Flag;
		var Flagfake;
        var cursors;
		var aix;
		var MainPlayer;
		var acid;
		var enemy1;
		var enemy2;
		var enemy3;
		var enemy4;
		var enemy5;
		var enemy6;
		var enemy7;
		var acidenemy1;
		var acidenemy2;
		var acidenemy3;
		var acidenemy4;
		var enemyflag;
		var enemyboss;
		var enemy1boundary;
		var enemy2boundary;
		var enemy3boundary;
		var enemy4boundary;
		var enemy5boundary;
		var enemy6boundary;
		var enemy7boundary;
		var acidenemy1boundary;
		var acidenemy2boundary;
		var acidenemy3boundary;
		var acidenemy4boundary;
		var enemybossboundary;
		var enemyflagboundary;
		var BackgroundMusic;

// code for adding and loading all of the assets with definintion
		this.load.image('MainMenuBackground', 'assets/BackgroundMainMenu.png');
		this.load.image('WinnerMenuBackground', 'assets/BackgroundWinnerMenu.png');
		this.load.image('LooserMenuBackground', 'assets/BackgroundLooserMenu.png');
		this.load.image('NextLevelMenuBackground', 'assets/BackgroundNextLevel.png');
		this.load.image('Level1Background', 'assets/BackgroundLevel1.png');
		this.load.image('Level2Background', 'assets/BackgroundLevel2.png');
		this.load.image('Level3Background', 'assets/BackgroundLevel3.png');
		this.load.image('Level4Background', 'assets/BackgroundLevel4.png');
		this.load.image('Level5Background', 'assets/BackgroundLevel5.png');
		this.load.spritesheet('startbutton', 'assets/buttonstart.png', 193, 71);
		this.load.spritesheet('closebutton', 'assets/buttonclose.png', 193, 71);
		this.load.spritesheet('menubutton', 'assets/buttonmenu.png', 193, 71);
		this.load.spritesheet('nextlevelbutton', 'assets/buttonnextlevel.png', 193, 71);
		this.load.spritesheet('restartlevelbutton', 'assets/buttonrestartlevel.png', 193, 71);
		this.load.spritesheet('level1button', 'assets/buttonlevel1.png', 193, 71);
		this.load.spritesheet('level2button', 'assets/buttonlevel2.png', 193, 71);
		this.load.spritesheet('level3button', 'assets/buttonlevel3.png', 193, 71);
		this.load.spritesheet('level4button', 'assets/buttonlevel4.png', 193, 71);
		this.load.spritesheet('level5button', 'assets/buttonlevel5.png', 193, 71);
		this.load.image('platformbottomleft', 'assets/platformbottomleft.png');
		this.load.image('platformbottommiddle', 'assets/platformbottommiddle.png');
		this.load.image('platformbottomright', 'assets/platformbottomright.png');
		this.load.image('platformtopleft', 'assets/platformtopleft.png');
		this.load.image('platformtopmiddle', 'assets/platformtopmiddle.png');
		this.load.image('platformtopright', 'assets/platformtopright.png');
		this.load.image('platformtop', 'assets/platformtop.png');
		this.load.image('platformtopmini', 'assets/platformtopmini.png');
		this.load.spritesheet('PlayerLeft', 'assets/Playerleft.png', 275, 470);
		this.load.spritesheet('PlayerRight', 'assets/PlayerRight.png', 275, 470);
		this.load.spritesheet('MainPlayer', 'assets/MainPlayer.png', 32, 48);
		this.load.spritesheet('Enemy', 'assets/Enemy.png', 32, 32, 4);
		this.load.spritesheet('Enemyboss', 'assets/Enemyboss.png', 96, 150, 4);
		this.load.image('acid', 'assets/obstructionacid.png');
		this.load.image('crown', 'assets/crown.png');
		this.load.image('Flag', 'assets/Flag.png');
		this.load.image('FakeFlag', 'assets/Flagfake.png');
		this.load.audio('BM', 'assets/BackgroundMusic.mp3')
	},
//  code for starting the game 
    create: function () {
        this.state.start('MainMenu');
    }
};