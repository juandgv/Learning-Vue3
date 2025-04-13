import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      prettier, // 👈 agrega el plugin
    },
    rules: {
      'prettier/prettier': 'error', // 👈 activa la regla
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
])
