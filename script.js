'use strict';

import Theme from './theme.js';
import Formulage from './validation.js';

// const themeBox = document.querySelector('.theme-box');
// const themeSun = themeBox.querySelector('.sun');
// const themeMoon = themeBox.querySelector('.moon');
// const wrapper = document.querySelector('.wrapper');
// const container = document.querySelector('.container');
// const form = document.querySelector('.form');
// const themeItems = [wrapper, form, container];
const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const passwordInput2 = document.querySelector('.const password-input-2');
const inputs = document.querySelectorAll('.form__input');
const checkBox = document.getElementById('rodo');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');

const checkInputs = function () {


	Array.from(inputs).filter(el => el.value === '').map(inp => inp.nextElementSibling.textContent = 'jfjfj');

};

const init = function () {
	Theme.addHandlerTheme();
	Theme.addHandlerThemeBtn();
	Formulage.addHandleClearBtn();
	Formulage.addHandleSendBtn(checkInputs);
};
init();
