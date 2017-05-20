angular.module('fkgame.controller',['fkgame.services'])

.directive('modalDialog',function(){
	return {
		restrict:'A',
		templateUrl:'templates/modal-dialog.html',
		replace:true
	}
})

//角色选择
.controller('SelectRoleCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '角色选择',
		rightTitle : '返回首页',
		rightHide : true
	}
	
	$scope.role = {};
}])

//选择投资
.controller('SelectInvestCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '选择投资',
		rightTitle : '返回首页',
		rightHide : false
	}
}])

//分配股权
.controller('DistributeStockCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '分配股权、股权收益比例',
		rightTitle : '返回首页',
		rightHide : false
	}
}])

//投资列表
.controller('InvestmentListCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '我的投资',
		rightTitle : '返回首页',
		rightHide : false
	}
}])

//股权分配结果反馈
.controller('StaffFeedbackCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '股权分配结果反馈',
		rightTitle : '返回首页',
		rightHide : false
	}
}])

//选择入职
.controller('selectEntryCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '选择入职',
		rightTitle : '返回首页',
		rightHide : false
	}

}])

//员工招聘、分配职务（董事长）
.controller('StaffEmployeeCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '员工招聘',
		rightTitle : '返回首页',
		rightHide : false
	}
}])

//权限分配（入职状态）
.controller('DistributePermissionStatusCtrl',['$scope','GetParams',function($scope,GetParams){
	$scope.header = {
		leftTitle : '入职状态',
		rightTitle : '返回首页',
		rightHide : false
	}

	$scope.role = {};
	if(location.href){
		var UrlSearch = new GetParams.UrlSearch();
		$scope.role.type = UrlSearch.type;
	}
}])

//权限分配（董事长）
.controller('DistributePermissionCtrl',['$scope',function($scope){
	$scope.header = {
		leftTitle : '权限分配',
		rightTitle : '返回首页',
		rightHide : false
	}
}])







.controller('ContractResultCtrl',['$scope','GetParams',function($scope,GetParams){
	if(location.href){
		var UrlSearch = new GetParams.UrlSearch();
		$scope.UrlSearchId = UrlSearch.id;
		console.log($scope.UrlSearchId);
	}
}])