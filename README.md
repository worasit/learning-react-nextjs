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

## Build Pipelines using BuildKite

This project uses the [BuildKite](https://github.com/buildkite/nodejs-docker-example) as a continuous development
pipeline via Docker agent
https://buildkite.com/organizations/nongped/agents#setup-macos

```shell
brew install buildkite/buildkite/buildkite-agent
sed -i '' "s/xxx/6fe1d931de4b23c831330988926ea0b8d0353213b7be426583/g" "$(brew --prefix)"/etc/buildkite-agent/buildkite-agent.cfg

# Start a BuildKite agent on Local MacOS laptop
buildkite-agent
```

## Configure TS-loader

- install `ts-loader` as dev dependencies
  ```shell
  npm install --save-dev typescript ts-loader
  ```
- configure typescript using `tsconfig.json`
  ```json
  {
   "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "strict": true
   }
  }
  ```
- update existing `index.js` to `index.ts`
  ```typescript
    function log(message: string) {
       console.log(message);
    }
    log('hellow world!');
  ```

## Configure Babel-loader

- install `@babel/core @babel/preset-env @babel/preset-typescript` as dev dependencies
  ```shell
  npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript
  ```
- create a babel configuration file `.babelrc` and configure the presets
   ```json
    {
     "presets": [
       "@babel/preset-env",
       "@babel/preset-typescript"
     ]
   }
   ```
- install `babel-loader`
  ```shell
  npm install --save-dev babel-loader
  ```
- update `webpack.config.js` to use `babel-loader` instead of `ts-loader`
- install `@babel/plugin-proposal-class-properties` to allow class initializations in typescript
  ```shell
  npm install --save-dev @babel/plugin-proposal-class-properties
  ```
- configure typescript compiler to check for typesafe at compilation time.
  ```json
      {
        "compilerOptions": {
         "target": "ESNext",
         "module": "ES6",
         "strict": true,
         "noEmit": true,
         "isolatedModules": true,
         "esModuleInterop": true
      },
       "include": [
           "./src/**/*"
       ]
      }
  ```
- execute `tsc` to verify the typescript syntax

## Adding React

- install `react` and `react-dom` normal dependencies
  ```shell
  npm install --save react react-dom
  ```

- install `@types/react` and `@types/react-dom` as dev dependencies
  ```shell
  npm install --save-dev @types/react @types/react-dom
  ```
- update tsconfig.json to support jsx files and renamed ts file to tsx
  ```json
  { "jsx": "react" }
  ```
- make babel to understand react
  ```shell
  npm install --save-dev @babel/preset-react
  ```
- update `.babelrc` to apply a `@babel/preset-react` plugin
- configure webpack to use `index.tsx` as an entry point file.

## Configure a source map (to map error from Javascript(browser) to tsx)

This configuration allows us to know where is the failure located in the source code. we could configure by
using [devtool](https://webpack.js.org/configuration/devtool/#devtool) from webpack

- update the `webpack.config.js` with
  ```json
  {
    devtool: "eval-source-map"
  }
  ```
- update `tsconfig.json` to allow sourceMaps
  ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "module": "ES6",
      "strict": true,
      "noEmit": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "jsx": "react",
      "sourceMap": true
    },
    "include": [
      "./src/**/*"
    ]
  }
  
  ```
