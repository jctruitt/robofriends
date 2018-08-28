import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css'


class App extends Component{
  constructor(){
    //note need super for constructor
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }


componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/users')
    .then(respose=> respose.json())
    .then(users => this.setState({ robots: users}))
}

onSearchChange = (event) =>{
  //note setState
this.setState({searchfield: event.target.value})
}
  
  render(){
  const {robots, searchfield} = this.state; //note destructuring
  const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  //note turanary
  return !robots.length ?
  <h1> Loading </h1> :
  <div className='tc'>
    <h1 className='f1'> Robofriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
      <CardList robots ={filteredRobots}/>
    </Scroll>
  </div>

    
  }
}

export default App;
