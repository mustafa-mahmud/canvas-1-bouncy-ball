'use strict';

const canvas = document.getElementById('canvas');

if (canvas.getContext) {
  /** @type {CanvasRenderingContext2D} */

  const ctx = canvas.getContext('2d');

  //Animation 1
  const circle = {
    x: 50,
    y: 50,
    size: 10,
    dx: 3,
    dy: 3,
  };

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();

    //change postion
    circle.x += circle.dx;
    circle.y += circle.dy;

    //Detect side walls: Left & Right
    if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
      circle.dx *= -1; //circle.dx=circle.dx*-1;
    }

    //Detect side walls: Top & Bottom
    if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
      circle.dy *= -1; //circle.dx=circle.dx*-1;
    }

    requestAnimationFrame(update);
  }

  update();

  ///////////////////////
}
