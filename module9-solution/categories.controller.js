(function () {  
'use strict';
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);  

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoriesList = this;
  //console.log(categoriesList)
  //console.log(categories.data);
  categoriesList.categories = categories.data;

}
})();