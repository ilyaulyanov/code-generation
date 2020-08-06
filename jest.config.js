module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '/__tests__/.*\\.(test)\\.(ts|tsx)$',
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/src/tools/setupTests.ts',
  ],
}