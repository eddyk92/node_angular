app.controller('LibraryController', ['$scope', 'authorService', function($scope, authorService){
  $scope.test = "THIS IS JUST A TEST";
  authorService.getAuthors().then(function(data) {
    $scope.authors = data
  });
  console.log($scope.authors, "SIUSGISGIHSIHS");
}])

