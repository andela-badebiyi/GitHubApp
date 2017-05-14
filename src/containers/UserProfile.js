import React, { Component } from 'react';
import UserDetails from '../components/UserDetails'
import { connectToRedux } from '../lib/utils';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

class UserProfile extends Component {
    static navigationOptions = {
        title: 'User Profile'
    }

    constructor(props, context) {
        super(props);
        this.user = this.props.profile.user;
    }

    componentHasMounted() {
        if (!this.user) {
            this.props.navigator.navigate('Home');
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Image 
                    source={{uri: this.user.avatar_url}}
                    style={styles.avatar}
                />
                <UserDetails user={this.user} />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>List Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Open On Github</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 10
    }, 
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#171515',
        width: '90%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 17
    }
});
const UserProfileContainer = connectToRedux(UserProfile);
export default UserProfileContainer;



const dummData = {
    avatar_url: "https://avatars2.githubusercontent.com/u/16083774?v=3",
    bio: null,
    blog: "",
    company: "Andela",
    created_at: "2015-11-30T14:07:31Z",
    email: null,
    events_url: "https://api.github.com/users/andela-badebiyi/events{/privacy}",
    followers: 2,
    followers_url: "https://api.github.com/users/andela-badebiyi/followers",
    following: 0,
    following_url: "https://api.github.com/users/andela-badebiyi/following{/other_user}",
    gists_url: "https://api.github.com/users/andela-badebiyi/gists{/gist_id}",
    gravatar_id: "",
    hireable: null,
    html_url: "https://github.com/andela-badebiyi",
    id: 16083774,
    location: "Lagos, Nigeria",
    login: "andela-badebiyi",
    name: "Adebiyi Bodunde",
    organizations_url: "https://api.github.com/users/andela-badebiyi/orgs",
    public_gists: 0,
    public_repos: 25,
    received_events_url: "https://api.github.com/users/andela-badebiyi/received_events",
    repos_url: "https://api.github.com/users/andela-badebiyi/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/andela-badebiyi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/andela-badebiyi/subscriptions",
    type: "User",
    updated_at: "2017-04-18T09:01:23Z",
    url: "https://api.github.com/users/andela-badebiyi"
}