import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

export default class ColorForm extends Component {
  constructor() {
    super()
    this.state = {
      txtColor: ''
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    this.props.onNewColor(this.state.txtColor.toLowerCase())
    this.setState({txtColor: ''})
  }
  render() {
    const { navigate } = this.props.navigation
    const uri = 'https://www.w3schools.com/colors/colors_names.asp'
    return (
      <View style={styles.container}>
        <TextInput style={styles.txtInput}
          placeholder="enter a color..."
          onChangeText={(txtColor) => this.setState({txtColor})}
          value={this.state.txtColor}
          />
        <Text style={styles.button}
          onPress={this.submit}>Add</Text>
        <Text style={styles.button}
          onPress={() => navigate('Web', {uri})}>Info</Text>
      </View>
    )
  }
}

ColorForm.propTypes = {
  onNewColor: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    height: 70,
    paddingTop: 20
  },
  txtInput: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'snow'
  },
  button: {
    backgroundColor: 'blue',
    margin: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  }
})
