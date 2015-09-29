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

Looping over Arrays

A for loop can be used to iterate over each value in an array. If we take our pizzas array example from earlier, we can create a for loop that outputs each item in the array to the console using the following loop:

for(var i=0, max=pizzas.length; i < max; i++) {
	console.log(pizzas[i]);
}
"Chicken & Bacon"
"Chicken and Mushroom"
"Ham & Mushroom"
"Mushroom"
"Spicy Beef"
"Veggie Deluxe"

There are a few points to note in this example. Array indices start their numbering at zero, so make sure that the value in the for loop also starts at zero. We want the loop to continue until it reaches the length of the array; this can be set as the variable max in the initialization part of the for loop, then the condition becomes i < max. This is preferable to using i < pizzas.length because then the length of the pizzas array would have to be calculated after every pass through the loop. THis might not sound all that important, but it can make a big difference to the speed of the program when using large arrays.

Functions

In JavaScript, functions are considered to be just another value. This means that they do all the same tasks that other values and objects can do, such as be assigned to variables, changed and stored in arrays. You can even define a function inside another function. In technical terms, this means that functions are considered to be first-class objects in JavaScript.

This makes functions a very important and powerful part of the JavaScript language with many of its features relying on them. Hence, fully understanding functions is an essential skill of the JavaScript ninja.

Defining a Function

To define a function literal we can use a function declaration:

function hello(){
	alert("Hello World!");
}

This starts with the function keyword and is followed by the name of the function, which in this case is called 'hello', followed by parentheses. After this is a block that contains the code for the function.

This is known as a named function as the function has a name: 'hello'.

Function Expressions

Another way of defining a function literal is to create a function expression. This assigns an anonymous function to a variable:

var goodbye = function() {
	alert("Goodbye World!");
};

The function in this example is known as an anonymous function because it does not have a name; it is simply created, then assigned to the variable goodbye. Alternatively we can create a named function expression instead:

var goodbye = function bye(){
	alert("Goodbye World!");
};

The name of this function is bye, and it has been assigned the variable goodbye.

Notice also that the example ends with a semicolon. This finishes the assign statement, whereas a normal function declaration ends in a block (no need for semicolons at the end of blocks).

A function's name property

Functions are just objects, and objects have two properties. All functions have a read-only property called name, which can be accessed like so:

hello.name
"hello"

The name property is not actually part of the ECMAScript standard, although most JavaScript engines support it and use it internally.

Anonymous functions have an empty string as their name property in most browsers, although some versions of IE use undefined.

The name property can be useful whe debugging code, as the name of a function will be used to indicate which functions are causing a problem.

Function() Constructors

A function can also be declared using the function constructor Function(). The body of the function is entered as a string, as shown in this example:

hi = new Function('alert("Hi World!");');

We'd avoid recommending this way of declaring functions as it is slower and there are problems with placing the function's code inside a string. Even in this simple example, we had to use different quotation marks for the alert function as those used for defining the function body itself.

A ninja should always declare functions using function literals - function declarations or function expressions. These two ways of creating functions are similar, although there are some subtle differences that will be covered later in the chapter. Some people prefer function declarations as they are akin to how functions are declared in other languages. Others prefer function expressions because it is clear that functions are just another value assigned to a variable, rather than a special feature of the language. Whether you use function declarations or function expressions is often a matter of personal taste, but whatever you choose to do - be consistent!

Invoking a Function

Invoking a function is to run the code inside the function's body. To invoke a function, simply enter its name, followed by parentheses. This is how we'd invoke the hello function, for example:

hello();
"Hello World!"

The function can be invoked over and over again just by typing its name followed by parentheses. This is one of the advantages of using functions - there's no need to write repetitive blocks of code. Another advantage is that all the functionality is kept in one place. So if you want to change part of it, you only need to update the code in one place. This is known as the DRY principle, which stands for Don't Repeat Yourself, and it's important to keep in mind when programming.

If you have assigned a function to a variable, you need to place parentheses after the variable to invoke it as a function:

goodbye();
"Goodbye World!"

Remember: you need parentheses to invoke a function - either by name or by reference to the variable it is assigned to. If you skip the parentheses, you are simply referencing the function itself rather than invoking it, as you can see here:

goodbye;
function bye();
alert("Goodbye World!");
}

All that has returned is the function definition that the variable goodbye is pointing to, rather than running the code. This can be useful if you want to assign the function to another variable, like so:

seeya = goodbye;
function bye();
alert("Goodbye World!");
}

Now the variable seeya also points to the function called bye and can be used to invoke it:

seeya();
"Goodbye World!"

Return Values

All functions return a value, which can be specified using the return operator. A function that doesn't explicitly return anything (such as all the examples we have seen so far) will return undefined by default.

The function in this example will return the string "Yo World!":

function yo(){
return "Yo World!";
}

This means that we can assign a variable to a function invocation and the value of that variable will be set to the return value of that function:

message = hi();
"Yo World!"

The variable message now points to the string "Yo World!". This may seem trivial in this instance (that is, why not just assign the variable to the string directly?), but we can create a more complex function that has different return values depending on certain conditions. This will assign different values to the message variable depending on those conditions.

Parameters and Arguments

Parameters and arguments are often used interchangeably to represent values that are provided for the function to use. There is a subtle difference though: any parameters a function needs are set when the function is defined. When a function is invoked, it is provided with arguments.

JavaScript does not have a built-in function to square numbers, so we can create one to demonstrate using parameters. In the example that follows, the square function takes one parameter, x, which is the number to be squared. In the body of the function, the name of the parameter acts like a variable equal to the value that is entered when the function is invoked. As you can see, it is mulitplied by itself and the result is returned by the function:

