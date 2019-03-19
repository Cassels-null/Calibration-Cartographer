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
        return(this.props.predictions.map((item)=>{return <div>
            <span>{item.claim}....{item.confidence}....{item.eval}</span>

            <input type="button" id="2" value="true" onClick={(e)=>{window.alert(e.target.id)}}></input>
            <input type="button" tag={2} value="false" onClick={(e)=>{window.alert(e.target.value)}}></input>
            </div>}))
    }
};

export default List
//ReactDOM.render(<App />, document.getElementById("words"));