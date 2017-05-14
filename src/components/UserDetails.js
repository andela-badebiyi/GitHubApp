import React, { Component } from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class UserDetails extends Component {
    constructor(props, context) {
        super(props);
        this.user = this.props.user;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.dataSource = ds.cloneWithRows(this.fetchListData());
    }

    fetchListData() {
        return [
            { icon: 'user', value: this.user.name },
            { icon: 'briefcase', value: this.user.company },
            { icon: 'github', value: `${this.user.public_repos} repositories` },
            { icon: 'map-marker', value: this.user.location },
            { icon: 'envelope', value: this.user.email},
            { icon: 'clock-o', value: this.user.created_at },
            { icon: 'group', value: `${this.user.followers} followers` },
            { icon: 'blind', value: `${this.user.following} following` }
        ];
    }

    renderRow(rowData) {
        return (
            <View style={styles.row}>
                <Icon name={rowData.icon} size={30} /> 
                <Text style={styles.text}>{rowData.value || 'Unavailable'}</Text>
            </View>
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    text: {
        marginLeft: 10
    }
});