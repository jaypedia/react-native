import { Pressable, View, Text, StyleSheet } from 'react-native';

export const GamePage = () => {
  return (
    <View style={styles.outerButtonContainer}>
      <Text style={styles.text}>Start Game!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerButtonContainer: {
    backgroundColor: '#FBEEC1',
    borderRadius: 20,
    padding: 7,
    margin: 5,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
