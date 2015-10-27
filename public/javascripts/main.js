var master = angular.module('master', [])




var mainControllerFunc= function($scope){
	
$scope.showTheData = false;
$scope.greeting = "Ng Work";


	$scope.findBands = function(){
		console.log($scope.search)
		

	$scope.showData = function(event){

		$scope.showTheData = !$scope.showTheData

		}

	$scope.playAudio = function(data){
		data.showAudio = !data.showAudio
		console.log(data.headliner)
	}

	$scope.playSupporterAudio= function(data){
		data.showSupAudio = !data.showSupAudio
		console.log(data.showSupAudio)
	}


$scope.bandList = bandList
	


		}
	

}

angular.module('master').controller('mainController', ['$scope', mainControllerFunc])