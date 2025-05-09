import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      prettier,
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect', // автоматически определяет версию React
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // отключаем требование импортировать React
    },
  },
  {
    ignores: ['node_modules', '.next', 'out'],
  },
  ...tseslint.configs.recommended,
]);
