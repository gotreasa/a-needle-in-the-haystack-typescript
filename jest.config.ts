const config = {
  clearMocks: true,
  collectCoverage: true,
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
  // moduleNameMapper: { "^uuid$": "uuid" },
  preset: 'ts-jest',
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  transform: {},
};

export default config;
