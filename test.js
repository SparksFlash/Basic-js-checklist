var friends = ['Mofez', 'Kattu', 'Motu', 'Mc', 'Mangta', 'Chapri', 'Heron', 'Goriber Darshan'];

function bestFriend(friends) {
    var longestLength = 0;
    var longestName = '';
    for (var friend of friends) {
        if (longestLength < friend.length) {
            longestLength = friend.length;
            longestName = friend;
        }
    }
    return longestName;
}

var big_spell = bestFriend(friends);
console.log(big_spell);
