(() => {
  'use strict';
  angular
    .module('correosCR')
    .controller('registerUserController', registerUserController);

  registerUserController.$inject = ['NgMap'];

  function registerUserController(NgMap) {
    const vm = this;

    NgMap.getMap("map").then((map) => {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
      vm.map = map;
    });

    vm.current = '';
    
    vm.callbackFunc = function (param) {
      console.log('I know where ' + param + ' are. ' + vm.message);
      console.log('You are at' + vm.map.getCenter());

      vm.current = vm.map.getCenter();
    };

    

    vm.nuevoCliente = {}
  };
})();