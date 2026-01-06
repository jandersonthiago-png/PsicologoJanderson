document.getElementById('year').textContent = new Date().getFullYear();
const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
let playing = false;
toggleBtn.addEventListener('click', () => {
  if (!playing) { music.play(); toggleBtn.textContent = '⏸ Parar música'; }
  else { music.pause(); toggleBtn.textContent = '🎵 Tocar música'; }
  playing = !playing;
});
