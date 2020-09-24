import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { taskDataUpdate } from "../redux/actions/taskAction";
import styles from './styles';

class EditScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gist: this.props.navigation.state.params.item.note,
        };
        this.updateTask = this.updateTask.bind(this);
    }
    updateTask(){
        if(this.state.gist != ""){
            const task={
                id:  this.props.navigation.state.params.item.id,
                title: this.props.navigation.state.params.item.title,
                note: this.state.gist,
                created: new Date().toString(),
                fav: this.props.navigation.state.params.item.fav,
                heart: this.props.navigation.state.params.item.heart
            }
            this.props.taskDataUpdate(task);
            this.props.navigation.pop(2);
        }
    }
    static navigationOptions = ({ navigation }) => {

        const params = navigation.state.params || {};
        return {
            headerTitle: "Edit Note",
            headerStyle: styles.editScreenHeaderStyle,
            headerTitleStyle: styles.editScreenHeaderTitleStyle,
            headerRight: params.headerRight
        }
    }
    componentDidMount() {
        let headerRight = <TouchableOpacity style={{ padding: 20 }} onPress={this.updateTask}>
            <Text style={{ fontSize: 15 }}>Save</Text>
        </TouchableOpacity>;
        this.props.navigation.setParams({
            headerRight,
        });
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(gist) => this.setState({ gist })}
                    value={this.state.gist}
                    multiline={true}
                    placeholder=">Update Gist of Task"
                    placeholderTextColor="#8d8a7d"
                    underlineColorAndroid="black" />
            </View>
        );
    }
}

export default connect(
    null,
    {taskDataUpdate}
)(EditScreen);