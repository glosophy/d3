const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);

// canvas.addEventListener('mousemove', function (e) {
//   ctx.beginPath();
//   ctx.rect(e.x, e.y, 10, 10);
//   ctx.fill();
//   // console.log(e.x, e.y);
// })

const degToRad = (deg) => {
  return deg / 180 * Math.PI;
};

ctx.beginPath();
ctx.arc(100, 100, 50, 0, degToRad(90));
ctx.stroke();
