// eslint.config.ts
import js from '@eslint/js';
import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';
import perfectionist from 'eslint-plugin-perfectionist';

const WARN = 1;
const ERROR = 2;

export default tseslint.config(
  {
    ignores: ["**/*.js"],
  },
  js.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  perfectionist.configs['recommended-natural'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Console allowed in dev, warn otherwise
      'no-console': WARN,

      // Avoid careless `any`
      '@typescript-eslint/no-explicit-any': ERROR,

      // Sorting rules
      'perfectionist/sort-exports': WARN,
      'perfectionist/sort-imports': WARN,
      'perfectionist/sort-interfaces': WARN,

      // Code style
      'semi': [ERROR, 'always'],
      'quotes': [ERROR, 'single'],
      'object-curly-spacing': [ERROR, 'always'],
      'comma-spacing': [ERROR, { before: false, after: true }],
      'space-before-blocks': [ERROR, 'always'],
      'space-infix-ops': ERROR,
      'keyword-spacing': ERROR,
      'arrow-spacing': [ERROR, { before: true, after: true }],
      'indent': [ERROR, 2, { SwitchCase: 1 }],
      'eol-last': [ERROR, 'always'],

      // Optional stricter suggestions
      'no-implicit-coercion': ERROR,
    }
  }
);
