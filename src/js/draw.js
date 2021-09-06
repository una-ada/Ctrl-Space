'use strict';

$.Draw = {
  clear: () => {
    $.ctx.clearRect(0, 0, $.width, $.height);
  },

  rect: (x, y, w, h, col) => {
    $.ctx.beginPath();
    $.ctx.rect(x, y, w, h);
    $.ctx.fillStyle = col;
    $.ctx.fill();
  },
};
