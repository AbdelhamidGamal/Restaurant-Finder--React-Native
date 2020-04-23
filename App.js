import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResturantScreen from './src/screens/ResturantScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Resturant: ResturantScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Bussiness Search',
    },
  }
);

export default createAppContainer(navigator);
