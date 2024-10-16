// @ts-check
import nuxt from './.nuxt/eslint.config.mjs'

export default {
  ...nuxt,
  extends: [
    'plugin:nuxt/recommended',
    'plugin:@nuxtjs/eslint-config-typescript',
    'plugin:@nuxtjs/eslint-config',
  ],
  rules: {
    // add your own config here para o nuxt e o tailwindcss caso precisa
  },
}

