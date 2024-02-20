'use strict';

class Theme {
	themeBox = document.querySelector('.theme-box');
	themeSun = document.querySelector('.sun');
	themeMoon = document.querySelector('.moon');
	wrapper = document.querySelector('.wrapper');
	container = document.querySelector('.container');
	modal = document.querySelector('.info-box');
	form = document.querySelector('.form');
	themeItems = [this.wrapper, this.form, this.container, this.modal];

	// LISTENS FOR LOAD, CHECKS IF THEME IS STORED IN LOCAL STORAGE
	addHandlerSystemTheme() {
		window.addEventListener('load', () => {
			if (localStorage.getItem('theme')) {
				this.persistTheme();
			} else {
				this.usersSystemTheme();
			}
		});
	}

	// LISTENS FOR CLICK, CHANGE THEME BTN HANDLE
	addHandlerThemeBtn() {
		this.themeBox.addEventListener('click', this.themeHandle.bind(this));
	}

	// THEME CHANGES: ICONS AND THEME ITSELF
	themeHandle() {
		this.toggleThemeIconsVisibility();
		this.themeSun.classList.contains('hidden')
			? this.removeDarkStyle()
			: this.addDarkStyle();
	}

	// SET THEME FROM LOCAL STORAGE
	persistTheme() {
		let theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			this.addDarkStyle();
			this.themeMoon.classList.add('hidden');
			return;
		}
		if (theme === 'light') {
			this.removeDarkStyle();
			this.themeSun.classList.add('hidden');
		}
	}
	
	// WHEN LS IS EMPTY, THEME IS SET BASED ON USERS PREFFERED COLOR
	usersSystemTheme() {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			this.addDarkStyle();
			this.themeMoon.classList.add('hidden');
		} else {
			this.removeDarkStyle();
			this.themeSun.classList.add('hidden');
		}
	}
	
	// SUN AND MOON ICON TOGGLE VISIBILITY
	toggleThemeIconsVisibility() {
		[this.themeSun, this.themeMoon].forEach((el) =>
			el.classList.toggle('hidden')
		);
	}

	addDarkStyle() {
		this.themeItems.forEach((el) => el.classList.add('adaptive'));
		localStorage.setItem('theme', 'dark');
	}

	removeDarkStyle() {
		this.themeItems.forEach((el) => el.classList.remove('adaptive'));
		localStorage.setItem('theme', 'light');
	}
}

export default new Theme();
