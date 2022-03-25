BasicGame.level5 = function (game) { };

BasicGame.level5.prototype = 
{
    create: function () 
	{
// code for setting the boundaries for enemies and their movement  
	enemy1boundary = true;
	enemy2boundary = true;
	enemy3boundary = true;
	enemy4boundary = true;
	enemy5boundary = true;
	enemy6boundary = true;
	enemy7boundary = true;
	enemybossboundary = true;
	enemyflagboundary = true;
// code for setting the score to zero for start of the game
	score = 0;
// code for adding the game background 
	this.add.sprite(0, 0, 'Level5Background');
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
    ledge = this.game.platforms.create(160, 170, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(310, 170, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(460, 170, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(620, 240, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(770, 240, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(920, 240, 'platformtopmini');
		ledge.body.immovable = true
	ledge = this.game.platforms.create(1080, 310, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1230, 310, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1380, 310, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1625, 420, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1100, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1250, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1400, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1550, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(620, 480, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(770, 480, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(920, 480, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(310, 410, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(440, 410, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(160, 340, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(50, 270, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(-150, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(0, 550, 'platformtopmini');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(150, 550, 'platformtopmini');
		ledge.body.immovable = true;

// code for creating and spawning the player in the game 
		player = this.game.add.sprite(50, this.game.world.height - 1000, 'MainPlayer');

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
	enemy2 = this.game.add.sprite(900, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 2
	this.game.physics.arcade.enable(enemy2);
		enemy2.body.gravity.y = 300;
		enemy2.enableBody = true;
// code for adding the animations on movement for enemy 2
	enemy2.animations.add('left', [0, 1], 10, true);
	enemy2.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 3
	enemy3 = this.game.add.sprite(1400, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 3
	this.game.physics.arcade.enable(enemy3);
		enemy3.body.gravity.y = 300;
		enemy3.enableBody = true;
// code for adding the animations on movement for enemy 3
	enemy3.animations.add('left', [0, 1], 10, true);
	enemy3.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 4
	enemy4 = this.game.add.sprite(1400, this.game.world.height - 500, 'Enemy');
// code for enabling the physics for the enemy 4 
	this.game.physics.arcade.enable(enemy4);
		enemy4.body.gravity.y = 300;
		enemy4.enableBody = true;
// code for adding the animations on movement for enemy 4
	enemy4.animations.add('left', [0, 1], 10, true);
	enemy4.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 5  
	enemy5 = this.game.add.sprite(900, this.game.world.height - 500, 'Enemy');
// code for enabling the physics for the enemy 5
	this.game.physics.arcade.enable(enemy5);
		enemy5.body.gravity.y = 300;
		enemy5.enableBody = true;
// code for adding the animations on movement for enemy 5
	enemy5.animations.add('left', [0, 1], 10, true);
	enemy5.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 6
	enemy6 = this.game.add.sprite(400, this.game.world.height - 600, 'Enemy');
// code for enabling the physics for the enemy 6
	this.game.physics.arcade.enable(enemy6);
	   enemy6.body.gravity.y = 300;
	   enemy6.enableBody = true;
// code for adding the animations on movement for enemy 6
	enemy6.animations.add('left', [0, 1], 10, true);
	enemy6.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 7
	enemy7 = this.game.add.sprite(150, this.game.world.height - 450, 'Enemy');
// code for enabling the physics for the enemy 7 
		this.game.physics.arcade.enable(enemy7);
		enemy7.body.gravity.y = 300;
		enemy7.enableBody = true;
// code for adding the animations on movement for enemy 7
	enemy7.animations.add('left', [0, 1], 10, true);
	enemy7.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy boss 
	enemyboss = this.game.add.sprite(750, this.game.world.height - 200, 'Enemyboss');
// code for enabling the physics for the enemy boss
		this.game.physics.arcade.enable(enemyboss);
		enemyboss.body.gravity.y = 300;
		enemyboss.enableBody = true;
// code for adding the animations on movement for enemy boss
	enemyboss.animations.add('left', [0, 1], 10, true);
	enemyboss.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the flag enemy
	enemyflag = this.game.add.sprite(1400, this.game.world.height - 200, 'Enemy');
// code for enabling the physics for the flag enemy
		this.game.physics.arcade.enable(enemyflag);
		enemyflag.body.gravity.y = 300;
		enemyflag.enableBody = true;
// code for adding the animations on movement for the flag enemy
	enemyflag.animations.add('left', [0, 1], 10, true);
	enemyflag.animations.add('right', [2, 3], 10, true);

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
		Flag = this.game.add.sprite(1600, 700, 'Flag');

// code for enabling the physics for the flag
	this.game.physics.arcade.enable(Flag);
	Flag.enableBody = true;
	Flag.body.gravity.y = 300;
	Flag.body.bounce.y = 0.7;

// code for adding The Game Text for the crowns and the level name 
	scoreText = this.game.add.text(520, 15, 'CROWNS: 0', { fontSize: '32px', fill: '#ffd700' });
	var levelname = this.game.add.text(820, 15, 'LEVEL 5 - THE CONCLUSION', { fontSize: '32px', fill: '#aaa9ad' });
	cursors = this.game.input.keyboard.createCursorKeys();
	},

// update function
    update: function () 
	{
//code for the assets collision configuration
//code for colliding the player, the crowns, enemies and the flag   
		var hitPlatform = 	this.game.physics.arcade.collide(player,  this.game.platforms);
		                    this.game.physics.arcade.collide(crowns, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy1, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy2, this.game.platforms);
							this.game.physics.arcade.collide(enemy3, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy4, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy5, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy6, this.game.platforms);
		                    this.game.physics.arcade.collide(enemy7, this.game.platforms);
		                    this.game.physics.arcade.collide(enemyboss, this.game.platforms);
		                    this.game.physics.arcade.collide(enemyflag, this.game.platforms);
		                    this.game.physics.arcade.collide(Flag, this.game.platforms);
// code for the action of collison defininig what will happen
		this.physics.arcade.overlap(player, crowns, this.collectcrown, null, this);
		this.physics.arcade.overlap(player, enemy1, this.death, null, this);
		this.physics.arcade.overlap(player, enemy2, this.death, null, this);
		this.physics.arcade.overlap(player, enemy3, this.death, null, this);
		this.physics.arcade.overlap(player, enemy4, this.death, null, this);
		this.physics.arcade.overlap(player, enemy5, this.death, null, this);
		this.physics.arcade.overlap(player, enemy6, this.death, null, this);
		this.physics.arcade.overlap(player, enemy7, this.death, null, this);
		this.physics.arcade.overlap(player, enemyboss, this.death, null, this);
		this.physics.arcade.overlap(player, enemyflag, this.death, null, this);
		this.physics.arcade.overlap(Flag, player, this.levelcomplete, null, this);

// code for increasing the score when the crown is collected
		scoreText.text = 'CROWNS: ' + score;

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
		if (enemy1boundary) {
			enemy1.body.velocity.x = -100;
			enemy1.animations.play('left')
			if (enemy1.x < 150) { enemy1boundary = false; }
		}
		else {
			enemy1.body.velocity.x = 100;
			enemy1.animations.play('right');
			if (enemy1.x > 580) { enemy1boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 2
		if (enemy2boundary) {
			enemy2.body.velocity.x = -100;
			enemy2.animations.play('left')
			if (enemy2.x < 620) { enemy2boundary = false; }
		}
		else {
			enemy2.body.velocity.x = 100;
			enemy2.animations.play('right');
			if (enemy2.x > 1050) { enemy2boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 3
		if (enemy3boundary)
		{ enemy3.body.velocity.x = -100;
		  enemy3.animations.play('left')
		  if (enemy3.x < 1080) { enemy3boundary = false; }
		}
		else 
		{ enemy3.body.velocity.x = 100;
		  enemy3.animations.play('right'); 
		  if (enemy3.x > 1510) { enemy3boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 4
		if (enemy4boundary)
		{ enemy4.body.velocity.x = -100;
		  enemy4.animations.play('left')
		  if (enemy4.x < 1080) { enemy4boundary = false; }
		}
		else 
		{ enemy4.body.velocity.x = 100;
		  enemy4.animations.play('right'); 
		  if (enemy4.x > 1670) { enemy4boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 5
		if (enemy5boundary) {
			enemy5.body.velocity.x = -100;
			enemy5.animations.play('left')
			if (enemy5.x < 620) { enemy5boundary = false; }
		}
		else {
			enemy5.body.velocity.x = 100;
			enemy5.animations.play('right');
			if (enemy5.x > 1040) { enemy5boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 6
		if (enemy6boundary) {
			enemy6.body.velocity.x = -100;
			enemy6.animations.play('left')
			if (enemy6.x < 300) { enemy6boundary = false; }
		}
		else {
			enemy6.body.velocity.x = 100;
			enemy6.animations.play('right');
			if (enemy6.x > 560) { enemy6boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 7
		if (enemy7boundary) {
			enemy7.body.velocity.x = -100;
			enemy7.animations.play('left')
			if (enemy7.x < -150) { enemy7boundary = false; }
		}
		else {
			enemy7.body.velocity.x = 100;
			enemy7.animations.play('right');
			if (enemy7.x > 130) { enemy7boundary = true; }
		}
// code for enemy automatic movement and boundary for the enemy boss
		if (enemybossboundary) {
			enemyboss.body.velocity.x = -100;
			enemyboss.animations.play('left')
			if (enemyboss.x < 0) { enemybossboundary = false; }
		}
		else {
			enemyboss.body.velocity.x = 100;
			enemyboss.animations.play('right');
			if (enemyboss.x > 1400) { enemybossboundary = true; }
		}
// code for enemy automatic movement and boundary for the flag enemy
		if (enemyflagboundary) {
			enemyflag.body.velocity.x = -100;
			enemyflag.animations.play('left')
			if (enemyflag.x < 1500) { enemyflagboundary = false; }
		}
		else {
			enemyflag.body.velocity.x = 100;
			enemyflag.animations.play('right');
			if (enemyflag.x > 1670) { enemyflagboundary = true; }
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
   	this.state.start('LooserMenuLevel5');
	},

// code for loading the winning level menu after Player Winn and stopping music
	levelcomplete: function () 
	{
		music.stop();
   	this.state.start('WinnerMenu');
    }
};