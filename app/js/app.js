var app = angular.module('angulartest', []);

app.controller('testingAngularCtrl', function($rootScope, $scope){
    $scope.title = 'Testing AngularJS App';
});