import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      // integra Prettier ao ESLint
      'prettier/prettier': 'error',

      // remove linhas vazias extras
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // remove espaços desnecessários no final das linhas
      'no-trailing-spaces': 'error'
    }
  },

  // Configuração recomendada do React
  pluginReact.configs.flat.recommended
])
