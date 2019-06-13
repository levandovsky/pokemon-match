/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/class/Card.js":
/*!***************************!*\
  !*** ./src/class/Card.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Card {\n  constructor() {\n    this.src = '';\n    this.name = '';\n  }\n\n  // card object method, returns true if name of two cards are equal\n  matched(card) {\n    if (this.name === card.name) {\n      return true;\n    }\n    return false;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n\n//# sourceURL=webpack:///./src/class/Card.js?");

/***/ }),

/***/ "./src/data/CardData.js":
/*!******************************!*\
  !*** ./src/data/CardData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// card data set\nconst cards = [\n  {\n    name: 'Jolteon',\n    src: 'resources/img/fronts/Jolteon.jpg',\n  },\n  {\n    name: 'Magnezone',\n    src: 'resources/img/fronts/Magnezone.jpg',\n  },\n  {\n    name: 'Zygarde',\n    src: 'resources/img/fronts/Zygarde.jpg',\n  },\n  {\n    name: 'Pikachu',\n    src: 'resources/img/fronts/Pikachu.jpg',\n  },\n  {\n    name: 'Thundurus',\n    src: 'resources/img/fronts/Thundurus.jpg',\n  },\n  {\n    name: 'Zecrom',\n    src: 'resources/img/fronts/Zecrom.jpg',\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n\n//# sourceURL=webpack:///./src/data/CardData.js?");

/***/ }),

/***/ "./src/helpers/random.js":
/*!*******************************!*\
  !*** ./src/helpers/random.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomInt; });\n// randomizing function from mdn\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n};\n\n//# sourceURL=webpack:///./src/helpers/random.js?");

/***/ }),

/***/ "./src/helpers/shuffle.js":
/*!********************************!*\
  !*** ./src/helpers/shuffle.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shuffle; });\n// Shuffle algorithm (StackOverflow)\nfunction shuffle(array) {\n  let currentIndex = array.length, temporaryValue, randomIndex;\n\n  // While there remain elements to shuffle...\n  while (0 !== currentIndex) {\n\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n\n    // And swap it with the current element.\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n};\n\n\n//# sourceURL=webpack:///./src/helpers/shuffle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_CardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/CardModel */ \"./src/model/CardModel.js\");\n\n\n// define variables\nlet cardModel = new _model_CardModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet cardArray = cardModel.getCards();\nconst gameContainer = document.getElementById('game-container');\nconst start = document.getElementById('start');\nconst retry = document.getElementById('retry');\nconst menu = document.getElementById('menu');\nconst modal = document.getElementById('modal');\nconst modalContent = document.getElementById('modal-content');\nconst movesHtml = document.getElementById('moves');\nconst body = document.getElementById('body');\n\n// variables to record game board status\nlet firstCard;\nlet secondCard;\nlet wasFlipped = false;\nlet moves = 0;\nlet matched = [];\n\n// initial display of the game container is none\ngameContainer.style.display = 'none';\n\nfunction init() {\n  // shows the game container\n  gameContainer.removeAttribute('style');\n\n  // main game function\n  cardArray.forEach(card => {\n    // create card elements\n    const divCard = document.createElement('div');\n    const divCardInner = document.createElement('div');\n    const divFront = document.createElement('div');\n    const divBack = document.createElement('div');\n\n    // structure cards inner elements\n    divCard.classList.add('card');\n    divCard.append(divCardInner);\n    divCardInner.classList.add('card-inner');\n    divFront.classList.add('front');\n    divBack.classList.add('back');\n\n    // bacground image taken from cards data set\n    divBack.style.backgroundImage = `url(${card.src})`;\n\n    // finally append elements to the game board\n    divCardInner.append(divFront, divBack);\n    gameContainer.append(divCard);\n\n    divCardInner.addEventListener('click', () => {\n      // if the state of the board wasFlipped is false, that means that first card will be flipped\n      if (!wasFlipped) {\n        firstCard = card;\n\n        // show the card\n        showFace();\n\n        // push the card to the matched array and set board state wasFlipped to true(temp)\n        matched.push(divCard);\n        wasFlipped = true;\n\n        // count move\n        moves++;\n\n        // else the second card was flipped\n      } else {\n        secondCard = card;\n        // show the card\n        showFace();\n\n        // set state to false and check the condition (also count move)\n        wasFlipped = false;\n        moves++;\n\n        // if card names match push the second card to the matched array\n        if (firstCard.matched(secondCard)) {\n          matched.push(divCard);\n\n          // reset board variables\n          resetVars();\n\n          // adds grayscale filter to already matched cards\n          matched.forEach(card => {\n            setTimeout(() => {\n              card.style.filter = 'grayscale()';\n            }, 500);\n          });\n\n          // if card names do not match\n        } else {\n          // reset variables\n          resetVars();\n          // delete last element of the matched array\n          matched.pop();\n          // flip cards back\n          resetBoard();\n        }\n      }\n\n      // show game over screen\n      gameOverScreen();\n    });\n\n    // shows the card face and blocks pointer events so it can not be clicked 2 times\n    function showFace() {\n      divCardInner.classList.add('active-card');\n      divCard.style.pointerEvents = 'none';\n    }\n\n    // set board card variables to null for next assignment\n    function resetVars() {\n      firstCard = null;\n      secondCard = null;\n    }\n\n    // show game over screen\n    function gameOverScreen() {\n      // winning condition is based on how many card were matched\n      if (matched.length === 12) {\n        // shows game over modal with the number of moves that were made\n        movesHtml.innerHTML = `You made <span class=\"red\">${moves}</span> moves!`;\n\n        // display the modal\n        modal.removeAttribute('style');\n        modal.classList.add('show-modal');\n        modalContent.classList.add('show-modal-content');\n        body.classList.add('stop-scroll');\n      }\n    }\n  });\n\n  // declaring card collection and making a regular array out of it\n  const cardCollection = document.getElementsByClassName('card');\n  let cards = Array.from(cardCollection);\n\n  // function to reset the card state and block pointer events if two cards were flipped\n  function resetBoard() {\n    // filter out cards that were matched\n    const filtered = cards.filter(x => !matched.includes(x));\n    cards = filtered;\n\n    cards.forEach(card => {\n      // get card-inner div to apply flipping effect\n      const inner = Array.from(card.children)[0];\n\n      // player can not flip a card if two cards are flipped\n      card.style.pointerEvents = 'none';\n\n      // player will see flipped card for a period of 1s, then it will flip back\n      setTimeout(() => {\n        // remove style and flip card back\n        card.removeAttribute('style');\n        inner.classList.remove('active-card');\n      }, 1000);\n    });\n  }\n}\n\n// function to start the game\nstart.addEventListener('click', () => {\n  // hides the menu\n  menu.style.display = 'none';\n\n  // start game\n  init();\n});\n\n// retry button function\nretry.addEventListener('click', () => {\n  // hide modal\n  modalContent.classList.remove('show-modal-content');\n  modal.style.opacity = 0;\n  setTimeout(function() {\n    modal.classList.remove('show-modal');\n    body.classList.remove('stop-scroll');\n\n    // reset game\n    resetGame();\n\n    // start game\n    init();\n  }, 400);\n});\n\n\n// reset board variables\nfunction resetGame() {\n  gameContainer.innerHTML = '';\n  matched = [];\n  moves = 0;\n  cardArray = cardModel.getCards();\n};\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/model/CardModel.js":
