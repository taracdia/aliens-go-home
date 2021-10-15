module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true,
		},
		"ecmaVersion": 12,
		"sourceType": "module",
	},
	"plugins": [
		"react",
	],
	"globals": {
		"React": "readonly",
		"module": "readonly",
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1,},
		],
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"always",
		],
		"comma-dangle": ["error", {
			"arrays": "always",
			"objects": "always",
			"imports": "always",
			"exports": "always",
			"functions": "never",
		},],
	},
};
