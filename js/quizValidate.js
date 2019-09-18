var quiz = document.forms[0]; // Form containing the quiz
var noAnswer = new Array(); // Contains questions not answered
var correct = new Array(); // Contains correctly answered questions
var incorrect = new Array(); // Contains incorrectly answered questions

function q1() { // Marks question 1
    
    var q1Validate = 0; // Declaration
    
    for (i = 0; i < quiz.question1.length; i++) { // Loops through all the answers
        if (quiz.question1[i].checked) {
            q1Validate++;
        }
    }
    
    if (q1Validate === 0) { // If no answer given
        noAnswer.push("question1");
    } else if (quiz.question1[0].checked) { // If correct answer given
        correct.push("question1");
    } else {
        incorrect.push("question1");
    }
    
}

function q2() { // Marks question 2
    
    var q2Validate = 0; // Declaration
    
    for (i = 0; i < quiz.question2.length; i++) { // Loops through all answers
        if (quiz.question2[i].checked) {
            q2Validate++;
        }
    }
    
    if (q2Validate === 0) { // If no answer given
        noAnswer.push("question2");
    } else if (quiz.question2[2].checked) { // If correct answer given
        correct.push("question2");
    } else {
        incorrect.push("question2");
    }
    
}

function q3() { // Marks question 3
    
    var q3Validate = 0;
    
    for (i = 0; i < quiz.question3.length; i++) { // Loops through all answers
        if (quiz.question3[i].checked) {
            q3Validate++;
        }
    }
    
    if (q3Validate === 0) { // If no answer given
        noAnswer.push("question3");
    } else if (quiz.question3[1].checked) { // If correct answer given
        correct.push("question3");
    } else {
        incorrect.push("question3");
    }
    
}

function q4() { // Marks question 4
    
    if (quiz.dropDown.selectedIndex === 0) { // If "select an answer" selected
        noAnswer.push("question4");
    } else if (quiz.dropDown.selectedIndex === 2) { // If correct answer selected
        correct.push("question4");
    } else {
        incorrect.push("question4");
    }
    
}

function q5() { // Marks question 5
    
    var q5Validate = 0, // Delclarations
        regExQ51 = /^\s*Client\s*$/i,
        regExQ52 = /^\s*Peer\s*$/i;

    
    for (i = 0; i < quiz.question5.length; i++) { // Loops through all answers
        if (quiz.question5[i].value === "") {
            q5Validate++;
        }
    }
    
    if (q5Validate !== 0) { // If not all boxes filled
        noAnswer.push("question5");
    } else if ((regExQ51.test(quiz.question5[0].value)) && (regExQ52.test(quiz.question5[1].value)) && (regExQ52.test(quiz.question5[2].value))) { // Compares given answers to regular expressions
        correct.push("question5");
    } else {
        incorrect.push("question5");
    }

}

function q6() { // Marks question 6
    
    var regExQ6 = /^\s*Document\s*Object\s*Model\s*$/i; // Declaration
    
    if (quiz.question6.value === "") { // If no answer
        noAnswer.push("question6");
    } else if (regExQ6.test(quiz.question6.value)) { // If matches RegEx
        correct.push("question6");
    } else {
        incorrect.push("question6");
    }
    
}

function q7() { // Marks question 7
    
    var q7Validate = 0; // Declaration
    
    for (i = 0; i < quiz.question7.length; i++) { // Loops through all answers
        if (quiz.question7[i].checked) {
            q7Validate++;
        }
    }
    
    if (q7Validate < 2) { // If less than two answers given
        noAnswer.push("question7");
    } else if (q7Validate > 2) { // If extra answers given
        incorrect.push("question7");
    } else if (quiz.question7[2].checked && quiz.question7[4].checked) { // If correct answers given
        correct.push("question7");
    } else {
        incorrect.push("question7");
    }
    
}

function q8() { // Marks question 8
    
    var q8Validate = 0; // Declaration
    
    for (i = 0; i < quiz.question8.length; i++) { // Loops through all answers
        if (quiz.question8[i].checked) {
            q8Validate++;
        }
    }
    
    if (q8Validate === 0) { // If no answer given
        noAnswer.push("question8");
    } else if (quiz.question8[1].checked) { // If correct answer given
        correct.push("question8");
    } else {
        incorrect.push("question8");
    }
    
}

function q9() { // Marks question 9

    if (quiz.question9.value === "") { // If no answer given
        noAnswer.push("question9");
    } else if (quiz.question9.value === "360") { // If correct answer given
        correct.push("question9");
    } else {
        incorrect.push("question9");
    }
    
}

function q10() { // Marks question 10
    
    var q10Validate = 0;
    
    for (i = 0; i < quiz.question10.length; i++) { // Loops through all answers
        if (quiz.question10[i].checked) {
            q10Validate++;
        }
    }
    
    if (q10Validate === 0) { // If no answer given
        noAnswer.push("question10");
    } else if (quiz.question10[1].checked) { // If correct answer given
        correct.push("question10");
    } else {
        incorrect.push("question10");
    }
    
}

function clearArrays() { // Clears question arrays
    
    correct = [];
    incorrect = [];
    noAnswer = [];
    
}

function allAnswered() { // Asks the user if they want to submit with unanswered questions
    
    if (noAnswer.length > 0) { // If there are unanswered questions
        return (window.confirm('You have not answered all questions, submit anyway?')); // Returns true on ok, no on cancel
    }            
    return true; // Automatically returns true if there are no unanswered questions

}

function mark() { // Colour codes answers and gives a score
    
    for (i = 0; i < correct.length; i++) { // For all correct questions
        document.getElementById(correct[i]).style.borderColor = "darkgreen";
    }
    for (i = 0; i < incorrect.length; i++) { // For all incorrect questions
        document.getElementById(incorrect[i]).style.borderColor = "red";
    }
    for (i = 0; i < noAnswer.length; i++) { // For all unanswered questions
        document.getElementById(noAnswer[i]).style.borderColor = "gold";
    }
    
    window.alert('You got ' + correct.length + ' out of 10 right!'); // Prints the total score in a window
    
    clearArrays();
    
}

$('#submit').click(function () { // Called on pressing the submit button
    
    q1();
    q2();
    q3();
    q4();
    q5();
    q6();
    q7();
    q8();
    q9();
    q10();
    
    if (allAnswered()) { // If submission confirmed
        mark(); // Mark the questions
    } else {
        clearArrays(); // Clear question arrays
    }

});

$('#reset').click(function () { // Called on clicking the reset answers buttons
    
    quiz.reset(); // Reset all elements on the form
    
    for (i = 0; i < quiz.getElementsByTagName("div").length; i++) { // For every questions
        quiz.getElementsByTagName("div")[i].style.borderColor = "white"; // Clear borders
    }

});