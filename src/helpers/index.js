import { getCollatedTasks } from '../constants';

export const getCollatedTasksExists = selectetProject =>
    getCollatedTasks.find(task => task.key === selectetProject);