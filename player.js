class player{
    //essential variables for player
    Spawn(x,y, colour) {
        this.playerX = 0;
        this.playerY = 0;

        this.playerX = x;
        this.playerY = y;
        this.bulletDelayTimer = BULLET_DELAY;
        this.colour = colour;
    }
    //Player movement
    UpdatePlayer(goUp, goDown){
        if (goUp){
            this.playerY -= playerSpeed;
        }
        if (goDown){
            this.playerY += playerSpeed;
        }
    }

    DrawPlayer(){
        //player box
        canvasContext.fillStyle = this.colour;
        canvasContext.fillRect(this.playerX,this.playerY,player_width,player_height);
    }

    playerCollide(){
        //Player collide with side of canvas on both axis
        if (this.playerX + player_width > canvas.width){
            this.playerX = canvas.width - player_width;
        }
        if (this.playerY + player_height > canvas.height){
            this.playerY = canvas.height - player_height;
        }
        if (this.playerX  < 0){
            this.playerX = 0;
        }
        if (this.playerY  < 0){
            this.playerY = 0;
        }
    }

}