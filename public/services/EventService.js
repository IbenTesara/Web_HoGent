app.factory('eventService', ['$http','auth', function($http,auth){

	var eventServiceFactory={
		events:[]
	}


   function getAll() {
    return $http.get('/events').then(function(response){
      angular.copy(response.data, eventServiceFactory.events);
    });
  };

   function create(eventx) {
  return $http.post('/events', eventx,{
    headers: {Authorization: 'Bearer '+auth.getToken()}
  }

    ).then(function(respone){
    eventServiceFactory.events.push(respone.data);
  });
};

eventServiceFactory.getAll = getAll;
eventServiceFactory.create = create;

return eventServiceFactory


    
}]);