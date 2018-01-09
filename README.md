# react-full-image
> Full page background image for react.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string
  };
  
```

## usage:
```jsx

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
        <ReactFullImage ref='rc' src={require('./assets/yuanhua1.jpg')} />
    </div>
    );
  }
}

```

## features:
```conf
Any version of good browsers: Safari / Chrome / Opera / Firefox
IE 6: Borked - but probably fixable if you use some kind of fixed positioning shim
IE 7/8: Mostly works, doesn't center at small sizes but fills screen fine
IE 9: Works
```

## resources:
+ https://css-tricks.com/perfect-full-page-background-image/
+ http://t.qq.com/
