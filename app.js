"use strict";


angular.module('app', [])

    .controller('Ctrl', function ($scope) {
        $scope.val1 = 3;
        $scope.val2 = 4;
    })

    .directive('stars', function () {
        return {
            restrict: 'A',
            template: '<span><img src="star.png" ng-repeat="star in stars()" ng-click="setValue(1 + star)"/>' +
                '<img src="empty-star.png" ng-repeat="star in emptyStars()" ng-click="setValue(stars().length + 1 + star)"/></span>',
            scope: {
                val: '=stars',
                max: '=maxStars'
            },
            link: function (scope, element, attrs) {
                function stars() {
                    return scope.val <= scope.max ? scope.val : scope.max;
                }
                function fillArray(n) {
                    var a = [];
                    for (var i = 0 ; i < n ; i++) {
                        a.push(i);
                    }
                    return a;
                }
                scope.stars = function () {
                    return fillArray(stars());
                };
                scope.emptyStars = function () {
                    return fillArray(scope.max - stars());
                };
                scope.setValue = function (n) {
                    scope.val = n;
                }
            }
        }
    })


