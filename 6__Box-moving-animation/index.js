let pos = 0;
const box = document.querySelector('.box');
const container = document.querySelector('.container');
let t = setInterval(move, 15);
function move() {
  if (pos === 334) {
    clearInterval(t);
    container.style.borderColor = '#6a89cc';
  } else {
    pos += 1;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
  }
}
