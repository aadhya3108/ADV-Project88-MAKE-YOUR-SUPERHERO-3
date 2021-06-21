var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
head_x = head_y = body_x = body_y = right_x = right_y= left_x = left_y = legs_x = legs_y = 0
var player_object = " ";

function player_update(){
    my_calculate()
    fabric.Image.fromURL("player.jpg" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    })
}

function new_image(get_image,x,y){
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({top:y,left:x});
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
   
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up")
    }
    if(keyPressed == '40'){
        down();
        console.log("down")
    }
    if(keyPressed == '37'){
        left();
        console.log("left")
    }
    if(keyPressed == '39'){
        right();
        console.log("right")
    }
    if(keyPressed == '72'){
        new_image('captain_america_left_hand.png',left_x, left_y);
        console.log("h")
    }
    if(keyPressed == '82'){
        new_image('hulk_right_hand.png',right_x,right_y);
        console.log("r")
    }
    if(keyPressed == '76'){
        new_image('spiderman_legs.png',legs_x ,legs_y);
        console.log("l")
    }
    if(keyPressed == '66'){
        new_image('ironman_body.png',body_x,body_y);
        console.log("b")    
    }
    if(keyPressed == '70'){
        new_image('thor_face.png', head_x,head_y);
        console.log("f")
    }
    
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("when down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - block_image_width;
        console.log("block_image_height = " + block_image_width);
        console.log("when left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("block_image_width = " + block_image_width);
        console.log("when right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

window.addEventListener("calculate", my_calculate);
function my_calculate()
{
    //alert(player_x, player)
    head_x = player_x + 200;
    head_y = player_y - 50;
    body_x = head_x + 8;
    body_y = head_y + 30;
    left_x = body_x + 15;
    left_y = body_y - 15;
    right_x = body_x - 25;
    right_y = body_y + 0;
    legs_x = body_x + 0;
    legs_y = body_y + 30;
} 