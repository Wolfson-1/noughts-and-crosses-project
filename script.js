//Create gameboard
//------------------------
    
    const createGameBoard = (() => {
    
    //creating gameboard values
    let gameValues = ['X','0','X','0','X','0','X','0','X'];

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
    const createPlayer = (name,counter) => {
        //Variable for name
            let playerName = name;
            let playerCounter = counter; 
                    
            //methond to display name
            const getName = () => {
            console.log(playerName);
            };

            const getCounter = () => {
                console.log(playerCounter);
            }

            return {getName, getCounter};
            };

            //query selectors for input values of players
            const player1Name = document.querySelector('#player1Name');
            const player2Name = document.querySelector('#player2Name');
            const createPlayer1 = document.querySelector('.submitPlayer1');
            const createPlayer2 = document.querySelector('.submitPlayer2');
            let player1 = '';
            let player2 = '';

            //Create player1 event listener
            createPlayer1.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                nameInput = player1Name.value;

                player1 = createPlayer(nameInput, 'x');
                console.log(player1);
                player1Name.value = "";
            })
            

            //Create player2 event listener
            createPlayer2.addEventListener('click', (e) => {
                //prevents form submit
                e.preventDefault()
                nameInput = player2Name.value;

                player2 = createPlayer(nameInput, '0');
                player2Name.value = "";
            })


//Allow players to play game & take turns in filling in gameboard
//------------------------

    //Allow players to manipulate dom in grid on click
            //query selector for divs in grid
            const gameBoardDiv = document.querySelector('.gameBoardDiv');
            const gameBoardTiles = gameBoardDiv.querySelectorAll('button');

            //event listener to add symbol to each game tile clicked
            gameBoardTiles.addEventListener('click', (e) => {
                e.innerText = 'Sucess!';
            });

    //setup to take turns in assigning tokens to grid
    //


//Declare winner or draw based off ruleset for noughts & crosses
//------------------------