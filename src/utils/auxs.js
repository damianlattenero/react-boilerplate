var counter = 0;
var  ID = {
    get: function () {
        return ++counter;
    }
};
module.exports = ID;