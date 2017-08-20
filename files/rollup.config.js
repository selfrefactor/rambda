import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from '../package.json';

export default {
    entry: './rambda.js',
    plugins: [
        commonjs(),
        babel({
            presets: [['es2015', {modules: false}]],
            plugins: ['external-helpers'],
        }),
    ],
    targets: [
        {
            dest: pkg.main,
            format: 'cjs',
            exports: 'named',
            interop: false,
            sourceMap: false,
        },
        {
            dest: pkg.module,
            format: 'es',
            sourceMap: false,
        },
        {
            dest: pkg.browser,
            format: 'umd',
            moduleName: 'R',
            exports: 'named',
            interop: false,
            sourceMap: false,
        },
    ],
};
