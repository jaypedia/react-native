import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const GoalInput = ({ onAddGoal }: { onAddGoal: (arg: string) => void }) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (input: string) => {
    setGoalText(input);
  };

  const pressButtonHandler = () => {
    onAddGoal(goalText);
    setGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="enter your goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={pressButtonHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#391750',
    width: '100%',
  },
  textInput: {
    borderColor: '#391750',
    borderWidth: 2,
    width: '70%',
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
});
