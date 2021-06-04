module.exports = {
  printWidth: 120,
  tabWidth: 4,
  useTabs: false,
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  endOfLine: "lf", quoteProps: "as-needed",
  overrides: [
    {
      excludeFiles: ["*.min.js", "*.min.css", "*.min.html", "*.min.scss"],
      files: ["*.js", "*.css", "*.sass", "*.html", "*.md", "*.ts"],
      options: {
        semi: true,
      },
    },
  ],
}
