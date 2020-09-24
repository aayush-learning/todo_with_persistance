import { task } from "../reducers/taskReducer";

export const TASKDATA_UPDATE_FAILURE = "TASKDATA_UPDATE_FAILURE";
export const TASKDATA_UPDATE_PROGRESS = "TASKDATA_UPDATE_PROGRESS";
export const TASKDATA_UPDATE_SUCCESS = "TASKDATA_UPDATE_SUCCESS";

export const TASKDATA_DELETE_FAILURE = "TASKDATA_DELETE_FAILURE";
export const TASKDATA_DELETE_PROGRESS = "TASKDATA_DELETE_PROGRESS";
export const TASKDATA_DELETE_SUCCESS = "TASKDATA_DELETE_SUCCESS";

export const TASKDATA_CREATE_FAILURE = "TASKDATA_CREATE_FAILURE";
export const TASKDATA_CREATE_PROGRESS = "TASKDATA_CREATE_PROGRESS";
export const TASKDATA_CREATE_SUCCESS = "TASKDATA_CREATE_SUCCESS";


export const taskDataUpdateProgress = () => ({
  type: TASKDATA_UPDATE_PROGRESS
});

export const taskDataUpdateSuccess = task => ({
  type: TASKDATA_UPDATE_SUCCESS,
  data: task
});

export const taskDataUpdateFailure = error => ({
  type: TASKDATA_UPDATE_FAILURE,
  data: error 
});

export const taskDataUpdate = task => ({
  type: TASKDATA_UPDATE_SUCCESS,
  data: task
});



export const taskDataCreateProgress = () => ({
  type: TASKDATA_CREATE_PROGRESS
});

export const taskDataCreateSuccess = task => ({
  type: TASKDATA_CREATE_SUCCESS,
  data: task
});

export const taskDataCreateFailure = error => ({
  type: TASKDATA_CREATE_FAILURE,
  data: error 
});
export const taskDataCreate = task => ({
  type: TASKDATA_CREATE_SUCCESS,
  data: task
});




export const taskDataDeleteProgress = () => ({
  type: TASKDATA_DELETE_PROGRESS
});

export const taskDataDeleteSuccess = id => ({
  type: TASKDATA_DELETE_SUCCESS,
  data: id
});

export const taskDataDeleteFailure = error => ({
  type: TASKDATA_DELETE_FAILURE,
  data: error 
});
export const taskDataDelete = id => ({
  type: TASKDATA_DELETE_SUCCESS,
  data: id
});