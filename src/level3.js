BasicGame.level3 = function (game) { };

BasicGame.level3.prototype = 
{
    create: function () 
	{
// code for setting the boundaries for enemies and their movement  
	enemy3boundary = true;
	enemy4boundary = true;
	enemy5boundary = true;
	enemy6boundary = true;
	enemy7boundary = true;
	acidenemy1boundary = true;
	acidenemy2boundary = true;
	acidenemy3boundary = true;
	acidenemy4boundary = true;
// code for setting the score to zero for start of the game
	score = 0;
// code for adding the game background  
	this.add.sprite(0, 0, 'Level3Background');
// code for adding physics to the game level   
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
// code for adding physics to the game platforms  
	this.game.platforms = this.add.physicsGroup();
	this.game.platforms = this.game.add.group();
		this.game.platforms.enableBody = true;

// code for creating the platforms for the level

// code for the lower Section of the game platfroms and acid
		var platformbottomleft = this.game.platforms.create(0, this.game.world.height - 150, 'platformbottomleft');
		platformbottomleft.body.immovable = true;
		var platformbottomleft = this.game.platforms.create(200, this.game.world.height -0, 'platformbottomleft');
		platformbottomleft.body.immovable = true;
		var acid = this.game.add.sprite(190, this.game.world.height - 125, 'acid');
		var acid = this.game.add.sprite(250, this.game.world.height - 125, 'acid');
		var platformbottommiddle = this.game.platforms.create(400, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottomleft = this.game.platforms.create(555, this.game.world.height - 0, 'platformbottomleft');
		platformbottomleft.body.immovable = true;
		var acid = this.game.add.sprite(550, this.game.world.height - 125, 'acid');
		var acid = this.game.add.sprite(600, this.game.world.height - 125, 'acid');
		var platformbottommiddle = this.game.platforms.create(750, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(900, this.game.world.height - 150, 'platformbottommiddle'); //this one
		platformbottommiddle.body.immovable = true;
		var acid = this.game.add.sprite(1050, this.game.world.height - 125, 'acid');
		var acid = this.game.add.sprite(1060, this.game.world.height - 125, 'acid');
		var platformbottommiddle = this.game.platforms.create(1210, this.game.world.height - 150, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottommiddle = this.game.platforms.create(1055, this.game.world.height - 0, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var acid = this.game.add.sprite(1360, this.game.world.height - 125, 'acid');
		var platformbottommiddle = this.game.platforms.create(1360, this.game.world.height - 0, 'platformbottommiddle');
		platformbottommiddle.body.immovable = true;
		var platformbottomright = this.game.platforms.create(1510, this.game.world.height - 150, 'platformbottomright');
		platformbottomright.body.immovable = true;

//code for the Middle and top Section of the game platforms 
    var ledge = this.game.platforms.create(1550, 130, 'platformtop');
		ledge.body.immovable = true;
		ledge = this.game.platforms.create(320, 125, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(470, 125, 'platformtopmiddle');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(620, 125, 'platformtopright');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(60, 170, 'platformtop');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(950, 150, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1100, 150,  'platformtopmiddle');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1250, 150, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(0, 300, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(150, 300, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1400, 300, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(1550, 300, 'platformtopright');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(625, 400, 'platformtopleft');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(775, 400, 'platformtopmiddle');
		ledge.body.immovable = true;
	ledge = this.game.platforms.create(925, 400, 'platformtopright');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(500, 400, 'platformtop');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(371, 400, 'platformtop');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1050, 400, 'platformtop');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1179, 400, 'platformtop');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1548, 630, 'platformtopmini');
		ledge.body.immovable = true;
	var ledge = this.game.platforms.create(1360, 520, 'platformtop');
		ledge.body.immovable = true;

// code for creating and spawning the player in the game 
		player = this.game.add.sprite(110, this.game.world.height - 400, 'MainPlayer');

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
	enemy4 = this.game.add.sprite(1200, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 4
	this.game.physics.arcade.enable(enemy4);
		enemy4.body.gravity.y = 300;
		enemy4.enableBody = true;
// code for adding the animations on movement for enemy 4
	enemy4.animations.add('left', [0, 1], 10, true);
	enemy4.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 5
	enemy5 = this.game.add.sprite(100, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 5 
	this.game.physics.arcade.enable(enemy5);
		enemy5.body.gravity.y = 300;
		enemy5.enableBody = true;
// code for adding the animations on movement for enemy 5
	enemy5.animations.add('left', [0, 1], 10, true);
	enemy5.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 6
	enemy6 = this.game.add.sprite(1600, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 6
	this.game.physics.arcade.enable(enemy6);
		enemy6.body.gravity.y = 300;
		enemy6.enableBody = true;
// code for adding the animations on movement for enemy 6
	enemy6.animations.add('left', [0, 1], 10, true);
	enemy6.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the enemy 7
	enemy7 = this.game.add.sprite(1000, this.game.world.height - 1000, 'Enemy');
// code for enabling the physics for the enemy 7 
	this.game.physics.arcade.enable(enemy7);
		enemy7.body.gravity.y = 300;
		enemy7.enableBody = true;
// code for adding the animations on movement for enemy 7
	enemy7.animations.add('left', [0, 1], 10, true);
	enemy7.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the acid enemy 1
		acidenemy1 = this.game.add.sprite(300, this.game.world.height - 200, 'Enemy');
// code for enabling the physics for the acid enemy 1
		this.game.physics.arcade.enable(acidenemy1);
		acidenemy1.body.gravity.y = 300;
		acidenemy1.enableBody = true;
// code for adding the animations on movement for acid enemy 1
		acidenemy1.animations.add('left', [0, 1], 10, true);
		acidenemy1.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the acid enemy 2
		acidenemy2 = this.game.add.sprite(620, this.game.world.height - 200, 'Enemy');
// code for enabling the physics for the acid enemy 2
		this.game.physics.arcade.enable(acidenemy2);
		acidenemy2.body.gravity.y = 300;
		acidenemy2.enableBody = true;
// code for adding the animations on movement for acid enemy 2
		acidenemy2.animations.add('left', [0, 1], 10, true);
		acidenemy2.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the acid enemy 3
		acidenemy3 = this.game.add.sprite(1120, this.game.world.height - 200, 'Enemy');
// code for enabling the physics for the acid enemy 3
		this.game.physics.arcade.enable(acidenemy3);
		acidenemy3.body.gravity.y = 300;
		acidenemy3.enableBody = true;
// code for adding the animations on movement for acid enemy 3
		acidenemy3.animations.add('left', [0, 1], 10, true);
		acidenemy3.animations.add('right', [2, 3], 10, true);

// code for creating and spawning the acid enemy 4
		acidenemy4 = this.game.add.sprite(1420, this.game.world.height - 200, 'Enemy');
// code for enabling the physics for the acid enemy 4 
		this.game.physics.arcade.enable(acidenemy4);
		acidenemy4.body.gravity.y = 300;
		acidenemy4.enableBody = true;
// code for adding the animations on movement for acid enemy 4
		acidenemy4.animations.add('left', [0, 1], 10, true);
		acidenemy4.animations.add('right', [2, 3], 10, true);

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
		Flag = this.game.add.sprite(1620, 0, 'Flag');

// code for enabling the physics for the flag
	this.game.physics.arcade.enable(Flag);
	Flag.enableBody = true;
	Flag.body.gravity.y = 300;
	Flag.body.bounce.y = 0.7;

// code for adding The Game Text for the crowns and the level name   
	scoreText = this.game.add.text(520, 15, 'CROWNS: 0', { fontSize: '32px', fill: '#aa6c39' });
	var levelname = this.game.add.text(820, 15, 'LEVEL 3 - THE CLIMAX', { fontSize: '32px', fill: '#71706e' });
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
		                    this.game.physics.arcade.collide(enemy7, this.game.platforms);
		                    this.game.physics.arcade.collide(acidenemy1, this.game.platforms);
		                    this.game.physics.arcade.collide(acidenemy2, this.game.platforms);
		                    this.game.physics.arcade.collide(acidenemy3, this.game.platforms);
		                    this.game.physics.arcade.collide(acidenemy4, this.game.platforms);
		                    this.game.physics.arcade.collide(Flag, this.game.platforms);
// code for the action of collison defininig what will happen
		this.physics.arcade.overlap(player, crowns, this.collectcrown,null,this);
		this.physics.arcade.overlap(player, enemy3, this.death,null,this);
		this.physics.arcade.overlap(player, enemy4, this.death, null, this);
		this.physics.arcade.overlap(player, enemy5, this.death, null, this);
		this.physics.arcade.overlap(player, enemy6, this.death, null, this);
		this.physics.arcade.overlap(player, enemy7, this.death, null, this);
		this.physics.arcade.overlap(player, acidenemy1, this.death, null, this);
		this.physics.arcade.overlap(player, acidenemy2, this.death, null, this);
		this.physics.arcade.overlap(player, acidenemy3, this.death, null, this);
		this.physics.arcade.overlap(player, acidenemy4, this.death, null, this);
		this.physics.arcade.overlap(Flag, player, this.levelcomplete, null, this);

// code for increasing the score when the crown is collected
		scoreText.text = 'CROWNS: ' + score;

// code for setting up of the score automatic win after 19 have been collected
		if (score == 19)
		{
			this.state.start('NextLevel4Menu');
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
		  if (enemy3.x < 310) { enemy3boundary = false; }
		}
		else 
		{ enemy3.body.velocity.x = 100;
		  enemy3.animations.play('right'); 
		  if (enemy3.x > 730) { enemy3boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 4
		if (enemy4boundary)
		{ enemy4.body.velocity.x = -100;
		  enemy4.animations.play('left')
		  if (enemy4.x < 950) { enemy4boundary = false; }
		}
		else 
		{ enemy4.body.velocity.x = 100;
		  enemy4.animations.play('right'); 
		  if (enemy4.x > 1370) { enemy4boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 5
		if (enemy5boundary) {
			enemy5.body.velocity.x = -100;
			enemy5.animations.play('left')
			if (enemy5.x < 0) { enemy5boundary = false; }
		}
		else {
			enemy5.body.velocity.x = 100;
			enemy5.animations.play('right');
			if (enemy5.x > 275) { enemy5boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 6
		if (enemy6boundary) {
			enemy6.body.velocity.x = -100;
			enemy6.animations.play('left')
			if (enemy6.x < 1400) { enemy6boundary = false; }
		}
		else {
			enemy6.body.velocity.x = 100;
			enemy6.animations.play('right');
			if (enemy6.x > 1670) { enemy6boundary = true; }
		}
// code for enemy automatic movement and boundary for enemy 7
		if (enemy7boundary) {
			enemy7.body.velocity.x = -100;
			enemy7.animations.play('left')
			if (enemy7.x < 370) { enemy7boundary = false; }
		}
		else {
			enemy7.body.velocity.x = 100;
			enemy7.animations.play('right');
			if (enemy7.x > 1300) { enemy7boundary = true; }
		}
// code for enemy automatic movement and boundary for acid enemy 1
		if (acidenemy1boundary) {
			acidenemy1.body.velocity.x = -100;
			acidenemy1.animations.play('left')
			if (acidenemy1.x < 195) { acidenemy1boundary = false; }
		}
		else {
			acidenemy1.body.velocity.x = 100;
			acidenemy1.animations.play('right');
			if (acidenemy1.x > 360) { acidenemy1boundary = true; }
		}
// code for enemy automatic movement and boundary for acid enemy 2 
		if (acidenemy2boundary) {
			acidenemy2.body.velocity.x = -100;
			acidenemy2.animations.play('left')
			if (acidenemy2.x < 555) { acidenemy2boundary = false; }
		}
		else {
			acidenemy2.body.velocity.x = 100;
			acidenemy2.animations.play('right');
			if (acidenemy2.x > 710) { acidenemy2boundary = true; }
		}
// code for enemy automatic movement and boundary for acid enemy 3
		if (acidenemy3boundary) {
			acidenemy3.body.velocity.x = -100;
			acidenemy3.animations.play('left')
			if (acidenemy3.x < 1055) { acidenemy3boundary = false; }
		}
		else {
			acidenemy3.body.velocity.x = 100;
			acidenemy3.animations.play('right');
			if (acidenemy3.x > 1170) { acidenemy3boundary = true; }
		}
// code for enemy automatic movement and boundary for acid enemy 4
		if (acidenemy4boundary) {
			acidenemy4.body.velocity.x = -100;
			acidenemy4.animations.play('left')
			if (acidenemy4.x < 1365) { acidenemy4boundary = false; }
		}
		else {
			acidenemy4.body.velocity.x = 100;
			acidenemy4.animations.play('right');
			if (acidenemy4.x > 1470) { acidenemy4boundary = true; }
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
   	this.state.start('LooserMenuLevel3');
	},

// code for loading the next level menu after Player Winn and stopping music
	levelcomplete: function () 
	{
		music.stop();
   	this.state.start('NextLevel4Menu');
    }
};