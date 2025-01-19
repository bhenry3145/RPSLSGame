let playBtn = document.getElementById('playBtn');
let rulesBtn = document.getElementById('rulesBtn');
let pictures = document.getElementById('pictures');
let homeBtn = document.getElementById('homeBtn');
let rulesHeader = document.getElementById('rulesHeader');
let rulesButtons = document.getElementById('rulesButtons');
let homeHeader = document.getElementById('homeHeader');
let homeBtns = document.getElementById('homeBtns');
let gameHeader = document.getElementById('gameHeader');
let gameBtns = document.getElementById('gameBtns');
let localBtn = document.getElementById('localBtn');
let computerBtn = document.getElementById('computerBtn');
let roundHeader = document.getElementById('roundHeader');
let oneWinBtnSingle = document.getElementById('oneWinBtnSingle');
let threeWinBtnSingle = document.getElementById('threeWinBtnSingle');
let fourWinBtnSingle = document.getElementById('fourWinBtnSingle');
let oneWinBtnMulti = document.getElementById('oneWinBtnMulti');
let threeWinBtnMulti = document.getElementById('threeWinBtnMulti');
let fourWinBtnMulti = document.getElementById('fourWinBtnMulti');
let roundBtnsMulti = document.getElementById('roundBtnsMulti');
let roundBtnsSingle = document.getElementById('roundBtnsSingle');
let advice = document.getElementById('advice');
let gamestageCPU = false;
let gamestageCPU5 = false;
let gamestageCPU7 = false;
let gamestageLocal = false;
let gamestageLocal5 = false;
let player1Turn = false;
let player2Turn = false;
let rockPic = document.getElementById('rockPic');
let paperPic = document.getElementById('paperPic');
let scissorsPic = document.getElementById('scissorsPic');
let lizardPic = document.getElementById('lizardPic');
let spockPic = document.getElementById('spockPic');
let yourPic = document.getElementById('yourPic');
let cpuPic = document.getElementById('cpuPic');
let results = document.getElementById('results');
let resultsMulti = document.getElementById('resultsMulti');
let playerScoreDisplay = document.getElementById('playerScoreDisplay');
let cpuScoreDisplay = document.getElementById('cpuScoreDisplay');
let refreshBtn2 = document.getElementById('refreshBtn2');
let currentRoundDisplay = document.getElementById('currentRoundDisplay');
let player1ScoreDisplay = document.getElementById('player1ScoreDisplay');
let player2ScoreDisplay = document.getElementById('player2ScoreDisplay');
let localGrid = document.getElementById('localGrid');
let rockp1 = document.getElementById('rockp1');
let rockp2 = document.getElementById('rockp2');
let paperp1 = document.getElementById('paperp1');
let paperp2 = document.getElementById('paperp2');
let scissorsp1 = document.getElementById('scissorsp1');
let scissorsp2 = document.getElementById('scissorsp2');
let lizardp1 = document.getElementById('lizardp1');
let lizardp2 = document.getElementById('lizardp2');
let spockp1 = document.getElementById('spockp1');
let spockp2 = document.getElementById('spockp2');
let resultsMultiDisplay = document.getElementById('resultsMultiDisplay');
let resultsMultiDisplay2 = document.getElementById('resultsMultiDisplay2');
let advice2 = document.getElementById('advice2');


rulesBtn.addEventListener('click', () => {
    pictures.className = 'hide';
    homeHeader.className = 'hide';
    homeBtns.className = 'hide';
    rulesHeader.classList.toggle('hide');
    rulesButtons.classList.toggle('hide');
})

homeBtn.addEventListener('click', () => {
    pictures.classList.toggle('hide');
    homeHeader.classList.toggle('hide');
    homeBtns.classList.toggle('hide');
    pictures.className = 'pictures';
    homeHeader.className = 'header';
    homeBtns.className = 'buttons';
    rulesHeader.classList.toggle('hide');
    rulesButtons.classList.toggle('hide');
})

playBtn.addEventListener('click', () => {
    homeHeader.innerText = "CHOOSE YOUR GAME MODE";
    homeHeader.className = 'header';
    homeBtns.classList.toggle('hide');
    pictures.classList.toggle('hide');
    pictures.className = 'pictures';
    gameBtns.className = 'buttons';
})

