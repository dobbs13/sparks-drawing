let showEffect = false;
let mouseMove = function(e) {
    if (!showEffect) {
        return
    }

        let body = document.querySelector('body');
        let sparks = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;

        sparks.style.left = x + 'px';
        sparks.style.top = y + 'px';
        body.appendChild(sparks);

        let size = Math.random() * 10;
        sparks.style.width = 2 + size + 'px';
        sparks.style.height = 2 + size + 'px';

        let transformValue = Math.random() * 360;
        sparks.style.transform = 'rotate(' + transformValue + 'deg)';

        setTimeout(function () {
        sparks.remove();
  }, 2000);
}

 document.addEventListener('mousedown', function(e) {
    showEffect = true;
});

document.addEventListener('mouseup', function(e) {
    showEffect = false;
})

document.addEventListener('mousemove', mouseMove)
