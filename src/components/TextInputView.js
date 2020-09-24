import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image
} from "react-native";

export default class TextInputView extends Component {
  render() {
    return (
      <View style={{borderColor: "grey", borderWidth: 3, marginVertical: 3}}>
        <Text> {this.props.fieldName}</Text>
        <TextInput
        onChangeText={value => this.props.updateField(value)}
        value={this.props.value}
        multiline={this.props.multiline}
        placeholder={this.props.placeHolder}
        placeholderTextColor="#8d8a7d"
        underlineColorAndroid="black"
        onFocus={this.props.onFocus}
        keyboardType={this.props.keyboardType}
      />
      </View>
      
    );
  }
}
