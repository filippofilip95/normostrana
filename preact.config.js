import CopyWebpackPlugin from 'copy-webpack-plugin';

export default config => {
  config.plugins.push(new CopyWebpackPlugin([{
    from: `${__dirname}/src/static`,
    to: `${__dirname}/build`
  }]));
};