var memberArray = ['wj', 'jh', 'jy'];
console.group('array loop');
var i = 0;
while (i < memberArray.length){
    console.log(memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager : 'wj',
    developer: 'jh',
    designer: 'jy'
}
console.group('object loop');
for (var name in memberObject) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');