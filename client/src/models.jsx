import axios from 'axios'

var models = {
    send: function(prediction){
        axios.post("http://127.0.0.1:1337/make",
        {
            tag: 1,
            claim: "words",
            confidence: 70,
            eval: "pending"
        })
    },
    update: function(prediction){
        axios.get("http://127.0.0.1:1337/make")
    }
};

export default models