'use strict';

class Formulage {
	form = document.querySelector('.form');
	nameInput = document.querySelector('.name-input');
	emailInput = document.querySelector('.email-input');
	passwordInput = document.querySelector('.password-input');
	passwordInput = document.querySelector('.password-input-2');
	inputs = document.querySelectorAll('.form__input');
	checkBox = document.getElementById('rodo');
	sendBtn = document.querySelector('.send');
	clearBtn = document.querySelector('.clear');

	addHandleSendBtn(handler) {
		this.sendBtn.addEventListener('click', function (e) {
			e.preventDefault();
			handler();
		});
	}

	addHandleClearBtn() {
		this.clearBtn.addEventListener('click', this.clearForm.bind(this));
	}

	clearForm() {
		this.inputs.forEach((el) => (el.value = ''));
		document
			.querySelectorAll('.error-text')
			.forEach((el) => el.classList.add('hidden-text'));
		this.checkBox.checked = false;
	}
}

export default new Formulage();
