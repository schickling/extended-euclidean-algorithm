'use strict';

angular.module('algorithmsApp')
	.service('ExtendedEuclideanAlgorithm', function ExtendedEuclideanAlgorithm() {

		return {
			calculate: function (a, b) {

				var x, y, quotient, remainder, combinationA, combinationB, gcd, lcm,
					steps = [],
					index = 2;

				// initialize
				steps.push({
					remainder: Math.abs(a),
					combinationA: a.sign(),
					combinationB: 0,
				});
				steps.push({
					remainder: Math.abs(b),
					combinationA: 0,
					combinationB: b.sign(),
				});

				// magic!
				do {
					quotient = parseInt(steps[index - 2].remainder / steps[index - 1].remainder, 10);
					remainder = steps[index - 2].remainder % steps[index - 1].remainder;
					combinationA = steps[index - 2].combinationA - steps[index - 1].combinationA * quotient;
					combinationB = steps[index - 2].combinationB - steps[index - 1].combinationB * quotient;

					steps.push({
						quotient: quotient,
						remainder: remainder,
						combinationA: combinationA,
						combinationB: combinationB,
					});

					index++;
				} while (remainder > 0);

				// delete last steps
				steps.pop();

				x = steps[index - 2].combinationA;
				y = steps[index - 2].combinationB;
				gcd = a * x + b * y;
				lcm = Math.abs(a * b / gcd);

				return {
					x: x,
					y: y,
					gcd: gcd,
					lcm: lcm,
					steps: steps
				};
			}
		};

	});