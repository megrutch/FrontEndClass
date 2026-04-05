(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowC = this;
    narrowC.searchMenuItems = function(searchTerm) {
        console.log("in search menu items "+ searchTerm);
       // console.log(searchTerm);
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
        console.log("search term above " + searchTerm);
        return $http({
            method: "GET",
            url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        }).then(function (result){
            var foundItems = [];

            // lecture 25 said that if json it goes to a JS object so needed to figure out 
            // how to loop through it 
            // was like Letter -> items
            // had to search and found this : https://www.geeksforgeeks.org/javascript/how-to-iterate-over-a-javascript-object/
           // console.log("got result: ")
            //console.log(result.data);
            for(var item in result.data){
                var currentItem = result.data[item];
                for(var i = 0; i < currentItem.menu_items.length; i++){
                  var curr = currentItem.menu_items[i];
                //  console.log("Current" + curr); 
                  if(curr.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
                    foundItems.push(curr);
                  }
                }
            }
        //    console.log("after removing : " + foundItems);
       
            return foundItems;
        })
    }
}
})()