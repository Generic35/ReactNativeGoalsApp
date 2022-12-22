import { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    console.log('enteredText', enteredText)
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    console.log('enteredGoalText', enteredGoalText)
  }



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal!' />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
    goalsContainer: {
      flex: 4
    }
  }
);
