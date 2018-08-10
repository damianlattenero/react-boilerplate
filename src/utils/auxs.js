var counter = 0;
var ID = {
    get: function () {
        return ++counter;
    }
};

export default ID;