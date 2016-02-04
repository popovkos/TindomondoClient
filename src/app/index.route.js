(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('eventDetail', {
        url: '/eventDetail',
        templateUrl: 'app/components/eventDetail/eventDetail.html',
        controller: 'EventController'
      }).state('addEvent', {
        url: '/addEvent',
        templateUrl: 'app/components/addEvent/addEvent.html',
        controller: 'addEventController',
        controllerAs: 'controller'
      }).state('eventList', {
        url: '/eventList',
        templateUrl: 'app/components/eventList/eventList.html',
        controller: 'EventListController'
      }).state('preferences', {
        url: '/preferences',
        templateUrl: 'app/components/preferences/preverences.html',
        controller: 'preferencesontroller'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
