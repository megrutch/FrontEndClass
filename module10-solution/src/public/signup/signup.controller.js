(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];

function SignupController(SignupService) {
  var signupCtrl = this;

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
        SignupService.saveUser(user);
        signupCtrl.message = "Your information has been saved.";
      } else {
        console.log("didnt save the user");
        user.menuItem = null;
        signupCtrl.message = "No such menu number exists.";
      }
    });
  }
}

})();
