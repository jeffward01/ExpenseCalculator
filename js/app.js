<<<<<<< HEAD
angular.module('app', [])
.directive('number', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel) {

            ngModel.$parsers.push(function (value) {
                if (value==null)
                  return NaN;
            });
        }
    };
=======
angular.module('app', ['ui.router', 'ui.bootstrap', 'ngResource', 'countTo', 'angular-loading-bar', 'ngSanitize', 'angularSpinner']).config(function($stateProvider, $urlRouterProvider){
    
   // $urlRouterProvider.otherwise('/app');
    
    $stateProvider
        .state('app', {url:'/app', templateUrl: '/templates/app/app.html', controller: 'AppController'})
        
        .state('app.calc', {abstract: true, url: '/calc', template: '<ui-view>'})
    
        .state('app.calc.Expense', {url: '/expense', templateUrl: '/templates/app/expenseCalculator/Expense/expense.detail.html', controller: 'ExpenseDetailController'})
        
        .state('app.calc.Salary', {url: '/salary', templateUrl: '/templates/app/expenseCalculator/Salary/salaryCalc.html', controller: 'SalaryCalcController'})
    
        .state('app.calc.Hourly', {url: '/hourly', templateUrl: '/templates/app/expenseCalculator/Hourly/hourlyCalc.html', controller: 'HourlyCalcController'});
    
    
>>>>>>> 4376e894ba71888fe080b9719309046931bf037e
});