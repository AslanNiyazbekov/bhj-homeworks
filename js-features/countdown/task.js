const countDownElement = document.getElementById('timer');
let time = countDownElement.textContent

function updateCountDown () {
    let hour = Math.floor(time/3600);
    hour = hour < 10 ? "0" + hour : hour;

    let minutes = Math.floor(time/60);
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let seconds =time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countDownElement.innerHTML = `${hour} : ${minutes} : ${seconds}`;
    time--;

     if (countDownElement.textContent === '00 : 00 : 00'){
        window.alert('Вы победили в конкурсе!');
        clearTimeout(timeoutId);
    }
    };

    let timeoutId = setInterval(updateCountDown, 1000);

    