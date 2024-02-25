import React from 'react';
import {FlatList} from 'react-native';
import {useGlobalActorRef} from '../../contexts/GlobalContext';

import {TaskView} from '../TaskView';
import {Task} from '../../models/Task';

export const ListTasks = ({data}: {data: [Task]}) => {

  const {send} = useGlobalActorRef();

  const handleChangeStatus = (task: Task) => {
    const updateTask = {
      ...task,
      completed: !task.completed,
    };

    send({type: 'TOGGLE', data: updateTask});
  };

  const handleEditTask = (task: Task) => {
    send({type: 'SHOW_EDITOR'});
    send({type: 'EDIT', data: task});
  };

  const handleDeleteTask = (taskID: string) => {
    send({type: 'DELETE', taskID});
  };


  return (
    <FlatList
      data={data}
      style={{margin:12}}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TaskView
          task={item}
          handleToggleButton={handleChangeStatus}
          handleEditButton={handleEditTask}
          handleDeleteButton={handleDeleteTask}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
