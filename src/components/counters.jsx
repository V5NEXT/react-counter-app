import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {

    render() { 
        console.log(this.props)
        return (
            <div>
            <button onClick={this.props.onReset} className='btn btn-sm btn-secondary'>Reset</button>
              {this.props.counters.map((counter)=> <Counter key={counter.id}
              onAddition={this.props.onAddition} onDelete={this.props.onDelete} 
              counter={counter}> 
              </Counter>)}

            </div>
        );
    }
}
 
export default Counters;