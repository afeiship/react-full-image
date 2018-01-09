import './dev.scss';
import ReactFullImage from './main';

/*===example start===*/

// install: npm install afeiship/react-full-image --save
// import : import ReactFullImage from 'react-full-image'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-full-image">
        <ReactFullImage ref='rc' src={require('./assets/welcome_bg.2233ee0f.png')} style={{ backgroundColor:'#eef4fa' }} />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
