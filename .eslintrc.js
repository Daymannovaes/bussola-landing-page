module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
        "react/jsx-indent": [4, 4],
        "react/jsx-one-expression-per-line": 0,
        "react/button-has-type": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/label-has-for": 0,
        "no-unused-expressions": 0,
        "indent": ["error", 4]
    }
};