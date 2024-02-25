import {InterpreterFrom, MachineOptions, assign, createMachine} from 'xstate';
import {NavigationProp} from '@react-navigation/native';
import {Task} from '../models/Task';
import {RootStackParamList} from '../navigation/Navigation';

export type GlobalService = InterpreterFrom<typeof globalController>;

type GlobalContext = {
  currentTasks: [Task];
  completedTasks: [Task];
  currentTask?: Task;
  navigationController: NavigationProp<RootStackParamList>;
  themeToggle?: string;
};

type GlobalEvents =
  | {type: 'SHOW_EDITOR'}
  | {type: 'CANCEL'}
  | {type: 'SAVE'; taskID?: string}
  | {type: 'EDIT'; data: Partial<Task>}
  | {type: 'DELETE'; taskID?: string}
  | {type: 'TOGGLE'; data: Task};

const actions: MachineOptions<GlobalContext, GlobalEvents>['actions'] = {
  dismissTaskEditor: (ctx, _) =>
    ctx.navigationController.canGoBack() && ctx.navigationController.goBack(),
  openTaskEditor: (ctx, _) =>
    ctx.navigationController.navigate('TaskEditor' as any),
  editTask: assign((ctx, e) => {
    if (e.type !== 'EDIT') {
      return {};
    }
    const currentTask = {
      ...(ctx.currentTask ?? {}),
      ...e.data,
    } as Task;
    return {
      currentTask,
    };
  }),
  saveNewTask: assign((ctx, e) => {
    if (e.type !== 'SAVE') {
      return {};
    }
    if (!e.taskID && ctx.currentTask) {
      const newTask: Task = {
        id: (Math.random() * ctx.currentTask.title.length * 100).toString(),
        title: ctx.currentTask.title,
        description: ctx.currentTask.description,
        completed: false,
      };

      const updatedTasks = [...ctx.currentTasks, newTask];
      return {
        currentTasks: updatedTasks as [Task],
        currentTask: undefined,
      };
    }

    // Add code here...
    const allTasks = [
      ...ctx.currentTasks.filter(item => item.id !== ctx.currentTask?.id),
      ...ctx.completedTasks.filter(item => item.id !== ctx.currentTask?.id),
      ctx.currentTask,
    ];

    return {
      currentTask: undefined,
      currentTasks: allTasks.filter(item => item?.completed === false) as [
        Task,
      ],
      completedTasks: allTasks.filter(item => item?.completed === true) as [
        Task,
      ],
    };
  }),
  deleteTask: assign((ctx, e) => {
    if (e.type !== 'DELETE') {
      return {};
    }

    const allTasks = [
      ...ctx.currentTasks.filter(item => item.id !== e.taskID),
      ...ctx.completedTasks.filter(item => item.id !== e.taskID),
    ];

    return {
      currentTask: undefined,
      currentTasks: allTasks.filter(item => item.completed === false) as [Task],
      completedTasks: allTasks.filter(item => item.completed === true) as [
        Task,
      ],
    };
  }),
  toggleTask: assign((ctx, e) => {
    if (e.type !== 'TOGGLE') {
      return {};
    }

    const allTasks = [
      ...ctx.currentTasks.filter(item => item.id !== e.data.id),
      ...ctx.completedTasks.filter(item => item.id !== e.data.id),
      e.data,
    ];

    return {
      currentTask: undefined,
      currentTasks: allTasks.filter(item => item.completed === false) as [Task],
      completedTasks: allTasks.filter(item => item.completed === true) as [
        Task,
      ],
    };
  })
};

export const globalController = createMachine(
  {
    schema: {
      context: {} as GlobalContext,
      events: {} as GlobalEvents,
    },
    predictableActionArguments: true,
    initial: 'idle',
    states: {
      idle: {
        on: {
          SHOW_EDITOR: {
            actions: 'openTaskEditor',
            target: 'editing',
          },
          TOGGLE: {
            actions: 'toggleTask',
            target: 'idle',
          },
          CANCEL: {
            actions: 'dismissTaskEditor',
            target: 'idle',
          },
          DELETE: {
            actions: 'deleteTask',
            target: 'idle',
          },
        },
      },
      editing: {
        on: {
          EDIT: {
            actions: 'editTask',
            target: 'editing',
          },
          SAVE: {
            actions: 'saveNewTask',
            target: 'idle',
          },
          CANCEL: {
            actions: 'dismissTaskEditor',
            target: 'idle',
          },
        },
      },
    },
  },
  {
    actions,
  },
);
