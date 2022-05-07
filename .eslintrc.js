module.exports = {
  parser: `@typescript-eslint/parser`, // Specifies the ESLint parser
  extends: [`airbnb`, `plugin:prettier/recommended`],
  plugins: [`@typescript-eslint`, `prettier`, `react-hooks`, `graphql`],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  globals: {
    cy: true,
    Cypress: true,
    JSX: true,
    graphql: true,
  },
  settings: {
    "import/internal-regex": `^anchorage/`,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      `warn`,
      {
        argsIgnorePattern: `res|next|stage|^err|on|config|e|_`,
      },
    ],
    "arrow-body-style": [`error`, `as-needed`],
    "no-param-reassign": [
      `error`,
      {
        props: false,
      },
    ],
    "no-unused-expressions": [
      `warn`,
      {
        allowTaggedTemplates: true,
      },
    ],
    quotes: `off`,
    "@typescript-eslint/quotes": [
      `error`,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/prefer-interface": `off`,
    "@typescript-eslint/explicit-function-return-type": `off`,
    "@typescript-eslint/no-use-before-define": `off`,
    "@typescript-eslint/camelcase": `off`,
    "@typescript-eslint/no-var-requires": `off`,
    "@typescript-eslint/no-non-null-assertion": `off`,
    "@typescript-eslint/no-empty-function": `off`,
    "@typescript-eslint/explicit-module-boundary-types": `off`,
    "@typescript-eslint/ban-ts-comment": `off`,
    "no-console": [`warn`, { allow: [`warn`] }],
    "spaced-comment": [`error`, `always`, { exceptions: [`-`, `+`], markers: [`/`] }],
    "no-use-before-define": `off`,
    "no-plusplus": `off`,
    "no-continue": `off`,
    "linebreak-style": `off`,
    "consistent-return": `off`,
    import: `off`,
    camelcase: `warn`,
    "import/no-unresolved": `off`,
    "func-names": `off`,
    "import/no-extraneous-dependencies": `off`,
    "import/prefer-default-export": `off`,
    "import/no-cycle": `off`,
    "space-before-function-paren": `off`,
    "import/extensions": `off`,
    "import/no-anonymous-default-export": `error`,
    "react/function-component-definition": [
      `warn`,
      {
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    "react/jsx-one-expression-per-line": `off`,
    "react/no-danger": `off`,
    "react/display-name": `off`,
    "react/react-in-jsx-scope": `off`,
    "react/jsx-uses-react": `warn`,
    "react/require-default-props": `off`,
    "react/forbid-prop-types": `off`,
    "react/no-unescaped-entities": `off`,
    "react/prop-types": `off`,
    "react/jsx-props-no-spreading": `off`,
    "react/jsx-fragments": `off`,
    "react/jsx-curly-brace-presence": `off`,
    "react/jsx-pascal-case": [
      `warn`,
      {
        allowNamespace: true,
      },
    ],
    "react/jsx-filename-extension": [
      `warn`,
      {
        extensions: [`.js`, `.jsx`, `.tsx`],
      },
    ],
    "react-hooks/rules-of-hooks": `error`,
    "react-hooks/exhaustive-deps": `warn`,
    indent: [`error`, 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      `error`,
      {
        trailingComma: `es5`,
        semi: true,
        singleQuote: false,
        printWidth: 100,
      },
    ],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/master/docs/rules
    // "jsx-a11y/accessible-emoji": `warn`, Deprecated
    "jsx-a11y/alt-text": `warn`,
    "jsx-a11y/anchor-has-content": `warn`,
    "jsx-a11y/anchor-is-valid": `warn`,
    "jsx-a11y/aria-activedescendant-has-tabindex": `warn`,
    "jsx-a11y/aria-props": `warn`,
    "jsx-a11y/aria-proptypes": `warn`,
    "jsx-a11y/aria-role": `warn`,
    "jsx-a11y/aria-unsupported-elements": `warn`,
    "jsx-a11y/autocomplete-valid": [
      `warn`,
      {
        inputComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": `warn`,
    "jsx-a11y/control-has-associated-label": [
      `warn`,
      {
        ignoreElements: [`audio`, `canvas`, `embed`, `input`, `textarea`, `tr`, `video`],
        ignoreRoles: [
          `grid`,
          `listbox`,
          `menu`,
          `menubar`,
          `radiogroup`,
          `row`,
          `tablist`,
          `toolbar`,
          `tree`,
          `treegrid`,
        ],
        includeRoles: [`alert`, `dialog`],
      },
    ],
    "jsx-a11y/heading-has-content": `warn`,
    "jsx-a11y/html-has-lang": `warn`,
    "jsx-a11y/iframe-has-title": `warn`,
    "jsx-a11y/img-redundant-alt": `warn`,
    "jsx-a11y/interactive-supports-focus": [
      `warn`,
      {
        tabbable: [
          `button`,
          `checkbox`,
          `link`,
          `progressbar`,
          `searchbox`,
          `slider`,
          `spinbutton`,
          `switch`,
          `textbox`,
        ],
      },
    ],
    // "jsx-a11y/label-has-for": `warn`, was deprecated and replaced with jsx-a11y/has-associated-control in v6.1.0
    "jsx-a11y/label-has-associated-control": `warn`,
    "jsx-a11y/lang": `warn`,
    "jsx-a11y/media-has-caption": `warn`,
    "jsx-a11y/mouse-events-have-key-events": `warn`,
    "jsx-a11y/no-access-key": `warn`,
    "jsx-a11y/no-autofocus": `warn`,
    "jsx-a11y/no-distracting-elements": `warn`,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": `warn`,
    "jsx-a11y/no-noninteractive-element-interactions": [
      `warn`,
      {
        body: [`onError`, `onLoad`],
        iframe: [`onError`, `onLoad`],
        img: [`onError`, `onLoad`],
      },
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": `warn`,
    "jsx-a11y/no-noninteractive-tabindex": `warn`,
    // "jsx-a11y/no-onchange": `warn`, Deprecated
    "jsx-a11y/no-redundant-roles": `warn`,
    "jsx-a11y/no-static-element-interactions": `warn`,
    "jsx-a11y/role-has-required-aria-props": `warn`,
    "jsx-a11y/role-supports-aria-props": `warn`,
    "jsx-a11y/scope": `warn`,
    "jsx-a11y/tabindex-no-positive": `warn`,
    "jsx-a11y/href-no-hash": `off`,
    "import/order": [
      `warn`,
      {
        groups: [`builtin`, `external`, `internal`],
        pathGroups: [
          {
            pattern: `react`,
            group: `external`,
            position: `before`,
          },
        ],
        pathGroupsExcludedImportTypes: [`react`],
        "newlines-between": `never`,
        alphabetize: {
          order: `asc`,
          caseInsensitive: true,
        },
      },
    ],
  },
};
