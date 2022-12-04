//Create gameboard
//------------------------
    
    const createGameBoard = (() => {
    
    //creating gameboard values
    let gameValues = ['X','0','X','0','X','0','X','0','X'];

    //loop through creating dom elements for grid
    for (i = 0; i < 9; i++) {
        const gameBoardDiv = document.querySelector('.gameBoardDiv');
        const newDiv = document.createElement('div');
        newDiv.classList.add(`square${i}`);
        newDiv.style.borderstyle = 'solid';
        
        //assign array values to grid values. 
        newDiv.innerText = gameValues[i]    
        gameBoardDiv.appendChild(newDiv);
    }

    return {gameValues}

    })();


//Create players
//------------------------




//Allow players to play game & take turns in filling in gameboard
//------------------------


//Declare winner or draw based off ruleset for noughts & crosses
//------------------------