angular.module('fkgame.controller',['fkgame.services'])

.controller('SelectRoleCtrl',['$scope',function($scope){
	$scope.role = {};
}])

.controller('ContractResultCtrl',['$scope','GetParams',function($scope,GetParams){
	if(location.href){
		var UrlSearch = new GetParams.UrlSearch();
		$scope.UrlSearchId = UrlSearch.id;
		console.log($scope.UrlSearchId);
	}
}])