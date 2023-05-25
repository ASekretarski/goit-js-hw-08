import Vimeo from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function setTime(timeStamp) {
        localStorage.setItem("videoplayer-current-time", timeStamp.seconds)
}
    
const throttled = throttle(setTime, 1000)

player.on('timeupdate', (event) => {
    throttled(event)
})



function getTime() {
    if (localStorage.getItem("videoplayer-current-time") !== null) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    }
}

getTime()
