'use strict';

class RandomObj {
  constructor() {
    this.x = $.util.randomInRange(0, $.width);
    this.y = $.util.randomInRange(0, $.height);
    this.dimension = 0;
    this.targetDimension = $.util.randomInRange(50, 70);
    this.growthSpeed = $.util.randomInRange(0.5, 2);
    this.color = $.util.pickRandomFromObject($.colors);
  }
  render() {
    $.Draw.rect(this.x, this.y, this.dimension, this.dimension, this.color);
  }
  update() {
    this.dimension < this.targetDimension &&
      (this.dimension += this.growthSpeed);
  }
}
