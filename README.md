# RD-lab-project
 autor: Petro Rikabal Aviles // 
 e-mail: Petro_Rikabal_Aviles@emap.com

#Common information
1) In project 'dev' and 'prod' build configuration is used.
2) Script configuration depends on environment variables
3) Used Pug-html preprocessor for html
4) Configs adopted for multi page application
5) Use 'npm install' to install dependencies

#Development mode
1) use 'npm run dev' command to run dev mode
2) dev-server is used for dev mode
3) Eslint used (.eslintrc.js file in root folder)
4) Prettier used for code format control
5) Source map: 'eval-cheap-source-map'

#Production mode
1) use 'npm run build' command to run prod mode
2) Output directory (/dist) is cleaned before each build
3) To change optimization.splitChunks read more here : https://webpack.js.org/plugins/split-chunks-plugin/

#Used Loaders:
1) style-loader.
2) css-loader.
3) pug-loader.
4) asset/resource for fonts.
5) asset/resource for images.
6) babel-loader.

#Used Plugins:
1) HtmlWebpackPlugin(https://webpack.js.org/plugins/html-webpack-plugin/)
2) HtmlWebpackPugPlugin (https://www.npmjs.com/package/html-webpack-pug-plugin)
3) ESLintPlugin (https://www.npmjs.com/package/eslint-webpack-plugin)
4) PrettierPlugin (https://www.npmjs.com/package/prettier-webpack-plugin)
5) MiniCssExtractPlugin (https://webpack.js.org/plugins/mini-css-extract-plugin/)