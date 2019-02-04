export default (config, options) => {
	config.output.publicPath = options.production ? '/normostrana/' : '/';
};
  