app.controller('todoController', function todoController($scope, $firebaseArray) {

    var url = 'https://angularjstodolist003.firebaseio.com/';
    var fireRef = new Firebase(url);
    $scope.items = $firebaseArray(fireRef);

    $scope.addItem = function () {
        $scope.items.$add({
            title: $scope.newItemTitle,
            done: false
        });
        $scope.newItemTitle = '';

    };

    $scope.removeItem = function (item) {
        $scope.items.$remove(item);
    };

    $scope.checkItem = function (item) {
        console.log(item);
        $scope.items.$save(item);
    };

});