//PQ2. Write a code which can give grade to students according to their scores.
// Grade <=100 && >=90 => A
// Grade <=89 && >=80 => B
// Grade <=79 && >=70 => C
// Grade <=69 && >=60 => D
// Grade <=59 && >=50 => F
// Grade <=49 && >=0 => F


let score;
let grade;
score = prompt("Enter your score");

if (score <= 100 && score >= 90) {
    grade = "A";
} else if (score <= 89 && score >= 80) {
    grade = "B";
} else if (score <= 79 && score >= 70) {
    grade = "C";
} else if (score <= 69 && score >= 60) {
    grade = "D";
} else if (score <= 59 && score >= 50) {
    grade = "E";
} else if (score <= 49 && score >= 0) {
    grade = "F";
}

console.log(" your score is ", score, " your grade is ", grade);
