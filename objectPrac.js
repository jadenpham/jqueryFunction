var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo["name"]); 

var glazedDonuts = [
    {
      frosting: 'glazed',
      style: 'cake',
      type: 'old fashioned',
      age: '45',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'regular',
      age: '5',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'jelly filled',
      age: '1',
      time: 'seconds'
    }
  ];

  function test(){
      let count = 0;
      for(var donut of glazedDonuts){
        //   console.log(donut);
          if(donut.age < 25 && donut.time =="minutes" || donut.time == "seconds"){
              count++;
            }
        }
        console.log(count);
  }

  test();

  var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
//   How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this

function findName(users){
    for(user of users){
        if(user.name =="John"){
            console.log(user.name, user.age);
        }
    }
}

findName(users);
console.log(users[0].name);

function allNames(users){
    for(user of users){
        console.log(user.name, user.age);
    }
}

allNames(users);