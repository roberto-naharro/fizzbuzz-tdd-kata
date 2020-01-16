module.exports = {
  hooks: {
    'pre-commit': 'pretty-quick --staged; npm run linter',
    'pre-push': 'npm run test',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
