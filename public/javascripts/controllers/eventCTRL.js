app.controller('EventCTRL', [
	'$scope',
    'eventService',
	function($scope, eventService){

        eventService.getAll();
		$scope.events = eventService.events;
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
            if($scope.currentID ===$scope.videos.length-1){
                result = true
            }

            return result;
        }



	}]);

