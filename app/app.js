(function() {
    'use strict';

    angular.module('zoop.LaPoste', ['tc.chartjs','ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/main');
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

    AppController.$inject = ['$state'];

    function AppController($state) {


    }

}())
