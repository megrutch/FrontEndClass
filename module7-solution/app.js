(function(){
'use strict';
// followed along with lecture videos to complete assignment and 
// followed instructions to check off each step and meet the requirements
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.getToBuyItems();

  buy.purchaseItem = function(itemIndex){
    // purhcase item with index as given in lectures
    ShoppingListCheckOffService.purchaseItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
    // the names of each given in instructions
    // need at least 5 items
  var toBuyItems =[
    {item_name: "cookies", item_quantity: 10, pricePerItem: 2},
    {item_name: "peanut butter", item_quantity: 2, pricePerItem: 5},
    {item_name: "bread", item_quantity: 1, pricePerItem: 3},
    {item_name: "coffee grounds", item_quantity: 6, pricePerItem: 5},
    {item_name: "milk", item_quantity: 2, pricePerItem: 4}
  ]

  // starts as empty items 
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
  // using item index based on lecture video 20 pt 2 (showed how to remove)
  service.purchaseItem = function(itemIndex){
    // figure out how to remove from the to buy list and add to bought list
    // need to store it first and then splice
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);  
    boughtItems.push(item);
  }
}
})();