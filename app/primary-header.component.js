angular.
  module('formycityApp').
  component('primaryHeader', {
    template:
        '<div class="header">' +
            '<div class="site-title">{{$ctrl.siteTitle}}</div>' +
            '<ul class="menu">' +
            '<li><a href="#!/view_home">home</a></li>' +
            '<li><a href="#!/view_about">about</a></li>' +
            '<li><a href="#!/view_contact">contact</a></li>' +
            '</ul>' +
        '</div>',
    controller: function PrimaryHeaderController() {
      this.siteTitle = 'ForMyCity';
    }
  });