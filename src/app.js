import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  const WHO = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const ACTIONS = ['ate', 'peed', 'crushed', 'broke'];
  const WHAT = ['my homework', 'my phone', 'the car'];
  const WHEN = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const generateExcuse = () => {
  return `${getRandomItem(WHO)} ${getRandomItem(ACTIONS)} ${getRandomItem(WHAT)} ${getRandomItem(WHEN)}`;
};

document.addEventListener('DOMContentLoaded', () => {
  const excuseElement = document.getElementById('excuse');
  excuseElement.textContent = generateExcuse();
});