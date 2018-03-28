/**
 * npm run build 构建执行文件，主要用于生产环境
 * 建议先查阅webapck.prod.conf.js
*/

'use strict'

// npm和node版本检查
require('./check-versions')()

// 设置环境变量为production
// process.env 是node环境内置的变量，在命令行里可以通过 set 变量名=值的方式来设置，等价于 set NODE_ENV='production'
process.env.NODE_ENV = 'production'

const ora = require('ora') // 一个命令行转圈圈动画插件，好看用的
const rm = require('rimraf') // 用来执行UNIX命令rm和-rf的用来删除文件夹和文件，清空旧的文件
const path = require('path')
const chalk = require('chalk') // chalk插件，用来在命令行中输出不同颜色的文字
const webpack = require('webpack')
const config = require('../config') // 项目配置文件
const webpackConfig = require('./webpack.prod.conf') // 生产环境的Webpack配置文件

const spinner = ora('building for production...') // 开启转圈圈动画
spinner.start()

// var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
// rm('-rf', assetsPath)
// mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath)

// 调用rm方法，第一个参数和第二个参数分别是 ../touch-minimal(webpack默认是../dist) 和 static，表示删除路径下面的所有文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err // 如果删除的过程中出现错误，就抛出这个错误，同时程序终止
  // 调用webPack执行构建
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({ // stats对象中保存着编译过程中的各种消息
      colors: true, // 增加控制台颜色开关
      modules: false, // 不增加内置模块信息
      children: false, // 不增加子级信息
      chunks: false, // 允许较少的输出
      chunkModules: false // 不将内置模块的信息加到包信息
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
