// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        if (this.sides.length === 3) {
            return this.sides[0] + this.sides[1] + this.sides[2];
        } else if (this.sides.length === 4) {
            return this.sidess[0] + this.sides[1] + this.sides[2] + this.sides[3];
        }
    }
};