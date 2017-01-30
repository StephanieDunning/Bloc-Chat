(function() {
    function HomeCtrl(Message, Room, $uibModal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
        
        this.newRoom = function() {            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'sm'
            });
        }
        
        this.showRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }
    }
 
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', HomeCtrl]);
})();