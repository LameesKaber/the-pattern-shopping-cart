import React, { Component } from "react";
import ReactDOM from 'react-dom'
export default class Counter extends Component {
    render() {
        return <div>
            <span>{this.props.counter.value}</span>
            <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onIncrement(this.props.counter)}>increment</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        </div>
    }
}
