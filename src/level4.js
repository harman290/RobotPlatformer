BasicGame.level4 = function (game) { };

BasicGame.level4.prototype = 
{
    create: function () 
	{
// code for setting the boundaries for enemies and their movement  
	enemy3boundary = true;
	enemy4boundary = true;
	enemy5boundary = true;
	enemy6boundary = true;
// code for setting the score to zero for start of the game
	score = 0;
// code for adding the game background  
	this.add.sprite(0, 0, 'Level4Background');
// code for adding physics to the game level   
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
// code for adding physics to the game platforms  
	this.game.platforms = this.add.physicsGroup();
	this.game.platforms = this.game.add.group();
		this.game.platforms.enableBody = true;

// code for creating the platforms for the level

// code for the lower Section of the game platfroms
		var platformbottomleft = this.game.platforms.create(0, this.game.world.height - 37, 'platformbottomleft');
		platformbottomleft.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(170, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(310, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(460, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(610, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(760, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(910, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1060, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1210, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1360, this.game.world.height - 37, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottomright = this.game.platforms.create(1510, this.game.world.height - 37, 'platformbottomright');
		platformbottomright.body.immovable = true;
		
//code for the Middle and top Section of the game platforms
    var ledge = this.game.platforms.create(0, 100, 'platformtopmini');
		ledge.body.immovable = true;
    ledge = this.game.platforms.create(150, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(300, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(450, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1100, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1250, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1400, 190, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(400, 440, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(550, 440, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(700, 320, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(850, 320, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1020, 440, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1170, 440, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1550, 100, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(200, 500, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1370, 500, 'platformtopmini');
		ledge.body.immovable = true;

//code for the bottomline section of the game platforms
	var ledge = this.game.platforms.create(0, 600, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1550, 600, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(250, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(400, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(550, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(700, 725, 'platformtopmini');
		ledge.body.immovable = true;
    var ledge = this.game.platforms.create(850, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1000, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1150, 725, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1300, 725, 'platformtopmini');
		ledge.body.immovable = true;

// code for creating and spawning the player in the game 
		player = this.game.add.sprite(110, this.game.world.height - 250, 'MainPlayer');

// code for enabling the physics for the Player 
	this.game.physics.arcade.enable(player)
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

// code for adding the Player animations on movement 
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

// code for creating and spawning the enemy 3  
	enemy3 = this.game.add.sprite(500, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 3 
	this.game.physics.arcade.enable(enemy3);
		enemy3.body.gravity.y = 300;
		enemy3.enableBody = true;
// code for adding the animations on movement for enemy 3
	enemy3.animations.add('left', [0, 1], 10, true);
	enemy3.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 4 
	enemy4 = this.game.add.sprite(1400, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 4
	this.game.physics.arcade.enable(enemy4);
		enemy4.body.gravity.y = 300;
		enemy4.enableBody = true;
// code for adding the animations on movement for enemy 4
	enemy4.animations.add('left', [0, 1], 10, true);
	enemy4.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 5
	enemy5 = this.game.add.sprite(800, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 5
	this.game.physics.arcade.enable(enemy5);
		enemy5.body.gravity.y = 300;
		enemy5.enableBody = true;
// code for adding the animations on movement for enemy 5
	enemy5.animations.add('left', [0, 1], 10, true);
	enemy5.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 6
	enemy6 = this.game.add.sprite(900, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 6 
	this.game.physics.arcade.enable(enemy6);
		enemy6.body.gravity.y = 300;
		enemy6.enableBody = true;
// code for adding the animations on movement for enemy 6
	enemy6.animations.add('left', [0, 1], 10, true);
	enemy6.animations.add('right', [2, 3], 10, true);

// code for creating the crowns in the game  
    crowns = this.game.add.group();
    crowns.enableBody = true;

// code for creating 20 of these crown evenly spread apart 
    for (var i = 0; i < 20; i++)
    {
        var crown = crowns.create(i * 87, 0, 'crown');
        crown.body.gravity.y = 300;
        crown.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

// code for creating the finish flag
		Flag = this.game.add.sprite(45, 0, 'Flag');

// code for enabling the physics for the flag
	this.game.physics.arcade.enable(Flag);
	Flag.enableBody = true;
	Flag.body.gravity.y = 300;
	Flag.body.bounce.y = 0.7;

// code for adding the fake flag in the game
	FakeFlag = this.game.add.sprite(1610, 0, 'FakeFlag');
	this.game.physics.arcade.enable(FakeFlag);
	FakeFlag.enableBody = true;
	FakeFlag.body.gravity.y = 300;
	FakeFlag.body.bounce.y = 0.7;

// code for adding The Game Text for the crowns and the level name   
	scoreText = this.game.add.text(520, 15, 'CROWNS: 0', { fontSize: '32px', fill: '#aa6c39' });
	var levelname = this.game.add.text(820, 15, 'LEVEL 4 - THE TWIST', { fontSize: '32px', fill: '#71706e' });
	cursors = this.game.input.keyboard.createCursorKeys();
	},

// update function
    update: function () 
	{
//code for the assets collision configuration
//code for colliding the player, the crowns, enemies and the flag   
		var hitPlatform = 	this.game.physics.arcade.collide(player,  this.game.platforms);
							this.game.physics.arcade.collide(crowns,   this.game.platforms);
							this.game.physics.arcade.collide(enemy3, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy4, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy5, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy6, this.game.platforms);
		                    this.game.physics.arcade.collide(Flag, this.game.platforms);
		                    this.game.physics.arcade.collide(FakeFlag, this.game.platforms);
// code for the action of collison defininig what will happen
		this.physics.arcade.overlap(player, crowns, this.collectcrown,null,this);
		this.physics.arcade.overlap(player, enemy3, this.death,null,this);
		this.physics.arcade.overlap(player, enemy4, this.death, null, this);
		this.physics.arcade.overlap(player, enemy5, this.death, null, this);
		this.physics.arcade.overlap(player, enemy6, this.death, null, this);
		this.physics.arcade.overlap(Flag, player, this.levelcomplete, null, this);

// code for increasing the score when the crown is collected
		scoreText.text = 'CROWNS: ' + score;

// code for setting up of the score automatic win after 19 have been collected
		if (score == 19)
		{
			this.state.start('NextLevel5Menu');
		}

// code for setting up of the Player Movement
		player.body.velocity.x = 0;

// code for the player Left Movement
		if (cursors.left.isDown)
		{
			player.body.velocity.x = -150;
			player.animations.play('left');
		}
// code for the player Right Movement   
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = 150;
			player.animations.play('right');
		}
// code for the player Idle State
		else
		{
			player.animations.stop();
			player.frame = 4;
		}
    
// code for the Player jumping
		if (cursors.up.isDown && player.body.touching.down && hitPlatform)
		{
			player.body.velocity.y = -300;
		}


// code for the Enemy's Automatic Movement
// code for enemy automatic movement and boundary for enemy 3
		if (enemy3boundary)
		{ enemy3.body.velocity.x = -100;
		  enemy3.animations.play('left')
		  if (enemy3.x < 150) { enemy3boundary = false; }
		}
		else 
		{ enemy3.body.velocity.x = 100;
		  enemy3.animations.play('right'); 
		  if (enemy3.x > 560) { enemy3boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 4
		if (enemy4boundary)
		{ enemy4.body.velocity.x = -100;
		  enemy4.animations.play('left')
		  if (enemy4.x < 1100) { enemy4boundary = false; }
		}
		else 
		{ enemy4.body.velocity.x = 100;
		  enemy4.animations.play('right'); 
		  if (enemy4.x > 1510) { enemy4boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 5
		if (enemy5boundary) {
			enemy5.body.velocity.x = -100;
			enemy5.animations.play('left')
			if (enemy5.x < 400) { enemy5boundary = false; }
		}
		else {
			enemy5.body.velocity.x = 100;
			enemy5.animations.play('right');
			if (enemy5.x > 675) { enemy5boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 6
		if (enemy6boundary) {
			enemy6.body.velocity.x = -100;
			enemy6.animations.play('left')
			if (enemy6.x < 1020) { enemy6boundary = false; }
		}
		else {
			enemy6.body.velocity.x = 100;
			enemy6.animations.play('right');
			if (enemy6.x > 1300) { enemy6boundary = true; }
		}
	},

// code for the automatic crown deletion after pickup and the score increase
    collectcrown: function (player,crown) 
	{
    crown.destroy();
    score += 1;
    },

// code for loading the looser menu after player Death and stopping music  
	death: function () 
	{
		music.stop();
   	this.state.start('LooserMenuLevel4');
	},

// code for loading the next level menu after Player Winn and stopping music
	levelcomplete: function () 
	{
		music.stop();
   	this.state.start('NextLevel5Menu');
    }
};