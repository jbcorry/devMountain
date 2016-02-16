var app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.returningCustomer = true;

  
  $scope.group = [
    {
      name: 'jake',
      gender: 'male',
    },
    {
      name: 'ben',
      gender: 'male',
    },
    {
      name: 'ange',
      gender: 'female',
    },
    {
      name: 'will',
      gender: 'male',
    },
    {
      name: 'emily',
      gender: 'female',
    },
  ];

});
