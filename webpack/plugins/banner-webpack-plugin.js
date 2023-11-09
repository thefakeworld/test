// 实战
// BannerWebpackPlugin

// 作用：给打包输出文件添加注释
// 开发思路：


// 需要打包输出前添加注释：需要使用 compiler.hooks.emit钩子，它是打包输出前触发。
// 如果获取打包输出的资源？compilation.assets可以获取所有即将输出的资源文件。

// 3.实现
// js复制代码
class BannerWebpackPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    // 需要处理文件
    const extensions = ["js", "css"];

    // emit是异步串行钩子
    compiler.hooks.emit.tapAsync("BannerWebpackPlugin", (compilation, callback) => {
      // compilation.assets包含所有即将输出的资源
      // 通过过滤只保留需要处理的文件
      const assetPaths = Object.keys(compilation.assets).filter((path) => {
        const splitted = path.split(".");
        return extensions.includes(splitted[splitted.length - 1]);
      });

      assetPaths.forEach((assetPath) => {
        const asset = compilation.assets[assetPath];

        const source = `/*
* Author: ${this.options.author}
*/\n${asset.source()}`;

        // 覆盖资源
        compilation.assets[assetPath] = {
          // 资源内容
          source() {
            return source;
          },
          // 资源大小
          size() {
            return source.length;
          },
        };
      });

      callback();
    });
  }
}

module.exports = BannerWebpackPlugin;

// 作者：锡曼巴
// 链接：https://juejin.cn/post/7233597845919596603
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。