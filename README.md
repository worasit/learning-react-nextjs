# learning-react-nextjs

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
