import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import { models } from 'mongoose';
import models from './models.jsx';
import List from './list.jsx';
import Compare from './compare.jsx';
import Graph from './graph.jsx';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: [],
            intervals: [10, 20, 30, 40, 50, 60, 70, 80, 90]
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
        return(<div id="master">
            <br/>
            {/* input fields */}
            <input id="input" type="text"></input>
            <input id="guess" type="number" min="10" max="90" step="10"></input>
            <button onClick={()=>{models.send({claim: document.getElementById("input").value, tag: this.state.predictions.length})}}>Submit</button>
            <Graph intervals={this.state.intervals} predictions={this.state.predictions}/>
            {/* display predictions */}
            <List predictions={this.state.predictions} intervals={this.state.intervals}/>
            {/* display statistics */}
            {/* {this.state.intervals.map((confidence)=>{
                return <Compare  predictions={this.state.predictions} confidence={confidence}/>
            })} */}
        </div>)
    }
};

ReactDOM.render(<App />, document.getElementById("words"));