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

        document.querySelector('#hour').innerHTML = (hours < 10) ? '0' + hours : hours;
        document.querySelector('#minute').innerHTML = (minutes < 10) ? '0' + minutes : minutes;
        document.querySelector('#secnd').innerHTML = (seconds < 10) ? '0' + seconds : seconds;
    }
);