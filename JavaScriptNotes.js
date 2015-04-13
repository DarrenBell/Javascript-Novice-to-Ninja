// Programming Basics in JavaScript - Notes

// two forward slashes represent a comment

/*

This is another type of comment which goes
over multiple lines

It is considered good practice to put comments into your code
*/

/* JavaScript is written in C-Style syntax
A JavaScript program is made up of a series of statements and each statement ends with a new line or semicolon (;)

example of two statements (one on each line):

a = "Hello World!";
alert(a);

A block is a series of statements that are collected together inside curly brackets:

{
	// this is a block containing two statements
	var a = "Hello World";
	alert(a);
}

Blocks do not need to be terminated by a semicolon
Whitespace can be used as much as you like - indenting code for example and nesting code

*/

/* JavaScript has six different types of values - There are five primitive data types

1. String
2. Number
3. Boolean (True / False)
4. undefined
5. null

Any value that isn't one of the primitive data types listed is an object(6.)

*/

/* JavaScript has an Operator called "typeof" which finds out the type of a value - examples:

typeof "hello"
"string"

typeof 10
"number"

typeof true
"boolean"

typeof { ninja: "turtle"}
"object"

*/

/* Operators - An Operator applies an operation to a value, which is known as the operand.  There are three different operands:

1. unary operator - only requires one operand
typeof "hello" - the operator is typeof and the string "hello" is the operand
2. binary operator - requires two operands
3 + 5 - the operator is the + sign  The numbers 3 and 5 are the operands
3. ternary operator - requires three operands

*/

/* Strings - A String is a collection of letters or characters.  We can create a string literal by writing a group of characters
inside quotation marks, either single or double:

"hello"
'hello'

String Constructor Function

You can create a string object using the following constructor function:

new String("hello")

This will create a new string that is the same as the string literal "hello", although it will be classed as an object rather
than a primitive value.

For this reason it is preferable to use the string literal notation - requires less typing.

If you want to use quotes inside a string, you can use the opposite of either double or single depending on which you use:

"Darren said 'hello'"
'Darren said "hello"'

Otherwise you need to escape the character by using a backslash:

\' - escape single
\" - escape double
\n - end of line
\r - carriage return
\t - tab
\\ - escaping an actual backslash requires 2x

*/

/* Variables - Variables are a way of storing a value in memory for later use.  In JavaScript you declare a variable by using the keyword var

You don't have to declare a variable before you use it but bad things can happen if you don't.  Best practice to always declare a variable.

You can declare multiple variables at once seperating with a comma: 

var a,b,c;

Rules for Naming Variables

When naming a variable you should try and give them suitable names which describe what they represent.

A variable name can start with any upper or lower case letter, an underscore, or dollar symbol.  It can also contain numbers but cannot start with them.

Variable names are case sensitive and you should use Camel case for variables with more than one word names.  Alternately you can use underscores to separate the words.  It is important to be consistent.

Reserved Words

There are several reserved words in JavaScript that can't be used to name variables

The list is: abstract, boolean, break, byte, case, catch, char, class, const,
continue, debugger, default, delete, do, double, else, enum,
export, extends, false, final, finally, float, for, function, 
goto, if, implements, import, in instanceof, int, inteface, 
long, native, new, null, package, private, protected, public, 
return, short, static, super, switch, synchronized, this, throw, 
throws, transient, true, try, typeof, var, volatile, void, while, 
with

There are also three words that are not in this list that should be:

undefined, NaN (not a number) and Infinity

 */




