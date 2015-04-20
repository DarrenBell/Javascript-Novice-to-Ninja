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

Assignment

To assign a value to a variable, we use the = operator.  The example below shows how we set the variable name to point to the string literal "John":

var name // declare the variable first

name = "John"; // assign the variable to a string

To see the value of a variable you can enter it into the console.  The variable name now refers to the string "John" so it will behave exactly the same as that string:

name;
"John"

typeof name;
"string"

You can declare and initialize a variable at the same time:

var name = "Snow";

You can also declare and assign values to multiple variables in a single statement:

var x = 2, y, z ="Hi!"; // y has only been declared, it's undefined
undefined

String Properties and Methods

Primitive values and objects have properties and methods.  Properties are information about the object or value, while methods perform an action on the object or value - either to change it or tell us something about it.

PROPERTIES

We can access the properties of a string using the dot notation.  This involves writing a dot followed by the property we are interested in.  For example every string has a length property that tells us how many characters are in the string:

name = "Snow"; // declare and assign a variable
Snow
name.length; // call the length method on name
4

As you see it shows 4 characters are in the string stored in the name variable.

Another notation you can use is square brackets to access a primitive value

name['length']; // note the property length is in quote marks
4

All properties of primitive values are immutable - they are unable to be changed.

So name.length = 7 for example will not work

METHODS

A method is an action that a primitive value or object can perform.  To call a method, we use the dot operator [.] followed by the name of the method, followed by parentheses (this is a useful way to distinguish between a property and a method - methods end with parentheses).  

For example, we can write a string in all capital letters using the toUpperCase() method:

name.toUpperCase();
SNOW

Or the toLowerCase() method, which will write name in all lower-case letters:

name.toLowerCase();
snow

If you want to know which character is at a certain position use the chatAt() method:

name.charAt(1);
n

This tells us that the character 'n' is at position 1.  The first letter is always positioned at 0 because programming counting starts at 0 and not 1.

If you want to find where a certain character or substring appears in a string, we can use the indexOf() method:

name.indexOf("s");
0

If a character doesn't appear in the string, -1 will be returned.

name.indexOf("z");
-1

 */




