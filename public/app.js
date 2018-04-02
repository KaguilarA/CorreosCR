(() => {
  'use strict';
  angular
  .module('correosCR', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngMap'])

  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('USER_ROLES', {
    all: '*',
    admin: 'administrador',
    customsOfficer: 'Encargado de aduana',
    branchManager: 'Encargado de sucursal',
    deliveryMan : 'Repartidor',
    client: 'Cliente'
  });
  
})();