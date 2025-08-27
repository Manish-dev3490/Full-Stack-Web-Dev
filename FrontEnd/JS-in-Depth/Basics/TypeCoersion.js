// Type conversion - is a process in which we explicitly do datatype change into other like string ko number me yah fhir number ko string me toh functiona aur opertaor ke thorugh krna chahiye recommended way hai.

// Number ko string me krdo using using String()
let num=123;
num=String(num);

// string ko number me kardo 
let name="manish";
name=Number(name);

// Number to boolean
let age=22;
age=Boolean(age);

// boolean ko number me 
let value=true;
value=Number(value);




// Type coersion -is a process jisme type conversion hee hota hai lekin javascript engine khud karta hai implicitly humko nahi karna padta hai woh autpmatically basis on some rules khud krta hai


// Let us first talk about (+) operator and its working yeh do tarah se work karta hai js me agar number+number hua toh addition hoga aur agar ek side string hua toh concatanation hoga 

// String + Number krega --> string concatantion hojayegi like ("10" + 20="1020")
// Number + string krega --->string concatanation hojayegi like (10 + "20"="1020")
// Null + Number krega toh -->Null khud ko 0 me badal dega aur addition hojayega like (Null + 10 =10) 
// boolean + Number krega --->boolean apne ap ko 1 or 0 me change krdega additin hojayega like (true+10=11)
// undefner+Number krega toh --->undefiner apne ap ko Nan me convert krlegalike(undefined+2=Nan)
// string + string krega toh concatanation hojayegu like("2"+"2"="22")


// Let us first talk about (-) operator and its working.
// string - Number krega toh agar string ko number me convert krdega if valid hai like("200"-100=100)
// Number - string krega toh agar string ko number me convert krdega if valid hai like(100-"50"=50)
// Boolean - number krega toh boolean apne ap ko number me convert krdega (true-10=-9)
// Number-Boolean krega toh bolean khud ko number me convert krdega like (10-true=9)
// undefined-number krega toh Nan aajayega because it is not a number

// baaki other * / pehle number me convert krte hai string ko fhir operation krte hai 





var a=10;
var a=100; 