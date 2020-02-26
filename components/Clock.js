import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { humanizeTime } from '../utils/clock'

export default function Clock({ date }) {
  return (
    <View>
      <Text style={styles.time}>{humanizeTime(date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  time: {
    fontSize: 55
  }
});
