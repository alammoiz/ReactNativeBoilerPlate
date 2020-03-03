import React, {useState} from 'react';
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

export default function Login(props) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  function onClickListener(viewId) {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  }

  async function onLoginClick() {
    // TODO: To get store data
    const storageVariable = await reactStorageService.get('LOGIN');
    setLoading(true);
    navigation.navigate('TODO');

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
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading && (
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
          onChangeText={() => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={() => setPassword(password)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={onLoginClick}>
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
