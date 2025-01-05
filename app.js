// Ship Class (Base Class)
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

     // Attack method 
  attack(target) {
    if (Math.random() < this.accuracy) {
        target.hull -= this.firepower;
        return true; // Successful hit
    }
    return false; // Miss the attack
}
}

// Human Ship (Subclass of Ship)
class HumanShip extends Ship {
    constructor() {
        super(20, 5, 0.7); // USS Assembly
    }
  
  }

  //Alian Ship (subclass of ship)
  class AlienShip extends Ship {
    constructor() {
        const hull = Math.floor(Math.random() * 4) + 3; // Hull between 3 and 6
        const firepower = Math.floor(Math.random() * 3) + 2; // Firepower between 2 and 4
        const accuracy = (Math.floor(Math.random() * 3) + 6) / 10; // Accuracy between 0.6 and 0.8
        super(hull, firepower, accuracy);
    }

    //alian attack
    attack(target) {
        if(Math.random() < this.accuracy) {
            target.hull -= this.firepower;
            return true; // Alien hit

             }
         return false; // Alien miss
    }
  }

  //Game Object
  const game = {
    playerShip: new HumanShip(),
    alienShips: [],
    currentAlienIndex: 0,
    gameOver: false,

    // Attack an alien ship
  attack: function() {
    if (this.gameOver) return;

    const alien = this.alienShips[this.currentAlienIndex];
    const playerHit = this.playerShip.attack(alien);

    if (playerHit) {
        logBattle(`You hit the alien! Alien hull: ${alien.hull}`);
    } else {
        logBattle("You missed the alien!");
    }

    if (alien.hull <= 0) {
        logBattle("You destroyed the alien ship!");
        this.checkWin();
    } else {
        this.alienAttack(alien);
    }
    this.updateStatus();
},
  }  