(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.newRoom = function() {            
            var modalInstance = $uibModal.open({
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              size: 'sm'
            });
        }
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();