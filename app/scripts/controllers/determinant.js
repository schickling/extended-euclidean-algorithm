'use strict';

angular.module('algorithmsApp')
	.controller('DeterminantCtrl', function ($scope, LeibnizDeterminant) {

		$scope.algorithms = [
			{
				name: 'Leibniz',
				service: LeibnizDeterminant
			}
		];

		$scope.selectedAlgorithm = $scope.algorithms[0];

		$scope.matrix = [[1, 3, -9], [11, -3, -5], [2, 8, -1]];

		$scope.calculate = function() {
			// LeibnizDeterminant.calculate($scope.matrix);
			$scope.determinant = $scope.selectedAlgorithm.service.calculate($scope.matrix);
		};

		$scope.calculate();

	});