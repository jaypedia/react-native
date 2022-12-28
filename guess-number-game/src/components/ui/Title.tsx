import { Text, StyleSheet } from 'react-native';
import { COLOR } from '../../styles/color';

export const Title = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'roboto-bold',
    textAlign: 'center',
    fontSize: 24,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    borderColor: COLOR.yellow500,
  },
});
