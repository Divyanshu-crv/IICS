const ball = document.querySelector(".ball");

function jumpingBall() {
    let topPos = Math.random() * (window.innerHeight - 50);
    let leftPos = Math.random() * (window.innerWidth - 50);

    ball.style.top = topPos + "px";
    ball.style.left = leftPos + "px";
}

// Move ball every 1 second
setInterval(jumpingBall, 1000);