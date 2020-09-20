import React from 'react';
import './App.css';
import Accordion from './State-drills/Accordion'

let sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h2>Accordion</h2>
        <Accordion sections={sections} />

      </div>
    );
  }
}



export default App;
