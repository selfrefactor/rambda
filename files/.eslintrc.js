module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/member-delimiter-style": [
      1,
      {
        "multiline": {
          "delimiter": "comma"
        },
        "singleline": {
          "delimiter": "comma"
        }
      }
    ],
    "@typescript-eslint/array-type": [
      1,
      {
        "default": "array"
      }
    ],
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      1,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [
      1,
      "never"
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      1,
      {
        "before": false,
        "after": true
      }
    ],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
      1
    ],
    "indent": "off",
    "@typescript-eslint/indent": [
      1,
      2
    ],
    "@typescript-eslint/prefer-nullish-coalescing": [
      1,
      {
        "ignoreConditionalTests": true,
        "ignoreMixedLogicalExpressions": true,
        "forceSuggestionFixer": true
      }
    ],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      1,
      "never"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      1,
      "interface"
    ],
    "@typescript-eslint/no-array-constructor": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": 1,
    "@typescript-eslint/no-unnecessary-condition": 1,
    "@typescript-eslint/no-unnecessary-type-arguments": 1,
    "@typescript-eslint/no-unnecessary-type-assertion": 1,
    "@typescript-eslint/prefer-as-const": 1,
    "@typescript-eslint/prefer-function-type": 1,
    "@typescript-eslint/prefer-includes": 1,
    "@typescript-eslint/prefer-optional-chain": 1,
    "@typescript-eslint/type-annotation-spacing": 1
  }
}