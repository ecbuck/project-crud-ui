import React from 'react';
import logo from './logo.svg';
import './App.css';
import Series from './list';
import ListItem from './listItem';
import './listItem.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: 'series'
    };
  }

  render() {
    return <Series />
  }

  componentDidMount() {
    this.setState({
      listItem: 'series'
    });
  }
}






export default App;
