import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';

class App extends Component {
  state = { 
    counters : [
        {id : 1, value : 0},
        {id : 2, value : 0},
        {id : 3, value : 0},
        {id : 4, value : 0},
        {id : 5, value : 0},
        {id : 6, value : 0}
      ],
     counterDuplicate : [
      {id : 1, value : 0},
      {id : 2, value : 0},
      {id : 3, value : 0},
      {id : 4, value : 0},
      {id : 5, value : 0},
      {id : 6, value : 0}
     ] 
  } 

  handleAddition = (counter)=>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value ++;
      this.setState({counters});
  }
  handleReset = ()=>{
    const counters = this.state.counters.map(c =>{
      c.value = 0;
      return c
    }) 
    this.setState(counters)
  }


  handleDelte = (counterId) =>{
      const counters = this.state.counters.filter(c => c.id !== counterId)
      this.setState({counters})
  }
  render(){
      return (
        <React.Fragment>
          <NavBar totalCount={this.state.counters.filter(c => c.value > 0).length}/>
          <main className='container'>
            <Counters counters={this.state.counters} onReset={this.handleReset} onAddition={this.handleAddition} onDelete={this.handleDelte}/>
          </main>
        </React.Fragment>
          );
  }
}

export default App;
