'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
   
   RestangularProvider.setBaseUrl('http://localhost:3000');


    $routeProvider
    

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        //controllerAs: 'main'
        //resolve: {
        //  logincheck: checkLoggedin
       // }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        //controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
       // controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
      //  controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
      //  controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
      //  controllerAs: 'movieEdit'
      })
     // .when('/timeoffreq', {
      //  templateUrl: 'views/timeoffreq.html',
       // controller: 'TimeoffreqCtrl',
        // controllerAs: 'timeoffreq'
      //})
      .when('/tickets', {
        templateUrl: 'views/tickets.html',
        controller: 'TicketsCtrl',
        //controllerAs: 'tickets'
      })
      .when('/create/ticket', {
        templateUrl: 'views/ticket-add.html',
        controller: 'TicketAddCtrl',
        //controllerAs: 'ticketAdd'
      })
      .when('/ticket/:id', {
        templateUrl: 'views/ticket-view.html',
        controller: 'TicketViewCtrl',
       // controllerAs: 'ticketView'
      })
      .when('/ticket/:id/delete', {
        templateUrl: 'views/ticket-delete.html',
        controller: 'TicketDeleteCtrl',
      //  controllerAs: 'ticketDelete'
      })
      .when('/ticket/:id/edit', {
        templateUrl: 'views/ticket-edit.html',
        controller: 'TicketEditCtrl',
      //  controllerAs: 'ticketEdit'
      })
      .when('/create/timeoffreq', {
        templateUrl: 'views/timeoffreq.html',
        controller: 'TimeoffreqAddCtrl',
      //  controllerAs: 'timeoffreqAdd'
      })
      .when('/timeoffreq/:id', {
        templateUrl: 'views/timeoffreq-view.html',
        controller: 'TimeoffreqViewCtrl',
      //  controllerAs: 'timeoffreqView'
      })
      .when('/timeoffreq/:id/delete', {
        templateUrl: 'views/timeoffreq-delete.html',
        controller: 'TimeoffreqDeleteCtrl',
       // controllerAs: 'timeoffreqDelete'
      })
      .when('/timeoffreq/:id/edit', {
        templateUrl: 'views/timeoffreq-edit.html',
        controller: 'TimeoffreqEditCtrl',
        //controllerAs: 'timeoffreqEdit'
      })
      .when('/timeoffreq', {
        templateUrl: 'views/timeoffreq.html',
        controller: 'TimeoffreqAddCtrl',
        //controllerAs: 'tickets'
      })
      .when('/timeoffreq-view2', {
        templateUrl: 'views/timeoffreq-view2.html',
        controller: 'TimeoffCtrl',
        //controllerAs: 'tickets'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        //controllerAs: 'users'
      })
      .when('/create/user', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        //controllerAs: 'userAdd'
      })
      .when('/user/:id', {
        templateUrl: 'views/user-view.html',
        controller: 'UserViewCtrl',
        //controllerAs: 'userView'
      })
      .when('/user/:id/delete', {
        templateUrl: 'views/user-delete.html',
        controller: 'UserDeleteCtrl',
        //controllerAs: 'userDelete'
      })
      .when('/user/:id/edit', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl',
        //controllerAs: 'userEdit'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        //controllerAs: 'login'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        //controllerAs: 'logout'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        //controllerAs: 'register'
      })
      .when('/auth/signup', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
        //controllerAs: 'signup'
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        //controllerAs: 'profile'
      })
      .otherwise({
        redirectTo: '/' //update from '/' to '/login' 10-18-16
      });
  })
  .factory('MovieRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Movie', function(MovieRestangular) {
  return MovieRestangular.service('movie');
})
.factory('Ticket', function(MovieRestangular) {
  return MovieRestangular.service('ticket');
})
.factory('Timeoff', function(MovieRestangular) {
  return MovieRestangular.service('timeoff');
})
.factory('User', function(MovieRestangular) {
  return MovieRestangular.service('user');
})
.directive('youtube', function() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    templateUrl: 'views/youtube.html'
  };
})
.filter('trusted', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});


/*

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
};

*/