module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint-config-prettier',
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        'plugin:vue/vue3-recommended',
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: "latest",
        parser: '@typescript-eslint/parser',
        sourceType: "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/multi-word-component-names":"off",
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/ban-types": ["error",
            {
                "types": {
                    "String": false,
                    "Boolean": false,
                    "Number": false,
                    "Symbol": false,
                    "{}": false,
                    "Object": false,
                    "object": false,
                    "Function": false,
                },
                "extendDefaults": true
            }
        ]
    },
}


