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
        // return (<div>{this.props.predictions}</div>)
        return(this.props.predictions.map((item, index)=>{return <div>
            
            {/* <br/> */}
            <input className="listBit" type="button" id={index} value="true" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <input className="listBit" type="button" id={index} value="false" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <span className="listBit">{item.confidence}% </span>
            <span className="score">{item.eval === "true" ? <span className="greenish">{item.eval}</span> : 
            item.eval === "false" ? <span className="redish">{item.eval}</span> :
            <span className="blueish">{item.eval}</span>}</span>
            <span className="listBit">{item.claim}</span>
            </div>}))
    }
};

export default List
//ReactDOM.render(<App />, document.getElementById("words"));