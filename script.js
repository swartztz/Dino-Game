const dino = document.querySelector('.dino');
const obstacle = document.querySelector('.obstacle');

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 500);
    }
}

function moveObstacle() {
    let obstaclePosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    
    if (obstaclePosition < 0) {
        obstaclePosition = 1000;
    }

    obstacle.style.right = `${obstaclePosition - 2}px`;
}

setInterval(moveObstacle, 20);
