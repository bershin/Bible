let password

if(password >= 6){
    // Check space
    if(password.indexOf(" ") === -1){
        console.log("Valid Password!")
    }else{
        console.log("Longer password but have spaces!")
    }
}else{
    console.log("Password must be longer!")
}