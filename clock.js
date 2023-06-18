setInterval(
    () =>
    {
        let timestamp = new Date();

        let hours = timestamp.getHours();
        let minutes = timestamp.getMinutes();
        let seconds = timestamp.getSeconds();

        document.querySelector('#hours').style.transform = `rotateZ(${ (hours * 30) + ((minutes * 6) / 12)}deg)`;
        document.querySelector('#minutes').style.transform = `rotateZ(${minutes * 6}deg)`;
        document.querySelector('#seconds').style.transform = `rotateZ(${seconds * 6}deg)`;

        let digitalClock = document.querySelector('#digitalClock');
        digitalClock.children[0].innerHTML = (hours < 10) ? '0' + hours : hours;
        digitalClock.children[1].innerHTML = (minutes < 10) ? '0' + minutes : minutes;
        digitalClock.children[2].innerHTML = (seconds < 10) ? '0' + seconds : seconds;
    }
);