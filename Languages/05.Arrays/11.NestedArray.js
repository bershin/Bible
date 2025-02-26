const board = [
    ['O', null, 'X'],
    [null, 'X', 'O'],
    ['X', 'O', null]
]

console.log(board[1]) // [ null, 'X', 'O' ]
console.log(board[1][2]) // O

// ========================
const namePair = [
    ["raja", ["rani","arasi"]],
    ["veera", "veeri"],
    ["madhan", "madani"]
]

console.log(namePair[0]) // [ 'raja', [ 'rani', 'arasi' ] ]
console.log(namePair[0][1]) // [ 'rani', 'arasi' ]
console.log(namePair[0][1][0]) // rani