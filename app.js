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