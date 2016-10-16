'use strict';

angular.module('formycityApp.view_contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view_contact', {
    templateUrl: 'view_contact/contact.html',
    controller: 'ContactController'
  });
}])

.controller('ContactController', [function() {

}]);