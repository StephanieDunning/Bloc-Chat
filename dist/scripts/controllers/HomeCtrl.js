(function() {
    function HomeCtrl($scope, $cookies, Message, Room, $uibModal) {
        this.rooms = Room.all;
        this.currentRoom = null;
        this.messages = null;
//        this.user = $cookies.get('currentUser');
        
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
        .controller('HomeCtrl', ['$scope', '$cookies', 'Message', 'Room', '$uibModal', HomeCtrl]);
})();