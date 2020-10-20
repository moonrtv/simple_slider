document.getElementById('slider-left').onclick = moveLeft;

let left = 0;

function moveLeft() {
    let line = document.getElementById('line');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    line.style.left = `${left}px`;
}