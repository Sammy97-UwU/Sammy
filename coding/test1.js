var age = prompt("How old are you?");


if(age >= 18 ){
    var citizen = prompt("Are you a citizen?");
    
}
else if(age <= 0) {
    alert("Your age can't be negative!");
}

else{
    alert("You cant't vote!")
}