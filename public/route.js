(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
    $stateProvider

      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data: {
          pageTitle: 'Correos de Costa Rica'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/landingPage/landingPage.controller.js');
          }]
        },
        controller: 'landingPageController',
        controllerAs: 'vm'
      })

      .state('registroUsuarios', {
        url: '/register_user',
        templateUrl: './components/usuarios/clientes/registro/registroClientes.view.html',
        data: {
          pageTitle: 'Registro de usuarios'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/clientes/registro/registroCliente.controller.js');
          }]
        },
        controller: 'registerUserController',
        controllerAs: 'vm'
      })

      .state('registroUsuarios.perfil', {
        url: '/profile',
        templateUrl: './components/usuarios/clientes/registro/views/registroClientes.perfil.view.html'
      })

      .state('registroUsuarios.ubicacion', {
        url: '/address',
        templateUrl: './components/usuarios/clientes/registro/views/registroClientes.ubicacion.view.html'
      })

      .state('registroUsuarios.metodosDePago', {
        url: '/payment',
        templateUrl: './components/usuarios/clientes/registro/views/registroClientes.metodoPago.view.html'
      });

    $urlRouterProvider.otherwise('/');
  };
})();