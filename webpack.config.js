const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const argv = require('webpack-nano/argv');
const { mode } = argv;

module.exports = {
  entry: ['./src/index.tsx', 'webpack-plugin-serve/client'],
  mode: 'none',
  output: {
    path: __dirname + '/public/',
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              new Serve({
                middleware: (app, builtins) => {
                  app.use(
                    builtins.proxy('/', {
                      target: 'http://localhost:3000',
                    })
                  );
                },
              }),
            ],
          },
        },
      },
    ],
  },
  // devServer: {
  //   //contentBase: path.resolve(__dirname, 'src'),
  //   historyApiFallback: true,
  //   publicPath: 'public',
  //   compress: true,
  //   proxy: { '/': 'http://localhost:3000' },
  // },
};
