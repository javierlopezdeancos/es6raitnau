import {expect} from 'chai'

import moduleA from '../src/moduleA.js'

const PI = 3.1416

beforeEach( function () {
} )

describe( '#ModuleA', () => {
    it( 'run sould console PI', () => {
        expect( moduleA() ).to.equal( PI )
    } )
} )

afterEach( function () {
} )