import React, {useEffect} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {
  useGlobalActorRef,
  useGlobalSelector,
} from '../../contexts/GlobalContext';

import {Controller, useForm} from 'react-hook-form';

import {
  Container,
  ErrorMessage,
  Input,
  TextArea,
  Footer,
  Cancel,
  CancelText,
  Submit,
  SubmitText,
} from './styles';

export const TaskEditor = () => {
  const {send} = useGlobalActorRef();

  const currentTask = useGlobalSelector(state => state.context.currentTask);

  useEffect(() => {
    return () => send('CANCEL');
  }, [send]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    shouldUnregister: false,
  });

  const handleEditTitle = (text: string) =>
    send({type: 'EDIT', data: {title: text}});

  const handleEditDescription = (text: string) =>
    send({type: 'EDIT', data: {description: text}});

  const handleSave = () => {
    send({type: 'SAVE', taskID: currentTask?.id ? currentTask?.id : undefined});
    setTimeout(() => {
      handleCancel();
    }, 100);
  };

  const handleCancel = () => send({type: 'CANCEL'});

  return (
    <Container>
      <Controller
        name="title"
        rules={{
          required: {
            value: true,
            message: 'Title is required!',
          },
          maxLength: {
            value: 20,
            message: 'The maximum length, 20 characters',
          },
          minLength: {
            value: 3,
            message: 'The minimum size, 3 characters',
          },
        }}
        control={control}
        defaultValue={null}
        render={({field: {onChange}}) => (
          <Input
            value={currentTask?.title}
            onChangeText={txt => {
              handleEditTitle(txt);
              onChange(txt);
            }}
          />
        )}
      />

      {errors.title && (
        <ErrorMessage>{errors.title?.message?.toString()}</ErrorMessage>
      )}

      <Controller
        name="description"
        rules={{
          minLength: {
            value: 10,
            message: 'The minimum size, 10 characters',
          },
        }}
        control={control}
        defaultValue={null}
        render={({field: {onChange}}) => (
          <TextArea
            value={currentTask?.description ?? ''}
            onChangeText={txt => {
              handleEditDescription(txt);
              onChange(txt);
            }}
          />
        )}
      />

      {errors.description && (
        <ErrorMessage>{errors.description?.message?.toString()}</ErrorMessage>
      )}

      <Footer>
        <Cancel
          onPress={() => {
            handleCancel();
          }}>
          <CancelText>Cancel</CancelText>
        </Cancel>
        <Submit onPress={handleSubmit(handleSave)}>
          <SubmitText>Save</SubmitText>
        </Submit>
      </Footer>
    </Container>
  );
};
