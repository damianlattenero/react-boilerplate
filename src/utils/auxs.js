var ID = {
    get: function() {
        return `${Date.now()}-${ID.chr4()}-${ID.chr4()}-${ID.chr4()}-${ID.chr4()}`;
    },

    chr4: function(){
        return  Math.random().toString(16).slice(-4);
    }

};

export default ID;