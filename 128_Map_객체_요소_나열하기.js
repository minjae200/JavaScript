const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('three', 3);
const keys = map.keys();
// console.log(keys.next().value);
console.log(keys);

map.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다.`);
});