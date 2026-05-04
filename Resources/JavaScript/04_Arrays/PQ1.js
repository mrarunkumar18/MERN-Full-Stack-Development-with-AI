//Qs1. For a given array with marks of students -> [85, 97, 44, 37, 76, 30] Find the average marks of the entire class 

let marks_students = [85, 97, 44, 37, 76, 30];

// let sum = 0;
// for ( i=0; i<marks_students.length; i++){
//     sum =sum + marks_students[i];
// }

// let avg = sum / marks_students.length;
// console.log(avg);


let sum = 0;

for (let val of marks_students){
    sum = sum + val;

}
console.log(sum);       // 371

let avg = sum / marks_students.length;
console.log(`avrage marks of the class = ${avg}`);


