import React from 'react';
import {Container, Fab} from 'native-base';
import {theme} from '../../../../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddToDoButton extends React.Component {
  render() {
    const {onAddNewToDo} = this.props;
    return (
      <Container>
        <Fab
          style={{backgroundColor: theme.colorPrimaryDark}}
          position="bottomRight"
          onPress={() => onAddNewToDo(true)}>
          <Icon name="plus" />
        </Fab>
      </Container>
    );
  }
}
