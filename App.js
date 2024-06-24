import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './Pages/Signup';
import LoginPage from './Pages/LoginPage';
import ForgotPassword from './Pages/Forgotpassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}