import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useThemeMode, Text } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { authAction } from "../redux/reducers/authSlice";
// import { navigationRef, useDoublePressToExit, useDoubleBackPressExit, useBackButtonHandler } from '../services/navigationService';
import { navigationRef } from '../services/navigationService';
import { LoadingScreen, AppIntro, ComingSoon } from '../screens';
import AuthStackNavigator from './AuthStackNavigator';
import TabNavigator from './TabNavigator';
import IntroProfileStackNavigator from './IntroProfileStackNavigator';

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Intro: 'intro',
    Login: 'signin',
    AddClassIntro: 'addClassIntro',
    ProfileStep: 'profileStep',
  },
};

const linking = {
  prefixes: ['https://mychat.com', 'mychat://'],
  config,
};


const RootNavigator = () => {
  const {
		isAppLoading,
		appIntroDone,
		loggedIn,
    isProfileSet,
		themeMode
	} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const colorScheme = useColorScheme();
  const { setMode } = useThemeMode();

  useEffect(() => {
		let themeColor = 'light';
		if (themeMode === 'default') {
			themeColor = colorScheme === 'dark' ? 'dark' : 'light';
		} else {
			themeColor = themeMode;
		}
		setMode(themeColor);
	}, [colorScheme, themeMode]);
	
	/* useEffect(() => {
		console.log("loggedIn : ", loggedIn);
	}, [loggedIn, isProfileSet]); */

  useEffect(() => {
		dispatch(authAction.getInitialState());
	}, []);

	const intitialRoute = useMemo(() => {
		if (!appIntroDone) { return "Intro"; }
		if (!loggedIn) { return "Auth"; }
		if (!isProfileSet) { return "IntroProfile"; }
		return "Main";
	}, [appIntroDone, loggedIn, isProfileSet]);


  if (isAppLoading) {
		// We haven't finished checking for the token yet
    return <LoadingScreen />
  }


	return (
		<Stack.Navigator
			initialRouteName={intitialRoute}
			screenOptions={{ headerShown: false }}
		>
			{!appIntroDone && <Stack.Screen name='Intro' component={AppIntro}/>}
			{!loggedIn && <Stack.Screen name="Auth" component={AuthStackNavigator} />}
			<Stack.Screen name="IntroProfile" component={IntroProfileStackNavigator} />
			<Stack.Screen name='Main' component={TabNavigator} />
		</Stack.Navigator>
	);
};

const Navigation = () => {
	// useDoubleBackPressExit();
	// useDoublePressToExit();
	// useBackButtonHandler((routeName) => EXIT_ROUTES.includes(routeName))
	return (
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} ref={navigationRef}>
			<RootNavigator />
		</NavigationContainer>
	);
};

export default Navigation;
