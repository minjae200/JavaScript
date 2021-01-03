var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
}
var getHeadcount = function() {
    return Object.keys(this.members).length;
}
var family = {address, members, addFamily, getHeadcount};


family.addFamily(30, 'choloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());

var printMembers = function () {
    var members = family.members;
    for (role in members) {
        console.log('role => ' + role + ', name => ' + members[role].name + ', age => ' + members[role].age);
    }
};
printMembers();