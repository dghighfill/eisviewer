app.controller("EisController", function($scope, $http){
 
    $scope.name = "Dale Highfill";
    $scope.init = function() {
        alert( "Hello " + $scope.name );
    };
 
});
// onclick="onSubscribe()"
//function onSubscribe(){
//	alert("Hello World");
//}
