angular.module('mainApp').controller('GPACtrl', function(){
    var GPACtrl = this;
    console.log("GPA controller loaded.");

    GPACtrl.textField = "";
    GPACtrl.gradeField = "";
    GPACtrl.creditField = "";

    GPACtrl.currentGPA = 3.0;

    var classObject = {
        classname:"",
        grade:"",
        credits:""
    };

    GPACtrl.data = [

    ];

    GPACtrl.addData = function(){
        console.log(GPACtrl.textField);

        if(GPACtrl.textField.length < 1 || GPACtrl.gradeField.length < 1 || GPACtrl.creditField.length < 1) {
            alert("Please fill all fields!");
            return;
        }

        if(GPACtrl.textField.length >= 1 && GPACtrl.gradeField.length >= 1 && GPACtrl.creditField.length >= 1) {
            GPACtrl.data.push({classname: GPACtrl.textField, grade: GPACtrl.gradeField, credits: GPACtrl.creditField});
            GPACtrl.textField = "";
            GPACtrl.gradeField = "";
            GPACtrl.creditField = "";
        }

        GPACtrl.currentGPA = calcGPA(GPACtrl.data);


    };

    GPACtrl.removeData = function(index){
        GPACtrl.data.splice(index, 1);
    };

    GPACtrl.itemsInList = function(){
        return GPACtrl.data.length;
    };

    var gradeLetterConverter = function(str){
        if (str == "A") {
            return 4.00;
        } else if(str == "A-"){
            return 3.67;
        } else if(str == "B+") {
            return 3.33;
        } else if(str == "B") {
            return 3.00;
        } else if(str == "B-") {
            return 2.67;
        } else if(str == "C+") {
            return 2.33;
        } else if(str == "C") {
            return 2.00;
        } else if(str == "C-") {
            return 1.67;
        } else if(str == "D+") {
            return 1.33;
        } else if(str == "D") {
            return 1.00;
        } else if(str == "D-") {
            return 0.67;
        } else if(str == "F") {
            return 0.00;
        } else {
            return "Error, invalid grade entry";
        }

    }

    var calculateGPA = function(dataarray){
        var gradeOne = gradeLetterConverter(grade1);
        var gradeTwo = gradeLetterConverter(grade2);
        var gradeThree = gradeLetterConverter(grade3);
        //return "Grade1 " + gradeOne + "Grade2 " + gradeTwo + "Grade3 " + gradeThree + "Credit1 " + credit1 + "Credit2 " + credit2 + "Credit3 " + credit3;
        return "Your GPA is " + (((gradeOne * parseInt(credit1)) + (gradeTwo * parseInt(credit2)) + (gradeThree * parseInt(credit3))) / (parseInt(credit1) + parseInt(credit2) + parseInt(credit3))).toFixed(2);

    }

    var calcGPA = function(dataarray) {
        var creditCount = 0;
        var cumGrade = 0;

        dataarray.forEach(function(data){
            creditCount += data.credits;
            cumGrade += data.credits * gradeLetterConverter(data.grade);
        });
        console.log(cumGrade / creditCount);
        return cumGrade / creditCount;
    }

});