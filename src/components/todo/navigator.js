import React from 'react';
import {Container} from 'native-base';
import ToDoAll from './toDoAll/todoAll';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, // to load font in expo
    };
  }

  // required to load native-base font in expo
  componentDidMount() {
    // TODO: Not used yet.
    this.setState({isLoading: true});
  }

  render() {
    return (
      <Container>
        <ToDoAll isShowNewTodo={true} screen="TODO List" />
      </Container>
    );
  }
}
