app.controller('VideoCTRL', [
	'$scope',
    'videos',
	function($scope, videos){
		$scope.videos = videos.videos
        $scope.currentID=0;


		$scope.addPost = function(){
            if(!$scope.title || $scope.title === ''){
                return;
            }
            $scope.videos.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0,
            });
            $scope.title = "";
            $scope.link = "";
		};


        $scope.incrementUpvotes = function(video){
            video.upvotes++;
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

app.factory('videos', function(){
    var o = {
        videos: [
            {title: 'Euphoria', link:'http://www.youtube.com/embed/SpQarGyANIU', id:0 ,upvotes: 0},
            {title: 'Euphoria1', link:'http://www.youtube.com/embed/SpQarGyANIU',id:1 ,upvotes: 0,artist:'Loureen- Covered by THH'},
            {title: 'Euphoria2', link:'http://www.youtube.com/embed/SpQarGyANIU', id:2 ,upvotes: 0, artist:'Loureen - Covered by THH',description:'This is a cover of Euphoria.'}
        ]
    };
    return o;
});