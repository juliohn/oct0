import React from 'react';
import {useGlobalSelector} from '../../contexts/GlobalContext';
import {ListTasks} from '../../components/ListTask';

export const TasksList = () => {
  const currentTasks = useGlobalSelector(state => state.context.currentTasks);
  return <ListTasks data={currentTasks} />;
};
