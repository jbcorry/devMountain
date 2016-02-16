var app = angular.module('friendsList');

app.controller('main', function($scope){

$scope.myFriends = [
  "Spence", "Bubba", "Brandon", "Angela", "Will"
];



$scope.addFriend = function() {
  $scope.myFriends.push($scope.newFriend);
  $scope.newFriend = '';
}
});
