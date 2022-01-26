module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "comma-dangle": [2, "never"],
        "indent": ["error", 2],
        "prefer-template": 2,
        "no-console": 1,
        "new-cap": 0,
        "no-underscore-dangle": 0,
        "global-require": 0,
        "prefer-arrow-callback": 0,
        "func-names": 0,
        "no-var": 0,
        "no-param-reassign": 1,
        "vars-on-top": 0,
        "import/no-dynamic-require": 0,
        "space-before-function-paren": 0,
        "camelcase": 0,
        "no-proto": 0,
        "class-methods-use-this": 0,
        "arrow-body-style": 0,
        "newline-before-return": 2
    }
};
