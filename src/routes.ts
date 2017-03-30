angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('admin', {
      url: '/',
      component: 'userAdmin'
    })
    .state('edit', {
      url: '/edit',
      component: 'userAdminEdit'
    });
}
