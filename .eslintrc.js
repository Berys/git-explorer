module.exports = {
  "root": true,
    "parser": "@typescript-eslint/parser",
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-native/all",
      "standard",
      "prettier"
    ],
    "plugins": [
      "@typescript-eslint",
      "react",
      "react-native",
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "detect"
      }
    },
    "globals": {
      "__DEV__": false,
      "jasmine": false,
      "beforeAll": false,
      "afterAll": false,
      "beforeEach": false,
      "afterEach": false,
      "test": false,
      "expect": false,
      "describe": false,
      "jest": false,
      "it": false
    },
    "rules": {
      "@typescript-eslint/ban-ts-ignore": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-member-accessibility": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/indent": 0,
      "@typescript-eslint/member-delimiter-style": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-object-literal-type-assertion": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }
      ],
      "comma-dangle": 0,
      "multiline-ternary": 0,
      "no-undef": 0,
      "no-unused-vars": 0,
      "no-use-before-define": 0,
      "no-global-assign": 0,
      "quotes": 0,
      "react-native/no-raw-text": 0,
      "react/no-unescaped-entities": 0,
      "react/prop-types": 0,
      "space-before-function-paren": 0,
    }
  }