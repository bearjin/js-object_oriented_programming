# js-object_oriented_programming

## 생활코딩 객체지향 프로그래밍
리액트를 공부하기 전 먼저 선행학습이 필요한 객체 지향 프로그래밍 수업 시작    
객체 == "서로 연관된 변수와 함수를 그룹핑하고 이름을 붙인 것"

### 3.1. 객체의 기본
객체는 중괄호 안에 key : value 형태로 이루어져 있습니다.
```
var memberObject = {
  manager : 'wj',
  developer : 'jh',
  designer: 'jy'
}
```   
객체의 값을 가져오기 위해서는 점표기법가 괄호표기법 두가지 방식이 있습니다.    
점표기법을 통해 값을 불러오지 못하는 경우(ex: 띄어쓰기, 변수) 괄호표기법을 사용해 값을 불러 올 수 있습니다.
```
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
```
객체의 값을 변경하거나 삭제가 필요한 경우에는 아래 방식으로 변경이 가능합니다.
```
// 변경
memberObject.designer = 'yj';
// 삭제
delete memberObject.designer

console.log("memberObject.designer", memberObject.designer);
yj
undefined
```

### 3.2. 객체와 반복문
객체는 반복문을 사용할 수 있고 값 호출 시 점표기법은 변수를 사용할 수 없기 때문에 괄호표기법을 사용해 값을 불러옵니다.
```
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
```

### 4.1. 객체는 언제 쓰나요?
서로 연관된 변수와 함수를 그룹핑하고 정리하여 이름을 붙이고 사용하기 쉽도록 만드는데 쓰입니다.
```
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));
```

### 4.2. 객체 만들어 보기
```
var MyMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.Math.floor(3.9)", MyMath.floor(3.9));
```

### 5. this
메소드가 있을 경우 자신이 속해있는 객체를 가르키는 약속 된 키워드를 this 라고 한다.
```
var kim = {
    name : 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
}
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum()", kim.sum());
```

### 6.1. constructor의 필요성
아래 kim, lee는 같은 형식의 객체지만 수정이 필요한 경우 각각 수정을 해줘야 하는 불편함이 있습니다.
이러한 객체가 수십, 수백개가 되는 경우에 모두를 수정하는건 힘든 일이기 때문에 필요합니다.
```
var kim = {
    name : 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function(){
        return this.first + this.second + this.third;
    }
}
var lee = {
    name : 'kim',
    first: 10,
    second: 10,
    third: 10,
    sum: function(){
        return this.first + this.second + this.third;
    }
}
console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum()); 
```

### 6.2. constructor의 사례
```
var d1 = new Date('2020-12-13');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); 
```

### 6.3. constructor 만들기
new 함수명()은 객체를 생성해주는 생성자 함수라고 부른다.
```
function Person(name, first, second, third){
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}
console.log('new Person()', new Person());

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
```