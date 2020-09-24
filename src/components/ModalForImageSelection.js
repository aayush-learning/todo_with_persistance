import React, { PureComponent } from "react";
import { Modal, Text, View, TouchableOpacity, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default class ModalForImageSelection extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { visible, onCancel, openGallery, openCamera } = this.props;
    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onCancel}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#000000AA"
          }}
        >
          <View
            style={{
              width: width * 0.7,
              backgroundColor: "#fff",
              borderColor: "black",
              borderWidth: 1,
              alignSelf: "center",
              padding: 15,
              borderRadius: 15
            }}
          >
            <TouchableOpacity
              onPress={openCamera}
              style={{
                padding: 10,
                alignItems: "center",
                borderBottomWidth: 1,
                borderColor: "#eee"
              }}
            >
              <Text style={{ fontSize: 14, color: "#5c7c7c" }}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 10, alignItems: "center" }}
              onPress={openGallery}
            >
              <Text style={{ fontSize: 14, color: "#5c7c7c" }}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
