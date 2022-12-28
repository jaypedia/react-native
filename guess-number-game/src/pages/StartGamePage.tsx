import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { CustomButton } from '../components/ui/CustomButton';
import { InstructionText } from '../components/ui/InstructionText';
import { Title } from '../components/ui/Title';
import { COLOR } from '../styles/color';

export const StartGamePage = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (numberText: string) => {
    setEnteredNumber(numberText);
  };

  const resetNumber = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetNumber },
      ]);
      onPickNumber(null);
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>
      <View style={styles.inputContainer}>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          maxLength={2}
          style={styles.numberInput}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <CustomButton text="Confirm" onPress={confirmInputHandler} />
          </View>
          <View style={styles.button}>
            <CustomButton text="Reset" onPress={resetNumber} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 50,
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
  numberInput: {
    textAlign: 'center',
    borderBottomColor: COLOR.yellow500,
    width: 50,
    height: 50,
    fontSize: 32,
    color: COLOR.yellow500,
    borderBottomWidth: 3,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
