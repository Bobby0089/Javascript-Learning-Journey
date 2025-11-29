function setUserName(username){
    // console.log(username);
    this.username = username
    // console.log(this.username);
    
}

function createUser(username, email, password){
    setUserName(username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Bobby","b@yahoo.com", 1245)
console.log(user);


/*
Problem

When you write:

setUserName(username)


You are calling the function normally.
So inside setUserName,
this does NOT point to your user object.

That’s why:

this.username = username
does NOT set the username inside the new user object.
It sets it on the global object — which is WRONG.

 What .call(this) Does (Simple Example)

When you write:

setUserName.call(this, username);


You are saying:

“Hey setUserName, run yourself, but use this object as your this.”

So now inside setUserName,
this correctly points to the current user object that is being created.

This means:

this.username = username
now sets the username inside the user object, not globally.


The Key idea:

.call(this) = “use this object inside the function”
Without .call → the function doesn’t know what object to use.
With .call(this) → the function works on the object you want.

*/
