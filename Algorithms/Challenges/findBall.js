/*
    Throw ball into box
    If the current position is out of bounds, return -1
    If the ball tries to move left when it is at the left most column, or right at the right most column, return -1 
    Otherwise check value at the adjacent column
        If the adjacent column has the oposite value then we hit a V and get stuck
        Otherwise move down to the next row
    Repeat until we fall out the bottom of the box or get stuck
*/

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
        /*
            Each position is either 1 or -1
            1 = move right
            -1 = move left
        */
        if (grid[row][col] === 1){
            /*
                First check that we haven't hit the right most column, if we have we cannot continue moving down right, thus we return -1
                If we're not at the right most column...
                ...check the value of the column right of the current column, if it's -1 then we've hit a V and gotten stuck
                Otherwise we can move diagonally down right to the next row
                Repeat each time we hit a column with the value of 1
            */
            if (col === cols - 1 || grid[row][col+1] === -1) return -1; // If the ball is at the right most column, or hits a V, it's stuck
            console.log("MOVE DOWN RIGHT: ", col+1)
            return col + 1; // Otherwise move down right
        }else{
            /*
                First check that we haven't hit the left most column, if we have we cannot continue moving down left
                If we're not at the left most column...
                ...check the value of the column lecft our the current column, if it's 1 then we've hit a V and gotten stuck
                Otherwise we move diagonally down left to the next row
                Repeat each time we hit a column with the value of -1
            */
            if (col === 0 || grid[row][col-1] === 1) return -1; // If the ball is at the left most column, or hits a V, it's stuck 
            
            console.log("MOVE DOWN LEFT: ", col-1)
            return col - 1; // Otherwise move down left
        }
    };

    for(let col = 0; col < cols; col++){ 
        let pos = col; // Current column

        for(let row = 0; row < rows; row++){
            pos = getPosition(row, pos); // Returns either positive number (falling) or -1 (stuck)
            if (pos === -1){
                console.log("Ball got stuck!")
                break; // Ball got stuck
            }
        }

        result.push(pos); // Ball is still falling
    }
    return result; // Ball fell through the bottom, return array with path out of box
}

console.log(findBall(grid));