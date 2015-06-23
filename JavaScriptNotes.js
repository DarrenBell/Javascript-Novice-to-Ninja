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

Bitwise Operators

Bitwise operators work with operands that are 32-bit integers. These are numbers written in binary (base two) that have 32 digits made up of 0s and 1s. Here are some examples:

5 is written as 00000000000000000000000000000101
100 is written as 00000000000000000000000001100100

JavaScript will convert any values used with bitwise operators into a 32-bit integer and then carry out the operation.

Bitwise NOT

The bitwise NOT operator [~] will convert the number to a 32-bit integer, then change all the 1s to 0s and all the 0s to 1s. For example, 2476 can be represented as:

000000000000000001011010101100

Which will change to:

111111111111111110100101010011

This is 1073736019, but the result actually uses negative values, as you can see in the code:

~44;
-45

In most cases, this operator will return an integer that adds to the original operand to make -1.

Bitwise AND

You can also use the bitwise AND operator, [&], which will convert both numbers into binary and returns a number that in binary has a 1 in each position for which the corresponding bits of both operands are 1s.  Here's an example:

12 & 10; // in binary this is 1100 & 1010, so only the first digit is 1 in both cases
8

It can also be used with non-integers, where it returns 1 for true and 0 for false.

5 & "hello"; // both are true
1

Bitwise OR

There is also the bitwise OR operator, [|], which will convert both numbers into binary and return a number that in binary has a 1 in each position for which the corresponding bits of either operands are 1s. Here's an example:

12|10; // in binary this is 1100 & 1010, so the first 3 digits contain a 1
14

This can also be used with non-integers, and returns 1 for true and 0 for false.

''|"";
0 // both are falsy

Bitwise XOR

Another operation is the bitwise XOR operator, [^], which stands for "eXclusive OR". This will convert both numbers into binary and return a number that in binary has a 1 in each position for which the corresponding bits of either operands are 1s, but not both 1s. Here's an example:

12^10; // in binary this is 1100 & 1010, so only the second and third digits are exclusively 1s
6

When using non-integer values, this evaluates to 1 if either operands are truthy and evaluates to 0 if both operands are truthy or both are falsy:

1^0; // the first operand is truthy
1

true ^ true; // if both operands are true then the result is false
0

Bitwise Shift Operators

The bitwise shift operators, << and >> will move the binary representation a given number of places to the right or left, which effectively multiplies or divides the number by the powers of two:

3 << 1; // multiply by 2
6

16 >> 1; // divide by 2
8

5 << 3; // multiply by 2 cubed (8)
40

Comparison

We often need to compare values when we are programming. JavaScript has several ways to compare two values.

Equality

Remember earlier, when we assigned a value to a variable? We used the = operator to do this, which would be the logical choice for testing if two values are equal.

Unfortunately, we can't use it because it is used for assigning values to variables. For example, say we had a variable called answer and we wanted to chedck if it was equal to 5, we might try doing this:

answer = 5;
5

What we've actually done is assign the value of 5 to the variable answer, effectively overwriting the previous value!

The correct way to check for equality is to use either a double equals operator, ==, known as "soft equality" or the triple equals operator, ===, known as "hard equality".

Soft Equality

We can check if answer is in fact equal to 5 using soft equality, like so:

answer == 5;
true

This seems to work fine, but unfortunately there are some slight problems when using soft equality:

answer == "5";
true

As you can see, JavaScript is returning true when we are checking if the variable answer is equal to the string "5", when in fact answer is equal to the number 5. This is an important difference, but when a soft inequality is used, JavaScript will attempt to coerce the two values to the same type when doing the comparison. This can lead to some very strange results.

" " == 0;
true

" " == "0";
false

false == "0";
true

"1" == true;
true

"2" == true;
false

"true" == true;
false

null == undefined;
true

As you can see, values that are not actually equal have a tendency to be reported as being equal to each other when using the soft equality operator.

Hard Equality

Hard Equality also tests that the two values are the same type:

answer === 5;
true

answer === "5";
false

null === undefined;
false

