import React from 'react';
import ReactDOM from 'react-dom';
import models from './models.jsx';


class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: []
        };
    }

    componentDidMount(){
        //
    }

    render(){
        this.props.predictions.sort((a, b)=>{
            if(a.eval === "pending") return -1; 
            if(a.eval === "false") return 1; 
            if(a.eval === "true" && b.eval === "pending")
            return 1;})
        // return (<div>{this.props.predictions}</div>)
        return(<div className="list">{
        (this.props.predictions.map((item, index)=>{return <div className="item">
            
            {/* <br/> */}
            <input className="listBit" type="button" id={item.tag} value="true" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <input className="listBit" type="button" id={item.tag} value="false" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <span className="listBit">{item.confidence}% </span>
            <span className="score">{item.eval === "true" ? <span className="greenish">{item.eval}</span> : 
            item.eval === "false" ? <span className="redish">{item.eval}</span> :
            <span className="blueish">{item.eval}</span>}</span>
            <span className="eval">{item.claim}</span>
            </div>}))}
        </div>)
    }
};

export default List
//ReactDOM.render(<App />, document.getElementById("words"));