function square(x) {
return x*x;
}

When we invoke this function, we need to provide and argument, which is the number to be squared:

square(4.5);
20.25

You can use as many parameters as you like when defining functions. For example, the following function finds the mean of any three numbers:

function mean(a,b,c){
return (a+b+c)/3;
}

mean(2, 6, 19);
9

If a parameter is not provided as an argument when the function is invoked, the function will still be invoked, but the parameter will be given a value of undefined. If we try to invoke the mean function with only two arguments, we can see that it returns NaN because the function cannot do the required operation with undefined:

mean(1,2)
NaN

If too many arguments are provided when a function is invoked, the function will work as normal and the extra arguments will be ignored (although they can be accessed using the arguments object that is discussed in the next section):

mean(1,2,3,4,5); // will only find the mean of 1, 2 and 3
2

The arguments Variable

Evvery function has a special variable called arguments. This is an array-like object that contains every argument of the function when it is invoked:

function arguments(){
	return arguments;
}

Default Arguments

We can use the fact that undefined is used when arguments are not supplied to provide default values for a function. For example, we can improve the hello function that we created earlier by adding a name parameter so that it says "hello" to the value provided as an argument:

function hello(name){
	console.log("Hello " + name + "!");
}

This works as expected, but says "hello" to undefined if no argument is provided:

hello("DAZ");
"Hello DAZ!"

hello();
"Hello undefined!"

We can improve the function by checking if the name parameter has a value of undefined and providing a default value of "World" if so:

function hello(name){
	if (name === undefined) name = "World!";
	console.log("Hello " + name + "!");
}
Now we can invoke the hello function with or without arguments:

hello();
"Hello World!"

hello("DAZ");
"Hello DAZ!"

Another way of assigning default values is to use the following line:

name = name || "World";

This is using the logical OR operator to check if the name parameter has a truthy value. If it does, then name will stay the same. If name is falsy (such as undefined), it will take the value of "World". Be careful using this method, however; if the name argument is a falsy value it will be set to the default value of "World", and in some cases you might want it to be the falsy value instead (0, for example).

Default parameters should always come after non-default parameters, otherwise default values will always have to be entered anyway. Consider the following function for calculating a discounted price in a store:

function discount(price, amount) {
	if(amount === undefined) amount = 10;
	return price*(100-amount)/100;
}

It takes two arguments, the price of an item and the percentage discount. The store's most common discount is 10%, so this is provided as a default value. This means that the amount argument can be omitted in most cases and a 10% discount will still be applied:

discount(20) // standard discount of 10%
18

If a different discount is applied, the amount argument can be provided:

discount(15, 20) // discount of 20%
12

This will fail to work, however, if the parameters are reversed:

function discount(amount, price) {
	if (amount === undefined) amount = 10;
	return price*(100-amount)/100;
}

Now if we try to use the function with just one argument, the function won't work, because price has not been set:

discount(20);
NaN

It will work, though, if both values are entered:

discount(10,20);
18

This somewhat defeats the purpose of the object having default parameters! The golden rule to remember here is that a ninja always puts default parameters after all the other parameters.

Scope

Scope is an important concept in programming, It refers to where a variable is visible and accessible.

In JavaScript, a function creates its own local scope. This means that any local variables defined inside a function using the var keyword are not accessible outside the function.

Global Scope

Any variable declared outside of any function is said to have global scope. This means that is it accessible everywhere in the program. When this may seem to be a good idea at first, it is not considered good practice. A ninja will try to limit the number of global variables to a minimum, because any variable that shares the same name will clash and potentially overwrite each other's value. It might seem unlikely that this would happen, but it is all too common in large programs when you forget which variables you have used - think how often we use the variable i in for loops already! It can also be a problem when you are writing code in teams or if you're using code libraries that may use the same variable names as some of your code.

Local Scope

Any variable that is declared inside a function using the var statement will only be available inside that function. This is known as having local scope, as the variable is only visible in the locality of the function (in other words, inside the function block).

If the var statement is not used, the variable will have global scope and be available outside the function. This can be demonstrated in the following example, where the variable a can have two different values depending on whether it is defined inside or outside a function:

var a = 1;

function locala() {
	var a = 3; // local variable
	console.log("a inside function: " + a);
}

locala(); // invoke the locala function
console.log("a outside function " + a);

The results in the subsequent console log:

"a inside function: 3"
"a outside function: 1"

In the example, a is defined globally outside the function and is given the value of 1. This means it has global scope and is available inside and outside the function. But then a is defined inside the local function using var. This gives it local scope inside the function where it has a value of 3, but it retains the value of 1 outside the function. For all intents and purposes, the two a variables are different variables.

Here's another example where we define a global variable and then overwrite it from within the function:

b = 2;

function localb() {
	b = 4; // overwrites the global variable
	console.log ("b inside function: " + b);
}

localb(); // invoke the localb function
console.log("b outside function: " + b);

Here's the resultant console log:


"b inside function: 4"
"b outside function: 4"

In this example, b is defined globally outside the function and given the value of 2. Yet b is not declared using var inside the function, so it still refers to the global variable outside the function. This means that b is the same variable both inside and outside the function and the value of b is overwritten globally to be 4.

Here's another example that creates a global variable from within a function that is then still accessible from outside of the function:

function localc() {
	c = 5; // creates a new global variable
	console.log("c inside function: " + c);
}

localc(); // invoke the localc function
console.log("c outside function: " + c);

The results in the following console log:

"c inside function: 5"
"c outside function: 5"

In the example, c is only defined inside the function, but because this is done without using var, it has global scope and is also available outside the function.

Here's another function that creates a local variable inside the function that is not accessible outside the function:

