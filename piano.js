const keys = document.querySelectorAll(".key"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),//taking an audio eliment through data-key
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//taking all the elements associated with key

  if (!key) return; // return if the element not the key.

  key.classList.add("playing");//add the classList with css when it is playing
  audio.currentTime = 0;//rewind time
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;//return the function if its not a transform.
  this.classList.remove("playing");//removing from playing
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));//listen the transition one by one

window.addEventListener("keydown", playNote);//when key down play the music
