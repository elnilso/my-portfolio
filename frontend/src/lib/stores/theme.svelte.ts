type Theme = 'light' | 'dark';

class ThemeStore {
	current = $state<Theme>('dark');

	constructor() {
		if (typeof window === 'undefined') return;

		const saved = localStorage.getItem('theme') as Theme | null;

		if (saved) {
			this.current = saved;
		} else {
			this.current = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
				? 'dark'
				: 'light';
		}

		this.applyTheme();
	}

	toggle() {
		this.current =
			this.current === 'dark'
				? 'light'
				: 'dark';

		this.applyTheme();
	}

	applyTheme() {
		document.documentElement.dataset.theme =
			this.current;

		localStorage.setItem(
			'theme',
			this.current
		);
	}
}

export const theme = new ThemeStore();
