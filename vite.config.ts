import typescript from '@rollup/plugin-typescript';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), typescript()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
