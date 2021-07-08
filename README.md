# react-full-image
> Full page background image for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-full-image
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| animation | enum   | false    | null    | The animation type.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-full-image/dist/style.css";

  // or use sass
  @import "~@jswork/react-full-image/dist/style.scss";

  // customize your styles:
  $react-full-image-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactFullImage from '@jswork/react-full-image';
  import './assets/style.scss';

  import '@jswork/next-sample';

  const images = [
    'bg-2.jpg',
    'bg.jpg',
    'welcome_bg.2233ee0f.png',
    'yuanhua1.jpg',
    'alo7.png'
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
            animation="blur"
            src={require(`./assets/${item}`).default}
            style={{ backgroundColor: '#eef4fa' }}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-full-image/


## license
Code released under [the MIT license](https://github.com/afeiship/react-full-image/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-full-image
[version-url]: https://npmjs.org/package/@jswork/react-full-image

[license-image]: https://img.shields.io/npm/l/@jswork/react-full-image
[license-url]: https://github.com/afeiship/react-full-image/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-full-image
[size-url]: https://github.com/afeiship/react-full-image/blob/master/dist/react-full-image.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-full-image
[download-url]: https://www.npmjs.com/package/@jswork/react-full-image
