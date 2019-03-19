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
            <span>{item.claim}____{item.confidence}____{item.eval}</span>

            <input type="button" id={index} value="true" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            <input type="button" id={index} value="false" onClick={(e)=>{models.score(e.target.id, e.target.value)}}></input>
            </div>}))
    }
};

export default List
//ReactDOM.render(<App />, document.getElementById("words"));