app.factory('videoService', ['$http', function($http){

	var videoServiceFactory={
		videos : []
	}


   function getAll() {
    return $http.get('/videos').then(function(response){
      angular.copy(response.data, videoServiceFactory.videos);
    });
  };

   function create(video) {
  return $http.post('/videos', video

    ).then(function(response){
    videoServiceFactory.videos.push(response.data);
  });
};

videoServiceFactory.getAll = getAll;
videoServiceFactory.create = create;

return videoServiceFactory


    
}]);