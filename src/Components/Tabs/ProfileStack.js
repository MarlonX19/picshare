import { createAppContainer, createStackNavigator } from 'react-navigation';


import Profile from './Profile';


const ProfileStack = createStackNavigator({
    Profile: Profile
});

export default createAppContainer(ProfileStack)