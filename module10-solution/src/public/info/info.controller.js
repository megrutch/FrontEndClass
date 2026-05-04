(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignupService'];

function InfoController(SignupService) {
  var infoCtrl = this;
  infoCtrl.user = SignupService.getUser();

  
}

})();
