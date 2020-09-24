import {
  FILTER_FAILURE,
  FILTER_PROGRESS,
  FILTER_SUCCESS
} from "../actions/filterAction";

const intialState = {
  filter: "",
  task: [],
  isLoading: true,
  error: {}
};

export function filter(state = intialState, action) {
  let oldState = {...state};
  switch (action.type) {
    case FILTER_SUCCESS:
     
      if (action.data.filter != "") {
        oldState.task = action.data.list;
        const searchText = action.data.filter.toLowerCase();
        let filteredData = oldState.task.filter(item => {
          let title = item.title.toLowerCase();
          return title.includes(searchText);
        });
        oldState.task = filteredData;
      } else {
        oldState.task = [];
      }
      oldState.isLoading = false;
      return oldState;
    case FILTER_PROGRESS:
     
      oldState.isLoading = true;
      return oldState;
    case FILTER_FAILURE:
     
      oldState.error = action.data;
      oldState.isLoading = false;
      return oldState;
    default:
      return state;
  }
}
