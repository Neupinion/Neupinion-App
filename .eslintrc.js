module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react-hooks',
        '@typescript-eslint',
        'react',
        'prettier',
    ],
    'rules': {
        'indent': [
            'error',
            2,
            {SwitchCase:1}
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            {avoidEscape:true}
        ],
        'semi': [
            'error',
            'always'
        ],
        'prettier/prettier': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
    'settings': {
        'react':{
            'version':'detect',
        }
    },
    'ignorePatterns': ['.eslintrc.js', 'babel.config.js', '__tests__'],
};
