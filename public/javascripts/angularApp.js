var app = angular.module('TheHollowHeart',['ui.router']);




app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('home',{
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'VideoCTRL',
                    resolve: {
                    	videoPromise: ['videoService',function(videoService){

                    		return videoService.getAll();

                    	}]
                    }
                })

                $urlRouterProvider.otherwise('home');

            }]);

