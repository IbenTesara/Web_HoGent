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
            if ( $scope.currentID + 1 <= $scope.videos.length ) {
                $scope.currentID++;
            }
        };

         $scope.previousVideo = function(){
            if ( $scope.currentID -  1 >= $scope.videos.length ) {
                $scope.currentID--;
            }
        };

	}]);

app.factory('videos', function(){
    var o = {
        videos: [
            {title: 'Euphoria', link:'http://www.youtube.com/embed/SpQarGyANIU', id:0 ,upvotes: 0},
            {title: 'Euphoria1', link:'http://www.youtube.com/embed/SpQarGyANIU',id:1 ,upvotes: 0},
            {title: 'Euphoria2', link:'http://www.youtube.com/embed/SpQarGyANIU', id:2 ,upvotes: 0}
        ]
    };
    return o;
});