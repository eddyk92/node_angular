app.controller('LibraryController', ['$scope', 'authorService', function($scope, authorService){
  $scope.test = "THIS IS JUST A TEST";
  authorService.getAuthors().then(function(data) {
    $scope.authors = data
  });
  console.log($scope.authors, "mainController");
}]);


// app.controller('dashboardController',['$scope', 'authorService',
// 		function($scope, $http, $rootScope, $location){
// 			var quizResult = this;
// 			quizResult.result = [
// 				{value: }
// 			]
// 		}




// pie chart
angular.module("app", ["chart.js"]).controller("PieCtrl", function ($scope) {
  $scope.labels = ["Adventure", "Stuff","friends", "rich"];
  $scope.data = [300, 500, 100, 100];
});