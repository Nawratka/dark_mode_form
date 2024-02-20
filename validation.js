'use strict';

const inputs = document.querySelectorAll('.form__input');
const checkBox = document.getElementById('rodo');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeModalBtn = document.querySelector('.info-close-btn');
const modal = document.querySelector('.info-box');

class Formulage {
	constructor() {
		this.clearForm();
	}

	addHandleCheckbox() {
		checkBox.addEventListener('change', this.handleCheckboxOutline);
	}

	addHandleSendBtn(handler) {
		sendBtn.addEventListener('click', function (e) {
			if (!e.target === sendBtn) return;
			e.preventDefault();
			handler();
		});
	}

	addHandleClearBtn() {
		clearBtn.addEventListener('click', this.clearForm.bind(this));
	}

	addHandleCloseModal(handler) {
		closeModalBtn.addEventListener('click', function (e) {
			if (!e.target === closeModalBtn) return;
			handler();
		});
	}

	showError(inp, lng = 0, msg = 'błąd') {
		const errorTextParagraph = inp.nextElementSibling;
		errorTextParagraph.textContent = this.generateMsg(inp, lng, msg);
		errorTextParagraph.classList.remove('hidden-text');
	}

	generateMsg(inp, lng, msg) {
		const fieldName = inp.previousElementSibling.innerText;

		// CHECK IF EMPTY || TOO SHORT
		if (inp.value.trim().length < lng || inp.value.trim() === '') {
			inp.classList.add('error');

			if (inp.classList.contains('password-input-2')) return `${msg}`;

			return `${fieldName} składa się z min. ${lng} znaków`;
		}

		// FALSE EMAIL FORMAT
		if (inp.classList.contains('email-input')) return `${msg}`;
	}

	checkEmail(email, lng, msg) {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (re.test(email.value)) {
			email.nextElementSibling.classList.add('hidden-text');
		} else {
			this.showError(email, lng, msg);
			email.classList.add('error');
		}
	}

	checkPasswords(pass1, passwordLenght, pass2) {
		if (!(pass1.value.trim().length >= passwordLenght)) return;

		if (!(pass2.value.trim() === pass1.value.trim())) {
			this.showError(pass2, null, 'Błędne hasło');
			pass2.classList.add('error');
		} else {
			pass2.nextElementSibling.classList.add('hidden-text');
		}
	}

	clearForm() {
		inputs.forEach((el) => (el.value = ''));
		document
			.querySelectorAll('.error-text')
			.forEach((el) => el.classList.add('hidden-text'));
		checkBox.checked = false;
	}

	handleCheckboxOutline() {
		checkBox.checked
			? checkBox.classList.remove('checkbox-error', 'error')
			: checkBox.classList.add('checkbox-error', 'error');
	}
}

export default new Formulage();