As you can see hard equality reports that the variable answer is the number 5, but not the string "5". It also correctly reports that null and undefined are two different values.

Inequality

We can check if two values are not equal using the inequality operator. There is a soft inequality operator, != and a hard inequality operator, !== These work in a similar way to the soft and hard equality operators:

16 != "16"; // type coercion makes these equal
false

16 !== "16";
true

As with equality, it is much better to use the hard inequality operator as this will give more reliable results unaffected by type coercion.

Greater Than and Less Than

We can check if a value is great than another using the > operator:
8 > 4;
true

You can also use the "less than" < operator in a simialr way:
8 < 4;
false

If you want to check if a value is greater than or equal to another value, you can use the >= operator, but be careful, the equality test works in the same way as the soft equality operator:

8 >= 4;
true

8 >= 8;
true

8 >= "8";
true

As you can see, type coercion means that strings can be confused with numbers. Unfortunately, there are no "hard" greater-than or equal-to operators, so an alternative way to avoid type coercion is to use a combination of the greater-than operator, logical OR, and a hard equality:

8 > 8 || 8 === 8;
true

8 > "8" || 8 === "8";
false

There is also a similar "less-than or equal-to" operator:

-1 <= 1;
true

-1 <= -1;
true

These operators can also be used with strings, which will be alphabetically ordered to check if one string is "less than" the other:

"apples" < "bananas";
true

Be careful, though, as the results are case-sensitive and upper-case letters are considered to be "less than" lower-case letters:

"apples" < "Bananas";
false

Arrays

An array is an ordered list of values. To create an array literal, simply write a pair of square brackets:

var myArray = [];
[]

You can also use an array constructor function:

var myArray = new Array();
[]

Both of these product an empty array object, but it is preferable to stick to using array literals as they take less typing.

Arrays are not primitive values but a special built-in object, as we can see when we use the typeof operator:

typeof []
object

Stacks of Pizza (Example)

Always count from 0 with Array items.

We can create an array to represent a pile of pizza boxes in JavaScript by creating an empty array literal called pizzas:

var pizzas = [];

Each empty box can be thought of as representing an empty element in this array.

To find out what is in box 0, we can open it up and peek inside. In JavaScript, we can find out the value of element 0 in the pizzas array by using the following code:

pizzas[0];
undefined

To access a specific value in an array, we write its position in the array in square brackets (this is known as its index). If an element in an array is empty, undefined is returned.

Adding Values to Arrays

If you want to put a Margherita pizza in box 0, he just needs to open the box and put it inside. To place the string "Margherita" inside the first element of our pizzas array, we need to assign it to element 0, like so:

pizzas[0] = "Margherita";

Each item in an array can be treated like a variable. You can change the value using the assignment operator =. For example, we can change the value of the first item in the pizzas array to "Ham & Pineapple":

pizzas[0] = "Ham & Pineapple";

If we receive more pizza orders, we can fill up the boxes with pizzas one by one. We can do this to our array by assigning more values:

pizzas[1] = "Mushroom";
pizzas[2] = "Spinach & Rocket";

Just as we can put a pizza in any of the boxes in the pile, we can also use the index notation to add new items to any element in the pizzas array:

pizzas[5] = "Pineapple & Sweetcorn"

We can look at the pizzas array by simply typing its name into the console:

pizzas;
["Ham & Pineapple", "Mushroom", "Spinach & Rocket", undefined, undefined, "Pineapple & Sweetcorn"]

Here we can see that the sixth item (with an index of 5) has been filled with using the "Pineapple & Sweetcorn". This has made the array longer than it was before, so all the other unused slots in the array are filled by the value undefined, just as in we had put a pizza in the sixth box and left the other boxes empty.

Creating Array Literals

We can create an array literal using square brackets that already contain some initial values, so there's no need to add each value one by one. So we could create another pile of pizza boxes as the following array literal:

var pizzas = ["Margherita", "Musroom", "Spinach & Rocket", "Pineapple & Sweetcorn"];
["Margherita", "Musroom", "Spinach & Rocket", "Pineapple & Sweetcorn"]

