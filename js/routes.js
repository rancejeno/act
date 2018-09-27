angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('ramram1', {
    url: '/page3',
    templateUrl: 'templates/ramram1.html',
    controller: 'ramram1Ctrl'
  })

  .state('c', {
    url: '/page13',
    templateUrl: 'templates/c.html',
    controller: 'cCtrl'
  })

  .state('rax', {
    url: '/page12',
    templateUrl: 'templates/rax.html',
    controller: 'raxCtrl'
  })

  .state('chanix', {
    url: '/page11',
    templateUrl: 'templates/chanix.html',
    controller: 'chanixCtrl'
  })

  .state('itan', {
    url: '/page10',
    templateUrl: 'templates/itan.html',
    controller: 'itanCtrl'
  })

  .state('page', {
    url: '/page9',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('addContact', {
    url: '/page14',
    templateUrl: 'templates/addContact.html',
    controller: 'addContactCtrl'
  })

$urlRouterProvider.otherwise('/page9')


});