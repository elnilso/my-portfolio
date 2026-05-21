import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
	display: ['var(--font-family-display)'],
	body: ['var(--font-family-body)']
      },
      borderRadius: {
	container: 'var(--radius-container)'
      }
    }
  }
} satisfies Config;
