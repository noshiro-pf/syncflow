import {
  defineKnownRules,
  eslintConfigForNodeJs,
  eslintConfigForReact,
  eslintConfigForTsDataForge,
  eslintConfigForTypeScript,
  eslintConfigForVitest,
  eslintImportsRules,
  typescriptEslintRules,
  type FlatConfig,
} from 'eslint-config-typed';
import { projectRootPath } from '../../scripts/project-root-path.mjs';

export default [
  ...eslintConfigForTypeScript({
    tsconfigRootDir: import.meta.dirname,
    tsconfigFileName: 'tsconfig.json',
    packageDirs: [import.meta.dirname, projectRootPath],
  }),

  eslintConfigForTsDataForge(),

  eslintConfigForVitest(),

  {
    rules: defineKnownRules({
      '@typescript-eslint/no-shadow': [
        'error',
        {
          ...typescriptEslintRules['@typescript-eslint/no-shadow'][1],
          allow: ['Observable'],
        },
      ],
      'import-x/no-internal-modules': [
        'error',
        {
          allow: [
            ...eslintImportsRules['import-x/no-internal-modules'][1].allow,
            'zustand/vanilla',
            'jotai/vanilla',
          ],
        },
      ],
    }),
  },

  eslintConfigForNodeJs(['scripts/**', 'configs/**']),
  {
    files: ['scripts/**', 'configs/**'],
    rules: defineKnownRules({
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-await-in-loop': 'off',
      'import-x/no-unassigned-import': 'off',
      'import-x/no-internal-modules': 'off',
      'import-x/no-default-export': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    }),
  },

  ...eslintConfigForReact(['samples/**']),
  {
    files: ['samples/**'],
    rules: defineKnownRules({
      'react-refresh/only-export-components': 'off',
      'react/button-has-type': 'off',
      'react/jsx-no-bind': 'off',
      'react-perf/jsx-no-new-function-as-prop': 'off',
      'react/no-array-index-key': 'off',
      'functional/immutable-data': 'off',
      'functional/no-let': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    }),
  },
] satisfies readonly FlatConfig[];
