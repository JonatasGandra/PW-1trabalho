const acordes = document.querySelectorAll('.acorde');

acordes.forEach(acorde => {
  acorde.addEventListener('click', function() {
    const audioPath = this.dataset.audio;
    const audio = new Audio(audioPath);
    audio.play();
  });
});