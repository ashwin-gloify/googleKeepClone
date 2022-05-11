/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Screens/homeScreen/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NewNote from './src/Screens/newNote/NewNote';
import store from './src/redux/store';
import {Provider} from 'react-redux';
const Drawer =   createDrawerNavigator();
const App = () => {
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen
              name="home"
              component={Home}
              options={{headerShown: false}}
            />
      
          <Drawer.Screen
            name="newNote"
            component={NewNote}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );


};

export default App;
