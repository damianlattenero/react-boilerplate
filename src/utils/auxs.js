var counter = 0;
var ID = {
    get: function() {
        return `${Date.now()}-${++counter}`;
    },
};

export default ID;