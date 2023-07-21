export class Tiger {
  constructor(strength = Math.floor(Math.random() * 100)) {
    this.strength = strength;
  }

  growl() {
    return "grrrrrrr";
  }
}
