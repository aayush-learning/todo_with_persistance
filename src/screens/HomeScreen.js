import React, { PureComponent } from "react";
import {
  View,
  FlatList,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Text
} from "react-native";
import { createStructuredSelector } from "reselect";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import ListTile from "../components/ListTile";
import {
  taskDataCreate,
  taskDataDelete,
  taskDataUpdate
} from "../redux/actions/taskAction";
import { filter } from "../redux/actions/filterAction";
import { taskSelector } from "../redux/selectors/taskSelector";
import { filteredTaskaskSelector } from "../redux/selectors/filterSelector";
import styles from './styles';

class HomeScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: "To Do",
      headerStyle: styles.addScreenHeaderStyle,
      headerTitleStyle: styles.addScreenHeaderTitleStyle ,
      headerLeft: params.headerLeft,
      headerRight: params.headerRight
    };
  };
  constructor(props) {
    super(props);
    this.renderSeparator = this.renderSeparator.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.pushNote = this.pushNote.bind(this);
    // this.updateNote = this.updateNote.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);
    this.searchTask = this.searchTask.bind(this);
    this.renderEmptyComponent = this.renderEmptyComponent.bind(this);

    this.state = {
      enable: true,
      search: "",
      clear: true
    };
  }
  searchTask() {
    if (this.state.search != "") {
      if (this.state.clear) {
        this.props.filter(this.state.search, this.props.taskList);
        this.setState(prevState => ({
          clear: !prevState.clear
        }));
      } else {
        this.props.filter("", this.props.taskList);
        this.setState(prevState => ({
          clear: !prevState.clear,
          search: ""
        }));
      }
    }
    Keyboard.dismiss();
  }

  renderSeparator() {
    return <View style={styles.separatorStyle} />;
  }

  //   updateNote(item) {
  //     let data = [...this.state.data];
  //     data.forEach(i => {
  //       if (i.title == item.title) {
  //         i.note = item.note;
  //       }
  //     });
  //     this.setState({
  //       data: data
  //     });
  //     this.props.navigation.dispatch(NavigationActions.back());
  //     this.props.navigation.dispatch(NavigationActions.back());
  //   }

  //   pushNote(item) {
  //     let data = [...this.state.data];
  //     if (item.title != "" && item.note != "") {
  //       data.push(item);
  //       this.setState({
  //         data: data
  //       });
  //     }
  //     this.props.navigation.dispatch(NavigationActions.back());
  //   }

  componentDidMount() {
    let headerRight = (
      <TouchableOpacity
        style={styles.headeRightStyle}
        onPress={() =>
          this.props.navigation.navigate("add", {
            length: this.props.taskList.length
          })
        }
      >
        <Icon name="plus" size={25} color="black" />
      </TouchableOpacity>
    );
    let headerLeft = (
      <TouchableOpacity
        style={styles.headeLeftStyle}
        onPress={() => this.props.navigation.toggleDrawer()}
      >
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>
    );
    this.props.navigation.setParams({
      headerLeft,
      headerRight
    });
  }

  //   updateState(title, type) {
  //     if (type == "delete") {
  //       const data = this.state.data.filter(item => item.title != title);
  //       this.setState({
  //         data: data
  //       });
  //     } else {
  //       let data = [...this.state.data];
  //       data.forEach(item => {
  //         if (item.title == title) {
  //           type == "fav" ? (item.fav = !item.fav) : (item.heart = !item.heart);
  //         }
  //       });

  //       this.setState({
  //         data: data
  //       });
  //     }
  //   }

  setScrollEnabled(enable) {
    this.setState({
      enable
    });
  }

  renderItem(item) {
    return (
      <ListTile
        item={item}
        taskDataDelete={this.props.taskDataDelete}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
        navigation={this.props.navigation}
      />
    );
  }

  renderEmptyComponent(){
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
        {
          this.state.clear? <Text>Create your to do task!</Text>: <Text>Searched task not available!</Text>
        } 
      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View
          style={styles.searchView}
        >
          <TextInput
            onChangeText={search => this.setState({ search })}
            value={this.state.search}
            multiline={false}
            placeholder={"Type and click on search"}
            placeholderTextColor="#8d8a7d"
            style={styles.searchText}
          />
          <Icon
            onPress={this.searchTask}
            name={this.state.clear ? "search" : "times"}
            size={25}
            color={"#fff"}
            style={styles.searchIcon}
          />
        </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={
              this.state.clear ? this.props.taskList : this.props.filteredTask
            }
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({ item }) => this.renderItem(item)}
            scrollEnabled={this.state.enable}
            keyExtractor={(item, index) => item.id}
            ListEmptyComponent={this.renderEmptyComponent}
          />
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  taskList: taskSelector(),
  filteredTask: filteredTaskaskSelector()
});

export default connect(
  mapStateToProps,
  { taskDataCreate, taskDataDelete, taskDataUpdate, filter }
)(HomeScreen);

