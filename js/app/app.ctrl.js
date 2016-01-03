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

    
    //Tax Bracket
    $scope.itemList=[];
    $scope.TaxBracket = $('dropdown_title2').val();
    $scope.TaxBrackets = [{percent: 10}, {percent: 15},{percent: 25},{percent: 28}, {percent:33}, {percent:35}, {percent:39.6}];
    $scope.changedValue=function(item){
    $scope.itemList.push(item.name);
    //Calcualtor Area
    
    $scope.expenses = [];
    
    $scope.expense = {};
    
    $scope.AddExpense = function(){
      
        $scope.expenses.push({
            title: $scope.title,
            amount: $scope.amount
        });
    }
};
    
    $scope.deleteExpense = function(){
        $scope.expenses.splice(this.$index,1);
        
    }
});