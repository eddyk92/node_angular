app.service('authorService', ['$http', function($http) {
  return {
    getAuthors: function(){
      return $http.get("/api/authors/").then(function (res) {
        console.log(res.data)
        console.log("dooowop dooowop")
        return res.data
      })

    }
  }
}])