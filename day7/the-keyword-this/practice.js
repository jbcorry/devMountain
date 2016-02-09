//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

//to easily refer to the parent or the thing being defined, it makes thing less ambiguous.      //Answer

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//apply, call, new, and bind.  Apply uses arrays as the arguments and immediately invokes the function.  Call just accepts the arguements with commas between them and also invokes the function. For apply and call, /this/ is assigned to the object directly left of the '.'
//new creates and returns a new object and assigns /this/ to the new obj created.  Bind reassigns values of a new obj from the parameters given. It DOESN'T invoke the function, and assigns /this/ to the new obj as well.      //Answer

  // 3) What is the difference between call and apply?

      //Answer: Call takes numbers separated by commas in the arguments and apply needs numbers in an array.

  // 4) What does .bind do?

      //Answer assigns /this/ to the first parameter and then saves the other parameters as permenant values in the obj/function.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: "jbcorry",
  email: "jakecorry123@gmail.com",
  getUsername: function() {
    return this.username;
  }
}  //Code Here

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.moveCar = function() {
    this.move = this.move + 10;
    return this.move;
  }
}  //Function Invocations Here


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function.
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
//use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects
//being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);  //Code Here


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

var boundGetUser = getMyUsername.bind(myUser);

setTimeout(boundGetUser, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here: undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here: the window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
