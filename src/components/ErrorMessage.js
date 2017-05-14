import React, { Component } from 'react'; 
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ErrorMessage extends Component {
    constructor(props, context) {
        super(props);
        this.configureStyles();
    }

    render() {
        return (
            <View style={this.containerStyle}>
                <Icon name="exclamation-circle" size={30} color="#bb0000" style={this.iconStyle}/>
                <Text style={this.messageStyle}>{this.props.message}</Text>
            </View>
        );
    }

    configureStyles() {
        this.messageStyle = styles.message;
        this.iconStyle = styles.icon;
        this.containerStyle = styles.container;

        if (this.props.style && this.props.style.container) {
            this.containerStyle = StyleSheet.flatten([this.props.style.container, styles.container]);
        }

        if (this.props.style && this.props.style.icon) {
            this.iconStyle = StyleSheet.flatten([this.props.style.icon, styles.icon]);
        }

        if (this.props.style && this.props.style.message) {
            this.messageStyle = StyleSheet.flatten([styles.message, this.props.style.message]);
        }
    }
}

ErrorMessage.propTypes = {
    message: React.PropTypes.string.isRequired
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
        marginLeft: 4,
        color: '#ff0000'
    },
    icon: {}
};

export default ErrorMessage;