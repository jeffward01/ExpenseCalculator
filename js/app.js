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
});