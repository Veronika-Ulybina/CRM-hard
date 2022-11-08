'use strict';

const navSystemName = 'Навигационная система Soundmax';

console.log(navSystemName);

const desktopGameName = 'Настольная игра “На 4-х ногах”';

console.log(desktopGameName);

const amountNavSystem = 5;

const amountDesktopGame = 12;

const categoryTechnic = 'Техника для дома';

const categoryGames = 'Настольные игры';

const priceNavSystem = 100;

const priceDesktopGame = 14;

const sumNavSystem = priceNavSystem * amountNavSystem;

console.log(`Общая сумма товара '${navSystemName}': ${sumNavSystem}`);

const sumDesktopGame = priceDesktopGame * amountDesktopGame;

console.log(`Общая сумма товара '${desktopGameName}': ${sumDesktopGame}`);
