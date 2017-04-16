'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:TimeoffreqAddCtrl
 * @description
 * # TimeoffreqAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('TimeoffreqAddCtrl', function ($scope, Timeoff, $location) {
    

$scope.employees=

		                 [  
		                    {name:'Vacation (paid)'},
							{name:'Sick Leave (paid)'},
							{name:'Jury Duty (not paid)'},
							{name:'Vote (not paid)'},
							{name:'Bereavement'},
							{name:'FMLA'},
							{name:'Maternity Leave'},
							{name:'Subpoena (not paid)'},
							{name:'Other (not paid)'}
			

						 ];


		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(employeeName) {
	    var idx = $scope.selection.indexOf(employeeName);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      $scope.selection.push(employeeName);
	    }
	  };

$scope.applyto=

		                 [  
		                    {option:'Vacation (paid)'},
							{option:'Sick Leave (paid)'},
							{option:'Other (not paid)'}
			

						 ];


		$scope.selection=[];
		// toggle selection for a given employee by name
		$scope.toggleSelection = function toggleSelection(applytooption) {
	    var idx = $scope.selection.indexOf(applytooption);

	    // is currently selected
	    if (idx > -1) {
	      $scope.selection.splice(idx, 1);
	    }

	    // is newly selected
	    else {
	      $scope.selection.push(applytooption);
	    }
	  };








    $scope.timeoff = {};
  $scope.saveTimeoff = function() {
    Timeoff.post($scope.timeoff).then(function() {
      $location.path('/Timeoffreq');
    });
  };
});