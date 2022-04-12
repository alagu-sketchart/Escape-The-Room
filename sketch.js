//Load the Gamestates
var SCARED = 6;
var WHO = 5;
var DREAM = 4;
var SLEEP = 3;
var BED = 2;
var PLAY = 1;
var START = 0;
var EAT = -1;
var DINNER = -2;
var KITCHEN = -3;
var TIRED = -4;
var WOKE = -5;
var SNOOZE = -6;
var gameState = START;

walls = []
room_walls = []
kitchen_walls = []
room_wallsa = []
room_wallsb = []
croom_walls = []

function preload() {
    //Load in the Images
    fre1 = loadImage("fri1.png");
    fri1 = loadImage("fri11.png");
    friwork = loadImage("fri1_work.png");
    curious1 = loadImage("cur.png");
    curious1_2 = loadImage("cur1_2.png");
    curious1_3 = loadImage("cur1_3.png");

    fri2 = loadImage("fri2.png");
    fre = loadImage("fri21.png");
    fri2work = loadImage("fri2_work.png");
    fri2work2 = loadImage("fri2_work2.png");
    curious2 = loadImage("cur2.png");

    fri3 = loadImage("fri3.png");
    fri31 = loadImage("fri31.png");
    fri3work = loadImage("fri3_work.png");
    fri3work2 = loadImage("fri3_work2.png");
    curious3 = loadImage("cur3.png");

    Main = loadImage("You.png");
    Main2 = loadImage("You2.png");
    Main3 = loadImage("You3.png");
    right1 = loadImage("Your2.png"); // r means rotate here
    left1 = loadImage("Your3.png");
    insane1 = loadImage("Insane1.png");
    insane2 = loadImage("Insane2.png");
    insane3 = loadImage("Insane3.png");

    cam1 = loadImage("cam1.png");
    cam2 = loadImage("cam2.png");
    cam3 = loadImage("cam3.png");

    stickman = loadImage("lumpbeefbrothkind.png");
    stickman2 = loadImage("lumpbeefbrothkind2.png");
    stickman3 = loadImage("lumpbeefbrothkind3.png");

    lump = loadImage("Lumpbeefbroth.png");
    lump2 = loadImage("Lumpbeefbroth2.png");
    lump3 = loadImage("Lumpbeefbroth3.png");

    science = loadImage("scientist.png");
    science2 = loadImage("scientist2.png");
    science3 = loadImage("scientist3.png");

    //Load in the Backgrounds
    Begin = loadImage("new.png");
    Grass = loadImage("Grass.png");
    carpet = loadImage("carpet.png");
    stars = loadImage("starry.png");
    danger = loadImage("codes.png");
    mind = loadImage("brain.png");
    Floor = loadImage("floor.png");
    bliss = loadImage("blissful.jpg");
    lost = loadImage("lost man.png");
    win = loadImage("adventure.png");
    end = loadImage("ended.png");

    button = loadImage("play.png");
    retry = loadImage("replay.png");
    shut = loadImage("door.png");
    wood_bed = loadImage("bed.png");

    screw_drive = loadImage("screwer.png");
    malt = loadImage("hammer.png");
    roll = loadImage("tape.png");
    yum1 = loadImage("cake.png");
    yum2 = loadImage("cookie.png");

    gem = loadImage("glow11.png");
    gem2 = loadImage("glow12.png");
    gem3 = loadImage("glow13.png");

    red_gem = loadImage("ruby.png");
    red_gem2 = loadImage("ruby2.png");
    red_gem3 = loadImage("ruby3.png");

    emer1 = loadImage("greeny.png");
    emer2 = loadImage("greeny2.png");
    emer3 = loadImage("greeny3.png");

    //Load in the Music 
    mus_1 = loadSound("Farms.m4a"); mus_1.playMode("restart");
    mus_2 = loadSound("Sad music.m4a"); mus_2.playMode("restart");
    mus_3 = loadSound("dream child.m4a"); mus_3.playMode("restart");
    mus_4 = loadSound("Cooking.m4a"); mus_4.playMode("restart");
    mus_5 = loadSound("Happy.m4a"); mus_5.playMode("restart");
    mus_6 = loadSound("chase.m4a"); mus_6.playMode("restart");
    mus_7 = loadSound("Truth.m4a"); mus_7.playMode("restart");

    //Load in the Sound Effects (restart = play once, untilDone = keep playing)
    glass = loadSound("break.mp3"); glass.playMode("restart");
    hello = loadSound("hello.mp3"); hello.playMode("restart");
    hi = loadSound("soft_hello.mp3"); hi.playMode("restart");
    heyoo = loadSound("heyoo.mp3"); heyoo.playMode("restart");
    creep = loadSound("I see you.mp3"); creep.playMode("restart");
    hitSound = loadSound("hit.mp3"); hitSound.playMode("restart");
    woosh = loadSound("woosh.mp3"); woosh.playMode("restart");
    opening = loadSound("open.mp3"); opening.playMode("restart");
    blah = loadSound("gibberish.mp3"); blah.playMode("restart");
    bang = loadSound("bang.mp3"); bang.playMode("restart");
    myman = loadSound("My man.mp3"); myman.playMode("restart");
    thanks = loadSound("thanks.mp3"); thanks.playMode("restart");
    sen = loadSound("senpai.mp3"); sen.playMode("restart");
    pog = loadSound("pog.mp3"); pog.playMode("restart");
    boi = loadSound("Boi.mp3"); boi.playMode("restart");
    go = loadSound("go.mp3"); go.playMode("restart");
    crunch = loadSound("crunch.mp3"); crunch.playMode("untilDone");
    roar = loadSound("roar.mp3"); roar.playMode("restart");
    scream = loadSound("scream.mp3"); scream.playMode("restart");
    hmm = loadSound("hmm.mp3"); hmm.playMode("restart");
    cutie = loadSound("cutie.mp3"); cutie.playMode("restart");
    hold = loadSound("whos.mp3"); hold.playMode("restart");
    huh = loadSound("huh.mp3"); huh.playMode("restart");
    ate = loadSound("chomp.mp3"); ate.playMode("restart");
    zap = loadSound("zap.mp3"); zap.playMode("restart");
    metal = loadSound("metal.mp3"); metal.playMode("restart");
}

