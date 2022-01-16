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

# Build Pipelines using BuildKite

This project uses the [BuildKite](https://github.com/buildkite/nodejs-docker-example) as a continuous development pipeline via Docker agent
https://buildkite.com/organizations/nongped/agents#setup-macos
```shell
# Start a BuildKite agent
docker run -e BUILDKITE_AGENT_TOKEN="6fe1d931de4b23c831330988926ea0b8d0353213b7be426583" buildkite/agent

# Trigger a first build
export  BUILDKITE_AGENT_TOKEN="6fe1d931de4b23c831330988926ea0b8d0353213b7be426583"
curl -H "Authorization: Bearer ${BUILDKITE_AGENT_TOKEN}" "https://api.buildkite.com/v2/organizations/nongped/pipelines/learning-react/builds" \
  -X "POST" \
  -F "commit=HEAD" \
  -F "branch=master" \
  -F "message=First build :rocket:"
```
