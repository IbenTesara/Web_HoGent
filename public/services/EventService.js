app.factory('eventService', ['$http','auth', function($http,auth){

  var eventServiceFactory={
    events : []
  }


   function getAll() {
    return $http.get('/events').then(function(response){
      angular.copy(response.data, eventServiceFactory.events);
    });
  };

   function create(eve) {
  return $http.post('/events', eve,{
    headers: {Authorization: 'Bearer '+auth.getToken()}
  }

    ).then(function(response){
    eventServiceFactory.events.push(response.data);
  });
};

eventServiceFactory.getAll = getAll;
eventServiceFactory.create = create;

return eventServiceFactory


    
}]);