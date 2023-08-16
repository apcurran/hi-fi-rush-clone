module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "eol-last": [
            "error",
            "always"
        ]
    }
};
