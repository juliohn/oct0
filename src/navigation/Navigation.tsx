import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import {History} from '../screens/History';
import {TaskEditor} from '../screens/TaskEditor';
import {TasksList} from '../screens/TaskList';
import {Settings} from '../screens/Settings';
import {useGlobalActorRef} from '../contexts/GlobalContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from 'styled-components';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {backgroundColor: colors.backgroundPrimary, justifyContent: 'center'},
        ],
      }}
      sceneContainerStyle={{backgroundColor: colors.backgroundPrimary}}>
      <Tab.Screen
        name="List"
        component={TasksList}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <MaterialIcons
              size={24}
              name={'checklist-rtl'}
              color={colors.backgroundOpposite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <MaterialIcons
              size={24}
              name={'history'}
              color={colors.backgroundOpposite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <MaterialIcons
              size={24}
              name={'settings'}
              color={colors.backgroundOpposite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AddNewTask = () => {
  const {send} = useGlobalActorRef();

  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;

  return (
    <TouchableOpacity onPress={() => send('SHOW_EDITOR')}>
      <MaterialIcons
        size={28}
        name={'post-add'}
        color={colors.backgroundOpposite}
      />
    </TouchableOpacity>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {
  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;
  return (
    <RootStack.Navigator
      screenOptions={{
        headerTitle: '🗓️',
        headerStyle: [{backgroundColor: colors.backgroundPrimary}],
      }}>
      <RootStack.Group
        screenOptions={{
          headerRight: AddNewTask,
        }}>
        <RootStack.Screen name="Tabs" component={Tabs} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          contentStyle: {backgroundColor: colors.backgroundPrimary},
        }}>
        <Tab.Screen name="TaskEditor" component={TaskEditor} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export type RootStackParamList = {
  TaskEditor: {};
  Tabs: {};
};
