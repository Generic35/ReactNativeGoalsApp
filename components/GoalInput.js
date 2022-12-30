import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import { useState } from 'react'


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    console.log('enteredText', enteredText)
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} value={enteredGoalText} onChangeText={goalInputHandler} placeholder='Your course goal!' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})