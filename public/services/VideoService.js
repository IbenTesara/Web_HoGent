app.factory('videoService', ['$http', 'auth', function($http){

	var videoServiceFactory={
		videos:[]
	}


   function getAll() {
    return $http.get('/videos').then(function(data){
      console.log(data);
      angular.copy(data, videoServiceFactory.videos);
    });
  };

   function create(video) {
  return $http.post('/videos', video, {

    headers:{Authorization: 'Bearer ' +auth.getToken()}
  }

    ).then(function(data){
    console.log(data);
    videoServiceFactory.videos.push(data);
    console.log(videoServiceFactory.videos);
  });
};

videoServiceFactory.getAll = getAll;
videoServiceFactory.create = create;

return videoServiceFactory


    
}]);