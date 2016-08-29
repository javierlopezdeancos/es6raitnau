const assert = require( 'assert' )
const es6raitnau = require( '../src/moduleA.js' )
let moduleB = require( '../src/moduleB.js' )

const mock_moduleB = () => 3.1415
moduleB = mock_moduleB

suite( 'test for example module A', () => {

    suite( 'run sould console PI', () => {
        test( ' an example ', () => {
            assert.equal( es6raitnau(), 3.1416 )
        } )
    } )

} )
