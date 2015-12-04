app.factory('videoService', ['$http', function($http){

	var videoServiceFactory={
		videos:[]
	}


   function getAll() {
    return $http.get('/videos').success(function(data){
      angular.copy(data, videoServiceFactory.videos);
    });
  };

   function create(video) {
  return $http.post('/videos', video).success(function(data){
    console.log(data);
    videoServiceFactory.videos.push(data);
  });
};

videoServiceFactory.getAll = getAll;
videoServiceFactory.create = create;

return videoServiceFactory


    
}]);