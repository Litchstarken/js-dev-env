// this ile isn`t transpiled, so must use CommonJS ans ES%

//Register babel to tenaspile before the test run
require('@babel/register')();

// Disable webpack features that mocha doesn´t understand.

require.extensions['.css'] = function(){};