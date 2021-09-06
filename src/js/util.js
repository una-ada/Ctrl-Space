'use strict';

$.util = {
  randomInRange: (min, max) => Math.random() * (max - min) + min,
  pickRandomFromObject: o =>
    (k => o[k[~~(k.length * Math.random())]])(Object.keys(o)),
};

window.requestAnimFrame = (_ =>
  requestAnimationFrame ||
  mozRequestAnimationFrame ||
  (next => setTimeout(next, 1e3 / 60)))();
