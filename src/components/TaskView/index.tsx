import React, {useState, useMemo, useCallback} from 'react';

import {Animated} from 'react-native';

import {Task} from '../../models/Task';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ToCamelCase} from '../../helpers/functions';

import {ConfirmModal} from '../ConfirmModal';

import {useTheme} from 'styled-components';

import {
  Container,
  Main,
  TitleContainer,
  Title,
  DescriptionContainer,
  Description,
  ActionsContainer,
  ActionButton,
} from './styles';

export const TaskView = ({
  task,
  handleToggleButton,
  handleEditButton,
  handleDeleteButton,
}: {
  task: Task;
  handleToggleButton: (data: Task) => void;
  handleEditButton: (data: Task) => void;
  handleDeleteButton: (taskID: string) => void;
}) => {
  const colorUseTheme = useTheme();
  const {colors} = colorUseTheme;

  const [modalVisible, setModalVisible] = useState(false);

  const opacity = useState(new Animated.Value(1))[0];

  const fadeOutToggleTask = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      handleToggleButton(task);
    }, 300);
  };

  const handleSubmit = useCallback(() => {
    handleDeleteButton(task.id);
  }, [handleDeleteButton, task.id]);

  const renderModalConfirmation = useMemo(
    () =>
      modalVisible && (
        <ConfirmModal
          handleSubmit={handleSubmit}
          handleCancel={() => setModalVisible(false)}
          modalVisible={modalVisible}
          mainMessage={
            'When this item is deleted it will not be possible to recover it.'
          }
          questionMessage={'Do you want continue?'}
          type={'Negative'}
        />
      ),
    [handleSubmit, modalVisible],
  );

  return (
    <Container>
      <Animated.View style={[{opacity}]}>
        <Main>
          <TitleContainer>
            <Title>{ToCamelCase(task.title)}</Title>
          </TitleContainer>
          <DescriptionContainer>
            <Description numberOfLines={2}>
              {ToCamelCase(task.description)}
            </Description>
          </DescriptionContainer>
        </Main>

        <ActionsContainer>
          <ActionButton onPress={() => fadeOutToggleTask()}>
            <MaterialIcons
              size={24}
              name={task.completed ? 'restore' : 'check-circle'}
              color={colors.success}
            />
          </ActionButton>
          <ActionButton onPress={() => handleEditButton(task)}>
            <MaterialIcons
              size={24}
              name="edit-document"
              color={colors.backgroundOpposite}
            />
          </ActionButton>
          <ActionButton onPress={() => setModalVisible(true)}>
            <MaterialIcons
              size={24}
              name="delete-forever"
              color={colors.danger}
            />
          </ActionButton>
        </ActionsContainer>

        {renderModalConfirmation}
      </Animated.View>
    </Container>
  );
};
