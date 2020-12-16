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

### 7.1. prototype이 필요한 이유
생성자 함수를 통해 객체를 생성할때마다 해당 객체의 속성을 메모리에 할당하게 되어 많은 메모리를 사용하게 됩니다.
하지만 프로토타입을 통해 정의함으로서 모든 객체들이 참조하여 사용할 수 있고 메모리도 효율적으로 사용할 수 있습니다.
메소드의 재정의가 필요한 경우 따로 커스터마이징이 가능해 유지보수에도 이점이 있습니다.

### 7.2. prototype을 이용해서 재사용성을 높이기
자바스크립트는 메소드를 호출 할 때 객체에 메소드가 있는지 찾고, 객체 내에 호출한 메소드가 없을 때 프로토타입에서 메소드를 찾습니다.
```
function Person(name, first, second){
    this.name = name,
    this.first = first,
    this.second = second
}
Person.prototype.sum = function(){
    return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum());
```

### 8.1. Classes
다른 컴퓨터 언어들에서 객체를 생성하는 기능으로 class라는 기능이 존재했지만 자바스크립트에서는 없었고 ES6에서 추가되었습니다. IE 브라우저에서 미지원 하지만 기존의 자바스크립트를 기반으로 새롭게 추가된 기능이기 때문에 바벨을 통해 컴파일러하여 미지원 브라우저에서도 사용 가능합니다.

### 9. Class의 constructor function
객체를 생성할 때 초기 속성 값들을 지정해주는 방법으로 class 안에 constructor 함수를 사용합니다. class 안에서 function 은 생략해서 작성합니다.
```
class Person{
    constructor(name, first, second){
        this.name = name,
        this.first = first,
        this.second = second;
        console.log('constructor');
    }
}

var kim = new Person('kim', 10, 20);
console.log('kim', kim);
```

### 10. 메소드 구현
class 안에 메소드를 정의하여 프로토타입과 같이 사용할 수 있습니다.
```
class Person{
    constructor(name, first, second){
        this.name = name,
        this.first = first,
        this.second = second;
        console.log('constructor');
    }
    sum (){
        return 'prototype : ' + (this.first + this.second);
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10);

console.log("kim.sum()", kim.sum()); 
console.log("lee.sum()", lee.sum());
```

### 11. 상속
class 에서 extends를 통해 상속을 사용할 수가 있습니다. 상속을 통해 중복되는 코드를 생략 할 수 있습니다. 
새로운 기능을 추가하고 싶을 때 부모 class(원본)를 건드리지 않고 자식 class를 생성하여 새로운 메소드를 추가 할 수 있어 안전합니다. 
부모 class를 수정하여 모든 자식 class들도 수정할 수 있어 효율적입니다.
```
class Person{
    constructor(name, first, second){
        this.name = name,
        this.first = first,
        this.second = second;
    }
    sum (){
        return this.first + this.second;
    }
}
class PersonPlus extends Person{
    avg (){
        return (this.first + this.second) / 2;
    }
}

var kim = new PersonPlus('kim', 10, 20);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
```

### 12. super
super() 괄호가 있는 경우 부모 class의 생성자, super 괄호가 없는 경우는 부모 class 자체를 뜻한다.
supper가 없는 경우 자식 class에서 부모 class가 가진 기능에 새로운 것을 추가 할 때 부모class를 다시 작성해야되는 문제점이 발생하여
상속이 가지는 이점이 사라지게 됩니다.
```
class Person{
    constructor(name, first, second){
        this.name = name,
        this.first = first,
        this.second = second;
    }
    sum (){
        return this.first + this.second;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second)
        this.third = third;
    }
    sum (){
        return super.sum() + this.third;
    }
    avg (){
        return (this.first + this.second + this.third) / 3;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());
```

### 13.1. object inheritance
자바스크립트에서는 객체가 다른 객체를 상속 받을 수도 있고 상속 관계를 바꿀 수도 있습니다.
객체를 연결해주는 것을 prototype link, prototype link가 가르키는 객체를 prototype object 라고 부릅니다. 

### 13.2. __proto__
객체가 다른 객체를 상속 받을 수 있도록 해줍니다. __proto__를 통해 값을 참조만 하기 때문에 값을 변경하여도 prototype object는 변하지 않습니다.
```
var superObj = {superVal : 'super'}
var subObj = {subVal : 'sub'}

subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
```

### 13.3. Obejct.create()
객체끼리를 연결할 때 __proto__를 사용하는것보다 Object.create()를 통해 동일한 기능을 사용할 수 있고 표준이기 때문에 권장합니다.
```
var superObj = {superVal : 'super'}
// var subObj = {subVal : 'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);
```

### 13.4. 객체상속의 사용
```
var kim = {
    name : 'kim',
    first : 10, second : 20,
    sum: function(){
        return this.first + this.second
    }
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first + this.second) / 2;
}
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());
```

### 14.1. 객체와 함수

### 14.2. call
모든 함수는 call() 메소드를 가지고 있고 call()은 실행 될 때 첫번째 인자를 함수의 this 로 지정해주고 함수에 매개변수가 있는 경우 두번째 인자부터 인자값으로 받습니다.
```
var kim = {name : 'kim',first : 10,second : 20}
var lee = {name : 'lee',first : 10,second : 10}
function sum(prefix){
    return prefix + (this.first + this.second);
}
// sum();
console.log('sum.call(kim)', sum.call(kim, '=> ')); // apply
console.log('sum.call(lee)', sum.call(lee, ': ')); 
```

### 14.3. bind
call과 같이 함수의 this를 지정하지만 bind는 내부적으로 사용 될 this값을 지정한 새로운 함수를 생성합니다.
```
var kim = {name : 'kim',first : 10,second : 20}
var lee = {name : 'lee',first : 10,second : 10}
function sum(prefix){
    return prefix + (this.first + this.second);
}
// sum();
console.log('sum.call(kim)', sum.call(kim, '=> ')); // apply
console.log('sum.call(lee)', sum.call(lee, ': ')); 

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
```