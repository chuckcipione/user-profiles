angular.module('userProfiles')
.controller('profileCtrl', function( $scope ) {
	var profiler = function(){
		friendService.getFriendProfiles().then(function(response){
			$scope.currentUser = response.data.currentUser;
			$scope.friends = response.data.friends;
		});
	};
	profiler();
});