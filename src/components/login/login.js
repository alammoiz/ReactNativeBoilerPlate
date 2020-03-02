import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import {theme} from '../../themes/theme';
import {apiService} from '../../shared/services/api.service';
import {reactStorageService} from '../../shared/services/storage.service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      dataSource: [],
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  onLoginClick = async navigation => {
    // TODO: To get store data
    const storageVariable = await reactStorageService.get('LOGIN');
    console.log(storageVariable);
    this.setState({
      loading: true,
    });
    const response = await apiService.onFetch({
      url: 'https://qaapi.modetrans.com/api/BookingDashboard/GetBookings',
      method: 'POST',
      payload: {
        Filters: [
          {
            Type: 'ValueFilter',
            Name: 'OffPageFilter',
            ValueType: 'string',
            Comparator: '',
            Value: 'MyOfficeLoads',
          },
        ],
        Pagination: {Offset: 0, Count: 25},
      },
    });

    if (response.ok) {
      // TODO: To save store data
      await reactStorageService.set('LOGIN', 'LOGIN SUCCESSFULLY');
      navigation.navigate('TODO');
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        {this.state.loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
          </View>
        )}
        <Image
          source={require('../../assets/images/signup_buckit_logo.png')}
          style={styles.logoImage}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onLoginClick(navigation)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text style={theme.textTitle}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text style={theme.textTitle}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorVeryLight,
  },
  logoImage: {
    marginBottom: 50,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  inputs: {
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: theme.colorPrimaryDark,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 18,
    paddingBottom: 18,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 15,
  },
  loginText: {
    color: 'white',
  },
});

export default Login;