You don't even have to use the same types of items inside an array. This array contains each of the five different types of primitive calues, as well as an empty object:

mixedArray = [null, 1, "two", true, undefined, {} ];
[null, 1, "two", true, undefined, {} ]

Removing Values from Arrays

We can remove a pizza from a box, by opening it and taking the pizza out, leaving the box empty. The delete operator does the same task and will remove an item from an array:

delete pizzas[3];
true

If we look at the pizzas array, we can see that the fourth entry (with an index of 3) has indeed been removed, but it has been replaced with a value of undefined (as if the box was empty):

pizzas;
["Margherita", "Mushroom", "Spinach & Rocket", undefined]

Watch out for this as it can even trip up experienced programmers. The value that was in position 3 ("Pineapple & Sweetcorn") has been deleted from the array, but the space that it occupied is still thee and contains a value of undefined. Remember that we only removed the pizza from the box and didn't remove the box completely. This means that the array still has the same number of elements and the position can still be referenced as an index, but it will just return undefined.

pizzas[3];
undefined

Array Properties and Methods

Arrays are a powerful weapon in a JavaScript ninja's toolkit and have some useful methods. To demonstrate these, we're going to use the following pizzas array that is similar to the one we produced earlier. You'll need to create a reference to it by entering the following into the console:

pizzas = ["Margherita", "Mushroom", "Spinach & Rocket", "Ham & Pinapple", "Pineapple & Sweetcorn"]

To find the length of an array, we can use the length property. This is the equivalent to us counting how many boxes are in our pile of pizza boxes:

pizza.length;
5

We can use the length to find the last item in an array:

pizzas[pizzas.length - 1];
"Pineapple & Sweetcorn"

Notice that we have to subtract 1 from the length value. This is because the index starts at 0, so the last item in the array will have an index of 1 less than the array’s length.

The length property is mutable, meaning you can manually change it:

pizzas.length = 8;
8
pizzas;
["Margherita", "Mushroom", "Spinach & Rocket", "Ham & Pinapple", "Pineapple & Sweetcorn", undefined, undefined, undefined]

As you can see, if you make the array longer, the extra slots will be filled in with undefined:

pizzas.length = 3;
3
pizzas;
["Margherita", "Mushroom", "Spinach & Rocket"]

If you make the array shorter than it already is, all the extra elements will be removed completely.

Pop, Push, Shift, and Unshift

To remove the last item from an array, we can use the pop() method. This is justa s if we removed a pizza box from the top of the pile:

pizzas.pop();
"Spinach & Rocket"

The push() method appends a new value to the end of the array. This is like us putting a new pizza box on top of the pile. The method returns the new length of the array:

pizzas.push("Pepperoni");
3

The shift() method works in a similar way to the pop() method, but this removes the first item in the array. This is like us removing a pizza from the bottom of the stack of boxes.

The unshift() method is similar to the push() method, but appends a new item to the beginning of the array. This is the equivalent of us adding a new pizza box to the bottom of the pile.

pizzas.unshift("Chicken & Bacon");
3

Merging Arrays

The concat() method can be used to merge an array with one or more arrays:

pizzas.concat(["Spicy Beef", "Chicken and Mushroom"]);
["Chicken & Bacon", "Mushroom", "Pepperoni","Spicy Beef", "Chicken and Mushroom"]

Note that this does not change the pizzas array. it simply creates another array combining the two arrays. You can use assignment to change the pizzas array to this new array. This would be like us adding a whole new pile of boxes on top of the pile we already have:

pizzas = pizzas.concat(["Spicy Beef", "Chicken and Mushroom"]);
["Chicken & Bacon", "Mushroom", "Pepperoni","Spicy Beef", "Chicken and Mushroom"]

Now the pizzas array contains these two new strings.

The join() Method

The join() method can be used to turn the array into a string that comprises all the items in the array, separated by commas. This is as if we were asked to write down a list of all the pizzas in our pile of boxes:

