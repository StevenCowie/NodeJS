class bullet {
    Spawn(x,y,speed,playerID) {
        this.bulletX = 0;
        this.bulletY = 0;

        this.bulletX = x;
        this.bulletY = y;
        this.bulletSpeed = speed;
        this.bulletShooter = playerID;
    }
    Update() {
        this.bulletX += this.bulletSpeed;//BULLET_SPEED;
    }
    Draw() {
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect(this.bulletX,this.bulletY,BULLET_WIDTH,BULLET_HEIGHT);
    }
    CheckCollision() {
        //checks if player 2 is hit
        if(this.bulletX + BULLET_WIDTH > players[1].playerX &&
            this.bulletX - BULLET_WIDTH < players[1].playerX &&
            this.bulletY - BULLET_HEIGHT < players[1].playerY &&
            this.bulletY + BULLET_HEIGHT > players[1].playerY &&
            this.bulletShooter < 1)
            resetPlayer2();
        //checks if player 1 is hit
        if(this.bulletX + BULLET_WIDTH > players[0].playerX &&
            this.bulletX - BULLET_WIDTH < players[0].playerX &&
            this.bulletY - BULLET_HEIGHT < players[0].playerY &&
            this.bulletY + BULLET_HEIGHT > players[0].playerY &&
            this.bulletShooter > 0)
            resetPlayer();
        //checks if bullet hits obstacles
        if(this.bulletX + BULLET_WIDTH > obsticle1X &&
            this.bulletX - BULLET_WIDTH < obsticle1X &&
            this.bulletY - BULLET_HEIGHT < obsticle1Y &&
            this.bulletY + BULLET_HEIGHT > obsticle1Y )
        {this.bulletX = undefined}
        if(this.bulletX + BULLET_WIDTH > obsticle2X &&
            this.bulletX - BULLET_WIDTH < obsticle2X &&
            this.bulletY - BULLET_HEIGHT < obsticle2Y &&
            this.bulletY + BULLET_HEIGHT > obsticle2Y )
        {this.bulletX = undefined}
    }

    bulletCollisions(){
        //clamps Y value of bullet
        if (this.bulletY + BULLET_HEIGHT > canvas.height){
            this.bulletY = canvas.height - this.bulletY
        }
        if (this.bulletY  < 0){
            this.bulletY = 0;
        }
    }
}