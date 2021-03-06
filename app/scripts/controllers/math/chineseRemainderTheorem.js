'use strict';

angular.module('algorithmsApp')
	.controller('chineseRemainderTheorem', function ($scope, ChineseRemainderTheorem, Utils) {

		$scope.x = 'x';

		$scope.rows = [{
			m: 3,
			a: 2
		}, {
			m: 4,
			a: 3
		}, {
			m: 5,
			a: 2
		}];

		$scope.addRow = function () {
			$scope.rows.push({
				m: Utils.randomNumber(2, 100),
				a: Utils.randomNumber(2, 100)
			});
			$scope.calculate();
		};

		$scope.dropRow = function (i) {
			$scope.rows.splice(i, 1);
			$scope.calculate();
		};

		$scope.calculate = function () {
			var aVector = [],
				mVector = [];

			$scope.rows.forEach(function (row) {
				aVector.push(parseInt(row.a, 10));
				mVector.push(parseInt(row.m, 10));
			});

			$scope.x = ChineseRemainderTheorem.calculate(aVector, mVector);
		};

		$scope.calculate();

	});