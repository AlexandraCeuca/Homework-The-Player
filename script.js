const button = document.getElementById("retryButton");
const gameStatus = document.getElementById("gameStatus");

class Player {
    constructor() {
    this.lives = 3;
    this.liveElement = document.getElementById("livesLeft");
    this.player = document.getElementById("player");
    this.listener = (event) => this.handlePlayerMovement(event);
    
    this.initializeItems();
    this.initializePlayer();
    this.setLives();
    }

    initializeItems() {
        document.addEventListener('keyup', this.listener );
        this.liveElement.style.color="rgb(1 148 1)";
    }

    initializePlayer() { 
        this.player.style.left = "1px";
        this.player.style.top = "290px";
        this.player.src= "./pictures/marathon.png";
        this.player.style.transform="scaleX(1)";
    }

    setLives() {
        this.liveElement.innerText=this.lives;
    }

    decreaseLives() {
        this.lives--;
        this.setLives();
    }

    setPlayerStatus(hurt) {
        this.playerStatus = hurt ? "./pictures/marathon_hurt.png" : "./pictures/marathon.png";
        this.player.src= this.playerStatus;
    }

    handlePlayerMovement(event) {
        switch(event.key) {
            case 'ArrowUp':
                this.handlePlayerPositionY(true);
                break;
            case 'ArrowDown':
                this.handlePlayerPositionY(false);
                break;
            case 'ArrowLeft':   
            this.handlePlayerPositionX(true);
                break;
            case 'ArrowRight':
                this.handlePlayerPositionX(false);
                break;
        }
    }

    handlePlayerPositionX(movedLeft) {
        let nextPositionX = parseInt(this.player.style.left) + (movedLeft ? -20 : + 20) ;
        this.changePlayerOrientation(movedLeft);
        if (checkObstaclesOzizontaly(nextPositionX, this.player.style.top)) {
            this.player.style.left = nextPositionX + 'px';
        } else {
            let lastValidPositionX = this.player.style.left;
            this.player.style.left = nextPositionX + 'px';
            this.handlePlayerError();
            setTimeout(() => this.setStatusBeforError(lastValidPositionX, this.player.style.top), 500);
        }
    }

    handlePlayerPositionY(movedUP) {
        let nextPositionY = parseInt(this.player.style.top) + (movedUP ? -20 : + 20);
        if (checkObstaclesOzizontaly(this.player.style.left, nextPositionY)) {
            this.player.style.top = nextPositionY + 'px';
        } else {
            let lastValidPositionY = this.player.style.top;
            this.player.style.top = nextPositionY + 'px';
            this.handlePlayerError();
            setTimeout(() => this.setStatusBeforError(this.player.style.left, lastValidPositionY), 500);
        }
    }

    changePlayerOrientation(left) {
        this.player.style.transform = left ? "scaleX(-1)" : "scaleX(1)";
    }

    changePlayerStatus(playerIsFine) {
        this.player.src = playerIsFine ? "./pictures/marathon.png" : "./pictures/marathon_hurt.png"
    }

    handlePlayerError() {
        this.decreaseLives();
        this.liveElement.style.color = "red";
        this.changePlayerStatus(false);
        document.removeEventListener('keyup', this.listener);
    }
    
    setStatusBeforError(lastPositionX, lastPositionY) {
        if(this.checkGameStatus()) {
            this.changePlayerStatus(true);
            this.player.style.left = lastPositionX;
            this.player.style.top = lastPositionY;
            this.liveElement.style.color = "rgb(1 148 1)";
            document.addEventListener('keyup', this.listener);
        }
    }

    checkGameStatus() {
        if(this.lives === 0) {
            document.removeEventListener('keyup', this.listener);
            showRetry();
            return false;
        }
        return true;
    }
}

function giveItATry() {
    let playerObject = new Player();
    hideRetry();
}

function checkObstaclesOzizontaly(positionX, positionY) {
    positionX = parseInt(positionX);
    positionY = parseInt(positionY);
    console.log(positionX);
    console.log(positionY);
    if(positionY > 291 || positionY < 0) {
        return false;
    }
    if(positionX < 1 || positionX > 970) {
        return false;
    }
    if (positionY > 250 && positionX > 162 && positionX < 281) {
        return false;
    }

    if (positionY > 250 && positionX > 601 && positionX < 721) {
        return false;
    }
    
    if (positionY > 250 && positionX > 781 && positionX < 901) {
        return false;
    }
    if (positionY < 270 && positionY > 170 && positionX > 301 && positionX < 401) {
        return false;
    }
    if (positionY < 270 && positionY > 170 && positionX > 681 && positionX < 781) {
        return false;
    }
    if (positionY > 190 & positionX > 421 && positionX < 501) {
        return false;
    }
        return true;

}
function showRetry() {
    gameStatus.style.display = "block";
    button.style.display = "block";
}

function hideRetry() {
    gameStatus.style.display = "none";
    button.style.display = "none";
}

giveItATry();