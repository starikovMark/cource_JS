// Информация, на основе которой генерится сайт
let heroes = [
  ["Axe", "Tank"],
  ["Crystal Maiden", "Support"],
];
let heroNames = []; // Добавим определение массива
let heroClasses = []; // И это определение массива
let heroesContainer = document.getElementById("heroesContainer");
let classInput = document.getElementById("heroClass");
let nameInput = document.getElementById("heroName");
let newHeroName = nameInput.value;
let newHeroClass = classInput.value;

function displayHeroes() {
  // Очищаем текущее содержимое
  heroesContainer.innerHTML = "";

  // С помощью цикла проходимся по массиву героев
  for (let i = 0; i < heroes.length; i++) {
    // Создаём элемент, в который будем добавлять информацию о герое
    let heroDiv = document.createElement("div");

    // Записываем в созданный элемент разметку, подставляя необходимые данные
    heroDiv.innerHTML = `<h3>${heroes[i][0]}</h3><p>${heroes[i][1]}</p>`;

    // Добавляем карточку героя в контейнер
    heroesContainer.appendChild(heroDiv);
  }
}

function addHero() {
  /* Ищем поля ввода */
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");

  /* Кидаем новые данные из инпутов в массив с героями */
  heroes.push([nameInput.value, classInput.value]);

  // Используем функцию для обновления списка героев на странице
  displayHeroes();

  // Очищаем поля ввода
  nameInput.value = "";
  classInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  displayHeroes();
  document.getElementById("addButton").addEventListener("click", addHero);
});
