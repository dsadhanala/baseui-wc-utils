import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const defaultPlugins = [
    babel({ exclude: 'node_modules/**' }),
    resolve({ main: true })
];

const defaultConfig = (dest, plugins, sourcemap = true) => ({
    input: 'src/index.js',
    output: {
        file: dest,
        format: ['umd'],
        name: 'baseuiWcUtils',
        sourcemap
    },
    plugins
});

const bundle = defaultConfig('dist/baseui-wc-utils.js', defaultPlugins, false);
const minifiedBundle = defaultConfig('dist/baseui-wc-utils.min.js', [...defaultPlugins, uglify()]);

export default [ bundle, minifiedBundle ];
