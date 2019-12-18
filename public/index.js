import ReactFullImage from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="hello-react-full-image">
        <ReactFullImage
          ref="rc"
          src={require('./assets/welcome_bg.2233ee0f.png')}
          style={{ backgroundColor: '#eef4fa' }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
