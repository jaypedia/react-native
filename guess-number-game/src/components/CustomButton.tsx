import { Pressable, View, Text, StyleSheet } from 'react-native';

export const CustomButton = ({ text, onPress }) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable onPress={onPress} android_ripple={{ color: 'black' }}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
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
