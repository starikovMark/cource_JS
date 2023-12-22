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
  heroesContainer.innerHTML = "";

  for (let i = 0; i < heroes.length; i++) {
    let heroDiv = document.createElement("div");

    heroDiv.innerHTML = `
    <h3>${heroes[i][0]}</h3>
    <p>${heroes[i][1]}</p>`;
    heroesContainer.appendChild(heroDiv);
  }
}

function addHero() {
  let nameInput = document.getElementById("heroName");
  let classInput = document.getElementById("heroClass");

  heroes.push([nameInput.value, classInput.value]);

  displayHeroes();

  nameInput.value = "";
  classInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  displayHeroes();
  document.getElementById("addButton").addEventListener("click", addHero);
});
