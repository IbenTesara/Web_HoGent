app.factory('eventService', ['$http', function($http){

	var eventServiceFactory={
		events:[]
	}


   function getAll() {
    return $http.get('/events').then(function(data){
      console.log(data);
      angular.copy(data, eventServiceFactory.events);
    });
  };

   function create(event) {
  return $http.post('/events', event

    ).then(function(data){
    console.log(data);
    eventServiceFactory.events.push(data);
    console.log(eventServiceFactory.events);
  });
};

eventServiceFactory.getAll = getAll;
eventServiceFactory.create = create;

return eventServiceFactory


    
}]);