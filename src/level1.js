BasicGame.level1 = function (game) { };

BasicGame.level1.prototype = 
{
    create: function () 
	{
// code for setting the boundaries for enemies and their movement   
	enemy1boundary = true;
	enemy2boundary = true;
// code for setting the score to zero for start of the game
	score = 0;
// code for adding the game background
	this.add.sprite(0, 0, 'Level1Background');
// code for adding physics to the game level  
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
// code for adding physics to the game platforms 
	this.game.platforms = this.add.physicsGroup();
	this.game.platforms = this.game.add.group();
		this.game.platforms.enableBody = true;

// code for creating the platforms for the level

// code for the lower Section of the game platfroms
		var platformbottomleft = this.game.platforms.create(0, this.game.world.height - 150, 'platformbottomleft');
		platformbottomleft.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(170, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(310, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(460, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(610, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(760, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(910, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1060, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1210, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1360, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottomright = this.game.platforms.create(1510, this.game.world.height - 150, 'platformbottomright');
		platformbottomright.body.immovable = true;
		
//code for the Middle and top Section of the game platforms 
    var ledge = this.game.platforms.create(0, 75, 'platformtop');
		ledge.body.immovable = true;
    ledge = this.game.platforms.create(170, 170, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(320, 170, 'platformtopmiddle');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(470, 170, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(620, 300, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(770, 300, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(920, 450, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1070, 450, 'platformtopmiddle');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1220, 450, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1400, 600, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1550, 600, 'platformtopright');
		ledge.body.immovable = true;

// code for creating and spawning the player in the game 
		player = this.game.add.sprite(110, this.game.world.height - 600, 'MainPlayer');

// code for enabling the physics for the Player
	this.game.physics.arcade.enable(player)
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

// code for adding the Player animations on movement 
	player.animations.add('left', [0, 1, 2, 3], 10, true);
	player.animations.add('right', [5, 6, 7, 8], 10, true);

// code for creating and spawning the enemy 1 
	enemy1 = this.game.add.sprite(400, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 1 
	this.game.physics.arcade.enable(enemy1);
		enemy1.body.gravity.y = 300;
		enemy1.enableBody = true;
// code for adding the animations on movement for enemy 1
	enemy1.animations.add('left', [0, 1], 10, true);
	enemy1.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 2
	enemy2 = this.game.add.sprite(1300, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 2
	this.game.physics.arcade.enable(enemy2);
		enemy2.body.gravity.y = 300;
		enemy2.enableBody = true;
// code for adding the animations on movement for enemy 2
	enemy2.animations.add('left', [0, 1], 10, true);
		enemy2.animations.add('right', [2, 3], 10, true);


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
		Flag = this.game.add.sprite(40, 0, 'Flag');

// code for enabling the physics for the flag
	this.game.physics.arcade.enable(Flag);
	Flag.enableBody = true;
	Flag.body.gravity.y = 300;
	Flag.body.bounce.y = 0.7;

// code for adding The Game Text for the crowns and the level name
	scoreText = this.game.add.text(520, 15, 'CROWNS: 0', { fontSize: '32px', fill: '#ffd700' });
	var levelname = this.game.add.text(820, 15, 'LEVEL 1 - THE BEGINING', { fontSize: '32px', fill: '#aaa9ad' });
	cursors = this.game.input.keyboard.createCursorKeys();
	},

// update function
    update: function () 
	{
//code for the assets collision configuration
//code for colliding the player, the crowns, enemies and the flag
		var hitPlatform = 	this.game.physics.arcade.collide(player,  this.game.platforms);
							this.game.physics.arcade.collide(crowns,   this.game.platforms);
							this.game.physics.arcade.collide(enemy1, this.game.platforms);
							this.game.physics.arcade.collide(enemy2, this.game.platforms);
							this.game.physics.arcade.collide(Flag, this.game.platforms); 
// code for the action of collison defininig what will happen
		this.physics.arcade.overlap(player, crowns, this.collectcrown,null,this);
		this.physics.arcade.overlap(player, enemy1, this.death,null,this);
		this.physics.arcade.overlap(player, enemy2, this.death,null,this);
		this.physics.arcade.overlap(Flag, player, this.levelcomplete, null, this);

// code for increasing the score when the crown is collected
		scoreText.text = 'CROWNS: ' + score;

// code for setting up of the score automatic win after 19 have been collected
		if (score == 19)
		{
			this.state.start('NextLevel2Menu');
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
// code for enemy automatic movement and boundary for enemy 1
		if (enemy1boundary)
		{ enemy1.body.velocity.x = -100;
		  enemy1.animations.play('left')
		  if (enemy1.x < 170) { enemy1boundary = false; }
		}
		else 
		{ enemy1.body.velocity.x = 100;
		  enemy1.animations.play('right'); 
		  if (enemy1.x > 600) { enemy1boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 1
		if (enemy2boundary)
		{ enemy2.body.velocity.x = -100;
		  enemy2.animations.play('left')
		  if (enemy2.x < 920) { enemy2boundary = false; }
		}
		else 
		{ enemy2.body.velocity.x = 100;
		  enemy2.animations.play('right'); 
		  if (enemy2.x > 1350) { enemy2boundary = true; }
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
   	this.state.start('LooserMenuLevel1');
	},

// code for loading the next level menu after Player Winn and stopping music
	levelcomplete: function () 
	{
		music.stop();
   	this.state.start('NextLevel2Menu');
    }
};