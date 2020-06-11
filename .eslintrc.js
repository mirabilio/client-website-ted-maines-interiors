module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
    // "airbnb",
    // "plugin:prettier/recommended",
    // "prettier/react"
  ],
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  rules: {
    "jsx-a11y/href-no-hash": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "max-len": [
      "warn",
      {
        // "code": (SET BY USER),
        "tabWidth": 2,
        // "comments": (SET BY USER),
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true,
      },
    ],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
      },
      "AssignmentExpression": {
        "array": false,
      }
    }, {
      "enforceForRenamedProperties": false
    }],

    'no-unused-vars': 'warn',
    "no-unused-expressions": ['warn', {"allowShortCircuit": true, "allowTernary": true}],
    'react/prop-types': 0,
    "import/prefer-default-export": 0,
    "no-use-before-define": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-props-no-spreading": "off"
  }
}

// module.exports = {
//   parser: 'babel-eslint',
//   extends: [
//     'eslint:recommended',
//     'plugin:promise/recommended',
//     'airbnb',
//     'airbnb/hooks',
//     'plugin:prettier/recommended',
//     'plugin:react/recommended',
//   ],
//   plugins: ['promise', 'prettier', 'react'],
//   rules: {
//     'prettier/prettier': 'warn',
//     'no-unused-vars': 'warn',
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
//     'react/prop-types': 0,
//     // "react/prefer-stateless-function": "off",
//     // "react/jsx-filename-extension": "off",
//     // "no-use-before-define": "off",
//     // "react/jsx-closing-bracket-location": "off",
//     // "react/jsx-curly-spacing": "off",
//     // "react/jsx-equals-spacing": "off",
//     // "react/jsx-first-prop-new-line": "off",
//     // "react/jsx-indent": "off",
//     // "react/jsx-indent-props": "off",
//     // "react/jsx-max-props-per-line": "off",
//     // "react/jsx-tag-spacing": "off",
//     // "react/jsx-wrap-multilines": "off"
//   },    
//   parserOptions: {
//     ecmaVersion: 2016,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   env: {
//     browser: true,
//     commonjs: true,
//     es6: true,
//     node: true,
//     jest: true,
//   },
// }
