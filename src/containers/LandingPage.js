import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import utils, { connectToRedux } from '../lib/utils';
import { Navbar } from 'navbar-native';
import ErrorMessage from '../components/ErrorMessage';

class LandingPage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props, context) {
    super(props);
    this.username = '';
    console.log('this.props: ', this.props)
  }

  textChange(text) {
    this.username = text;
  }

  findProfile() {
    if (utils.usernameIsValid(this.username)) {
      this.props.loading();
      this.props.fetchProfile(this.username, this.props.navigation);
    } else {
      this.props.invalidProfile();
    }
  }

  renderErrorMessage() {
    return this.props.profile.usernameInvalid || this.props.profile.notFound ? (<ErrorMessage message={this.props.profile.notFound ? 'User not found' : 'Please Enter a username'} style={errorIcon}/>) : null;
  }

  inputStyle() {
    return this.props.profile.usernameInvalid ? {borderColor: '#bb0000'} : {}
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image 
              source={require('../assets/images/github.png')}
              style={styles.githublogo}
            />
          </View>
          <Text style={styles.welcome} >
            Enter Username
          </Text>
          <TextInput 
            style={[styles.input, this.inputStyle()]}
            onFocus={this.props.profileValid}
            onChangeText={this.textChange.bind(this)}
            underlineColorAndroid='rgba(0,0,0,0)'  />
          { this.renderErrorMessage() }
          <TouchableHighlight 
            onPress={this.findProfile.bind(this)}
            style={styles.searchButton}>
            <Text style={styles.buttonText}>{ this.props.profile.loading ? 'Searching...' : 'Find Profile' }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 30
  },
  outerContainer: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: '#d7d7d7',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchButton: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#171515'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17
  },
  githublogo: {
    width: 80,
    height: 80
  }
});

const errorIcon = {
  container: {
    marginTop: 3
  },
  icon: {
    marginRight: 8
  }
}


const LandingPageContainer = connectToRedux(LandingPage);
export default LandingPageContainer;