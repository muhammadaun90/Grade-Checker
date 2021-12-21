// Retrieving HTML Elements from the DOM
function submit(){
const marks = document.getElementById('marks').value;
const gradeA1 = "Your gpa : 4  and Grade is A+ Exceptional";
const gradeA  = "Your gpa : 4  and Grade is A Excellent";
const gradeB  = "Your gpa : 3  and Grade is B Good";
const gradeC = "Your gpa : 2.5  and Grade is C Adequate";
const gradeF = "Your gpa : 0  and Grade is F Failure";
const invalid = "Invalid Entry!";
    if (marks <= 100 && marks >=90) {
        document.getElementById("result").innerHTML = gradeA1;
    }
    else if (marks <= 89 && marks >=80) {
        document.getElementById("result").innerHTML = gradeA;
    }
    else if (marks <= 79 && marks >=70) {
        document.getElementById("result").innerHTML = gradeB;
    }
    else if (marks <= 69 && marks >=60) {
        document.getElementById("result").innerHTML = gradeC;
    }
    else if (marks <= 59 && marks >=50) {
        document.getElementById("result").innerHTML = gradeF;
    }
    else {
        document.getElementById("result").innerHTML = invalid;
    }
}
