const map = new Map();
for (let num of [1,2,3,4,5]) {
    map.set((value) => value * 2, num);
}

for (let [func, value] of map) {
    console.log(func(value), value);
}

const arr = ['one', 'two', 'three', 'two', 'one', 'four'];
const s = new Set(arr);
console.log(s);

console.log(...s);
console.log([...s]);