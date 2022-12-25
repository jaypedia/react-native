import { View, StyleSheet, Text, Pressable } from 'react-native';

type GoalItemProps = {
  id: string;
  goalText: string;
  onDelete: (arg: string) => void;
};

export const GoalItem = ({ id, goalText, onDelete }: GoalItemProps) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: '#9a62c0' }}
        style={({ pressed }) => pressed && styles.pressedStyle}
      >
        <Text style={styles.goalsText}>{goalText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalsItem: {
    backgroundColor: '#391750',
    borderRadius: 10,
    marginBottom: 10,
  },
  goalsText: { padding: 10, color: 'white' },
  pressedStyle: {
    backgroundColor: '#9a62c0',
    borderRadius: 10,
  },
});
