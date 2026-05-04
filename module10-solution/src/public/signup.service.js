(function () {
'use strict';

angular.module('public')
.service('SignupService', SignupService);
// followed along with my code from assignment 9
SignupService.$inject = ['$http'];
function SignupService( $http) {
    var service = this;
    service.saveUser = function (user) {
      console.log("Saving user: ", user);
      service.user = user;
    };

    service.getUser = function () {
      return service.user;
    };


    service.getMenuItem = function (shortName) {

       // going to get all the menu items and find that matches
       // had a hard time trying to figure out how to split the short name to use URL so chose other
       // option that was in the homework

        var itemUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json";
        console.log("item url is " + itemUrl);  
        return $http({
            method: "GET",
            url: itemUrl,   
        }).then(function (response) {
            var menuItems = response.data;
            // took my loop from module 8 and modified to fit this assignment
            for(var item in menuItems){
                var currentItem = menuItems[item];
                console.log("Current item: ", currentItem);
                for(var i = 0; i < currentItem.menu_items.length; i++){
                  var curr = currentItem.menu_items[i];
                //  console.log("Current" + curr); 
                  if(curr.short_name.toLowerCase() === shortName.toLowerCase()){
                    console.log("Found item: ", curr);
                    // adding category so can use it for image path
                    curr.category = currentItem.category.short_name;
                    return curr;
                  }
                }
            }
            return null; 
        });

    }

}
}) ();