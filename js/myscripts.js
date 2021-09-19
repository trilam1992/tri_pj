// JavaScript source code
function displayJavaMsg() {
    alert("Java is an OOP programming language." + '\n' + "Java creates applications that run in a virtual machine or browser."+
                    '\n' + "Java code needs to be compiled.");
}

function displayJavaScriptMsg() {
    alert("Java Script is an OOP scripting language." + '\n' + "JavaScript resides inside HTML documents, and can provide levels of interactivity to web pages that are not achievable with simple HTML." +
        '\n' + "JavaScript code is run on a browser only." +
        '\n' + "JavaScript code are all in text.");
}

function Message(variable){

    if (variable == "JavaScript") {

        alert("Java Script is an OOP scripting language." + '\n' + "JavaScript resides inside HTML documents, and can provide levels of interactivity to web pages that are not achievable with simple HTML." +
        '\n' + "JavaScript code is run on a browser only." +
        '\n' + "JavaScript code are all in text.");

    } else {

        alert("Java is an OOP programming language." + '\n' + "Java creates applications that run in a virtual machine or browser." +
        '\n' + "Java code needs to be compiled.");

    }

}

function ContactHours() {

    var hours = prompt("Please enter your weekly class contact hours:");
    alert("Here is your class contact hours for each semester:" + '\n' + '\n' + hours*12 + " hours");
}

function Marks() {
    var marks = prompt("Please insert your marks between 0 and 100:");
                
    alert("Here is your Grades:" + '\n' + '\n' + " with " + marks + " You get " + Grades(marks));
}

function Grades(marks) {
                
    if (marks >= 0 & marks < 50) {
        return "NN";
    }else if (marks>=50 & marks <60){ 
        return "PA";
    } else if (marks >= 60 & marks < 70) {
        return "CR";
    } else if (marks >= 70 & marks < 80) {
        return "DI";
    } else if (marks >= 80) {
        return "NN";
    } else {
        return "Unidentified";
    }
}


