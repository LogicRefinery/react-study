import React,{ Component } from 'react';
import MyComponents from './components/MyComponents';
import Counter from './Conter';

class App extends Component{
  render(){
    return <div>
    <div><MyComponents name = "김태형" fvnumber = {10}>리액트</MyComponents></div>
    <div><Counter/></div>
    </div>
  }
}

export default App;
