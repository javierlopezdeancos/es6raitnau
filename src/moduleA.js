/* eslint no-console:0 */

import moduleB from './moduleB.js'

export default function moduleA() {
    console.log( moduleB() )
}
