import React, {useState, useEffect} from 'react';
import {Container} from 'native-base';
import ToDoAll from './toDoAll/todoAll';

const Navigation = props => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    return () => {
      console.log(
        'Component will unmount---- unsubscribe value and other things',
      );
    };
  }, []);

  return (
    <Container>
      <ToDoAll isShowNewTodo={true} screen="TODO List" />
    </Container>
  );
};

export default Navigation;
