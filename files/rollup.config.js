import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from '../package.json';

export default {
    input: './rambda.js',
    plugins: [
        commonjs(),
        babel({
            presets: [['es2015', {modules: false}]],
            plugins: ['external-helpers'],
        }),
    ],
    sourcemap: false,
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            interop: false,

        },
        {
            file: pkg.module,
            format: 'es',
        },
        {
            file: pkg.browser,
            format: 'umd',
            name: 'R',
            exports: 'named',
            interop: false,
        },
    ],
};
