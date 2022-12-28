import { Text, StyleSheet } from 'react-native';

export const Title = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
});
