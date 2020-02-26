import { TouchableHighlight, View } from 'react-native';
import React, { Component } from 'react';

export default class DoubleTap extends Component {

  state = { lastTouchAt: 0 };

  onPress = () => {
    const now = Date.now();
    const currentDelay = now - this.state.lastTouchAt;
    const maxDelay = this.props.delay || 500;

    if (currentDelay > maxDelay) {
      this.setState({ lastTouchAt: now });
    } else {
      this.setState({ lastTouchAt: 0 });
      this.props.onDoubleTap && this.props.onDoubleTap();
    }
  }

  render() {
    return (
      <View>
        <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this.onPress}>
          {this.props.children}
        </TouchableHighlight>
      </View>
    );
  }
}
