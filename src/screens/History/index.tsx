import React from 'react';
import {useGlobalSelector} from '../../contexts/GlobalContext';
import {ListTasks} from '../../components/ListTask';

export const History = () => {
  const currentTasks = useGlobalSelector(state => state.context.completedTasks);
  return <ListTasks data={currentTasks} />;
};
