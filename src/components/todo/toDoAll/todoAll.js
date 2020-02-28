import React from 'react';
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

class ToDoAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: false,
    };
  }

  saveToDoData = todo => {
    this.addNewToDo(false);
    this.props.addTodo(todo);
  };

  addNewToDo = show => {
    this.setState({
      newTodo: show,
    });
  };

  render() {
    const {newTodo} = this.state;
    const {todos, isShowNewTodo, screen, deleteTodo, updateTodo} = this.props;

    let listItems = [];
    if (todos.length > 0) {
      listItems = todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ));
    }

    return (
      <Container>
        {/*<Header>
          <Body>
            <Title>{screen}</Title>
          </Body>
        </Header>*/}
        <Content>
          {listItems}
          {newTodo && (
            <NewToDo onPress={this.saveToDoData} onCancel={this.addNewToDo} />
          )}
        </Content>
        {isShowNewTodo && <AddToDoButton onAddNewToDo={this.addNewToDo} />}
      </Container>
    );
  }
}

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
