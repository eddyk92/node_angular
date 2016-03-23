var app = angular.module("libraryApp",["ngRoute", 'ui.materialize']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/authors.html',
      // 'partials/main.html'
      controller: 'LibraryController'
      // controller: 'mainController'
    }).
    when('/dashboard', {
   	// when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      // 'partials/dashboard.html'
      controller: 'LibraryController'
      // controller: 'mainController'

    })
}])

// , "ui.materialize", "chart.js"