localBtn.addEventListener('click', () => {
    homeHeader.innerText = "CHOOSE HOW MANY ROUNDS (1v1)";
    homeHeader.className = 'header';
    gameBtns.classList.toggle('hide');
    roundBtnsMulti.classList.toggle('hide');
})

oneWinBtnMulti.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsMulti.classList.toggle('hide');
    gamestageLocal = true;
    localGrid.classList.toggle('hide');
    pictures.classList.toggle('hide');
})

fourWinBtnMulti.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsMulti.classList.toggle('hide');
    gamestageLocal5 = true;
    localGrid.classList.toggle('hide');
    pictures.classList.toggle('hide');
    victory = 4;
    maxRounds = 7;
    advice2.classList.toggle('hide');
})

threeWinBtnMulti.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsMulti.classList.toggle('hide');
    gamestageLocal5 = true;
    localGrid.classList.toggle('hide');
    pictures.classList.toggle('hide');
    victory = 3;
    maxRounds = 5;
    advice2.classList.toggle('hide');
})

computerBtn.addEventListener('click', () => {
    homeHeader.innerText = "CHOOSE HOW MANY ROUNDS (CPU)";
    homeHeader.className = 'header';
    gameBtns.classList.toggle('hide');
    roundBtnsSingle.classList.toggle('hide');
})

oneWinBtnSingle.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsSingle.classList.toggle('hide');
    gamestageCPU = true;
    advice.classList.toggle('hide');
})

threeWinBtnSingle.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsSingle.classList.toggle('hide');
    advice.classList.toggle('hide');
    gamestageCPU5 = true;
    victory = 3;
    maxRounds = 5;
    playerScoreDisplay.classList.toggle('hide');
    cpuScoreDisplay.classList.toggle('hide');
    currentRoundDisplay.classList.toggle('hide');
})

fourWinBtnSingle.addEventListener('click', () => {
    homeHeader.innerText = "ROCK PAPER SCISSORS LIZARD SPOCK";
    homeHeader.className = 'header';
    roundBtnsSingle.classList.toggle('hide');
    advice.classList.toggle('hide');
    gamestageCPU5 = true;
    victory = 4;
    maxRounds = 7;
    playerScoreDisplay.classList.toggle('hide');
    cpuScoreDisplay.classList.toggle('hide');
    currentRoundDisplay.classList.toggle('hide');
})


async function ComputerSelected() {
    let computerResponse = await fetch('https://bhenryrpsls-h4dzcacxcsbgesb9.westus-01.azurewebsites.net/RockPaperScissorsLizardSpock/PlayGame');
    const data = await computerResponse.text();
    return data;
}

let maxRounds = 0;
let currentRound = 0;
let victory = 0;
let playerScore = 0;
let cpuScore = 0;

let player1Score = 0;
let player2Score = 0;
player1Pick = "";
player2Pick = "";

