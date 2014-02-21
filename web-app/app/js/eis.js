var myApp = angular.module('myApp',[]);

myApp.controller("EisController", ['$scope', function($scope) {
 
    $scope.name = "Dale Highfill";
    $scope.init = function() {
        alert( "Hello " + $scope.name );
    };
    
    $scope.resetTimer = function() {
    	
    };
    
    $scope.loadTemplate = function(){
    	$scope.txtCriteria = templateCriteria;
    }
    
    $scope.templateCriteria = ['<event>',
    	                      '   <header>',
                              '      <eventType></eventType>',
                              '      <eventName></eventName>',
                              '      <eventSource></eventSource>',
                              '   </header>',
                              '</event>'].join('\n');
}]);
// onclick="onSubscribe()"
//function onSubscribe(){
//	alert("Hello World");
//}
