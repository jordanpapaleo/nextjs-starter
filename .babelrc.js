module.exports = {
  presets: [
    '@babel/preset-flow',
    'next/babel',
  ],
  plugins: [
    ['babel-plugin-flow-react-proptypes', { deadCode: true }],
  ],
}
