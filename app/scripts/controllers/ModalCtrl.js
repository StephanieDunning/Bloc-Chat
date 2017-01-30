(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.newRoom = '';
        
        this.createNewRoom = function() {
            if(this.newRoom) {
                Room.add(this.newRoom);
                $uibModalInstance.close();
            } else {
                alert('You must enter a room name!');
            }            
        };
            
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();