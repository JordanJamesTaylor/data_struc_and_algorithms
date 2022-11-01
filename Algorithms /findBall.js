grid = [
    [1,1,1,-1,-1],
    [1,1,1,-1,-1],
    [-1,-1,-1,1,1],
    [1,1,1,1,-1],
    [-1,-1,-1,-1,-1]
]

function findBall(grid){
    const rows = grid.length // Total amount rows
    const cols = grid[0].length // Total amount columns
    let result = [];

    const getPosition = function(row, col){
        if(grid[row][col] === 1){
            if(col === cols - 1 || grid[row][col+1] === -1) return -1; // If the ball is at the right most column, or hits a -1, it's stuck
            return col+1; // Otherwise move right
        }else{
            if(col === 0 || grid[row][col-1] === 1) return -1; // If the ball is at the left most column, or hits a 1, it's stuck 
            return col-1; // Otherwise move left
        }
    };

    for(let col = 0; col < cols; col++){ 
        let pos = col; // Current column

        for(let row = 0; row < rows; row++){
            pos = getPosition(row, pos); // Returns either 1 or -1
            if(pos === -1) break; // Ball got stuck
        }

        result.push(pos); // Ball is still falling
    }
    
    return result; // Ball fell through the bottom, return array with path out of box
}

findBall(grid);