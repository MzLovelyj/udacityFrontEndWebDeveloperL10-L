var facebookProfile = {
    name: 'Jessica',
    friends: 101,
    messages: ['In Cartegena', 'Hello World!', 'In Costa Rica', 'Looks like a beach day!', 'woah'],

    postMessage: function(message) {
        return facebookProfile.messages.push(message);
    },

    deleteMessage: function(index) {
        return facebookProfile.messages.splice(index, 1);
    },

    addFriend: function() {
        return facebookProfile.friends += 1;
    },

    removeFriend: function() {
        return facebookProfile.friends -= 1;
    }
};

facebookProfile.postMessage('Hi!');
console.log(facebookProfile.messages);
//testing adding a message

facebookProfile.deleteMessage(-1);
console.log(facebookProfile.messages);
//tested removing the last message

facebookProfile.removeFriend();
console.log('You have ' + facebookProfile.friends + ' friends');
// tested removing a friend

facebookProfile.addFriend();
console.log('You now have ' + facebookProfile.friends + ' friends');
//tested adding a friend