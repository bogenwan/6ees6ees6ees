class HoneyMakerBee extends Bee {
  constructor (age, color, food, job) {
    super(age, color, food, job);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney () {
    return this.honeyPot += 1;
  }

  giveHoney () {
    return this.honeyPot -=1;
  }
};
