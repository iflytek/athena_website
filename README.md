# Webpage

- webpage是通过Docusauru 2构建的。

- Docusaurus 2是一个用于构建文档网站的开源工具和框架。它提供了一个简单易用的方式来创建漂亮、响应式的文档网站，适用于各种类型的项目和组织。

- 在你开始部署"athena_website"的网站前，请确保你是否安装了node.js的包管理器npm，下面是安装命令：

```bash
apt-get install npm
```

- Yarn是一个快速、可靠、安全的包管理器相比于npm。

- 为了更高效的管理、更可靠的管理依赖，这里采用Yarn用于Node.js项目中的依赖管理。

下面是安装yarn的安装命令：

```bash
npm install -g yarn
```

**切记**：将Yarn的可执行文件路径添加到PATH环境变量中，这样就可以在终端中直接运行Yarn命令，而不必指定完整的路径。

- 安装完包管理器npm后，node.js的版本一般是略低的，webpage部署过程中要求nodejs版本不低于16.14，下面是更新node.js版本的命令：

```bash
npm cache clean –f
npm install -g n
NODE_MIRROR=http://npm.taobao.org/mirrors/node n 16.14
```

**如果出现：**

- 恭喜！你已成功使用 `**n**` 工具安装了 Node.js 16.14.2 版本，并附带安装了 npm xxx(原始版本），则安装成功。

**注意：**

```bash
node -v  #还是原始版本，并不是16.14.2
```

- 通过下面命令即可切换到新版本：

```bash
hash -r
```

- 下面就是部署webpage的安装命令：

```bash
yarn
yarn start
yarn build
USE_SSH=true yarn deploy
```

- 最后，输出下面的页面则部署成功
![Image text](https://github.com/Jonyzqw/athena_website/blob/master/figure/webpage.png)

