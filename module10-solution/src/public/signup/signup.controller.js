(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = [];

function SignupController() {
  var signupCtrl = this;

  signupCtrl.submit = function() {
    // need to figure out what need to put here. 
    console.log("User info: ", signupCtrl.user); 
  }
}

})();
