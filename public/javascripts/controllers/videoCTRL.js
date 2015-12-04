app.controller('VideoCTRL', [
	'$scope',
    'videoService',
    'auth',
	function($scope, videoService,auth){
		$scope.videos = videoService.videos;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentID =0;


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
            var result = false;
            if($scope.currentID ===0){
                result = true
            }

            return result;
        }

        $scope.isDisabledRight = function(){
            var result = false;
            if($scope.currentID ===$scope.videos.length-1){
                result = true
            }

            return result;
        }



	}]);

