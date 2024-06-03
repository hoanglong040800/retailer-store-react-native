module.exports = {
  presets: ['babel-preset-expo', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],

    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
