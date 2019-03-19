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
    score: function(tag, score){
        axios.post("http://127.0.0.1:1337/score",
        {
            tag: tag,
            eval: score
        })
        console.log("score attempted");
    },
    update: function(prediction){
        axios.get("http://127.0.0.1:1337/make")
    }
};

export default models