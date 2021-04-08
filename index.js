const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let squares = [];
let score = 0;

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]


function createBoard() {

  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
    squares.push(square)
    if (layout[i] === 0) {
      squares[i].classList.add('pac-dot')
    } else if (layout[i] === 1) {
      squares[i].classList.add('wall')
    } else if (layout[i] === 2) {
      squares[i].classList.add('ghost-lair')
    }
    else if (layout[i] === 3) {
      squares[i].classList.add('power-pellet')
    }

  }
}
createBoard()

//up key - 38
// left - 37
// right - 39


let pacmanCurrentIndex = 490
squares[pacmanCurrentIndex].classList.add('pacman')

function control(e) {
  eat();
  squares[pacmanCurrentIndex].classList.remove('pacman')
  if (e.keyCode === 40) {
    if (pacmanCurrentIndex < width * width - width && !(squares[pacmanCurrentIndex + width].classList.contains('wall')) && !(squares[pacmanCurrentIndex + width].classList.contains('ghost-lair'))) {
      pacmanCurrentIndex += width;
    }
  } else if (e.keyCode === 38) {
    if (pacmanCurrentIndex - width > 0 && !(squares[pacmanCurrentIndex - width].classList.contains('wall')) && !(squares[pacmanCurrentIndex - width].classList.contains('ghost-lair'))) {
      pacmanCurrentIndex -= width;
    }
  } else if (e.keyCode === 37) {
    if (pacmanCurrentIndex % width !== 0 && !(squares[pacmanCurrentIndex - 1].classList.contains('wall')) && !(squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair'))) {
      pacmanCurrentIndex -= 1;
      if (pacmanCurrentIndex === 364) {
        pacmanCurrentIndex = 391
      }
    }
  } else if (e.keyCode === 39) {
    if (pacmanCurrentIndex % width < width - 1 && !(squares[pacmanCurrentIndex + 1].classList.contains('wall')) &&
      !(squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair'))) {
      pacmanCurrentIndex += 1;
      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364
      }
    }
  }
  squares[pacmanCurrentIndex].classList.add('pacman')
  bonusPoint()
  checkForWin()
}
document.addEventListener('keyup', control)

function eat() {
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    score++;
    scoreDisplay.textContent = score;
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
  }
}

class Ghost {
  constructor(className, start, speed) {
    this.className = className;
    this.start = start;
    this.speed = speed;
    this.currentIndex = start;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghost = [
  new Ghost('g1', 348, 250),
  new Ghost('g2', 376, 250),
  new Ghost('g3', 351, 250),
  new Ghost('g4', 379, 250),
]

ghost.forEach(element => {
  squares[element.currentIndex].classList.add(element.className);
  squares[element.currentIndex].classList.add('ghost');
});

ghost.forEach(g => moveGhost(g))


function moveGhost(ghost) {
  const directions = [-1, 1, width, -width];
  let direction = directions[Math.floor(Math.random() * directions.length)]

  ghost.timerId = setInterval(function () {
    if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost', 'scared')
      ghost.currentIndex += direction;
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
    } else {
      direction = directions[Math.floor(Math.random() * directions.length)]
    }

    if (ghost.isScared === true) {
      squares[ghost.currentIndex].classList.add('scared')
    }
    if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
      squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared')
      ghost.currentIndex = ghost.start
      score += 100
      squares[ghost.currentIndex].classList.add(ghost.className)
    }
    checkForGameOver()
  }, ghost.speed)
}

function bonusPoint() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    score += 10;
    squares[pacmanCurrentIndex].classList.remove('power-pellet')
    ghost.forEach(ghost => ghost.isScared = true)
    setTimeout(unScare, 10000)
  }
}

function unScare() {
  ghost.forEach(g => g.isScared = false)
}

function checkForGameOver() {
  if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared')) {
    ghost.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', control)
    scoreDisplay.innerHTML = 'You LOSE'
  }
}

function checkForWin() {
  if (score === 300) {
    console.log('won')
    ghost.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', control)
    scoreDisplay.innerHTML = 'You WON!'
  }
}