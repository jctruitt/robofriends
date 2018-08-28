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
      
  const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })
  if (this.state.robots.length === 0) {
    return <h1> Loading </h1>  
  } else {

    return (
      <div className='tc'>
        <h1 className='f1'> Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots ={filteredRobots}/>
        </Scroll>
      </div>
    );
    }
  }
}

export default App;
