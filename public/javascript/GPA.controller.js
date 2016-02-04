angular.module('stdControllers').controller('GPACtrl', function(){
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

        if(GPACtrl.textField.length >= 1) {
            GPACtrl.data.push({classname: GPACtrl.textField, grade: GPACtrl.gradeField, credits: GPACtrl.creditField});
            GPACtrl.textField = "";
        }

    };

    GPACtrl.removeData = function(index){
        GPACtrl.data.splice(index, 1);
    };

    GPACtrl.itemsInList = function(){
        return GPACtrl.data.length;
    };
});