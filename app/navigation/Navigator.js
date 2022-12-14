import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../secreens/Login';
import Register from '../secreens/Register';




const stackNavigatorOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },


},
    {
        defaultNavigationOptions: stackNavigatorOptions
    }
);
export default createAppContainer(AppNavigator);