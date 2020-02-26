import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Squats from './components/Squats';
import Clock from './components/Clock';
import DoubleTap from './components/DoubleTap';

export default class App extends Component {

  state = { date: new Date(), isStopped: false };

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => !this.state.isStopped && this.setState({ date: new Date() })

  onDoubleTap = () => this.setState(({ isStopped }) => ({ isStopped: !isStopped }))

  render() {
    const { date } = this.state;

    return (
      <View style={styles.container}>
        <DoubleTap onDoubleTap={this.onDoubleTap}>
          <View style={styles.content}>
            <Clock date={date}/>
            <Squats date={date}/>
          </View>
        </DoubleTap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    transform: [{ rotate: '-90deg' }]
  }
});
