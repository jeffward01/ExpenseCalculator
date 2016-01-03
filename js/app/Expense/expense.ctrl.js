angular.module('app').controller("ExpenseDetailController", function ($scope, $timeout, $rootScope) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        $dialogs.error("Something went wrong!", error);
        console.error("$stateChangeError: ", toState, error);
    });


});