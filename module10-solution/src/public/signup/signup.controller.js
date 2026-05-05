(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];

// basic controller for the sign up page


function SignupController(SignupService) {
  var signupCtrl = this;
  // created booleans to be able to use teh blur function that I found when researching (said to research) 
  // the menu found was set to true to start but as soon as clicked in it validated it and set to true or false

  signupCtrl.found = true;
  //user saved set to false and then updated to true when saved so can show the message at teh bottom
  signupCtrl.userSaved = false;
  signupCtrl.submit = function() {
   // console.log("Submitting user: ", signupCtrl.firstName, signupCtrl.lastName, signupCtrl.email, signupCtrl.phone, signupCtrl.menuShortName);
    
    // storing as a user to save in the service

    // created a user object to make it easier to save and send info
    var user = {
      firstName: signupCtrl.firstName,
      lastName: signupCtrl.lastName, 
      email: signupCtrl.email,
      phone: signupCtrl.phone,
      menuShortName: signupCtrl.menuShortName
    };


    SignupService.getMenuItem(signupCtrl.menuShortName).then(function(menuItem) {
      if(menuItem) {
       // console.log("Saved user");

       // called service functtion and saved menu item 
        user.menuItem = menuItem;

        // figure out way to get image path 

        // made some extra variables to make it easier to find the image since I just used the generic path and sorted through
        var cat = menuItem.category;
        var short = menuItem.short_name;
        
        // created a image src path with the info and stored in variable so that I can easil;y put it into the html src of img. 
        user.menuImage = "images/menu/" + cat + "/" + short + ".jpg";
        //console.log("path " + user.menuImage);
        SignupService.saveUser(user);
        signupCtrl.userSaved = true;
      } else {
        user.menuItem = null;
        signupCtrl.userSaved = false;
      }
    });
  }

  //helper method to validate function that calls with ng blur and updates variables to show or hide messages. 
  signupCtrl.isMenuItemValid = function() {
    //  console.log("Validating menu item: ", signupCtrl.menuShortName);
      var shortName = signupCtrl.menuShortName;
      if (!shortName) {
        signupCtrl.found = false;
        return false;
      }
      else {
        SignupService.getMenuItem(shortName).then(function(menuItem) {
          if(menuItem) {
            signupCtrl.found = true;
            return true;
          }
          else {
            signupCtrl.found = false;
           return false;
          }
        });
      }
}
}
})();