pizzas.join();
Chicken & Bacon,Mushroom,Pepperoni,Spicy Beef,Chicken and Mushroom"

You can choose a seperator, other than a comma by placing it inside the parentheses. Let's try using an ampersand:

pizzas.join(" & ");
"Chicken & Bacon & Mushroom & Pepperoni & Spicy Beef & Chicken and Mushroom"

Slicing and Splicing

Be careful not to get confused with the pizza analogy here - we're slicing the array, not the actual pizzas! The slice() method creates a subarray, effectively chopiing out a slice of an original array starting at one index and finishing at the next. This would be the same as us taking a sleect of pizza boxes from the whole pile, from the second pizza up to but not including the fourth:

pizzas.slice(2,4); // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)
["Pepperoni", "Spicy Beef"]

Note that this operation is non-destructive - no items are actually removed from the array, as we can see if we look at the pizzas array:

pizzas;
["Chicken & Bacon", "Mushroom", "Pepperoni", "Spicy Beef", "Chicken and Mushroom"]

The splice() method removes items from an array and then inerts new items in their place. Say we wanted to remove the Pepperoni  pizza from the pile and replace it with some other boxes containing Chicken and Pepper, and Veggie Deluxe.

pizzas.splice(2, 1, "Chicken and Pepper", "Veggie Deluxe");
["Pepperoni"]

pizzas
["Chicken & Bacon", "Mushroom", "Chicken and Pepper", "Veggie Deluxe", "Spicy Beef", "Chicken and Mushroom"]

The first number tells us the index at which to start the splice. In the example we started at index 2, which is the third item in the array ("Pepperoni"). The second number tells us how many items to remove from the array. In the exmaple this was just the one item. Every value after this is then inserted into the array at the same place the other items were removed. The string "Chicken and Pepper", "Veggie Deluxe" are inserted in our example, starting at the third item. Notice that the splice() method returns the items removed from the array as a subarray, so in the example, it returned the array ["Pepperoni"].

The splice() method can also be used to insert values into an array at a specific index without removing any items, by indicating that zero items are to be removed:

pizzas.splice(4, 0, "Ham & Mushroom"); // inserts "Ham & Mushroom" as the fifth item in the pizzas array.
[]

Notice that an empty array is returned, but the new value of "Ham & Mushroom" has been inserted, which we can see if we look at the pizzas array:

pizzas;
["Chicken & Bacon", "Mushroom", "Chicken and Pepper", "Veggie Deluxe", "Ham & Mushroom", "Spicy Beef", "Chicken and Mushroom"]

We saw earlier that we can use the delete operator to remove an item from an array. Unfortunately, this leaves a value of undefined in its place. If you want to remove a value completely, you can use the splice() method with a length of 1 and without specifying any values to add:

pizzas.splice(2,1); // will remove the item at index 2 (i.e. the third item in the array)
["Chicken & Pepper"]

The value that has been removed will be returned as an array containing that value.

If we look at the pizzas array, we can see that the "Chicken & Pepper" has been removed completely:

pizzas;
["Chicken & Bacon", "Mushroom", "Veggie Deluxe", "Ham & Mushroom", "Spicy Beef", "Chicken and Mushroom"]

Reverse

We can reverse the order of an array using the reverse() method:

pizzas.reverse();
["Chicken and Mushroom", "Spicy Beef", "Ham & Mushroom", "Veggie Deluxe", "Mushroom", "Chicken & Bacon"]

Note this changes the order of the array permanently.

Sort

We can sort the order of an array using the sort() method:

pizzas.sort();
["Chicken & Bacon", "Chicken and Mushroom", "Ham & Mushroom", "Mushroom", "Spicy Beef", "Veggie Deluxe"]

It is alphabetical order by default for String objects. Note that this also changes the order of the array permanently.

Numbers Are Sorted Alphabetically - this is fixed using a special type function called a callback.

Finding if a Value is in an Array

We can find out if an array contains an object using the indexOf() method to find the first occurence of a value in an array. If the item is in the array, it will return the index of the first occurence of that item:

