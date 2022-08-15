import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        count : 0,
        product : 1,
        tags : ['tag1', 'tag2', 'tag3']
     } 
     handleIncriment = (product) =>{
        console.log("Product", product);
        this.setState({
            count : this.state.count + 1
        })
     }
    render() { 
        return (<React.Fragment>
            <span className={this.changeBadgeColor()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncriment(this.state.product)} className='btn btn-primary btn-sm'>Incriment</button>
            {this.state.tags.length === 0 && "Please add tags!"}
            {this.renderTags()}
        </React.Fragment>);
    
    }
    renderTags(){
        return  <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    formatCount(){

       return this.state.count === 0 ? 'Zero': this.state.count;
    }
    changeBadgeColor(){
        let classes = 'badge m-2 '
        classes += this.state.count === 0 ? 'bg-secondary': 'bg-primary'

        return classes

    }
}
 
export default Counter;