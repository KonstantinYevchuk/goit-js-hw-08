import Player from '@vimeo/player';
console.log(Player);
var throttle = require('lodash.throttle');

const KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

 
player.on('timeupdate', throttle(data => {
    localStorage.setItem(KEY, JSON.stringify(data.seconds))}, 1000) 
);

player.setCurrentTime(localStorage.getItem(KEY) || 0);


