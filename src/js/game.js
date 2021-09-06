'use strict';

const $ = {
  width: 600,
  height: 600,
  colors: {
    yellow: 'rgba(255, 255, 155, 1)',
    orange: 'rgba(255, 77, 77, 1)',
    pink: 'rgba(255, 128, 255, 1)',
    green: 'rgba(129, 255, 226, 1)',
    blue: 'rgba(94, 0, 244, 1)',
  },
  entities: [],
  init: _ => {
    $.canvas = document.querySelector('canvas');
    $.canvas.width = $.width;
    $.canvas.height = $.height;
    $.ctx = $.canvas.getContext('2d');

    $.generateRandomObjects();

    $.loop();
  },
  loop: _ => {
    $.render();
    $.update();
    requestAnimFrame($.loop);
  },
  update: _ => $.entities.forEach(e => e.update()),
  render: _ => {
    $.Draw.clear();
    $.entities.forEach(e => e.render());
  },
  generateRandomObjects: _ =>
    ($.entities = Array.from({ length: 50 }, _ => new RandomObj())),
};

window.addEventListener('load', $.init, false);
window.addEventListener('click', $.generateRandomObjects);
