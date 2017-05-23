/**
 * Created by jefferson.wu on 5/22/17.
 */
console.log('Configurating something.');

const env = process.env;

export const node_env = env.NODE_ENV || 'development';
export const log_stars = function(message) {
    console.info('**********');
    console.info(message);
    console.info('**********');
};

// default module export.
export default {
    port: env.PORT || 3000
}