var counter = 0;
var ID = {
    get: function() {
        return `${ID.chr4()}-${ID.chr4()}-${ID.chr4()}-${ID.chr4()}`;
    },

    chr4: function(){
        counter++;
        return Math.random().toString(16).slice(-4) + counter;
    }

};

export default ID;