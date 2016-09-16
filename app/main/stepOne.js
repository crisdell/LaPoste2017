(function() {
	'use strict';
	angular.module('zoop.LaPoste')
		.controller('StepOneController', StepOneController);

		function StepOneController() {
			var vm = this;
			vm.getLineData = function(data){
				return {
					labels: ['1/17', '2/17', '3/17', '4/17'],
					datasets: [{
						label: 'National',
						backgroundColor: "rgba(76,142,178,0.2)",
	            	borderColor: "rgba(76,142,178,1)",
	            	fill: false,
						data: data[0]
					}, {
						label: 'Agence',
						backgroundColor: "rgba(247,190,32,0.2)",
	            		borderColor: "rgba(247,190,32,1)",
	            	fill: false,
						data: data[1]
					}]
				};
			};

			vm.subSteps = [{
				title: 'Tout client venant pour un rendez-vous bancaire',
				study1: [{
					title: 'Joignablité COBAS',
					score: 80,
					unit: '%',
					trend: vm.getLineData([
						[30, 24, 40, 45],
						[66, 21, 6, 20]
					])
				}, {
					title: 'Joignablité CSP',
					score: 84,
					unit: '%',
					trend: vm.getLineData([
						[32, 22, 42, 12],
						[40, 25, 10, 45]
					])
				}, {
					title: 'Transmission des informations',
					score: 92,
					unit: '%',
					trend: vm.getLineData([
						[36, 26, 46, 16],
						[22, 22, 44, 24]
					])
				}],
				study2: [{
					title: 'Disponibité du conseiller LBP',
					score: 60,
					unit: '%',
					trend: vm.getLineData([
						[30, 24, 40, 14],
						[20, 21, 45, 20]
					])
				}, {
					title: 'Joignaibilité du conseiller LBP',
					score: 43,
					unit: '%',
					trend: vm.getLineData([
						[32, 44, 42, 44],
						[24, 25, 10, 45]
					])
				}, {
					title: 'Durée des RDV bancaires',
					score: 69,
					unit: '%',
					trend: vm.getLineData([
						[36, 26, 46, 16],
						[22, 42, 44, 24]
					])
				}]
			}, {
				title: 'Prospects bancaires',
				study1: [{
					title: 'Reçus en moins de 48h',
					score: 80,
					unit: '%',
					trend: vm.getLineData([
						[30, 55, 40, 14],
						[20, 21, 55, 20]
					])
				}],
				study2: [{
					title: 'Suivi du dossier LBP',
					score: 60,
					unit: '%',
					trend: vm.getLineData([
						[30, 24, 40, 55],
						[20, 55, 45, 20]
					])
				}]
			}, {
				title: 'Clients patrimoniaux',
				study1: [{
					title: 'NPS MS1',
					score: 80,
					unit: '+',
					trend: vm.getLineData([
						[30, 24, 40, 14],
						[20, 21, 45, 20]
					])
				}, {
					title: 'NPS MS2',
					score: 60,
					unit: '+',
					trend: vm.getLineData([
						[30, 24, 40, 14],
						[20, 21, 45, 20]
					])
				}]
			}];

			vm.lineChart = {
				options: {
					legend: {
						display: false
					},
					scales: {
						yAxes: [{
							ticks: {
								display: false,
								beginAtZero: true,
							}
						}]
					}
				}
			};

		}
}())
