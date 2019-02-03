export default (config, env) => {
	config.output.publicPath = env === 'DEV' ? '/' : '/normostrana/';
};
  