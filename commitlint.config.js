"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configuration = {
    extends: ['@commitlint/config-conventional'],
    formatter: '@commitlint/format',
    ignores: [(commit) => commit === ''],
    defaultIgnores: true,
    helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
};
module.exports = Configuration;
//# sourceMappingURL=commitlint.config.js.map