function locald() {
	var d = 6; // creates a new local variable
	console.log("d inside function: " + d);
}

locald(); // invoke the locald function
console.log("d outisde function " + d);

Here's the console log result:

"d inside function: 6"
"d is not defined"

In this example, d is also only defined inside the function, but by using var it has local scope and is only accessible inside the function. When we try to log the value of d outside the function, it causes an error because d is not defined outside its scope.

Hoisting

Hositing is the process of moving a value to the top of the code block where it is used, regardless of where it is defined.

Variable Hoisting

All variable declarations are automatically moved to the top of a function's scope, as if they were defined at the start of the function. Variable assignment is not hoisted, however. This means that a variable assigned at the end of the function will have a value of undefined until the assignment is made. The following example shows how this works:

function hoist(){
	console.log(a); // at this point a is undefined
	//
	// imagine lots more code here
	//
	var a = "Hoist Me!";
	conole.log(a); // now is a string
}

At the beginning of the function, the variable a has not been declared or assigned a value, so in theory, trying to write console.log(a) should result in an error. Yet the declaration of a is hoisted to the top of the function, so the function knows that a variable called a exists. The value that it is assigned to is not hoisted, however, so until the assignment is made, the value of a is undefined.

Hoisting can cause some confusion, so a ninja should declare, and assign if required, all local variables at the beginning of a function so that hoisting is unnecessary.

Function Hoisting

Functions that are defined inside other functions are also hoisted, but they behave differently depending on how they are defined.

If a function is defined using function declaration, the whole function is hoisted to the top of the function, meaning that it can be invoked before it has been defined.

A function expression (where an anonymous function is assigned to a variable) is hoisted in a similar way to variables. So the declaration will be hoisted, but not the actual function. This means that the function cannot be invoked until after it appears in the code.

This behaviour also applies to the global scope, as can be seen in the following example:

add(2,3) // this will work because the add function is hoisted

function add(x,y){
	console.log(x + y);
}

subtract(5,2); // this won't work because the subtract function hasn't been defined yet

subtract = function(x,y){
	console.log(x - y);
}

This is the major difference between the two ways of defining function literals and it may influence your decision regarding which one to use. Some people like that using function expressions means you're required to define all functions and assign them to variables prior to using them. To avoid any problems, a ninja should either use function declarations or ensure that all function expressions are defined at the top of the scope, along with any variable declarations.

Callbacks

Remember at the start of this chapter when we said that functions in JavaScript are first-class objects, and this means that they behave in just the same way as every other value? Well, they can also be given as a parameter to another function. A function that is passed as an argument to another is known as a callback.

Here's a basic example of a function called pizza, which accepts an argument for the type of topping that goes on the pizza, as well as a callback function saying what to do with the pizza:

function pizza(topping, callback){
	console.log("This is a " + topping + " pizza");
	callback();
}

Now we can create some utility functions for what we do with pizzas, such as cook them and eat them:

function cook(){
	console.log("The pizza is cooking");
}

function eat(){
	console.log("I've eaten the pizza!");
}

We're just logging some simples messages to the console in these examples, but these functions could be used to do anything in a practical sense.

Let's have a go at using these utility functions as callbacks in our pizza function:

pizza("Ham & Pineapple", cook);
"This is a Ham & Pineapple pizza"
"The pizza is cooking"

pizza("Ham & Pineapple", eat);
"This is a Ham & Pineapple pizza"
"I've eaten the pizza!"

Okay, so in these examples, the cook() and eat() functions were quite similar, but they should demonstrate that you could do something very different in the pizza function depending on the callback function that is provided as an argument. This can make your functions much more flexible.

Note that the callbacks cook and eat are passed as arguments without parentheses. This is because the argument is only a reference to the function. The actual callback is invoked in the body of the function, where parentheses are used.

A function can also take an anonymous function as a callback. For example, say we want to deliver a pizza, but we have no deliver function. We can write an anonymous function that does what we want:

pizza("Ham & Pineapple, function()"){
	console.log("The pizza has been delivered.");
});

This is only really useful for one-off tasks. It is often a much better idea to keep functions seperate and named so that they can be reused again. It's also a bad idea to use this method for long function definitions as it can be confusing where the callback starts and ends.

Callbacks are used extensively in many JavaScript functions and we'll see much more of them throughout the book.

Sorting Arrays

In the last chapter we saw that arrays have a sort() method that sorted the items in the array into alphabetical order. This is fine for strings, but it doesn't work so well for numbers:

[1,3,12,5,23,18,7].sort();
[1,12,18,23,3,5,7]

The reason for this is that the numbers are converted into strings and then placed in aplhabetical order.

So how do you sort an array of numerical values? The answer is to provide a callback function to the sort() method that tells the sort() method how to compare two values, a and b. The callback function should return the following:

a negative value if a comes before b
0 if a and b are in the same position
a positive value if a comes after b

Here is an example of a compareNumbers function that can be used as a callback to sort numbers:

function compareNumbers(a,b){
	return a-b;
}

This simply subtracts the two numbers that are being compared, giving a result that is either negative (if b is bigger than a), zero (if a and b are the same value), or positive (if a is bigger than b). This means that it can be used as a callback to sort the array of numbers correctly:

[1,3,12,5,23,18,7].sort(compareNumbers);
[1, 3, 5, 7, 12, 18, 23]

Much better!

Improving the mean() Function

Earlier in the chapter we created a mean() function that would calculate the mean of any number of arguments. We can improve on this, allowing a callback to be added as the last argument that specifies a function to be applied to all the numbers before the mean is calculated. This will allow us to work out things such as the mean of all numbers if they were doubled or squared.

