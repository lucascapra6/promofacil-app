var path = require('path')

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.android.js',
      '.android.tsx',
      '.ios.js',
      '.ios.tsx'
    ],
    alias: {
      screens: path.resolve(__dirname, '../../../screens')
    }
  }
}
