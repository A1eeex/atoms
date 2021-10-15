let clock = document.getElementById('clock');
let color = document.getElementById('color');


function cheerfulClock() {
    let time = new Date();
    let h = (time.getHours() % 24).toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;

    color.textContent = colorString;
    clock.textContent = clockString;

    document.body.style.background = colorString;
}
cheerfulClock()
setInterval(cheerfulClock, 1000)
