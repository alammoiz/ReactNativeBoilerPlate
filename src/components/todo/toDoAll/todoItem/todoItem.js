import React from 'react';
import {ListItem, Text, Body, Button, Icon} from 'native-base';

const ToDoItem = props => {
  const {todo, deleteTodo, updateTodo} = props;

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
};

export default ToDoItem;
