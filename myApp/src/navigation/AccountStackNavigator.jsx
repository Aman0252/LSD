import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';

import {
	Account,
	Settings,
	Qualifications,
	QualificationDetails,
	Languages,
	LanguageDetails,
	ChangePassword,
	Profile,
} from '../screens';
import i18n from '../i18n';
import { commonHeaderOptions } from "../helpers/navigationHelper";

const Stack = createNativeStackNavigator();


const AccountStackNavigator = () => {
	const { theme } = useTheme();
	return (
		<Stack.Navigator 
			initialRouteName="Account"
			screenOptions={({ navigation }) => commonHeaderOptions(navigation, theme)}
		>
			<Stack.Screen
				name="Account"
				component={Account}
				options={{ title: i18n.t('account'), headerShown: false }}
			/>
			<Stack.Screen
				name="Settings"
				component={Settings}
				options={{ title: i18n.t('settings'), headerShown: true }}
			/>
			<Stack.Screen
				name="Qualifications"
				component={Qualifications}
				options={{ title: i18n.t('educational_qualifications') }}
			/>
			<Stack.Screen
				name="QualificationDetails"
				component={QualificationDetails}
				options={{ title: `${i18n.t('add')} ${i18n.t('qualification')}` }}
			/>
			<Stack.Screen
				name="Languages"
				component={Languages}
				options={{ title: i18n.t('known_languages') }}
			/>
			<Stack.Screen
				name="LanguageDetails"
				component={LanguageDetails}
				options={{ title: `${i18n.t('add')} ${i18n.t('language')}` }}
			/>
			<Stack.Screen
				name="ChangePassword"
				component={ChangePassword}
				options={{ title: `${i18n.t('change_password')}` }}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ title: `${i18n.t('profile')}` }}
			/>
		</Stack.Navigator>
	);
};

export default AccountStackNavigator;

