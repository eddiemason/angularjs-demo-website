'use strict';

angular.module('formycityApp.view_about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_about', {
    templateUrl: 'view_about/about.html',
    controller: 'AboutController'
  });
}])

.controller('AboutController', [function() {

}]);