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
            {/* <button onClick={()=>{models.send()}}>this is stuff</button> */}
            <br/>
            <input type="text" onClick={(e)=>{if(e.target.value.length > 3){
                models.send({claim: e.target.value, tag: this.state.predictions.length})
                console.log(e.target.value);
                console.log(this.state.predictions.length);
            }}}></input>
            <input id="guess" type="number" min="10" max="90" step="10"></input>
            <List predictions={this.state.predictions}/>
            <Compare  predictions={this.state.predictions} confidence={10}/>
            <Compare  predictions={this.state.predictions} confidence={20}/>
            <Compare  predictions={this.state.predictions} confidence={30}/>
            <Compare  predictions={this.state.predictions} confidence={40}/>
            <Compare  predictions={this.state.predictions} confidence={50}/>
            <Compare  predictions={this.state.predictions} confidence={60}/>
            <Compare  predictions={this.state.predictions} confidence={70}/>
            <Compare  predictions={this.state.predictions} confidence={80}/>
            <Compare  predictions={this.state.predictions} confidence={90}/>
        </div>)
    }
};

ReactDOM.render(<App />, document.getElementById("words"));