/*Math Multiplication Challenge*/


let multiTable = [];
let value = 15;

for (let i = 0; i < value + 1; i++) {
    const temp = [];
    for (let j = 0; j < value + 1; j++) {
        temp.push(i*j);
    }
    multiTable.push(temp);
};

console.table(multiTable);