const app = angular.module("myApp", []);
app.controller("myCtrl", ($scope) => {
  $scope.names = [
    {
      firstName: "Adarsh",
      lastName: "Pandya",
      department: "MCA",
      basicSalary: 40000,
    },
    {
      firstName: "Sharan",
      lastName: "Shah",
      department: "Bca",
      basicSalary: 10000,
    },
    {
      firstName: "Riya",
      lastName: "Talati",
      department: "Msc",
      basicSalary: 45000,
    },
    {
      firstName: "Vidhi",
      lastName: "Vasoya",
      department: "Bsc",
      basicSalary: 30000,
    },
  ];
  $scope.addToList = (firstName, lastName, department, basicSalary) => {
    $scope.ifirstname = "";
    $scope.ilastname = "";
    $scope.idepartment = "";
    $scope.ibasicsalary = "";
    $scope.names.push({
      firstName,
      lastName,
      department,
      basicSalary: +basicSalary,
    });
  };
  $scope.removeFromList = (firstName) => {
    $scope.names = $scope.names.filter((user) => user.firstName != firstName);
  };
  $scope.orderParam = "basicSalary";
  $scope.filterByTags = (tag) => {
    $scope.orderParam = tag;
  };
});
