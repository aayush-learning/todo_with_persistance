import { createSelector } from "reselect";

const selectorState = state => state.user;

const userSelector = () =>
  createSelector(
    selectorState,
    user => user.user
  );
const isUserLoadingSelector = () =>
  createSelector(
    selectorState,
    user => user.isUserLoading
  );
const userErrorSelector = () =>
  createSelector(
    selectorState,
    user => user.userError
  );

export { userSelector, isUserLoadingSelector, userErrorSelector };
