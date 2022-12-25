import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { CustomButton } from '../components/CustomButton';

export const StartGamePage = () => {
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
    }
  };

  return (
    <View style={styles.inputContainer}>
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    marginTop: 100,
    backgroundColor: '#659dbd',
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
    borderBottomColor: '#fbeec1',
    width: 50,
    height: 50,
    fontSize: 32,
    color: '#fbeec1',
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
