import { PermissionsAndroid, Platform, ToastAndroid } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export const openCamera = async cropHeader => {
  if (Platform.OS === "android") {
    return await requestCameraPermission(cropHeader);
  }
};
export const openGallery = async cropHeader => {
  if (Platform.OS === "android") {
    return await requestGalleryPermission(cropHeader);
  }
};
export function isEmpty(obj) {
  // console.log(typeof(obj));
  if (obj !== null && obj !== undefined) {
    // for general objects
    if (typeof obj === "string") {
      if (obj.trim() === "" || obj == "null") {
        // for string
        return true;
      }

      return false;
    } else if (obj.length <= 0) {
      // for array
      return true;
    } else if (typeof obj === "object") {
      const keys = Object.keys(obj);
      const len = keys.length;
      if (len <= 0) {
        return true;
      }
      return false;
    }
    return false;
  }

  return true;
}

async function requestGalleryPermission(cropHeader) {
  try {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || "Crop Image",
        freeStyleCropEnabled: true,
      });
    }
    const granted1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || "Crop Image",
        freeStyleCropEnabled: true,
      });
    } else if (granted1 === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Please enable gallery permission for this app from the app settings",
        ToastAndroid.SHORT
      );
    }
  } catch (err) {
    console.log(err);
  }
}

async function requestCameraPermission(cropHeader) {
  try {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openCamera({
        mediaType: "photo",
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || "Crop Image",
        freeStyleCropEnabled: true
      });
    }
    const granted1 = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
      return await ImagePicker.openCamera({
        mediaType: "photo",
        multiple: false,
        cropping: true,
        height: 720,
        width: 1440,
        cropperToolbarTitle: cropHeader || "Crop Image",
        freeStyleCropEnabled: true,
      });
    } else if (granted1 === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Please enable camera permission for this app from the app settings",
        ToastAndroid.SHORT
      );
    }
  } catch (err) {
    console.log(err);
  }
}
export const isValidEmail = text => {
  const reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
  if (reg.test(text) === false) {
    return false;
  }
  return true;
};

export const isValidPhone = text => {
  const phoneno = /^[0-9]{6,14}$/;
  if (phoneno.test(text) === false) {
    return false;
  }
  return true;
};
