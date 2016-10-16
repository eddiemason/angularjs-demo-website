angular.
  module('formycityApp').
  component('slider', {
    template:
        '<div class="slider">' +
            '<div class="slide" ng-repeat="image in images" ng-show="image.visible">' +
                '<img ng-src="{{image.src}}" /><br />' +
                '<h2>{{image.title}}</h2>' +
            '</div>' +
            '<div class="arrows">' +
                '<a href="#" ng-click="prev()">' +
                '< ' +
                '</a>' +
                '<a href="#" ng-click="next()">' +
                ' >' +
                '</a>' +
            '</div>' +
        '</div>',
    controller: function SliderController($scope, $timeout) {
      $scope.images = [
            {
                src: 'img/img1.jpg',
                title: 'Provide Basic Needs'
            },{
                src: 'img/img2.jpg',
                title: 'Serve The Hungry'
            },{
                src: 'img/img3.jpg',
                title: 'Care For Our Youth'
            }
        ];

    $scope.currentIndex = 0; // Initially the index is at the first image

    $scope.next = function() {
    $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;

/* ToDo: Fix Timer
    var timer;
    var sliderFunc = function() {
        timer = $timeout(function() {
            $scope.next();
            timer = $timeout(sliderFunc, 5000);
        }, 5000);
    };

    sliderFunc();

    $scope.$on('$destroy', function() {
    $scope.cancel(timer); // when the scope is getting destroyed, cancel the timer
    });
*/
    };

    $scope.prev = function() {
    $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
    };

    $scope.$watch('currentIndex', function() {
    $scope.images.forEach(function(image) {
        image.visible = false; // make every image invisible
    });

    $scope.images[$scope.currentIndex].visible = true; // make the current image visible
    });

    }
});

