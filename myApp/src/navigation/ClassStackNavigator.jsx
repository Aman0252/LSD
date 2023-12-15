import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';

import {
	ConductedClasses,
	ConductedClassDetails
} from '../screens';
import i18n from '../i18n';
import { commonHeaderOptions } from "../helpers/navigationHelper";

const Stack = createNativeStackNavigator();


const ClassStackNavigator = () => {
	const { theme } = useTheme();
	return (
		<Stack.Navigator 
			initialRouteName="ConductedClasses"
			screenOptions={({ navigation }) => commonHeaderOptions(navigation, theme)}
		>
			<Stack.Screen
				name="ConductedClasses"
				component={ConductedClasses}
				options={{ title: i18n.t('classes_conducted') }}
			/>
			<Stack.Screen
				name="ConductedClassDetails"
				component={ConductedClassDetails}
				options={{ title: i18n.t('classes_conducted') }}
			/>
		</Stack.Navigator>
	);
};

export default ClassStackNavigator;

