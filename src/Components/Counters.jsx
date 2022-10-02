import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
    state = { counters: [{ id: 0, value: 4 }, { id: 1, value: 3 }, { id: 3, value: 2 }, { id: 4, value: 1 }] }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }
    handleDelete = id => {
        const counters = this.state.counters.filter(c => (c.id !== id));
        this.setState({ counters });
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        });
        this.setState({ counters });
    }
    render() {
        return <div>
            {this.state.counters.map(counter => (<Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete}></Counter>))}
            <button className="btn btn-dark" onClick={this.handleReset}>Reset</button>
        </div>;
    }
}

export default Counters;