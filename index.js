module.exports = {
    extends: [
		"airbnb-base"
	],
    parserOptions: {
        "ecmaVersion": 5
    },
    rules: {
		/*** SYANTAX ***/
		// you can use unamed functions ( this.init = function(options){..} )
		"func-names": 0,
		// error if trailing comma is present ( [1,2,] )
		"comma-dangle": [2, "never"],
		// warning if you use "for in" loop and include prototype properties of object
		"guard-for-in": 1,
		// strict mode in global mode
		"strict": [1, "global"],
		// allow restricted syntax
		"no-restricted-syntax": 0,
		// warn if function could be not return anything
		"consistent-return": 1,
		// allow un-wrapped function
		"wrap-iife": 1,
		// plusplus for for cycle
		"no-plusplus": 0,
		// check for double negation
		"no-extra-boolean-cast": 1,
		// ternary if for declaration
		"no-unneeded-ternary": 1,
		// warn if quote is not necessaery for object properties
		"quote-props": 1,
		// error if you don't use brackets, also for one single expression
		"curly": [2, "all"],
		// warn for unuseless return
		"no-useless-return": 1,
		// warn if use regex without new Regex()
		"no-control-regex": 1,

		/*** VARIABLES ***/
		// you can declare variables in more lines
		"one-var": 0,
		// warning if global variable, not defined before, is used
		"no-undef": 1,
		// warning if you declare a variable not at the top of a function scope
		"vars-on-top": 1,
		// you can re-assign a function parameter ( function(b){ b++; } )
		"no-param-reassign": 1,
		// you can use "else" after a return
		"no-else-return": 0,
		// warning if define a variable but don't use it
		"no-unused-vars": 1,
		// accept to start variables declaration with _
		"no-underscore-dangle": 1,
		// no undefinied initialization
		"no-undef-init": 1,
		// no check if import a devDep instead of dep
		"import/no-extraneous-dependencies": 0,

		/*** SPACES ***/
		// indent 4 spaces
		"indent": [2, 4],
		// a void line at end of file is not necessary
		"eol-last": 0,
		// space before blocks is not necessary ( if()*{ )
		"space-before-blocks": 0,
		// space after keywords is not necessary ( if*(){ )
		"space-after-keywords": 0,
		// space before function parentheses is not necessary ( function*(){ )
		"space-before-function-paren": 0,
		// trailing-space at end of line is allowed ( window.alert();* )
		"no-trailing-spaces": 0,
		// blocks could be padded by blank lines
		"padded-blocks": [0, "never"],
		"no-use-before-define": 0,
		//comments
		"spaced-comment": 0,
		// max len of a string
		"max-len": 1,
		// keyword could be not spaced
		"keyword-spacing": 0,

		/*** ES6 ***/
		// you can use "var", not only "let" or "const"
		"no-var": 0,
		// object shorthand is not alloewd in ES5
		"object-shorthand": 0,
		// allow function in argument list
		"prefer-arrow-callback": 0,
		// warning if you don't use "const" for a variable never modified
		"prefer-const": 1,
		// allow parseInt and Number.parseInt
		"prefer-numeric-literals": 0,
		// warn for .apply instead of spread operator
		"prefer-spread": 1,
		// allow concatenation of string with variables
		"prefer-template": 0,
	}
};