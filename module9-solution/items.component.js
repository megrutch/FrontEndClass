(function () {
'use strict';
// once I got working for the categories - copied for item compeonnt
angular.module('MenuApp')
.component('items', {
  templateUrl: '/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
