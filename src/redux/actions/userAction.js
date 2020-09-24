export const USERDATA_UPDATE_FAILURE = "USERDATA_UPDATE_FAILURE";
export const USERDATA_UPDATE_PROGRESS = "USERDATA_UPDATE_PROGRESS";
export const USERDATA_UPDATE_SUCCESS = "USERDATA_UPDATE_SUCCESS";

export const USERDATA_DELETE_FAILURE = "USERDATA_DELETE_FAILURE";
export const USERDATA_DELETE_PROGRESS = "USERDATA_DELETE_PROGRESS";
export const USERDATA_DELETE_SUCCESS = "USERDATA_DELETE_SUCCESS";

export const USERDATA_CREATE_FAILURE = "USERDATA_CREATE_FAILURE";
export const USERDATA_CREATE_PROGRESS = "USERDATA_CREATE_PROGRESS";
export const USERDATA_CREATE_SUCCESS = "USERDATA_CREATE_SUCCESS";

export const userDataUpdateProgress = () => ({
  type: USERDATA_UPDATE_PROGRESS
});

export const userDataUpdateSuccess = user => ({
  type: USERDATA_UPDATE_SUCCESS,
  data: user
});

export const userDataUpdateFailure = error => ({
  type: USERDATA_UPDATE_FAILURE,
  data: error
});

export const userDataUpdate = user => ({
  type: USERDATA_UPDATE_SUCCESS,
  data: user
});

export const userDataCreateProgress = () => ({
  type: USERDATA_CREATE_PROGRESS
});

export const userDataCreateSuccess = user => ({
  type: USERDATA_CREATE_SUCCESS,
  data: user
});

export const userDataCreateFailure = error => ({
  type: USERDATA_CREATE_FAILURE,
  data: error
});

export const userDataCreate = user => ({
  type: USERDATA_CREATE_SUCCESS,
  data: user
});

export const userDataDeleteProgress = () => ({
  type: USERDATA_DELETE_PROGRESS
});

export const userDataDeleteSuccess = user => ({
  type: USERDATA_DELETE_SUCCESS
});

export const userDataDeleteFailure = error => ({
  type: USERDATA_DELETE_FAILURE,
  data: error
});

export const userDataDelete = () => ({
  type: USERDATA_DELETE_SUCCESS
});
