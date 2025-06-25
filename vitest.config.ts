import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		root: '.',
		globals: true,
		environment: 'node',
		// setupFiles: './src/test/setup.ts',
		include: ['lib/**/*.{test,spec}.{ts,tsx}'],
	},
})
