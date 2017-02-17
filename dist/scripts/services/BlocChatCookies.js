(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('currentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                controller: "UserCtrl as user",
                templateUrl: "templates/userName.html"
            })
        }
        
        return {
            user: currentUser
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
