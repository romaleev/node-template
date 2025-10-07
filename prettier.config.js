import prettierPluginOrganizeImports from 'prettier-plugin-organize-imports'

/** @type {import("prettier").Config} */
export default {
	trailingComma: 'all',
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	arrowParens: 'always',
	bracketSpacing: true,
	printWidth: 120,
	plugins: [prettierPluginOrganizeImports],
}
