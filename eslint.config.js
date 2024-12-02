// eslint.config.js
import base from 'eslint-config-bcrikko'
// import react from 'eslint-config-bcrikko/react'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...base,
  // ...react,
  // {
  //   settings: {
  //     react: {
  //       // Automatically detect React version
  //       version: 'detect',
  //     },
  //   },
  //   rules: {
  //     // Customize your ESLint rules here
  //   },
  // },
]

export default config