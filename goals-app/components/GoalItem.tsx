import { View, StyleSheet, Text } from 'react-native';

export const GoalItem = ({ goalText }) => {
  return (
    <View style={styles.goalsItem}>
      <Text style={styles.goalsText}>{goalText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsItem: {
    backgroundColor: '#391750',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  goalsText: {
    color: 'white',
  },
});
