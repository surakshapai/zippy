var app = angular.module("app", [])

app.directive("zippy",function(){
	return {
	restrict: "E", //restricted to the element
	transclude: true,
	scope: { //isolate scope
		title:"@" //gets the title attribute of the scope. 
	},
	template: '<div>' + 
			   '<h3 ng-click="toggleContent()">{{title}}</h3>' + 
			   '<div ng-show="isContent" ng-transclude> Hello </div>' + 
			   '</div>', //binding is happening
	link: function(scope)
	{
		scope.isContent = false;

		scope.toggleContent = function(){
			scope.isContent = !scope.isContent;
		}
	}
	}
})