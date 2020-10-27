module.exports = {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['*.json', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
