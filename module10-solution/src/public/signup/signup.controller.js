(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];

function SignupController(SignupService) {
  var signupCtrl = this;
  signupCtrl.found = true;
  signupCtrl.userSaved = false;
  signupCtrl.submit = function() {
    console.log("Submitting user: ", signupCtrl.firstName, signupCtrl.lastName, signupCtrl.email, signupCtrl.phone, signupCtrl.menuShortName);
    
    // storing as a user to save in the service

    var user = {
      firstName: signupCtrl.firstName,
      lastName: signupCtrl.lastName, 
      email: signupCtrl.email,
      phone: signupCtrl.phone,
      menuShortName: signupCtrl.menuShortName
    };


    SignupService.getMenuItem(signupCtrl.menuShortName).then(function(menuItem) {
      if(menuItem) {
        console.log("Saved user");
        user.menuItem = menuItem;

        // figure out way to get image path 


        var cat = menuItem.category;
        var short = menuItem.short_name;
       
        user.menuImage = "images/menu/" + cat + "/" + short + ".jpg";
        console.log("path " + user.menuImage);
        SignupService.saveUser(user);
        signupCtrl.userSaved = true;
      } else {
        user.menuItem = null;
        signupCtrl.userSaved = false;
      }
    });
  }

  signupCtrl.isMenuItemValid = function() {
      console.log("Validating menu item: ", signupCtrl.menuShortName);
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
