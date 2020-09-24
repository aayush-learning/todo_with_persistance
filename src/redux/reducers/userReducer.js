import {
  USERDATA_UPDATE_FAILURE,
  USERDATA_UPDATE_PROGRESS,
  USERDATA_UPDATE_SUCCESS,
  USERDATA_DELETE_FAILURE,
  USERDATA_DELETE_PROGRESS,
  USERDATA_DELETE_SUCCESS,
  USERDATA_CREATE_FAILURE,
  USERDATA_CREATE_PROGRESS,
  USERDATA_CREATE_SUCCESS
} from "../actions/userAction";

const intialState = {
  user: {},
  isUserLoading: true,
  userError: {}
};

export function user(state = intialState, action) {
  let oldState = {...state};
  switch (action.type) {
    case USERDATA_CREATE_SUCCESS:
     
      oldState.user = action.data;
      oldState.isUserLoading = false;
      return oldState;
    case USERDATA_CREATE_PROGRESS:
     
      oldState.isUserLoading = true;
      return oldState;
    case USERDATA_CREATE_FAILURE:
     
      oldState.userError = action.error;
      oldState.isUserLoading = false;
      return oldState;
    case USERDATA_DELETE_SUCCESS:
     
      oldState.user = {};
      oldState.isUserLoading = false;
      return oldState;
    case USERDATA_DELETE_PROGRESS:
     
      oldState.isUserLoading = true;
      return oldState;
    case USERDATA_DELETE_FAILURE:
     
      oldState.userError = action.data;
      oldState.isUserLoading = false;
      return oldState;
    case USERDATA_UPDATE_SUCCESS:
     
      oldState.user = action.data;
      oldState.isUserLoading = false;
      return oldState;
    case USERDATA_UPDATE_PROGRESS:
     
      oldState.isUserLoading = true;
      return oldState;
    case USERDATA_UPDATE_FAILURE:
     
      oldState.userError = action.data;
      oldState.isUserLoading = false;
      return oldState;
    default:
      return state;
  }
}
