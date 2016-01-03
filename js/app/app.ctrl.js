angular.module('app').controller("AppController", function ($scope, $timeout, $rootScope) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $dialogs.error("Something went wrong!", error);
        console.error("$stateChangeError: ", toState, error);
    });

    $scope.Test = "hello"

    //Calculation Mode
    var mode;

    $scope.SalaryMode = function () {
        mode = "Salary";
        alert(mode);
    }

    $scope.HourlyMode = function () {
        mode = "Hourly";
        alert(mode);

    }

    $scope.currentMode = function (x) {
        if (mode == x) {
            return true;
        } else {
            return false;
        }
    }


    //Tax Bracket
    $scope.itemList = [];
    $scope.TaxBracket = $('dropdown_title2').val();
    $scope.TaxBrackets = [{
        percent: 10
    }, {
        percent: 15
    }, {
        percent: 25
    }, {
        percent: 28
    }, {
        percent: 33
    }, {
        percent: 35
    }, {
        percent: 39.6
    }];
    $scope.changedValue = function (item) {
        $scope.itemList.push(item.name);
        //Calcualtor Area

        $scope.expenses = [];

        $scope.expense = {};

        $scope.AddExpense = function () {

            $scope.expenses.push({
                title: $scope.title,
                amount: parseInt($scope.amount)
            });
        }
    };

    $scope.deleteExpense = function () {
        $scope.expenses.splice(this.$index, 1);

    }

   $scope.totalAmount = function(){
       var total = 0;
       for (var i = 0; i < $scope.expenses.length; i++) {
              total = total + parseInt($scope.expenses[i].Amount);
            }
       
       
       return total;
}

   
 


});