import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
  testEnvironment: 'jsdom', // default testEnv is node. https://stackoverflow.com/a/69228464/19568962
};

export default config;
