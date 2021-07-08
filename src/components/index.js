import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-full-image';

export default class ReactFullImage extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The animation type.
     */
    animation: PropTypes.oneOf(['blur', null])
  };

  static defaultProps = { animation: null };

  state = { loaded: false };

  render() {
    const { className, animation, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <img
        data-component={CLASS_NAME}
        data-animation={animation}
        data-loaded={loaded}
        onLoad={() => this.setState({ loaded: true })}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
