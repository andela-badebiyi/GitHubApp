import React, { Component } from 'react';
import LandingPageContainer from './LandingPage'
import UserProfileContainer from './UserProfile';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

const Main = StackNavigator({
  Home: {screen: LandingPageContainer},
  Profile: {screen: UserProfileContainer}
});

class MainNavigationState extends Component {
  constructor(props, context) {
    super(props);
    console.log('props: ', this.props);
  }

  render() {
    return(
      <Main />
    );
  }
}

export default MainNavigationState;