import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import NoteScreen from "./screens/NoteScreen";
import AddScreen from "./screens/AddScreen";
import EditScreen from "./screens/EditScreen";
import DrawerScreen from "./screens/DrawerScreen";
import EditProfile from "./screens/EditProfile";
import CreateProfile from "./screens/CreateProfile";
import { userSelector } from "./redux/selectors/userSelector";
import { isEmpty } from "./assets/utils";
const { height, width } = Dimensions.get("window");

const ScreenNavigator = new createStackNavigator({
  home: {
    screen: HomeScreen
  },
  detail: {
    screen: NoteScreen
  },
  edit: {
    screen: EditScreen
  },
  add: {
    screen: AddScreen
  }
});

const CustomDrawerContentComponent = props => <DrawerScreen {...props} />;

const SideDrawer = new createDrawerNavigator(
  {
    screen1: {
      screen: ScreenNavigator
    },
    EditProfile: {
      screen: EditProfile
    }
  },
  {
    drawerLockMode: 'locked-closed',
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    drawerPosition: "left",
    drawerWidth: width * 0.7,
    contentComponent: CustomDrawerContentComponent
  }
);
const Switch = new createSwitchNavigator({
  create: {
    screen: CreateProfile
  },
  todo: {
    screen: SideDrawer
  }
});

const AppNavigator1 = new createAppContainer(Switch);
const AppNavigator2 = new createAppContainer(SideDrawer);

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInfo } = this.props;
    return isEmpty(userInfo) ? <AppNavigator1 /> : <AppNavigator2 />;
  }
}
const mapStateToProps = createStructuredSelector({
  userInfo: userSelector()
});
export default connect(
  mapStateToProps,
  null
)(Routes);
