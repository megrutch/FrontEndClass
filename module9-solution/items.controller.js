(function () {  
'use strict';
angular.module('MenuApp')
.controller('ItemsController', ItemsController);  


// followed simialr structure from categoires controller 
ItemsController.$inject = ['items'];
function ItemsController(items) {
   // console.log("in items controller");
  var itemsList = this;
  itemsList.items = items.data;

}
})();