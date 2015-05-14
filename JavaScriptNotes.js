// Programming Basics in JavaScript - Notes

// two forward slashes represent a comment

/*

This is another type of comment which goes
over multiple lines

It is considered good practice to put comments into your code


JavaScript is written in C-Style syntax
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

JavaScript has six different types of values - There are five primitive data types

1. String
2. Number
3. Boolean (True / False)
4. undefined
5. null

Any value that isn't one of the primitive data types listed is an object(6.)


JavaScript has an Operator called "typeof" which finds out the type of a value - examples:

typeof "hello"
"string"

typeof 10
"number"

typeof true
"boolean"

typeof { ninja: "turtle"}
"object"


Operators - An Operator applies an operation to a value, which is known as the operand.  There are three different operands:

1. unary operator - only requires one operand
typeof "hello" - the operator is typeof and the string "hello" is the operand
2. binary operator - requires two operands
3 + 5 - the operator is the + sign  The numbers 3 and 5 are the operands
3. ternary operator - requires three operands


Strings - A String is a collection of letters or characters.  We can create a string literal by writing a group of characters
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


Variables - Variables are a way of storing a value in memory for later use.  In JavaScript you declare a variable by using the keyword var

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

If we want the last occurence of a character or substring, we can use the lastIndexOf() method:

name.lastIndexOf("o");
2

The concat() method can be used to concatenate two or more strings together:

"JavaScript".concat("Ninja");
"JavaScriptNinja"

"Hello".concat(" ","World","!"); // A blank space between words is represented by quotations around a space.
"Hello World"

A shortcut for string concatenation is using the + symbol to add the strings together:
"Java" + "Script" + " " + "Ninja";
"JavaScript Ninja"

The trim() method will remove any whitespace from the beginning and end of a string:

"    Hello World     ".trim(); // the space in the middle will be preserved
"Hello World"

"   \t\t  JavaScript Ninja! \r".trim(); // escaped tabs and carriage returns are also removed
"JavaScript Ninja!"


Numbers

Numbers can be integers (whole numbers - such as 3) or floating point decimals
(often referred to as just "decimals" or "floats", such as 3.14159).  For example:

typeof 3;
"number"

typeof 3.14159;
"number"

As you can see in the examples above, JavaScript doesn't distinguish between integers and floating point decimals -
they are both given the type of "number", which is a different approach to most other programming languages.

This is set out in the ECMAScript specification, although most JavaScript engines will treat integers and floats
 differently in the background in order to improve efficiency.

Number Constructor Function

Just like strings, numbers have a constructor function.

new Number(3)

It take a lot longer to write this so stick with just writing the number, for example 3.  The number literal method.

Octal and Hexadecimal Numbers

If a number starts with a 0x, it is considered to be in hexadecimal (base 16) notation:
0xAF; // A represents 10, F represents 15
175

Hexadecimal or "hex" numbers are often used for color codes on the Web.

If a number starts with a zero, it is usually considered to be in octal (base 8) notation:

047; // 4 eights and 7 units
39

Octal numbers are not actually part of the ECMAScript standard but JavaScript engines implement the convention.

Exponential Notation

Numbers can also be represented in exponential notation, which is shorthand for "multiply by 10 to the power of" (you may have heard this referred to as "scientific notation" or "standard form").  Examples:

1e6; // means 1 multiplied by 10 to the power of 6 (a million)
1000000

2E3; // can also be written as 2E3, 2E+3 and 2e+3
2000

Fractional values can be created by using a negative index value:

2.5e-3 // means 2.5 multiplied by 10 to the power of -3 (0.001)
0.0025

Number Methods

Numbers also have some built-in methods, although you need to be careful when using the dot notation with number literals because the dot can be confused as a decimal point. There are a few ways to deal with this, which we'll demonstrate with the toExponential() method; this returns the number as a string in exponential notation.

Use two dots:
5..toExponential();
5e+0

Put a space before the dot:
5 .toExponential();
5e+0

Always write integers as a decimal:
5.0.toExponential();
5e+0

Place the integer in parentheses:
(5).toExponential();
5e+0

Assign the number to a variable:
var number = 5;
5
number.toExponential();
5e+0

The toFixed() method rounds a number to a fixed number of decimal places:

var pi = 3.1415926;
undefined

pi.toFixed(3); // only one dot needed when using variables
"3.142"

Note that the value is returned as a string.

The toPrecision() method rounds a number to a fixed number of significant figures that is once again returned as a string (and often using exponential notation):
325678..toPrecision(2);
"3.3e+5"
2.459.toPrecision(2);
"2.5"

Arithmetic Operations

All the usual arithmetic operations can be carried out in JavaScript

Addition:
5+4.3;
9.3

Subtraction:
6 - 11;
-5

Multiplication:
6*7;
42

Division:
3/7;
0.42857142857142855

You can also calculate the remainder of a division using the % operator:
23%6; // the same as asking 'what is the remainder when 23 is divided by 6'
5

This is similar to, but not quite the same as modulo arithmetic. That is because the result always has the same sign as the first number:
-4%3; // -4 modulo 3 would be 2
-1

Changing Variables

If a variable has been assigned a numeric value, it can be increased using the following operation:

points = 0; // initialize points score to zero
0

points = points + 10;
10

This will increase the value held in the points variable by 10.  You can also use the compound assignment operator, +=, which is a shortcut for performing the same task, but helps you avoid writing the variable name twice:

points += 10;
20

There are equivalent compound assignment operators for all the operators in the previous section:

points -= 5; // decreases points by 5
15

points *= 2; // doubles points
30

points /= 3; // divides the value of points by 3
10

points %= 7; // changes the value of points to the remainder if its current value is divided by 7
3

Incrementing Values

If you only want to increment a value by 1, you can use the ++ operator. This goes directly before or after the variable.

So what's the difference between putting the ++ operator before or after the variable? The main difference is the value that is returned by the operation.  Both operations increase the value of the points variable by 1, but points++ will return the original value then increase it by 1, whereas ++points will increase the value by 1, then return the new value:

points++; // will return 3, then increase points to 4
3

++points; // will increase points to 5, then return it
5

There is also a -- operator that works the same way

points--;  // returns 5 then decreases to 4
5

--points; // decreases points to 3 then returns
3

Infinity

Infinity is a special error value in JavaScript that is used to represent any number that is too big for JavaScript to deal with. The biggest number that JavaScript can handle is 1.7976931348623157e+308:

1e308; // 1 with 308 zeroes
1e308

2e308; // too big
Infinity

There is also a value -Infinity, which is used for negative numbers that go below -1.7976931348623157e+308:

-1e309;
-Infinity

The value of Infinity can also be obtained by dividing by zero:

1/0;
Infinity

The smallest number that JavaScript can deal with is 5e-324.  Anything below this evaluates to either 5e-324 or zero.

5e-324;
5e-324

3e-325;
5e-324

2e-325;
0

NaN

NaN is an error value that is short for "Not a Number". It is used when an operation is attempted and the result isn't numerical:

"hello" * 5;
NaN

The result returned by the typeof operator is rather ironic, however:
'number'

Type Coercion

Type coercion is the process of converting the type of a value in the background to try and make an operation work. For example, if you try to multiply a string and a number together, JavaScript will attempt to coerce the string into a number:

"2" * 8;
16

If you try and add a string to a number however, JavaScript converts the number to a string and then concatenate the two strings together:

"2" + 8
28

Converting Strings to Numbers

We can convert strings to numbers and vice versa using various methods:

To convert a string to a number we can multiply a numerical string by 1, which will convert it to a number because of type coercion:

answer = "5" * 1
5

typeof answer;
"number"

Another way to convert a string to number is by placing a + in front of the string:

answer = +"5";
5

typeof answer;
"number"

Another way to convert a string to a number is by using the Number function:

Number("23");
23

This is the preferred way to convert strings to numbers as it avoids type coercion in the background.  The conversion is explicit, making it obvious what is being done.

Convert Numbers to Strings

To change numbers into strings you can add an empty string, which will use type coercion to silently convert the number into a string in the background:

3+'';
"3"

The preferred way is to use the String function

String(3);
"3"

There is also the very similar toString() method, but this may change the base of the number. For example, if you want to write the number 10 in binary (base two), you could write:

10..toString(2);
"1010"

You can go up to base 36, although after base ten, letters are used to represt the digits:

1000000..toString(36) // a million in base 36
"lfls"

Parsing Numbers

There is another useful function called parseInt() that can be used to convert a string representation of a numerical value back into an integer. You can specify the base of the number you are trying to convert, for example:

parseInt("1010",2); // converts from binary, back to decimal
10

parseInt("omg",36);
31912

parseInt("23",10);
23

If a string starts with a number, the parseInt function will use this number and ignore any letters that come afterwards:

var address = "221B Baker Street"
undefined

parseInt(address, 10)
221

If you try to do this with the Number function, it returns NaN:

Number(address)
NaN

And if you use parseInt with a decimal, it will remove anything after the decimal point:

parseInt("2.4",10)
2

Be careful not to think that this is rounding the number to the nearest integer; it simply removes the part after the decimal point.

There is also a similar function called parseFloat() that converts strings into floating point decimal numbers:

parseFloat("2.9",10)
2.9

Undefined

undefined is the value given to variables that have not been assigned a value. It can also occur if an object's property doesn't exist or a function has a missing parameter. It is basically JavaScript's way of saying "I can't find a value for this." 

Null

null means "no value". It can be thought of as a placeholder that JavaScript uses to say "there should be a value here, but there isn't at the moment."

undefined and null are both "non-value" values. They are similar, although they behave slightly differently. For example, if you try to do sums with them:

10 + null // null behaves like zero
0

10 + undefined // undefined is not a number
NaN

null is coerced to be 0, making the sum possible whereas undefined is coerced to NaN, making the sum impossible to perform.

Values tend to be set to undefined by JavaScript, whereas values are usually set to null manually by the programmer.

Booleans (boo-urns)

There are only two Boolean values - true and false. They are named after George Boole, an English mathematician who worked in the field of algebraic logic. Boolean values are fundamental in the logical statements that make up a computer program. Every value in JavaScript has a Boolean value and most of them are true (known as truthy values).

To find the Boolean value of something, you can use the Boolean function:

Boolean("hello");
true

Boolean(42);
true

Boolean(0);
false

Only seven (7) values are always false and these are known as falsy values:

"" // double quoted empty string
'' // single quoted empty string
0
NaN
false
null
undefined

Logical Operators

A logical operator can be used with any primitive value or object. The results are based on whether the values are considered to be truthy or falsy.

!(Logical NOT)

Placing the ! operator in front of a value will convert it to a Boolean and return the opposite value. So truthy values will return false, and falsy values will return true. This is known as negation:

!true;
false

!0;
true

You can use double negation (!!) to find out if a value is truthy or falsy (it is a shortcut to using the Boolean function we employed earlier because you are effectively negating the negation):

!!'';
false

!!"hello";
true

!!3;
true

!!NaN;
false

!!"false";
true

!!'0';
true

&&(Logical AND)

Imagine that you are having a party and want to have some rules about who is allowed in. You might want to allow only people who are wearing glasses AND who are over 18 to be allowed in. This is an example of a logical AND condition: anybody coming to the party must satisfy both conditions before they are let in.

The logical AND operator works on two or more values (the operands) and only evaluates to true if all the operands are truthy. The value that is returned is the last truthy value if they are all true, or the first falsy value if at least one of them is false:

true && true;
true

3 && 0; // returns 0 because it is falsy
0 

||(Logical OR)

Now imagine that you relax the rules for your party and allow people in if they wear glasses OR are over 18. This means that they only have to satisfy one of the rules to be allowed in - an example of a logical OR condition.

The logical OR operator also works on two or more operands, but evaluates to true if any of the operands are true, so it only evaluates to false if both operands are falsy. The value that is returned is the first truthy value if any of them are true, or the last falsy value if all of them are false:

true || false;
true

NaN || undefined; // both NaN and undefined are falsy, so undefined will be returned
undefined

Lazy Evaluation

Remember the party example when the condition for entry was that attendees had to wear glasses and be over 18? If you saw somebody without glasses, would you bother asking them to prove that they were over 18? There'd be no point because by not wearing glases, they wouldn't be allowed in anyway.

When the rules were relaxed, people were allowed in if they were wearing glasses or if over 18. If somebody arrived wearing glasses, there would be no need to check their age.

These are examples of lazy evaluation - you only check as many conditions as you have to for somebody to be allowed in. JavaScript performs a similar task and uses lazy evaluation when processing the logical AND and OR operators. This means that it stops evaluating any futher operands once the result is clear.

For example, for a logical AND expression to be true, all the operands have to be true; if any of them are false, there is no point chekcing any subsequent operands as the result will still be false. Similary, for a logical OR to be true, only one of the operands has to be true; hence, as soon as an operand is evaluated to true, the result is returned as true and any subsequent operands won't be checked as the result is of no consequence.

This is demonstrated below:

a = 0; // declare the variable a and assign the value of 0
0

false && (a = 1); // (a = 1) is truthy, but it won't be evaluated, since the first operand is false
false

a; // the value of a is still 0
0

false || (a = 1); // this will evaluate both operands, so a will be assigned the value of 1, which is returned because false is truthy therefore both are evaluated to true
1
