var app = angular.module('TheHollowHeart',['ui.router']);




app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('index',{
                    url: '/index',
                    templateUrl: '/index.hml',
                })

                $urlRouterProvider.otherwise('index');

            }]);

