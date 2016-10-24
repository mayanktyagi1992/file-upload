
function mainController($scope,mainService,$state){
$scope.login = function(user){
	mainService.login(user).success(function(response){
	$state.go('search');
	})
}

$scope.tweets = [];
$scope.search = function(keyword){
	$scope.keyword = "";
	mainService.search(keyword).success(function(response){
	$scope.tweets = response.tweets;
	})
}

}






angular
  .module('myApp')
  .controller('mainController', ['$scope','mainService','$state',mainController ]);
