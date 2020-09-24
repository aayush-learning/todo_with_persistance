import {
  TASKDATA_UPDATE_FAILURE,
  TASKDATA_UPDATE_PROGRESS,
  TASKDATA_UPDATE_SUCCESS,
  TASKDATA_DELETE_FAILURE,
  TASKDATA_DELETE_PROGRESS,
  TASKDATA_DELETE_SUCCESS,
  TASKDATA_CREATE_FAILURE,
  TASKDATA_CREATE_PROGRESS,
  TASKDATA_CREATE_SUCCESS
} from "../actions/taskAction";

const intialState = {
  task: [],
  isTaskLoading: true,
  taskError: {}
};

export function task(state = intialState, action) {
  let oldState = {...state};
  switch (action.type) {
    case TASKDATA_CREATE_SUCCESS:
      oldState.task = [...oldState.task, action.data];
      oldState.isTaskLoading = false;
      return oldState;
    case TASKDATA_CREATE_PROGRESS:
     
      oldState.isTaskLoading = true;
      return oldState;
    case TASKDATA_CREATE_FAILURE:
     
      oldState.taskError = action.data;
      oldState.isTaskLoading = false;
      return oldState;
    case TASKDATA_DELETE_SUCCESS:
     
      let freshData = oldState.task.filter(item => item.id != action.data);
      oldState.task = freshData;
      oldState.isTaskLoading = false;
      return oldState;
    case TASKDATA_DELETE_PROGRESS:
     
      oldState.isTaskLoading = true;
      return oldState;
    case TASKDATA_DELETE_FAILURE:
     
      oldState.taskError = action.data;
      oldState.isTaskLoading = false;
      return oldState;
    case TASKDATA_UPDATE_SUCCESS:
     
      let data = [...oldState.task];
      data.forEach(i => {
        if (i.id === action.data.id) {
          i.note = action.data.note;
          i.created = action.data.created;
        }
      });
      oldState.task = data;
      oldState.isTaskLoading = false;
      return oldState;
    case TASKDATA_UPDATE_PROGRESS:
     
      oldState.isTaskLoading = true;
      return oldState;
    case TASKDATA_UPDATE_FAILURE:
     
      oldState.taskError = action.data;
      oldState.isTaskLoading = false;
      return oldState;
    default:
      return state;
  }
}