pizzas.indexOf("Spicy Beef");
4 // index of 4, 5th value

If the item is not in the array, it will return -1

pizzas.indexOf("Margherita");
-1 // not in array

Multidimensional Arrays

You can even have an array of arrays, known as a multidimensional array, for example:

multiDimensional = [[0,1],["one","two","three"],[],[true,false]];
[[0,1],["one","two","three"],[],[true,false]]

This could be used to create a coordinate system:

coordinates = [[1,3],[4,2]];
[[1,3],[4,2]]

To access the values in a multidimensional array, we use two indices: one to refer to the item's place in the outer array, and one to refer to its place in the inner array:

x1 = coordinates[0][0]; // The first value of the first array
1

x2 = coordinates[1][0]; // The first value of the second array
4

y1 = coordinates[0][1]; // The second value of the first array
3

y2 = coordinates[1][1]; // The second value of the second array
2

Logic

In this section we will begin to look at logical conditions that allow you to control the flow of a program.

If Statements

An if looks like the following:

if (condition) {
	code to run if condition is true;
}

The code inside the block will only run if the condition is true. If the condition is not a Boolean value, it will be converted to a Boolean, depending on whether or not it is truthy or falsy.

Here is an example that will only display the alert message if the value of age variable is less than 18:

var age = 23;
if (age<18) {
	alert("Sorry, you are not old enough to play this game");
}

Try changing the value of the age variable to a value below 18 as it does in this code, and the alert box will show.

var age = 12;
if (age < 18) {
  alert("Sorry, you are not old enough to play this game");
}

Else Statements

The else keyword can be used to add an extra block of code to run if the condition is false. An if ... else statement looks like this:

if (condition) {
	code to run if condition is true;
} else {
	code to run if condition isn't true;
}

As an example, we can test if a number is even or odd using the following code:

n = 12;
if (n%2 === 0) {
	console.log("n is an even number");
} else {
	console.log("n is an odd number");
}

This uses the % operator to check the remainder when diving the variable n by 2.  All even numbers leave no remainder when divided by 2, so we can test to see if n%2 is equal to zero; if it is, n must be even. If n is not even, then it must be odd.

Ternary Operator

A shorthand way of writing an if ... else statement is to use the ternary operator, ?, which takes three operands in the following format:

