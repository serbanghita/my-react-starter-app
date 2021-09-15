module.exports = {
    automock: false,
    clearMocks: true,
    verbose: true,
    moduleDirectories: ['node_modules', 'src/example1'],
    moduleFileExtensions: ["js", "jsx"],
    // The test environment that will be used for testing
    // testEnvironment: 'jest-environment-jsdom-sixteen',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
}
