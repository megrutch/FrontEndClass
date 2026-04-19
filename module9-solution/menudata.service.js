(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
//MenuDataService.$inject = ['$http'];
// tried to follow along with examples given in lectures
MenuDataService.$inject = ['$q', '$timeout'];
function MenuDataService($q, $timeout) {
    var service = this;

    service.getAllCategories = function () {
        

        return $http({
            method: "GET",
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
        });
    }


    service.getItemsForCategory = function (categoryShortName) {

        var itemUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json/" + categoryShortName;
          return $http({
            method: "GET",
            url: itemUrl,
        });
    }

}

}) ();