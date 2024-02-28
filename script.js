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

const checkInputs = function () {
	// DELETING PREVIOUS ERRORS
	errorParagraphs.forEach((p) => p.classList.add('hidden-text'));
	inputs.forEach((inp) => inp.classList.remove('error'));
	checkBox.classList.remove('checkbox-error');

	// CHECK LENGTH AND IF EMPTY
	Form.showError(nameInput, nameLength);
	Form.showError(emailInput, emailLength);
	Form.showError(passwordInput, passwordLength);
	Form.showError(passwordInput2, passwordLength, 'Powtórz hasło');
	Form.handleCheckboxOutline();

	// TEST EMAIL BASED ON REGEX
	Form.checkEmail(emailInput, emailLength, 'Email jest niepoprawny');

	// TEST IF PASSWORDS ARE SAME
	Form.checkPasswords(passwordInput, passwordLength, passwordInput2);

	const formErrors = document.querySelectorAll('.error');

	// 0 ERRORS = SUCCESS
	if (formErrors.length === 0) modal.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	Form.clearForm();
};

const init = function () {
	Theme.addHandlerSystemTheme();
	Theme.addHandlerThemeBtn();

	Form.addHandleClearBtn();
	Form.addHandleSendBtn(checkInputs);
	Form.addHandleCheckbox();
	Form.addHandleCloseModal(closeModal);
};
init();
