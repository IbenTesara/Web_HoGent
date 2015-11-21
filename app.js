var app = angular.module('TheHollowHeart',['ui.router']);



app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('home',{
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'VideoCTRL'
                })

                $urlRouterProvider.otherwise('home');

            }]);

