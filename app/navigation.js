(function() {
    'use strict';
    angular.module('zoop.LaPoste')
        .factory('NavFactory', NavFactory);

    NavFactory.$inject = ['$state', '$stateParams'];

    function NavFactory($state, $stateParams) {
        var self = this;
        var steps = ['30 Premieres secondes', 'Servir les clients dans les meilleurs delais','Etre attentifs a nos clients bancaires',
            'Personnaliser la relation avec les clients pros', 'Etre presents a chaque instant', 'Proches, accessibles et connectes',
            'L\'avis de nos clients nous importe'];
        var pos = [{
            'top': 85,
            'left': 20
        },{
            'top': 90,
            'left': 20,
            'width': 180
        },{
            'top': 70,
            'left': 20,
            'width': 120
        },{
            'top': 20,
            'left': 20,
            'width': 180
        },{
            'top': 140,
            'left': 20,
        },{
            'top': 30,
            'left': 20,
        },{
            'top': 90,
            'left': 20,
        }];

        self.navItems = [{
            name: 'step-1',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 1,
                title: steps[0],
                position: pos[0]
            },
            content: 'steps.html'
        },{
            name: 'step-2',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 2,
                title: steps[1],
                position: pos[1]
            },
            content: 'steps.html'
        },{
            name: 'step-3',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 3,
                title: steps[2],
                position: pos[2]
            },
            content: 'steps.html'
        },{
            name: 'step-4',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 4,
                title: steps[3],
                position: pos[3]
            },
            content: 'steps.html'
        },{
            name: 'step-5',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 5,
                title: steps[4],
                position: pos[4]
            },
            content: 'steps.html'
        },{
            name: 'step-6',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 6,
                title: steps[5],
                position: pos[5]
            },
            content: 'steps.html'
        },{
            name: 'step-7',
            direction: 'down',
            state: 'main.steps',
            data:{
                stepNum: 7,
                title: steps[6],
                position: pos[6]
            },
            content: 'steps.html'
        },{
            name: 'Mon implication client',
            direction: 'down',
            state: null,
            content: 'mon-implication-client.html',
            size: 2
        },{
            name: 'Synergie',
            direction: 'left',
            state: null,
            content: 'synergie.html'
        }];

        // for (var i = 1; i<=7; i++) {
        //     self.navItems.push({
        //         name: 'step-' + i,
        //         direction: 'down',
        //         state: 'main.steps',
        //         data:{
        //             stepNum: i,
        //             title: steps[i-1],
        //             position: pos[i-1]
        //         },
        //         content: 'steps.html'
        //     })
        // }
        //building css classes

        self.active = null;
        self.isActive = function(item) {
            return self.active == item;
        }
        self.setActive = function(item) {
            self.active = item;
        }
        self.getCssClass = function(size) {
            size = (typeof(size) == 'undefined') ? 1 : size;
            var control = size * 2;
            var bsClasses = [{name:'col-xs',mult:6}, {name:'col-sm',mult:2}, {name:'col-md',mult:1.5}, {name:'col-lg',mult:1}];
            var cssClasses = [];
            angular.forEach(bsClasses, function(bsClass){
                var size = control * bsClass.mult;
                size = size > 12 ? 12 : size;
                cssClasses.push(bsClass.name + '-' + size);
            })
            return cssClasses;
        }

        angular.forEach(self.navItems, function(item) {
            item.cssClass = self.getCssClass(item.size);
        });

        return self;
    }
}())
