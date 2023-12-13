// Функция для воспроизведения мелодии
// Функция для воспроизведения звука в зависимости от кода клавиши
function playSound(keyCode) {
  let audio;

  if (keyCode === "65") {
    // Если это клавиша A
    audio = new Audio("./music/music-1.mp3");
  } else if (keyCode === "83") {
    // Если это клавиша S
    audio = new Audio("./music/music-2.mp3");
  } else if (keyCode === "68") {
    // Если это клавиша S
    audio = new Audio("./music/music-3.mp3");
  } else if (keyCode === "70") {
    // Если это клавиша S
    audio = new Audio("./music/music-4.mp3");
  } else if (keyCode === "71") {
    // Если это клавиша S
    audio = new Audio("./music/music-5.mp3");
  } else if (keyCode === "72") {
    // Если это клавиша S
    audio = new Audio("./music/music-6.mp3");
  } else if (keyCode === "74") {
    // Если это клавиша S
    audio = new Audio("./music/music-7.mp3");
  }
  // Если аудиофайл определён, воспроизводим его
  if (audio) {
    audio.play();
  }
}

function handleKeyDown(event) {
  let keyElement = document.querySelector('[data-key="' + event.keyCode + '"]');
  if (keyElement) {
    playSound(keyElement.dataset.key);
  }
}
// Для каждого элемента (клавиши из массива)
// добавляем обработчик события нажатия (click)

function init() {
  let keys = document.querySelectorAll(".key");

  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function () {
      playSound(keys[i].dataset.key);
    });
  }
  document.addEventListener("keydown", handleKeyDown);
}

init();
// Теперь при нажатии на первую клавишу с классом key будет воспроизводиться мелодия!
