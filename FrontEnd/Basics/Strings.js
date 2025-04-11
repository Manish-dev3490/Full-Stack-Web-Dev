//  Strings-> Strings is the combination of charecters within the double , single quatain and also in template literals.string is the primitive data type and are also iterable just like arrays.we can iterate on string they are also 0based indexing and javascript gives some methods for strings ....

let name="khushi";
name=" manish kumar ";
let secondname=name;

// Basic and common strings methds which used in development  are below the file 

// Normal to uppercase
console.log(name.toUpperCase());  

// Normal to lowerrcase
console.log(name.toLowerCase());

// charAt index batao charecter de dega
console.log(name.charAt(2));

// jo string doge uska index bata dega
console.log(name.indexOf("man"));

// agar string itna part includes krti hai toh bool value de dega
console.log(name.includes("sh"));

// string ko extract kar dega starting aur ending index bata do
console.log(name.slice(1,7));

// starting and ending me se space hata dega
console.log(name.trim());

// does string start with
console.log(name.startsWith(" "));

// does string ends with
console.log(name.endsWith(" "));


// give you the length of the string 
console.log(name.length);


// split convert string into array
console.log(name.split(" "));




// String template literals is using `` backticks through this we can concat and use '' and "" this in our string.We can also write logic and math in ${} in this..

let number=964362390;
let data=`my phone number is ${number}`
console.log(data);


console.log(`Number print krega ${number? true:false}`);

