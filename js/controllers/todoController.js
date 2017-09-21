app.controller('todoController', function todoController($scope, $firebaseArray) {

    var url = 'https://angularjstodolist003.firebaseio.com/';
    var fireRef = new Firebase(url);


    $scope.items = $firebaseArray(fireRef);

    console.log($scope.items);

    $scope.addItem = function () {
        $scope.items.$add({
            title: $scope.newItemTitle,
            done: false
        });
        $scope.formTodoText = '';

    };

    $scope.removeItem = function (item) {
        $scope.items.$remove(item);
    };
    
});