condition ? (code to run if condition is true) : (code to run if condition isn't true);

Here's the example for testing if the variable n is odd or even, rewritten using a ternary operator:

n = 5;
n%2 === 0 ? console.log("n is an even number") : console.log("n is an odd number");
n is an odd number

The ternary operator can make your code more succinct, but can also make it difficult to read, so be careful when you use it.

switch Statements

You can actually string lots of if and else statements together to make a logical decision tree:

if (number === 4) {
  alert("You rolled a four");
} else if (number === 5) {
  alert("You rolled a five");
} else if(number === 6){
  alert("You rolled a six");
} else {
  alert("You rolled a number less than four");
}

The switch operator can be used instead, like so:

switch(number) {
case 4:
	alert("You rolled a four");
	break;
case 5:
	alert("You rolled a five");
	break;
case 6:
	alert("You rolled a six");
	break;
default:
	alert("You rolled a number less than four");
	break;
}

The value that you are comparing goes in parentheses after the switch operator. A case keyword is then used for each possible value that can occur (4, 5, and 6 in the example above). After each case statement is the code that needs to be run if that case occurs.

It is important to finish each case block with the break keyword, as this stops any more of the case blocks being executed. Without a break statement, the program will "fall through" and continue to evaluate subsequent case blocks. This is sometimes implemented on purpose, but it is confusing and should be avoided - a ninja always finishes a case block with a break!

The default keyword is used at the end for any code that needs to be run if none of the cases are true.

Loops

Loops will repeat a piece of code over and over again according to certain conditions.

while Loops

We'll start by looking at a while loop. This will repeatedly run a block of code while a certain condition is true and takes the following structure:

while (condition) {
	do something
};

Here's an example that will count down from ten, alerting us with a line from the famous song:

var bottles = 10;
while (bottles > 0){
	alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be " + (bottles-1) + " green bottles hanging on the wall");
	bottles--;
};

We start by declaring a variable called bottles. Any variables that are used in the loop must be initialized before the loop is run, otherwise there wil be an error when they are mentioned.

The loop starts here with the while keyword and is followed by a condition and a block of code. The condition in the example is that the number of bottles has to be greater than zero. This basically means "keep repeating the block of code, as long as the number of bottles is greater than zero".

The block of code uses the alert function to display a message about the number of bottles, and then uses the decrement operator to decrease the bottles variable by one.

Here's a more concise way of writing the same loop that moves the increment into the condition:

var bottles = 11;
while (--bottles){
	alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be " + (bottles-1) + " green bottles hanging on the wall");
};

The reason that this code works is because the loop will continue while the bottles variable is true, and after each loop, the value of the bottles variable decreases by 1. When the bottles variable reaches 0, it is not true anymore (remember that 0 is a falsy value) so the loop will stop. Notice that you have to start with one more bottle (11) as it will be decreased by one even before the first block is run.

Infinite Loops

It is important that the condition in a while loop will be met at some point, otherwise you'll be stuck in an infinite loop that can crash your program.

Consider the following loop:

var n = 1;
while(n>0){
	alert("Hello");
	n++;
}

This loop will keep running, as the variable n will always be above zero. Most browsers will warn you that there is a slow running script when this happens and give you the option to stop it. If not, you can usually kill the process by closing the tab or restarting the browser.

do ... while Loops

A do ... while loop is similar to a while loop. The only difference is that the condition comes after the block of code:

do {
	do something
} while(condition)

This means that the block of code will always be run at least once, regardless of the condition being true or not.

Here's the example we saw before, rewritten as a do ... while loop:

var bottles = 10;
do {
	alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be" + (bottles-1) + " green bottles hanging on the wall");
	bottles--;
} while (bottles > 0)

for Loops

for loops are by far the most common in JavaScript and take the following form:

for (initialization ; condition ; after) { do something }

The initilization code is run before the loop starts and is usually employed to initialize any variables used in the loop. The condition has to be satisfied for the loop to continue. The after code is what to do after each iteration of the loop, and it is typically used to increment a counter of some sort.

Here's the green bottles example written as a for loop:

for (var bottles = 10 ; bottles > 0; bottles--) {
	alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be " + (bottles-1) + " green bottles hanging on the wall");
}

Each of the three parts are optional, and the code could be written as:

var bottles = 10; // bottles is initialized here instead
for ( ; bottles > 0; ) { // empty initialization and increment
	alert("There were " + bottles + " green bottles, hanging on the wall. And if one green bottle should accidently fall, there'd be " + (bottles-1) + " green bottles hanging on the wall");
	bottles--; // increment moved into code block
}

As you can see, it's possible to use a while loop, a do ... while loop, or a for loop to achieve the same results. A for loop is the most common as it keeps all the details of the loop (the initialization, condition, and increment) in one place and separate from the code block.

Nested for Loops

You can place a loop inside another loop to create a nested loop. It will have an inner loop that will run all the way through before the next step of the outer loop occurs.

Here's an example that produces a multiplication table up to 12 x 12:

for(var n=1 ; n<13 ; n++){
	for(var m=1; m<13 ; m++){
	console.log(m + " multiplied by " + n + " is " + n*m);
	}
}

The outer loop counts up from n=1 to n=12. For every iteration of the outer loop, the inner loop counts up from m=1 to m=12. This means that it starts in the first iteration with n=1 and m=1, producing the following output that is logged to the console:

1 multiplied by 1 is 1

In the next iteration, we are still inside the inner loop, so n remains at 1, but m is incremented to 2, giving:

1 multiplied by 2 is 2

m continues to increase until it reaches 12. After this, we leave the inner loop and return too the outer loop, when n increases to 2. We then re-enter the inner loop and m is reset back to 1 and begins counting up to 12 again. This continues until the last iteration produces the line:

12 multiplied by 12 is 144
