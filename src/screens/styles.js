import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  addScreenHeaderTitleStyle: {
    fontSize: 30,
    fontFamily: "serif",
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginBottom: 18
  },
  addScreenHeaderStyle: { height: height / 8 },
  searchIcon: { marginRight: 5 },
  searchText: { color: "#fff" },
  separatorStyle: {
    height: 1,
    backgroundColor: "#d4d4d4"
  },
  headeRightStyle: { alignSelf: "center", padding: 20 },
  headeLeftStyle: { alignSelf: "center", padding: 20 },
  searchView: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    textAlign: "justify",
    fontSize: 20,
    includeFontPadding: true
  },
  view: {
    padding: 20
  },
  noteScreenHeaderTitle: {
    fontSize: 30,
    fontFamily: "serif",
    fontWeight: "bold",
    color: "black"
  },
  noteScreenHeaderStyle: { height: height / 8 },
  noteScreenHeaderTitleLastUpdated: { fontSize: 10, color: "#d8d8d8" },
  editScreenHeaderTitleStyle: {
    fontSize: 30,
    fontFamily: "serif",
    fontWeight: "bold",
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginBottom: 18
  },
  editScreenHeaderStyle: { height: height / 8 },
  keyBoardAwareView: { backgroundColor: "#fff", flex: 1 },
  editProfileContentStyle: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    paddingBottom: 24
  },
  ImageView: {
    alignItems: "center",
    justifyContent: "center"
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1
  },
  ImageEdit: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 25,
    // color: '#000',
    backgroundColor: "grey",
    marginTop: -40,
    marginLeft: 50,
    padding: 5
  },
  TitleView: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10
  },
  TitleText: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "600",
    lineHeight: 25
  },
  EmailText: {
    fontSize: 12,
    color: "#999999",
    marginTop: 5,
    lineHeight: 16
  },
  UpdateProfileView: {
    padding: 15,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "grey"
  },
  UpdateProfileText: { color: "#222", fontSize: 16, fontWeight: "bold" },
  DrawerScreenParentView: { justifyContent: "space-between", flex: 1 },
  DrawerScreenView: {
    flexDirection: "row",
    height: height * 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  DrawerScreenText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
  DrawerScreenViewProfile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  ProfileImage: {
    height: height * 0.1,
    width: height * 0.1,
    borderRadius: height * 0.05,
    borderColor: "#666666",
    marginLeft: width * 0.05,
  },
  DrawerScreenParentViewProfile: { flex: 1, marginLeft: width * 0.05 },
  ViewProfileText: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold"
  },
  LogoutView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    borderTopColor: "grey",
    borderTopWidth: 2
  },
  LogoutText: {
    marginLeft: width * 0.05,
    fontSize: 16,
    color: "#222222"
  },
  LogoutIcon:{ marginLeft: width * 0.07 }
});
