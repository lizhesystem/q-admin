// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
	ignores: [commit => commit.includes("init")],
	extends: ["@commitlint/config-conventional"],
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [1, "always"],
		"header-max-length": [2, "always", 108],
		"subject-empty": [2, "never"],
		"type-empty": [2, "never"],
		"subject-case": [0],
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"docs",
				"style",
				"refactor",
				"perf",
				"test",
				"build",
				"ci",
				"chore",
				"revert",
				"wip",
				"workflow",
				"types",
				"release"
			]
		]
	},
	prompt: {
		messages: {
			// 中/英 根据自己喜好
			// type: "Select the type of change that you're committing:",
			type: "选择你要提交的类型 :",
			// scope: "Denote the SCOPE of this change (optional):",
			scope: "选择一个提交范围（可选）:",
			// customScope: "Denote the SCOPE of this change:",
			customScope: "请输入自定义的提交范围 :",
			// subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
			subject: "填写简短精炼的变更描述 :\n",
			// body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			// breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			// footerPrefixsSelect: "Select the ISSUES type of changeList by this change (optional):",
			footerPrefixsSelect: "选择关联issue前缀（可选）:",
			// customFooterPrefixs: "Input ISSUES prefix:",
			customFooterPrefixs: "输入自定义issue前缀 :",
			// footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
			footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
			// confirmCommit: "Are you sure you want to proceed with the commit above?"
			confirmCommit: "是否提交或修改commit ?"
		},
		types: [
			// 中/英 根据自己喜好
			// { value: "特性", name: "特性:   🚀  新增功能", emoji: "🚀" },
			{ value: "feat", name: "feat:     🚀  A new feature", emoji: "🚀" },
			// { value: "修复", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
			{ value: "fix", name: "fix:      🧩  A bug fix", emoji: "🧩" },
			// { value: "文档", name: "文档:   📚  文档变更", emoji: "📚" },
			{ value: "docs", name: "docs:     📚  Documentation only changes", emoji: "📚" },
			// { value: "格式", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
			{ value: "style", name: "style:    🎨  Changes that do not affect the meaning of the code", emoji: "🎨" },
			// { value: "重构", name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
			{ value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature", emoji: "♻️" },
			// { value: "性能", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
			{ value: "perf", name: "perf:     ⚡️  A code change that improves performance", emoji: "⚡️" },
			// { value: "测试", name: "测试:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
			{ value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests", emoji: "✅" },
			// { value: "构建", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
			{ value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies", emoji: "📦️" },
			// { value: "集成", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
			{ value: "ci", name: "ci:       🎡  Changes to our CI configuration files and scripts", emoji: "🎡" },
			// { value: "回退", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
			{ value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: "🔨" },
			// { value: "其他", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
			{ value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: "⏪️" }
		],
		useEmoji: true,
		themeColorCode: "",
		scopes: [],
		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: "bottom",
		customScopesAlias: "custom",
		emptyScopesAlias: "empty",
		upperCaseSubject: false,
		allowBreakingChanges: ["feat", "fix"],
		breaklineNumber: 100,
		breaklineChar: "|",
		skipQuestions: [],
		issuePrefixs: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
		customIssuePrefixsAlign: "top",
		emptyIssuePrefixsAlias: "skip",
		customIssuePrefixsAlias: "custom",
		allowCustomIssuePrefixs: true,
		allowEmptyIssuePrefixs: true,
		confirmColorize: true,
		maxHeaderLength: Infinity,
		maxSubjectLength: Infinity,
		minSubjectLength: 0,
		scopeOverrides: undefined,
		defaultBody: "",
		defaultIssues: "",
		defaultScope: "",
		defaultSubject: ""
	}
};
