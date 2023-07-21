export class Wolf {
  constructor(strength = Math.floor(Math.random() * 100)) {
    this.strength = strength;
  }

  howl() {
    return "Auuuuuuuuu";
  }
}
