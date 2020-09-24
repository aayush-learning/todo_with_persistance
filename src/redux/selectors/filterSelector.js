import { createSelector } from "reselect";

const selectorState = state => state.filter;

const filteredTaskaskSelector = () =>
  createSelector(
    selectorState,
    filter => filter.task
  );
const isLoadingSelector = () =>
  createSelector(
    selectorState,
    filter => filter.isLoading
  );
const errorSelector = () =>
  createSelector(
    selectorState,
    filter => filter.error
  );

export { filteredTaskaskSelector, isLoadingSelector, errorSelector };