Here is the code for the improved function that accepts a callback:

function mean(values, callback) {
	var total = 0;
	for(var i=0, max = values.length; i < max; i++) {
		if (typeof callback === "function") {
			total += callback(values[i]);
		} else {
			total += values[i];
		}
	}
	return total/max;
}

The next part of the code is similar to our previous mean() function, except in the following if block where we check to see if the callback argument is a function. If it is, the callback is applied to each value before being added to the total; otherwise, the total is calculated using just the values from the array given as the first argument:

if (typeof callback === "function") {
      total += callback(values[i]);
    } else {
      total += values[i];
    }

Let's have a go at using it:

mean(2,5,7,11,4); // this should just calculate the mean
5.8

Now let's use an anonymouse function to double all the numbers before calculating the mean:

mean([2,5,7,11,4],function(x){ return 2*x;});

This is the equivalent of calculating the mean of 2*2, 2*5, 2*7, 2*11 and 2*4.

Last of all, let's use the square function that we wrote earlier in this chapter as a callback to square all the numbers before calculating the mean:

mean([2,5,7,11,4],square);
43

This is the equivalent of calculating the mean of 2^2, 5^2, 7^2, 11^2, and 4^2.

I trust these examples show how using callbacks can make functions much more powerful and flexible.

Array Iterators

ECMAScript 5 introduced a number of methods for arrays that utilize callbacks to make them much more flexiable.

forEach()

In the last chapter, we saw that a for loop could be used to loop through each value in an array like so:

var colors = ["Red", "Green", "Blue"]

for( var i = 0, max = colors.length ; i < max ; i++ ) {
	console.log("Color at position " + i + " is " + colors[i]);
}
"Color at position 0 is Red"
"Color at position 1 is Green"
"Color at position 2 is Blue"

map()

The map() method is very similar to the forEach() method. It also iterates over an array and takes a callback function as a parameter that is invoked on each item in the array. This is often used to process data returned from databases in array form, such as adding HTML tags to plain text. The difference is that it returns a new array that replaces each value with the return value of the callback function. For example, we can square every number in an array using the square function we wrote previously as a callback to the map() method:

[1,2,3].map( square )
[1, 4, 9]

An anonymous function can also be used as a callback. This example will write all items in the array in uppercase and place them inside paragraph tags:

["red", "green", "blue"].map( function(color) {
	return "<p>" + color.toUppercase() + "</p>"; } );
["<p>RED</p>", "<p>GREEN</p>", "<p>BLUE</p>"]

Notice in this example the anonymous function takes a parameter, color, which refers to the item in the array. This callback can also take two more parameters - the second parameter refers to the index number in the array and the third refers to the array itself. All three parameters can be seen in the next example:

["red", "green", "blue"].map( function(color, index, array) {
	return index + ": " + color + " (length " + array.length + ")"; } );

