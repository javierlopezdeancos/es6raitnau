import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

let config = {
    entry: './src/moduleA.js',
    dest: './dist/es6raitnau.js',
    format: 'iife',
    moduleName: 'es6raitnau',
    sourceMap: 'inline',
    banner: '/* es6raitnau example */',
    footer: '/* follow me on Twitter! @javierland */',
    plugins: [
        buble()
    ]
}

if ( process.env.NODE_ENV === 'production' ) {
    config.dest = './dist/es6raitnau.min.js'
    config.plugins.push( uglify() )
}

export default config
