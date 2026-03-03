(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        // I do not count emtpy comma elements in the count as per step 12 
        $scope.checkLunch = function () {
           // console.log($scope.textEntered);
            if ($scope.textEntered == undefined || $scope.textEntered == "") {
                // need to check if empty before can split
                $scope.message = "Please enter data first";
                $scope.textClass = {color: "red", border: "2px solid red"};
            }
            else {
                var splitWords = $scope.textEntered.split(',');
                var result = checkBlankSpaces(splitWords);
                if (result == 0) {
                    // should display Please enter data first
                    $scope.message = "Please enter data first";
                     $scope.textClass = {color: "red", border: "2px solid red"};
                }
                else if (result <= 3) {
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

        function checkBlankSpaces(arr){
            // I have created a helper function to check to be able to handle empty commas as given in step 12
            var count = 0;
            for(var i = 0; i < arr.length; i++){
                var curr = arr[i];
                curr = curr.trim();
                if(curr != ""){
                    count++;
                }
            }
            return count;
        }
    }

})();
