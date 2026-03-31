function jumbingball(){
    tops = Math.round(Math.random() *  60);
    left = Math.round(Math.random() *  1100);

    ball.style.left = left;
    ball.style.top = tops;
}

setInterval(function(){
    jumbingball() 
} , 5000 )