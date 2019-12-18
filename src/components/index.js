import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-full-image';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string
  };
  render() {
    const { className, ...props } = this.props;
    return (
      <img
        {...props}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
      />
    );
  }
}
