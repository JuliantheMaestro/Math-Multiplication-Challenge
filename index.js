/*Math Multiplication Challenge*/


let multiTable = [];
let value = 4;
let counter = 0;
let cells = 64;
let rows;


for (let i = 0; i < cells + 1; i++) {
    if (counter % 8 === 0) {
        if (rows != undefined) {
            multiTable.push(rows);
        }
        rows = [];
    }
    counter++;
    let temp = counter;
    rows.push(temp);
}
console.table(multiTable);