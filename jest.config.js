module.exports = {
  rootDir: './src',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^stores(.*)$': '<rootDir>/src/stores$1',
    '^styled-components(.*)$': '<rootDir>/src/styled-component$1',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
}