["0: red (length 3)", "1: green (length 3), "2: blue(length 3)"]

reduce()

The reduce() method is another method that iterates over each value in the array, but this time it cumulatively combines each result to return just a single value. The callback function is used to describe how to combine each value of the array with the running total. This is often used to calculate statistics such as averages based on data returned from a database in array form. It usually takes two parameters: The first parameter represents the previous value and the second parameter represents the current item in the array. The following example shows how to sum an array of numbers:

[1,2,3,4,5].reduce( function(prev,current) {
	return prev + current;
});
15

The value of prev starts as the first item in the array. The value of prev then becomes the result of this operation. Then the next item in the array is added to this running total, and so on, until every item in the array has been added.

The reduce method also takes a second parameter after the callback, which is the initial value of prev. For example, we could total the numbers in an array, but start at 10, instead of zero:

[1,2,3,4,5].reduce( function(prev,current){
	return prev + current;
},10); // second parameter of 10 here
25

Another example could be to calculate the average word length in a sentence:

sentence = "The quick brown fox jumped over the lazy dog"
"The quick brown fox jumped over the lazy dog"

The sentence can be converted into an array using the split() method:

words = sentence.split(" ");
["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

Now we can use the reduce() function to calculate the total number of letters in the sentence:

total = words.reduce( function(prev,word){
	return prev + word.length;
},0);

average = total/words.length;
4

Using map() and reduce() Together

The map() and reduce() methods are often used in combination to create some powerful transformations of data stored in arrays. Because the map() function returns the transformed array, the reduce() can be chained on the end. For example, we can calculate the sim of square numbers using the map() method to square each number in the array and then use the reduce() method to add the results together:

[1,2,3].map(square).reduce(function (total,x) {
	return x + total;});
14

Another more complex example could be used to take an array of orders, apply a sales tax to them using map() and then use reduce() to find the total:

var sales = [100, 230, 55];
totalAfterTaxSales = sales.map( function(amount) {
	return amount * 1.15; // add 15% sales tax
}).reduce( function(prev, current) {
	return prev + current;
});
442.75

filter()

The filter() method returns a new array that only contains items from the original array that pass return true when passed to the callback. For example, we can filter an array of numbers to just the even numbers using the following code:

var numbers = [2, 7, 6, 5, 11, 23, 12]

numbers.filter( function(number) {
	return number%2 === 0; // this returns true if the number is even
});
[2, 6, 12]

There are other array methods that use callbacks that are worth investigating such as reduceRight(), every(), and some(). More information about them can be found at the Mozilla Developer Network.

Refactoring Code

Now that we have a good understanding of functions, we’re going to have a go at refactoring the code for our Quiz Ninja project so that it uses functions to describe the main parts of the program. Refactoring is the process of improving the code’s structure and maintainability without changing its behavior.

Objects

Everything in JavaScript is either one of the five primitive values we met in Chapter 2 (strings, numbers, Booleans, undefined, and null) or an object. We've actually met some objects already; arrays in Chapter 3 and functions in Chapter 4 are both objects, although these are built-in objects that are part of the language. In this chapter we're going to look at user-defined objects as well as some other built-in objects.

We will cover:

Object literals
Adding properties to objects
object methods
JSON
the Math object
the Date object
the RegExp object
our project

Object Literals

An object in JavaScript is a self-contained set of related values and functions. They act as a collection of named properties that map to any JavaScript value such as strings, numbers, Booleans, arrays and even functions. If a property's value is a function, it is known as a method.

One way to think about an object is that it is like a dictionary where you look up a property name and see a value. Another way of thinking is that it is like a database of values; some databases actually use JavaScript objects to store information. This is similar to a hash or associative array in other programming languages; however, JavaScript objects are much more flexible as they can be employed to encapsulate code that can be reused throughout a program. They can also inherit properties from other objects.

An object literal is an object that is created directly in the language by wrapping all its properties and methods in curly braces {}. Object literals are a distinguishing feature of the JavaScript language, as they allow objects to be created quickly without the need for a class template.

A Super Example

Here is an example of an object literal that describes the Man of Steel:

var superman = {
	name: "Superman",
	"real name": "Clark Kent",
	height: 75,
	weight: 235,
	hero: true,
	villian: false,
	allies: ["Batman","Supergirl","Superboy"],
	fly: function(){
	return "Up, up and away!";
	}
}

Each property is a key-value pair, separates by commas. In the example, the first property is called name and its calue is "Superman", while the property fly is a method.

If a property's name doesn't follow the rules for naming variables described in Chapter 2, it needs to be quoted. For example, the property "real name" needs to be quoted because it contains a space.

All objects are mutable at any time when a program is running. This means that its properties and methods can be changed or removed and new properties and methods can be added to the object.

Creating Objects

To create an object literal, simply enter a pair of curly braces. The following example creates an empty object that is assigned to the variable spiderman:

var spiderman = {};

It's also possible to create an object using a constructor function. This example willo create an empty object:

var spiderman = new Object();

This method is not recommended, however, and the object literal notation is the preferred way of creating objects. The obvious reason is because it requires less typing; a constructor takes more steps in the background, which can cause programs to run slower.

Accessing Properties

You can access the properties of an object using the dot notation that we've already seen in previous chapters:

superman.name
"Superman"

You can also access an object's properties using bracket notation - the property is represented by a string inside square brackets, so needs to be placed inside single or double quotation marks:

superman['name']
"Superman"

Dot notation is much more common, but bracket notation has a few advantages: it is the only was to access nonstandard property and method names that don't follow the variable naming rules. It also lets you evaluate an expression and use it as the object key:

superman["real" + " " + "name"] // the property is built using string concatenation
"Clarke Kent"

If you try to access a property that doesn't exist, undefined will be returned:

superman.city
undefined

Calling Methods

To call an object's method we can also use dot or bracket notation. Calling a method is the same as invoking a function, so parentheses need to be placed after the method name:

superman.fly()
"Up, up and away!"

superman['fly']()
"Up, up and away!"

Checking if Properties or Methods Exist

The in operator can be used to check whether an object has a particular property. So, for example, we can check if the superman object has a property called city using this code:

"city" in superman
false

Alternatively, you could also check to see if the property or method doesn’t return undefined:

superman.city !== undefined
false

As mentioned earlier, objects can inherit properties from other objects, so all objects have a method called hasOwnProperty(). This can be used to check whether an object has a property that is its own, rather than one that has been inherited from another object:

superman.hasOwnProperty('city');
false

superman.hasOwnProperty('name');
true

Finding all the Properties of an Object

for(var key in superman) {
  console.log(key + ": " + superman[key]);
}
"name: Superman"
"real name: Clark Kent"
"height: 75"
"weight: 235"
"hero: true"
"villain: false"
"allies: Batman,Supergirl,Superboy"
"fly: function (){
    console.log(\"Up, up and away!\");
}"

In this example, we create a variable called key. This is then used to represent the name of each property or method in the superman object inside the for loop.

To make sure that only an object’s own properties are returned, a quick check can be implemented beforehand:

for(var key in superman) {
	if(superman.hasOwnProperty(key)){
		console.log(key + ": " + superman[key]);
	}
}

Adding Properties

New properties and methods can be added to objects at any time in a program. This is done by assigning a value to the new property. For example, if we wanted to add a new city property to our superman object, we would do it like so:

superman.city = "Metropolis"
"Metropolis"

Now if we take a look at the superman object, we can see that it has a city property:

superman
{"city": "Metropolis", "fly": function (){
console.log("Up, up and away!");}, "height": 75, "name": "Superman",
"real name": "Clark Kent", "weight": 235}

Notice that the properties don’t necessarily appear in the order that they were entered. An object is not an ordered list like an array, so you should never rely on the properties being in a certain order.

Changing Properties

You can change the value of an object’s properties at any time using assignment. For example, we can change the value of the "real name" property like this:

superman['real name'] = "Kal-El"
"Kal-El"

We can check the update has taken place by taking a look at the object:

superman
{"allies": ["Batman", "Supergirl", "Superboy"], "city":
"Metropolis", "fly": function (){
    console.log("Up, up and away!");
  }, "height": 75, "hero": true, "name": "Superman", "real name":
"Kal-El", "villain": false, "weight": 235}

Removing Properties

Any property can be removed from an object using the delete operator. For example, if we wanted to remove the fly method from the superman object, we would enter the following:

delete superman.fly
true

Now if we take a look at the superman object, we can see that he has lost his ability to fly:

superman
{"allies": ["Batman", "Supergirl", "Superboy"], "city":
"Metropolis", "height": 75, "hero": true, "name": "Superman", "real name":
"Kal-El", "villain": false, "weight": 235}

Nested Objects

It’s even possible for an object to contain other objects. These are known as nested objects. Here’s an example of an object that contains a list of other objects. It has been assigned to the variable jla:

jla = {
  superman: { realName: "Clarke Kent" },
  batman: { realName: "Bruce Wayne" },
  wonderWoman: { realName: "Diana Prince" },
  flash: { realName: "Barry Allen" },
  greenLantern: { realName: "Hal Jordan" },
  martianManhunter: { realName: "John Jones" }
}

The values in nested objects can be accessed by referencing each property name in order using either dot or bracket notation:

jla.wonderWoman.realName
"Diana Prince"

jla['flash']['realName']
"Barry Allen"

You can even mix the different notations:

jla.martianManhunter['realName']
"John Jones"

Objects as Parameters to Functions

An object literal can be passed as a parameter to a function. This allows the arguments to be given in any order and for default values to be used.

The following example shows how this can be done:

function greet (options) {
  options = options || {};
  greeting = options.greeting || "Hello";
  name = options.name || "Anon";
  age = options.age || 18
  return greeting + "! My name is " + name + " and I am " + age + " years old.";
}

It takes an object called options as an argument. If no object is provided, we create an empty object instead in this line:

options = options || {};
This is a common JavaScript pattern used to create default values. It relies on the logical OR statement being lazily evaluated. If options already exists, only the first statement will be evaluated, so options will remain as its current value. If no arguments are supplied to the function, the value of options will be undefined, which is falsy. Then the second operand will be evaluated and options will be assigned to an empty object literal.

The same method is then used to set default values for the greeting, name, and age properties of the options object. At the end of the method, a string is returned that uses the values that were supplied, or the default values.

Here is an example of how the function can be used:

greet({ greeting: "Hi", age: 10, name: "Bart" });
"Hi! My name is Bart and I am 10 years old."

You can enter the parameters in any order and if you don’t enter one of the values, its default value will be used:

greet({ name: "Lisa", age: 8 });
"Hello! My name is Lisa and I am 8 years old."

This is a popular pattern used with functions, particularly when there are a lot of options, and it is common to many JavaScript libraries.

JSON

JavaScript Object Notation, or JSON, was invented by Douglas Crockford in 2001. It is a popular lightweight data-storage format that is used for data serialization and configuration. It is often used to exchange information between web services and is employed by sites such as Twitter, Facebook, and Trello to share information. It manages to hit the sweet spot between being both human and machine-readable.

JSON is a string representation of the object literal notation that we have just seen. There are a few differences, though, such as property names being quoted and not using functions to create methods.

Here is an example of a JSON object representing the Caped Crusader:

var batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74,"weight": 210,"hero": true,"villain": false,"allies": ["Robin","Batgirl","Superman"]}'

JSON is becoming increasingly popular as a data storage format and many programming languages now have libraries dedicated to parsing and generating it. Since ECMAScript 5, there has been a global JSON object that can be used to do the same in JavaScript.

The parse method takes a JSON string and returns a JavaScript object:

JSON.parse(batman);
{"allies": ["Robin", "Batgirl", "Superman"], "height": 74, "hero": true, "name": "Batman", "real name": "Bruce Wayne", "villain": false, "weight": 210}

The stringify method does the opposite, taking a JavaScript object and returning a string of JSON data, as can be seen in the example:

var wonderWoman = {
  name: "Wonder Woman",
  "real name": "Diana Prince",
  height: 72,
  weight: 165,
  hero: true,
  villain: false,
  allies: ["Wonder Girl","Donna Troy","Superman"],
  lasso: function(){
     console.log("You will tell the truth!");
  }
}

JSON.stringify(wonderWoman);
"{\"name\":\"Wonder Woman\",\"real name\":\"Diana Prince\",\"height\":72,\"weight\":165,\"hero\":true,\"villain\":false,\"allies\":[\"Wonder Girl\",\"Donna Troy\",\"Superman\"]}"

Note that the quote marks are escaped and any methods an object has (such as the aforementioned lasso method) will simply be ignored by the stringify method.

These methods are useful when passing data to and from a web server using Ajax requests or when using localStorage to store data on a user’s machine. JSON data is easy to exchange between different services as most languages and protocols are able to interpret data as strings of text.

The Math Object

The Math object has several properties that represent mathematical constants and methods. These are used to carry out a number of useful operations.

All the properties and methods of the Math object are immutable and unable to be changed.

Mathematical Constants

The Math object has eight properties that represent a mix of commonly used math constants. Note that they are all named in capital letters, which is a convention for constant values:

Math.PI // The ratio of the cirumference and diameter of a circle
3.141592653589793

Math.SQRT2 // The square root of 2
1.4142135623730951

Math.SQRT1_2 // The reciprocal of the square root of 2
0.7071067811865476

Math.E // Euler's constant
2.718281828459045

Math.LN2 // The natural logarithm of 2
0.6931471805599453

Math.LN10 // The natural logarithm of 10
2.302585092994046

Math.LOG2E // Log base 2 of Euler's constant
1.4426950408889634

Math.LOG10E // Log base 10 of Euler's constant
0.4342944819032518

Mathematical Operations

The Math object also has several methods to carry out a variety of useful mathematical operations.

The Math.abs() method returns the absolute value of a number. So if the number is positive, it will remain the same and if it is negative, it will become positive:

Math.abs(3);
3

Math.abs(-4.6);
4.6

The Math.ceil() method will round a number up to the next integer, or remain the same if it is already an integer:

Math.ceil(4.2);
5

Math.ceil(8);
8

Math.ceil(-4.2);
-4

The Math.floor() method will round a number down to the next integer, or remain the same if it is already an integer:

Math.floor(4.2);
4

Math.floor(8);
8

Math.floor(-4.2);
5

The Math.round() method will round a number to the nearest integer:

Math.round(4.5);
5

Math.round(4.499);
4

Math.round(-4.2);
-4

The Math.exp() method will raise a number to the power of Euler’s constant:

Math.exp(1); // This is Euler's constant
2.718281828459045

Math.exp(0); // Any number to the power of 0 is 1
1

Math.exp(-3);
0.04978706836786393

The Math.pow() method will raise any number (the first argument) to the power of another number (the second argument):

Math.pow(3,2); // 3 squared
9

Math.pow(4.5,0); // Any number to the power of 0 is 1
1

Math.pow(27,1/3); // A nice way to do cube roots

The Math.sqrt() method returns the positive square root of a number:

Math.sqrt(121);
11

Math.sqrt(2); // same as Math.SQRT2
1.4142135623730951

Math.sqrt(-1); // No built in imaginary numbers!
NaN

The Math.log() method returns the natural logarithm of a number:

Math.log(Math.E); // Natural logs have a base of Euler's constant
1

Math.log(1); // log of 1 is zero
0

Math.log(0); // You can't take the log of zero
-Infinity

Math.log(-2); // You can't take logs of negative numbers
NaN

The Math.max() method returns the maximum number from its arguments:

Math.max(1,2,3);
3

Math.max(Math.PI,Math.SQRT2, Math.E);
3.141592653589793

And the Math.min() method unsurprisingly returns the minimum number from the given arguments:

Math.min(1,2,3);
1

Math.min(Math.PI,Math.SQRT2, Math.E);
1.4142135623730951

Trigonometric Functions

The Math object also has the standard trigonometric functions, which are very useful when working with geometrical objects. All angles are measured in radians for these functions.

Remind Me About Radians

Radians are a standard unit of angular measurement, equal to the angle of the circle’s center corresponding to the arc that subtends it.

The Math.sin() returns the sine of an angle:

Math.sin(Math.PI/6); // this calculation contains rounding errors, it should be 0.5
0.49999999999999994

The Math.cos() returns the cosine of an angle:

Math.cos(Math.PI/6);
0.8660254037844387

The Math.tan() returns the tangent of an angle:

Math.tan(Math.PI/4); // another rounding error, this should be 1
0.9999999999999999

Math.tan(Math.PI/2); // this should be NaN or Infinity
16331778728383844

The Math.asin() returns the arcsine of a number. The result is an angle:

Math.asin(1);
1.5707963267948966

The Math.acos() returns the arccosine of a number. The result is an angle:

Math.acos(0.5);
1.0471975511965976

The Math.atan() returns the arctangent of a number. The result is an angle:

Math.atan(Math.sqrt(3)); // Same as Math.PI/3
1.0471975511965976

Random Numbers

The Math.random() method is used to create random numbers, which can be very useful when writing programs. Calling the method will generate a number between 0 and 1, like so:

Math.random();
0.7881970851344265

To generate a random number between 0 and another number, we can multiply the value by that number. The following code generates a random number between 0 and 6:

6 * Math.random();
4.580981240354013

If we want to generate a random integer, we can use the Math.floor() method that we saw earlier to remove the decimal part of the return value. The following code generates a random integer between 0 and 5 (it will never be 6, because it always rounds down):

Math.floor(6 * Math.random());
4

It’s a useful exercise to try and write a function that will generate a random number between two values.

Experimental Methods

There are some experimental functions being considered for inclusion in the next version of the ECMAScript specification and are already implemented in some browsers. You can find a full list at the Mozilla Developer Reference.

The Date Object

Date objects hold information about dates and times. Each object represents a single moment in time.

Constructor Function

A constructor function is used to create a new date object using the new operator:

today = new Date();
[object Date]{
}

This confirms that the variable today points to a Date object. To see what the date is, we use the toString() method that all objects have:

today.toString();
"Sun Jun 08 2014 15:43:03 GMT+0100 (BST)"

If an argument is not supplied, the date will default to the current date and time. It’s possible to create Date objects for any date by supplying it as an argument to the constructor function. This can be written as a string in a variety of forms:

christmas = new Date('2014 12 25');
[object Date]{

  }

christmas.toString();
"Thu Dec 25 2014 00:00:00 GMT+0000 (GMT)"

chanukah = new Date('16 December 2014');
[object Date]{

  }

chanukah.toString();
"Tue Dec 16 2014 00:00:00 GMT+0000 (GMT)"

eid = new Date('Saturday, July 18, 2015');
[object Date]{

  }

eid.toString();
"Sat Jul 18 2015 00:00:00 GMT+0100 (BST)"

JavaScript is very flexible in the date format, which can be used in the string that is provided as an argument; however, in order to be more consistent, it is better to provide each bit of information about the date as a separate argument. The parameters that can be provided are as follows:

new Date(year,month,day,hour,minutes,seconds,millisecons)

Here is an example:

easter = new Date(2015, 3, 05);
[object Date]{

  }

easter.toString();
"Sun Apr 05 2015 00:00:00 GMT+0100 (BST)"

Notice that the months start counting at zero, so January is 0, February is 1, and so on up to December, which is 11.

An alternative is to use a timestamp, which is a single integer argument that represents the number of milliseconds since the Epoch (1st January 1970):

diwali = new Date(1414018800000);
[object Date]{

  }

diwali.toString();
"Thu Oct 23 2014 00:00:00 GMT+0100 (BST)"

Getter Methods

The properties of date objects are unable to be viewed or changed directly. Instead, they have a number of methods known as getter methods that return information about the date object, such as the month and year.

Once you have created a date object it will have access to all the getter methods. There are two versions of each method, one that returns the information in local time and the other that uses Coordinated Universal Time (UTC).

The getDay() and getUTCDay() methods are used to find the day of the week that the date object falls on. It returns a number, starting at 0 for Sunday, up to 6 for Saturday:

diwali.getDay(); // it's on a Thursday
4

The getDate() and getUTCDate()methods return the day of the month for the date object:

diwali.getDate(); // it's on the 23rd
23

The getMonth() and getUTCMonth() methods can be used to find the month of the date object. It returns an integer, but remember that JavaScript starts counting at 0, so January is 0, February is 1, and so on up to December being 11:

diwali.getMonth(); // it's in October
9

The getFullYear() and getUTCFullYear() methods return the year of the date object. There is also a getYear() method, but it isn’t Y2K compliant, so shouldn’t be used:

diwali.getYear(); // broken for years after 2000
114

diwali.getFullYear(); // use this instead
2014

There are also getHours(), getUTCHours(), getMinutes(), getUTCMinutes(), getSeconds(), getUTCSeconds, getMilliseconds(), and getUTCMilliseconds() methods that will return the hours, minutes, seconds and milliseconds since midnight.

The getTime() method returns a timestamp representing the number of milliseconds since the Epoch:

diwali.getTime();
1414018800000

This can be useful for incrementing dates by a set amount of time; for example, a day can be represented by 1000 * 60 * 60 * 24 milliseconds:

christmasEve = new Date(christmas.getTime() - 1000 * 60 * 60 * 24)
[object Date]{

  }

christmasEve.toString();
Fri Dec 26 2014 00:00:00 GMT+0000 (GMT)

The getTimezoneOffset() method returns the difference, in minutes, between local time and UTC. For example, my timezone is currently British Summer Time:

new Date().getTimezoneOffset()
-60

This shows that British Summer Time is one hour ahead of UTC.

Setter Methods

Most of the getter methods covered in the previous section have equivalent setter methods. These are methods that can be used to change the value of the date held in a Date object. Each of the methods takes an argument representing the value to which you update the date. The methods return the timestamp of the updated date object.

As an example, we can change the value of the date stored in the diwali variable so that it contains the date of Diwali in 2015, which is on Wednesday, November 11, 2015:

diwali.setDate(11);
1412982000000

diwali.setMonth(10); // November is month 10
1415664000000

diwali.setFullYear(2015);
1447200000000

Note that the values returned by these functions is the timestamp representing the number of milliseconds since the Epoch. To see the actual date, we need to use the toString() mehtod:

diwali.toString();
"Wed Nov 11 2015 00:00:00 GMT+0000 (GMT)"

There are also setHours(), setUTCHours(), setMinutes(), setUTCMinutes(), setSeconds(), setUTCSeconds, setMilliseconds() and setUTCMilliseconds() methods that can be used to edit the time portion of a Date object.

Alternatively, if you know the date as a timestamp, you can use the setTime() method:

diwali.setTime(1447200000000);
1447200000000

The RegExp Object

A regular expression (or RegExp, for short) is a pattern that can be used to search or modify strings. A common use case is "find and replace" type operations. For example, say you were looking for any word ending in "ing," you could use the regular expression /\w+ing/.

If that example looks a bit confusing, don’t worry, it will become clear as we move through this section. Regular expressions can look a little strange; in fact, they're something of a dark art that could easily fill a whole book! They are certainly useful when manipulating text strings, though, so we'll introduce some of the basics here and recommend that you carry out further reading once you've finished this book.

Creating Regular Expressions

There are two ways to create a regular expression. The first, and preferred way, is to use the literal notation of writing the regular expression between forward slashes that we’ve already seen:

var pattern = /\w+ing/;

Alternatively, you can create a new instance of the RegExp object using the new operator:

var pattern = new RegExp('\w+ing');

This permits you to create regular expressions using strings.

RegExp Methods

Once you have created a regular expression object, you can use the test() to see if a string (passed to the method as a parameter) matches the regular expression pattern. It returns true if the pattern is in the string, and false if it isn’t:

var pattern = /.*ing/;
undefined

pattern.test("joke"); //testing if the string ends in 'ing'
false

pattern.test("joking");
true

The exec() method works the same as the test() method, but instead of returning true or false, it returns an array containing the first match found or null if there aren’t any matches:

pattern.exec("joke"); //testing if the string ends in 'ing'
null

pattern.exec("joking");
["joking"]

Basic Regular Expressions

At the most basic level, a regular expression will just be a string of characters, so the following will match the string 'java':

/java/

Character Groups

Groups of characters can be placed together inside square brackets. This character group represents any one of the characters inside the brackets. For example, the following regular expression matches any vowel:

/[aeiou]/

A sequence of characters can also be represented by placing a dash [-] between the first and last characters; for example, all the uppercase letters can be represented as:

/[A-Z]/

The digits 0-9 can be represented as:

/[0-9]/
If a ^ character is placed at the start of the sequence of characters with the brackets, it negates the sequence, so the following regular expression represents any character that is not a capital letter:

/[^A-Z]/

These groups can be combined with letters to make a more complex pattern. For example, the following regular expression represents the letter J (lower case or capital) followed by a vowel, followed by a lowercase v, followed by a vowel:

var pattern = /[Jj][aeiou]v[aeiou]/;
undefined

pattern.test("JavaScript");
true

pattern.test("jive");
true

pattern.test("hello");
false
