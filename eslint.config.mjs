import eslint from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import perfectionist from 'eslint-plugin-perfectionist';
import unusedImports from 'eslint-plugin-unused-imports';
import checkFile from 'eslint-plugin-check-file';

// @ts-check
import tseslint from 'typescript-eslint';

let checkFileRules = {
	'check-file/filename-naming-convention': [
		2,
		{
			'**/*.ts': 'KEBAB_CASE',
			'**/*.tsx': 'CAMEL_CASE',
			'**/*.d.ts': 'KEBAB_CASE'
		},
	],
	'check-file/folder-naming-convention': [
		2,
		{
			'src/**/': 'KEBAB_CASE',
		},
	],
}

let perfectionistRules = {
	'perfectionist/sort-imports': [
		'error',
		{
			type: 'natural',
			order: 'asc',
		},
	],
	'perfectionist/sort-object-types': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        ignoreCase: true,
        specialCharacters: 'keep',
        partitionByComment: false,
        partitionByNewLine: false,
        matcher: 'minimatch',
        groups: [],
        customGroups: {},
      },
    ],
}

let stylisticJsRules = {
	'@stylistic/js/arrow-parens': [1, 'as-needed'],
	'@stylistic/js/arrow-spacing': [1, { after: true, before: false }],
}

let unusedImportsRules = {
	'unused-imports/no-unused-imports': 1,
	'unused-imports/no-unused-vars': [
		1,
		{
			argsIgnorePattern: '_',
			varsIgnorePattern: '_',
		},
	],
}

const pluginRules = {
	...checkFileRules,
	...perfectionistRules,
	...stylisticJsRules,
	...unusedImportsRules,
};

let importantRules = {
	'max-params': [2, 2],
	'max-statements': [2, 12],
}

const rules = {
	...importantRules,
	'@typescript-eslint/no-explicit-any': 0,
	'@typescript-eslint/no-unused-vars': 2,
	'consistent-type-assertions': 0,
	'explicit-module-boundary-types': 0,
	'no-array-constructor': 1,
	'no-confusing-void-expression': 0,
	'no-empty-function': 0,
	'no-floating-promises': 0,
	'no-non-null-assertion': 0,
	'no-prototype-builtins': 0,
	'no-undef': 0,
	'no-unnecessary-condition': 0,
	'no-unsafe-argument': 0,
	'no-unsafe-assignment': 0,
	'no-unsafe-call': 0,
	'no-unsafe-member-access': 0,
	'no-unsafe-return': 0,
	'no-unused-vars': 0,
	'no-use-before-define': 2,
	'prefer-nullish-coalescing': [
		0,
		{
			forceSuggestionFixer: true,
			ignoreConditionalTests: true,
			ignoreMixedLogicalExpressions: true,
		},
	],
	'prefer-optional-chain': 0,
	'require-await': 2,
	'restrict-template-expressions': 0,
};

const config = tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strict,
	...tseslint.configs.stylistic,
	{
		rules,
	},
);

const pluginsConfig = {
	languageOptions: {
		parserOptions: {
			warnOnUnsupportedTypeScriptVersion: false,
		},
	},
	plugins: {
		'@stylistic/js': stylisticJs,
		'@stylistic/ts': stylisticTs,
		'unused-imports': unusedImports,
		'check-file': checkFile,
	},
	rules: pluginRules,
};

export default [
	...config,
	pluginsConfig,
	perfectionist.configs['recommended-natural'],
];
