app.controller('EventCTRL', [
	'$scope',
    'eventService',
	function($scope, eventService){
		$scope.events = eventService.events;
        $scope.currentID=0;

		$scope.addEvent = function(){
           
            eventService.create({
                title: $scope.title,
                date : new Date(),
                playDate: $scope.date,
                description: $scope.description,
                played : $scope.played,
            });

            $scope.title = "";
            $scope.description = "";
            $scope.played = false;
            $scope.playDate="";
		};


        $scope.nextEvent = function(){
           $scope.currentID++;
        };

         $scope.previousEvent= function(){
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

