(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuCategories'];
/*function SignupController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}*/


})();
