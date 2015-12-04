app.factory('eventService', ['$http', function($http){

	var eventServiceFactory={
		events:[]
	}


   function getAll() {
    return $http.get('/events').then(function(response){
      angular.copy(response.data, eventServiceFactory.events);
    });
  };

   function create(eventx) {
  return $http.post('/events', eventx

    ).then(function(respone){
    eventServiceFactory.events.push(respone.data);
  });
};

eventServiceFactory.getAll = getAll;
eventServiceFactory.create = create;

return eventServiceFactory


    
}]);