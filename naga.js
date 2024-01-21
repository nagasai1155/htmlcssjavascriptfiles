//map method practice

// var arr = [2000,2002,2003,1000,5000];
//  var res = arr.map((ele,index,array)=>{ //fat arrow function
//     var a = ele + 1;
//     return a;
// })
// console.table(arr);
// console.table(res);


//for each  method 

// var array = [10000,20000,30000,40000,50000,60000,70000,80000];//on every salary 50% decrease print remaing salary

//   let x = array.forEach(Print);
//  function Print(ele,index,arr){
//        let increae = ele *4;
//        array[index] = increae;
//  }

//  console.table(array);

  

//set data type in java script

//it stores a unique values 
  

//filter method

// let a1 = [2,4,6,1,3,7];
// let a2 = a1.filter((ele)=>{
//     return ele%2==1;
// })
// console.log(a1);
// console.log(a2);

// console.log("map method");


//difference between filter and map method

// let n1 = [2,4,6,1,3,7];

// let n2 = n1.map((ele)=>{
//    let x = ele*2;
//    return x;
// })

// console.log(n1);
// console.log(n2);


//reduce method

// let array = [3,3,2];
// let res = array.reduce((acc,ele)=>{
// return acc + ele;
// },array[0])
// console.log(res);

//find method

// let arr = [1,4,2,5,2];
//   let x =arr.every((ele)=>{
//     console.log(ele);
//     return ele%2===0;
//   })
// console.log(x);

//spread operator

// let arr = [2,4,1,4];

// console.log(arr);
// console.log(...arr);

//for each method

// let arr =[1,2,3,4];
//  let xarray = arr.map((ele,index)=>{
//    let res = ele*2;
  
//     return res;
// })

// console.log(arr);
// console.log(xarray);

//rest parameter

//  function product(n,m,...rest){
//     let result = n*m;
//     for(e of rest){
//         result = result *e;
//     }
//     return result;
//  }
//  let fnal = product(2,3,4,5)
//  console.log(fnal);


//spread operator uses on the arrays 

let arraya = [2,4,2,5,2];
// console.log(arraya);

// console.log(...arraya);

// let arrayb = [2,4,2,5,2];

// console.log(arrayb);

// let arrayc = [...arraya,45,54, ...arrayb];

// console.log(arrayc);
// console.log(...arrayc);

//  function add(a,a1,a2,a3,a4){
//     let result = a+a1+a2+a3+a4
//     return result;
// }
// let x = add(...arraya);
// console.log(x);
//

//callback function
// function first(a,b){
//     return a+b;
// }
// function second(a,b){
//     return a-b;

// }

// function third(a,b){
//     console.log( a*b);
// }
// function fourth(a,b){
//     return a/b;
// }
// function calculator(num,num1,operation){
//     operation (num,num1);
// }

// // calculator(6,4,first);
// // calculator(4,4,second);
// // calculator(3,4,fourth);
// // calculator(3,4,third);



// //higher order functions 
// let array = [1,2,3,4,5]
// function squares(num){
//     return num*num

    
// }
// function minisquares(num){
//     return (num+1);
// }




// function MainOperation(arr,operation){
//     let mainarray = [];
//     for(ele of arr){
//        let x =  operation(ele)
//        mainarray.push(x);
//     }
//     return mainarray;
// }

// let finalmain = MainOperation(array,squares)
// console.log(finalmain);
// let finalmain1 = MainOperation(array,minisquares);
// console.log(finalmain1)

// function adding(arr){
//     let addingArray = [];
//     for(ele of arr){
//     let x = addingArray.push((ele + 5));
//     }
// return addingArray;
// }

// let final = adding(array);
// console.log(final);


//    let sqa = squares(array);
//    console.log(sqa);



// function cubes(arr1){
//    let cubeArray = [];
//    for(ele of arr1){
//     let temp = ele*ele*ele;
//     cubeArray.push(temp);
//    }
//    return cubeArray;
// }

// let cuba = cubes(array);
// console.log(cuba);

//closure in js


//     function updateCounter(){
//         let count =0;
//         function inner(){
//             count=count+1;
//             console.log(count);
//             let p = document.getElementById('co');
//             p.innerText= `clicked:${count}`;
//         }
//         return inner;
//     }
//     let final= updateCounter()
//   let dog= updateCounter();
//    dog();
//    dog();
//    dog();


//Date method or function constructor;

let d1 = new Date();
console.log(d1);