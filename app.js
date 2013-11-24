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
                var val, max;
                function draw() {
                    var html = '';
                    var stars = val <= max ? val : max;
                    for (var i = 0 ; i < stars ; i++) {
                        html += '<img src="star.png"/>';
                    }
                    for (; i < max ; i++) {
                        html += '<img src="empty-star.png"/>';
                    }
                    element.html(html);
                }
                scope.$watch(attrs.stars, function (value) {
                    val = value;
                    draw();
                });
                scope.$watch(attrs.maxStars, function (value) {
                    max = value;
                    draw();
                });
            }
        }
    })


