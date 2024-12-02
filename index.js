document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key was pressed!");
        final();
    }
});

function final() {

    console.log("SGPA Calculation Started");
    var totalCredit = 0;
    let sumOfCreditAndGrade = 0;

    for (var i = 1; i < 11; i++) {
        var credit = Number(document.getElementById(i).value);
        // if (!credit) {
        //     alert("Please fill all inputs");
        //     return;
        // }
        totalCredit += credit;

        var gradePoint = document.getElementById(i + 10).value;
        // if (!gradePoint) {
        //     alert("Please fill all inputs");
        //     return;
        // }

        switch (gradePoint.toUpperCase()) {
            case 'A+':
                sumOfCreditAndGrade += (credit * 10);
                break;
            case 'A':
                sumOfCreditAndGrade += (credit * 9);
                break;
            case 'B+':
                sumOfCreditAndGrade += (credit * 8);
                break;
            case 'B':
                sumOfCreditAndGrade += (credit * 7);
                break;
            case 'C':
                sumOfCreditAndGrade += (credit * 6);
                break;
            case 'D':
                sumOfCreditAndGrade += (credit * 5);
                break;
            case 'E':
                sumOfCreditAndGrade += (credit * 4);
                break;
            case 'F':
                sumOfCreditAndGrade += (credit * 0);
                break;
            // default:
                // alert("Unknown grade: " + gradePoint);
                // return;
        }
    }

    const sgpa = sumOfCreditAndGrade / totalCredit;
    document.getElementById("container").innerHTML = `YOUR SGPA WILL BE: ${sgpa.toFixed(2)}`;
}