// Object is a refrence tpye datatype it is class a class where data members and functions are wrapped together in other programming languages like c++. if we want to store information about 100 people there age,name,address,contact then we have to make hundreds of variables and our code become very messy to manage thats why we use object it is a refrence data type store data in a key value pairs;

let user={
    firstname:"manish kuamr",
    age:22,
    course:"BCA"
};


// we can access the values of object using dot operator and using [''] this syntax
console.log(user.age);
console.log(user['age']);


// we can also add values in object 
user.address="359 chirag delhi bhagat singh college";
user.contact="9643623490";
user.education="graduation";


// we can also updates values from objects
user.address="najafgarh 40 feet road ";
user.firstname="ankit kumar";

// we can also delete values from objects 
// delete user.age;
// delete user.course;



// Dynamic keys ->we can dynamically use keys in our object
let tellname="first name";

let obj={
    [tellname]:"manish",
    fullname:"manish raja"
}


// we can also make object inside object which is called nested objects
let person={
    name:"manish",
    age:22,
    class:"12th",
    roll:21,
    address:{
        state:"Delhi",
        city:"New delhi",
        pin:110017,
        more:{
            population:1000000,
            area:20000,
            wardNo:12
        }
    }

}



// if you want your object is fully private that no one can update,add or delete property use freeze mwthod
// Object.freeze(person);
// person.type="bad";


// if you want to update your object but not add and delete use seal method
Object.seal(person);
person.name="bahubali";


// If you want to copy one object into another object let us see
let obj1={
    name:"Object 1"
}

let obj2=obj1;
// Now it is not copy it is pointing to same refrence if we change value of obj2 value of obj1 will change because both are pointing to same
obj2.name="Rahul baba";

// so this is not right way to copy or clone a object let us see more ways to copy object that changes are not visible in orignal object


// Shallow copy technique is used to copy object propeerties but if object have nested array or object so shallow copy does not make that nested object copy it will pass refrence of nested object so if you wil change something in your nested object it will als appear in orignal

const person2=Object.assign({},person);
const person3={...person2};
person3.address.city="panipat";


// Deep copy is a technique which copy properties of the whole object



