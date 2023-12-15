import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';

import {
	ProfileStep,
	AddClass,
	ClassDetails,
} from '../screens';
import i18n from '../i18n';



const Stack = createNativeStackNavigator();

/* 
headerStyle: {
		// elevation: 0,
		// shadowOpacity: 0,
		backgroundColor: theme.colors.appBackground,
	},
*/

const IntroProfileStackNavigator = () => {
	const { theme } = useTheme();

	return (
		<Stack.Navigator
			initialRouteName="ProfileStep"
			screenOptions={{
				headerLargeTitle: true,
				title: i18n.t('build_profile'),
				// headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: theme.colors.appBackground,
				},
				headerTitleStyle: {
					color: theme.colors.black,
					textAlign: 'center',
				},
			}}
		>
			<Stack.Screen name='ProfileStep' component={ProfileStep} />
			<Stack.Screen name='AddClassIntro' component={AddClass} />
			<Stack.Screen name='ClassDetails' component={ClassDetails} />
		</Stack.Navigator>
	)
};
export default IntroProfileStackNavigator;