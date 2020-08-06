module.exports = {
  collectCoverage: false,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '/__tests__/.*\\.(test)\\.(ts|tsx)$',
  testURL: 'https://procurify.react',
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/tools/setupTests.ts',
  ],
}