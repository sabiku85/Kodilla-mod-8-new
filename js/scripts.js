var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };


newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('kamień') });
pickPaper.addEventListener('click', function() { playerPick('papier') });
pickScissors.addEventListener('click', function() { playerPick('nożyce') });


function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
          break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz?';
            playerPointsElem.innerHTML = 0;
            computerPointsElem.innerHTML = 0;
            playerPickElem.innerHTML = 'Wybór gracza';
            computerPickElem.innerHTML = 'Wybór komputera';
            playerResultElem.innerHTML = 'Wynik gracza';
            computerResultElem.innerHTML = 'Wynik komputera';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

setGameElements();

function newGame() {
    player.name = prompt('Graczu, wpisz swoje imię', 'Imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

    playerNameElem.innerHTML = player.name;
    }
}

function endGame() {      
    if(player.score == 10) {
        alert('Wygrałeś! Zdobyłeś 10 punktów :)');
        gameState = 'ended';
        setGameElements();
    
    } else if(computer.score == 10) {
        alert('Wygrał komputer, nazbierał jako pierwszy 10 punktów.');
        gameState = 'ended';
        setGameElements();
    }
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function getComputerPick() {
    var possiblePicks = ['kamień', 'papier', 'nożyce'];

    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (             // tu jest otworzony parametr 'if(parametr) {...}'        
        (computerPick == 'kamień' &&  playerPick == 'nożyce') ||
        (computerPick == 'nożyce' &&  playerPick == 'papier') ||
        (computerPick == 'papier' &&  playerPick == 'kamień')) {
        
        winnerIs = 'computer';
    };

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = "Remis!";
    };

    setGamePoints();
    endGame();
}