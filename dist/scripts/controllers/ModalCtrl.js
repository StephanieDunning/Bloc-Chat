(function() {
    function ModalCtrl($scope, Room, $uibModalInstance) {
        $scope.rooms = Room;
        $scope.newRoom = {name: ''};
        
        $scope.createNewRoom = function(newRoom) {
            Room.all.$add({
                name: $scope.newRoom.name
            });
            
            $uibModalInstance.close();
        };
            
        $scope.cancelCreate = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
})();