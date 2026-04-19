(function (){
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // following along with code from Lecture 40
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
    })
    
    .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html'
    });
}
})();