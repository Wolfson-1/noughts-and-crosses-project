//Create 
//------------------------
    
    const createGameBoard = (() => {
    
    //creating gameboard values
    let gameValues = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    //loop through creating dom elements for grid
        for(i = 0; i < 9; i++) {
        const gameBoardDiv = document.querySelector('.gameBoardDiv');
        const newDiv = document.createElement('button');
        newDiv.classList.add(`square${i}`);
        newDiv.style.borderstyle = 'solid';
        
        //assign array values to grid values. 
        newDiv.innerText = gameValues[i]    
        gameBoardDiv.appendChild(newDiv);
    };

    return {gameValues}

    })();



//Allow players to play game & take turns in filling in gameboard
//------------------------



    //Allow players to manipulate dom in grid on click
            //query selector for divs in grid

            const gameplayFunc = (() => {

            //Create players
//---------------------
   
    
        //Factory function to create players
    const createPlayer = (counter) => {
        //Variable for name
            let playerCounter = counter;

            const getCounter = () => {
                console.log(playerCounter);
            }

            return {getCounter};
            };

            //query selectors for input values of players
            const player1X= document.querySelector('.player1X');
            const player10 = document.querySelector('.player10');
            const player2X= document.querySelector('.player2X');
            const player20 = document.querySelector('.player20');

            //query selectors for players assigned token value
            let playerOneToken = document.querySelector('.playerOneToken');
            let playerTwoToken = document.querySelector('.playerTwoToken');

            //Restart button query selector
            const restartGameButton = document.querySelector('.restartButton');

            let player1 = '';
            let player2 = '';

            //Player Select Token event listeners 
            player1X.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                if (player1 != "") {
                    alert('Tokens already selected!');
                } else {

                player1 = createPlayer('X','One');
                console.log(player1);
                playerOneToken.innerText = 'X'

                player2 = createPlayer('0','Two');
                console.log(player2);
                playerTwoToken.innerText = '0'

                setFirstTurn();
            }});

            player10.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                if (player1 != "") {
                    alert('Tokens already selected!');
                } else {

                player1 = createPlayer('0');
                console.log(player1);
                playerOneToken.innerText = '0'

                player2 = createPlayer('X');
                console.log(player2);
                playerTwoToken.innerText = 'X'

                setFirstTurn();

            }});

            player2X.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                if (player2 != "") {
                    alert('Tokens already selected!');
                } else {

                player1 = createPlayer('0');
                console.log(player1);
                playerOneToken.innerText = '0'

                player2 = createPlayer('X');
                console.log(player2);
                playerTwoToken.innerText = 'X'

                setFirstTurn();

            }});

            player20.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                if (player2 != "") {
                    alert('Tokens already selected!');
                } else {

                player1 = createPlayer('X');
                console.log(player1);
                playerOneToken.innerText = 'X'

                player2 = createPlayer('0');
                console.log(player2);
                playerTwoToken.innerText = '0'
               
                setFirstTurn();

            }});

            //Restart game button event listener to clear board
            restartGameButton.addEventListener('click', () => {

                player1 = '';
                player2 = '';

                for (let i = 0; i < 9; i++) {
                const gameTiles = [];
                gameTiles[i] = document.querySelector(`.square${i}`); 
                gameTiles[i].innerText = '';
                createGameBoard.gameValues[i] = '';
                }
            })

            // Which players turn is it? ----------
            let turn = '';
            const playerTurnDisplay = document.querySelector('.playerTurnDisplay');
            playerTurnDisplay.innerText = `It is ${turn}'s turn`;

            const setFirstTurn = () => {
                    turn = playerOneToken.innerText 

                    //Selector for Turn div
                    const playerTurnDisplay = document.querySelector('.playerTurnDisplay');
                    playerTurnDisplay.innerText = `It is ${turn}'s turn`;
            };
            

            //Change turn function ----------------------------------
            const whoseTurn = () => {
                    if (turn == 'X') {
                            turn = '0';
                    } else if (turn == '0') {
                            turn = 'X';
                    };
            };

            //Check for win funciton -------------------------------------
            const winChecker = () => {
            let xWins = []
            let oWins = []
            
            //Creates clean array to check for win of X counters
            for(let i = 0; i<9; i++) {
                if (createGameBoard.gameValues[i] == "X") {
                    xWins.push(i);
                }
            };

            //Creates clean array to check for win of 0 counters
            for(let i = 0; i < 9; i++) {
                if (createGameBoard.gameValues[i] == '0') {
                    oWins.push(i);
                }
            };

            console.log(xWins)
            console.log(oWins)

            const winningCasesArray = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];
            
            //loop to check if X has won
            for(let i = 0; i < winningCasesArray.length; i++ ) {
                
                let a = winningCasesArray[i][0]
                let b = winningCasesArray[i][1]
                let c = winningCasesArray[i][2]

                let aTrue = xWins.some((item) => {
                    return item == a})
                let bTrue = xWins.some((item) => {
                    return item == b})
                let cTrue = xWins.some((item) => {
                    return item == c})

                if(aTrue == true && bTrue == true && cTrue == true) {
                    alert('X Wins!!')
                }

            }

            //loop to check if 0 has won
            for(let i = 0; i < winningCasesArray.length; i++ ) {
                
                let a = winningCasesArray[i][0]
                let b = winningCasesArray[i][1]
                let c = winningCasesArray[i][2]

                let aTrue = oWins.some((item) => {
                    return item == a})
                let bTrue = oWins.some((item) => {
                    return item == b})
                let cTrue = oWins.some((item) => {
                    return item == c})

                if(aTrue == true && bTrue == true && cTrue == true) {
                    alert('0 Wins!!')
                }

            }


            };
           
            //Event listener to add symbol to each game tile clicked based on turns ------------------------
            for (let i = 0; i < 9; i++) {
            const gameTiles = [];
            gameTiles[i] = document.querySelector(`.square${i}`); 
            
            gameTiles[i].addEventListener('click', (e) => {
                if (player1 == '') {
                    alert(`Select counter's first!`);
                } else if (gameTiles[i].innerText != '') {
                    alert('Square already taken!');
                } else {
                gameTiles[i].innerText = turn;
                createGameBoard.gameValues[i] = turn;
                whoseTurn();
                playerTurnDisplay.innerText = `It is ${turn}'s go`;
                winChecker()
            }});
            };

            return {player1}

        })();


//Declare winner or draw based off ruleset for noughts & crosses
//------------------------