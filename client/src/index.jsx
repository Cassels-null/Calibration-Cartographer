import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import { models } from 'mongoose';
import models from './models.jsx';
import List from './list.jsx';
import Compare from './compare.jsx';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: []
        };
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.update();
    }

    update(){
        axios.get("http://127.0.0.1:1337/read")
        .then((result)=>{this.setState({predictions : result.data})})
        .catch((err)=>{console.log(err)});
        setTimeout(()=>{this.update()},200);
    }

    render(){
        return(<div>
            <button onClick={()=>{models.send()}}>this is stuff</button>
            <List predictions={this.state.predictions}/>
            <Compare  predictions={this.state.predictions} confidence={70}/>
        </div>)
    }
};

ReactDOM.render(<App />, document.getElementById("words"));