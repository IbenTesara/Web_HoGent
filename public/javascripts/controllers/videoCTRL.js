app.controller('VideoCTRL', [
	'$scope',
    'videoService',
	function($scope, videoService){
		$scope.videos = videoService.videos;
        $scope.currentID=0;
        var nextId = 3;

		$scope.addVideo = function(){
           
            videoService.create({
                title: $scope.title,
                date : new Date(),
                link: $scope.link,
                artist: $scope.artist,
                description: $scope.description,
                id: nextId,
            });

            $scope.title = "";
            $scope.link = "";
            $scope.artist ="";
            $scope.description="";
            nextId++;
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

