function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.code}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
