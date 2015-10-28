var master = angular.module('master', [])


master.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);



var mainControllerFunc= function($scope){
	
$scope.showTheData = false;
$scope.greeting = "Ng Work";
console.log('working')


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

// -=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=- \\


	 var submitControllerFunc=function($scope, $http){

		$scope.greeting = 'submit it';

		$http.get('/submitArtist')
			.then(function(returnData){
				$scope.artists = returnData.data
						console.log(returnData);


			})
			console.log($scope.testicles)


		$scope.createArtist = function(){

			$http.post('/submit', $scope.newArtist)
				.then(function(returnData){
					$http.get('/submitArtist')
					.then(function(returnData){
					$scope.artists = returnData.data
						console.log(returnData);


			})
				console.log('Artist made',returnData)

			})

		}

	}





angular.module('master').controller('submitController',['$scope', '$http', submitControllerFunc])












