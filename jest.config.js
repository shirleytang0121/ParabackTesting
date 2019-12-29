module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '__fixtures__', '__mocks__', '__tests__', 'models'],
  coverageDirectory: './coverage',
  setupFiles: [],
  roots: ['<rootDir>/src'],
};