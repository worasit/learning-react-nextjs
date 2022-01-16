# learning-react-nextjs

[![Build status](https://badge.buildkite.com/0d28b31cb4ae053ce9fa920f100dda95fbdb8f5f41a11e4f82.svg)](https://buildkite.com/nongped/learning-react)

## Get Started

- Create a project structure
    ```shell
    npm init
    npm install --save-dev webpack webpack-cli
    npm install --save-dev html-webpack-plugin
    
    mkdir ./src
    touch ./src/index.js
    touch ./src/index.html
    ```
- Define the webpack configuration file
  ```js
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html"
    })]
  }
  ``` 
- Execute the webpack build command to verify results
  ```shell
  webpack --mode production
  ```
- Install `webpack-dev-server` for hosting and hot-reloading our website locally
  ```shell
  npm install --save-dev webpack-dev-server
  webpack-dev-server --open --mode=development
  ```

# Build Pipelines using BuildKite

This project uses the [BuildKite](https://github.com/buildkite/nodejs-docker-example) as a continuous development
pipeline via Docker agent
https://buildkite.com/organizations/nongped/agents#setup-macos

```shell
brew install buildkite/buildkite/buildkite-agent
sed -i '' "s/xxx/6fe1d931de4b23c831330988926ea0b8d0353213b7be426583/g" "$(brew --prefix)"/etc/buildkite-agent/buildkite-agent.cfg

# Start a BuildKite agent on Local MacOS laptop
buildkite-agent
```
