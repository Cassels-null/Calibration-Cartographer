import React from 'react';
import ReactDOM from 'react-dom';
import models from './models.jsx';
import Compare from './compare.jsx';
import Graph from './graph.jsx';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: []
        };
    }

    render(){
        this.props.predictions.sort((a, b)=>{
            if(a.eval === "pending") return -1; 
            if(a.eval === "false") return 1; 
            if(a.eval === "true" && b.eval === "pending")
            return 1;})
        return(<div className="list">{
        (this.props.predictions.map((item, index)=>{return <div className="item">
            
            <input className="listBit" type="button" id={item.tag} value="true" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <input className="listBit" type="button" id={item.tag} value="false" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <span className="listBit">{item.confidence}% </span>
            <span className="score">{item.eval === "true" ? <span className="greenish">{item.eval}</span> : 
            item.eval === "false" ? <span className="redish">{item.eval}</span> :
            <span className="blueish">{item.eval}</span>}</span>
            <span className="eval">{item.claim}</span>
            </div>}))}
            {/* <Graph predictions={this.props.predictions} intervals={this.props.intervals}/> */}
            <div id="statsRatio">
                {this.props.intervals.map((confidence)=>{
                    return <Compare  predictions={this.props.predictions} confidence={confidence}/>
                })}
            </div>
        </div>)
    }
};

export default List