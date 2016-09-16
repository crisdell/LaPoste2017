(function() {
    'use strict';
    angular.module('zoop.LaPoste')
        .controller('MainController', MainController)
        .controller('StepsController', StepsController);

    MainController.$inject = ['NavFactory', '$state'];
    StepsController.$inject = ['NavFactory', '$stateParams'];

    function MainController(NavFactory, $state) {
        var vm = this;
        vm.state = $state;
        vm.navItems = NavFactory.navItems;
        vm.nav = NavFactory;
        vm.active = null;
        vm.navLeft = [];
        vm.navRight = [];

        angular.forEach(vm.navItems, function(nav, index) {
            if ((index % 2) == 0) {
                vm.navLeft.push(nav);
            } else {
                vm.navRight.push(nav);
            }
        })

        vm.go = function(item) {
            $state.go(item.state, item.data);
            NavFactory.setActive(item.name);
        }
        vm.isActive = function(item) {
            console.log(NavFactory.active)
            return NavFactory.isActive(item.name);
        }
    }

    function StepsController(NavFactory, $stateParams) {
        var vm = this;
        vm.stateParams = $stateParams;
        NavFactory.setActive('step-' + vm.stateParams.stepNum);
    }
}())