function setup() {
//create the base of the game
createCanvas(1000, 650);

//Create the play button
plays = createSprite(500, 500, 150, 50);
plays.addImage("play.png", button);
plays.scale = 0.9;

//To set the score to change the ending
score = 0;
tasks = 4;}

function draw() {
    if (gameState === START) {
        //Constantly creates the background
        background(Begin);
        //DO NOT EVER put if statements in other if statments, put them in gameStates
        if (mousePressedOver(plays)) {
            //Changes the gameState
            gameState = PLAY;
            mus_1.loop();

            You = createSprite(500, 100, 30, 50);
            You.addImage("You.png", Main);
            You.addImage("You2.png", Main2);
            You.addImage("You3.png", Main3);
            You.setCollider('rectangle', 0, 0, 60, 90);

            door = createSprite(-250, -300, 0, 50);
            door.addImage("door.png", shut);
            door.scale = 1.5;

            tower = createSprite(-570, 100, 40, 40);
            tower.scale = 0.6;
            tower.addImage("cam1.png", cam1);
            tower.addImage("cam2.png", cam2);
            tower.addImage("cam3.png", cam3);

            friend1 = createSprite(500, 250, 100, 50);
            friend1.addImage("fri11.png", fri1)
            friend1.addImage("fri1.png", fre1);
            friend1.setCollider('rectangle', 0, 0, 100, 75);

            friend2 = createSprite(200, 100, 50, 100);
            friend2.addImage("fri2.png", fri2);
            friend2.addImage("fri21.png", fre);
            friend2.scale = 0.7;
            friend2.setCollider('rectangle', 0, 0, 90, 120);

            friend3 = createSprite(800, 100, 50, 10);
            friend3.addImage("fri3.png", fri3);
            friend3.addImage("fri31.png", fri31);

            wall0 = createSprite(500, 350, 1500, 5);
            wall1 = createSprite(-250, 0, 5, 500);
            wall2 = createSprite(250, -350, 2000, 5);
            wall3 = createSprite(-570, 350, 650, 5);
            wall4 = createSprite(1250, 0, 5, 700);
            wall5 = createSprite(-900, 0, 10, 700);
            wall6 = createSprite(-575, -50, 650, 5);
            walls = [wall0, wall1, wall2, wall3, wall4, wall5, wall6]

            wall0a = createSprite(-1025, -100, 5, 500);
            wall1a = createSprite(-225, -50, 5, 400);
            wall2a = createSprite(-625, -350, 800, 5);
            wall3a = createSprite(-625, 150, 800, 5);
            room_walls = [wall0a, wall1a, wall2a, wall3a]

            collect1 = createSprite(-850, 0, 40, 40);
            collect1.addImage("glow11.png", gem);
            collect1.addImage("glow12.png", gem2);
            collect1.addImage("glow13.png", gem3);
            collect1.scale = 0.2;

            //Removes the sprites to make the game lag less
            plays.lifetime = 0;
            //Reduces or increases the volume of the sound
            mus_1.setVolume(0.7);
        }
        drawSprites();
    }

    if (gameState === PLAY) {
        //Constantly creates the background
        background(Grass);
        if (You.collide(door)) {
            //Changes the gamestate
            gameState = BED;
            opening.play();
            You.lifetime = 0;
            You = createSprite(-400, -275, 30, 30);
            You.setCollider("rectangle", 0, 0, 50, 100);
            You.addImage("You.png", Main);
            You.addImage("You2.png", Main2);
            You.addImage("You3.png", Main3);
            //Turns the music off
            mus_1.stop();
            //Plays the new music
            mus_2.loop();
            mus_2.setVolume(0.3);
            the_bed = createSprite(-950, 100, 10, 10);
            the_bed.addImage("bed.png", wood_bed);
            the_bed.scale = 0.35;
            //Animation functions cannot be used here!
        }

        //Make the walls visible when you exit
        for (var i = 0; i <= 6; i++){
            if (You.collide(walls[i])) {
                textSize(23);
                text("An infirmary wall", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            }
          walls[i].visible = true;
        }

        //Make the walls invisible when you exit
        for (var j = 0; j <= 3; j++) {room_walls[j].visible = false}

        //For the gems to be collected to unlock a new ending
        if (You.isTouching(collect1)) {
            woosh.play();
            collect1.lifetime = 0;
            //Increase the score
            score = score + 1 
        }
        
        
        //This is for Animation
        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
            friend1.changeAnimation("fri1.png", fre1);
            friend2.changeAnimation("fri2.png", fri2);
            friend3.changeAnimation("fri3.png", fri3);
            collect1.changeAnimation("glow11.png", gem);
            tower.changeAnimation("cam1.png", cam1);
        }
        else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
            friend1.changeAnimation("fri11.png", fri1);
            friend2.changeAnimation("fri21.png", fre);
            friend3.changeAnimation("fri31.png", fri31);
            collect1.changeAnimation("glow13.png", gem3)
            tower.changeAnimation("cam2.png", cam2);
        }
        else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
            tower.changeAnimation("cam3.png", cam3);
            collect1.changeAnimation("glow12.png", gem2)
        }
        
        if (You.collide(tower)) {fill("black"); textSize(30); text("I sEe YoU", tower.x - 15, tower.y + 75); creep.play(); creep.setVolume(2);}

        //Talking to characters
        if (You.collide(friend1)) { fill("yellow"); textSize(30); text("Hello, how are you pal?", You.x - 15, You.y + 130); hello.play(); hello.setVolume(0.3); }
        if (You.collide(friend2)) { fill(rgb(250, 175, 175)); textSize(30); text("Hiiiiii bestie!!!", You.x - 15, You.y + 130); hi.play(); hi.setVolume(0.3); }
        if (You.collide(friend3)) { fill(rgb(10, 10, 150)); textSize(30); text("Heyoo bro, howya doin'!!!", You.x - 15, You.y + 130); heyoo.play(); heyoo.setVolume(0.3); }

        //Y axis controls 3
        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }

        //X axis controls 3
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        //Following the character
        camera.x = You.x;
        camera.y = You.y;
        //Create the darn sprites
        drawSprites();
    }

    if (gameState === BED) {
        background(carpet);
        if (score == 1 && You.collide(the_bed)) {
            //The first function MUST be different!
            for (var j = 0; j <= 3; j++) { room_walls[j].visible = false }
            gameState = SLEEP;
            //Stop the old music 
            mus_2.stop();
            //Play the new music
            mus_3.loop(); mus_3.setVolume(0.4);
            You.addImage("You.png", Main);
            You.addImage("Your2.png", right1);
            You.addImage("Your3.png", left1);
            You.setCollider("rectangle", 0, 0, 100, 100);
            stick = createSprite(-700, 250, 300, 175);
            stick.addImage("lumpbeefbrothkind.png", stickman);
            stick.addImage("lumpbeefbrothkind2.png", stickman2);
            stick.addImage("lumpbeefbrothkind3.png", stickman3);
            stick.setCollider("rectangle", 0, 0, 225, 400);
            stick.scale = 0.5;
            //stick.debug = true;  //This was used to debug the sprite
            wall0a = createSprite(-1025, 100, 5, 900);
            wall1a = createSprite(-225, 50, 5, 800);
            wall2a = createSprite(-625, -350, 800, 5);
            wall3a = createSprite(-625, 450, 800, 5);
            room_walls = [wall0a, wall1a, wall2a, wall3a]
        }
        else if (score == 0 && You.collide(the_bed)) {
            //The first function MUST be different!
            gameState = EAT;
            You.lifetime = 0;
            You = createSprite(-850, 100, 10, 10);
            You.addImage("You.png", Main);
            You.addImage("You2.png", Main2);
            You.addImage("You3.png", Main3);
            camera.x = You.x;
            camera.y = You.y;
        }
        //Remove the old sprites
        friend1.lifetime = 0;
        friend2.lifetime = 0;
        friend3.lifetime = 0;
        tower.lifetime = 0;
        collect1.lifetime = 0;
        
        //Y axis controls
        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }

        //X axis controls
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        for (var i = 0; i <= 6; i++) { walls[i].visible = false; }

        for (var j = 0; j <= 3; j++) {
            if (You.collide(room_walls[j])) {
                fill("white");
                textSize(23);
                text("Your bedroom walls", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            }
          room_walls[j].visible = true;
        }
       
        if (You.collide(door)) { // Going back outside
            //Remove the old sprites
            You.lifetime = 0;
            the_bed.lifetime = 0;

            gameState = PLAY;
            mus_1.loop();
            mus_2.stop();
            opening.play();

            You = createSprite(-100, -300, 30, 50);
            You.addImage("You.png", Main);
            You.addImage("You2.png", Main2);
            You.addImage("You3.png", Main3);
            You.setCollider('rectangle', 0, 0, 60, 90);

            door = createSprite(-250, -300, 0, 50);
            door.addImage("door.png", shut);
            door.scale = 1.5;

            tower = createSprite(-570, 100, 40, 40);
            tower.scale = 0.6;
            tower.addImage("cam1.png", cam1);
            tower.addImage("cam2.png", cam2);
            tower.addImage("cam3.png", cam3);

            friend1 = createSprite(500, 250, 100, 50);
            friend1.addImage("fri11.png", fri1);
            friend1.addImage("fri1.png", fre1);
            friend1.setCollider('rectangle', 0, 0, 100, 75);

            friend2 = createSprite(200, 100, 50, 100);
            friend2.addImage("fri2.png", fri2);
            friend2.addImage("fri21.png", fre)
            friend2.scale = 0.7;
            friend2.setCollider('rectangle', 0, 0, 90, 120);

            friend3 = createSprite(800, 100, 50, 10);
            friend3.addImage("fri3.png", fri3);
            friend3.addImage("fri31.png", fri31);

            //The collectables should dissapear when you go out

            mus_1.setVolume(0.7);

            //Y axis controls
            if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
            if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }

            //X axis controls
            if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
            if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }
        }
        
        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
        }
        else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
        }
        else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
        }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === SLEEP) {
        background(stars);
        for (var j = 0; j <= 3; j++) {
            if (You.collide(room_walls[j])) {
                fill("white")
                textSize(23);
                text("Some type of invisible barrier?", You.x, You.y + 200);
                bang.play();
                bang.setVolume(0.25)
            }
            room_walls[j].visible = false;
        }

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        //Slow down the animation by making the first number larger
        if (World.frameCount % 34 == 12) {
            You.changeAnimation("Your2.png", right1);
            stick.changeAnimation("lumpbeefbrothkind.png", stickman);
        }
        else if (World.frameCount % 31 == 10) {
            You.changeAnimation("Your3.png", left1);
            stick.changeAnimation("lumpbeefbrothkind2.png", stickman2);
        }
        else if (World.frameCount % 32 == 11) {
            You.changeAnimation("You.png", Main);
            stick.changeAnimation("lumpbeefbrothkind3.png", stickman3);
        }

        //Change the player's path using their score value (look in function setup)
        if (score == 0 && You.collide(door)) {
            mus_2.stop();
            mus_4.loop();
            mus_4.setVolume(0.4);
            gameState = KITCHEN;
            for (var j = 0; j <= 3; j++) { room_walls[j].lifetime = 0 }
        } else if (score == 1 && You.collide(door)) {
            gameState = DINNER;
            mus_3.stop();
            stick.lifetime = 0
            You.x = You.x - 500; You.y = You.y + 200;
            for (var j = 0; j <= 3; j++) { room_walls[j].lifetime = 0 }
            awall0a = createSprite(-1025, -100, 5, 500);
            awall1a = createSprite(-225, -50, 5, 400);
            awall2a = createSprite(-625, -350, 800, 5);
            awall3a = createSprite(-625, 150, 800, 5);
            room_wallsa = [awall0a, awall1a, awall2a, awall3a]
        }
        
        if (You.collide(stick)) {
            fill("white"); textSize(25);
            text("My dude, please do not go down this path!", -800, 50);
            text("Or else you will be trapped in labour and despair,", -850, 75);
            text("FOREVER!!!", -650, 100);
            blah.play();
            blah.setVolume(0.5);
        }
        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === EAT) {
        background(carpet);
        mus_2.stop();
        for (var j = 0; j <= 3; j++) {
            if (You.collide(room_walls[j])) {
                fill("white");
                textSize(23);
                text("Your bedroom walls", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            }
            room_walls[j].visible = true;
        }
        if (You.collide(door)) {
            gameState = KITCHEN;
            ruby = createSprite(-850, -300, 50, 50);
            ruby.scale = 0.4;
            work1 = createSprite(500, 100, 100, 50);
            work1.addImage("fri_work.png", friwork);
            work1.setCollider("circle", 0, 0, 60);
            work2 = createSprite(200, 100, 50, 10);
            work2.addImage("fri2_work.png", fri2work);
            work2.addImage("fri2_work2.png", fri2work2);
            work2.setCollider("circle", 0, 0, 60);
            work3 = createSprite(800, 100, 50, 10);
            work3.addImage("fri3_work.png", fri3work);
            work3.addImage("fri3_work2.png", fri3work2);
            work3.setCollider("circle", 0, 0, 60);

            //This actually makes the score
            scor1 = createSprite(-850, 300, 25, 25);
            scor2 = createSprite(700, -325, 25, 25);
            scor3 = createSprite(-300, -75, 25, 25);
            scor1.visible = false;
            scor2.visible = false;
            scor3.visible = false;

            //Creates the images for the player to interact 
            screw = createSprite(-850, 300, 10, 10);
            screw.addImage("screwer.png", screw_drive);
            screw.scale = 0.25;
            hammer = createSprite(700, -325, 10, 10);
            hammer.addImage("hammer.png", malt);
            hammer.scale = 0.75;
            tape = createSprite(-300, -75, 20, 20);
            tape.addImage("tape.png", roll);
            tape.scale = 0.5;

            cake = createSprite(1050, 355, 40, 40);
            cake.addImage("cake.png", yum1);
            cookie = createSprite(1200, -355, 10, 10);
            cookie.addImage("cookie.png", yum2);

            for (var j = 0; j <= 3; j++) { room_walls[j].lifetime = 0; }
            You.setCollider("rectangle", 0, 0, 60, 90);
            mus_4.loop(); mus_4.setVolume(0.4);
            You.x = You.x + 250;
            kwall0 = createSprite(500, 350, 1500, 5);
            kwall1 = createSprite(-250, 0, 5, 500);
            kwall2 = createSprite(175, -350, 2175, 5);
            kwall3 = createSprite(-570, 350, 650, 5);
            kwall4 = createSprite(1250, 0, 5, 700);
            kwall5 = createSprite(-900, 0, 10, 700);
            kwall6 = createSprite(-575, -50, 650, 5);
            kwall7 = createSprite(1000, 0, 5, 700);
            kitchen_walls = [kwall0, kwall1, kwall2, kwall3, kwall4, kwall5, kwall6, kwall7]
        }
        
        //Make it so that the player reads text near the bed
        if (You.x < -750 && You.y > 0) {
            textSize(22);
            fill("white");
            text("That was a good sleep!", -1000, 50);
        }

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);}
        else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);}
        else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
        }

        camera.x = You.x
        camera.y = You.y
        drawSprites();
    }

