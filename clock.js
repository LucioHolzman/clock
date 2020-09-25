let hour = document.getElementById('hours');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

const hourForSecond = () => {

    let hourNow = new Date();
    let hours = `${hourNow.getHours()}`;
    let minutes = `${hourNow.getMinutes()}`;
    let seconds = `${hourNow.getSeconds()}`;

    if ((hours != hour)||(minutes != minute)||(seconds != second))
        {
        hour.innerHTML = `<h1>${hours}:</h1>`;
        minute.innerHTML = `<h1>${minutes}:</h1>`;
        second.innerHTML = `<h1>${seconds}</h1>`;
    }if(hours < 10) {
        hour.innerHTML = `<h1>0${hours}:</h1>`;
    }if(minutes < 10){
        minute.innerHTML = `<h1>0${minutes}:</h1>`;
    }if(seconds < 10){
        second.innerHTML = `<h1>0${seconds}</h1>`;
    }
}

setInterval(() => {
    hourForSecond();
}, 1000);




