(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            send: function(newMessage,roomId) {
                console.log("sending")
                var data = {
                    content: newMessage,
                    username: $cookies.get('currentUser'),
                    roomId: roomId,
                    sentAt: (new Date()).toString()
                }
                messages.$add(data);         
            },
            messages: messages
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();