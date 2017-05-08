import {expect} from 'chai'

import moduleA from '../src/moduleA.js'

let moduleB = require( '../src/moduleB.js' )
const mock_moduleB = () => 3.1415
const PI = 3.1416
moduleB = mock_moduleB

describe( '#ModuleA', () => {
    it( 'run sould console PI', () => {
        expect( moduleA() ).to.equal( PI )
    } )
} )