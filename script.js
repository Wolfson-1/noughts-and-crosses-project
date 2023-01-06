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

            }});



//Allow players to play game & take turns in filling in gameboard
//------------------------

    //Allow players to manipulate dom in grid on click
            //query selector for divs in grid

            const gameplayFunc = (() => {
            // Which players turn is it? (CHANGE THIS TO BE DYNAMIC FOR PLAYER ONES CHOICE)
            let turn = 'X';
            
            //Selector for Turn div
            const playerTurnDisplay = document.querySelector('.playerTurnDisplay');
            playerTurnDisplay.innerText = `It is ${turn}'s go`;
            

            //Change turn function
            const whoseTurn = () => {
                    if (turn == 'X') {
                            turn = '0';
                    } else if (turn == '0') {
                            turn = 'X';
                    };
            };
           
            //Event listener to add symbol to each game tile clicked based on turns
            for (let i = 0; i < 9; i++) {
            const gameTiles = [];
            gameTiles[i] = document.querySelector(`.square${i}`); 
            
            gameTiles[i].addEventListener('click', (e) => {
                if (gameTiles[i].innerText != '') {
                    alert('Square already taken!');
                } else {
                console.log(turn);
                gameTiles[i].innerText = turn;
                whoseTurn();
                playerTurnDisplay.innerText = `It is ${turn}'s go`;
            }});

            };
        })();


//Declare winner or draw based off ruleset for noughts & crosses
//------------------------