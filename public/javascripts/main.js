var master = angular.module('master', [])


angular.module('master').directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
            	// console.log('LOG', changeEvent.target.files[0])
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

angular.module('master')
	.service('authService', ['$http', '$location', function($http){
		
		this.authCheck = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}
					
						
	}])

angular.module('master')
	.controller('authController', ['$scope', '$http', '$rootScope','authService', function($scope, $http, $rootScope, authService){
		console.log('AUTH', authService)
		
		authService.authCheck(function(user){
			console.log('USER!', user)
			$scope.user = user
			$rootScope.user = $scope.user
		})

	}])








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





	 var submitControllerFunc=function($scope, $http, $sce){

		$scope.greeting = 'Gimme your Info!';
		$scope.$sce = $sce;

		$http.get('/submitArtist')
			.then(function(returnData){
				$scope.artists = returnData.data
						console.log($scope.artists);


			})


		$scope.createArtist = function(){

			$http.post('/submit', $scope.newArtist)
				.then(function(returnData){
					$scope.newArtist={}
					$http.get('/submitArtist')
					.then(function(returnData){
					$scope.artists = returnData.data
						console.log(returnData);


			})
				console.log('Artist made',returnData)

			})

		}

	}





angular.module('master').controller('submitController',['$scope', '$http','$sce', submitControllerFunc])





var showControllerFunc =function($scope, $http, $sce){
	$scope.$sce = $sce;

		$scope.shows =[]
	// 	newArray = []
	// $scope.shows.forEach(function(element){
	// 	if (newArray.indexOf(element) === -1){
	// 		newArray.push(element)
	// 	}
	// });
	// console.log(newArray)
	// return newArray;



	$scope.playAudio = function(data){
		data.showAudio = !data.showAudio;
	}

	$scope.header = "Create a Show"
	$scope.findBands = function(){
		console.log($scope.search)
	}


	$http.get('/submitShow')
		.then(function(returnData){
			$scope.shows=returnData.data
				console.log(returnData)
		})

		$scope.createShow = function(){

			$http.post('/showInfo', $scope.newShow)
				.then(function(returnData){
					$scope.newShow={}
					$http.get('/submitShow')
					.then(function(returnData){
						$scope.shows = returnData.data;
					})
					console.log('Show Made', returnData)	

				})
		}
}


angular.module('master').controller('showController',['$scope', '$http', '$sce', showControllerFunc])





