// commitlint.config.js | .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    "header-case": [2, "always", "lower-case"],
    "subject-min-length": [2, "always", 3],
    "subject-max-length": [2, "always", 50],
  },
  prompt: {
    alias: { fd: "docs: fix typos" },
    messages: {
      type: "Select the type of change that you're committing:",
      scope: "What is the scope or issue of this change (e.g. utils or #123) (optional):",
      customScope: "Specific scope or issue of this change:",
      subject: "Write a short, imperative tense description of the change:\n",
      body: "Provide a longer description of the change (optional):\n",
      breaking: "List the breaking changes if any (optional):\n",
      footerPrefixSelect: "",
      customFooterPrefix: "",
      footer: "",
      generateByAI: "",
      generatedSelectByAI: "",
      confirmCommit: "",
    },
    types: [
      { value: "feat", name: "feat:     🎉  A new feature", emoji: "🎉" },
      { value: "fix", name: "fix:      🔧  A bug fix", emoji: "🔧" },
      { value: "docs", name: "docs:     📝  Documentation only changes", emoji: "📝" },
      {
        value: "style",
        name: "style:    ✨  Changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)",
        emoji: "✨",
      },
      { value: "refactor", name: "refactor: 💡   Code changes that do not fix bugs or add features", emoji: "💡" },
      { value: "perf", name: "perf:     ⚡️  Code changes that improve performance", emoji: "⚡️" },
      { value: "test", name: "test:     🧪  Adding missing tests or correcting existing tests", emoji: "🧪" },
      { value: "build", name: "build:    📦️   Changes that affect the build system or dependencies", emoji: "📦️" },
      { value: "ci", name: "ci:       ♾️  Changes to configuration files and CI scripts", emoji: "♾️" },
      { value: "chore", name: "chore:    ⚙️  Other changes that do not modify the src or test files", emoji: "⚙️" },
      { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: "⏪️" },
    ],
    useEmoji: true,
    emojiAlign: "center",
    useAI: false,
    aiNumber: 1,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "add scope or issue",
    emptyScopesAlias: "skip",
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: ["confirmCommit", "footer", "footerPrefix"],
    issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
