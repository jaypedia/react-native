import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

type GoalInputProps = {
  onAddGoal: (arg: string) => void;
  isVisible: boolean;
  onCancel: () => void;
};

export const GoalInput = ({ onAddGoal, isVisible, onCancel }: GoalInputProps) => {
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (input: string) => {
    setGoalText(input);
  };

  const pressButtonHandler = () => {
    onAddGoal(goalText);
    setGoalText('');
  };

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/image/goal.png')} style={styles.image} />
        <TextInput
          placeholder="enter your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={pressButtonHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
    width: '100%',
    backgroundColor: '#391750',
  },
  textInput: {
    borderColor: '#391750',
    borderWidth: 2,
    width: '70%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
  },
});
