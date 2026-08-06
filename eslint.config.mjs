import nextConfig from "eslint-config-next"

export default [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/sw.js",
      "public/workbox-*.js",
    ],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/no-unescaped-entities": "off",
    },
  },
]
