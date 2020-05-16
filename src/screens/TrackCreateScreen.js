//import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import { StyleSheet, Text } from 'react-native';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';
import { FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {

    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);
    const [err] = useLocation(isFocused || recording, callback);
    
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Map />
            {err ? <Text>Please Enable Location</Text>:null}
            <TrackForm />
        </SafeAreaView>
    )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon : <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
