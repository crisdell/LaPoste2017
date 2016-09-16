(function() {
    'use strict';

    angular.module('zoop.LaPoste', ['tc.chartjs','ui.router', 'mgcrea.ngStrap'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                url: '/main',
                controller: 'MainController as vm',
                templateUrl: '../app/main/index.html'
            })
            .state('main.steps', {
                url: '/steps/:stepNum',
                controller: 'StepsController as vm',
                templateUrl: '../app/main/step-1.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '../app/dashboard/index.html'
            })
    })

    .controller('AppController', AppController);

    AppController.$inject = ['$state', '$modal', '$aside'];

    function AppController($state, $modal, $aside) {
        var vm = this;
        vm.locaModal = $modal({
            templateUrl: '../app/modals/select-loca.html',
            show: false
        });
        vm.periodAside = $aside({
            title: 'Period',
            content: 'Test',
            show: false
        });
        vm.selectLoca = function() {
            vm.locaModal.$promise.then(vm.locaModal.show);
        };
        vm.selectPeriod = function() {
            vm.periodAside.$promise.then(vm.periodAside.show);
        }
    }

}())
