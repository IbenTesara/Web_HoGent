app.controller('VideoCTRL', [
	'$scope',
    'videoService',
	function($scope, videoService){
		$scope.videos = [

        {title: 'Euphoria', date: new Date(), artist: 'Loreen', link: 'https://www.youtube.com/embed/SpQarGyANIU', description:'A cover of Loreens Euphoria, made by The Hollow Heart.', id:0},
        {title: 'What is Love', date: new Date(), artist: 'Haddaway', link: 'https://www.youtube.com/embed/Lp_U0T4LF8w', description:'A cover of What is Love by Haddaway, made by The Hollow Heart',id:1},
        {title: 'New Kids', date: new Date(), artist: 'The Hollow Heart', link: 'https://www.youtube.com/embed/MuXfl-VSvx0', description:'The first single of The Hollow Heart.',id:2}

        ];
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

