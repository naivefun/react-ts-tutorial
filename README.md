# 环境预备

1. 在本机安装 node : https://nodejs.org
2. 在本机安装 Visual Studio Code : https://code.visualstudio.com/
3. 在本机安装 git: https://git-scm.com/downloads
4. 在本机安装 python: https://www.python.org/downloads/

### 检查基本环境
打开 Terminal (Mac, Linux) 或者 Commnad Line (win)

1. 运行 `node -v` 应该看到输出 `v8.xxx`
2. 运行 `npm -v` 应该看到输出 `6.x.x`
3. 运行 `git --version` 应该看到输出 `git version 2.17.1`

# 安装 NPM 依赖

1. Typescript: `npm i typescript -g`
2. TS-Node: `npm i ts-node ts-node-dev -g`
3. Node-Sass: `npm i node-sass-chokidar -g` (这一步安装需要较长时间)
4. Yarn: `npm i yarn -g`

### 检查 NPM 依赖

1. 运行 `tsc -v` 应该看到输出 `Version 3.0.1`
2. 运行 `yarn -v` 应该看到输出 `1.9.4`
3. 运行 `ts-node -v` 应该看到 node, typescript 等版本号
4. 运行 `ts-node-dev` 应该看到 `Usage: ts-node-dev [options] script [arguments]`

# 预备源代码目录
创建课程目录，运行 `git clone https://github.com/naivefun/react-ts-tutorial.git`

### 试运行
1. `cd react-ts-tutorial`
2. `yarn`
3. `yarn start`

等待编译结束应该会自动弹出主页，否则可以手动输入 `http://localhost:3000` 访问
