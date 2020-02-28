import React from 'react';
import {Body, CheckBox, ListItem} from 'native-base';
import {Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        {/*<Button transparent onPress={() => onCancel(false)}>
          <Icon name="trash" size={30} color="#900" />
        </Button>*/}
      </ListItem>
    );
  }
}
