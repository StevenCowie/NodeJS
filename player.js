class player{
    Spawn(x,y) {
        this.playerX = 0;
        this.playerY = 0;

        this.playerX = x;
        this.playerY = y;
    }
    UpdatePlayer(){
        if (keyW){
            this.playerY -= playerSpeed;
        }
        if (keyS){
            this.playerY += playerSpeed;
        }
    }

    DrawPlayer(){
        //player box
        canvasContext.fillStyle = 'red';
        canvasContext.fillRect(this.playerX,this.playerY,player_width,player_height);
    }

    playerCollide(){
        //Player collide with side of canvas
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