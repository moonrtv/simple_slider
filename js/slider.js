autoSlider()

let left = 0;

function autoSlider() {

    let timer = setTimeout(function() {
        let line = document.getElementById('line');
        left = left - 128;

        if (left < -512) {
            left = 0;
            clearTimeout(timer);
        }

        line.style.left = `${left}px`;
        autoSlider();
    }, 2000);
}