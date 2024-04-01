module.exports = {
  presets: ['babel-preset-expo', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
};
