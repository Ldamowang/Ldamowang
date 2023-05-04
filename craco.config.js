/*
 * @Author: liyi
 * @LastEditors: liyi
 * @Date: 2023-04-29 21:30:59
 * @LastEditTime: 2023-04-29 21:32:27
 */
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
