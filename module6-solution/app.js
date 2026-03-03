(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.checkLunch = function () {
            console.log($scope.textEntered);
            if ($scope.textEntered == undefined || $scope.textEntered == "") {
                // need to check if empty before can split
                $scope.message = "Please enter data first";
            }
            else {
                var splitWords = $scope.textEntered.split(',');
                // console.log(splitWords);
                //  console.log(splitWords.length);
                // I 
                if (splitWords.length == 0) {
                    // should display Please enter data first
                    $scope.message = "Please enter data first";
                }
                else if (splitWords.length <= 3) {
                    // should display Enjoy!
                    $scope.message = "Enjoy!";
                }
                else {
                    // should display Too much!
                    $scope.message = "Too much!";
                }
            }
        }
    }

})();
