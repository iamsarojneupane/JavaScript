//  Primitive - fundamental datatypes / Built-in datatypes

/* 7 types of dataTypes: 
N - Null
N - Number
S - String
S - Symbol
B - Boolean
B - BigInt
U - Undefined 
*/

const score = 4;
const scoreValue = 4.4

const isLoggedIn = false
const outsideTemp = null
let userEmailId;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1458965125794613n  // representing n in last means bigInt.


// Reference (Non primitive)

// Array, Objects, Functions





















/* Notes
Is JavaScript  a  dynamic type language or a statically typed language?

Statically typed languages
A language is statically typed if the type of a variable is known at compile time. 
For some languages this means that you as the programmer must specify what type each variable is; 
other languages (e.g.: Java, C, C++) offer some form of type inference, 
the capability of the type system to deduce the type of a variable (e.g.: OCaml, Haskell, Scala, Kotlin).

The main advantage here is that all kinds of checking can be done by the compiler, 
and therefore a lot of trivial bugs are caught at a very early stage.
Examples: C, C++, Java, Rust, Go, Scala

Dynamically typed languages
A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc.
This means that you as a programmer can write a little quicker because you do not have to specify types every time
(unless using a statically-typed language with type inference).

Examples: Perl, Ruby, Python, PHP, JavaScript, Erlang

Most scripting languages have this feature as there is no compiler to do static type-checking anyway, 
but you may find yourself searching for a bug that is due to the interpreter misinterpreting the type of a variable. 
Luckily, scripts tend to be small so bugs have not so many places to hide.

Most dynamically typed languages do allow you to provide type information, but do not require it. 
One language that is currently being developed, Rascal, takes a hybrid approach allowing dynamic typing 
within functions but enforcing static typing for the function signature. */