module.exports={
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "rules": {
                "react/prop-types": "off"
            },
            "parserOptions": {
                "project": "./tsconfig.json"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/member-delimiter-style": "off"
    }
}