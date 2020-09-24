export const FILTER_FAILURE = "FILTER_FAILURE";
export const FILTER_PROGRESS = "FILTER_PROGRESS";
export const FILTER_SUCCESS = "FILTER_SUCCESS";

export const filterProgress = () => ({
  type: FILTER_PROGRESS
});

export const filterSuccess = (filter, list) => ({
  type: FILTER_SUCCESS,
  data: {
    filter,
    list
  }
});

export const filterFailure = error => ({
  type: FILTER_FAILURE,
  data: error
});

export const filter = (filter, list) => ({
  type: FILTER_SUCCESS,
  data: {
    filter,
    list
  }
});