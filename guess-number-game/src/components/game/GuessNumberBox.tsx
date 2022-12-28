import { View, Text, StyleSheet } from 'react-native';
import { COLOR } from '../../styles/color';

export const GuessNumberBox = ({ round, number }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>#{round}</Text>
      <Text style={styles.text}>Opponent's Guess: {number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLOR.yellow500,
    borderRadius: 30,
    padding: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  text: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
  },
});
