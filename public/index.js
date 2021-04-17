import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullImage from '../src/main';
import './assets/style.scss';

import '@jswork/next-sample';

const images = [
  'bg-2.jpg',
  'bg.jpg',
  'welcome_bg.2233ee0f.png',
  'yuanhua1.jpg'
];

class App extends React.Component {
  render() {
    const item = nx.sample(images);
    console.log(item);
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-full-image">
        <ReactFullImage
          src={require(`./assets/${item}`).default}
          style={{ backgroundColor: '#eef4fa' }}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
