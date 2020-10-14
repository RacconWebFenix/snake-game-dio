let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = { //posição onde sera criado a cobra
    x: 8 * box,
    y: 8 * box
}

function criarBG() { //cria o fundo
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);  
}

function criarSnake(){ //cria a cobra
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }

}

criarBG();
criarSnake();