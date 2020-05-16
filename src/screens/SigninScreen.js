import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ( {navigation}) => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign In"
                errorMessage={state.errorMessage}
                submitButtonText="SignIn"
                onSubmit={signin}
            />      
            <NavLink 
                routeName="Signup"
                text="no account? go to signup"
            />      
        </View>
        
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:200
    }
});

export default SigninScreen;
