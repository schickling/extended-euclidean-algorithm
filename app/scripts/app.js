'use strict';

angular.module('algorithmsApp', ['ngRoute', 'angulartics', 'angulartics.google.analytics'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .when('/extended-euclidean-algorithm', {
        templateUrl: 'views/extendedEuclideanAlgorithm.html',
        controller: 'extendedEuclideanAlgorithm'
      })
      .when('/chinese-remainder-theorem', {
        templateUrl: 'views/chineseRemainderTheorem.html',
        controller: 'chineseRemainderTheorem'
      })
      .when('/gaussian-elimination', {
        templateUrl: 'views/gaussianElimination.html',
        controller: 'gaussianElimination'
      })
      .when('/invert-matrix', {
        templateUrl: 'views/invertMatrix.html',
        controller: 'invertMatrix'
      })
      .when('/smith-normal-form', {
        templateUrl: 'views/smithNormalForm.html',
        controller: 'SmithNormalForm'
      })
      .when('/prime-number-test', {
        templateUrl: 'views/primeNumberTest.html',
        controller: 'PrimeNumberTest'
      })
      .when('/matrix-multiplication', {
        templateUrl: 'views/matrixMultiplication.html',
        controller: 'MatrixMultiplication'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (Helpers) {
    Helpers.load();
  });
