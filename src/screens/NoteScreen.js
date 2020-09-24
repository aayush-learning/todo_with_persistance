import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import styles from './styles';

class NoteScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <View style={{ flexDirection: "column" }}>
          <Text
            style={styles.noteScreenHeaderTitle}
          >
            {navigation.state.params.item.title}
          </Text>
          <Text style={styles.noteScreenHeaderTitleLastUpdated}>
            Last updated: {navigation.state.params.item.created}
          </Text>
        </View>
      ),
      headerStyle: styles.noteScreenHeaderStyle,
      headerRight: (
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() =>
            navigation.navigate("edit", {
              item: navigation.state.params.item,
            })
          }
        >
          <Text style={{ fontSize: 15 }}>Edit</Text>
        </TouchableOpacity>
      )
    };
  };
  render() {
    const item = this.props.navigation.state.params.item;
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{item.note}</Text>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(NoteScreen);


