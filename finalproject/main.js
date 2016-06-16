var player;
var playerImg;
var JUMP;
var GRAVITY;
var numGroundSprites;
var groundSprites;
var google;
var googleImg;
var bing;
var bingImg;
var yahoo;
var yahooImg;

function preload(){
    playerImg=loadImage("http://i.imgur.com/J2uBjan.png");
    googleImg=loadImage("http://i.imgur.com/vOCBPSJ.png");
    bingImg=loadImage("http://i.imgur.com/ai8qkfY.png");
    yahooImg=loadImage("http://i.imgur.com/2qdDpNi.png")
    
}
function setup(){
    createCanvas(window.innerWidth-50,window.innerHeight-50);
    JUMP=-5;
    GRAVITY=.3;
    numGroundSprites=width/50;
    player=createSprite(width/2,height-75,50,50);
    player.addImage(playerImg);
    groundSprites= new Group();
    for (var n = 0; n < numGroundSprites;n++){
        var groundSprite=createSprite(n*50 + 25,height-25,50,50);
        groundSprites.add(groundSprite);
    }
    google=createSprite(width/4,height/4,100,50);
    google.addImage(googleImg);
    yahoo=createSprite(width/4,3*height/4,100,50);
    yahoo.addImage(yahooImg);
    bing=createSprite(3*width/4,height/4,100,50);
    bing.addImage(bingImg);
}
function draw(){
    background(0);
    player.velocity.y+=GRAVITY;
    if(groundSprites.overlap(player)){
        player.velocity.y=0
        player.position.y = (height-50) - (player.height/2);
    }
    if(keyDown(RIGHT_ARROW)&&player.position.x<width-10){
            player.position.x=player.position.x + 3;
    }
    if(keyDown(LEFT_ARROW)&&player.position.x>25){
        player.position.x=player.position.x - 3;
    }
    if(keyDown(UP_ARROW)&&player.position.y>25){
        player.velocity.y=JUMP;
    }
    if(camera.position.x<window.innerWidth-(camera.width+50)){
        camera.position.x=player.position.x;
    }else if(camera.position.x>camera.width){
        camera.position.x=player.position.x;
    }else{
        camera.position.x=camera.position.x;
    }
    if(google.overlap(player)){
        window.open("https//www.google.com");
    }
    drawSprites();
}