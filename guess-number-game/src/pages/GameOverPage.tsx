import { Pressable, View, Text, StyleSheet } from 'react-native';

export const GameOverPage = ({}) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Text style={styles.text}>Game Over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerButtonContainer: {},
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
