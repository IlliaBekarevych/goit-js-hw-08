import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (evt) {
  const time = evt.seconds;
  console.log(time);
  localStorage.setItem('videoplayer-current-time', time);
};

player.on('timeupdate', throttle(onPlay, 1000));

const timePlay = localStorage.getItem('videoplayer-current-time');
console.log(timePlay);
if (timePlay !== '') {
  player.setCurrentTime(timePlay);
}
