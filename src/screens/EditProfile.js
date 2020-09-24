import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  ScrollView
} from "react-native";
import { createStructuredSelector } from "reselect";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { USER_DEFAULT } from "../assets/index";
import TextInputView from "../components/TextInputView";
import { openCamera, openGallery } from "../assets/utils";
import ModalForImageSelection from "../components/ModalForImageSelection";
import ModalForProofSelection from "../components/ModalForProofSelection";
import {
  userDataCreate,
  userDataDelete,
  userDataUpdate
} from "../redux/actions/userAction";
import { userSelector } from "../redux/selectors/userSelector";
import styles from "./styles";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      number: props.userInfo.number,
      idProof: props.userInfo.idProof,
      image: props.userInfo.image,
      showImageModal: false,
      cropMessage: "Crop your profile pic",
      showProofOption: false
    };
    this.updateProfile = this.updateProfile.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.openCamera = this.openCamera.bind(this);
    this.openGallery = this.openGallery.bind(this);
    this.onSetProof = this.onSetProof.bind(this);
  }
  onSetProof(proof) {
    if (proof === "") {
      this.setState(prevState => ({
        showProofOption: !prevState.showProofOption
      }));
    } else {
      this.setState(prevState => ({
        showProofOption: !prevState.showProofOption,
        idProof: proof
      }));
    }
    Keyboard.dismiss();
  }
  openCamera() {
    const { cropMessage } = this.state;
    const self = this;
    openCamera(cropMessage).then(img => {
      self.setState(prevState => ({
        showImageModal: !prevState.showImageModal,
        image: img.path
      }));
    });
  }
  openGallery() {
    const { cropMessage } = this.state;
    const self = this;
    openGallery(cropMessage).then(img => {
      self.setState(prevState => ({
        showImageModal: !prevState.showImageModal,
        image: img.path
      }));
    });
  }
  updateImage() {
    this.setState(prevState => ({
      showImageModal: !prevState.showImageModal
    }));
  }
  updateProfile() {
    const { name, number, email, image, idProof } = this.state;
    Keyboard.dismiss();
    const user = {
      name,
      number,
      email,
      image,
      idProof
    };
    this.props.userDataUpdate(user);
    this.props.navigation.goBack();
  }
  render() {
    const { name, number, email, image, idProof } = this.props.userInfo;
    return (
      <KeyboardAwareScrollView
        scrollEnabled
        style={styles.keyBoardAwareView}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.editProfileContentStyle}
        keyboardShouldPersistTaps="always"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ModalForImageSelection
            visible={this.state.showImageModal}
            onCancel={this.updateImage}
            openCamera={this.openCamera}
            openGallery={this.openGallery}
          />
          <ModalForProofSelection
            visible={this.state.showProofOption}
            onCancel={this.onSetProof}
            onSetProof={this.onSetProof}
          />
          <View style={styles.ImageView}>
            <Image
              style={styles.Image}
              source={
                this.state.image === ""
                  ? USER_DEFAULT
                  : { uri: this.state.image }
              }
              // source={USER_DEFAULT}
              resizeMode={"cover"}
            />
            <TouchableOpacity
              style={styles.ImageEdit}
              onPress={this.updateImage}
            >
              <MaterialIcons name="edit" size={16} color={"#222222"} />
            </TouchableOpacity>
            <View style={styles.TitleView}>
              <Text style={styles.TitleText} numberOfLines={2}>
                {name}
              </Text>
              <Text style={styles.EmailText}>{email}</Text>
            </View>
          </View>
          <View>
            <TextInputView
              updateField={name => this.setState({ name })}
              value={this.state.name}
              multiline={false}
              fieldName={"Name"}
              keyboardType={"default"}
              placeHolder={"Aayush agrawal"}
            />
            <TextInputView
              updateField={email => this.setState({ email })}
              value={this.state.email}
              multiline={false}
              fieldName={"Email"}
              keyboardType={"email-address"}
              placeHolder={"mirus.aayush@gmail.com"}
            />
            <TextInputView
              updateField={number => this.setState({ number })}
              value={this.state.number}
              multiline={false}
              fieldName={"Mobile Number"}
              keyboardType={"number-pad"}
              placeHolder={"7518632093"}
            />
            <TextInputView
              updateField={() => {}}
              value={this.state.idProof}
              multiline={false}
              fieldName={"Identity Proof"}
              onFocus={() => this.onSetProof("")}
              placeHolder={"aadhar"}
            />
          </View>
        </ScrollView>
        <TouchableOpacity onPress={this.updateProfile}>
          <View style={styles.UpdateProfileView}>
            <Text style={styles.UpdateProfileText}>UPDATE PROFILE</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  userInfo: userSelector()
});
export default connect(
  mapStateToProps,
  { userDataCreate, userDataDelete, userDataUpdate }
)(EditProfile);
