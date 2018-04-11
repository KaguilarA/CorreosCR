(() => {
  'use strict';
  angular
  .module('correosCR')
  .controller('landingPageController', landingPageController);

  landingPageController.$inject = ['$document'];

  function landingPageController($document){
    const top = 400,
          duration = 2000;

    const vm = this;

    vm.toTheTop = function() {
      $document.scrollTopAnimated(0, 1000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
  }
})();