import React, {useState} from 'react';
import {Container, Header, Title, Content, Body} from 'native-base';
import NewToDo from './add/newToDO';
import AddToDoButton from './add/addToDoButton';
import ToDoItem from './todoItem/todoItem';
import {connect} from 'react-redux';
import {
  addTodo,
  deleteTodo,
  updateTodo,
} from '../../../store/reducers/todo_reducer';

const ToDoAll = props => {
  const [newTodo, showNewToDo] = useState(false);
  const {todos, isShowNewTodo, screen, deleteTodo, updateTodo} = props;

  const saveToDoData = todo => {
    addNewToDo(false);
    props.addTodo(todo);
  };

  const addNewToDo = show => {
    showNewToDo(show);
  };

  return (
    <Container>
      {/*<Header>
          <Body>
            <Title>{screen}</Title>
          </Body>
        </Header>*/}
      <Content>
        {todos &&
          todos.map((todo, index) => (
            <ToDoItem
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        {newTodo && <NewToDo onPress={saveToDoData} onCancel={addNewToDo} />}
      </Content>
      {isShowNewTodo && <AddToDoButton onAddNewToDo={addNewToDo} />}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todo_reducer.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoAll);
