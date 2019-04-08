import React from 'react';
import ReactDOM from 'react-dom';
import chart from 'chart.js';

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            predictions: []
        };
    }

    componentDidMount(){
        var ctx = document.getElementById('statsGraph').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.props.intervals,
                datasets: [{
                    label: 'Ideal Relationship',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: this.props.intervals
                }]
            },
            options: {}
        });
    }

    render(){
        return(
            <canvas id='statsGraph'></canvas>
        )
    }
};

export default Graph;