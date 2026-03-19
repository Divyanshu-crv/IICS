// image swap program 

function imageswap(){
    let garbage = image1.src
    console.log(garbage)

    image1.src = image2.src
    image2.src = garbage
    return
}

// unlimted swaping 
// function fastwswap(){
//     for(i=1 ; i<10 ; i++){
//         setInterval(imageswap, 1000);
//     }
// }


function fastwswap(){
    setInterval(imageswap, 1000);
}
