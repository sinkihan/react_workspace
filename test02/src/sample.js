


/* let ar = [10,20,30,40,50]

let br = [] */
//문자열 연결 함수
/* ar.concat(60) */
/* 
br = ar.concat(60) */
// ar = ar.concat(60)
/*  */
/*  */
// /*  */console.log(ar);
/*  */
//배열의 특정부분을 뽑아내는 함수
//첫번쨰 인자가 인덱스 시작 지점 두번재 인자 -1 이 인자의 마지막 지점
//여기 끝번호에 배열.length 이렇게 많이 쓴다.
//end - start 이렇게 하면 나오수 인자 갯수가 나온다
/* br=ar.slice(2,4)

console.log(br);

 */


let ar =[10,20,30,40]
//전개 연산자 ar 앞에 ...
//배열이나 객체 안에 
//요소로서 객체 나 배열을 집어 넣지않고
//그 객체나 배열의 요소들을 각각 집어 넣는것
//콘켓 대신 쓸수 있음
function f1(){
    return{
        a:10,b:20
    } 
    
}



let br =[50,...ar,60]
const obj1 = {
a:10,
b:20
}
const obj2 = {
d:40,
...obj1,
e:50
}

//이거 솔찍이 처음보면 답도없음
//
const obj3 ={   
    ...f1(),
    c:30,
    d:40,
}


// console.log(obj3);


// console.log(br);

const cr=[10,20,30]
//비구조화 할당
const [x,y,z]=cr

console.log(x);
console.log(y);
console.log(z);

const obj4 ={
    a:10,
    b:20,
    c:30,
}


/* const {
    a,c=obj4
} */