(function () {
'use strict';

/* Followed the examples from the course so I did keep name items that was given in example code */
angular.module('MenuApp')
.component('categories', {
  templateUrl: '/templates/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();
