import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier, {
	files: ['**/*.ts'],
	ignores: ['*.d.ts', '*.js'],
	languageOptions: {
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
		globals: {
			...globals.node,
		},
	},
	rules: {
		'require-await': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
	},
})
