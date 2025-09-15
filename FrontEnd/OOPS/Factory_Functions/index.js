//  Now we are going to understand how we works in javascript when OOPS was not introduced in JS let us see with the help of factory functions...

// Task is humko ek suer ki info leni hai humne leli below the line
const user = {
  name: "manish",
  class: 12,
  age: 2,
};

//  Now task is humko ase 500 user lene hai so ek ek krke object create karunga toh code resuablity modularity readablity security sab khatam hojayega so we will use Factory functions ---> FACTORY FUNCTIONS are normal functions but they return a object.

function createUser(name, clas, age) {
  const user = {
    name: name,
    clas: clas,
    age: age,
    getUserInfo: createUser.commonMethods.getUserInfo,
  };

  return user;
}

//  I have done the task created a factory function jo objects create krega buss abh humko users create krne hai like bleow see the lines of codes

// yaha dikkat kya aari hai hamara object toh create hora hai lekin method getUserInfo bhi baar baar create hora hai memory me jo ki same hai yaha DRY principle follow nahi hra aur yeh jabardsti space le rha hai so we will create function globally krdiya lekin humne abstraction and encapsulation ko kho diya so we will use another way --->FUNCTIONS ARE ALSO OBJECTS IN JS so hum functions ke andar ek object baneyege usme common methods daal denge jese hee jese user create honge unke paas bhi aajayega woh

createUser.commonMethods = {
  getUserInfo() {
    console.log("name is ", this.name);
  },
};

const user1 = createUser("manish", 12, 21);
const user2 = createUser("manish kumar", 12, 21);



// abh hamne apni functionality acheve krli hai but code jyada krna pdra hai actually me kiya kya hai hamne function ke andar jo ki behind the scenes khud ek object hai uske andar ek object bana kr methods daal diye hai abh jo bhi naye object create honge using that factory function unke paas yeh methods aa jayege yaha enrty hoti hai PRTOTYPES Ki 