'use strict';

const pass1 = document.querySelector('.password-input');
const checkBox = document.getElementById('rodo');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeModalBtn = document.querySelector('.info-close-btn');

class Form {
	init(clearForm, handleInputs, closeModal) {
		this.addHandleClearBtn(clearForm);
		this.addHandleSendBtn(handleInputs);
		this.addHandleCheckbox();
		this.addHandleCloseModal(closeModal);
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

	addHandleClearBtn(handler) {
		clearBtn.addEventListener('click', function (e) {
			e.preventDefault();
			handler();
		});
	}

	addHandleCloseModal(handler) {
		closeModalBtn.addEventListener('click', function (e) {
			if (!e.target === closeModalBtn) return;
			handler();
		});
	}

	checkErrors(inp, lng) {
		// CASE: TOO SHORT || EMPTY INPUT VALUE
		if (inp.value.trim().length < lng || inp.value.trim() === '') {
			this.showError(inp, lng);
			return;
		}

		// CASE: FALSE EMAIL FORMAT
		if (inp.classList.contains('email-input'))
			if (!this._checkEmail(inp))
				this.showError(inp, 0, 'Email jest niepoprawny', true);

		// CASE: REPEAT PASSWORD CHECK
		if (inp.classList.contains('password-input-2')) {
			if (!this._checkPasswords(pass1, inp))
				this.showError(inp, 0, 'Błędne hasło', true);
		}
		
		// NO ERRORS
		return;
	}

	showError(inp, lng, msg, additionalCheck = false) {
		const errorTextParagraph = inp.nextElementSibling;
		errorTextParagraph.textContent = this.generateMsg(
			inp,
			lng,
			msg,
			additionalCheck
		);
		inp.classList.add('error');
		errorTextParagraph.classList.remove('hidden-text');
	}

	generateMsg(inp, lng, msg, additionalCheck) {
		const fieldName = inp.previousElementSibling.innerText;

		// FALSE EMAIL FORMAT
		if (inp.classList.contains('email-input') && additionalCheck === true)
			return `${msg}`;

		// REPEAT-PASSWORD CHECK WHEN COMPARE TO PASSWORD 1
		if (inp.classList.contains('password-input-2') && additionalCheck === true) return `${msg}`;

		// REPEAT-PASSWORD CHECK WHEN EMPTY || TOO SHORT
		if (inp.classList.contains('password-input-2')) return `${fieldName}`;

		// GENERAL ERROR TEXT
		return `${fieldName} składa się z min. ${lng} znaków`;
	}

	_checkEmail(email) {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(email.value);
	}

	_checkPasswords(pass1, pass2) {
		return pass2.value === pass1.value;
	}

	handleCheckboxOutline() {
		checkBox.checked
			? checkBox.classList.remove('checkbox-error', 'error')
			: checkBox.classList.add('checkbox-error', 'error');
	}
}

export default new Form();
