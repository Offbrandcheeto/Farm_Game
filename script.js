'use strict';

let money = 0;
const moneyEl = document.getElementById('money');

// Wheat

const wheat = document.querySelectorAll('#wheat');
const wheatCounter = document.getElementById('wheat-counter');
const wheatSellBtn = document.getElementById('wheat-sell');
const wheatLandCostEl = document.getElementById('wheat-land-cost');

let wheatCount = 0;
let wheatLandCost = 10;
let maxWheat = 0;

wheatSellBtn.addEventListener('click', sellWheat);

function sellWheat() {
  if (wheatCount > 0) {
    money += wheatCount;
    wheatCount = 0;
  }
}

// Corn

const corn = document.querySelectorAll('#corn');
const cornCounter = document.getElementById('corn-counter');
const cornSellBtn = document.getElementById('corn-sell');
const cornArea = document.getElementById('corn-area');
const cornLandCostEl = document.getElementById('corn-land-cost');

let cornCount = 0;
let cornLandCost = 25;
let maxCorn = 0;

cornSellBtn.addEventListener('click', sellCorn);

function sellCorn() {
  if (cornCount > 0) {
    money += cornCount * 3;
    cornCount = 0;
  }
}

// Potato

const potato = document.querySelectorAll('#potato');
const potatoCounter = document.getElementById('potato-counter');
const potatoSellBtn = document.getElementById('potato-sell');
const potatoArea = document.getElementById('potato-area');
const potatoLandCostEl = document.getElementById('potato-land-cost');

let potatoCount = 0;
let potatoLandCost = 150;
let maxPotato = 0;

potatoSellBtn.addEventListener('click', sellPotato);

function sellPotato() {
  if (potatoCount > 0) {
    money += potatoCount * 10;
    potatoCount = 0;
  }
}

// For Loop Wheat

for (let i = 0; i < wheat.length; i++) {
  wheat[i].addEventListener('mouseenter', function () {
    if (
      !wheat[i].classList.contains('locked') &&
      !wheat[i].classList.contains('hidden')
    ) {
      wheat[i].classList.add('hidden');
      wheatCount++;
      setTimeout(() => {
        wheat[i].classList.remove('hidden');
      }, 2500);
    }
  });
}

for (let i = 0; i < wheat.length; i++) {
  wheat[i].addEventListener('click', function () {
    if (wheat[i].classList.contains('locked') && money >= wheatLandCost) {
      money -= wheatLandCost;
      wheat[i].classList.remove('locked');
      wheat[i].src = '/img/grain.png';
      wheatLandCost += 10;
      maxWheat++;
    }
  });
}

// For Loop Corn

for (let i = 0; i < corn.length; i++) {
  corn[i].addEventListener('mouseenter', function () {
    if (
      !corn[i].classList.contains('locked') &&
      !corn[i].classList.contains('hidden')
    ) {
      corn[i].classList.add('hidden');
      cornCount++;
      setTimeout(() => {
        corn[i].classList.remove('hidden');
      }, 5000);
    }
  });
}

for (let i = 0; i < corn.length; i++) {
  corn[i].addEventListener('click', function () {
    if (corn[i].classList.contains('locked') && money >= cornLandCost) {
      money -= cornLandCost;
      corn[i].classList.remove('locked');
      corn[i].src = '/img/corn.png';
      cornLandCost += 15;
      maxCorn++;
    }
  });
}

// For Loop Potato

for (let i = 0; i < potato.length; i++) {
  potato[i].addEventListener('mouseenter', function () {
    if (
      !potato[i].classList.contains('locked') &&
      !potato[i].classList.contains('hidden')
    ) {
      potato[i].classList.add('hidden');
      potatoCount++;
      setTimeout(() => {
        potato[i].classList.remove('hidden');
      }, 15000);
    }
  });
}

for (let i = 0; i < potato.length; i++) {
  potato[i].addEventListener('click', function () {
    if (potato[i].classList.contains('locked') && money >= potatoLandCost) {
      money -= potatoLandCost;
      potato[i].classList.remove('locked');
      potato[i].src = '/img/potato.png';
      potatoLandCost += 50;
      maxPotato++;
    }
  });
}

const updateGame = setInterval(() => {
  moneyEl.textContent = `Money: ${money}`;
  wheatCounter.textContent = `Wheat: ${wheatCount}`;
  wheatLandCostEl.textContent = `Land: $${wheatLandCost}`;
  cornCounter.textContent = `Corn: ${cornCount}`;
  cornLandCostEl.textContent = `Land: $${cornLandCost}`;
  potatoCounter.textContent = `Potatoes: ${potatoCount}`;
  potatoLandCostEl.textContent = `Land: $${potatoLandCost}`;

  if (maxWheat === 7) {
    cornArea.classList.remove('true-hidden');
    wheatLandCostEl.textContent = 'Fully Opened';
  }

  if (maxCorn === 8) {
    potatoArea.classList.remove('true-hidden');
    cornLandCostEl.textContent = 'Fully Opened';
  }

  if (maxPotato === 8) {
    potatoLandCostEl.textContent = 'Fully Opened';
  }
}, 100);
