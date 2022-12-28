import { Text, StyleSheet, View } from 'react-native';

export const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    padding: 10,
  },
});
