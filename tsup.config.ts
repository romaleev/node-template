import { defineConfig } from 'tsup'

export default defineConfig({
	tsconfig: './tsconfig.json',
	entry: ['src/index.ts'],
	outDir: './dist',
	format: ['esm'],
	sourcemap: true,
	clean: true,
})
