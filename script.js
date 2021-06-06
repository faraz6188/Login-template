var database = [
    {
        username: "faraz",
        password: "ali"
    }
];
var newsfeed = [
    {
    username: "bobby",
    timeline: "So tried from learning"
    },
    {
        username: "sally",
        timeline: "Javascript is so cool"
    }
];

var userNamePrompt = prompt("What's ur name?")
var passwordPrompt = prompt("What's ur password?")

function signIn(user,pass) {
    if( user === database [0].username && pass === database[0].password){
        console.log(newsfeed);}
        else {
            alert("Wrong user")
        }
    
}

signIn(userNamePrompt, passwordPrompt);