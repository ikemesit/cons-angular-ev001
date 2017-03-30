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
      url: '/edit/{userName}',
      component: 'userAdminEdit',
      resolve: {
        user: ['dataService', '$transition$', '$log', function (dataService: any, $transition$: any, $log: angular.ILogService) {
          // $log.info($transition$.params().userName);
          return dataService.getUser($transition$.params().userName).then(response => { return response[0]; });
        }]
      }
    });
}
