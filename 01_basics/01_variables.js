const accountId = 12345
let accountEmail = "saroj@reactdeveloper.com"
var accountPassword = "reactdeveloper"
accountcity = "Torronto"
let accountState;

// accountId = 2 // Single line Comment

/*
    this is a Multi line Comment. Prefer not to use var bacause of issue in block scope and functional scope.
*/

accountEmail = "mernDeveloper@gmail.com"
accountPassword = "javascriptDeveloper"
accountCity = "Kathmandu"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/* JavaScript Values

1. Fixed Values (Literals/Constant value)
    Strings are text, written in double or single quotes.

2. Variables Values

Variables in JS:
Variables are just a containers for storing data.
The value of a JavaScript variables can be changed during the execution of a program.

var a = 7
let a = 7 // declaring variables

    var/let => variables    
    a => Identifier
    = -> assignment operator 
    7 => literals(constant value)
 */
