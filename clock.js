setInterval(
    () =>
    {
        let timestamp = new Date();

        let hours = timestamp.getHours();
        let minutes = timestamp.getMinutes();
        let seconds = timestamp.getSeconds();

        let analogClock = document.querySelector('#analogClock');
        analogClock.children[0].style.transform = `rotateZ(${seconds * 6}deg)`;
        analogClock.children[1].style.transform = `rotateZ(${minutes * 6}deg)`;
        analogClock.children[2].style.transform = `rotateZ(${ (hours * 30) + ((minutes * 6) / 12)}deg)`;

        let digitalClock = document.querySelector('#digitalClock');
        digitalClock.children[0].innerHTML = (hours < 10) ? '0' + hours : hours;
        digitalClock.children[1].innerHTML = (minutes < 10) ? '0' + minutes : minutes;
        digitalClock.children[2].innerHTML = (seconds < 10) ? '0' + seconds : seconds;
    }
);