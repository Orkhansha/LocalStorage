
let user1 = {
    name:"Orkhan",
    surname:"Akbarov",
    address: "Buzovna",
    age: 27
  }
let user2 = {
    name:"Emil",
    surname:"Abdulla",
    address: "Bineqedi",
    age: 21
  }

let user3 = {
    name:"Seid",
    surname:"Nurali",
    address: "Saturn",
    age: 30
  }

let testObject = [user1, user2, user3] ;

localStorage.setItem('Users', JSON.stringify(testObject));

//localStorage.setItem('Users', JSON.stringify(testObject));


