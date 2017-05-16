import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import uglify from 'rollup-plugin-uglify'

import postcss from 'rollup-plugin-postcss'

const babelConfig = {
    'presets': [
        ['env', {
            'targets': {
                'browsers': ['last 2 versions']
            },
            'loose': true
        }]
    ]
}

let postCssConfig = {
        plugins: [
            // cssnext(),
            // yourPostcssPlugin()
        ],
        sourceMap: true,
        extract : '/dist/es6raitnau.css',
        extensions: ['.css']
    }

let config = {
    entry: './src/moduleA.js',
    dest: './dist/es6raitnau.js',
    format: 'iife',
    moduleName: 'es6raitnau',
    sourceMap: 'inline',
    banner: '/* es6raitnau example */',
    footer: '/* follow me on Twitter! @javierland */',
    plugins: [
        babel( babelrc( {
            addExternalHelpersPlugin: false,
            config: babelConfig,
            exclude: 'node_modules/**'
        } ) ),
        postcss(postCssConfig)
    ]
}

if ( process.env.NODE_ENV === 'production' ) {
    config.dest = './dist/es6raitnau.min.js'
    config.plugins.push( uglify() )
    postCssConfig = {
        plugins: [
            // cssnext(),
            // yourPostcssPlugin()
        ],
        sourceMap: false,
        extract : '/dist/es6raitnau.min.css',
        extensions: ['.css']
    }
}

export default config
