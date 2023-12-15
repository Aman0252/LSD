import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Login,
	Register,
	VerifyOtp,
	ForgotPassword,
	ResetPassword
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Login} options={{ title: 'Login' }} />
			<Stack.Screen name='Register' component={Register} options={{ title: 'Register' }} />
			<Stack.Screen name='VerifyOtp' component={VerifyOtp} options={{ title: 'Verify OTP' }} />
			<Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ title: 'Forgot Password' }} />
			<Stack.Screen name='ResetPassword' component={ResetPassword} options={{ title: 'Reset Password' }} />
		</Stack.Navigator>
	)
};
export default AuthStack;