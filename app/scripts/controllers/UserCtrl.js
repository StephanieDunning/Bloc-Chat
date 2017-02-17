(function() {
    function UserCtrl($cookies, $uibModalInstance) {
        this.errorCode = "";
        
        this.setUserName = function() {
            if(this.userName != undefined && this.userName != "") {
                $cookies.put('currentUser', this.userName);
                $uibModalInstance.close();
            } else {
                this.errorCode = "You must choose a user name."
            }          
        };
            
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$cookies', '$uibModalInstance', UserCtrl]);
})();