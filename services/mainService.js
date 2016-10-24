var myApp = angular.module('myApp')

myApp.factory("mainService", ['$http', function ($http) {

    var login = function(user){
        var login = $http.post('/api/v1/login',user);
        return login;
    }

    var search = function(keyword){
        var search = $http.get('/api/v1/keywordSearch?keyword='+keyword);
        return search;
    }



    return {
        login:login,
        search:search
    }
}]);