/*!********************************!*\
  !*** ./src/model/CardModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_CardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/CardData */ \"./src/data/CardData.js\");\n/* harmony import */ var _helpers_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/shuffle */ \"./src/helpers/shuffle.js\");\n/* harmony import */ var _class_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/Card */ \"./src/class/Card.js\");\n/* harmony import */ var _helpers_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/random */ \"./src/helpers/random.js\");\n\n\n\n\n\nclass CardModel {\n  constructor() {\n    this.cards = _data_CardData__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.numberOfCards = this.cards.length * 2;\n  }\n\n  getCards() {\n    // declare arrays to store generated pairs and used numbers for unique array generation\n    const cardArray = [];\n    const usedNumbers = [];\n\n    while (cardArray.length < this.numberOfCards) {\n      // random number for a pair of cards\n      const randomNumber = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(0, this.cards.length);\n\n      // check if this number was already used\n      if (!usedNumbers.includes(randomNumber)) {\n        const randomCard = this.cards[randomNumber];\n\n        // push used number to the array\n        usedNumbers.push(randomNumber);\n\n        // generate first card\n        const firstCard = new _class_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        firstCard.src = randomCard.src;\n        firstCard.name = randomCard.name;\n\n        // push first card to the array\n        cardArray.push(firstCard);\n\n        // generate second card\n        const secondCard = new _class_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        secondCard.src = randomCard.src;\n        secondCard.name = randomCard.name;\n\n        // push second card to the array\n        cardArray.push(secondCard);\n      }\n    }\n\n    // shuffle complete arrray and return it for usage\n    return Object(_helpers_shuffle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cardArray);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardModel);\n\n\n//# sourceURL=webpack:///./src/model/CardModel.js?");

/***/ })

/******/ });