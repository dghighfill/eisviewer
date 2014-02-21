var app = angular.module("myApp", []);

function EisController($scope){
    $scope.templateCriteria = ['<event>',
     	                      '   <header>',
                               '      <eventType></eventType>',
                               '      <eventName></eventName>',
                               '      <eventSource></eventSource>',
                               '   </header>',
                               '</event>'].join('\n');
    
    $scope.init = function() {
        console.log("EisController initialization");
        $scope.criteria = $scope.templateCriteria;
    };
    
    $scope.resetTimer = function() {
    	
    };
    
    $scope.loadTemplate = function(){
    	$scope.criteria = $scope.templateCriteria;
    };
};


function TimerController($scope, $timeout) {
	$scope.hour = 0;
	$scope.minutes = 0;
	$scope.seconds = 0;
	
    $scope.timer = "00:00:00"; 
  
    $scope.start = function(){
    	$scope.hour = 0;
    	$scope.minutes = 0;
    	$scope.seconds = 0;
    	$scope.timer = "00:00:00";
    	$timeout(countUp, 1000);
    }
    
    var countUp = function() {
        $scope.seconds++;
        $timeout(countUp, 1000);
        display();
    };

    var display = function(){
    	if( $scope.seconds == 5 ){
    		rollIt();
    	}
    	$scope.timer = formatTimer();
    };

    var format = function( n ){
    	// Pad a leading zero if it's less than 10.
    	return (n < 10) ? '0' + n : n;
    };
    var rollIt = function(){
    	console.debug( "rollIt "+$scope.seconds);
    	$scope.seconds = 0
    	if( $scope.minutes == 60 ){
    		$scope.hour++;
    		$scope.minutes = 0;
    	}
    	else
    	{
    		$scope.minutes++;
    	}
    	console.debug( "rollIt "+$scope.seconds);
    };
    
    var formatTimer = function(){
    	return format($scope.hour)+":"+format($scope.minutes)+":"+format($scope.seconds);
    };
    $timeout(countUp, 1000);

};
