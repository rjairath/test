var app=angular.module('formApp',[]);
app.controller('formcontroller', function($scope){
	$scope.formArray = [];
	$scope.editIt=[];
	$scope.x = {};
	$scope.submitMyForm=function() {

		var flag=0;
		if(!$scope.name){
			$scope.nameError="enter a name";
			flag=1;
		}
		else if(!/^[a-zA-Z]*$/g.test($scope.name)){
			$scope.nameError="name can't contain numbers or special characters";
			flag=1;
		}
		if(!$scope.age){
			$scope.ageError="enter age";
			flag=1;
		}
		if(!$scope.city){
			$scope.cityError="enter city";
			flag=1;
		}
		if(flag==1){
			return;
		}

		$scope.formArray.push({
			name: $scope.name,
			age: $scope.age,
			city: $scope.city
		});
		$scope.name="";
		$scope.age="";
		$scope.city="";
		localStorage.setItem("items", JSON.stringify($scope.formArray));
	}

	$scope.viewMyForm=function(){

		location.href="/view.html";
		
	}

	$scope.loadTheForm=function(){
		if(localStorage.getItem("items")){
			$scope.formArray=JSON.parse(localStorage.getItem("items"));
			console.log($scope.formArray);
		}
		else{
			$scope.formArray=[];
		}
	}

	$scope.editRow=function(index){
		$scope.editIt[index]=true;
	}
	$scope.deleteRow=function(index){
		if(index!=-1){
			$scope.formArray.splice(index,1);
		}

		localStorage.setItem("items", JSON.stringify($scope.formArray));//local storage has been edited
	}
	$scope.saveRow=function(index){
		localStorage.setItem("items", JSON.stringify($scope.formArray));

		$scope.editIt[index]=false;
	}
});