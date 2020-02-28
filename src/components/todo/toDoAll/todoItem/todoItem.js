import React from 'react';
import {StyleSheet} from 'react-native';

import {ListItem, Text, Body, Button, Icon} from 'native-base';

export default class ToDoItem extends React.Component {
  render() {
    const {todo, deleteTodo, updateTodo} = this.props;

    return (
      <ListItem>
        <Body>
          <Text>{todo.title}</Text>
        </Body>
        <Button transparent onPress={() => deleteTodo(todo)}>
          <Icon name="trash" size={30} color="#900" />
        </Button>
      </ListItem>
    );
  }
}
