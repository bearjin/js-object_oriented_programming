var memberArray = ['wj', 'jh', 'jy'];
console.log("memberArray[0]", memberArray[0]);

var memberObject = {
    manager : 'wj',
    developer: 'jh',
    designer: 'jy'
}
memberObject.designer = 'yj'
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
delete memberObject.manager
console.log("delete memberObject.manager", memberObject.manager);

