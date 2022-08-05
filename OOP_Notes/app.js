var myObje = {isimler: ["agah", "abdullah", "özdemir"]};
console.log(myObje, typeof myObje) 

console.log(myObje.isimler.sort())

// property: objelerin sahip olduğu özellikler
// method: objelerin sahip olduğu fonksiyonlar

// window bir objedir
console.log(window.innerWidth)

// string, boolean, number objedir
var myStr = "Agah";
console.log(myStr.includes("a")); // true
console.log(myStr.length) // 4
myStr.blink()

myStr2 = new String("Abdullah")
console.log(myStr2.bold())  // <b>Abdullah</b>


// obje olmayan yapılara primitive type denir
// null, NaN gibi


var userOne = {
    email : "ozdemiragah@gmail.com",
    name: "Agah",

    getInfo(){
        return `mail: ${this.email} \nname: ${this.name}`
    }
}
console.log(userOne.email)
console.log(userOne['email'])
var propMail = 'email'
console.log(userOne[propMail])

console.log(userOne.name)
console.log(userOne.getInfo())

userOne.age = 30;
console.log(userOne.age)

/////////////////////////////////////////////////////////

console.log("******************************************")

class User 
{
    isLogged = false;
    constructor(email, name)
    {
        this.email = email;
        this.name = name;
        this.score = 0;
        console.log("User Created >> ", this.email)
    }

    logIN() 
    {
        if (this.isLogged)
        {
            console.log("Already Logged In")
        }
        else
        {
            console.log(this.email, " >> Just Logged In");
            this.isLogged = true;
        }
    }
    logOUT()
    {
        if(this.isLogged)
        {
            console.log(this.email, " >> Just Logged Out");
            this.isLogged = false;
        }
        else
        {
            console.log("Already Log Out")
        }
    }
    updateScore()
    {
        this.score++;
        console.log(this.email, " score is now", this.score);
        return this;
    }
}

var userOne = new User("ozdemiragah@gmail.com", "Agah");

userOne.logIN()
userOne.logIN()

userOne.logOUT()
userOne.logOUT()


// method Chaining ( Combat )
//userOne.logIN().logOUT() // Uncaught TypeError: Cannot read properties of undefined (reading 'logOUT')
// can be solve return this from before function
userOne.updateScore().logIN()
userOne.updateScore().updateScore().updateScore()

class Admin extends User 
{
    deleteUser(user)
    {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userTwo = new User("agah24@gmail.com", "Abdullah");

var admin = new Admin("alpayabiAdmin@gmail.com", "Alpay");

var users = [userOne, userTwo];

admin.deleteUser(userTwo);
console.log(users[0])
console.log(users[1])

/////////////////////////////////////////////////////////

console.log("******************************************")

// Constructors, Prototype

function newUserClass(email, name){
    this.email = email;
    this.name = name;
    this.online = false;

}

var userNewOne = new newUserClass("agahozdemir@gmail.com", "Agah Abdullah")



var nums = [1,2,3,4,5];
console.log(nums) // __proto__ ( length, filter(), sort() vs.)

newUserClass.prototype.login = function()
{
    this.online = true;
    console.log(this.email, "has logged in")
}

newUserClass.prototype.logout = function()
{
    this.online = false;
    console.log(this.email, "has logged out")
}

console.log(userNewOne)
userNewOne.login();
userNewOne.logout();


function newAdminClass(...args)
{
    newUserClass.apply(this, args)
    this.role = "super admin";
}

var adminNewOne = new newAdminClass("alpay@gmail.com", "alpay")

newAdminClass.prototype = Object.create(newUserClass.prototype)

console.log(adminNewOne)

newAdminClass.prototype.deleteUser = function(){

}

// The JavaScript prototype property also allows you to add new methods to objects constructors:

