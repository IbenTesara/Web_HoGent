app.factory('videoService', ['$http', function($http){

	var videoServiceFactory={
		videos:[]
	}


   function getAll() {
    return $http.get('/videos').then(function(data){
      console.log(data);
      angular.copy(data, videoServiceFactory.videos);
      console.log(videoServiceFactory.videos);
    });
  };

   function create(video) {
  return $http.post('/videos', video

    ).then(function(data){
    console.log(data);
    videoServiceFactory.videos.push(data);
    console.log(videoServiceFactory.videos);
    getAll();
  });
};

videoServiceFactory.getAll = getAll;
videoServiceFactory.create = create;

return videoServiceFactory


    
}]);