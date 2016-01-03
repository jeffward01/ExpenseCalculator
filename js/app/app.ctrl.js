angular.module('app').controller("ExpenseCaclController", function ($scope, $timeout) {

    $scope.Test = "hello"

    //Calculation Mode
    var mode;

    $scope.SalaryMode = function() {
        mode = "Salary";
        alert(mode);
    }

    $scope.HourlyMode = function() {
        mode = "Hourly";
        alert(mode);

    }

    $scope.currentMode = function(x) {
        if (mode == x) {
            return true;
        } else {
            return false;
        }
    }

    
    //Calcualtor Area
    
    $scope.expenses = [];
    
    $scope.expense = {};
    
    $scope.AddExpense = function(){
      
        $scope.expenses.push({
            title: $scope.title,
            amount: $scope.amount
        });
    }



});