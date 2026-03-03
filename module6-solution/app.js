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
                $scope.textClass = {color: "red", border: "2px solid red"};
            }
            else {
                var splitWords = $scope.textEntered.split(',');
                // console.log(splitWords);
                //  console.log(splitWords.length);
                // I 
                if (splitWords.length == 0) {
                    // should display Please enter data first
                    $scope.message = "Please enter data first";
                     $scope.textClass = {color: "red", border: "2px solid red"};
                }
                else if (splitWords.length <= 3) {
                    // should display Enjoy!
                    $scope.message = "Enjoy!";
                    $scope.textClass = {color: "green", border: "2px solid green"};
                }
                else {
                    // should display Too much!
                    $scope.message = "Too much!";
                    $scope.textClass = {color: "green", border: "2px solid green"};
                }
            }
        }
    }

})();
