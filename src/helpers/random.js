// randomizing function from mdn
export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};