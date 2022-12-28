import { StyleSheet, View } from 'react-native';
import { COLOR } from '../../styles/color';

export const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    backgroundColor: COLOR.blue500,
    elevation: 30,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 25,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
});
