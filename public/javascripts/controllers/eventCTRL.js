app.controller('EventCTRL', [
	'$scope',
    'eventService',
    'auth',
	function($scope, eventService,auth){
		$scope.events = eventService.events;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentID =0;


		$scope.addEvent = function(){
           
            eventService.create({
                title: $scope.eventtitle,
                date : new Date(),
                playDate : $scope.playDate,
                description: $scope.eventdescription,
            });

            $scope.eventtitle = "";
            $scope.playDate="";
            $scope.eventdescription="";
		};


        $scope.nextEvent = function(){
           $scope.currentID++;
        };

         $scope.previousEvent = function(){
           $scope.currentID--;
        };

        $scope.isDisabledLeft = function(){
            var result = false;
            if($scope.currentID ===0){
                result = true
            }

            return result;
        }

        $scope.isDisabledRight = function(){
            var result = false;
            if($scope.currentID ===$scope.events.length-1){
                result = true
            }

            return result;
        }



	}]);

app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('events',{
                    url: '/events',
                    templateUrl: '/events.html',
                    controller: 'EventCTRL',
                    resolve: {
                        eventsPromise: ['eventService',function(eventService){

                            console.log(eventService.events);
                            return eventService.getAll();

                        }]
                    }
                    
                })
            }]);