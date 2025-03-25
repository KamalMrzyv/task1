let arr = [1, 3, 3, 4, 5, 6, 7, 8, 9];

let YeniArr1 = arr.filter(function(element) { return element < 8; }); console.log(YeniArr1);

let YeniArr2 = arr.map(function(element) { return element * 10; }); console.log(YeniArr2);

let YeniArr3 = arr.some(function(element) { return element > 9; }); console.log(YeniArr3);

let YeniArr4 = arr.every(function(element) { return element < 9; }); console.log(YeniArr4);

let YeniArr5 = arr.filter(function(element) { return element > 3; }); console.log(YeniArr5);
