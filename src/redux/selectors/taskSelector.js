import { createSelector } from "reselect";

const selectorState = state => state.task;

const taskSelector = () =>
  createSelector(
    selectorState,
    task => task.task
  );
const isTaskLoadingSelector = () =>
  createSelector(
    selectorState,
    task => task.isTaskLoading
  );
const taskErrorSelector = () =>
  createSelector(
    selectorState,
    task => task.taskError
  );

export { taskSelector, isTaskLoadingSelector, taskErrorSelector };
