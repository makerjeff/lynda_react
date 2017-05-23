// import config.js module.

// { node_env } == non-default export from module.
import config, { node_env } from './config';

console.log(config, node_env);