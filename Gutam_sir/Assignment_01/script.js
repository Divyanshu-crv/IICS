function loop(){
    confirm("Enter Number From Where To Start, End 100 , Show in Console")

    let user_input = parseInt(prompt("Enter Number Where to Start"));

    for(let i = user_input ; i <= 100 ; i++){
        console.log("Number : " , i);
    }
}

function consolclr(){
    console.clear()
}

