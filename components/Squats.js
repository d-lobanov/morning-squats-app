import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { calcSquats, getDeclensionForm } from '../utils/squats';

const START_TIME_CONF = { hour: 10, minutes: 25 };

export default function Squats({ date }) {
  const squats = calcSquats(date, START_TIME_CONF);

  return squats && (
    <View style={styles.container}>
      <Text style={styles.counter}>{squats}</Text>
      <Text style={styles.description}> {getDeclensionForm(squats)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  counter: {
    fontSize: 100
  },
  description: {
    fontSize: 40
  }
});
