(function (){
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // following along with code from Lecture 40
    $urlRouterProvider.otherwise('/');
    // set up routes one by one and tested as went
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
    })
    
    .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html', 
        controller : 'CategoriesController as categoriesList',
        resolve: {
            categories: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories()
            }]
        }
    })

    .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'templates/items.template.html', 
        controller : 'ItemsController as itemsList',
        resolve: {
            items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    });

}
})();