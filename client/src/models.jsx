import axios from 'axios'

var models = {
    send: function(prediction){
        axios.post("http://127.0.0.1:1337/make",
        {
            tag: (prediction.tag || null),
            claim: (prediction.claim || "I will eat food today"),
            confidence: (document.getElementById("guess").value || 90),
            eval: "pending"
        })
    },
    score: function(tag, score){
        axios.post("http://127.0.0.1:1337/score",
        {
            tag: tag,
            eval: score
        })
    },
    update: function(prediction){
        axios.get("http://127.0.0.1:1337/make")
    }
};

export default models