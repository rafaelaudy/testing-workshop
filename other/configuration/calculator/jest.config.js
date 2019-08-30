module.exports = {
  moduleNameMapper: {
    '\\.module``.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 18,
      branches: 10,
      functions: 19,
      lines: 18,
    },
  },
}
