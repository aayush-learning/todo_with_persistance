import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.gestureDelay = -35;
    this.scrollViewEnabled = true;

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 35) {
          this.setScrollViewEnabled(false);
          let newX = gestureState.dx + this.gestureDelay;
          position.setValue({ x: newX, y: 0 });
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx < 150) {
          Animated.timing(this.state.position, {
            useNativeDriver: false,
            toValue: { x: 0, y: 0 },
            duration: 150
          }).start(() => {
            this.setScrollViewEnabled(true);
          });
        } else {
          Animated.timing(this.state.position, {
            useNativeDriver: false,
            toValue: { x: width / 4, y: 0 },
            duration: 300
          }).start(() => {
            this.setScrollViewEnabled(true);
          });
        }
      }
    });

    this.panResponder = panResponder;
    this.state = { position };
  }

  setScrollViewEnabled(enabled) {
    if (this.scrollViewEnabled !== enabled) {
      this.props.setScrollEnabled(enabled);
      this.scrollViewEnabled = enabled;
    }
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Animated.View
          style={[this.state.position.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <View style={styles.absoluteCell}>
            <View style={styles.deleteIcon}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.taskDataDelete(this.props.item.id)}
              >
                <Icon name="trash" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.delete}>
              <Text style={styles.absoluteCellText}> Delete </Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={1.0}
            style={styles.innerCell}
            onPress={() =>
              this.props.navigation.navigate("detail", {
                item: this.props.item
              })
            }
          >
            <View style={styles.textBox}>
              <View style={styles.title}>
                <Text numberOfLines={1} style={styles.titleText}>
                  {this.props.item.title}
                </Text>
              </View>
              <View style={styles.subtitle}>
                <Text numberOfLines={1} style={styles.subtitleText}>
                  {this.props.item.note}
                </Text>
              </View>
              <View style={styles.info}>
                <Text numberOfLines={1} style={styles.infoText}>
                  {this.props.item.created}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

export default connect(
  null,
  null
)(ListTile);

const styles = StyleSheet.create({
  listItem: {
    height: height / 5,
    marginLeft: -100,
    justifyContent: "center",
    backgroundColor: "red"
  },
  absoluteCell: {
    flexDirection: "column",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 100
  },
  absoluteCellText: {
    margin: 16,
    color: "#FFFFFF"
  },
  deleteIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  delete: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  innerCell: {
    flexDirection: "row",
    width: width,
    height: height / 5,
    marginLeft: 100,
    backgroundColor: "#fdfdfd",
    justifyContent: "center",
    alignItems: "center"
  },
  listIcon: {
    flex: 1,
    backgroundColor: "#fdfdfd"
  },
  textBox: {
    flex: 4,
    flexDirection: "column",
    alignContent: "space-around"
  },
  info: {
    flex: 1
  },
  title: {
    marginTop: 20,
    flex: 1
  },
  subtitle: {
    flex: 1
  },
  titleText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft: 15
  },
  subtitleText: {
    fontSize: 15,
    color: "#ccc4c4",
    marginLeft: 15,
    marginRight: 5
  },
  infoText: {
    fontSize: 10,
    color: "#d8d8d8",
    marginLeft: 15
  }
});
