(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowC = this;
    narrowC.searchMenuItems = function(searchTerm) {
        console.log("in search menu items");
        console.log(searchTerm);
        // following the log menu items example in lecture 25
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response) {
            narrowC.found = response;
            console.log("found items:");
            console.log(narrowC.found);
        }).catch(function (error) {
            console.log(error);
            console.log("Something went wrong.");
        });
    }

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
        // followed example given in Lecture 25 and homework specification

        return $http({
            method: "GET",
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        }).then(function (result){
            var foundItems = [];

            // lecture 25 said that if json it goes to a JS object so needed to figure out 
            // how to loop through it 
            // was like Letter -> items
            console.log("got result: ")
            console.log(result.data);
            for(var item in result.data){
                var currentItem = result.data[item];
                console.log("current item: " + currentItem);
            }
            console.log("after removing : " + foundItems);
       
            return foundItems;
        })
    }
}
})()