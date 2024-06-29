/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	overrides: [
		{
			files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
			extends: ['plugin:playwright/recommended']
		}
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	plugins: ['@stylistic'],
	env: {
		node: true
	},
	rules: {
		'@stylistic/indent': ['error', 'tab'], // Enforces tabs for indentation using @stylistic/eslint-plugin-js
		'@stylistic/no-tabs': 'off' // Disables the rule that prevents the use of tabs
	}
}
