import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { taskSelector } from "../redux/selectors/taskSelector";
import { taskDataCreate } from "../redux/actions/taskAction";
import styles from "./styles";


class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      gist: ""
    };
    this.addTask = this.addTask.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: "Add New Task",
      headerStyle: styles.addScreenHeaderStyle,
      headerTitleStyle: styles.addScreenHeaderTitleStyle,
      headerRight: params.headerRight
    };
  };
  addTask() {
    if(this.state.title != "" && this.state.gist != ""){
      const task = {
        id: (this.props.taskList.length + 1).toString(),
        title: this.state.title,
        note: this.state.gist,
        created: new Date().toString(),
        fav: false,
        heart: false
      };
      this.props.taskDataCreate(task);
      this.props.navigation.goBack();
    }
  }
  componentDidMount() {
    let headerRight = (
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={this.addTask}
      >
        <Text style={{ fontSize: 15 }}>Save</Text>
      </TouchableOpacity>
    );
    this.props.navigation.setParams({
      headerRight
    });
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
          multiline={true}
          placeholder=">Title of Task"
          placeholderTextColor="#8d8a7d"
          underlineColorAndroid="black"
        />

        <TextInput
          onChangeText={gist => this.setState({ gist })}
          value={this.state.gist}
          multiline={true}
          placeholder=">Gist of Task"
          placeholderTextColor="#8d8a7d"
          underlineColorAndroid="black"
        />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  taskList: taskSelector(),
});

export default connect(
  mapStateToProps,
  { taskDataCreate }
)(AddScreen);
