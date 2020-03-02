import React from 'react';
import {Body, ListItem} from 'native-base';
import {Input} from 'native-base';

export default class NewToDo extends React.Component {
  constructor(props) {
    super(props);
  }

  setStateUtil = (property, value) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const {onPress, onCancel} = this.props;
    return (
      <ListItem>
        <Body>
          <Input
            placeholder="What needs to be done?"
            onChangeText={txt => this.setStateUtil('title', txt)}
            onSubmitEditing={() => onPress(this.state)}
          />
        </Body>
      </ListItem>
    );
  }
}
