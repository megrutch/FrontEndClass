(function () {  
'use strict';
angular.module('MenuApp')
.controller('ItemsController', ItemsController);  

ItemsController.$inject = ['items'];
function ItemsController(items) {
    console.log("in items controller");
  var itemsList = this;
  itemsList.items = items.data;

}
})();