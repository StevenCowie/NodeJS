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
        if(this.bulletX + BULLET_WIDTH > player2X &&
            this.bulletX - BULLET_WIDTH < player2X &&
            this.bulletY - BULLET_HEIGHT < player2Y &&
            this.bulletY + BULLET_HEIGHT > player2Y &&
            this.bulletShooter < 1)
            resetPlayer2();
        if(this.bulletX + BULLET_WIDTH > playerX &&
            this.bulletX - BULLET_WIDTH < playerX &&
            this.bulletY - BULLET_HEIGHT < playerY &&
            this.bulletY + BULLET_HEIGHT > playerY &&
            this.bulletShooter > 0)
            resetPlayer();
        if(this.bulletX + BULLET_WIDTH > obsticle1X &&
            this.bulletX - BULLET_WIDTH < obsticle1X &&
            this.bulletY - BULLET_HEIGHT < obsticle1Y &&
            this.bulletY + BULLET_HEIGHT > obsticle1Y )
        {this.bulletX = undefined}

    }
}