app.controller('VideoCTRL', [
	'$scope',
    'videoService',
    'auth',
	function($scope, videoService,auth){
		$scope.videos = videoService.videos;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentID =0;
        $scope.hideNext=false;
        $scope.hidePrevious=true;


		$scope.addVideo = function(){
           
            videoService.create({
                title: $scope.title,
                date : new Date(),
                link: $scope.link,
                artist: $scope.artist,
                description: $scope.description,
            });

            $scope.title = "";
            $scope.link = "";
            $scope.artist ="";
            $scope.description="";
		};


        $scope.nextVideo = function(){
           $scope.currentID++;
        };

         $scope.previousVideo = function(){
           $scope.currentID--;
        };

        $scope.isDisabledLeft = function(){
            
            if($scope.currentID ===0){
                hidePrevious = true;
            } else {
                hidePrevious= false;
            }

            return hidePrevious;
        }

        $scope.isDisabledRight = function(){
           
            if($scope.currentID ===$scope.videos.length-1){
                hideNext = true;
            } else {
                hideNext=false;
            }

            return hideNext;
        }



	}]);

app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('videos',{
                    url: '/videos',
                    templateUrl: '/videos.html',
                    controller: 'VideoCTRL',
                    resolve: {
                        videoPromise: ['videoService',function(videoService){

                            return videoService.getAll();

                        }]
                    }
                })
            }]);
