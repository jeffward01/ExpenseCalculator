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




});