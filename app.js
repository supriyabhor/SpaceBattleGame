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

