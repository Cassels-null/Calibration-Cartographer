import React from 'react';
import ReactDOM from 'react-dom';


class Compare extends React.Component {
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
        var total = 0;
        var yup = 0;
        this.props.predictions.forEach(element => {
            if(element.confidence === this.props.confidence && element.eval != "pending"){
                total++;
                if(element.eval === true || element.eval === "true"){
                    yup++;
                }
            }
        });
        return(<span><div>confidence: {this.props.confidence}%</div><div>observed: {Math.floor((yup/total)*100)}%</div></span>)
    }
};

export default Compare
//ReactDOM.render(<App />, document.getElementById("words"));