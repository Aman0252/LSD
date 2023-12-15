import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Icon } from '@rneui/themed';
// import { useSelector } from 'react-redux';

import {
	ComingSoon,
} from '../screens';
import i18n from '../i18n';
import { commonTabOptions } from "../helpers/navigationHelper";
import AccountStack from "./AccountStackNavigator";
import ClassStack from "./ClassStackNavigator";
// import BackArrowImage from '../assets/images/back_arrow.png';
// import DrawerComponent from '../components/DrawerComponent';
// import useStyles from './NavigationStyles';
// import { JOB_TYPE_QUICK, JOB_TYPE_ESTIMATE } from '../constants/config';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Dashboard = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text h4>Dashboard</Text>
		</View>
	);
};



const TabBarIcon = ({ size = 23, name = 'grid-view', type = 'material', color }) => {
	return (
		<Icon
			size={size}
			type={type}
			name={name}
			color={color}
		/>
	);
};


const TabNavigator = () => {
	const { theme } = useTheme();

  return (
    <Tab.Navigator
			initialRouteName='ClassStack'
			screenOptions={({ navigation }) => commonTabOptions(navigation, theme)}
		>
      <Tab.Screen
				name="Dashboard"
				component={ComingSoon}
				options={{
					title: i18n.t('dashboard'),
					tabBarIcon: ({ color }) => <TabBarIcon name="dashboard" color={color} />,
				}}
			/>
      <Tab.Screen
				name="ClassStack"
				component={ClassStack}
				options={{
					title: i18n.t('classes'),
					tabBarIcon: ({ color }) => <TabBarIcon name="class" color={color} />,
					headerTitle: i18n.t('classes_conducted')
				}}
			/>
      <Tab.Screen
				name="Students"
				component={ComingSoon}
				options={{
					title: i18n.t('students'),
					tabBarIcon: ({ color }) => <TabBarIcon name="school" color={color} />,
				}}
			/>
      <Tab.Screen
				name="AccountStack"
				component={AccountStack}
				options={{
					title: i18n.t('account'),
					tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" type="ionicon" color={color} />,
				}}
			/>
			{/* <Tab.Screen
				name="TabOne"
				component={Dashboard}
				options={({ navigation }) => ({
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;


/* const TabNavigator = () => {
	const { theme } = useTheme();
	const { loggedIn } = useSelector(state => state.auth);
	return (
		<Stack.Navigator initialRouteName='Home' screenOptions={({ navigation }) => commonHeaderOptions(navigation, theme)}>
			<Stack.Screen name='Home' component={Home} options={({ navigation }) => commonHeaderOptions(navigation, theme)} />
			<Stack.Screen name='Jobs' component={Jobs} />
			<Stack.Screen name='JobDetails' component={JobDetails} />
			{loggedIn &&
				<>
					<Stack.Screen name='JobInitialProcess' component={JobInitialProcess} />
					<Stack.Screen name='JobProcess' component={JobProcess} />
					<Stack.Screen name='JobCheckIn' component={JobCheckIn} />
					<Stack.Screen name='Invoice' component={Invoice} />
					<Stack.Screen name='Support' component={Support} />
					<Stack.Screen name='InvoiceSuccess' component={InvoiceSuccess} />
					<Stack.Screen name='ProvideEstimate' component={ProvideEstimate} options={{
						title: i18n.t('create_estimate')
					}}/>
				</>
			}
		</Stack.Navigator>
	);
}; */





// const DrawerStack = () => {
// 	const { loggedIn } = useSelector(state => state.auth);
// 	const { theme } = useTheme();

// 	const commonNearMeOptions = {
// 		headerShadowVisible: false,
// 		headerStyle: {
// 			elevation: 0,
// 			shadowOpacity: 0,
// 			backgroundColor: theme.colors.background,
// 		},
// 		headerBackImageSource: BackArrowImage,
// 		headerShown: true
// 	};

// 	return (

// 		<Drawer.Navigator 
// 			initialRouteName="HomeStack"
// 			screenOptions={{ 
// 				headerShown: false,
// 				drawerLabelStyle: { fontSize:16, fontWeight: 'bold', color:'#232323' },
// 			}}
// 			drawerContent={(props) => <DrawerComponent {...props} />}
// 		>
// 			<Drawer.Screen 
// 				name='HomeStack' 
// 				component={TabNavigator} 
// 				options={{ 
// 					// drawerContentStyle: styles.drawerTitle,
// 					title: i18n.t('home'),
// 					drawerIcon: config => <DrawerIconComponent name="grid-view" />
// 				}}
// 			/>
// 			{loggedIn &&
// 				<Drawer.Screen
// 					name='inbox'
// 					component={ComingSoon}
// 					options={{ 
// 						title: i18n.t('inbox'),
// 						drawerIcon: config => <DrawerIconComponent name="inbox" type='feather' />
// 					}} 
// 				/>
// 			}

// 			<Drawer.Screen
// 				name='services'
// 				component={ComingSoon}
// 				options={{ 
// 					title: i18n.t('services'),
// 					drawerIcon: config => <DrawerIconComponent name="document-text-outline" type='ionicon' />
// 				}} 
// 			/>
// 			<Drawer.Screen
// 				name='products'
// 				component={ComingSoon}
// 				options={{ 
// 					title: i18n.t('products'),
// 					drawerIcon: config => <DrawerIconComponent name="archive" type='feather' />
// 				}}
// 			/>
// 			{loggedIn &&
// 				<Drawer.Screen
// 					name='activeJobs'
// 					component={ComingSoon}
// 					options={{ 
// 						title: i18n.t('active_orders_jobs'),
// 						drawerIcon: config => <DrawerIconComponent name="list" type='feather' />
// 					}} 
// 				/>
// 			}
// 			<Drawer.Screen 
// 				name='near_me'
// 				component={Jobs}
// 				initialParams={{ nearBy: true }}
// 				options={{ 
// 					title: i18n.t('near_me'),
// 					drawerIcon: config => <DrawerIconComponent name="git-pull-request" type='ionicon' />,
// 					...commonNearMeOptions
// 				}}
				
// 			/>
// 			<Drawer.Screen
// 				name='jobs_near_me'
// 				component={Jobs}
// 				initialParams={{ nearBy: true, type: JOB_TYPE_QUICK }}
// 				options={{ 
// 					title: i18n.t('jobs_near_me'),
// 					drawerIcon: config => <DrawerIconComponent name="briefcase" type='feather' />,
// 					...commonNearMeOptions

// 				}}
// 			/>
// 			<Drawer.Screen 
// 				name='estimates_near_me'
// 				component={Jobs}
// 				initialParams={{ nearBy: true, type: JOB_TYPE_ESTIMATE }}
// 				options={{ 
// 					title: i18n.t('estimates_near_me'),
// 					drawerIcon: config => <DrawerIconComponent name="document-outline" type='ionicon' />,
// 					...commonNearMeOptions
// 				}}
// 			/>
// 			{loggedIn &&
// 				<>
// 					<Drawer.Screen
// 						name='favorites'
// 						component={ComingSoon}
// 						options={{ 
// 							title: i18n.t('favorites'),
// 							drawerIcon: config => <DrawerIconComponent name="bookmark-outline" type='ionicon' />
// 						}} 
// 					/>
// 					<Drawer.Screen
// 						name='profile'
// 						component={ComingSoon}
// 						options={{ 
// 							title: i18n.t('profile'),
// 							drawerIcon: config => <DrawerIconComponent name="person-circle-outline" type='ionicon' />
// 						}} 
// 					/>
// 					<Drawer.Screen
// 						name='settings'
// 						component={ComingSoon}
// 						options={{ 
// 							title: i18n.t('settings'),
// 							drawerIcon: config => <DrawerIconComponent name="settings-outline" type='ionicon' />
// 						}} 
// 					/>
// 				</>
// 			}
// 			<Drawer.Screen 
// 				name='faq' 
// 				component={ComingSoon}
// 				options={{ 
// 					title: i18n.t('faq'),
// 					drawerIcon: config => <DrawerIconComponent name="help-circle-outline" type='ionicon' />
// 				}}
// 			/>
// 			{/* <Drawer.Screen 
// 				name='support' 
// 				component={Support}
// 				options={{ 
// 					title: i18n.t('support'),
// 					drawerIcon: config => <DrawerIconComponent name="newspaper-outline" type='ionicon' />
// 				}}
// 			/> */}
// 		</Drawer.Navigator>
// 	)
// };
