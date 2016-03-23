app.service('authorService', ['$http', function($http) {
// app.service('usersService', ['$http', function($http) {
  return {
    getAuthors: function(){
      return $http.get("/api/authors/").then(function (res) {
      // return $http.get("/api/main/").then(function (res) {
        console.log(res.data)
        console.log("on authors api")
        return res.data
      })

    }
  }
}])