import {DrawerNavigator, StackNavigator} from 'react-navigation';

import SplashScreen from './SplashScreen';
import CoinListPage from "./CoinListPage";
import CoinItemPage from "./CoinItemPage";

export default DrawerNavigator({
  Main: {
    screen: SplashScreen
  },
  AllCoinsList: {
    screen: StackNavigator({
      Main: {
        screen: CoinListPage,
        navigationOptions: {
          title: 'All coins',
        }
      },
      CoinItem: {
        path: 'coins/:coin',
        screen: CoinItemPage,

      }
    })
  }
})