//The first different gameState for a specific path!
    if (gameState === DINNER) {
        background(carpet);
        You.addImage("You.png", Main);
        You.addImage("You2.png", Main2);
        You.addImage("You3.png", Main3);
        You.setCollider("rectangle", 0, 0, 60, 90);
        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
        } else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
        } else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
        }

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

            for (var l = 0; l <= 3; l++) {
                if (You.collide(room_wallsa[l])) {
                    fill("white");
                    textSize(23);
                    text("Your bedroom... walls", You.x, You.y + 200);
                    hitSound.play();
                    hitSound.setVolume(0.25);
                }
                room_wallsa[l].visible = true;
            }
        
        if (You.x < -700 && You.y > -50) {
            textSize(24);
            fill("white");
            text("That was a strange dream!", -1000, -25);
            text("What happened last night?", -1000, 0);
        }

        if (You.collide(door)) {
            for (var l = 0; l <= 3; l++) { room_wallsa[l].lifetime = 0 }
            gameState = KITCHEN;
            mus_4.loop();
            mus_4.setVolume(0.4);
            You.x = You.x + 250;
            ruby = createSprite(-850, -300, 50, 50);
            ruby.scale = 0.4;
            work1 = createSprite(500, 100, 100, 50);
            work1.addImage("fri_work.png", friwork);
            work1.setCollider("circle", 0, 0, 60);
            work2 = createSprite(200, 100, 50, 10);
            work2.addImage("fri2_work.png", fri2work);
            work2.addImage("fri2_work2.png", fri2work2);
            work2.setCollider("circle", 0, 0, 60);
            work3 = createSprite(800, 100, 50, 10);
            work3.addImage("fri3_work.png", fri3work);
            work3.addImage("fri3_work2.png", fri3work2);
            work3.setCollider("circle", 0, 0, 60);

            scor1 = createSprite(-850, 300, 25, 25);
            scor2 = createSprite(700, -325, 25, 25);
            scor3 = createSprite(-300, -75, 25, 25);
            scor1.visible = false;
            scor2.visible = false;
            scor3.visible = false;

            screw = createSprite(-850, 300, 10, 10);
            screw.addImage("screwer.png", screw_drive);
            screw.scale = 0.25;
            hammer = createSprite(700, -325, 10, 10);
            hammer.addImage("hammer.png", malt);
            hammer.scale = 0.75;
            tape = createSprite(-300, -75, 20, 20);
            tape.addImage("tape.png", roll);
            tape.scale = 0.5;
            cake = createSprite(1050, 355, 40, 40);
            cake.addImage("cake.png", yum1);
            cookie = createSprite(1200, -355, 10, 10);
            cookie.addImage("cookie.png", yum2);
            kwall0 = createSprite(500, 350, 1500, 5);
            kwall1 = createSprite(-250, 0, 5, 500);
            kwall2 = createSprite(175, -350, 2175, 5);
            kwall3 = createSprite(-570, 350, 650, 5);
            kwall4 = createSprite(1250, 0, 5, 700);
            kwall5 = createSprite(-900, 0, 10, 700);
            kwall6 = createSprite(-575, -50, 650, 5);
            kwall7 = createSprite(1000, 0, 5, 700);
            kitchen_walls = [kwall0, kwall1, kwall2, kwall3, kwall4, kwall5, kwall6, kwall7]
        }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === KITCHEN) {
        background(Grass);
        the_bed.lifetime = 0;
        ruby.addImage("ruby.png", red_gem);
        ruby.addImage("ruby2.png", red_gem2);
        ruby.addImage("ruby3.png", red_gem3);
        You.setCollider("rectangle", 0, 0, 60, 90);
        for (var k = 0; k <= 7; k++) {
            if (score == 1 && You.collide(kitchen_walls[k])) {
                textSize(23);
                text("The infirmiry walls :|", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            } else if (score == 0 && You.collide(kitchen_walls[k])) {
                textSize(23);
                text("An infirmiry wall", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            } else if (score >= 2 && You.collide(kitchen_walls[k])) {
                textSize(23);
                text("I don't like these walls :(", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            }
        }
        You.addImage("You2.png", Main2);
        You.addImage("You3.png", Main3);
        You.addImage("You.png", Main);

        //Good!
        if (cake.y > 325) {
            cake.velocityY = -2;
            cookie.velocityY = 2;
        } else if (cake.y < -325){
            cake.velocityY = 2;
            cookie.velocityY = -2;
        }


        if (You.isTouching(ruby)) {
            glass.play();
            glass.setVolume(1.5);
            ruby.lifetime = 0;
            //Increase the score
            score = score + 1;
        }

        if (hammer.isTouching(work3) && You.collide(work3)) {
            fill("blue");
            textSize(25);
            work3.changeAnimation("fri3_work2.png", fri3work2);
            text("Let's go! It finally opened!", You.x, You.y + 150);
            hammer.x = work3.x;
            hammer.y = work3.y;
            go.play();
            boi.stop();
        } else if (You.collide(work3)) {
            fill("blue");
            textSize(25);
            text("Hey boi, can I have a hammer?", You.x, You.y + 150);
            work3.changeAnimation("fri3_work.png", fri3work);
            boi.play();
        } else if (scor3.isTouching(work3)) {
            tasks = tasks + 1;
            scor3.lifetime = 0;
        }

        if (tape.isTouching(work2) && You.collide(work2)) {
            work2.changeAnimation("fri2_work2.png", fri2work2);
            pog.play();
            pog.setVolume(1.5);
            fill(rgb(250, 175, 175));
            textSize(25);
            tape.x = work2.x;
            tape.y = work2.y;
            text("Thank you so much!", You.x, You.y + 150);
            sen.stop();
        } else if (scor2.isTouching(work2)) {
            tasks = tasks + 1;
            scor2.lifetime = 0;
        }else if (You.collide(work2)) {
            fill(rgb(250, 175, 175));
            textSize(25);
            text("Hi, can you get me some tape?", You.x, You.y + 150);
            work2.changeAnimation("fri2_work.png", fri2work);
            sen.play();
        } 

        if (screw.isTouching(work1) && You.collide(work1)) {
            fill("yellow");
            textSize(25);
            text("Thanks man! You're the best!!!", You.x, You.y + 150);
            screw.x = work1.x;
            screw.y = work1.y;
            myman.stop();
            thanks.play();
        }  else if (You.collide(work1)) {
            fill("yellow");
            textSize(25);
            text("My man, could you get a screwdriver?", You.x, You.y + 150);
            myman.play();
        }  else if (scor1.isTouching(work1)) {
            tasks = tasks + 1;
            scor1.lifetime = 1;
        }

        if (You.isTouching(screw)) {
            screw.x = You.x;
            screw.y = You.y - 40;
            scor1.x = screw.x;
            scor1.y = screw.y - 30;}

        if (You.isTouching(tape)) {
            tape.x = You.x;
            tape.y = You.y - 40;
            scor2.x = tape.x;
            scor2.y = tape.y - 30;}

        if (You.isTouching(hammer)) {
            hammer.x = You.x;
            hammer.y = You.y - 40;
            scor3.x = hammer.x;
            scor3.y = hammer.y - 30;}

        //Open the wall after the player has 3 tasks done
        if (tasks > 2.9) {
            kwall7.lifetime = 0;
            kwall7.lifetime = 0;
            fill("gray")
            textSize(20)
            text("The door is open!", 970, 0)
        }

        if (You.isTouching(cake)) {
            crunch.play();
            fill(rgb(175, 125, 75));
            textSize(30);
            text("Sounds oddly crunchy for a cake", You.x + 25, You.y + 50);
        }

        if (You.isTouching(cookie)) {
            crunch.play();
            fill(rgb(175, 125, 75));
            textSize(30);
            text("Doesn't sound like a cookie", You.x + 25, You.y + 50);
        }

        //Block the player if they didn't complete all the tasks
        if (tasks > 2.9 && You.collide(door)) {
            gameState = TIRED;
            mus_4.stop();
            work1.lifetime = 0;
            work2.lifetime = 0;
            work3.lifetime = 0;
            ruby.lifetime = 0;
            hammer.lifetime = 0;
            screw.lifetime = 0;
            tape.lifetime = 0;
            You.x = You.x - 250;
            the_bed = createSprite(-950, 100, 50, 50);
            the_bed.addImage("bed.png", wood_bed);
            the_bed.scale = 0.35;
            bwall0a = createSprite(-1025, -100, 5, 500);
            bwall1a = createSprite(-225, -100, 5, 500);
            bwall2a = createSprite(-625, -350, 800, 5);
            bwall3a = createSprite(-625, 150, 800, 5);
            room_wallsb = [bwall0a, bwall1a, bwall2a, bwall3a]
        } 

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
            ruby.changeAnimation("ruby.png", red_gem);
        }
        else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
            ruby.changeAnimation("ruby2.png", red_gem2);
        }
        else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
            ruby.changeAnimation("ruby3.png", red_gem3);
        }
        
        camera.x = You.x
        camera.y = You.y
        drawSprites();
    }

    if (gameState === TIRED) {
        background(carpet)
        mus_6.stop();
        fill(rgb(100, 0, 0));
        textSize(25)
        text("My head hurts", You.x + 10, You.y - 50);
        for (var k = 0; k <= 7; k++) { kitchen_walls[k].lifetime = 0; }
        for (var m = 0; m <= 3; m++) {
            if (score == 1 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("My bedroom walls... again", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            } else if (score == 0 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("My bedroom walls", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            } else if (score >= 2 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("What are they hiding from me?", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            }
        }

        if (score >= 2 && You.collide(the_bed)) {
            for (var m = 0; m <= 3; m++) { room_wallsb[m].visible = false; }
            roar.play();
            roar.setVolume(1.5);
            //Create a monster to chase the character when they go down or up
            monster = createSprite(-500, You.y, 100, 100);
            monster.addImage("Lumpbeefbroth.png", lump);
            monster.addImage("Lumpbeefbroth2.png", lump2);
            monster.addImage("Lumpbeefbroth3.png", lump3);
            monster.scale = 3;
            gameState = DREAM;
            mus_6.loop();
            mus_6.setVolume(0.4);
        } else if (score < 2 && You.collide(the_bed)) {
            gameState = WOKE;
        }

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
        }else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
        }else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);}
        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === DREAM) {
        //I hope you get the point of the code now
        background(danger);
        monster.velocityX = -4.5;
        monster.y = You.y;
        fill("red");
        textSize(23);
        text("I have to keep running", You.x - 25, You.y - 75);
        if (You.collide(monster)) {
            scream.play();
            gameState = TIRED;
            monster.lifetime = 0;
            You.x = -900;
            You.y = -10;
            for (var m = 0; m <= 3; m++) { room_wallsb[m].visible = true; }
            for (var m = 0; m <= 3; m++) {
                if (score == 1 && You.collide(room_wallsb[m])) {
                    fill("white");
                    textSize(23);
                    text("My bedroom walls... again", You.x, You.y + 200);
                    hitSound.play();
                    hitSound.setVolume(0.25)
                } else if (score == 0 && You.collide(room_wallsb[m])) {
                    fill("white");
                    textSize(23);
                    text("My bedroom walls", You.x, You.y + 200);
                    hitSound.play();
                    hitSound.setVolume(0.25)
                } else if (score >= 2 && You.collide(room_wallsb[m])) {
                    fill("white");
                    textSize(23);
                    text("What are they hiding from me? Why am I here?", You.x, You.y + 200);
                    hitSound.play();
                    hitSound.setVolume(0.25)
                }
            }
        }

        if (You.x < -7000) {
            gameState = WOKE;
            monster.lifetime = 0;
            You.x = -800;
            You.y = 50;
        }

        if (You.x < -5000) {
            background(mind);
            fill("white");
            textSize(23);
            text("Is this my brain?", You.x - 25, You.y - 75);
        }

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
            monster.changeAnimation("Lumpbeefbroth.png", lump);}
        else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
            monster.changeAnimation("Lumpbeefbroth2.png", lump2);}
        else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);
            monster.changeAnimation("Lumpbeefbroth3.png", lump3);}

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === WOKE) {
        background(carpet);
        mus_6.stop();
        if (score < 2 && You.x < -700) {
            fill("white");
            textSize(30);
            text("That was a good dream :)", -700, -50);
        } else if (score >= 2 && You.x < -700) {
            for (var m = 0; m <= 3; m++) { room_wallsb[m].visible = true; }
            fill("white");
            textSize(30);
            text("What w-w-was that thing chasing me?", -700, -50);
        }
        for (var m = 0; m <= 3; m++) {
            if (score == 1 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("My bedroom walls... again", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            } else if (score == 0 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("My bedroom walls", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            } else if (score >= 2 && You.collide(room_wallsb[m])) {
                fill("white");
                textSize(23);
                text("What are they hiding from me? Why am I here?", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25)
            }
        }
        if (You.collide(door)) {
            opening.play();
            gameState = WHO;
            mus_5.loop();
            mus_5.setVolume(0.25);
            the_bed.lifetime = 0;
            You.x = You.x + 150;
            nwall0 = createSprite(500, 350, 1500, 5);
            nwall1 = createSprite(-250, 0, 5, 500);
            nwall2 = createSprite(175, -350, 2175, 5);
            nwall3 = createSprite(-570, 350, 650, 5);
            nwall4 = createSprite(1250, 0, 5, 700);
            nwall5 = createSprite(-900, 0, 10, 700);
            nwall6 = createSprite(-575, -50, 650, 5);
            new_walls = [nwall0, nwall1, nwall2, nwall3, nwall4, nwall5, nwall6]
            scientist = createSprite(600, 50, 40, 40);
            scientist.addImage("scientist.png", science);
            scientist.addImage("scientist2.png", science2);
            scientist.addImage("scientist3.png", science3);
            scientist.scale = 0.5;
            fri1 = createSprite(400, 50, 40, 40);
            fri1.addImage("cur.png", curious1);
            fri1.addImage("cur1_2.png", curious1_2);
            fri1.addImage("cur1_3.png", curious1_3);
            fri2 = createSprite(200, 50, 40, 40);
            fri2.addImage("cur2.png", curious2);
            fri2.addImage("fri21.png", fre);
            fri2.setCollider('rectangle', 0, 0, 90, 120);
            fri2.scale = 0.75;
            fri3 = createSprite(800, 50, 40, 40);
            fri3.addImage("cur3.png", curious3);
            fri3.scale = 0.75;
            cake = createSprite(1050, 255, 20, 20);
            cake.addImage("cake.png", yum1);
            cookie = createSprite(1200, -255, 10, 10);
            cookie.addImage("cookie.png", yum2);
            emerald = createSprite(-850, 300, 40, 40);
            emerald.addImage("greeny.png",  emer1);
            emerald.addImage("greeny2.png", emer2);
            emerald.addImage("greeny3.png", emer3);
            emerald.scale = 0.1;
            emerald.visible = false;
            for (var m = 0; m <= 3; m++) { room_wallsb[m].visible = false; }
        }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
        } else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
        } else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);}

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === WHO) {
        background(Grass);
        for (var n = 0; n <= 6; n++) {
            if (score >= 2 && You.collide(new_walls[n])) {
                textSize(30)
                text("Here are the walls again...", You.x + 20, You.y + 150);
                hitSound.play();
                hitSound.setVolume(0.4);
            } else if (score <= 1 && You.collide(new_walls[n])) {
                textSize(23)
                text("The infirmary walls", You.x + 20, You.y + 150);
                hitSound.play();
                hitSound.setVolume(0.4);
            }
        }

        if (You.collide(scientist)) {
            fill("purple")
            textSize(30);
            text("hmmm (I don't want to talk to him)", You.x + 20, You.y + 150)
            hmm.play();
            hmm.setVolume(1.3)
            tasks = tasks + 1;
        }

        if (You.collide(fri3)) {
            fill("blue");
            textSize(30);
            text("Huh, why is woman here? She's kind though.", You.x - 175, You.y + 150)
            huh.play();
            huh.setVolume(1.5);
        }

        if (You.collide(fri2)) {
            fill(rgb(250, 175, 175));
            textSize(30);
            text("Rawr! Ha ha, you had a nightmare? So sad (^ w ^)", You.x - 225, You.y + 150)
            cutie.play();
            cutie.setVolume(1.6);
        }

        if (You.collide(fri1)) {
            fill("yellow");
            textSize(30);
            text("Who is she, why is she here?", You.x + 20, You.y + 150)
            hold.play();
            hold.setVolume(1.4);
        }

        if (You.isTouching(cake)) {
            ate.play();
            ate.setVolume(0.6);
            cake.lifetime = 0;
        }

        if (You.isTouching(cookie)) {
            ate.play();
            ate.setVolume(0.6);
            cookie.lifetime = 0;
            emerald.visible = true;
        }

        if (tasks >= 4 && You.collide(door)) {
            opening.play();
            You.x = You.x - 150;
            gameState = SNOOZE;
            the_bed = createSprite(-950, 100, 50, 50);
            the_bed.addImage("bed.png", wood_bed);
            the_bed.scale = 0.35;
            cwall0 = createSprite(-1025, -100, 5, 500);
            cwall1 = createSprite(-225, -100, 5, 500);
            cwall2 = createSprite(-625, -350, 800, 5);
            cwall3 = createSprite(-625, 150, 800, 5);
            croom_walls = [cwall0, cwall1, cwall2, cwall3]
        }

        if (You.isTouching(emerald)) {
            zap.play();
            zap.setVolume(1.5);
            score = score + 1;
            emerald.lifetime = 0;
        }

        if (World.frameCount % 17 == 12) {
            You.changeAnimation("You2.png", Main2);
            fri1.changeAnimation("cur1_2.png", curious1_2);
            fri2.changeAnimation("fri21.png", fre);
            scientist.changeAnimation("scientist.png", science);
            emerald.changeAnimation("greeny.png", emer1);
        } else if (World.frameCount % 29 == 10) {
            You.changeAnimation("You3.png", Main3);
            fri1.changeAnimation("cur.png", curious1);
            fri2.changeAnimation("cur2.png", curious2);
            scientist.changeAnimation("scientist2.png", science2);
            emerald.changeAnimation("greeny2.png", emer2);
        } else if (World.frameCount % 28 == 11) {
            You.changeAnimation("You.png", Main);
            fri1.changeAnimation("cur1_3.png", curious1_3);
            scientist.changeAnimation("scientist3.png", science3);
            emerald.changeAnimation("greeny3.png", emer3);}

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

    if (gameState === SNOOZE) {
        background(carpet);
        mus_5.stop()
        fri1.lifetime = 0;
        fri2.lifetime = 0;
        fri3.lifetime = 0;
        emerald.lifetime = 0;
        scientist.lifetime = 0;
        for (var n = 0; n <= 6; n++) { new_walls[n].visible = false }
        for (var o = 0; o <= 3; o++) {
            if (score <= 1 && You.collide(croom_walls[o])) {
                fill("white");
                textSize(23);
                text("Who was that woman?", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            } else if (score >= 2 && You.collide(croom_walls[o])) {
                fill("white");
                textSize(23);
                text("Is that woman evil?", You.x, You.y + 200);
                hitSound.play();
                hitSound.setVolume(0.25);
            }
        }

        if (You.isTouching(the_bed)) {
            //The good ending
            background(Floor);
            mus_7.loop();
            mus_7.setVolume(0.4);
            You.setCollider("rectangle", 0, 0, 90, 140);
            You.addImage("Insane1.png", insane1);
            You.addImage("Insane2.png", insane2);
            You.addImage("Insane3.png", insane3);
            You.scale = 0.7;
            gameState = SCARED;
        }

        if (World.frameCount % 14 == 12) {
            You.changeAnimation("You2.png", Main2);
        } else if (World.frameCount % 11 == 10) {
            You.changeAnimation("You3.png", Main3);
        } else if (World.frameCount % 12 == 11) {
            You.changeAnimation("You.png", Main);}

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }

//The gameState for the good ending \/
    if (gameState === SCARED) {
        if (score <= 1) {
            background(carpet);
        } else {
            background(Floor);
        }
        for (var n = 0; n <= 6; n++) { new_walls[n].visible = false }
        for (var o = 0; o <= 3; o++) {
            if (score <= 1 && You.collide(croom_walls[o])) {
                textSize(23);
                fill("white");
                text(" Wait, is this my bedroom?", You.x + 20, You.y + 125);
                text("I need to get out of here!", You.x + 20, You.y + 150);
                metal.play();
                metal.setVolume(0.5);
            } else if (score >= 2 && You.collide(croom_walls[o])) {
                textSize(23);
                fill("white");
                text("I don't like this place...", You.x + 20, You.y + 125);
                text("I want to get out of here!", You.x + 20, You.y + 150);
                metal.play();
                metal.setVolume(0.5);
            }
        }

        textSize(23);
        fill("white");
        text("W-W-What is this place?", You.x + 100, You.y - 50);

        reset = createSprite(-200, -200, 100, 100);
        reset.addImage("replay.png", retry);
        reset.visible = false;

        if (score == 0 && You.isTouching(door)) {
            mus_7.stop();
            background(lost);
            for (var o = 0; o <= 3; o++) { croom_walls[o].lifetime = 0 }
            You.visible  = false;
            door.visible = false;
            reset.visible = true;
            You.x = door.x - 10;
            You.y = door.y + 10;
            fill("red");
            textSize(27);
            text("Ending 1: Blissfully Unaware ", -500, -400);
            textSize(22);
            text("You are trapped in the room forever, because you never felt like leaving it", -500, -350);
        }
        else if (score == 1 && You.isTouching(door)) {
            mus_7.stop();
            background(bliss);
            for (var o = 0; o <= 3; o++) { croom_walls[o].lifetime = 0 }
            You.visible  = false;
            door.visible = false;
            reset.visible = true;
            You.x = door.x;
            You.y = door.y;
            fill("white");
            textSize(27);
            text("Ending 2: In Regret", -500, -400);
            textSize(22);
            text("You know the secrets of the room, but you will never escape it", -500, -350);
        }
        else if (score == 2 && You.isTouching(door)) {
            mus_7.stop();
            background(win);
            for (var o = 0; o <= 3; o++) { croom_walls[o].lifetime = 0 }
            You.visible =  false;
            door.visible = false;
            reset.visible = true;
            You.x = door.x;
            You.y = door.y;
            fill("white");
            textSize(22);
            text("Ending 3: Solo Adventurer", -500, -400);
            textSize(22);
            text("You have escaped in the room, sadly your friends can't say the same", -500, -350);
            
        }
        else if (score == 3 && You.isTouching(door)) {
            mus_7.stop();
            background(end);
            for (var o = 0; o <= 3; o++) { croom_walls[o].lifetime = 0 }
            You.visible =  false;
            door.visible = false;
            reset.visible = true;
            You.x = door.x;
            You.y = door.y;
            fill("white");
            textSize(22);
            text("Ending 4: Forever Free!", -500, -450);
            textSize(22);
            text("You and your friends all have escaped the room successfully", -500, -400);
            text("and you all lived happily ever after", -450, -400);
        }

        if (mousePressedOver(reset)) {
            //Refresh the page for the player!
            location.reload();
            return false;
        }

        if (World.frameCount % 23 == 12) {
            You.changeAnimation("Insane1.png", insane1);
        } else if (World.frameCount % 21 == 10) {
            You.changeAnimation("Insane2.png", insane2);
        } else if (World.frameCount % 12 == 11) {
            You.changeAnimation("Insane3.png", insane3);}

        if (keyDown("up_arrow") || keyDown("W")) { You.velocityY = -5 } else { You.velocityY = 0 }
        if (keyDown("down_arrow") || keyDown("S")) { You.velocityY = 5 }
        if (keyDown("left_arrow") || keyDown("A")) { You.velocityX = -5 } else { You.velocityX = 0 }
        if (keyDown("right_arrow") || keyDown("D")) { You.velocityX = 5; }

        camera.x = You.x;
        camera.y = You.y;
        drawSprites();
    }
}
