import React, { Component } from 'react';
import Counter from './counter';



class Counters extends Component {

    render() { 
        return (
            <div>
            <button onClick={this.props.onReset} className='btn btn-sm btn-secondary'>Reset</button>
            <div className='counters_main_div'>
              {this.props.counters.map((counter)=> <Counter key={counter.id}
              onAddition={this.props.onAddition} onDelete={this.props.onDelete} 
              counter={counter}> 
              </Counter>)}
              </div>
            </div>
        );
    }
}
 
export default Counters;