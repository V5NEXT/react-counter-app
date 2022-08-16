import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count : this.props.counter.value,
        product : 1,
        tags : ['tag1', 'tag2', 'tag3']
     } 

    render() { 
        return (<div>
            <h4>Counter {this.props.counter.value}</h4>
            <span className={this.changeBadgeColor()}>{this.formatCount()}</span>
            <button onClick={ () => this.props.onAddition(this.props.counter)} className='btn btn-primary btn-sm'>Incriment</button>
            <button onClick={ ()=> this.props.onDelete(this.props.counter.id)} className='btn m-2 btn-sm btn-danger'>Delete</button>
        </div>);
    
    }
    renderTags(){
        return  <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    formatCount(){

       return this.props.counter.count === 0 ? 'Zero': this.props.counter.count;
    }
    changeBadgeColor(){
        let classes = 'badge m-2 '
        classes += this.props.counter.count === 0 ? 'bg-secondary': 'bg-primary'

        return classes

    }
}
 
export default Counter;