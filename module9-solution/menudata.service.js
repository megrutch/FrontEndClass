(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
//MenuDataService.$inject = ['$http'];
// tried to follow along with examples given in lectures
MenuDataService.$inject = ['$http'];
function MenuDataService( $http) {
    var service = this;

    service.getAllCategories = function () {
        // just give a promise whihc is just an http call 
        return $http({
            method: "GET",
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
        });
    }


    service.getItemsForCategory = function (categoryShortName) {

        // built url as given in homework assignment 

        var itemUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json";
        console.log("item url is " + itemUrl);
          return $http({
            method: "GET",
            url: itemUrl,
        });
    }

}
}) ();