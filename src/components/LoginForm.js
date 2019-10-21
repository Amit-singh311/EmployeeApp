import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, userLogin } from '../actions';

class LoginForm extends React.Component {
    onEmailChange(text) {
        console.log('action creator called');
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
       // const { email, pass} = this.props;
        this.props.userLogin(this.props.email, this.props.pass);
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner />
            )
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                login
             </Button>
        )
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                <Input 
                        secureTextEntry
                        label='password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.pass}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

const mapStateToProps = state => {
    console.log(state);
    return {
        email: state.auth.email,
        pass: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, userLogin })(LoginForm);