async function SingleGame(userPick) {
    let computerData = await ComputerSelected();

    if (userPick == "Rock")
    {
        advice.classList.toggle('hide');
        pictures.classList.toggle('hide');
        results.classList.toggle('hide');
        results.classList.toggle('resultsDesign');
        results.classList.toggle('finalPictures');
        // results.classList.toggle('finalPictures');
        if (computerData == "Lizard" || computerData == "Scissors")
        {
            homeHeader.innerText = "YOU WIN!!!!";
            yourPic.src = "./assets/rock.jpg"
            if (computerData == "Lizard")
            {
                cpuPic.src = "./assets/lizard.jpg"
            }
            else if (computerData == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
        }
        else if (computerData == "Rock")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/rock.jpg";
            cpuPic.src = "./assets/rock.jpg"
        }
        else
        {
            homeHeader.innerText = "You lose";
            yourPic.src = "./assets/rock.jpg"
            if (computerData == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
            else if (computerData == "Paper")
            {
                cpuPic.src = "./assets/paper.jpg"
            }
        }

    }

    else if (userPick == "Paper")
    {
        advice.classList.toggle('hide');
        pictures.classList.toggle('hide');
        results.classList.toggle('hide');
        results.classList.toggle('resultsDesign');
        results.classList.toggle('finalPictures');
        if (computerData == "Rock" || computerData == "Spock")
        {
            homeHeader.innerText = "YOU WIN!!!!";
            yourPic.src = "./assets/paper.jpg"
            if (computerData == "Rock")
            {
                cpuPic.src = "./assets/rock.jpg"
            }
            else if (computerData == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
        }
        else if (computerData == "Paper")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/paper.jpg"
            cpuPic.src = "./assets/paper.jpg"
        }
        else
        {
            homeHeader.innerText = "You lose";
            yourPic.src = "./assets/paper.jpg"
            if (computerData == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
            else if (computerData == "Lizard")
            {
                cpuPic.src = "./assets/lizard.jpg"
            }
        }
    }

    else if (userPick == "Scissors")
        {
            advice.classList.toggle('hide');
            pictures.classList.toggle('hide');
            results.classList.toggle('hide');
            results.classList.toggle('resultsDesign');
            results.classList.toggle('finalPictures');
            if (computerData == "Paper" || computerData == "Lizard")
            {
                homeHeader.innerText = "YOU WIN!!!!";
                yourPic.src = "./assets/scissors.jpg";
                results.classList.toggle('finalPictures');
                if (computerData == "Lizard")
                {
                    cpuPic.src = "./assets/lizard.jpg"
                }
                else if (computerData == "Paper")
                {
                    cpuPic.src = "./assets/paper.jpg"
                }
            }
            else if (computerData == "Scissors")
            {
                homeHeader.innerText = "You tied";
                yourPic.src = "./assets/scissors.jpg"
                cpuPic.src = "./assets/scissors.jpg"
            }
            else
            {
                homeHeader.innerText = "You lose";
            }
        }

    else if (userPick == "Lizard")
    {
        advice.classList.toggle('hide');
        pictures.classList.toggle('hide');
        results.classList.toggle('hide');
        results.classList.toggle('resultsDesign');
        results.classList.toggle('finalPictures');
        if (computerData == "Paper" || computerData == "Spock")
        {
            homeHeader.innerText = "YOU WIN!!!!";
            yourPic.src = "./assets/lizard.jpg"
            results.classList.toggle('finalPictures');
            if (computerData == "Paper")
            {
                cpuPic.src = "./assets/paper.jpg"
            }
            else if (computerData == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
        }
        else if (computerData == "Lizard")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/lizard.jpg"
            cpuPic.src = "./assets/lizard.jpg"
        }
        else
        {
            homeHeader.innerText = "You lose";
        }
    }

    else if (userPick == "Spock")
        {
            advice.classList.toggle('hide');
            pictures.classList.toggle('hide');
            results.classList.toggle('hide');
            results.classList.toggle('resultsDesign');
            results.classList.toggle('finalPictures');
            if (computerData == "Rock" || computerData == "Scissors")
            {
                homeHeader.innerText = "YOU WIN!!!!";
                yourPic.src = "./assets/spock.jpg"
                // results.classList.toggle('finalPictures');
            if (computerData == "Rock")
            {
                cpuPic.src = "./assets/rock.jpg"
            }
            else if (computerData == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
            }
            else if (computerData == "Spock")
            {
                homeHeader.innerText = "You tied";
                yourPic.src = "./assets/spock.jpg"
                cpuPic.src = "./assets/spock.jpg"
            }
            else
            {
                homeHeader.innerText = "You lose";
            }
        }
}

async function ThreeWin(userPick) {

    if (currentRound >= maxRounds)
    {
        if (playerScore > cpuScore)
            {
                homeHeader.innerText = "You win!";
            }
            else if (cpuScore > playerScore)
            {
                homeHeader.innerText = "You lose :(";
            }
            else 
            {
                homeHeader.innerText = "Oh it's a draw :/";
            }
            return;
    }
    
    let computerData = await ComputerSelected();

    if (userPick == "Rock")
    {
        

        if (computerData == "Lizard" || computerData == "Scissors")
        {
            playerScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            
        }
        else if (computerData == "Rock")
        {
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
        else
        {
            cpuScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }

    }

    else if (userPick == "Paper")
    {
        
        if (computerData == "Rock" || computerData == "Spock")
        {
            playerScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
        else if (computerData == "Paper")
        {
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
        else
        {
            cpuScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
    }

    else if (userPick == "Scissors")
        {
            
            if (computerData == "Paper" || computerData == "Lizard")
            {
                playerScore++;
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
            else if (computerData == "Scissors")
            {
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
            else
            {
                cpuScore++;
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
        }

    else if (userPick == "Lizard")
    {
        
        if (computerData == "Paper" || computerData == "Spock")
        {
            playerScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
        else if (computerData == "Lizard")
        {
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
        else
        {
            cpuScore++;
            playerScoreDisplay.innerText = "Your score: " + playerScore;
            cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
        }
    }

    else if (userPick == "Spock")
        {
            
            if (computerData == "Rock" || computerData == "Scissors")
            {
                playerScore++;
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
            else if (computerData == "Spock")
            {
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
            else
            {
                cpuScore++;
                playerScoreDisplay.innerText = "Your score: " + playerScore;
                cpuScoreDisplay.innerText = "CPU score: " + cpuScore;
            }
        }

        if (playerScore == victory)
        {
            homeHeader.innerText = "You win!!!!";
            refreshBtn2.classList.toggle('hide');
            return;
        }
        else if (cpuScore == victory)
        {
            homeHeader.innerText = "You lose!!!!";
            refreshBtn2.classList.toggle('hide');
            return;
        }

        currentRound++;

        currentRoundDisplay.innerText = "Rounds Passed: " + currentRound;

        if (currentRound === maxRounds)
        {
            if (playerScore > cpuScore)
            {
                homeHeader.innerText = "You win!";
                refreshBtn2.classList.toggle('hide');
            }
            else if (cpuScore > playerScore)
            {
                homeHeader.innerText = "You lose :(";
                refreshBtn2.classList.toggle('hide');
            }
            else 
            {
                homeHeader.innerText = "Oh it's a draw :/";
                refreshBtn2.classList.toggle('hide');
            }
        }
}

async function SingleGameMulti(player1Pick, player2Pick) {
    let computerData = await ComputerSelected();

    if (player1Pick == "Rock")
    {
        resultsMulti.classList.toggle('hide');
        resultsMulti.classList.toggle('resultsDesign');
        resultsMulti.classList.toggle('finalPictures');
        localGrid.classList.toggle('hide');
        if (player2Pick == "Lizard" || player2Pick == "Scissors")
        {
            homeHeader.innerText = "Player 1 wins!!!!";
            yourPic.src = "./assets/rock.jpg"
            if (player2Pick == "Lizard")
            {
                cpuPic.src = "./assets/lizard.jpg"
            }
            else if (player2Pick == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
        }
        else if (player2Pick == "Rock")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/rock.jpg"
            cpuPic.src = "./assets/rock.jpg"
        }
        else
        {
            homeHeader.innerText = "Player 2 wins";
            yourPic.src = "./assets/rock.jpg"
            if (computerData == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
            else if (computerData == "Paper")
            {
                cpuPic.src = "./assets/paper.jpg"
            }
        }

    }

    else if (player1Pick == "Paper")
    {
        resultsMulti.classList.toggle('hide');
        resultsMulti.classList.toggle('resultsDesign');
        resultsMulti.classList.toggle('finalPictures');
        resultsMultiDisplay.classList.toggle('hide');
        localGrid.classList.toggle('hide');
        
        if (player2Pick == "Rock" || player2Pick == "Spock")
        {
            homeHeader.innerText = "Player 1 wins!!!!";
            yourPic.src = "./assets/paper.jpg"
            if (player2Pick == "Rock")
            {
                cpuPic.src = "./assets/rock.jpg"
            }
            else if (player2Pick == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
        }
        else if (player2Pick == "Paper")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/paper.jpg"
            cpuPic.src = "./assets/paper.jpg"
        }
        else
        {
            homeHeader.innerText = "Player 2 wins!";
            yourPic.src = "./assets/paper.jpg"
            if (player2Pick == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
            else if (player2Pick == "Lizard")
            {
                cpuPic.src = "./assets/lizard.jpg"
            }
        }
    }

    else if (player1Pick == "Scissors")
        {
            resultsMulti.classList.toggle('hide');
            resultsMulti.classList.toggle('resultsDesign');
            resultsMulti.classList.toggle('finalPictures');
            resultsMultiDisplay.classList.toggle('hide');
            localGrid.classList.toggle('hide');
            if (player2Pick == "Paper" || player2Pick == "Lizard")
            {
                homeHeader.innerText = "Player 1 wins!!!!";
                yourPic.src = "./assets/scissors.jpg";
                results.classList.toggle('finalPictures');
                if (player2Pick == "Lizard")
                {
                    cpuPic.src = "./assets/lizard.jpg"
                }
                else if (player2Pick == "Paper")
                {
                    cpuPic.src = "./assets/paper.jpg"
                }
            }
            else if (player2Pick == "Scissors")
            {
                homeHeader.innerText = "You tied";
                yourPic.src = "./assets/scissors.jpg"
                cpuPic.src = "./assets/scissors.jpg"
            }
            else
            {
                homeHeader.innerText = "Player 2 wins!";
            }
        }

    else if (player1Pick == "Lizard")
    {
        resultsMulti.classList.toggle('hide');
        resultsMulti.classList.toggle('resultsDesign');
        resultsMulti.classList.toggle('finalPictures');
        resultsMultiDisplay.classList.toggle('hide');
        localGrid.classList.toggle('hide');
        if (player2Pick == "Paper" || player2Pick == "Spock")
        {
            homeHeader.innerText = "Player 1 wins!!!!";
            yourPic.src = "./assets/lizard.jpg"
            results.classList.toggle('finalPictures');
            if (player2Pick == "Paper")
            {
                cpuPic.src = "./assets/paper.jpg"
            }
            else if (player2Pick == "Spock")
            {
                cpuPic.src = "./assets/spock.jpg"
            }
        }
        else if (player2Pick == "Lizard")
        {
            homeHeader.innerText = "You tied";
            yourPic.src = "./assets/lizard.jpg"
            cpuPic.src = "./assets/lizard.jpg"
        }
        else
        {
            homeHeader.innerText = "Player 2 wins!";
        }
    }

    else if (player1Pick == "Spock")
        {
            resultsMulti.classList.toggle('hide');
            resultsMulti.classList.toggle('resultsDesign');
            resultsMulti.classList.toggle('finalPictures');
            resultsMultiDisplay.classList.toggle('hide');
            localGrid.classList.toggle('hide');
            if (player2Pick == "Rock" || player2Pick == "Scissors")
            {
                homeHeader.innerText = "Player 1 wins!!!!";
                yourPic.src = "./assets/spock.jpg"
                // results.classList.toggle('finalPictures');
            if (player2Pick == "Rock")
            {
                cpuPic.src = "./assets/rock.jpg"
            }
            else if (player2Pick == "Scissors")
            {
                cpuPic.src = "./assets/scissors.jpg"
            }
            }
            else if (player2Pick == "Spock")
            {
                homeHeader.innerText = "You tied";
                yourPic.src = "./assets/spock.jpg"
                cpuPic.src = "./assets/spock.jpg"
            }
            else
            {
                homeHeader.innerText = "Player 2 wins!!!";
            }
        }
        player1Turn = false;
        player2Turn = false;
}

async function ThreeWinMulti(player1Pick, player2Pick) {

    if (currentRound >= maxRounds)
    {
        if (player1Score > player2Score)
            {
                homeHeader.innerText = "Player 1 wins!";
            }
            else if (player2Score > player1Score)
            {
                homeHeader.innerText = "Player 2 wins!"; //change cpu to player2 and player to player1
            }
            else 
            {
                homeHeader.innerText = "Oh it's a draw :/";
            }
            return;
    }
    

    if (player1Pick == "Rock")
    {
        

        if (player2Pick == "Lizard" || player2Pick == "Scissors")
        {
            player1Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else if (player2Pick == "Rock")
        {
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else
        {
            player2Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            
        }
    }

    else if (player1Pick == "Paper")
    {
        
        if (player2Pick == "Rock" || player2Pick == "Spock")
        {
            player1Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else if (player2Pick == "Paper")
        {
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else
        {
            player2Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
    }

    else if (player1Pick == "Scissors")
        {
            
            if (player2Pick == "Paper" || player2Pick == "Lizard")
            {
                player1Score++;
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
            else if (player2Pick == "Scissors")
            {
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
            else
            {
                player2Score++;
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
        }

    else if (player1Pick == "Lizard")
    {
        
        if (player2Pick == "Paper" || player2Pick == "Spock")
        {
            player1Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else if (player2Pick == "Lizard")
        {
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
        else
        {
            player2Score++;
            player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
            player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
        }
    }

    else if (player1Pick == "Spock")
        {
            
            if (player2Pick == "Rock" || player2Pick == "Scissors")
            {
                player1Score++;
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
            else if (player2Pick == "Spock")
            {
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
            else
            {
                player2Score++;
                player1ScoreDisplay.innerText = "Player 1 score: " + player1Score;
                player2ScoreDisplay.innerText = "Player 2 score: " + player2Score;
            }
            return;
        }

        if (player1Score == victory)
        {
            homeHeader.innerText = "Player 1 wins!!!!";
            resultsMultiDisplay.classList.toggle('hide');
            resultsMultiDisplay2.classList.toggle('hide');
            advice2.classList.toggle('hide');
            return;
        }
        else if (player2Score == victory)
        {
            homeHeader.innerText = "Player 2 wins!!!!";
            resultsMultiDisplay.classList.toggle('hide');
            resultsMultiDisplay2.classList.toggle('hide');
            advice2.classList.toggle('hide');
            return;
        }

        currentRound++;

        currentRoundDisplay.innerText = "Rounds Passed: " + currentRound;

        if (currentRound === maxRounds)
        {
            if (player1Score > player2Score)
            {
                homeHeader.innerText = "Player 1 wins!";
                resultsMultiDisplay.classList.toggle('hide');
                resultsMultiDisplay2.classList.toggle('hide');
                advice2.classList.toggle('hide');
            }
            else if (player2Score > player1Score)
            {
                homeHeader.innerText = "Player 2 wins!";
                resultsMultiDisplay.classList.toggle('hide');
                resultsMultiDisplay2.classList.toggle('hide');
                advice2.classList.toggle('hide');
            }
            else 
            {
                homeHeader.innerText = "Oh it's a draw :/";
                resultsMultiDisplay.classList.toggle('hide');
                resultsMultiDisplay2.classList.toggle('hide');
                advice2.classList.toggle('hide');
            }
        }

        player1Pick = "";
        player2Pick = "";

        player1Turn = false;
        player2Turn = false;


}

rockPic.addEventListener('click', () => {
    if (gamestageCPU)
    {
        SingleGame("Rock");
    }
    else if (gamestageCPU5)
    {
        ThreeWin("Rock")
    }
    else if (gamestageCPU7)
    {
        FiveWin("Rock");
    }
})

paperPic.addEventListener('click', () => {
    if (gamestageCPU)
    {
        SingleGame("Paper");
    }
    else if (gamestageCPU5)
    {
        ThreeWin("Paper");
    }
    else if (gamestageCPU7)
    {
        FiveWin("Paper");
    }
})

scissorsPic.addEventListener('click', () => {
    if (gamestageCPU)
    {
        SingleGame("Scissors");
    }
    else if (gamestageCPU5)
        {
            ThreeWin("Scissors");
        }
    else if (gamestageCPU7)
    {
        FiveWin("Scissors");
    }
})

lizardPic.addEventListener('click', () => {
    if (gamestageCPU)
    {
        SingleGame("Lizard");
    }
    else if (gamestageCPU5)
        {
            ThreeWin("Lizard");
        }
    else if (gamestageCPU7)
    {
        FiveWin("Lizard");
    }
})

spockPic.addEventListener('click', () => {
    if (gamestageCPU)
    {
        SingleGame("Spock");
    }
    else if (gamestageCPU5)
        {
            ThreeWin("Spock");
        }
    else if (gamestageCPU7)
    {
        FiveWin("Spock");
    }
})

rockp1.addEventListener('click', () => {
    player1Pick = "Rock";
    player1Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

rockp2.addEventListener('click', () => {
    player2Pick = "Rock";
    player2Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

paperp1.addEventListener('click', () => {
    player1Pick = "Paper";
    player1Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

paperp2.addEventListener('click', () => {
    player2Pick = "Paper";
    player2Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

scissorsp1.addEventListener('click', () => {
    player1Pick = "Scissors";
    player1Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

scissorsp2.addEventListener('click', () => {
    player2Pick = "Scissors";
    player2Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

lizardp1.addEventListener('click', () => {
    player1Pick = "Lizard";
    player1Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

lizardp2.addEventListener('click', () => {
    player2Pick = "Lizard";
    player2Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

spockp1.addEventListener('click', () => {
    player1Pick = "Spock";
    player1Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})

spockp2.addEventListener('click', () => {
    player2Pick = "Spock";
    player2Turn = true;
    if (player1Turn && player2Turn)
    {
        if (gamestageLocal)
            {
                SingleGameMulti(player1Pick, player2Pick);
            }
        else if (gamestageLocal5)
        {
            ThreeWinMulti(player1Pick, player2Pick) 
        }
    }
    
})