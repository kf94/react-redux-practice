import React, { Component } from 'react';
import { connect } from 'react-redux'; //r

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        let resultItems = this.props.rslt.map(result => {
            return <li onClick={() => this.props.onDeleteResult(result.id)} key={result.id}>{result.val}</li>
        })
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 12" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {resultItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.results);
    return {
        ctr: state.ctr.counter,
        rslt: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 12}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT', val: 15}),
        onStoreResult: (result) => dispatch({type: 'STORE_RESULT', val: result}),
        onDeleteResult: (delKey) => dispatch({type: 'DELETE_RESULT', val: delKey})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);