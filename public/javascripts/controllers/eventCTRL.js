app.controller('EventCTRL', [
	'$scope',
    'eventService',
    'auth',
	function($scope, eventService,auth){
		$scope.events = eventService.events;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentID =0;
        $scope.hideNext=false;
        $scope.hidePrevious=true;


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
            
            if($scope.currentID ===0){
                hidePrevious = true;
            } else {
                hidePrevious= false;
            }

            return hidePrevious;
        }

        $scope.isDisabledRight = function(){
           
            if($scope.currentID ===$scope.videos.length-1){
                hideNext = true;
            } else {
                hideNext=false;
            }

            return hideNext;
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