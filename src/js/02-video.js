import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

function onPlay(options) {
    options = {
         duration: 61.857,
         percent: 0.049,
         seconds: 3.034
         }   
 }
player.on('timeupdate', onPlay);



player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

