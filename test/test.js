'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var EPSILON = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof EPSILON, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the difference between one and the smallest value greater than one which is representable as a double (2**-52)', function test( t ) {
	var expected = pow( 2, -52 );
	t.equal( EPSILON, expected, 'equals 2**-52' );
	t.end();
});
