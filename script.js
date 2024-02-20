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
const passwordInput2 = document.querySelector('.password-input-2');
const inputs = document.querySelectorAll('.form__input');
const errorParagraphs = document.querySelectorAll('.error-text');
const checkBox = document.getElementById('rodo');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const modal = document.querySelector('.info-box');

const nameLenght = 3;
const emailLenght = 7;
const passwordLenght = 5;

const checkInputs = function () {
	// DELETING PREVIOUS ERRORS
	errorParagraphs.forEach((p) => p.classList.add('hidden-text'));
	inputs.forEach((inp) => inp.classList.remove('error'));
	checkBox.classList.remove('checkbox-error');

	// CHECK LENGTH AND IF EMPTY
	Formulage.showError(nameInput, nameLenght);
	Formulage.showError(emailInput, emailLenght);
	Formulage.showError(passwordInput, passwordLenght);
	Formulage.showError(passwordInput2, passwordLenght, 'Powtórz hasło');
	Formulage.handleCheckboxOutline();

	// TEST EMAIL BASED ON REGEX
	Formulage.checkEmail(emailInput, emailLenght, 'Email jest niepoprawny');

	// TEST IF PASSWORDS ARE SAME
	Formulage.checkPasswords(passwordInput, passwordLenght, passwordInput2);

	const formErrors = document.querySelectorAll('.error');

	// 0 ERRORS = SUCCESS
	if (formErrors.length === 0) modal.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	Formulage.clearForm();
};

const init = function () {
	Theme.addHandlerSystemTheme();
	Theme.addHandlerThemeBtn();

	Formulage.addHandleClearBtn();
	Formulage.addHandleSendBtn(checkInputs);
	Formulage.addHandleCheckbox();
	Formulage.addHandleCloseModal(closeModal);
};
init();
