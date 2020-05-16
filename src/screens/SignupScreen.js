import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ( {navigation}) => {

    const {state, signup,clearErrorMessage} = useContext(AuthContext);    

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthForm 
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                submitButtonText="SignUp"
                onSubmit={signup}
            />      
            <NavLink 
                routeName="Signin"
                text="Already account? go to signin"
            />      
        </View>
        
    )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
