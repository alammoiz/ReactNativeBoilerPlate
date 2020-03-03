import React, {useState} from 'react';
import {Container, Fab} from 'native-base';
import {theme} from '../../../../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddToDoButton = props => {
  const {onAddNewToDo} = props;
  return (
    <Container>
      <Fab
        style={{backgroundColor: theme.colorPrimaryDark}}
        position="bottomRight"
        onPress={() => {
          onAddNewToDo(true);
        }}>
        <Icon name="plus" />
      </Fab>
    </Container>
  );
};

export default AddToDoButton;
