// Positive & Negative

function positivenegative(){
    let user_input = parseInt(prompt("Enter Number To Check Positive and Negative Number "))

    if(user_input == 0){
        txt.innerText  = user_input + "  is Zero"
        // console.log("Number is Zero ") ;
    }else if(user_input > 0){
        txt.innerText  = user_input + "  is Positive Number"
        // console.log(` ${user_input} is Positive Number`);
    }else{
        txt.innerText  = user_input + "  is Negative Number"
        // console.log(` ${user_input}  is Negative Number`);
    }
}

function consclr(){
    console.clear()
}
















