import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { USER_DEFAULT } from "../assets/index";
import styles from "./styles";
import { userSelector } from "../redux/selectors/userSelector";
import { userDataDelete } from "../redux/actions/userAction";


class DrawerScreen extends Component {
  constructor(props) {
    super(props);
    this.deleteUserInfo = this.deleteUserInfo.bind(this);
  }

  deleteUserInfo(){
    this.props.userDataDelete();
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
   {  userDataDelete }
)(DrawerScreen);
