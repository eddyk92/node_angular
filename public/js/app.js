var app = angular.module("libraryApp",["ngRoute"]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/authors.html',
      controller: 'LibraryController'
    }).
    when('/books', {
      templateUrl: 'partials/books.html',
      controller: 'LibraryController'
    })
}])

