import React from 'react';
import {createActorContext} from '@xstate/react';
import {globalController} from '../controllers/globalController';
import {PropsWithChildren} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Task, mockData} from '../models/Task';

const GlobalStateContext = createActorContext(globalController);
const useGlobalActor = GlobalStateContext.useActor;
const useGlobalSelector = GlobalStateContext.useSelector;
const useGlobalActorRef = GlobalStateContext.useActorRef;

const GlobalStateProvider = (props: PropsWithChildren) => {
  const navigation = useNavigation<any>();

  const currentTasks = mockData.filter(item => {
    return item.completed === false;
  });

  const completedTasks = mockData.filter(item => {
    return item.completed === true;
  });

  return (
    <GlobalStateContext.Provider
      machine={globalController.withContext({
        navigationController: navigation,
        currentTasks: currentTasks as [Task],
        completedTasks: completedTasks as [Task],
      })}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export {
  useGlobalActor,
  useGlobalActorRef,
  useGlobalSelector,
  GlobalStateProvider,
};
