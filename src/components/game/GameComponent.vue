<template>
    <div id="test">

            <test-component id="component"></test-component>
            <div id="test">
            <canvas id="game"></canvas>
            </div>

    </div>
</template>

<script>
import WorkView from '@/views/WorkView.vue'
export default {
    name: 'GameComponent',
    components: {
        "test-component" : WorkView,
    },
    mounted: function () {
        var start = false;
        var canvas = document.getElementById("game");
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        var ctx = canvas.getContext("2d");
        var ballRadius = 10;
        var x = canvas.width/2;
        var y = canvas.height-30;
        var dx = 2;
        var dy = -2;
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width-paddleWidth)/2;
        var rightPressed = false;
        var leftPressed = false;
        var brickRowCount = 5;
        var brickColumnCount = 3;
        var brickWidth = 75;
        var brickHeight = 20;
        var brickPadding = 10;
        var brickOffsetTop = 30;
        var brickOffsetLeft = 30;
        var score = 0;
        var lives = 3;
        var rect = {
            x:canvas.width/2 -60,
            y:canvas.height/2 +50,
            width:120,
            heigth:30
        };

        var bricks = [];
        for(var c=0; c<brickColumnCount; c++) {
            bricks[c] = [];
            for(var r=0; r<brickRowCount; r++) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }

        canvas.addEventListener('click', function(evt) {
            var mousePos = getMousePos(canvas, evt);
            debugger;
            if (isInside(mousePos,rect)) {
                start = true;
            }	
        }, false);
        

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        function keyDownHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = true;
                console.log("ok")
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = true;
            }
            else if(e.key == "Enter"){
                console.log("taille :" + canvas.width)
            }
        }

        function keyUpHandler(e) {
            if(e.key == "Right" || e.key == "ArrowRight") {
                rightPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                leftPressed = false;
            }
        }

        function mouseMoveHandler(e) {
            var relativeX = e.clientX - canvas.offsetLeft;
            if(relativeX > 0 && relativeX < canvas.width) {
                paddleX = relativeX - paddleWidth/2;
            }
        }

        function collisionDetection() {
            for(var c=0; c<brickColumnCount; c++) {
                for(var r=0; r<brickRowCount; r++) {
                    var b = bricks[c][r];
                    if(b.status == 1) {
                        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                            dy = -dy;
                            b.status = 0;
                            score++;
                            if(score == brickRowCount*brickColumnCount) {
                                alert("YOU WIN, CONGRATS!");
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }

        function drawBall() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks() {
            for(var c=0; c<brickColumnCount; c++) {
                for(var r=0; r<brickRowCount; r++) {
                    if(bricks[c][r].status == 1) {
                        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#0095DD";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }

        function getMousePos(canvas, event) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };
        }

        function isInside(pos, rect){
            return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
        }

        function drawScore() {
                ctx.font = "16px Arial";
                ctx.fillStyle = "#0095DD";
                ctx.fillText("Score: "+score, 20, 20);
        }

        function drawLives() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: "+lives, canvas.width-65, 20);
        }
        function drawMenu() {
            ctx.beginPath();
            ctx.rect(canvas.width/2 - 60, canvas.height/2 + 50, 120, 30)
            ctx.textAlign = "center";
            ctx.fillStyle = 'rgba(225,225,225,0.5)';
            ctx.fill(); 
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#000000'; 
            ctx.stroke();
            ctx.closePath();
            ctx.font = '20pt Kremlin Pro Web';
            ctx.fillStyle = '#000000';
            ctx.fillText('Start Game', 245, 415);
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!start) {
                drawMenu();
            } else {
                drawBricks();
                drawBall();
                drawPaddle();
                drawScore();
                drawLives();
                collisionDetection();

                if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
                    dx = -dx;
                }

                if(y + dy < ballRadius) {
                    dy = -dy;
                }

                else if(y + dy > canvas.height-ballRadius) {
                    if(x > paddleX && x < paddleX + paddleWidth) {
                        dy = -dy;
                    }

                    else {
                        lives--;
                        if(!lives) {
                            alert("GAME OVER");
                            document.location.reload();
                        }

                        else {
                            x = canvas.width/2;
                            y = canvas.height-30;
                            dx = 3;
                            dy = -3;
                            paddleX = (canvas.width-paddleWidth)/2;
                        }
                    }
                }

                if(rightPressed && paddleX < canvas.width-paddleWidth) {
                    paddleX += 7;
                }
                else if(leftPressed && paddleX > 0) {
                    paddleX -= 7;
                }

                x += dx;
                y += dy;
            }
            requestAnimationFrame(draw);
        }
        draw()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    canvas {
        border: 1px solid red;
        position: absolute;
        display: block;
        z-index: 1;
    }
</style>
