import React from 'react';
import Home from './src/Screens/homeScreen/home';
import NewNote from './src/Screens/newNote/NewNote';
import EditNote from './src/Screens/editNote/EditNote';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

//Navigators
const Stack = createStackNavigator();
const Drawer =   createDrawerNavigator();

const DrawerMenu = () =>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />

      
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer">
          <Stack.Screen
            name="Drawer"
            component={DrawerMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditNote"
            component={EditNote}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="newNote"
            component={NewNote}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );


};

export default App;
