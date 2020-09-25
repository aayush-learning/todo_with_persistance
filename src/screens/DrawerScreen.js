import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image,Dimensions } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { USER_DEFAULT } from "../assets/index";
import styles from "./styles";
import { userSelector } from "../redux/selectors/userSelector";
import { userDataDelete } from "../redux/actions/userAction";
import { deleteAllTasks } from "../redux/actions/taskAction";


const { height, width } = Dimensions.get("window");


class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.deleteUserInfo = this.deleteUserInfo.bind(this);
    this.showCompletedTask = this.showCompletedTask.bind(this);
    this.showPendingTask = this.showPendingTask.bind(this);
  }

  showCompletedTask(){
    this.props.navigation.toggleDrawer();
  }

  showPendingTask(){
    this.props.navigation.toggleDrawer();
  }

  deleteUserInfo(){
    this.props.userDataDelete();
    this.props.deleteAllTasks();
  }

  render() {
    const { name, image } = this.props.userInfo;
    return (
      <View style={styles.DrawerScreenParentView}>
        <View style={styles.DrawerScreenView}>
          <Image
            style={styles.ProfileImage}
            source={image === "" ? USER_DEFAULT : {uri: image}}
            resizeMode={"cover"}
          />
          <View style={styles.DrawerScreenParentViewProfile}>
            <Text style={styles.DrawerScreenText} numberOfLines={1}>
              {name}
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("EditProfile")}
            >
              <View style={styles.DrawerScreenViewProfile}>
                <Text style={styles.ViewProfileText}>VIEW PROFILE</Text>
                <SimpleLineIcons
                  style={{ marginLeft: 5 }}
                  name="arrow-right"
                  size={10}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingLeft: width * 0.07 }}>
          <Text style={{alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold'}}>Filter</Text>
          <TouchableOpacity onPress={this.showCompletedTask} style={styles.filterView}>
          <SimpleLineIcons
            style={styles.LogoutIcon}
            name="arrow-right"
            size={16}
            color="#222222"
          />
          <Text style={styles.LogoutText}>CompletedTask</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showPendingTask} style={styles.filterView}>
          <SimpleLineIcons
            style={styles.LogoutIcon}
            name="arrow-right"
            size={16}
            color="#222222"
          />
          <Text style={styles.LogoutText}>Pending Task</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.deleteUserInfo} style={styles.LogoutView}>
          <SimpleLineIcons
            style={styles.LogoutIcon}
            name="power"
            size={16}
            color="#222222"
          />
          <Text style={styles.LogoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  userInfo: userSelector()
});

export default connect(
  mapStateToProps,
   {  userDataDelete, deleteAllTasks }
)(DrawerScreen);
