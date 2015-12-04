var app = angular.module('TheHollowHeart',['ui.router']);




app.config(['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){

                $stateProvider.state('index',{
                    url: '/index',
                    templateUrl: '/index.hml',
                    controller: 'VideoCTRL',
                    resolve: {
                    	videoPromise: ['videoService',function(videoService){

                    		return videoService.getAll();

                    	}]
                    }
                })

                

                .state('login', {
  url: '/login',
  templateUrl: '/login.html',
  controller: 'AuthCtrl',
  onEnter: ['$state', 'auth', function($state, auth){
    if(auth.isLoggedIn()){
      $state.go('home');
    }
  }]
})
.state('register', {
  url: '/register',
  templateUrl: '/register.html',
  controller: 'AuthCtrl',
  onEnter: ['$state', 'auth', function($state, auth){
    if(auth.isLoggedIn()){
      $state.go('home');
    }
  }]
});

                $urlRouterProvider.otherwise('index');

            }]);

