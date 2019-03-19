import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: []
        };
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:1337/read")
        .then((result)=>{console.log(result)})
        .catch((err)=>{console.log(err)});
    }

    render(){
        return(<p>this is stuff</p>)
    }
};

//ReactDOM.render(<App />, document.getElementById("words"));