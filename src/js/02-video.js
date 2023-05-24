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

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))