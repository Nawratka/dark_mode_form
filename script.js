'use strict';

import Theme from './theme.js';
import Form from './validation.js';

const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const passwordInput2 = document.querySelector('.password-input-2');
const inputs = document.querySelectorAll('.form__input');
const errorParagraphs = document.querySelectorAll('.error-text');
const checkBox = document.getElementById('rodo');
const modal = document.querySelector('.info-box');

const nameLength = 3;
const emailLength = 7;
const passwordLength = 5;

//////////////////////////////////////////////////////////////

const removeErrors = function () {
	errorParagraphs.forEach((p) => {
		p.classList.add('hidden-text');
		p.textContent = '';
	});
	inputs.forEach((inp) => inp.classList.remove('error'));
	checkBox.classList.remove('checkbox-error');
};

const handleInputs = function () {
	// DELETING PREVIOUS ERRORS
	removeErrors();

	// CHECK LENGTH AND IF EMPTY
	Form.checkErrors(nameInput, nameLength);
	Form.checkErrors(emailInput, emailLength);
	Form.checkErrors(passwordInput, passwordLength);
	Form.checkErrors(passwordInput2, passwordLength);
	Form.handleCheckboxOutline();

	const formErrors = document.querySelectorAll('.error');

	// 0 ERRORS = SUCCESS
	if (formErrors.length === 0) modal.classList.remove('hidden');
};

const clearForm = function () {
	removeErrors();
	inputs.forEach((el) => {
		if (el.type !== 'checkbox') el.value = '';
	});
	checkBox.checked = false;
};

const closeModal = function () {
	modal.classList.add('hidden');
	clearForm();
};

const init = function () {
	clearForm();
	Theme.addHandlerSystemTheme();
	Theme.addHandlerThemeBtn();

	Form.init(clearForm, handleInputs, closeModal);
};
init();
