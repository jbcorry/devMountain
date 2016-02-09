//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age.
//Then alert your name using dot notation.

var me = {
  name: "Jake",
  age: "23"
};
alert(me.age);  //Code here




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
//Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Coldplay",
  food: "Spaghetti",
  person: "George Washington",
  book: "The Hobbit",
  movie: "The Emperor's New Groove",
  holiday: "Christmas"
};  //Code here


//After you've made your object, add another key named 'car' with the value being your favorite car
//and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = "Jeep Cherokee";
  favoriteThings.brand = "Bullhead";//Code here


//Now change the food key in your favoriteThings object to be 'Lettuce'
//and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';  //Code here




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.


Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = "firstPocket";
backPack['firstPocket'] = item;
backPack.firstPocket = 'chapstick';  //Code here

//After you do the above, alert your entire backPack object.

alert(backPack);
/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);  //Code here




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor.
//Fill those properties in with the appropriate values.

var alsoMe = {
  name: "Jake Corry",
  age: 23,
  height: "5ft 10in",
  gender: "male",
  married: false,
  eyeColor: "green",
  hairColor: "brown",

};
  //Code Here

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for (var prop in alsoMe) {
  alert(alsoMe[prop]);
}  //Code Here




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.
var album = {
  'Why Me': '4:10',
  'Code is lyfe': '3:10',
  'Sitting on the toilet': '2:50',
  'Dalaran': '3:45',
  'RAF is OP': '3:23'
};
  //Code Here

//Now, loop through your album object alerting every song title individually.
for (prop in album) {
  alert(prop);
}
  //Code Here




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  utah: 200000,
  colorado: 123500,
  arizona: 100000,
  california: 500000,
  nevada: 200000
};

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for (prop in states) {
  if (states[prop] > 30000) {
    alert(prop);
  }
}


  //Code Here




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (prop in user1) {
  if (user1[prop]) {}
  else {
    delete user1[prop];
  }
}
console.log(user1);//Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user1.name = 'Jake Corry';
user1.username = 'jbcorry';
user1.pwHash = 'sieo23rj';  //Code Here




//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user2.name = 'Tyler S. McGinnis';
user2.email = 'tyler.mcginnis@devmounta.in';  //Code Here

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {};//Code Here

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function() {
  alert("hello");
}  //Code Here
methodCollection.logHello = function() {
  console.log('hello');
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();  //Code Here



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(x, y, z) {
  var newObj = {
  name: x,
  birthday: y,
  ssn: z,
  }
  return newObj;
}
  //Code Here



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object
// and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

function MakeCard(x, y, z) {
  var newCard = {
    name: x,
    cardNumber: y,
    expDate: z,
  }
  return newCard;
}



//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

function bindCard(person, card) {
  var newBind = {};
  for (prop in person) {
    person[prop] = newBind[prop];
  }
  for (prop in card) {
    card[prop] = newBind[prop];
  }
  return newBind;
}

  //Code Here
