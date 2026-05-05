(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignupService'];

// basic controller for the info page
// this just gets the user adn shows them information or tells them to signup if doesn't find 
function InfoController(SignupService) {
  var infoCtrl = this;
  infoCtrl.user = SignupService.getUser();

  
}

})();
