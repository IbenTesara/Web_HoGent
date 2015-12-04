app.factory('videoService', ['$http', function($http){

	var videoServiceFactory={
		videos : [

        {title: 'Euphoria', date: new Date(), artist: 'Loreen', link: 'https://www.youtube.com/embed/SpQarGyANIU', description:'A cover of Loreens Euphoria, made by The Hollow Heart.', id:0},
        {title: 'What is Love', date: new Date(), artist: 'Haddaway', link: 'https://www.youtube.com/embed/Lp_U0T4LF8w', description:'A cover of What is Love by Haddaway, made by The Hollow Heart',id:1},
        {title: 'New Kids', date: new Date(), artist: 'The Hollow Heart', link: 'https://www.youtube.com/embed/MuXfl-VSvx0', description:'The first single of The Hollow Heart.',id:2}

        ]
	}


   function getAll() {
    return $http.get('/videos').then(function(data){
      console.log(data);
      /*angular.copy(data, videoServiceFactory.videos);*/
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