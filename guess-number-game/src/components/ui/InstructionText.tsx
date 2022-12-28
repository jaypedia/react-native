import { Text, StyleSheet } from 'react-native';

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
});
