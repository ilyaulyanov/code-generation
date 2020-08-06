module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '/__tests__/.*\\.(test)\\.(ts|tsx)$',
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/tools/setupTests.ts',
  ],
  testURL: 'http://127.0.0.1:80'
}