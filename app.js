"use strict";


angular.module('app', [])

    .controller('Ctrl', function ($scope) {
        $scope.val1 = 3;
        $scope.val2 = 4;
    })

    .directive('stars', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.stars, function (value) {
                    var html = '';
                    for (var i = 0 ; i < value ; i++) {
                        html += '<img src="star.png"/>';
                    }
                    element.html(html);
                });
            }
        }
    })


