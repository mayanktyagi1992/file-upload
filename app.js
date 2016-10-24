var myApp = angular.module('myApp', ['ui.router','ngFileUpload']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('fileupload', {
      url: "/",
      templateUrl: "views/upload.html",
      controller: "uploadController as upload"
    })
    .state('search', {
      url: "/search",
      templateUrl: "views/search.html"
    })

    });

myApp.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@',
      upload:"="
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
	scope.upload();
      });
    }
  };
});
